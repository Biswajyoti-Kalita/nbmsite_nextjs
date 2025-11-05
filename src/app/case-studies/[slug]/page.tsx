import BrandsScroller from "@/components/BrandsScroller";
import FAQCard from "@/components/FAQCard";
import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import Navbar from "@/components/Navbar";
import caseStudies from "@/data/caseStudies.json";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CaseStudy {
  title: string;
  description: string;
  image: string;
}
type CaseStudies = Record<string, CaseStudy>;
const dataMap = caseStudies as CaseStudies;

export async function generateStaticParams() {
  // Generate all static paths (pre-rendered pages)
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
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
          backgroundImage: `url('/assets/images/bel_bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-10 inset-0 bg-[#511DB5] opacity-[0.75]"></div>
        <section
          className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] flex flex-col lg:flex-row gap-[80px] items-start justify-start relative lg:max-w-[1440px] z-10"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 max-h-[530px] px-4 lg:px-0">
            <div className="flex flex-row items-center justify-center gap-[12px]">
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
              <span className="text-[#D2D2D2] font-medium text-[14px] leading-[22px]">
                Why Audio
              </span>
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
              <span className="text-[#D2D2D2] font-medium text-[14px] leading-[22px]">
                Case Study Library
              </span>
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
                {data.title}
              </span>
            </div>

            <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-[16px]">
              <h1 className="font-medium uppercase text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF] py-[4px]">
                Podcast Advertising case study: FMCG Brand
              </h1>
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-bold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  How Bel Groupe Reached Saudi Mothers with Podcast Ads
                </h1>
                <h2 className="font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] text-[#FFFEFF] tracking-[0em]">
                  A brand awareness campaign combining podcast sponsorship and
                  dynamic ad insertion to increase perception and purchase
                  intent for Kiri cheese among Saudi families.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <section
            className="w-full items-center justify-between pt-[96px] pb-[48px] px-[16px] lg:px-[80px] bg-[#FFFEFF] flex flex-col lg:flex-row gap-[64px]"
            id="home"
          >
            <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[64px] max-w-[1280px]">
              <div className="w-full max-w-[478px]">
                <h2 className="font-bold text-[42px] leading-[50px] tracking-[-0.02em] gradient-text">
                  Audio Campaign Summary
                </h2>
              </div>
              <div className="w-full flex flex-col items-start justify-start">
                <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-[16px] border-b border-t border-[#D2D2D2] h-[92px]">
                  <div className="w-[215px]">
                    <span className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#667085] w-[215px]">
                      Client
                    </span>
                  </div>
                  <span className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                    Bel Group
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-[16px] border-b border-[#D2D2D2] h-[92px]">
                  <div className="w-[215px]">
                    <span className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#667085] w-[215px]">
                      Industry
                    </span>
                  </div>
                  <span className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                    FMCG
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-[16px] border-b border-[#D2D2D2] h-[92px]">
                  <div className="w-[215px]">
                    <h1 className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#667085] w-[215px]">
                      Campaign Types
                    </h1>
                  </div>
                  <span className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                    Awareness campaign, Consideration campaign, Sponsorship,
                    programmatic
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-[16px] border-b border-[#D2D2D2] h-[92px]">
                  <div className="w-[215px]">
                    <h1 className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#667085] w-[215px]">
                      Audio Format
                    </h1>
                  </div>
                  <span className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                    Podcasts
                  </span>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-[16px] border-b border-[#D2D2D2] h-[92px]">
                  <div className="w-[215px]">
                    <h1 className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#667085] w-[215px]">
                      Audience Profile
                    </h1>
                  </div>
                  <span className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                    Mothers
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center pt-[96px] pb-[48px] px-[16px] lg:px-[80px] gap-[64px] bg-[#FFFEFF]">
            <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[64px] max-w-[1280px]">
              <div className="w-full flex flex-col items-start justify-start max-w-[478px]">
                <h1 className="font-bold  text-[42px] leading-[50px] tracking-[-0.02em] gradient-text">
                  Objective
                </h1>
              </div>
              <div>
                <p className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                  Help Kiri cheese stand out with Saudi families by reaching
                  local women, improving brand perception, and increasing
                  purchase intent.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center pt-[96px] pb-[48px] px-[16px] lg:px-[80px] gap-[64px] bg-[#FFFEFF]">
            <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[64px] max-w-[1280px]">
              <div className="w-full flex flex-col items-start justify-start max-w-[478px]">
                <h1 className="font-bold  text-[42px] leading-[50px] tracking-[-0.02em] gradient-text">
                  Campaign Execution
                </h1>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[16px]">
                <p className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                  We used a dual-format strategy to maximise reach and
                  resonance:
                </p>
                <div className="w-full flex flex-col items-start justify-start gap-[12px]">
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
                    <h1 className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                      Sponsored the 10-part Arabic podcast Maida to align Kiri
                      with trusted, high-quality local content.
                    </h1>
                  </div>
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
                    <h1 className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#262626]">
                      Delivered dynamic, contextually targeted ads across our
                      Arabic-language podcast network, focusing on genres
                      popular with women and mothers to drive incremental reach.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF] py-[48px] px-[16px] lg:px-[80px]">
            <div className="w-full flex flex-col items-center justify-center max-w-[1280px] p-[64px] gap-[64px] bg-[#6C1DA7] rounded-[16px] relative">
              <div className="absolute top-0 right-0">
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
              <div className="absolute bottom-0 left-0">
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
                <h1 className="font-bold text-[42px] leading-[50px] tracking-[-0.02em] text-[#FFFEFF]">
                  Results
                </h1>
              </div>
              <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[24px]">
                <div className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[32px] h-[200px]">
                  <p className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#FFFEFF]">
                    Maida podcast featured in Apple Podcasts app ‘New and
                    Noteworthy’ section
                  </p>
                </div>

                <div className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[32px] gap-[40px] h-[200px]">
                  <p className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#FFFEFF]">
                    Interest metric performance achieved top
                  </p>
                  <h1 className="font-semibold text-[64px] leading-[72px] tracking-[0em] text-[#FFFEFF]">
                    5%
                  </h1>
                </div>

                <div className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[32px] gap-[40px] h-[200px]">
                  <p className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#FFFEFF]">
                    Listen through rate
                  </p>
                  <h1 className="font-semibold text-[64px] leading-[72px] tracking-[0em] text-[#FFFEFF]">
                    95%
                  </h1>
                </div>

                <div className="w-full flex flex-col items-start justify-between border-t border-[#D2D2D2] pt-[32px] gap-[40px] h-[200px]">
                  <p className="font-semibold text-[20px] leading-[28px] tracking-[0em] text-[#FFFEFF]">
                    Vertical specific intent
                  </p>
                  <h1 className="font-semibold text-[64px] leading-[72px] tracking-[0em] text-[#FFFEFF]">
                    +28 pts
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center bg-[#FFFEFF] gap-[64px] pt-[48px] pb-[96px] px-[16px] lg:px-[80px]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center max-w-[1280px] gap-[64px] p-[64px] rounded-[16px] bg-gradient-to-r from-[#FFEDFB] to-[#E8ECFF]" style={{backgroundImage: `url('/assets/images/listen-ad.jpg')`, backgroundRepeat: 'round', backgroundPosition: 'center'}}>
                <div>
                    <h1 className="gradient-text font-bold text-[42px] leading-[50px] tracking-[-0.02em]">Listen To The Ad</h1>
                </div>
                <div className="w-full max-w-[700px] flex flex-row items-start justify-start gap-[20px] p-[24px] bg-[#FFFEFF] rounded-[16px] border border-[#F11F68]">
                    <div className="flex flex-row items-center justify-center gap-[24px]">
                        <div className="w-[164px] h-[164px] flex items-center justify-center gap-[4px] rounded-[6px] border border-[#E8E8E8] bg-[#FFFFFF]">
                            <Image src="/assets/images/bel.png" alt="bel" width={76} height={64} />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-between">
                        
                    </div>
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
    </div>
  );
}
