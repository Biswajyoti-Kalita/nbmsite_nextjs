"use client";

import BrandsScroller from "@/components/BrandsScroller";

export default function BfcmBrands() {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6 md:mb-2">
        <h2 className="gradient-text text-[24px] md:text-[28px] leading-[1.2] font-bold max-w-[360px]">
          Brands That Trust Us
        </h2>
        <p className="text-[#5B4B73] text-[15px] md:text-[16px] leading-[1.5] max-w-[480px]">
          Over 300 advertisers have launched more than 850 successful campaigns,
          across every budget, goal and industry.
        </p>
      </div>
      <div className="bfcm-brands-wrap -mx-2">
        <BrandsScroller fadeColor="#F6EAF5" />
      </div>
    </section>
  );
}
