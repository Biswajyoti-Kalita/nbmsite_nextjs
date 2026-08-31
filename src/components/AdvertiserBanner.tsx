"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import Breadcrumb from "./Breadcrumb";

import { openShareBriefModal } from "@/util/modalEvents";
import Link from "next/link";

export default function AdvertiserBanner() {
    return (
        <section
        className="w-full mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 items-center justify-between relative lg:max-w-[1440px]"
        id="home"
      >
        <div className="w-full flex flex-col items-start justify-start gap-4 h-[580px] px-4 lg:px-0">

          <Breadcrumb pages={[{ name: "For Advertisers", link: "/advertisers" }]} />


          <h1 className="font-medium text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF]">
            For Brands & Media Agencies
          </h1>
          <div className="flex flex-col gap-[32px] items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF]">
                  High-Impact Audio Ads. Made Easy for Busy Teams
              </h1>
            </div>
            <h2 className="font-medium lg:font-semibold text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] text-[#FFFEFF]">
              Global high-performance podcast and digital audio campaigns,
              delivered quickly, efficiently, and tailored to your goals.
            </h2>
            <div className="flex flex-col lg:flex-row gap-[12px] items-start lg:items-center justify-start">
                <Link href="https://earo.ai">
                <GradientButton
                type="secondary"
                text="Launch Your Own Campaign"
                className="h-[44px]"
                textClassName="text-[16px] leading-[24px] font-semibold"
              />                
                </Link>              
              <GradientButton
                type="tertiary"
                text="Request a proposal"
                textClassName="text-[16px] leading-[24px] font-semibold"
                className="h-[46px]"
                onClick={openShareBriefModal}
              />
            </div>
          </div>
        </div>

        <div className=" relative  lg:absolute right-0 top-0 bottom-0">
          <Image
            src="/assets/images/advertisers-right-banner-bg.png"
            alt="advertisers-image"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </section>
     )
}