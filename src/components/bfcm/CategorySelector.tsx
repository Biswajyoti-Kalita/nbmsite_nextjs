"use client";

import CategoryIcon from "@/components/bfcm/CategoryIcon";
import { BFCM_CATEGORIES } from "@/data/bfcm/categories";
import { openHubspotModal } from "@/util/modalEvents";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function CategorySelector() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const handleSelect = (slug: string) => {
    setActiveSlug(slug);
    startTransition(() => {
      router.push(`/bfcm/${slug}`);
    });
  };

  return (
    <div className="bfcm-selector min-h-screen flex flex-col">
      <div className="bfcm-selector-bg relative flex-1 flex flex-col">
        <header className="relative z-10 px-6 md:px-12 pt-8 md:pt-10">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/images/logo-white.svg"
              alt="Next Audio"
              width={150}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </header>

        <main className="relative z-10 flex-1 flex flex-col items-center px-4 md:px-8 pb-16 pt-10 md:pt-16">
          <div className="bfcm-fade-up text-center max-w-[720px] mb-8 md:mb-12">
            <h1 className="text-white font-semibold text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] mb-4">
              Discover your BFCM podcast mix
            </h1>
            <p className="text-white/85 text-[18px] md:text-[22px] leading-[1.4] font-medium">
              See where your audience could be listening.
            </p>
            <div className="mt-6 flex justify-center" aria-hidden>
              <svg
                width="20"
                height="28"
                viewBox="0 0 20 28"
                fill="none"
                className="bfcm-bounce-arrow text-white/80"
              >
                <path
                  d="M10 2v20M10 22l-6-6M10 22l6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div
            className="bfcm-fade-up bfcm-fade-up-delay w-full max-w-[980px] rounded-[20px] bg-[#5C1A4A]/80 backdrop-blur-sm border border-white/10 px-4 py-8 md:px-10 md:py-10"
            style={{ animationDelay: "120ms" }}
          >
            <h2 className="text-center text-white text-[20px] md:text-[24px] leading-[1.3] font-semibold mb-6 md:mb-8">
              What best describes your business?
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {BFCM_CATEGORIES.map((category, index) => {
                const isActive = activeSlug === category.slug && isPending;
                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => handleSelect(category.slug)}
                    className={`bfcm-category-tile group relative flex flex-col items-center justify-center gap-3 min-h-[120px] md:min-h-[140px] rounded-[14px] bg-white px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8F135] ${
                      isActive ? "scale-[0.97] opacity-80" : ""
                    }`}
                    style={{ animationDelay: `${160 + index * 40}ms` }}
                  >
                    <CategoryIcon
                      name={category.icon}
                      className="w-9 h-9 text-[#1A1A1A] transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-[#1A1A1A] text-[13px] md:text-[14px] leading-[18px] font-semibold">
                      {category.name}
                    </span>
                    {!category.ready ? (
                      <span className="absolute top-2 right-2 text-[10px] leading-none px-1.5 py-1 rounded-full bg-[#F3E8FF] text-[#6B21A8] font-medium">
                        Soon
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <p className="mt-8 text-center text-white/90 text-[14px] md:text-[16px] leading-[1.5]">
              <span className="font-bold">Not here?</span>{" "}
              <button
                type="button"
                onClick={() => openHubspotModal()}
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                Request a custom BFCM podcast mix for your category
              </button>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
