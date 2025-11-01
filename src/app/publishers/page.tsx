import AboutUsImageCard from "@/components/AboutUsImageCard";
import BrandsScroller from "@/components/BrandsScroller";
import FAQCard from "@/components/FAQCard";
import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import Navbar from "@/components/Navbar";
import TestimonialGroup from "@/components/TestimonialGroup";
import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Publishers() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#6C1DA7]"
        bgColorOnOpen="bg-[#6C1DA7]"
        linkColor="#FFFEFF"
      />
      <div className="bg-[#6C1DA7] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
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
                For Publishers
              </span>
            </div>

            <h1 className="font-medium uppercase text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF]">
              For Publishers, networks and production houses
            </h1>
            <div className="flex flex-col gap-[32px] items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  Monetize Your Catalogue with Global Brand Demand
                </h1>
              </div>
              <h2 className="font-[Switzer] font-medium lg:font-[500] text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0] text-[#FFFEFF]">
                Connect your shows to premium advertisers across 90+ markets and
                hundreds of active campaigns.
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
      <div className="w-full bg-white flex flex-column flex-wrap md:flex-row gap-16 pt-24 pr-20 pb-12 pl-20">
        <section className="w-full flex flex-col gap-[64px]">
          <div className="w-[100%] flex items-center justify-center flex-wrap md:flex-nowrap gap-[20px]">
            <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
              Two powerful ways to grow your revenue
            </h1>
            <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
              Two ways your shows can earn: be visible to buyers in our tools,
              and get pitched for high-value brand campaigns.
            </span>
          </div>
          <div className="w-full flex flex-col gap-[40px] md:p-[40px] border-1 border-[#D2D2D2] rounded-[16px]">
            <div className="w-full flex flex-col gap-[10px] md:flex-row">
              <button className="flex items-center justify-center min-h-[44px] gap-[6px] px-[16px] py-[10px] rounded-[44px] border-2 border-[#F11F68] bg-[#FFEDFB] text-[#F11F68] font-medium text-[16px] leading-[24px] tracking-[0] font-[Switzer] hover:bg-[#F11F68] hover:text-white transition-colors">
                Appear in self-serve tools
              </button>
              <button className="flex items-center justify-center min-h-[44px] gap-[6px] px-[16px] py-[10px] rounded-[44px] border-2 border-[#344054] text-[#344054] font-medium text-[16px] leading-[24px] tracking-[0] font-[Switzer] hover:bg-[#344054] hover:text-white transition-colors">
                Included in Premium Campaigns
              </button>
            </div>
            <div className="w-full flex flex-wrap gap-[40px] md:flex-nowrap">
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

                <div className="flex flex-col items-start justify-center gap-[12px]">
                  <h5 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                    Connect your ad inventory to advertisers using AdManager to
                    book programmatic podcast campaigns.
                  </h5>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[26px] h-[26px]"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75065 12.9999L11.2507 16.4999L18.2507 9.49992M24.6673 12.9999C24.6673 19.4432 19.444 24.6666 13.0007 24.6666C6.55733 24.6666 1.33398 19.4432 1.33398 12.9999C1.33398 6.5566 6.55733 1.33325 13.0007 1.33325C19.444 1.33325 24.6673 6.5566 24.6673 12.9999Z"
                        stroke="#F11F68"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      Live exposure to buyers across DV360 and our AdManager
                      platform
                    </h6>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[26px] h-[26px]"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75065 12.9999L11.2507 16.4999L18.2507 9.49992M24.6673 12.9999C24.6673 19.4432 19.444 24.6666 13.0007 24.6666C6.55733 24.6666 1.33398 19.4432 1.33398 12.9999C1.33398 6.5566 6.55733 1.33325 13.0007 1.33325C19.444 1.33325 24.6673 6.5566 24.6673 12.9999Z"
                        stroke="#F11F68"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      Easy integration and hands-off monetization
                    </h6>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[26px] h-[26px]"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75065 12.9999L11.2507 16.4999L18.2507 9.49992M24.6673 12.9999C24.6673 19.4432 19.444 24.6666 13.0007 24.6666C6.55733 24.6666 1.33398 19.4432 1.33398 12.9999C1.33398 6.5566 6.55733 1.33325 13.0007 1.33325C19.444 1.33325 24.6673 6.5566 24.6673 12.9999Z"
                        stroke="#F11F68"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      Automated ad delivery and reporting
                    </h6>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[26px] h-[26px]"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.75065 12.9999L11.2507 16.4999L18.2507 9.49992M24.6673 12.9999C24.6673 19.4432 19.444 24.6666 13.0007 24.6666C6.55733 24.6666 1.33398 19.4432 1.33398 12.9999C1.33398 6.5566 6.55733 1.33325 13.0007 1.33325C19.444 1.33325 24.6673 6.5566 24.6673 12.9999Z"
                        stroke="#F11F68"
                        strokeWidth="2.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                      Built for scalable, consistent revenue
                    </h6>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-[12px]">
                  <GradientButton
                    type="primary"
                    text="Book a Call Back"
                    className="h-[48px]"
                  />
                  <GradientButton
                    type="secondary"
                    text="Check Out AI Studio"
                    className="h-[48px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[40px]">
            <div className="w-full flex items-center justify-center flex-wrap gap-[40px] md:flex-nowrap">
              <div className="w-full flex flex-col md:w-[50%] gap-[40px]">
                <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                  You’re in good company
                </h1>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  From indie creators to global studios, these publishers
                  already trust Next to deliver results. If you run high-quality
                  shows with engaged audiences, we’d love to work with you.
                </h6>
                <GradientButton
                  type="primary"
                  text="Download Publisher Kit"
                  className="h-[48px] max-w-[200px]"
                />
              </div>
              <Image
                src="/assets/images/publishers_self-serve tools.png"
                alt="podcasters-image"
                className="w-full md:w-[50%] h-auto object-cover rounded-[16px]"
                width={500}
                height={450}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-[#FFF9FE] flex flex-col flex-wrap md:flex-row gap-16 pt-[96px] pr-[80px] pb-[96px] pl-[80px]">
        <section className="w-full flex flex-col gap-[64px]">
          <div className="w-[100%] flex items-center justify-center flex-wrap md:flex-nowrap gap-[20px]">
            <div className="flex flex-col gap-[24px] w-full md:w-[90%]">
              <button className="max-w-[300px] inline-flex items-center justify-center min-h-[44px] gap-[6px] px-[16px] py-[10px] rounded-[44px] border-2 border-[#F11F68] bg-[#FFEDFB] text-[#F11F68] font-medium text-[16px] leading-[24px] tracking-[0] font-[Switzer] hover:bg-[#F11F68] hover:text-white transition-colors">
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
      </div>
      <BrandsScroller />
      <div className="w-full bg-[#FFF9FE] flex flex-col flex-wrap md:flex-row gap-16 pt-[96px] pr-[80px] pb-[96px] pl-[80px]">
        <section className="w-full flex flex-col gap-[64px]">
          <div className="w-[100%] flex items-center justify-center flex-wrap md:flex-nowrap gap-[20px]">
            <div className="flex flex-col gap-[24px] w-full md:w-[90%]">
              <span className="inline-flex items-center min-h-[44px] gap-[6px] text-[#F11F68] font-medium text-[16px] leading-[24px] tracking-[0] font-[Switzer] transition-colors">
                All the Ways You Can Earn
              </span>

              <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                Monetize With Quality Ads
              </h1>
            </div>
            <div className="flex flex-col gap-[32px]">
              <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                Monetize from vetted, high-quality advertisers with formats that
                work for your content and audience
              </span>
              <GradientButton
                type="primary"
                text="Book a Call back"
                className="h-[48px] max-w-[200px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
              <Image
                src="/assets/images/microphone-01.png"
                alt="podcasters-image"
                className="w-[48px] h-[48px] object-cover"
                width={48}
                height={48}
              />
              <span className="font-[Switzer] font-semibold text-[24px] leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
                Host-Read Ads
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
              <Image
                src="/assets/images/headphones-02.png"
                alt="podcasters-image"
                className="w-[48px] h-[48px] object-cover"
                width={48}
                height={48}
              />
              <span className="font-[Switzer] font-semibold text-[24px] leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
                Programmatic Audio
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
              <Image
                src="/assets/images/zap-fast.png"
                alt="podcasters-image"
                className="w-[48px] h-[48px] object-cover"
                width={48}
                height={48}
              />
              <span className="font-[Switzer] font-semibold text-[24px] leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
                Sponsorships
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-[32px] p-[24px] rounded-[16px] bg-[#FFEDFB] backdrop-blur-[0px]">
              <Image
                src="/assets/images/film-02.png"
                alt="podcasters-image"
                className="w-[48px] h-[48px] object-cover"
                width={48}
                height={48}
              />
              <span className="font-[Switzer] font-semibold text-[24px] leading-[32px] tracking-[0] text-[#262626] px-2 py-1 rounded">
                Branded Series
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full flex flex-row items-center justify-center px-[80px]">
        <div
          className="w-full flex flex-col items-center justify-center px-[16px] py-[32px] lg:py-[48px] gap-[64px] md:max-h-[506px] lg:max-h-[368px] rounded-[16px] relative bg-contain bg-center"
          style={{
            backgroundImage: "url(/assets/images/diverse-group.jpg)",
          }}
        >
          <div className="absolute z-10 inset-0 bg-[#091A3A] opacity-60 rounded-[16px]"></div>
          <div className="w-full z-20 flex flex-col items-start justify-center gap-[40px] p-[32px] lg:p-[64px] rounded-[16px]">
            <div>
              <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                Supporting the Shows That
              </h1>
              <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                Deserve to Grow
              </h1>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-start lg:justify-end gap-[64px]">
              <div>
                <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                  …with expertise, tools, and
                </h1>
                <h1 className="text-[#D6E4FF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                  access to global advertisers.
                </h1>
              </div>
              <div className="flex flex-row h-full items-start lg:items-end justify-start lg:justify-end">
                <GradientButton
                  text="Meet Next"
                  type="secondary"
                  className="h-[44px] w-[144px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-[#FFFFFF] flex flex-col items-end justify-end md:py-[80px] px-4 md:px-[96px] gap-[64px]"
        data-aos="fade-up"
      >
        <div className="max-w-[1440px] flex flex-row w-full justify-between items-end gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-4 md:gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-3 md:gap-[16px]">
              <span className="text-[#F11F68] border border-[#F11F68] rounded-full px-3 md:px-[16px] py-1.5 md:py-[3px] text-sm md:text-[16px] leading-tight md:leading-[24px] font-medium">
                Testimonials
              </span>
              <h1 className="font-semibold text-2xl md:text-3xl lg:text-[42px] leading-tight md:leading-[50px] gradient-text">
                What Our Clients Say
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end gap-4 md:gap-[20px]">
            <div className="flex flex-row items-center justify-center gap-4 md:gap-[24px]">
              <Image
                src="/assets/images/left.png"
                alt="left-arrow"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
                id="prevTestimonial"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/right.png"
                alt="right-arrow"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
                id="nextTestimonial"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <TestimonialGroup />
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
                title: "What regions do you operate in?",
                description:
                  "We offer global reach across North America, Europe, the Middle East, Asia-Pacific, and beyond. Our inventory spans major podcast platforms and streaming services, ensuring your campaigns can target audiences wherever they listen.",
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
      <Footer />
    </div>
  );
}
