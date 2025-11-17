"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import Breadcrumb from "./Breadcrumb";
import { openCallMeBackModal } from "@/util/modalEvents";

export default function PublisherBanner() {
    return (
        <section
          className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] lg:pb-0 grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start justify-start relative lg:max-w-[1440px]"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 h-[580px] px-4 lg:px-0">
            <Breadcrumb pages={[{ name: "For Publishers", link: "/publishers" }]} />

            <h1 className="font-medium uppercase text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF]">
              For Publishers, networks and production houses
            </h1>
            <div className="flex flex-col gap-[32px] items-start justify-start">
                <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  Monetize Your Catalogue with Global Brand Demand
                </h1>
              <h2 className="font-[Switzer] font-medium lg:font-[500] text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0] text-[#FFFEFF]">
                Connect your shows to premium advertisers across 90+ markets and
                hundreds of active campaigns.
              </h2>

              <div className="flex flex-col lg:flex-row gap-[12px] items-start lg:items-center justify-start">
                <GradientButton
                  type="secondary"
                  text="Request a Call Back"
                  className="h-[44px] w-[184px]"
                  textClassName="text-[16px] leading-[24px]"
                  onClick={openCallMeBackModal}
                />
                <GradientButton
                  type="tertiary"
                  text="Download Publisher Pack"
                  className="h-[44px] w-[231px]"
                  textClassName="text-[16px] leading-[24px]"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:absolute right-[-12px] lg:right-[-60px] top-4 lg:top-9  bottom-0 max-w-[700px]">
            <Image
              src="/assets/images/publisher-right-bg.png"
              alt="podcasters-image"
              className="w-full h-full object-contain"
              width={500}
              height={500}
            />
          </div>
        </section>
    )
}