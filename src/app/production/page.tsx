import ActionSidebar from "@/components/ActionSidebar";
import BrandsScroller from "@/components/BrandsScroller";
import Breadcrumb from "@/components/Breadcrumb";

import FAQCard from "@/components/FAQCard";
import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import Navbar from "@/components/Navbar";

import TestimonialGroup from "@/components/TestimonialGroup";
import Image from "next/image";
import PodcastCaseStudy from "@/components/PodcastCaseStudy";
import QACollapseableContainer from "@/components/QACollapseableContainer";
import AdvertiserLaunchCampaign from "@/components/AdvertiserLaunchCampaign";
import LaunchYourPodcast from "@/components/LaunchYourPodcast";
import PopularChannels from "@/components/PopularChannels";
import AdvertiserBanner from "@/components/AdvertiserBanner";
import AdvertiserMapSection from "@/components/AdvertiserMapSection";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FAQSection from "@/components/FAQSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Production() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar bgColor="bg-[#B11E86]" bgColorOnOpen="bg-[#B11E86]" linkColor="#FFFEFF" />


      <div className="bg-[#B11E86] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
        {/* <AdvertiserBanner /> */}
        <PageBanner
          breadcrumb={[{ name: "For Advertisers", link: "/advertisers" }]}
          headline="Podcast Production Services"
          title="Branded podcast and original show production"
          description="From concept to creation, we help businesses and individuals launch professional podcasts your customers want to listen to."
          image="/assets/images/advertisers-right-banner-bg.png"
          buttons={[ {text: "Book a Call", type: "secondary", showCallMeBackModal: true, classNames:"w-[184px]"}, { text: "Share a Brief", type: "tertiary", showBriefModal: true, classNames:"w-[184px]" }]}
        />

      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <section className=" pt-[84px] lg:pt-[96px] pb-[48px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF] lg:max-w-[1440px]">
            <div className="w-full flex flex-col lg:flex-row px-[16px] lg:px-[80px] items-center justify-center gap-[16px] lg:gap-[24px]">
              <div className="w-full text-start">
                <h1 className="gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                  Brands That Trust Us
                </h1>
              </div>
              <div className="py-[8px]">
                <p className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Over 300 advertisers have launched more than 850 successful
                  campaigns, across every budget, goal, and industry.
                </p>
              </div>
            </div>
            <BrandsScroller />
          </section>

          <section className="w-full flex flex-col items-center justify-center px-[16px]  py-[84px] lg:py-[80px] lg:px-[80px] bg-[#FFFEFF] gap-[64px]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[16px] lg:gap-[24px]">
              <div className="w-full text-start">
                <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px]">
                Podcast Production Services
                </h1>
              </div>
              <div className="w-full text-start">
                <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Professional end-to-end podcast production, tailored to your brand and audience.
                </p>
              </div>
            </div>
            <QACollapseableContainer data={[
              {
                image: "/assets/images/targeting.png",
                title: "Creative Development",
                description: "We shape your podcast concept, format, and storyline to match your brand’s voice and goals."
              },
              {
                image: "/assets/images/execution.jpg",
                title: "End-to-End Production",
                description: "From scripting to recording, editing, and sound design, we manage every detail in partnership with you."
              },
              {
                image: "/assets/images/format.jpg",
                title: "Host & Guest Management",
                description: "We help source, prep, and coordinate talent to bring authority and credibility to your show."
              },
              {
                image: "/assets/images/personalization.jpg",
                title: "Branding & Sonic Identity",
                description: "Custom artwork and audio branding that make your podcast instantly recognisable and adds authority."
              },
              {
                image: "/assets/images/targeting.jpg",
                title: "Distribution & Promotion",
                description: "We launch your show on all major platforms and support growth with PR and promotion."
              }
            ]} />
          </section>

          <section className="flex flex-row items-center justify-center px-[16px] lg:px-0 pb-[80px] lg:pb-0">
            <div
              className="w-full flex flex-col items-center justify-center px-[16px] py-[32px] lg:py-[48px] gap-[64px] max-h-[506px] lg:max-h-[368px] rounded-[16px] relative bg-cover bg-center max-w-[1280px]"
              style={{
                backgroundImage: "url(/assets/images/diverse-group.jpg)",
              }}
            >
              <div className="absolute z-10 inset-0 bg-[#091A3A] opacity-60 rounded-[16px]"></div>
              <div className="w-full z-20 flex flex-col items-start justify-center gap-[40px] p-[32px] lg:p-[64px] rounded-[16px]">
                <div>
                  <h1 className="text-[#D6E4FF] text-[34px] leading-[42px] font-semibold">
                  <b>73% </b> of podcast listeners say they trust 
                  </h1>
                  <h1 className="text-[#D6E4FF] text-[34px] leading-[42px] font-semibold">
                    cthe brands they hear in podcasts (Edison/IAB)
                  </h1>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-start lg:justify-end gap-[64px]">
                  <div>
                    <h1 className="text-[#D6E4FF] text-[34px] leading-[42px] font-semibold">
                    <b>30–60 mins</b> is the average time audiences 
                    </h1>
                    <h1 className="text-[#D6E4FF] text-[34px] leading-[42px] font-semibold">
                    spend with a single episode (IAB, 2024)
                    </h1>
                  </div>
                  <div className="flex flex-row h-full items-start lg:items-end justify-start lg:justify-end">
                    <Link href="/about-us">
                      <GradientButton text="Meet Next Audio" type="secondary" className="h-[44px] w-[184px]" textClassName="text-[16px] leading-[24px] font-semibold" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section id="featureProjects" className="w-full bg-[#F8F9FA] flex flex-col items-center justify-center rounded-none lg:rounded-xl py-8 py-[84px] md:py-[80px] px-4 md:px-[96px] gap-[46px] md:gap-[64px]">
            <div className="max-w-[1440px] w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[32px] md:gap-[24px]">
              <div className="lg:max-w-[70%]">
                <h1 className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px]">
                Featured Projects

                </h1>
              </div>
            </div>
            <div
              className="max-w-[14400px] flex flex-col lg:flex-row justify-start w-full items-center gap-4 gap-[40px]"
            >
              <FeaturedProjects />
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center px-[16px] py-[84px] lg:py-[96px] bg-[#FFFFFF] gap-[64px]">
            <div className="w-full flex flex-col lg:flex-row max-w-[1280px] items-start justify-center gap-[46px] lg:gap-[51px]">
              <div className="w-full flex flex-col items-start justify-center gap-[40px]">
                <div className="w-full flex flex-col items-start justify-center gap-[24px]">
                  <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px]">
                    Why Audio?
                  </h1>
                  <div>
                    <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      More attention, less skipping. Audio is proven to drive
                      attention, trust, and results across the full funnel.
                    </p>
                  </div>
                </div>
                <div>
                  <span className="gradient-text py-[10px] px-[16px] flex flex-row items-center justify-center gap-[6px] text-[16px] leading-[24px]">
                    Discover why audio advertising
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M18 6H10M18 6V14"
                        stroke="url(#paint0_linear_1984_4421)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1984_4421"
                          x1="6"
                          y1="12"
                          x2="18"
                          y2="12"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F11F68" />
                          <stop offset="1" stopColor="#162ABF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/images/why_audio.png"
                  alt="Case Study"
                  width={640}
                  height={400}
                  className="w-full object-cover lg:w-[640px] lg:h-[400px] rounded-[20px]"
                />
              </div>
            </div>
          </section>


        </div>
      </div>

          <FAQSection faqs={[
              {
                title: "What regions do you operate in?",
                description:
                  "We offer global reach across North America, Europe, the Middle East, Asia-Pacific, and beyond. Our inventory spans major podcast platforms and streaming services, ensuring your campaigns can target audiences wherever they listen.",
              },
              {
                title:
                  "Can I target specific countries, languages, or audience segments?",
                description:
                  "Next Audio is a platform that allows you to create and manage your podcast advertising campaigns.",
              },
              {
                title: "What types of audio ads can I run?",
                description:
                  "Next Audio is a platform that allows you to create and manage your podcast advertising campaigns.",
              },
              {
                title:
                  "How do I measure the performance of my audio campaigns?",
                description:
                  "Next Audio is a platform that allows you to create and manage your podcast advertising campaigns.",
              },
              {
                title:
                  "What is the minimum budget required to start a campaign?",
                description:
                  "Next Audio is a platform that allows you to create and manage your podcast advertising campaigns.",
              },
            ]} />

      <Footer />
      <ActionSidebar />
    </div>
  );
}
