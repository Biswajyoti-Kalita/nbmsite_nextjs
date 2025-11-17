"use client";
import { openCallMeBackModal } from "@/util/modalEvents";
import AboutUsImageCard from "./AboutUsImageCard";
import GradientButton from "./GradientButton";

export default function AboutUsSection() {
    return (
        <section className="w-full flex flex-col gap-[46px] lg:gap-[64px]">
          <div className="w-[100%] flex items-center justify-center flex-wrap md:flex-nowrap gap-[43px]">
            <div className="flex flex-col gap-[16px] lg:gap-[24px] w-full md:w-[90%]">
              <button className="max-w-[205px] inline-flex items-center justify-center min-h-[32px] gap-[6px] px-[16px] rounded-[44px] border-1 border-[#F11F68] bg-[#FFEDFB] text-[#F11F68] font-medium text-[16px] leading-[24px] tracking-[0.01rem] whitespace-nowrap">
                Global reach and results
              </button>

              <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                Join a Network That Brands Already Buy From
              </h1>
            </div>
            <div className="flex flex-col gap-[32px]">
              <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Campaigns from leading brands mean your shows are seen,
                considered, and chosen for real revenue potential.
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

          <div
            className="max-w-[1440px] w-full grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4 md:gap-[24px]"
            data-aos="fade-up"
          >
            <AboutUsImageCard
              title="300+"
              description="Active brands & agencies"
              image="/assets/images/about_us_card_1.jpg"
            />

            <AboutUsImageCard
              title="90+"
              description="Global markets"
              image="/assets/images/about_us_card_2.jpg"
            />

            <AboutUsImageCard
              title="850+"
              description="Campaigns delivered"
              image="/assets/images/about_us_card_3.jpg"
            />

            <AboutUsImageCard
              title="35,000+"
              description="Podcasts in the network"
              image="/assets/images/about_us_card_4.jpg"
            />
          </div>
        </section>
    )
}