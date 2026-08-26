"use client";

import AudienceInsights from "@/components/bfcm/AudienceInsights";
import BfcmBrands from "@/components/bfcm/BfcmBrands";
import CategoryIcon from "@/components/bfcm/CategoryIcon";
import EaroModule from "@/components/bfcm/EaroModule";
import OpportunityNumbers from "@/components/bfcm/OpportunityNumbers";
import SnapshotCta from "@/components/bfcm/SnapshotCta";
import SpotlightShows from "@/components/bfcm/SpotlightShows";
import Footer from "@/components/Footer";
import type { BfcmCategoryContent } from "@/data/bfcm/types";
import { openHubspotModal } from "@/util/modalEvents";
import Image from "next/image";
import Link from "next/link";

export default function BfcmResultPage({
  content,
}: {
  content: BfcmCategoryContent;
}) {
  return (
    <div className="bfcm-result min-h-screen flex flex-col bg-[#F6EAF5]">
      <header className="px-6 md:px-12 pt-6 md:pt-8 flex items-center justify-between">
        <Link href="/bfcm" className="inline-flex items-center gap-2 text-[#5B21B6] text-[14px] font-semibold hover:opacity-80 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M10 3L5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All categories
        </Link>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Next Audio"
            width={140}
            height={32}
            className="h-7 w-auto"
          />
        </Link>
      </header>

      <main className="flex-1 w-full max-w-[1120px] mx-auto px-4 md:px-8 py-10 md:py-14 flex flex-col gap-12 md:gap-16">
        <div className="bfcm-fade-up flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center shadow-sm">
            <CategoryIcon name={content.icon} className="w-8 h-8 text-[#1A1A1A]" />
          </div>
          <h1 className="text-[#1A1A1A] font-bold text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.02em] max-w-[720px]">
            {content.heroTitle}
          </h1>
        </div>

        <section
          className="bfcm-fade-up grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          style={{ animationDelay: "80ms" }}
        >
          <AudienceInsights
            intro={content.audienceIntro}
            groups={content.tagGroups}
            brandSafetyNote={content.brandSafetyNote}
          />
          <SpotlightShows
            intro={content.spotlightIntro}
            shows={content.spotlightShows}
            surprisePicks={content.surprisePicks}
            surpriseNote={content.surpriseNote}
            accessKey={content.accessKey}
          />
        </section>

        <div className="bfcm-fade-up" style={{ animationDelay: "140ms" }}>
          <OpportunityNumbers cards={content.evidenceCards} />
        </div>

        <div className="bfcm-fade-up" style={{ animationDelay: "180ms" }}>
          <SnapshotCta />
        </div>

        <div className="bfcm-fade-up" style={{ animationDelay: "220ms" }}>
          <BfcmBrands />
        </div>

        <div className="bfcm-fade-up" style={{ animationDelay: "260ms" }}>
          <EaroModule />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function BfcmComingSoon({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <div className="bfcm-result min-h-screen flex flex-col bg-[#F6EAF5]">
      <header className="px-6 md:px-12 pt-6 md:pt-8 flex items-center justify-between">
        <Link
          href="/bfcm"
          className="inline-flex items-center gap-2 text-[#5B21B6] text-[14px] font-semibold hover:opacity-80"
        >
          ← All categories
        </Link>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Next Audio"
            width={140}
            height={32}
            className="h-7 w-auto"
          />
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm">
          <CategoryIcon name={icon} className="w-8 h-8 text-[#1A1A1A]" />
        </div>
        <h1 className="text-[#1A1A1A] font-bold text-[28px] md:text-[36px] leading-[1.2] mb-3">
          {name} mix coming soon
        </h1>
        <p className="text-[#5B4B73] text-[16px] leading-[1.5] max-w-[420px] mb-8">
          We&apos;re finishing this category&apos;s podcast mix. Request a custom BFCM
          snapshot and we&apos;ll build one for your business.
        </p>
        <button
          type="button"
          onClick={() => openHubspotModal()}
          className="h-[48px] px-6 rounded-[10px] bg-[#C8F135] text-[#1A1A1A] text-[15px] font-semibold hover:bg-[#B8E028] transition-colors"
        >
          Request a custom mix
        </button>
      </main>

      <Footer />
    </div>
  );
}
