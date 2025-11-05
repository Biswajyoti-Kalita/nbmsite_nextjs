"use client";

import GradientButton from "./GradientButton";

export default function Metric() {
  const metricsPlatforms = [
    {
      title: "Podcast/Audio",
      metrics: [
        {
          name: "Ad Recall",
          value: "4x higher",
        },
        {
          name: "Engagement Rate",
          value: "~60%",
        },
        {
          name: "Listen/Watch-Through",
          value: "91%",
        },
        {
          name: "Brand Affinity",
          value: "high",
        },
        {
          name: "Targeting Precision",
          value: "High",
        },
        {
          name: "Avg CPM",
          value: "$12-25",
        },
      ],
    },
    {
      title: "Video (YouTube)",
      metrics: [
        {
          name: "Ad Recall",
          value: "Medium",
        },
        {
          name: "Engagement Rate",
          value: "~30%",
        },
        {
          name: "Listen/Watch-Through",
          value: "~50%",
        },
        {
          name: "Brand Affinity",
          value: "Medium",
        },
        {
          name: "Targeting Precision",
          value: "High",
        },
        {
          name: "Avg CPM",
          value: "$25-30",
        },
      ],
    },
    {
      title: "Social",
      metrics: [
        {
          name: "Ad Recall",
          value: "Low",
        },
        {
          name: "Engagement Rate",
          value: "~10%",
        },
        {
          name: "Listen/Watch-Through",
          value: "~10%",
        },
        {
          name: "Brand Affinity",
          value: "Low",
        },
        {
          name: "Targeting Precision",
          value: "High",
        },
        {
          name: "Avg CPM",
          value: "$12-20",
        },
      ],
    },
    {
      title: "Display",
      metrics: [
        {
          name: "Ad Recall",
          value: "Low",
        },
        {
          name: "Engagement Rate",
          value: "<5%",
        },
        {
          name: "Listen/Watch-Through",
          value: "N/A",
        },
        {
          name: "Brand Affinity",
          value: "Low",
        },
        {
          name: "Targeting Precision",
          value: "Medium",
        },
        {
          name: "Avg CPM",
          value: "$2-10",
        },
      ],
    },
    {
      title: "Radio",
      metrics: [
        {
          name: "Ad Recall",
          value: "Medium",
        },
        {
          name: "Engagement Rate",
          value: "~15%",
        },
        {
          name: "Listen/Watch-Through",
          value: "~80%",
        },
        {
          name: "Brand Affinity",
          value: "Medium",
        },
        {
          name: "Targeting Precision",
          value: "Low",
        },
        {
          name: "Avg CPM",
          value: "$5-15",
        },
      ],
    },
  ];
  return (
    <section className="py-[84px] lg:py-[96px] flex flex-col items-center justify-center gap-[46px] lg:gap-[87px] bg-[#F8F9FA]">
      <div className="w-full flex flex-col items-start justify-center gap-[16px] lg:gap-[24px] px-[16px] lg:px-[80px]">
        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-[20px] max-w-[1280px]">
          <div className="w-full flex flex-col items-start justify-center gap-[16px]">
            <h1 className="font-bold gradient-text text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
              See How Audio Advertising <br />
              Measures Up
            </h1>
          </div>
          <div className="w-full flex flex-col items-start justify-center pt-[8px] gap-[10px] max-w-[535px]">
            <p className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
              Compared to other channels, podcasts and digital audio
              consistently deliver higher engagement, better recall, and
              stronger brand lift — all at a lower cost.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-6 items-start justify-center max-w-[1280px] mb-[0px] lg:mb-[96px]">
        <div className="w-full hidden lg:block flex flex-col items-start justify-center">
          <div className="border-b border-[#E8E8E8] flex gap-[8px] px-[24px] pb-[16px] w-full h-[48px]">
            <h1 className="text-[#262626] text-[20px] leading-[30px] font-bold">
              Metric
            </h1>
          </div>
          <div className="bg-[#F8F9FA] px-[24px] gap-[12px] h-[64px] w-full flex items-center justify-start">
            <h1 className="font-semibold text-[#262626] text-[14px] leading-[22px] tracking-[0em]">
              Ad Recall
            </h1>
          </div>
          <div className="bg-[#FFFEFF] px-[24px] gap-[12px] h-[64px] w-full flex items-center justify-start">
            <h1 className="font-semibold text-[#262626] text-[14px] leading-[22px] tracking-[0em]">
              Engagement Rate
            </h1>
          </div>
          <div className="bg-[#F8F9FA] px-[24px] gap-[12px] h-[64px] w-full flex items-center justify-start">
            <h1 className="font-semibold text-[#262626] text-[14px] leading-[22px] tracking-[0em]">
              Listen/Watch-Through
            </h1>
          </div>
          <div className="bg-[#FFFEFF] px-[24px] gap-[12px] h-[64px] w-full flex items-center justify-start">
            <h1 className="font-semibold text-[#262626] text-[14px] leading-[22px] tracking-[0em]">
              Brand Affinity
            </h1>
          </div>
          <div className="bg-[#F8F9FA] px-[24px] gap-[12px] h-[64px] w-full flex items-center justify-start">
            <h1 className="font-semibold text-[#262626] text-[14px] leading-[22px] tracking-[0em]">
              Targeting Precision
            </h1>
          </div>
          <div className="bg-[#FFFEFF] px-[24px] gap-[12px] h-[64px] w-full flex items-center justify-start">
            <h1 className="font-semibold text-[#262626] text-[14px] leading-[22px] tracking-[0em]">
              Avg CPM
            </h1>
          </div>
        </div>
        {metricsPlatforms.map((metricPlatform, ind) => (
          <div key={ind} className="w-full flex flex-col items-start justify-center pb-[64px] lg:pb-0">
            <div className="border-b border-[#E8E8E8] bg-[#F8F9FA] flex gap-[8px] px-[24px] pb-[16px] w-full">
              <h1 className="text-[#262626] text-[20px] leading-[30px] font-bold w-full text-start lg:text-center">
                {metricPlatform.title}
              </h1>
            </div>
            {metricPlatform.metrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-[${
                  index % 2 === 0 ? "#F8F9FA" : "#FFFEFF"
                }] px-[24px] gap-[12px] h-[64px] w-full flex items-center justify-start`}
              >
                <h1 className="font-semibold text-[#262626] text-[14px] leading-[22px] tracking-[0em] flex flex-row justify-between lg:justify-center w-full">
                    <span className="block lg:hidden">{metric.name}</span>
                    <span>
                    {metric.value}
                    </span>
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
      <GradientButton
        text="Book a Call Back"
        className="w-[161px] h-[44px] rounded-[4px]"
        textClassName="text-[16px] leading-[24px]"
      />
    </section>
  );
}
