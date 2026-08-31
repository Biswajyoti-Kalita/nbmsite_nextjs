"use client";
import { openCallMeBackModal } from "@/util/modalEvents";
import Image from "next/image";
import Link from "next/link";

export default function ReadyToLaunch() {
    return (
        <section
        className="w-full bg-[#FFFFFF] flex flex-col items-end justify-end py-8 md:py-[80px] px-4 md:px-[96px] gap-8 md:gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="py-[48px] flex flex-row w-full justify-between items-center gap-[32px]"
        >
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div
              className="bg-[#F11F68] rounded-[16px] p-[32px] lg:p-[64px] flex flex-col items-start justify-between gap-[24px]"
            >
              <div className="flex flex-col gap-[12px]">
                <h2
                  className="text-[#FFFEFF] font-semibold text-[42px] leading-[50px]"
                >
                  Ready to Launch?
                </h2>
                <h3
                  className="text-[#FFFEFF] font-normal text-[20px] leading-[28px]"
                >
                  We make Audio work for you.
                </h3>
              </div>
              <div
                className="flex flex-col md:flex-row items-start justify-start gap-[12px]"
              >
                <button
                  className="bg-[#FFFEFF] py-[10px] px-[16px] rounded-[4px] w-[200px] cursor-pointer"
                  onClick={openCallMeBackModal}
                >
                  <span className="gradient-text text-[16px] leading-[24px] font-semibold">Call me back</span>
                </button>

                <Link href="/assets/files/Advertiser Media Kit.pdf" target="_blank">
                <button
                  className="border-[#FFFEFF] border-2 py-[10px] px-[16px] rounded-[4px] w-[200px] cursor-pointer"
                >
                  <span className="text-[#FFFEFF] text-[16px] leading-[24px] font-semibold">Download Media Kit</span>
                </button>
                </Link>

                <Link
                  href="https://earo.ai/"
                  target="_blank"
                  className="border-[#FFFEFF] text-center border-2 py-[10px] px-[16px] rounded-[4px] w-[200px]"
                >
                  <span className="text-[#FFFEFF] text-[16px] leading-[24px] font-semibold">Create AI Ads</span>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/image-4.png"
                alt="ready-to-launch"
                width={475}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
)
}