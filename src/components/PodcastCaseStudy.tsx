"use client";
import CaseStudies from "./CaseStudies";
import GradientButton from "./GradientButton";
import { useRouter } from "next/navigation";
interface PodcastCaseStudyProps {
  title: string;
  showButton?: boolean;
}

export default function PodcastCaseStudy({
  title = "Podcast Advertising Case Studies & Audio Campaign Results",
  showButton = true,
}: PodcastCaseStudyProps) {
  const router = useRouter();
  return (
    <section className="w-full bg-[#F8F9FA] flex flex-col items-center justify-center rounded-none lg:rounded-xl py-8 py-[84px] md:py-[80px] px-4 md:px-[96px] gap-[46px] md:gap-[64px]">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[32px] md:gap-[24px]">
        <div className="lg:max-w-[70%]">
          <h1 className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px]">
            {title}
          </h1>
        </div>
        {showButton && (
          <div className="lg:col-span-2 flex itesm-start md:items-end justify-start md:justify-end h-full">
            <GradientButton
                text="Explore All"
                type="primary"
                className="w-[144px] h-[44px]"
                textClassName="text-[16px] leading-[24px] font-bold"
                rightIcon={
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13.959L13 1.95898M13 1.95898H5M13 1.95898V9.95898" stroke="#FFFEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
                onClick={() => {
                  router.push("/case-study-library");
                }}
            />
          </div>
        )}
      </div>
      <div
        className="max-w-[14400px] flex flex-col lg:flex-row justify-start w-full items-center gap-4 gap-[40px]"
      >
        <CaseStudies />
      </div>
    </section>
  );
}
