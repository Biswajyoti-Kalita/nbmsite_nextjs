"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function EaroModule() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    const target = trimmed
      ? `https://app.earo.ai/?url=${encodeURIComponent(trimmed)}`
      : "https://app.earo.ai/";
    window.open(target, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full">
      <div className="bg-white rounded-[20px] border border-[#E8E0F0] p-6 md:p-8 shadow-[0_4px_20px_rgba(80,40,100,0.05)]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
          <div className="flex-1">
            <h2 className="text-[#1A1A1A] text-[22px] md:text-[26px] leading-[1.25] font-bold mb-2">
              Want to hear how your brand could sound?
            </h2>
            <p className="text-[#5B4B73] text-[15px] leading-[1.5] mb-5">
              Create an audio ad in seconds with EARO, our self-serve audio
              advertising platform.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your Shopify store url"
                className="flex-1 h-[48px] rounded-[10px] border border-[#D0D5DD] bg-[#F7F5FA] px-4 text-[#1A1A1A] text-[15px] placeholder:text-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-[#C8F135]"
              />
              <button
                type="submit"
                className="shrink-0 h-[48px] px-5 rounded-[10px] bg-[#C8F135] text-[#1A1A1A] text-[15px] font-semibold hover:bg-[#B8E028] transition-colors"
              >
                Create my free ad →
              </button>
            </form>

            <p className="mt-4 text-[#8A7A9A] text-[13px] leading-[1.4]">
              Hear your audio ad in 60 seconds. Free. No credit card required.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center lg:pt-2">
            <Image
              src="/assets/images/earo-logo.png"
              alt="EARO"
              width={120}
              height={120}
              className="w-[88px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
