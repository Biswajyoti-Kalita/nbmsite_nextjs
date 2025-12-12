import Link from "next/link";
import GradientButton from "./GradientButton";

export default function Insights() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-[84px] lg:py-[96px]  px-[16px] lg:px-[80px] gap-[64px] bg-[#F8F9FA]">
      <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-[32px] lg:gap-[24px] max-w-[1280px] max-h-auto lg:max-h-[94px]">
        <div className="flex flex-col items-start justify-center gap-[16px] w-full">
          <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] gradient-text">
            Insights That Matter to You
          </h1>
          <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
          Guides to help you integrate podcasts into your media mix and measure what matters.
          </h6>
        </div>
        <div className="w-full flex justify-start lg:justify-end">
          <Link href="/knowledge-hub">
          <GradientButton
            text="Explore Knowledge Hub"
            className="h-[44px] w-[293px]"
            textClassName="text-[16px] leading-[24px] font-semibold"
          /></Link>
        </div>
      </div>
      <div className="w-full flex flex-row overflow-x-auto items-start justify-between gap-[16px] lg:gap-[20px] max-w-[1280px]">
        <Link href="/assets/files/WhyPodcastsBelongOnMediaPlans.pdf" target="_blank">
            <div className="w-full relative min-w-[630px] min-h-[314px] lg:min-h-[323px]">
            <div
                className="bg-cover bg-center w-full md:w-[630px] h-[314px] lg:h-[323px] p-[24px] flex flex-col justify-between rounded-2xl relative overflow-hidden"
                style={{
                backgroundImage: `url(${"/assets/images/insight-3.jpg"})`,
                }}
            >
                <div className="absolute inset-0 rounded-2xl z-0 rounded-lg p-4 shadow-md [background:linear-gradient(268.96deg,rgba(136,48,252,0.2)_100.9%,#ffffff_99.44%)]"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="w-full">
                    <span className="px-2.5 py-1.5 text-[#FFFEFF] rounded-3xl border border-[#FFFEFF] text-sm">
                    Graphic
                    </span>
                </div>

                <div className="w-full flex flex-col gap-[10px]">
                    <h6 className="font-normal text-[16px] leading-[24px] text-[#E8E8E8]">
                    16 June 2025
                    </h6>
                    <h6 className="font-medium text-[18px] leading-[26px] text-[#FFFEFF]">
                    Why Podcast Advertising Belongs in Every Media Plan
                    </h6>
                </div>
                </div>
            </div>
            </div>
        </Link>

        <Link href="/assets/files/AudienceProfileTargeting.pdf" target="_blank">
            <div className="w-full relative min-w-[300px] min-h-[314px] lg:min-h-[323px]">
            <div
                className="bg-cover bg-center w-full md:w-[300px] h-[314px] lg:h-[323px] p-[24px] flex flex-col justify-between rounded-2xl relative overflow-hidden"
                style={{
                backgroundImage: `url(${"/assets/images/card-bg-22.jpg"})`,
                }}
            >
                <div className="absolute inset-0 rounded-2xl z-0 rounded-lg p-4 shadow-md [background:linear-gradient(268.96deg,rgba(255,255,255,0.2)_100.9%,#ffffff_99.44%)]"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="w-full">
                    <span className="px-2.5 py-1.5 text-[#FFFEFF] rounded-3xl border border-[#FFFEFF] text-sm">
                    Graphic
                    </span>
                </div>

                <div className="w-full flex flex-col gap-[10px]">
                    <h6 className="font-normal text-[16px] leading-[24px] text-[#E8E8E8]">
                    16 June 2025
                    </h6>
                    <h6 className="font-medium text-[18px] leading-[26px] text-[#FFFEFF]">
                    Audience Targeting Profiles
                    </h6>
                </div>
                </div>
            </div>
            </div>
        </Link>

        <Link href="/assets/files/AnatomyOfAnEffectivePodcastAd.pdf" target="_blank">
            <div className="w-full relative min-w-[300px] min-h-[314px] lg:min-h-[323px]">
            <div
                className="bg-cover bg-center w-full md:w-[300px] h-[314px] lg:h-[323px] p-[24px] flex flex-col justify-between rounded-2xl relative overflow-hidden"
                style={{
                backgroundImage: `url(${"/assets/images/insight-2.png"})`,
                }}
            >
                <div className="absolute inset-0 rounded-2xl z-0 rounded-lg p-4 shadow-md [background:linear-gradient(268.96deg,rgba(241,31,104,0.2)_100.9%,#ffffff_99.44%)]"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="w-full">
                    <span className="px-2.5 py-1.5 text-[#FFFEFF] rounded-3xl border border-[#FFFEFF] text-sm">
                    Graphic
                    </span>
                </div>

                <div className="w-full flex flex-col gap-[10px]">
                    <h6 className="font-normal text-[16px] leading-[24px] text-[#E8E8E8]">
                    16 June 2025
                    </h6>
                    <h6 className="font-medium text-[18px] leading-[26px] text-[#FFFEFF]">
                    The anatomy of an effective 20 second podcast ad
                    </h6>
                </div>
                </div>
            </div>
            </div>
        </Link>
      </div>
    </section>
  );
}
