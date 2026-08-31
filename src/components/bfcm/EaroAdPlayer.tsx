"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import {
  type EaroRecommendation,
  generateFinalAudio,
  getEaroApiUrl,
  getEaroAppUrl,
} from "@/lib/earo-api";

export type GeneratingStep = {
  title: string;
  description: string;
};

function plainScriptLabel(script: string): string {
  const line = script.split("\n")[0] ?? script;
  const stripped = line.replace(/\[[^\]]+\]/g, "").trim();
  return stripped.slice(0, 48) || "Your ad";
}

function LoaderIcon({ className = "w-6 h-6" }: { className?: string }) {
  const clipId = useId();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin shrink-0 ${className}`}
      aria-hidden="true"
    >
      <g clipPath={`url(#${clipId})`}>
        <g transform="matrix(0 0.0300001 -0.0300001 0 30.0001 30.0001)">
          <foreignObject x="-1020" y="-1020" width="2040" height="2040">
            <div
              style={{
                background:
                  "conic-gradient(from 90deg,rgba(54, 171, 69, 1) 0deg,rgba(54, 171, 69, 1) 63.243deg,rgba(255, 255, 255, 0) 360deg)",
                height: "100%",
                width: "100%",
                opacity: 1,
              }}
            />
          </foreignObject>
        </g>
      </g>
      <path d="M60.0001 30.0001C60.0001 46.5686 46.5686 60.0001 30.0001 60.0001C13.4315 60.0001 0 46.5686 0 30.0001C0 13.4315 13.4315 0 30.0001 0C46.5686 0 60.0001 13.4315 60.0001 30.0001ZM8.97082 30.0001C8.97082 41.6142 18.3859 51.0293 30.0001 51.0293C41.6142 51.0293 51.0293 41.6142 51.0293 30.0001C51.0293 18.3859 41.6142 8.97082 30.0001 8.97082C18.3859 8.97082 8.97082 18.3859 8.97082 30.0001Z" />
      <circle cx="30.2998" cy="55.5" r="4.50001" fill="#36AB45" />
      <defs>
        <clipPath id={clipId}>
          <path d="M60.0001 30.0001C60.0001 46.5686 46.5686 60.0001 30.0001 60.0001C13.4315 60.0001 0 46.5686 0 30.0001C0 13.4315 13.4315 0 30.0001 0C46.5686 0 60.0001 13.4315 60.0001 30.0001ZM8.97082 30.0001C8.97082 41.6142 18.3859 51.0293 30.0001 51.0293C41.6142 51.0293 51.0293 41.6142 51.0293 30.0001C51.0293 18.3859 41.6142 8.97082 30.0001 8.97082C18.3859 8.97082 8.97082 18.3859 8.97082 30.0001Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GeneratingStepRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-center justify-start gap-4 p-4 rounded-[12px] bg-[#36AB4514] border border-[#36AB451A] w-full">
      <LoaderIcon className="w-6 h-6" />
      <div className="flex flex-col gap-1">
        <span className="font-medium text-[16px] leading-[24px] text-[#0A0A0A]">
          {title}
        </span>
        <span className="font-[450] text-[14px] leading-[18px] text-[#6B7280]">
          {description}
        </span>
      </div>
    </div>
  );
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function EaroAudioPlayer({
  title,
  audioUrl,
}: {
  title: string;
  audioUrl: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationSec, setDurationSec] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !audioUrl.trim()) return;

    const ws = WaveSurfer.create({
      container: el,
      url: audioUrl,
      height: 36,
      waveColor: "#D1D5DC",
      progressColor: "#36AB45",
      cursorColor: "#36AB45",
      cursorWidth: 2,
      barWidth: 2,
      barGap: 1,
      barRadius: 1,
      dragToSeek: true,
      normalize: true,
    });

    wavesurferRef.current = ws;

    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("finish", () => setIsPlaying(false));
    ws.on("ready", (d) => setDurationSec(d));
    ws.on("timeupdate", (t) => setCurrentTime(t));

    return () => {
      ws.destroy();
      wavesurferRef.current = null;
    };
  }, [audioUrl]);

  const togglePlay = useCallback(() => {
    if (!wavesurferRef.current) return;
    void wavesurferRef.current.playPause();
  }, []);

  const timeLabel =
    durationSec > 0
      ? `${formatTime(currentTime)} / ${formatTime(durationSec)}`
      : formatTime(currentTime);

  return (
    <div className="w-full flex flex-row items-center gap-4 rounded-[16px] p-4 bg-white border border-[#D8D9DB]">
      <button
        type="button"
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={togglePlay}
        className="shrink-0 w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="white" aria-hidden="true">
            <rect x="2" y="1" width="3" height="12" rx="0.5" />
            <rect x="9" y="1" width="3" height="12" rx="0.5" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="white" aria-hidden="true">
            <path d="M3 1.5L12 7L3 12.5V1.5Z" />
          </svg>
        )}
      </button>
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="w-full flex flex-row items-center justify-between gap-2">
          <p className="text-[#111827] font-bold text-sm truncate">{title}</p>
          <span className="text-[#9CA3AF] text-[10px] leading-[15px] font-[450] shrink-0 tabular-nums">
            {timeLabel}
          </span>
        </div>
        <div
          ref={containerRef}
          className="w-full min-h-[36px]"
          role="img"
          aria-label={`Waveform for ${title}`}
        />
      </div>
    </div>
  );
}

function formatAdScript(script: string): string {
  return script
    .replace(/(\[[^\]]+\])/g, "<strong>$1</strong>")
    .replace(/\.\s/g, ". <br />");
}

export default function EaroAdPlayer({
  steps,
  variant,
  shareJobId,
  isPreparing,
  stepsInterval,
  version,
  onTryAgain,
  onGenerated,
}: {
  steps: GeneratingStep[];
  variant: EaroRecommendation | null;
  shareJobId: string;
  isPreparing: boolean;
  stepsInterval: number;
  version: number;
  onTryAgain: () => void;
  onGenerated?: () => void;
}) {
  const [generatingStep, setGeneratingStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [adName, setAdName] = useState("");

  const generatingStepRef = useRef(0);
  const generatingStepIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );
  const generateInFlightRef = useRef(false);
  const generationSessionRef = useRef("");

  const lastStepIndex = steps.length - 1;
  const isGenerating =
    !isCompleted && !hasError && (isPreparing || !!variant);

  const stopGeneratingStep = () => {
    if (generatingStepIntervalRef.current !== null) {
      clearInterval(generatingStepIntervalRef.current);
      generatingStepIntervalRef.current = null;
    }
  };

  const startGeneratingStep = () => {
    if (steps.length <= 1) return;
    if (generatingStepRef.current >= steps.length - 1) return;
    if (generatingStepIntervalRef.current !== null) return;

    generatingStepIntervalRef.current = setInterval(() => {
      setGeneratingStep((prev) => {
        const next = Math.min(prev + 1, steps.length - 1);
        if (next >= steps.length - 1 && generatingStepIntervalRef.current) {
          clearInterval(generatingStepIntervalRef.current);
          generatingStepIntervalRef.current = null;
        }
        return next;
      });
    }, stepsInterval + Math.floor(Math.random() * 10000));
  };

  const runV2Generate = async (input: EaroRecommendation) => {
    if (generateInFlightRef.current) return;
    generateInFlightRef.current = true;

    try {
      const url = await generateFinalAudio(getEaroApiUrl(), input);
      const label = plainScriptLabel(input.ad_script);
      setAdName(label);
      setIsCompleted(true);
      setAudioUrl(url);
      stopGeneratingStep();
      onGenerated?.();
    } catch (error) {
      console.error(error);
      setHasError(true);
      stopGeneratingStep();
    } finally {
      generateInFlightRef.current = false;
    }
  };

  useEffect(() => {
    generatingStepRef.current = generatingStep;
  }, [generatingStep]);

  useEffect(() => {
    const session = shareJobId.trim();
    if (!session) return;
    if (generationSessionRef.current === session) return;

    generationSessionRef.current = session;
    setIsCompleted(false);
    setHasError(false);
    setAudioUrl("");
    setAdName("");
    setGeneratingStep(0);
    generatingStepRef.current = 0;
    generateInFlightRef.current = false;
  }, [shareJobId]);

  useEffect(() => {
    if (!isGenerating) {
      stopGeneratingStep();
      return;
    }

    startGeneratingStep();
    return () => {
      stopGeneratingStep();
    };
  }, [isGenerating, stepsInterval, steps.length, lastStepIndex]);

  useEffect(() => {
    if (isPreparing) return;

    if (
      variant?.composition_id?.trim() &&
      variant?.ad_script?.trim()
    ) {
      void runV2Generate(variant);
    }

    return () => {
      stopGeneratingStep();
    };
  }, [isPreparing, variant?.composition_id, variant?.ad_script]);

  const handleLaunchAd = () => {
    const appUrl = getEaroAppUrl();
    window.open(
      `${appUrl}?register=true&jobid=${shareJobId}&recommendedVersion=${version}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const activeStep = steps[generatingStep];

  return (
    <div className="w-full flex flex-col items-center justify-center rounded-[16px] p-4 md:p-6 gap-4 bg-[#FAFAFA] border border-[#E8E0F0]">
      {isCompleted && variant?.ad_script ? (
        <div
          className="w-full text-[#374151] text-[14px] leading-[1.6]"
          dangerouslySetInnerHTML={{
            __html: formatAdScript(variant.ad_script),
          }}
        />
      ) : null}

      {isCompleted && !hasError && audioUrl ? (
        <EaroAudioPlayer title={adName} audioUrl={audioUrl} />
      ) : !hasError && activeStep ? (
        <GeneratingStepRow
          title={activeStep.title}
          description={activeStep.description}
        />
      ) : null}

      {hasError ? (
        <div className="w-full flex flex-col gap-3 items-center">
          <p className="text-[#B91C1C] text-sm text-center">
            Something went wrong generating this ad.
          </p>
          <button
            type="button"
            onClick={onTryAgain}
            className="h-10 px-5 rounded-[8px] border border-[#D5D9E3] bg-white text-[#0A0A0A] text-sm font-medium hover:bg-[#F3F4F6] transition-colors cursor-pointer"
          >
            Try again
          </button>
        </div>
      ) : null}

      {isCompleted && !hasError && audioUrl ? (
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
          <button
            type="button"
            onClick={handleLaunchAd}
            className="flex-1 h-[44px] rounded-[8px] bg-[#7AE8A8] text-[#0A0A0A] text-sm font-medium hover:bg-[#5BA882] hover:text-white transition-colors cursor-pointer"
          >
            Launch ad in EARO
          </button>
        </div>
      ) : null}
    </div>
  );
}
