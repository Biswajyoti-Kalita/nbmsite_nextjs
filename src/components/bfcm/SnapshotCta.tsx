"use client";

import Script from "next/script";
import { useEffect, useId, useState } from "react";

const HUBSPOT_PORTAL_ID = "22605202";
const HUBSPOT_FORM_ID = "266c2ea5-d205-45f9-90ee-a77597da6644";
const HUBSPOT_REGION = "na1";
const HUBSPOT_EMBED_SCRIPT = `https://js.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

export default function SnapshotCta() {
  const [open, setOpen] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const formKey = useId();

  useEffect(() => {
    if (!open) return;
    const el = document.getElementById("bfcm-snapshot-form");
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [open]);

  return (
    <section className="w-full">
      <div className="rounded-[8px] bg-[#C8F135] px-6 py-7 md:px-10 md:py-9 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <h2 className="text-[#1A1A1A] text-[26px] md:text-[34px] leading-[1.15] font-bold tracking-[-0.02em] lg:max-w-[380px] shrink-0">
          Get your personalised BFCM snapshot
        </h2>
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <p className="text-[#1A1A1A] text-[15px] md:text-[16px] leading-[1.5] flex-1">
            Tell us your market and what you&apos;re promoting. We&apos;ll send you a
            tailored snapshot for your BFCM campaign.
          </p>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 inline-flex items-center justify-center h-[48px] px-6 rounded-[10px] bg-white text-[#1A1A1A] text-[15px] font-semibold shadow-sm hover:bg-[#F8FFF0] transition-colors"
            aria-expanded={open}
            aria-controls="bfcm-snapshot-form"
          >
            {open ? "Hide form" : "Send me my snapshot"}
          </button>
        </div>
      </div>

      <div
        id="bfcm-snapshot-form"
        className={`overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[900px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0_4px_24px_rgba(80,40,100,0.08)]">
          <Script
            id="hubspot-embed-script-bfcm"
            src={HUBSPOT_EMBED_SCRIPT}
            strategy="lazyOnload"
            onReady={() => setScriptReady(true)}
          />
          {scriptReady ? (
            <div
              key={formKey}
              className="hs-form-frame"
              data-region={HUBSPOT_REGION}
              data-form-id={HUBSPOT_FORM_ID}
              data-portal-id={HUBSPOT_PORTAL_ID}
            />
          ) : (
            <p className="text-[#6B5B80] text-[14px]">Loading form…</p>
          )}
        </div>
      </div>
    </section>
  );
}
