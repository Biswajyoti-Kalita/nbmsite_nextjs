"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import EaroAdPlayer from "@/components/bfcm/EaroAdPlayer";
import AnimatedUrlInput, {
  EARO_URL_PLACEHOLDER_PHRASES,
} from "@/components/bfcm/AnimatedUrlInput";
import {
  classifyAdInput,
  EMPTY_URL_TOOLTIP_MESSAGE,
} from "@/lib/validate-ad-input";
import {
  extractJobId,
  getEaroApiUrl,
  type EaroRecommendation,
  pollRecommendations,
} from "@/lib/earo-api";

const GENERATING_STEPS = [
  {
    title: "Writing your script",
    description: "Reading your brief and scripting the first version…",
  },
  {
    title: "Selecting a voice",
    description: "Matching voice to your language, tone, and goal…",
  },
  {
    title: "Adding music",
    description: "Choosing a track and mixing your audio ad…",
  },
  {
    title: "Finishing up",
    description: "Almost there — your ad is being produced…",
  },
  {
    title: "Your ad is ready",
    description: "Listen to the first version below.",
  },
];

function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13.7866 6.68896C9.61695 5.39062 8.58399 4.35742 7.28516 0.187498C7.26084 0.131771 7.2208 0.0843486 7.16993 0.0510441C7.11906 0.0177396 7.05958 0 6.99878 0C6.93798 0 6.8785 0.0177396 6.82763 0.0510441C6.77676 0.0843486 6.73672 0.131771 6.7124 0.187498C5.41381 4.35742 4.38086 5.39062 0.210939 6.68896C0.14981 6.708 0.0963682 6.74608 0.0584188 6.79765C0.0204693 6.84921 0 6.91156 0 6.97559C0 7.03961 0.0204693 7.10196 0.0584188 7.15352C0.0963682 7.20509 0.14981 7.24317 0.210939 7.26221C4.38086 8.56006 5.41381 9.59326 6.7124 13.7637C6.7315 13.8247 6.76957 13.878 6.82109 13.9159C6.8726 13.9537 6.93486 13.9741 6.99878 13.9741C7.06271 13.9741 7.12496 13.9537 7.17648 13.9159C7.22799 13.878 7.26606 13.8247 7.28516 13.7637C8.58399 9.59326 9.61695 8.56006 13.7866 7.26221C13.8478 7.24317 13.9012 7.20509 13.9391 7.15352C13.9771 7.10196 13.9976 7.03961 13.9976 6.97559C13.9976 6.91156 13.9771 6.84921 13.9391 6.79765C13.9012 6.74608 13.8478 6.708 13.7866 6.68896Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InfoIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g clipPath="url(#earo-info-clip)">
        <path
          d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
          stroke="#9CA3AF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.6667V8"
          stroke="#9CA3AF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 5.33337H8.00667"
          stroke="#9CA3AF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="earo-info-clip">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ValidationTooltip({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-[10px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#111827] shadow-lg z-20"
    >
      {message}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-full -mt-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-[#E5E7EB] bg-white"
      />
    </div>
  );
}

type AdStatus = "Idle" | "Generated" | "Error";

export default function EaroModule() {
  const [adUrl, setAdUrl] = useState("");
  const [adStatus, setAdStatus] = useState<AdStatus>("Idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showEmptyTooltip, setShowEmptyTooltip] = useState(false);
  const [shareJobId, setShareJobId] = useState("");
  const [recommendationsReady, setRecommendationsReady] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [adName, setAdName] = useState("");
  const [variants, setVariants] = useState<
    [EaroRecommendation | null, EaroRecommendation | null, EaroRecommendation | null]
  >([null, null, null]);

  const pollAbortRef = useRef(0);

  const tryAgain = () => {
    pollAbortRef.current += 1;
    setAdStatus("Idle");
    setShareJobId("");
    setRecommendationsReady(false);
    setVariants([null, null, null]);
    setHasGenerated(false);
    setAdName("");
    setErrorMessage(null);
  };

  const generateAd = async () => {
    const validation = classifyAdInput(adUrl);
    if (validation) {
      setShowEmptyTooltip(validation.kind === "empty");
      setErrorMessage(
        validation.kind === "invalid" ? validation.message : null,
      );
      return;
    }

    setErrorMessage(null);
    setShowEmptyTooltip(false);
    setShareJobId("");
    setRecommendationsReady(false);
    setVariants([null, null, null]);
    setHasGenerated(false);
    setAdName("");

    const pollGeneration = ++pollAbortRef.current;
    setAdStatus("Generated");

    const apiBase = getEaroApiUrl();
    const trimmed = adUrl.trim();

    try {
      const response = await fetch(`${apiBase}/api/creative/v2/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmed }),
      });
      const data = await response.json().catch(() => ({}));

      if (data?.error) {
        setErrorMessage(
          typeof data.error === "string"
            ? data.error
            : "Failed to start ad generation",
        );
        setAdStatus("Error");
        return;
      }

      const jobId = extractJobId(data);
      if (!jobId) {
        setErrorMessage("No job id returned from the server.");
        setAdStatus("Error");
        return;
      }

      setShareJobId(jobId);

      const recommendations = await pollRecommendations(jobId, apiBase);
      if (pollAbortRef.current !== pollGeneration) return;

      const next: [
        EaroRecommendation | null,
        EaroRecommendation | null,
        EaroRecommendation | null,
      ] = [
        recommendations[0] ?? null,
        recommendations[1] ?? null,
        recommendations[2] ?? null,
      ];

      if (!next[0]) {
        setErrorMessage("No ad recommendations were returned.");
        setAdStatus("Error");
        return;
      }

      setVariants(next);
      setRecommendationsReady(true);
      if (next[0]?.adName) {
        setAdName(next[0].adName);
      }
    } catch (error) {
      if (pollAbortRef.current !== pollGeneration) return;
      console.error(error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't finish your ad in time. Please try again.",
      );
      setAdStatus("Error");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void generateAd();
  };

  return (
    <section className="w-full">
      <div className="bg-white rounded-[20px] border border-[#E8E0F0] p-6 md:p-8 shadow-[0_4px_20px_rgba(80,40,100,0.05)]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
          <div className="flex-1 min-w-0">
            {adStatus === "Idle" && (
              <>
                <div className="flex flex-row items-start justify-between gap-4">
                  <div>
                    <h2 className="text-[#1A1A1A] text-[22px] md:text-[26px] leading-[1.25] font-bold mb-2">
                      Want to hear how your brand could sound?
                    </h2>
                    <p className="text-[#5B4B73] text-[15px] leading-[1.5] mb-5">
                      Create an audio ad in seconds with EARO, our self-serve audio
                      advertising platform.
                    </p>
                  </div>
                  <div className="shrink-0 flex items-start justify-start lg:pt-2">
                    <Image
                      src="/assets/images/earo-logo.png"
                      alt="EARO"
                      width={120}
                      height={120}
                      className="w-[88px] h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 items-start w-full">
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="relative flex flex-col md:flex-row justify-between items-center w-full rounded-[14px] bg-[#EDEFF5] p-2 md:py-2 md:pl-6 md:pr-2 gap-2 border border-[#D5D9E3] focus-within:border-[#0A0A0A]"
                  >
                    {showEmptyTooltip && (
                      <ValidationTooltip message={EMPTY_URL_TOOLTIP_MESSAGE} />
                    )}
                    <AnimatedUrlInput
                      id="bfcm-earo-url"
                      name="bfcm-earo-url"
                      type="text"
                      maxLength={500}
                      phrases={EARO_URL_PLACEHOLDER_PHRASES}
                      className="bg-transparent outline-none border-none min-w-0 w-full py-3 md:py-0 px-1 md:px-0 text-[16px] text-[#0A0A0A] placeholder:text-[#9CA3AF]"
                      value={adUrl}
                      onChange={(e) => {
                        setAdUrl(e.target.value);
                        setErrorMessage(null);
                        setShowEmptyTooltip(false);
                      }}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full md:w-auto min-w-[216px] h-[52px] flex flex-row items-center justify-center gap-2 rounded-[8px] bg-[#7AE8A8] text-[#0A0A0A] text-base font-medium hover:bg-[#5BA882] hover:text-white transition-colors cursor-pointer"
                    >
                      Create a free ad
                      <StarIcon />
                    </button>
                  </form>

                  {errorMessage ? (
                    <p className="flex flex-row items-center justify-start gap-2 text-[#B91C1C] font-[450] text-[11px] md:text-sm w-full max-w-[600px]">
                      <InfoIcon />
                      <span>{errorMessage}</span>
                    </p>
                  ) : (
                    <p className="flex flex-row items-center justify-start gap-2 text-[#9CA3AF] font-[450] text-[11px] md:text-sm w-full max-w-[600px]">
                      <InfoIcon />
                      <span>
                        Hear your audio ad in 60 seconds. Free. No credit card
                        required.
                      </span>
                    </p>
                  )}
                </div>
              </>
            )}

            {adStatus === "Generated" && (
              <div className="flex flex-col gap-6 w-full">
                <div>
                  {hasGenerated && adName ? (
                    <>
                      <h2 className="text-[#1A1A1A] text-[22px] md:text-[28px] leading-[1.25] font-bold mb-2">
                        Your{" "}
                        <span className="text-[#36AB45]">{adName}</span> ads are
                        ready
                      </h2>
                      <p className="text-[#5B4B73] text-[15px] leading-[1.5]">
                        We generated the audio ads below using just your URL.
                        Launch in EARO to customize voice, tone, music, and more.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-[#1A1A1A] text-[22px] md:text-[28px] leading-[1.25] font-bold mb-2">
                        Get ready,{" "}
                        <span className="text-[#36AB45]">
                          in less than two minutes
                        </span>{" "}
                        you can be on air
                      </h2>
                      <p className="text-[#5B4B73] text-[15px] leading-[1.5]">
                        Creating your audio ad variants now…
                      </p>
                    </>
                  )}
                </div>

                <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-row items-center justify-between gap-2">
                    <h3 className="font-bold text-[20px] md:text-[24px] text-[#0F172A]">
                      {adName && hasGenerated ? adName : "Your Brand"}
                    </h3>
                  </div>

                  {([0, 1, 2] as const).map((index) => {
                    const variant = variants[index];
                    if (!variant && recommendationsReady) return null;

                    const stepsInterval =
                      index === 0 ? 3000 : index === 1 ? 3500 : 3200;

                    return (
                      <EaroAdPlayer
                        key={`${shareJobId}-${index}`}
                        steps={GENERATING_STEPS}
                        variant={variant}
                        shareJobId={shareJobId}
                        isPreparing={!recommendationsReady}
                        stepsInterval={stepsInterval}
                        version={index}
                        onTryAgain={tryAgain}
                        onGenerated={() => {
                          setHasGenerated(true);
                          if (variant?.adName) setAdName(variant.adName);
                        }}
                      />
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={tryAgain}
                  className="self-start text-[#5B4B73] text-sm underline hover:text-[#1A1A1A] cursor-pointer"
                >
                  Create another ad
                </button>
              </div>
            )}

            {adStatus === "Error" && (
              <div className="flex flex-col gap-4 max-w-[520px]">
                <h2 className="text-[#1A1A1A] text-[22px] font-bold">
                  Oops! We hear you loud and clear... 🎧
                </h2>
                <p className="text-[#5B4B73] text-[15px] leading-[1.5]">
                  ...but our system just hit a sour note. Please try again.
                </p>
                {errorMessage ? (
                  <p className="text-[#B91C1C] text-sm">{errorMessage}</p>
                ) : null}
                <button
                  type="button"
                  onClick={tryAgain}
                  className="self-start h-[44px] px-5 rounded-[8px] bg-[#7AE8A8] text-[#0A0A0A] text-sm font-medium hover:bg-[#5BA882] transition-colors cursor-pointer"
                >
                  Try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
