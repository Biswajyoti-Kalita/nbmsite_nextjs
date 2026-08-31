"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const BFCM_SNAPSHOT_FORM_URL =
  "https://dgiaa.share.hsforms.com/2e0PAB8_LTQ-SRr0VVNuIUw";

export default function SnapshotCta() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const modal =
    open && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[10000] flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-[#FFFEFF]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bfcm-snapshot-modal-title"
          >
            <div className="relative flex shrink-0 items-end justify-end gap-4 border-b border-[#EDE4F5] px-6 py-4 md:px-8 md:py-5">
              <button
                type="button"
                onClick={close}
                className="shrink-0 p-2 rounded-md hover:bg-[#F6EAF5] transition-colors"
                aria-label="Close"
              >
                <Image
                  src="/assets/images/close.png"
                  alt=""
                  width={12}
                  height={12}
                  className="w-[12px] h-[12px]"
                />
              </button>
            </div>

            <div className="bfcm-snapshot-scroll flex-1 min-h-0 overflow-y-auto overscroll-y-contain">
              <iframe
                src={BFCM_SNAPSHOT_FORM_URL}
                title="Get your personalised BFCM snapshot"
                className="block w-full min-h-[900px] h-[900px] border-0"
                loading="lazy"
                scrolling="yes"
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <section className="w-full mb-20">
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
              onClick={() => setOpen(true)}
              className="shrink-0 inline-flex items-center justify-center h-[48px] px-6 rounded-[10px] bg-white text-[#1A1A1A] text-[15px] font-semibold shadow-sm hover:bg-[#F8FFF0] transition-colors"
            >
              Send me my snapshot
            </button>
          </div>
        </div>
      </section>

      {modal}
    </>
  );
}
