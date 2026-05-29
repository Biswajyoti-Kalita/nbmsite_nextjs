"use client";

import GradientButton from "@/components/GradientButton";
import { getThankYouContent } from "@/lib/thankYouContent";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SuccessIcon() {
  return (
    <div className="bg-[#FFEDFB] rounded-[5px] w-[48px] h-[48px] flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8.125 13.75L11.875 17.5L19.375 10M26.25 13.75C26.25 20.6536 20.6536 26.25 13.75 26.25C6.84644 26.25 1.25 20.6536 1.25 13.75C1.25 6.84644 6.84644 1.25 13.75 1.25C20.6536 1.25 26.25 6.84644 26.25 13.75Z"
          stroke="#F11F68"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function ThankYouPageContent() {
  const searchParams = useSearchParams();
  const content = getThankYouContent(searchParams.get("source"));

  return (
    <div className="w-full max-w-[720px] flex flex-col items-start justify-start gap-[32px] p-6 md:p-[48px] bg-[#FFFEFF] rounded-[16px] border border-[#E8E8E8] shadow-sm">
      <div className="w-full flex flex-col items-start justify-start gap-[20px]">
        <SuccessIcon />
        <div className="w-full flex flex-col items-start justify-start gap-[12px]">
          <span className="border border-[#F11F68] px-[12px] py-[4px] rounded-[24px] h-[32px] text-[#F11F68] text-[14px] leading-[22px] font-medium">
            {content.tag}
          </span>
          <h1 className="gradient-text font-semibold text-[32px] md:text-[42px] leading-[40px] md:leading-[50px] tracking-[-0.02em]">
            {content.title}
          </h1>
          <p className="text-[#344054] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] font-normal">
            {content.description}
          </p>
          {content.note ? (
            <p className="text-[#667085] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal">
              {content.note}
            </p>
          ) : null}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-[12px]">
        <Link href="/" className="w-full sm:w-auto">
          <GradientButton
            text="Back to homepage"
            type="primary"
            className="w-full sm:min-w-[200px] h-[44px]"
            textClassName="text-[16px] leading-[24px] font-semibold"
            fullWidth
          />
        </Link>
        <Link
          href="/case-study-library"
          className="w-full sm:w-auto text-center py-[10px] px-[16px] rounded-[4px] border border-[#D0D5DD] text-[#344054] text-[16px] leading-[24px] font-semibold hover:bg-[#FFF9FE] transition-colors"
        >
          View case studies
        </Link>
      </div>
    </div>
  );
}
