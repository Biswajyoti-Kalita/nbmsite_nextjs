"use client";

import { openCallMeBackModal } from "@/util/modalEvents";
import FAQCard from "./FAQCard";

interface FAQSectionProps {
    faqs: {
        title: string;
        description: string;
        htmlDescription?: string;
    }[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    return (
        <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row items-start justify-center py-[84px] lg:py-[96px] px-[16px] lg:px-[80px] gap-[46px] lg:gap-[64px] bg-[#FFFFFF] max-w-[1440px]">
          <div className="w-full flex flex-col items-start justify-center gap-[24px]">
            <div className="w-full flex flex-col items-start justify-center gap-[16px]">
            <span className="text-[#F11F68] border border-[#F11F68] rounded-[31px] px-3 md:px-4 py-1.5 md:py-1 text-sm md:text-[16px] leading-tight md:leading-[22px] font-medium">
            FAQs
              </span>
              <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px]">
                Got Questions? We’ve Got Answers!
              </h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-[32px]">
              <p className="text-[#091A3A] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Here are quick answers to some of the most common questions
                about Next Audio
              </p>
              <div className="flex flex-row gap-[10px]">
                <span className="text-[#091A3A] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-semibold">
                  Have another question?
                </span>
                <span className="gradient-text font-semibold text-[20px] leading-[28px]" onClick={openCallMeBackModal}>
                  Reach Out
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-[16px]">
            {faqs.map((item, index) => (
              <FAQCard
                key={index}
                title={item.title}
                description={item.description}
                open={index === 0}
                htmlDescription={item.htmlDescription}
              />
            ))}
          </div>
        </div>
      </section>
 
 
 
 
    )
}