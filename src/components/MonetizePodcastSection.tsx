"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import { openCallMeBackModal } from "@/util/modalEvents";

export default function MonetizePodcastSection() {
    return (
        <section className="w-full flex flex-col gap-[64px]">
        <div className="w-[100%] flex items-center justify-center flex-wrap md:flex-nowrap gap-[16px] lg:gap-[20px]">
          <div className="flex flex-col gap-[16px] lg:gap-[20px] w-full md:w-[90%]">
            <span className="inline-flex uppercase items-center min-h-[44px] gap-[6px] text-[#F11F68] font-medium text-[16px] leading-[24px] tracking-[0] font-[Switzer] transition-colors">
              All the Ways You Can Earn
            </span>

            <h1 className="w-[100%] gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
              Monetize With Quality Ads
            </h1>
          </div>
          <div className="flex flex-col gap-[32px]">
            <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
              Monetize from vetted, high-quality advertisers with formats that
              work for your content and audience
            </span>
            <GradientButton
              type="primary"
              text="Book a Call back"
              className="h-[48px] max-w-[200px]"
              textClassName="text-[16px] leading-[24px]"
              onClick={openCallMeBackModal}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px]">
          <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
            <Image
              src="/assets/images/microphone-01.png"
              alt="podcasters-image"
              className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] object-cover"
              width={48}
              height={48}
            />
            <span className="font-[Switzer] font-semibold text-[18px]  lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
              Host-Read Ads
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
            <Image
              src="/assets/images/headphones-02.png"
              alt="podcasters-image"
              className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] object-cover"
              width={48}
              height={48}
            />
            <span className="font-[Switzer] font-semibold text-[18px]  lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
              Programmatic Audio
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
            <Image
              src="/assets/images/zap-fast.png"
              alt="podcasters-image"
              className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] object-cover"
              width={48}
              height={48}
            />
            <span className="font-[Switzer] font-semibold text-[18px]  lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
              Sponsorships
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
            <Image
              src="/assets/images/film-02.png"
              alt="podcasters-image"
              className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] object-cover"
              width={48}
              height={48}
            />
            <span className="font-[Switzer] font-semibold text-[18px]  lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
              Branded Series
            </span>
          </div>
        </div>
      </section>
    )
}