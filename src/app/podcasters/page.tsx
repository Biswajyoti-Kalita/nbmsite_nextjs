import ActionSidebar from "@/components/ActionSidebar";
import BrandsScroller from "@/components/BrandsScroller";
import Button from "@/components/Button";
import CaseStudies from "@/components/CaseStudies";
import FAQCard from "@/components/FAQCard";
import FAQGroup from "@/components/FAQGroup";
import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import KnowledgeHubCard2 from "@/components/KnowledgeHubCard2";
import Navbar from "@/components/Navbar";
import QACollapasable from "@/components/QACollapasable";
import TestimonialGroup from "@/components/TestimonialGroup";
import Image from "next/image";

export default function Podcaster() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#511DB5]"
        bgColorOnOpen="bg-[#511DB5]"
        linkColor="#FFFEFF"
      />

      <div className="bg-[#511DB5] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
        <section
          className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start justify-start relative lg:max-w-[1440px]"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 h-[580px] px-4 lg:px-0">
            <div className="flex flex-row items-start justify-center gap-[12px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 14.1664H13.3333M9.18141 2.30312L3.52949 6.69906C3.15168 6.99291 2.96278 7.13983 2.82669 7.32383C2.70614 7.48682 2.61633 7.67044 2.56169 7.86566C2.5 8.08605 2.5 8.32537 2.5 8.804V14.8331C2.5 15.7665 2.5 16.2332 2.68166 16.5898C2.84144 16.9034 3.09641 17.1583 3.41002 17.3181C3.76654 17.4998 4.23325 17.4998 5.16667 17.4998H14.8333C15.7668 17.4998 16.2335 17.4998 16.59 17.3181C16.9036 17.1583 17.1586 16.9034 17.3183 16.5898C17.5 16.2332 17.5 15.7665 17.5 14.8331V8.804C17.5 8.32537 17.5 8.08605 17.4383 7.86566C17.3837 7.67044 17.2939 7.48682 17.1733 7.32383C17.0372 7.13983 16.8483 6.99291 16.4705 6.69906L10.8186 2.30312C10.5258 2.07541 10.3794 1.96155 10.2178 1.91779C10.0752 1.87917 9.92484 1.87917 9.78221 1.91779C9.62057 1.96155 9.47418 2.07541 9.18141 2.30312Z"
                  stroke="#D2D2D2"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#E8E8E8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#FFFEFF] font-medium text-[14px] leading-[22px]">
                For Podcasters
              </span>
            </div>

            <h1 className="font-medium uppercase text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF]">
              For Podcasters & Creators
            </h1>
            <div className="flex flex-col gap-[32px] items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  Monetize Your Podcast Without Working Harder
                </h1>
              </div>
              <h2 className="font-medium lg:font-semibold text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] text-[#FFFEFF]">
                Where podcasts of any language meet premium advertisers from
                around the world.
              </h2>
              <div className="flex flex-col lg:flex-row gap-[12px] items-start lg:items-center justify-start">
                <GradientButton
                  type="secondary"
                  text="Request a Call Back"
                  className="h-[44px] w-[184px]"
                />
                <GradientButton
                  type="tertiary"
                  text="Download Podcaster Pack"
                  className="h-[44px] w-[231px]"
                />
              </div>
            </div>
          </div>

          <div className=" relative  lg:absolute right-0 top-0 bottom-0">
            <Image
              src="/assets/images/podcasters-right-banner-bg.png"
              alt="podcasters-image"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <BrandsScroller />
          <section
            className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center justify-between relative lg:max-w-[1440px]"
            id="home"
          >
            <div className="w-full">
              <Image
                src="/assets/images/podcast-recording-session.jpg"
                alt="podcast-recording-session"
                className="w-full h-full object-cover"
                width={500}
                height={500}
                priority
              />
            </div>

            <div className="w-full flex flex-col items-start justify-center gap-[24px]">
              <h1 className="font-semibold text-[34px] lg:text-[48px] leading-[42px] lg:leading-[50px] gradient-text tracking-[-0.02em]">
                How Podcasters Earn with Next
              </h1>
              <div className="flex flex-col items-start justify-center gap-[12px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.58317 12.8333L11.0832 16.3333L18.0832 9.33329M24.4998 12.8333C24.4998 19.2766 19.2765 24.5 12.8332 24.5C6.38985 24.5 1.1665 19.2766 1.1665 12.8333C1.1665 6.38997 6.38985 1.16663 12.8332 1.16663C19.2765 1.16663 24.4998 6.38997 24.4998 12.8333Z"
                      stroke="#F11F68"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1>
                    <span className="font-semibold text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Dynamically inserted ads:
                    </span>
                    <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      {" "}
                      Get listed in{" "}
                      <a
                        target="_blank"
                        href="https://admanager.fm"
                        className="text-[#344054] underline"
                      >
                        AdManager.FM
                      </a>
                      , our self-serve platform used by agencies and brands
                      worldwide.
                    </span>
                  </h1>
                </div>

                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.58317 12.8333L11.0832 16.3333L18.0832 9.33329M24.4998 12.8333C24.4998 19.2766 19.2765 24.5 12.8332 24.5C6.38985 24.5 1.1665 19.2766 1.1665 12.8333C1.1665 6.38997 6.38985 1.16663 12.8332 1.16663C19.2765 1.16663 24.4998 6.38997 24.4998 12.8333Z"
                      stroke="#F11F68"
                      strokeWidth="2.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1>
                    <span className="font-semibold text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Host-read ads & sponsorships:{" "}
                    </span>
                    <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Be eligible for premium brand campaigns curated and
                      managed by our team.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[84px] lg:py-[48px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFEFF]">
            <div className="w-full flex flex-col lg:flex-row  items-center justify-between gap-[64px] rounded-[16px]">
              <div className="w-full flex flex-col items-start justify-center gap-[40px] max-w-[590px]">
                <div className="flex flex-col items-start justify-center gap-[24px]">
                  <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] gradient-text tracking-[-0.02em]">
                    Is Your Podcast a Good Fit for Next?
                  </h1>
                  <div className="flex flex-col items-start justify-center gap-[32px]">
                    <div className="flex flex-col items-start justify-center gap-[16px]">
                      <p className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                        To ensure quality for advertisers, we currently accept
                        shows that meet at least one of the following criteria:
                      </p>
                      <div className="flex flex-col items-start justify-center gap-[12px]">
                        <h1 className="flex flex-row items-center justify-start gap-[12px]">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.58317 12.8333L11.0832 16.3333L18.0832 9.33329M24.4998 12.8333C24.4998 19.2766 19.2765 24.5 12.8332 24.5C6.38985 24.5 1.1665 19.2766 1.1665 12.8333C1.1665 6.38997 6.38985 1.16663 12.8332 1.16663C19.2765 1.16663 24.4998 6.38997 24.4998 12.8333Z"
                              stroke="#F11F68"
                              strokeWidth="2.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                            Have been consistently publishing for 6 months or
                            more
                          </span>
                        </h1>

                        <h1 className="flex flex-row items-center justify-start gap-[12px]">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.58317 12.8333L11.0832 16.3333L18.0832 9.33329M24.4998 12.8333C24.4998 19.2766 19.2765 24.5 12.8332 24.5C6.38985 24.5 1.1665 19.2766 1.1665 12.8333C1.1665 6.38997 6.38985 1.16663 12.8332 1.16663C19.2765 1.16663 24.4998 6.38997 24.4998 12.8333Z"
                              stroke="#F11F68"
                              strokeWidth="2.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                            Reach 1,000+ monthly listeners
                          </span>
                        </h1>

                        <h1 className="flex flex-row items-center justify-start gap-[12px]">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.58317 12.8333L11.0832 16.3333L18.0832 9.33329M24.4998 12.8333C24.4998 19.2766 19.2765 24.5 12.8332 24.5C6.38985 24.5 1.1665 19.2766 1.1665 12.8333C1.1665 6.38997 6.38985 1.16663 12.8332 1.16663C19.2765 1.16663 24.4998 6.38997 24.4998 12.8333Z"
                              stroke="#F11F68"
                              strokeWidth="2.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                            Cover a highly niche topic or audience (e.g.
                            medical, aerospace, regional, etc.)
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#344054]">
                        We welcome podcasts in any language. Next is a global
                        network with demand from advertisers around the world.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-2">
                  <GradientButton
                    text="Download Podcaster Info Sheet"
                    type="secondary"
                    className="h-[44px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full rounded-[16px] overflow-hidden">
                  <Image
                    src="/assets/images/podcaster3.png"
                    alt="podcaster-package"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[48px] lg:pt-[96px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center rounded-[16px] gap-[20px] p-[0px] bg-[#FFFFFF] max-w-[1280px]">
              <div className="w-full flex flex-col items-start justify-center gap-[40px] bg-[#F11F68] rounded-[16px] p-[32px] lg:p-[64px] w-full">
                <div>
                  <h1 className="font-semibold text-[26px] lg:text-[32px] leading-[34px] lg:leading-[40px] tracking-[-0.02em] text-[#FFFEFF]">
                    Join the company trusted by thousands of creators to connect
                    with top global advertisers.
                  </h1>
                </div>
                <div className="flex flex-col items-start justify-center gap-[16px] w-full">
                  <div className="flex flex-col lg:flex-row items-start justify-center gap-[16px] w-full">
                    <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] min-w-[238px] w-full lg:w-auto">
                      <h1 className="font-semibold text-[32px] leading-[40px] tracking-[0.0em] gradient-text">
                        350+
                      </h1>
                      <h2 className="font-semibold text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0.0em] text-[#262626]">
                        Brands <br />& agencies
                      </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] min-w-[238px] w-full lg:w-auto">
                      <h1 className="font-semibold text-[32px] leading-[40px] tracking-[0.0em] gradient-text">
                        850+
                      </h1>
                      <h2 className="font-semibold text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0.0em] text-[#262626]">
                        Campaigns
                        <br /> delivered
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] w-full">
                    <h1 className="font-semibold text-[32px] leading-[40px] tracking-[0.0em] gradient-text">
                      90+
                    </h1>
                    <h2 className="font-semibold text-[20px] leading-[28px] tracking-[0.0em] text-[#262626]">
                      Global markets
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#F8F9FA] rounded-[16px]">
                <Image
                  src="/assets/images/popular-channels.png"
                  alt="podcaster-right-banner-bg"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row items-start justify-center py-[84px] lg:py-[96px] px-[16px] lg:px-[80px] gap-[46px] lg:gap-[64px] bg-[#FFFFFF] max-w-[1440px]">
              <div className="w-full flex flex-col items-start justify-center gap-[24px]">
                <div className="w-full flex flex-col items-start justify-center gap-[16px]">
                  <span className="text-[#F11F68] border border-[#F11F68] rounded-[31px] px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-[16px] leading-tight md:leading-[24px] font-medium">
                    FAQs
                  </span>
                  <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px]">
                    Got Questions? We’ve Got Answers!
                  </h1>
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-[32px]">
                  <p className="text-[#091A3A] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                    Here are quick answers to some of the most common questions
                    about Next
                  </p>
                  <div className="flex flex-row gap-[10px]">
                    <span className="text-[#091A3A] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] font-semibold">
                      Have another question?
                    </span>
                    <span className="gradient-text font-semibold text-[20px] leading-[28px]">
                      Reach Out
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-[16px]">
                {[
                  {
                    title: "Is this only for host-read ads?",
                    description:
                      "No, we run a range of campaigns including programmatic ads and premium brand partnerships. You’ll be considered for both, depending on fit.",
                  },
                  {
                    title:
                      "Can I target specific countries, languages, or audience segments?",
                    description:
                      "Next is a platform that allows you to create and manage your podcast advertising campaigns.",
                  },
                  {
                    title: "What types of audio ads can I run?",
                    description:
                      "Next is a platform that allows you to create and manage your podcast advertising campaigns.",
                  },
                  {
                    title:
                      "How do I measure the performance of my audio campaigns?",
                    description:
                      "Next is a platform that allows you to create and manage your podcast advertising campaigns.",
                  },
                  {
                    title:
                      "What is the minimum budget required to start a campaign?",
                    description:
                      "Next is a platform that allows you to create and manage your podcast advertising campaigns.",
                  },
                ].map((item, index) => (
                  <FAQCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    open={index === 0}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center py-[84px] lg:py-[96px]  px-[16px] lg:px-[80px] gap-[64px] bg-[#F8F9FA]">
            <div className="w-full flex flex-col lg:flex-row items-end justify-between gap-[16px] lg:gap-[24px] max-w-[1280px] max-h-[94px]">
              <div className="flex flex-col items-start justify-center gap-[16px]">
                <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] gradient-text">
                  Insights That Matter to You
                </h1>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Guides, events, updates, and more - filtered just for you.
                </h6>
              </div>
              <div>
                <GradientButton
                  text="Explore Advertiser Knowledge Hub"
                  className="h-[44px] w-[293px]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[16px] lg:gap-[24px] max-w-[1280px]">
              <div className="w-full relative">
                <div
                  className="bg-cover bg-center w-full md:w-[300px] h-[226px] lg:h-[323px] p-[24px] flex flex-col justify-between rounded-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${"/assets/images/card-bg-22.jpg"})`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl z-0 rounded-lg p-4 shadow-md [background:linear-gradient(268.96deg,rgba(255,255,255,0.2)_100.9%,#ffffff_99.44%)]"></div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-full">
                      <span className="px-2.5 py-2 text-[#FFFEFF] rounded-3xl border border-[#FFFEFF] text-sm">
                        Webinar
                      </span>
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                      <h6 className="font-normal text-[16px] leading-[24px] text-[#E8E8E8]">
                        16 June 2025
                      </h6>
                      <h6 className="font-medium text-[18px] leading-[26px] text-[#FFFEFF]">
                        Podcast Advertising vs Social Media Marketing: Which
                        Drives Better Engagement
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full relative">
                <div
                  className="bg-cover bg-center w-full md:w-[300px] h-[323px] p-[24px] flex flex-col justify-between rounded-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${"/assets/images/insight-2.png"})`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl z-0 rounded-lg p-4 shadow-md [background:linear-gradient(268.96deg,rgba(241,31,104,0.2)_100.9%,#ffffff_99.44%)]"></div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-full">
                      <span className="px-2.5 py-2 text-[#FFFEFF] rounded-3xl border border-[#FFFEFF] text-sm">
                        Webinar
                      </span>
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                      <h6 className="font-normal text-[16px] leading-[24px] text-[#E8E8E8]">
                        16 June 2025
                      </h6>
                      <h6 className="font-medium text-[18px] leading-[26px] text-[#FFFEFF]">
                        Podcast Advertising vs Social Media Marketing: Which
                        Drives Better Engagement
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full relative">
                <div
                  className="bg-cover bg-center w-full md:w-[630px] h-[323px] p-[24px] flex flex-col justify-between rounded-2xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${"/assets/images/insight-3.jpg"})`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl z-0 rounded-lg p-4 shadow-md [background:linear-gradient(268.96deg,rgba(136,48,252,0.2)_100.9%,#ffffff_99.44%)]"></div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-full">
                      <span className="px-2.5 py-2 text-[#FFFEFF] rounded-3xl border border-[#FFFEFF] text-sm">
                        Webinar
                      </span>
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                      <h6 className="font-normal text-[16px] leading-[24px] text-[#E8E8E8]">
                        16 June 2025
                      </h6>
                      <h6 className="font-medium text-[18px] leading-[26px] text-[#FFFEFF]">
                        Podcast Advertising vs Social Media Marketing: Which
                        Drives Better Engagement
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <ActionSidebar />
    </div>
  );
}
