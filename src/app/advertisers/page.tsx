import ActionSidebar from "@/components/ActionSidebar";
import BrandsScroller from "@/components/BrandsScroller";

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
import AdvertiserMapSection from "@/components/AdvertiserMapSection";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FAQSection from "@/components/FAQSection";
import Insights from "@/components/Insights";

export default function Advertisers() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar bgColor="bg-[#B11E86]" bgColorOnOpen="bg-[#B11E86]" linkColor="#FFFEFF" />


      <div className="bg-[#B11E86] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
        {/* <AdvertiserBanner /> */}
        <PageBanner
          breadcrumb={[{ name: "For Advertisers", link: "/advertisers" }]}
          headline="For Brands & Media Agencies"
          title="High-Impact Audio Ads. Made Easy for Busy Teams"
          description="Global high-performance podcast and digital audio campaigns,
              delivered quickly, efficiently, and tailored to your goals."
          image="/assets/images/advertiser.jpg"
          buttons={[ {text: "Launch Your Own Campaign", type: "secondary", link: "https://admanager.fm"}, { text: "Request a Proposal", type: "tertiary", showCallMeBackModal: true }]}
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
          <section className="pt-[84px] lg:pt-[96px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-center justify-center gap-[46px] lg:gap-[64px] bg-[#FFFFFF]">
            <div className="w-full flex flex-col lg:flex-row  items-center justify-center gap-[24px]">
              <div className="w-full text-start">
                <h1 className="gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                  Choose Your Audio Advertising Solution
                </h1>
              </div>
              <div className="py-[8px]">
                <p className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Same trusted results. Two flexible ways to get there. Pick the
                  setup that fits your workflow, team, and goals.
                </p>
              </div>
            </div>
            <AdvertiserLaunchCampaign />

          </section>
          <LaunchYourPodcast />


          <section className="w-full flex flex-col items-center justify-center px-[16px] pt-[32px] lg:pt-[48px] pb-[48px] lg:pb-[96px] lg:px-[80px] bg-[#FFFFFF]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[51px]">
              <div className="flex flex-col items-start justify-center gap-[32px] lg:gap-[40px] max-w-[540px]">
                <div className="flex flex-col items-start justify-center gap-[16px] lg:gap-[24px]">
                  <h1 className="gradient-text font-semibold text-[24px] lg:text-[42px] leading-[34px] lg:leading-[50px]">
                    One Partner. Total Audio Reach.
                  </h1>
                  <div className="flex flex-col items-start justify-center gap-[16px]">
                    <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      Reach your audience across global, regional, and niche
                      publishers, shows, and networks, all through one
                      streamlined buy.
                    </p>
                    <div className="flex flex-col items-start justify-center gap-[12px]">
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              strokeWidth="2.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                          No vendor juggling
                        </h6>
                      </div>

                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              strokeWidth="2.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                          No messy reporting
                        </h6>
                      </div>

                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              strokeWidth="2.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                          No delays
                        </h6>
                      </div>

                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              strokeWidth="2.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                          No missed customers
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="/assets/files/Advertiser Media Kit.pdf" target="_blank">
                  <GradientButton text="Download More Info" className="h-[44px]" textClassName="text-[16px] leading-[24px] font-semibold" />
                  </Link>
                </div>
              </div>
              <div>
                <PopularChannels />
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center px-[16px] py-[48px] lg:px-[80px] bg-[#FFFFFF] gap-[64px]">
            <div className="w-full flex flex-col px-[24px] pt-[36px]  pb-[0px] lg:py-[96px] lg:px-[64px] bg-[#FFEDFB] items-center justify-between gap-[24px]">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[148px]">
                <div className="flex flex-col items-start justify-start gap-[40px] max-w-[520px]">
                  <div className="flex flex-col items-start justify-center gap-[24px]">
                    <div className="flex flex-col items-start justify-center gap-[20px]">
                      <h1 className="text-[#F11F68] font-medium text-[16px] leading-[24px]">
                        Next Audio is your Trusted Audio Ad Partner
                      </h1>
                      <h2 className="gradient-text font-semibold text-[42px] leading-[50px]">
                        Proof not promises
                      </h2>
                    </div>
                    <div>
                      <p className="text-[#344054] text-[20px] leading-[28px]">
                        Transparent, brand-safe, high-performing campaigns,
                        powered by best-in-class tools built for podcast and
                        digital audio advertising.
                      </p>
                    </div>
                  </div>
                  <Link href="/assets/files/Advertiser Media Kit.pdf" target="_blank">
                  <GradientButton text="Download More Information" className="h-[44px]"  textClassName="text-[16px] leading-[24px] font-semibold"/>
                  </Link>
                  
                </div>
                {/* Right div */}
                <div className="flex flex-col items-start justify-center gap-[24px]">
                  <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                    <Image src="/assets/images/iab.png" alt="Proof" width={44} height={44} />

                    <h5 className="text-[#262626] font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      IAB-certified practices for trusted reporting
                    </h5>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
                    >
                      <rect width="44" height="44" rx="21.5" fill="#FFD0F4" />
                      <g clipPath="url(#clip0_942_14433)">
                        <path
                          d="M18.4993 25.3334C21.721 25.3334 24.3327 22.7217 24.3327 19.5001C24.3327 16.2784 21.721 13.6667 18.4993 13.6667C15.2777 13.6667 12.666 16.2784 12.666 19.5001C12.666 22.7217 15.2777 25.3334 18.4993 25.3334Z"
                          stroke="#FF3893"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.4993 30.3334C26.721 30.3334 29.3327 27.7217 29.3327 24.5001C29.3327 21.2784 26.721 18.6667 23.4993 18.6667C20.2777 18.6667 17.666 21.2784 17.666 24.5001C17.666 27.7217 20.2777 30.3334 23.4993 30.3334Z"
                          stroke="#FF3893"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_942_14433">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(11 12)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <h5 className="text-[#262626] font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      Independent brand safety & suitability controls
                    </h5>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
                    >
                      <rect width="44" height="44" rx="21.5" fill="#FFD0F4" />
                      <path
                        d="M28.5 29.5H14.8333C14.3666 29.5 14.1333 29.5 13.955 29.4092C13.7982 29.3293 13.6707 29.2018 13.5908 29.045C13.5 28.8667 13.5 28.6334 13.5 28.1667V14.5M28.5 17.8333L23.9714 22.3619C23.8064 22.5269 23.7239 22.6094 23.6288 22.6404C23.5451 22.6675 23.4549 22.6675 23.3712 22.6404C23.2761 22.6094 23.1936 22.5269 23.0286 22.3619L21.4714 20.8047C21.3064 20.6397 21.2239 20.5572 21.1288 20.5263C21.0451 20.4991 20.9549 20.4991 20.8712 20.5263C20.7761 20.5572 20.6936 20.6397 20.5286 20.8047L16.8333 24.5M28.5 17.8333H25.1667M28.5 17.8333V21.1667"
                        stroke="#FF3893"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <h5 className="text-[#262626] font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      Third-party analytics and conversion tracking
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col items-center justify-center px-[16px]  py-[84px] lg:py-[80px] lg:px-[80px] bg-[#FFFEFF] gap-[64px]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[16px] lg:gap-[24px]">
              <div>
                <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px]">
                  Audio Ad Formats & Targeting That Delivers
                </h1>
              </div>
              <div>
                <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Get audio ads that fit your brand, budget, and goals. Fast to
                  launch, easy to scale, and built to perform.
                </p>
              </div>
            </div>
            <QACollapseableContainer
            mediaKitLink="/assets/files/Advertiser Media Kit.pdf"            
            data={[
              {
                image: "/assets/images/targeting.png",
                title: "Targeting",
                description: "Minimise media wastage with precision targeting - by location, age, gender, genre, device, context, and more."
              },
              {
                image: "/assets/images/execution.jpg",
                title: "Execution",
                description: "Match formats to your goals and budget - from host-reads and sponsorships to programmatic at scale."
              },
              {
                image: "/assets/images/format.jpg",
                title: "Format",
                description: "Access the full digital audio landscape - reach listeners across podcasts, music, gaming, web radio, and smart speakers."
              },
              {
                image: "/assets/images/personalization.jpg",
                title: "Personalization",
                description: "Optimize every impression with Dynamic Creative - tailor your message by time, weather, location, and audience behaviour."
              }
            ]} />
          </section>

          <AdvertiserMapSection />

          <PodcastCaseStudy title="Podcast Advertising Case Studies & Audio Campaign Results" />

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
                  <Link href="/why-audio" className="cursor-pointer">
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
                  </Link>
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
                  <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                    Behind every great audio
                  </h1>
                  <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                    campaign…
                  </h1>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-start lg:justify-end gap-[64px]">
                  <div>
                    <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                      …is a team who knows{" "}
                    </h1>
                    <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                      how to make it work.
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

          <TestimonialGroup />
        </div>
      </div>
      <Insights />
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
                  "Yes. Our platform supports geo-targeting, language preferences, and audience segmentation based on demographics, interests, and listening behaviors, allowing for precise campaign targeting.",
              },
              {
                title: "What types of audio ads can I run?",
                description:
                  "We support various ad formats, including host-read sponsorships, pre-recorded spots, dynamic ad insertions, and branded content series. This flexibility ensures your message resonates effectively with your target",
              },
              {
                title:
                  "How do I measure the performance of my audio campaigns?",
                description:
                  "Our analytics tools provide insights into key metrics such as impressions, click-through rates, listen-through rates, and conversions. We also offer brand lift studies and integration with third-party measurement partners for comprehensive performance evaluation.",
              },
              {
                title:
                  "What is the minimum budget required to start a campaign?",
                description:
                  "We cater to a range of budgets. For self-serve campaigns via our AdManager platform, the minimum spend starts at $250 USD. For managed services, we recommend discussing your goals with our sales team to tailor a solution that fits your needs.",
              },
              {
                title: "How do I get started with launching a campaign?",
                description: "You can begin by signing up on our AdManager platform for self-serve options or contact our sales team for a full-service experience. We'll guide you through the process, from audience targeting to creative development and campaign deployment."
              },
              {
                title: "Which brands have you worked with?",
                description: "We've partnered with a diverse range of brands across various industries, including [Insert Notable Brands]. Our case studies highlight successful campaigns and can provide insights into our approach and results."
              },
              {
                title: "Can I run a campaign if I have a small budget?",
                description: "Absolutely. Our self-serve AdManager platform is designed to accommodate smaller budgets, providing access to premium inventory and targeting tools to maximize your campaign's impact."
              },
              {
                title: "Do you offer creative services for ad production?",
                description: "Yes. Our creative team can assist in developing compelling audio ads, from scripting to production, ensuring your message aligns with your brand and resonates with listeners."
              },
              {
                title: "How does billing work for campaigns?",
                description: "For self-serve campaigns, billing is handled through the AdManager platform, with charges based on impressions delivered. Managed service campaigns are billed according to the agreed-upon terms outlined in your service agreement."
              },
              {
                title: "How do you ensure brand safety and suitability?",
                description: "We use third-party verification tools and strict vetting processes to ensure your ads appear in safe, suitable environments. You have full control over targeting and exclusions, and we offer additional filters based on content category, tone, and genre to protect brand integrity."
              },
              {
                title: "What types of audio advertising formats do you support?",
                htmlDescription: `
                We offer a full range of audio ad formats to match your campaign goals: <br />
                <ul style="list-style: disc;padding-left: 30px;">
                <li><b>Programmatic ads</b> (dynamically inserted) for efficient scale</li>
                <li><b>Host-read sponsorships</b> for authenticity and deeper engagement</li>
                <li><b>Branded content and custom podcast series</b> for storytelling</li>
                <li><b>Short-form or seasonal bursts, </b>or <b>always-on strategies</b></li>
                </ul> <br /> We’ll help you choose the right format based on your objectives and budget.
                `,
                description: ""
              },
              {
                title: "Can you help us create our own branded podcast?",
                description: "Yes — while it's not our core offering, we do offer end-to-end podcast development for select clients. If you're interested in building a branded show to deepen audience engagement, get in touch and we'll explore the right creative and strategic fit for your brand."
              }
            ]} />

      <Footer />
      <ActionSidebar />
    </div>
  );
}
