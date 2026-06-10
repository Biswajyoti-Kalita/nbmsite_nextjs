"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import { useState } from "react";
import { openCallMeBackModal } from "@/util/modalEvents";
import Link from "next/link";

export default function PublisherRevenuSection() {
  const [selectedTab, setSelectedTab] = useState("self-serve-tools");
  return (
    <div className="w-full flex flex-col gap-[40px] md:p-[40px] border-0 lg:border-1 border-[#D2D2D2] rounded-[16px]">
      <div className="w-full flex gap-[10px] flex-row overflow-x-scroll">
        <button
          onClick={() => setSelectedTab("self-serve-tools")}
          className={`min-w-[222px] flex items-center justify-center max-h-[44px] gap-[6px] px-[16px] py-[10px] rounded-[44px]  border-2  ${
            selectedTab === "self-serve-tools"
              ? "border-[#F11F68] bg-[#FFEDFB] text-[#F11F68] "
              : "border-[#344054] text-[#344054]"
          }  font-medium text-[16px] leading-[24px] tracking-[0] font-[Switzer] hover:bg-[#F11F68] hover:text-white transition-colors`}
        >
          Appear in self-serve tools
        </button>
        <button
          onClick={() => setSelectedTab("premium-campaigns")}
          className={`min-w-[271px] flex items-center justify-center max-h-[44px] gap-[6px] px-[16px] py-[10px] rounded-[44px] border-2 ${
            selectedTab === "premium-campaigns"
              ? " border-2 border-[#F11F68] bg-[#FFEDFB] text-[#F11F68] "
              : "border-[#344054] text-[#344054]"
          }  font-medium text-[16px] leading-[24px] tracking-[0] font-[Switzer] hover:bg-[#344054] hover:text-white transition-colors`}
        >
          Included in Premium Campaigns
        </button>
      </div>

      {selectedTab === "self-serve-tools" && (
        <div className="w-full flex flex-wrap gap-[40px] md:flex-nowrap py-[32px] lg:py-0 border-1 border-r-0 border-l-0 border-[#D2D2D2] lg:border-0">
          <Image
            src="/assets/images/publishers_self-serve tools.png"
            alt="podcasters-image"
            className="w-full md:w-[50%] h-auto object-cover rounded-[16px]"
            width={500}
            height={450}
          />
          <div className="flex flex-col gap-[40px]">
            <h1 className="font-[Switzer] font-semibold text-[36px] leading-[44px] tracking-[-0.02em] text-[#262626]">
              Plug into Programmatic Demand
            </h1>

            <div className="flex flex-col items-start justify-center gap-[16px]">
              <h5 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Connect your ad inventory to advertisers using EARO to book
                programmatic podcast campaigns.
              </h5>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px] h-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Live exposure to buyers across DV360 and our EARO
                  platform
                </h6>
              </div>

              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Easy integration and hands-off monetization
                </h6>
              </div>

              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Automated ad delivery and reporting
                </h6>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Built for scalable, consistent revenue
                </h6>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-[12px]">
              <GradientButton
                type="primary"
                text="Book a Call Back"
                className="h-[48px] w-[158px]"
                textClassName="text-[16px] leading-[24px] "
                onClick={openCallMeBackModal}
              />
              <Link href="https://app.earo.ai" target="_blank">
              <GradientButton
                type="secondary"
                text="Check Out AI Studio"
                className=" w-[182px]"
                textClassName="text-[16px] leading-[24px] font-semibold"
              />
              </Link>              
            </div>
          </div>
        </div>
      )}

        {selectedTab === "premium-campaigns" && (
        <div className="w-full flex flex-wrap gap-[40px] md:flex-nowrap py-[32px] lg:py-0 border-1 border-r-0 border-l-0 border-[#D2D2D2] lg:border-0">
          <Image
            src="/assets/images/women-radio-sow.jpg"
            alt="podcasters-image"
            className="w-full md:w-[50%] h-auto object-cover rounded-[16px]"
            width={500}
            height={450}
          />
          <div className="flex flex-col gap-[40px]">
            <h1 className="font-[Switzer] font-semibold text-[36px] leading-[44px] tracking-[-0.02em] text-[#262626]">
            Included in Premium Campaigns
            </h1>

            <div className="flex flex-col items-start justify-center gap-[16px]">
              <h5 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
              Get pitched to top-tier brands looking for  sponsorships, custom ads, branded content and host reads, matched and managed b Next Audio&apos;s expert team.
              </h5>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Get your content in front of premium advertisers
                </h6>
              </div>

              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Earn from brand-safe, high-value campaigns
                </h6>
              </div>

              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Opportunities across sponsorship, branded content, and dynamic ads
                </h6>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <Image
                  src="/assets/images/check_Icon.png"
                  alt="podcasters-image"
                  className="w-[26px]"
                  width={26}
                  height={26}
                ></Image>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Hands-on support to align with advertiser needs and secure bookings
                </h6>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-[12px]">
              <GradientButton
                type="primary"
                text="Book a Call Back"
                className="h-[48px] w-[158px]"
                textClassName="text-[16px] leading-[24px] "
              />
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
