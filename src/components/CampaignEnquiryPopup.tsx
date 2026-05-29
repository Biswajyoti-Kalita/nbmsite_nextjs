"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type PopupVersion = "v1" | "v2";
type PopupState = "form";

type BudgetRange =
  | ""
  | "Under $10K"
  | "$10K–$25K"
  | "$25K–$50K"
  | "$50K+"
  | "Not sure yet";

const STORAGE_KEYS = {
  submitted: "na_campaign_enquiry_submitted",
  v1ShownThisSession: "na_campaign_enquiry_v1_shown_session",
  v1DismissedAt: "na_campaign_enquiry_v1_dismissed_at",
  v2ShownThisSession: "na_campaign_enquiry_v2_shown_session",
} as const;

const DEFAULT_EXCLUDED_PATH_PREFIXES = [
  "/thank-you",
  "/confirmation",
  "/confirmed",
  "/submitted",
] as const;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length < 2) return null;
  return parts.pop()!.split(";").shift() ?? null;
}

function safeGetLocalStorageItem(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetLocalStorageItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

function safeGetSessionStorageItem(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetSessionStorageItem(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

export default function CampaignEnquiryPopup() {
  const pathname = usePathname();
  const router = useRouter();

  const isExcludedRoute = useMemo(() => {
    const p = pathname || "/";
    return DEFAULT_EXCLUDED_PATH_PREFIXES.some((prefix) => p.startsWith(prefix));
  }, [pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const [version, setVersion] = useState<PopupVersion>("v1");
  const [state, setState] = useState<PopupState>("form");

  const [firstName, setFirstName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [advertisingLine, setAdvertisingLine] = useState("");
  const [budgetRange, setBudgetRange] = useState<BudgetRange>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const v1TimerRef = useRef<number | null>(null);
  const v2TimerRef = useRef<number | null>(null);

  const isSubmitted =
    typeof window !== "undefined" &&
    safeGetLocalStorageItem(STORAGE_KEYS.submitted) === "true";

  const close = () => {
    setIsOpen(false);
    setSubmitError(null);
    setIsSubmitting(false);
    setState("form");
  };

  const dismissV1 = () => {
    safeSetLocalStorageItem(STORAGE_KEYS.v1DismissedAt, String(Date.now()));
    close();
  };

  const scheduleV2IfEligible = () => {
    if (typeof window === "undefined") return;
    if (isExcludedRoute) return;
    if (safeGetLocalStorageItem(STORAGE_KEYS.submitted) === "true") return;
    if (safeGetSessionStorageItem(STORAGE_KEYS.v2ShownThisSession) === "true") return;

    const dismissedAtRaw = safeGetLocalStorageItem(STORAGE_KEYS.v1DismissedAt);
    const dismissedAt = dismissedAtRaw ? Number(dismissedAtRaw) : NaN;
    if (!dismissedAtRaw || Number.isNaN(dismissedAt)) return;

    const remainingMs = Math.max(0, 30_000 - (Date.now() - dismissedAt));
    if (v2TimerRef.current) window.clearTimeout(v2TimerRef.current);
    v2TimerRef.current = window.setTimeout(() => {
      if (document.visibilityState !== "visible") return;
      if (safeGetLocalStorageItem(STORAGE_KEYS.submitted) === "true") return;
      if (safeGetSessionStorageItem(STORAGE_KEYS.v2ShownThisSession) === "true") return;
      setVersion("v2");
      setState("form");
      setIsOpen(true);
      safeSetSessionStorageItem(STORAGE_KEYS.v2ShownThisSession, "true");
    }, remainingMs);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isExcludedRoute) return;
    if (safeGetLocalStorageItem(STORAGE_KEYS.submitted) === "true") return;
    if (safeGetSessionStorageItem(STORAGE_KEYS.v1ShownThisSession) === "true") return;

    if (v1TimerRef.current) window.clearTimeout(v1TimerRef.current);
    v1TimerRef.current = window.setTimeout(() => {
      if (document.visibilityState !== "visible") return;
      if (safeGetLocalStorageItem(STORAGE_KEYS.submitted) === "true") return;
      setVersion("v1");
      setState("form");
      setIsOpen(true);
      safeSetSessionStorageItem(STORAGE_KEYS.v1ShownThisSession, "true");
    }, 10_000);

    return () => {
      if (v1TimerRef.current) window.clearTimeout(v1TimerRef.current);
    };
  }, [isExcludedRoute]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onVisibility = () => {
      if (document.visibilityState === "visible") scheduleV2IfEligible();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExcludedRoute]);

  const headline =
    version === "v2" ? "Still thinking about it?" : "Tell us your campaign goal.";
  const subheadline =
    version === "v2"
      ? "It only takes one line to get the ball rolling. Share your campaign goal and we'll come back within 48 hours with show recommendations specific to your brand."
      : "Share one line about what you're advertising. We'll come back within 48 hours with show recommendations and a rough outline, no obligation.";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!firstName.trim() || !workEmail.trim() || !advertisingLine.trim()) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const hutk = getCookie("hubspotutk");
      const res = await fetch("/api/hubspot/campaign-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: workEmail.trim(),
          advertisingLine: advertisingLine.trim(),
          budgetRange: budgetRange || null,
          popupVersion: version,
          hutk,
          pageUri: typeof window !== "undefined" ? window.location.href : null,
          pageName: typeof document !== "undefined" ? document.title : null,
        }),
      });

      const json = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Submission failed");
      }

      safeSetLocalStorageItem(STORAGE_KEYS.submitted, "true");
      close();
      router.push("/thank-you?source=campaign-enquiry");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;
  if (isSubmitted) return null;

  return (
    <div
      className="fixed inset-0 z-[11000] flex items-center justify-center p-4 bg-black/50"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[640px] bg-white rounded-[16px] shadow-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 text-[#262626] hover:opacity-70 text-[22px] leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <form onSubmit={submit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 pr-6">
              <h2 className="text-[#262626] text-[22px] sm:text-[26px] leading-[28px] sm:leading-[34px] font-extrabold">
                {headline}
              </h2>
              <p className="text-[#344054] text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-normal">
                {subheadline}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-2">
                <span className="text-[#344054] text-[14px] leading-[20px] font-semibold">
                  First name <sup className="text-[#F11F68]">*</sup>
                </span>
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-[44px] rounded-[8px] border border-[#D0D5DD] px-3 text-[#262626]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#344054] text-[14px] leading-[20px] font-semibold">
                  Work email <sup className="text-[#F11F68]">*</sup>
                </span>
                <input
                  required
                  type="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full h-[44px] rounded-[8px] border border-[#D0D5DD] px-3 text-[#262626]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#344054] text-[14px] leading-[20px] font-semibold">
                  What are you advertising? <sup className="text-[#F11F68]">*</sup>
                </span>
                <textarea
                  required
                  rows={3}
                  value={advertisingLine}
                  onChange={(e) => setAdvertisingLine(e.target.value)}
                  placeholder="e.g. a fintech app in the UAE, a travel brand targeting European commuters…"
                  className="w-full rounded-[8px] border border-[#D0D5DD] px-3 py-2 text-[#262626] resize-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#344054] text-[14px] leading-[20px] font-semibold">
                  Budget range <span className="text-[#98A2B3] font-normal">(optional)</span>
                </span>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value as BudgetRange)}
                  className="w-full h-[44px] rounded-[8px] border border-[#D0D5DD] px-3 text-[#262626] bg-white"
                >
                  <option value="">Select…</option>
                  <option value="Under $10K">Under $10K</option>
                  <option value="$10K–$25K">$10K–$25K</option>
                  <option value="$25K–$50K">$25K–$50K</option>
                  <option value="$50K+">$50K+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
            </div>

            {submitError ? (
              <p className="text-[14px] leading-[20px] text-[#B42318]">
                {submitError}
              </p>
            ) : null}

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[48px] rounded-[10px] text-white font-semibold gradient-bg-button disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send it over →"}
              </button>

              <p className="text-[13px] leading-[18px] text-[#667085]">
                850+ campaigns delivered across 90 markets. No pitch deck. No
                spam.
              </p>

              <div className="flex items-center justify-between pt-1">
                {version === "v1" ? (
                  <button
                    type="button"
                    onClick={() => {
                      dismissV1();
                      scheduleV2IfEligible();
                    }}
                    className="text-[14px] leading-[20px] text-[#344054] underline hover:opacity-80"
                  >
                    Maybe later
                  </button>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </form>
      </div>
    </div>
  );
}

