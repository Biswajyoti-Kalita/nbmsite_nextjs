import Navbar from "@/components/Navbar";
import MarketingCardGroup from "@/components/MarketingCardGroup";
import BrandsScroller from "@/components/BrandsScroller";

import KnowledgeHubCard from "@/components/KnowledgeHubCard";
import KnowledgeHubCard2 from "@/components/KnowledgeHubCard2";
import TestimonialGroup from "@/components/TestimonialGroup";
import Footer from "@/components/Footer";
import Image from "next/image";
import ActionSidebar from "@/components/ActionSidebar";
import AboutUsImageCard from "@/components/AboutUsImageCard";
import GradientButton from "@/components/GradientButton";
import PodcastCaseStudy from "@/components/PodcastCaseStudy";
import ReadyToLaunch from "@/components/ReadyToLaunch";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen h-full  w-full flex flex-col items-center justify-center bg-white">
    <div className="bg-white w-full lg:max-w-[1440px]">
      <Navbar bgColor="bg-white" bgColorOnOpen="bg-[#F11F68]" isPrimary={true} isHome={true} />

      <section
        className="w-full bg-white rounded-xl p-4 mt-[64px] md:mt-[80px] md:mt-0 md:p-[80px] relative"
        id="home"
        data-aos="fade-up"
      >

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-white">
          <div>
            <h1 className="font-semibold tracking-[2%] text-[48px] md:text-5xl lg:text-[60px] leading-[54px] md:leading-[72px] tracking-[-0.02em] text-[#262626]">
              The Audio Advertising Company
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-center justify-end">
            <h6 className="text-[18px] leading-[28px] md:text-xl font-normal text-[#344054]">
              All your podcast advertising in one powerful place.
            </h6>
          </div>
        </div>
      {/* Wave Background Section */}
      <div 
        className="w-full bg-no-repeat absolute left-0 right-0 opacity-90"
      >
          <Image src="/assets/images/waves.png" alt="hero-image" className="w-full bg-bottom bg-no-repeat h-[230px] opacity-10" width={1440} height={230} />
      </div>

        <div className="mt-8 md:mt-[64px] z-10" data-aos="fade-up">
          <MarketingCardGroup />
        </div>
      </section>

      <BrandsScroller />

      <section
        id="about-us"
        className="w-full bg-[#FFF9FE] flex flex-col items-center justify-center rounded-xl py-8 md:py-[84px] px-4 md:px-[96px] gap-8 md:gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center lg:gap-[64px]"
        >
          <div
            className="flex flex-col items-start justify-start gap-[16px] md:gap-[32px] pb-4 md:pb-[30px]"
          >
            <span
              className="border-color-3 border border-1 py-[3px] px-[16px] rounded-3xl color-3 font-medium text-sm md:text-base leading-[150%] tracking-[-0.01em] text-[#F11F68]"
            >
              About Us
            </span>
            <h1
              className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px] tracking-2%"
            >
              Inside Next Audio: The Team Behind Global Audio Campaigns
            </h1>
          </div>
          <div
            className="flex flex-col items-start justify-end gap-4 md:gap-[32px] max-w-[520px]"
          >
            <p
              className="text-[#344054] text-base md:text-lg lg:text-[20px] leading-tight md:leading-[28px] font-normal"
            >
              Discover how we support advertisers, podcasters, and publishers
              with global reach and trusted audio advertising solutions.
            </p>
            <Link href="/about-us" className="w-full">
            <GradientButton            
              text="Learn About Next Audio"
              className="h-[44px] px-4"
              textClassName="text-[16px] leading-[24px] font-normal"
              rightIcon={
                <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13.959L13 1.95898M13 1.95898H5M13 1.95898V9.95898"
                  stroke="#FFFEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              }            
              />
              </Link>
              
          </div>
        </div>
        <div
          className="max-w-[1440px] w-full grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4 md:gap-[24px]"
          data-aos="fade-up"
        >

          <AboutUsImageCard title="300+" description="Active brands & agencies" image="/assets/images/about_us_card_1.jpg" />

          <AboutUsImageCard title="90+" description="Global markets" image="/assets/images/about_us_card_2.jpg" />

          <AboutUsImageCard title="850+" description="Campaigns delivered" image="/assets/images/about_us_card_3.jpg" />

          <AboutUsImageCard title="55,000+" description="Podcasts in the network" image="/assets/images/about_us_card_4.jpg" />

        </div>
      </section>

      <PodcastCaseStudy title="Podcast Advertising Case Studies & Audio Campaign Results" />


      <section
        className=" max-w-[360px] lg:max-w-[1440px] w-full bg-[#FFFEFF] flex flex-col items-start justify-start py-8 md:py-[80px] px-4 md:px-[96px] gap-8 md:gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="max-w-[1440px] flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-4 md:gap-[24px]"
        >
          <div className="lg:col-span-4">
            <h1
              className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px] tracking-[-0.02em]"
            >
              Next Audio Knowledge Hub
            </h1>
          </div>
          <div className="max-w-[520px]">
            <h6
              className="text-[#344054] text-base md:text-lg lg:text-[20px] leading-[24px] md:leading-[28px] font-normal"
            >
              Insights, tools, and trends from our LinkedIn feed, webinars, and LinkedIn
              feed
            </h6>
          </div>
        </div>  

        <div
          className="max-w-[1440px] hidden  lg:flex flex-row w-full justify-between items-center gap-4 px-4 lg:px-0 md:gap-[20px] overflow-x-scroll"
          data-aos="fade-up"
        >
          <div
            className="flex  flex-row lg:flex-col items-start justify-start gap-[10px] border-0 border-[#E8E8E8] rounded-[16px]  px-4 lg:px-0 w-full"
          >
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7401992989125873665?collapsed=1"  className="min-h-[450px] w-full"  title="Embedded post"></iframe>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7399473677882490881?collapsed=1"  className="min-h-[650px] w-full"  title="Embedded post"></iframe>
          </div>

          <div
            className="flex  flex-row lg:flex-col items-start justify-start gap-[10px] border-0 border-[#E8E8E8] rounded-[16px]  px-4 lg:px-0 w-full"
          >
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7399289143987531777?collapsed=1"  className="min-h-[550px] w-full"  title="Embedded post"></iframe>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7394402341740986369?collapsed=1"  className="min-h-[550px] w-full"  allowFullScreen={true} title="Embedded post"></iframe>
          </div>
          <div
            className="flex  flex-row lg:flex-col items-start justify-start gap-[10px] border-0 border-[#E8E8E8] rounded-[16px]  px-4 lg:px-0 w-full"
          >
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7393702711478759424?collapsed=1"  className="min-h-[550px] w-full" title="Embedded post"></iframe>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7391942740739121152?collapsed=1"  className="min-h-[550px] w-full" allowFullScreen={true} title="Embedded post"></iframe>
          </div>

s        </div>
      </section>
        
      <TestimonialGroup />
      <ReadyToLaunch />

      <ActionSidebar />
    </div>
    <Footer />
    </div>
  );
}
