"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import Breadcrumb from "./Breadcrumb";
import { openCallMeBackModal, openShareBriefModal } from "@/util/modalEvents";

export default function AboutUsBanner() {
    return (
        <section
          className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start justify-start relative lg:max-w-[1440px]"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 h-[580px] px-4 lg:px-0">
            <Breadcrumb pages={[{ name: "About Us", link: "/about-us" }]} />

            <div className="flex flex-col gap-[32px] items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  The Global Partner for Podcast & Digital Audio Advertising
                </h1>
              </div>
              <h2 className="font-[Switzer] font-medium lg:font-[500] text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0] text-[#FFFEFF]">
                Next Audio connects advertisers with premium podcasts and
                digital audio audiences — while helping creators and publishers
                grow revenue.
              </h2>

              <div className="flex flex-col lg:flex-row gap-[12px] items-start lg:items-center justify-start">
                <GradientButton
                  type="secondary"
                  text="Share a Brief"
                  className="h-[44px] w-[184px] rounded-[4px]"
                  textClassName="text-[16px] leading-[24px]"
                  onClick={openShareBriefModal}
                />
                <GradientButton
                  type="tertiary"
                  text="Request a Call Back"
                  className="h-[44px] w-[231px] rounded-[4px]"
                  textClassName="text-[16px] leading-[24px]"
                  onClick={openCallMeBackModal}
                />
              </div>
            </div>
          </div>

          <div className="relative lg:absolute right-[-12px] lg:right-[-60px] top-4 lg:top-9  bottom-[-60px] max-w-[700px]">
            <Image
              src="/assets/images/about_headerBanner_right.png"
              alt="podcasters-image"
              className="w-full h-full object-contain"
              width={500}
              height={500}
            />
          </div>
        </section>
    )
}