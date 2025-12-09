import Breadcrumb from "@/components/Breadcrumb";
import CaseStudies from "@/components/CaseStudies";
import CaseStudyTestimonialGroup from "@/components/CaseStudyTestimonialGoup";
import DiscoverAudioSection from "@/components/DiscoverAudioSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import PodcastCaseStudy from "@/components/PodcastCaseStudy";
import caseStudies from "@/data/caseStudies.json";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CaseStudy {
  name: string;
  category: string;
  banner_image: string;
  banner_title: string;
  banner_subtitle: string;
  summary: {
    client: string;
    industry: string;
    campaign_types: string;
    audio_format: string;
    audience_profile: string;
  };
  objective: string;
  execution: {
    title: string;
    points: string[];
    bottom_text?: string;
  };
  results: {
    title: string;
    subtitle: string;
  }[];
  audio: {
    image: string;
    title: string;
    points: string[];
    audio_file: string;
  };
  testimonials?: {
    quote: string;
    stars: number;
    name: string;
    designation: string;
    image: string;
  }[];
}
type CaseStudies = Record<string, CaseStudy>;
const dataMap = caseStudies as CaseStudies;

export async function generateStaticParams() {
  // Generate all static paths (pre-rendered pages)
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const data = dataMap[slug];

  if (!data) {
    notFound(); // 404 page if slug not found
  }

  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-transparent"
        bgColorOnOpen="bg-[#511DB5]"
        linkColor="#FFFEFF"
      />

      <div
        className="bg-transparent flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0 relative"
        style={{
          backgroundImage: `url('${data.banner_image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-10 inset-0 bg-[#511DB5] opacity-[0.75]"></div>
        <section
          className="w-full p-4 pb-[60px] mt-[64px] md:mt-[64px] md:mt-0 lg:p-[80px] flex flex-col lg:flex-row gap-[24px] lg:gap-[80px] items-start justify-start relative lg:max-w-[1440px] z-10"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 max-h-[530px] px-0">
          <Breadcrumb 
              pages={[
                { name: "Why Audio", link: "/why-audio" }, 
                { name: "Case Study Library", link: "/case-study-library" },
                { name: data.name, link: slug }
              ]}
          />          

            <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-[8px] lg:gap-[16px]">
              <h1 className="font-medium uppercase text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF] py-[4px]">
                Podcast Advertising case study: {data.category}
              </h1>
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-bold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  {data.banner_title}
                </h1>
                <h2 className="font-medium text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] text-[#FFFEFF] tracking-[0em]">
                  {data.banner_subtitle}
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <section
            className="w-full items-center justify-between pt-[96px] pb-[48px] px-[16px] lg:px-[80px] bg-[#FFFEFF] flex flex-col lg:flex-row gap-[46px] lg:gap-[64px]"
            id="home"
          >
            <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[64px] max-w-[1280px]">
              <div className="w-full max-w-[478px]">
                <h2 className="font-semibold text-[42px] leading-[50px] tracking-[-0.02em] gradient-text">
                  Audio Campaign Summary
                </h2>
              </div>
              <div className="w-full flex flex-col items-start justify-start">
                <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-start gap-[8px] lg:gap-[16px] border-t border-[#D2D2D2] h-[92px] py-[24px] lg::py-[32px]">
                  <div className="w-full lg:w-[215px]">
                    <span className="font-semibold text-[14px] lg:text-[20px] leading-[22px] lg:leading-[28px] tracking-[0em] text-[#667085] w-[215px] text-start">
                      Client
                    </span>
                  </div>
                  <span className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626] w-full">
                    {data.summary.client}
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-start gap-[8px] lg:gap-[16px] border-t border-[#D2D2D2] h-[92px] py-[24px] lg::py-[32px]">
                  <div className="w-full lg:w-[215px]">
                    <span className="font-semibold text-[14px] lg:text-[20px] leading-[22px] lg:leading-[28px] tracking-[0em] text-[#667085] w-[215px] text-start">
                      Industry
                    </span>
                  </div>
                  <span className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626] w-full">
                    {data.summary.industry}
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-start gap-[8px] lg:gap-[16px] border-t border-[#D2D2D2] h-[108px] py-[24px] lg::py-[32px]">
                  <div className="w-full lg:w-[215px]">
                    <span className="font-semibold text-[14px] lg:text-[20px] leading-[22px] lg:leading-[28px] tracking-[0em] text-[#667085] w-[215px] text-start">
                      Campaign Types
                    </span>
                  </div>
                  <span className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626] w-full">
                    {data.summary.campaign_types}
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-start gap-[8px] lg:gap-[16px] border-t border-[#D2D2D2] h-[92px] py-[24px] lg::py-[32px]">
                  <div className="w-full lg:w-[215px]">
                    <span className="font-semibold text-[14px] lg:text-[20px] leading-[22px] lg:leading-[28px] tracking-[0em] text-[#667085] w-[215px] text-start">
                      Audio Format
                    </span>
                  </div>
                  <span className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626] w-full">
                    {data.summary.audio_format}
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-start gap-[8px] lg:gap-[16px] border-t border-[#D2D2D2] h-[92px] py-[24px] lg::py-[32px]">
                  <div className="w-full lg:w-[215px]">
                    <span className="font-semibold text-[14px] lg:text-[20px] leading-[22px] lg:leading-[28px] tracking-[0em] text-[#667085] w-[215px] text-start">
                      Audience Profile
                    </span>
                  </div>
                  <span className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626] w-full">
                    {data.summary.audience_profile}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center pt-[96px] pb-[48px] px-[16px] lg:px-[80px] gap-[64px] bg-[#FFFEFF]">
            <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[46px] lg:gap-[64px] max-w-[1280px]">
              <div className="w-full flex flex-col items-start justify-start max-w-[478px]">
                <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em] gradient-text">
                  Objective
                </h1>
              </div>
              <div>
                <p className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                  {data.objective}
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center pt-[96px] pb-[48px] px-[16px] lg:px-[80px] gap-[64px] bg-[#FFFEFF]">
            <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[46px] lg:gap-[64px] max-w-[1280px]">
              <div className="w-full flex flex-col items-start justify-start max-w-[478px]">
                <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em] gradient-text">
                  Campaign Execution
                </h1>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[16px]">
                <p className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                  {data.execution.title}
                </p>
                <div className="w-full flex flex-col items-start justify-start gap-[12px]">
                  {data.execution.points.map((point: string, index: number) => (
                    <div className="w-full" key={index}>
                      <div className="w-full flex flex-row items-start justify-start gap-[8px]">
                        <div className="w-[22px] h-[28px] flex items-center justify-center">
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 6 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="3" cy="3" r="3" fill="#F11F68" />
                          </svg>
                        </div>
                        <h1 className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                          {point}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
                {
                  data.execution.bottom_text && (
                    <p className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                      {data.execution.bottom_text}
                    </p>    
                  )
                }
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF] py-[48px] px-[16px] lg:px-[80px]">
            <div className="w-full flex flex-col items-center justify-center max-w-[1280px] p-[24px] lg:p-[64px] gap-[46px] lg:gap-[64px] bg-[#6C1DA7] rounded-[16px] relative">
              <div className="absolute top-0  left-[0px] lg:left-auto lg:right-0 max-w-full overflow-hidden">
                <svg
                  width="834"
                  height="442"
                  viewBox="0 0 834 442"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M444.968 489.76L0 -27.7646H853.978V148.264L417.572 152.243C397.463 152.426 377.089 158.61 364.172 174.022C329.466 215.431 341.901 255.531 364.99 282.992C377.359 297.703 396.906 303.169 416.126 303.169H853.978V489.76H444.968Z"
                    fill="#ECD2FF"
                    fill-opacity="0.14"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0  max-w-full overflow-hidden">
                <svg
                  width="450"
                  height="90"
                  viewBox="0 0 450 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 90.002C74.5537 22.0844 268.757 -73.0003 449.14 90.002H0Z"
                    fill="#ECD2FF"
                    fill-opacity="0.14"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[148px]">
                <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[40px] lg:leading-[50px] tracking-[-0.02em] text-[#FFFEFF]">
                  Results
                </h1>
              </div>
              <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[16px] lg:gap-[24px]">
                {data.results.map(
                  (
                    result: { title: string; subtitle: string },
                    index: number
                  ) => (
                    <div key={index} className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[24px] lg:pt-[32px] h-[188px]">
                      <p className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#FFFEFF]">
                        {result.title}
                      </p>
                      {result.subtitle && (
                        <h1 className="font-medium text-[50px] lg:text-[64px] leading-[58px] lg:leading-[72px] tracking-[0em] text-[#FFFEFF] whitespace-nowrap">
                          {result.subtitle}
                        </h1>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {
            data.audio && 
            <section className="w-full flex flex-col items-center justify-between bg-[#FFFEFF] gap-[46px] lg:gap-[64px] pt-[48px] pb-[0px] lg:pb-[96px] px-[0px] lg:px-[16px] lg:px-[80px]">
            <div className="w-full relative flex flex-col lg:flex-row items-start justify-center max-w-[1280px] gap-[24px] lg:gap-[64px] py-[84px] px-[16px] lg:p-[64px] rounded-[16px] bg-gradient-to-r from-[#FFEDFB] to-[#E8ECFF]">
              <div
                className="w-full h-full bg-cover bg-center absolute inset-0 z-0 opacity-20 bg-top left-0 top-0"
                style={{
                  backgroundImage: `url('/assets/images/listen-ad-2.jpg')`,
                }}
              ></div>
              <div className="z-10 flex flex-col items-start justify-start h-full w-full">
                <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[40px] lg:leading-[50px] tracking-[-0.02em]">
                  Listen To The Ad
                </h1>
              </div>
              <div className="z-10 w-full lg:min-w-[700px] flex flex-col lg:flex-row items-start justify-start gap-[16px] lg:gap-[20px] p-[24px] bg-[#FFFEFF] rounded-[16px] border border-[#F11F68]">
                <div className="flex flex-row items-center justify-center gap-[24px]">
                  <div className="w-[295px] lg:w-[164px] h-[295px] lg:h-[164px] flex items-center justify-center gap-[4px] rounded-[6px] border border-[#E8E8E8] bg-[#FFFFFF]">
                    <Image
                      src={data.audio.image}
                      alt="bel"
                      width={76}
                      height={64}
                      className=" w-auto max-w-[115px] h-auto max-h-[95px] lg:max-w-[76px] lg:max-h-[64px]"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-between h-full min-h-[164px]">
                  <div className="w-full flex flex-col items-start justify-start gap-[8px] h-[56px]">
                    <div className="w-full flex flex-row items-center justify-between">
                      <h1 className="font-semibold text-[26px] lg:text-[24px] leading-[34px] tracking-[0em] text-[#262626]">
                        {data.audio.title}
                      </h1>
                      <div className="w-[16px] h-[16px] flex items-start justify-center">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.72667 9.00683L10.28 11.6602M10.2733 4.34016L5.72667 6.9935M14 3.3335C14 4.43807 13.1046 5.3335 12 5.3335C10.8954 5.3335 10 4.43807 10 3.3335C10 2.22893 10.8954 1.3335 12 1.3335C13.1046 1.3335 14 2.22893 14 3.3335ZM6 8.00016C6 9.10473 5.10457 10.0002 4 10.0002C2.89543 10.0002 2 9.10473 2 8.00016C2 6.89559 2.89543 6.00016 4 6.00016C5.10457 6.00016 6 6.89559 6 8.00016ZM14 12.6668C14 13.7714 13.1046 14.6668 12 14.6668C10.8954 14.6668 10 13.7714 10 12.6668C10 11.5623 10.8954 10.6668 12 10.6668C13.1046 10.6668 14 11.5623 14 12.6668Z"
                              stroke="black"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-start gap-[11px]">
                      {data.audio.points.map((point, index) => (
                        <div key={index} className="flex flex-row gap-[11px] items-center">
                          <span className="font-normal text-[14px] leading-[22px] lg:leading-[16px] tracking-[0em] text-[#344054]">
                            {point}
                          </span>
                          {index < data.audio.points.length - 1 && (
                            <span>
                              <svg
                                width="4"
                                height="4"
                                viewBox="0 0 4 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="2" cy="2" r="2" fill="#344054" />
                              </svg>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Player audioUrl={data.audio.audio_file} />
                </div>
              </div>
            </div>
          </section>
}

          {
            data.testimonials && data.testimonials.length > 0 && (
              <section className="w-full flex flex-col items-center justify-center py-[84px] lg:py-[96px] gap-[64px] bg-[#091A3A]" id="case-study-testimonial">
              <CaseStudyTestimonialGroup testimonials={data.testimonials} />
            </section>
  
            )
          }

          <DiscoverAudioSection />

          
          <PodcastCaseStudy title="Read More Case Studies" />


        </div>
      </div>
      <Footer />
    </div>
  );
}
