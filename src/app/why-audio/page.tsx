import ActionSidebar from "@/components/ActionSidebar";
import AudioFunnel from "@/components/AudioFunnel";

import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import Metric from "@/components/Metric";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import PodcastCaseStudy from "@/components/PodcastCaseStudy";
import Image from "next/image";
import Link from "next/link";

export default function WhyAudio() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#162ABF]"
        bgColorOnOpen="bg-[#162ABF]"
        linkColor="#FFFEFF"
      />

      <div className="bg-[#162ABF] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">


        <PageBanner
          breadcrumb={[{ name:  "Why Audio", link: "/why-audio" }]}
          headline=""
          title="Why Podcast Advertising Works"
          description="You’re sitting on one of the most powerful, underused tools in
                modern media. Audio delivers measurable results across the full
                funnel."
          image="/assets/images/why_audio.jpg"
          buttons={[]}
        />

      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <section
            className="w-full p-4 pt-[84px] pb-[48px] mt-[64px] md:mt-0 md:py-[96px] md:px-[80px] flex flex-col gap-[64px] items-center justify-between relative lg:max-w-[1440px]"
            id="home"
          >
            <div className="w-full flex flex-col items-start justify-center gap-[64px] rounded-[16px]">
              <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-[40px] lg:gap-[64px]">
                <Image
                  src="/assets/images/professonal-microphone.jpg"
                  alt="why_audio_1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover max-w-[480px] max-h-[285px] rounded-[16px] order-2 lg:order-1"
                />
                <div className="w-full flex flex-col items-start justify-center gap-[16px] order-1 lg:order-2">
                  <div className="w-full flex flex-col items-start justify-center py-[4px] gap-[8px]">
                    <h1 className="font-medium lg:font-semibold uppercase text-[16px] leading-[24px] text-[#F11F68] tracking-[-0.02em]">
                      Results You Can Measure
                    </h1>
                  </div>
                  <div className="w-full flex flex-col items-start justify-center gap-[32px]">
                    <div className="w-full">
                      <p className="font-medium lg:font-semibold text-[#262626] text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px] tracking-[0em]">
                        Podcast and audio ads don’t just get heard, they drive
                        action. From awareness to purchase, audio is one of the
                        most effective performance channels in media today.
                      </p>
                    </div>
                    <GradientButton
                      text="Explore Case Studies"
                      type="primary"
                      className="h-[44px] w-[220px] rounded-[4px]"
                      textClassName="text-[16px] leading-[24px]"
                      rightIcon={
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 13L13 1M13 1H5M13 1V9"
                            stroke="#FFFEFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-[16px] lg:gap-[24px]">
              <div className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[32px] h-auto lg:h-[188px] max-w-[410px] gap-[16px] lg:gap-[24px]">
                <h1 className="font-medium lg:font-semibold text-[#000000] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[48px] tracking-[0em]">
                  65%
                </h1>
                <p className="font-medium lg:font-semibold text-[#262626] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                  of podcast listeners have taken action after hearing an ad
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[32px] h-auto lg:h-[188px] max-w-[410px] gap-[16px] lg:gap-[24px]">
                <h1 className="font-medium lg:font-semibold text-[#000000] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[48px] tracking-[0em]">
                  4.4x ROAS
                </h1>
                <p className="font-medium lg:font-semibold text-[#262626] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                  return on Ad Spend from audio ad campaigns
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[32px] h-auto lg:h-[188px] max-w-[410px] gap-[16px] lg:gap-[24px]">
                <h1 className="font-medium lg:font-semibold text-[#000000] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[48px] tracking-[0em]">
                  22%
                </h1>
                <p className="font-medium lg:font-semibold text-[#262626] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                  average increase in conversion rate for brands running podcast
                  campaigns compared to other digital formats
                </p>
              </div>
            </div>
          </section>

          <Metric />

          <AudioFunnel />

          <section className="w-full flex flex-col items-start justify-start bg-[#FFFEFF] gap-[46px] lg:gap-[64px] py-[84px] lg:py-[96px] px-[16px] lg:px-[80px]">
            <h1 className="font-semibold lg:font-bold text-[34px] capitalize lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em] gradient-text">
              Still thinking audio is niche?
            </h1>
            <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[16px]">
              <div className="w-full lg:w-auto">
                <div className="w-full flex flex-col items-start gap-[16px] justify-between rounded-[16px] p-[20px] lg:p-[40px] bg-[#FFEDFB] h-[146px] lg:h-[275px] max-w-[415px]">
                  <h1 className="font-medium lg:font-semibold w-full  text-[#F11F68] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                    584.1 M
                  </h1>
                  <p className="font-medium text-[#262626] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                    Podcast listeners worldwide <br />
                    (6.83% year-over-year increase)
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="w-full flex flex-col items-start justify-between rounded-[16px] bg-[#FFEDFB] h-[275px] max-w-[415px]">
                  <Image
                    src="/assets/images/why_audio_1.png"
                    alt="why_audio_1"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover   rounded-[16px]"
                  />
                </div>
                <div className="w-full flex flex-col items-start gap-[16px] justify-between rounded-[16px] p-[20px] lg:p-[40px] bg-[#FFEDFB] h-[146px] lg:h-[275px] max-w-[415px]">
                  <p className="font-medium text-[#262626] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                    On average, digital audio listeners spend
                  </p>

                  <div className="w-full flex flex-col items-start justify-center gap-[4px]">
                    <h1 className="font-semibold text-[#F11F68] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                      over 90 min
                    </h1>
                    <h6 className="font-medium text-[#F11F68] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      per day with audio content
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="w-full flex flex-col items-start justify-between rounded-[16px] p-[20px] lg:p-[40px] bg-[#FFEDFB] h-[212px] lg:h-[275px] max-w-[415px]">
                  <h1 className="font-semibold text-[#F11F68] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                    1 in 2 people globally
                  </h1>
                  <p className="font-medium text-[#262626] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                    Now listen to some form of digital audio content weekly
                    (including music, podcasts, and online radio.)
                  </p>
                </div>
                <div className="w-full flex flex-col items-start justify-between rounded-[16px] bg-[#FFEDFB] h-[275px] max-w-[415px]">
                  <Image
                    src="/assets/images/why_audio_2.png"
                    alt="why_audio_2"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover   rounded-[16px]"
                  />
                </div>
              </div>
            </div>
          </section>

   
          <PodcastCaseStudy title="Podcast Advertising Case Studies & Audio Campaign Results" />

          <section className="w-full flex flex-col items-center justify-center px-[0px] lg:px-[80px] py-[32px] lg:py-[96px] bg-[#FFFFFF]">
            <div className="w-full flex flex-col items-start justify-start gap-[32px] px-[16px] lg:px-[32px] max-w-[1280px]">
              <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[20px] overflow-hidden">
                <div className="w-full max-w-[756px] h-full rounded-[16px] p-[32px] lg:p-[64px] flex gap-[10px] relative">
                  <Image
                    src="/assets/images/why_audio_discover.jpg"
                    alt="Discover how audio advertising can elevate your marketing strategy"
                    width={756}
                    height={64}
                    className="w-full h-full object-cover rounded-[16px] absolute top-0 left-0 z-0"
                  />
                  <div className="w-full flex flex-col items-start justify-start gap-[40px] z-10">
                    <h1 className="font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em] text-[#FFFFFF]">
                      Discover how audio advertising can elevate your marketing
                      strategy.
                    </h1>
                    <Link href="/advertisers" className="bg-[#FFFEFF] py-[10px] px-[16px] rounded-[4px] gap-[6px] flex items-center justify-center">
                      <span className="gradient-text font-bold text-[16px] leading-[24px] tracking-[0em]">
                        Explore Advertiser Page
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13L13 1M13 1H5M13 1V9"
                          stroke="url(#paint0_linear_4346_314)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_4346_314"
                            x1="1"
                            y1="7"
                            x2="13"
                            y2="7"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F11F68" />
                            <stop offset="1" stopColor="#162ABF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="max-h-[238px] lg:max-h-[362px] w-full lg:w-auto rounded-[16px] mb-[32px] lg:pb-0">
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
        </div>
      </div>
      <Footer />
      <ActionSidebar />
    </div>
  );
}
