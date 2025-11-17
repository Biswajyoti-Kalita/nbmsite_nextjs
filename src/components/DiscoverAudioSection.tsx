"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import { openCallMeBackModal, openShareBriefModal } from "@/util/modalEvents";

export default function DiscoverAudioSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-[84px] lg:py-[96px] gap-[64px] bg-[#FFFFFF]">
        <div className="w-full max-w-[1280px] flex flex-col items-start justify-start gap-[32px] px-[16px] lg:px-[32px]">
          <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[20px]">
            <div className="w-full relative flex flex-col items-start justify-between gap-[10px] p-[32px] lg:p-[64px] rounded-[16px] max-w-[756px] min-h-[362px] rounded-[16px]">
              <Image
                src="/assets/images/discover_how_audio.jpg"
                alt="case-study-1"
                width={500}
                height={500}
                className="absolute top-0 left-0 w-full h-full z-0 rounded-[16px]"
              />
              <h1 className="font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em] text-[#FFFFFF] z-[10]">
                Discover how audio advertising can elevate your marketing
                strategy.
              </h1>
              <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[12px]">
                <GradientButton text="Call me back" type="secondary" className="w-[131px] h-[44px]" onClick={openCallMeBackModal} />
                <GradientButton
                  text="Share a brief"
                  type="tertiary"
                  className="z-10 w-[131px] h-[44px]"
                  textClassName="text-[#FFFFFF] text-[16px] leading-[24px] font-semibold"
                  onClick={openShareBriefModal}
                />
                <GradientButton
                  text="Learn More"
                  type="tertiary"
                  className="z-10 w-[131px] h-[44px]"
                  textClassName="text-[#FFFFFF]"
                />
              </div>
            </div>
            <div className="max-h-[440x] lg:max-h-[362px] w-full lg:w-auto rounded-[16px]">
              <Image
                src="/assets/images/women_listening_music.jpg"
                alt="women listening music"
                width={440}
                height={362}
                className="w-full max-w-[440px] max-h-[238px] lg:max-h-[362px] object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
    )
}