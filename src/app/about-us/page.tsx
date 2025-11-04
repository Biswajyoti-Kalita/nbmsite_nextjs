import AboutUsImageCard from "@/components/AboutUsImageCard";
import BrandsScroller from "@/components/BrandsScroller";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import MarketingCardGroup from "@/components/MarketingCardGroup";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#F11F68]"
        bgColorOnOpen="bg-[#F11F68]"
        linkColor="#FFFEFF"
      />
      <div className="bg-[#F11F68] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
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
                About Us
              </span>
            </div>

            <div className="flex flex-col gap-[32px] items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  The Global Partner for Podcast & Digital Audio Advertising
                </h1>
              </div>
              <h2 className="font-[Switzer] font-medium lg:font-[500] text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0] text-[#FFFEFF]">
                Next connects advertisers with premium podcasts and digital
                audio audiences — while helping creators and publishers grow
                revenue.
              </h2>

              <div className="flex flex-col lg:flex-row gap-[12px] items-start lg:items-center justify-start">
                <GradientButton
                  type="secondary"
                  text="Share a Brief"
                  className="h-[44px] w-[184px]"
                />
                <GradientButton
                  type="tertiary"
                  text="Request a Call Back"
                  className="h-[44px] w-[231px]"
                />
              </div>
            </div>
          </div>

          <div className=" relative  lg:absolute right-0 top-0 bottom-0">
            <Image
              src="/assets/images/about_headerBanner_right.png"
              alt="podcasters-image"
              className="max-w-[750px] h-full object-contain md: w-full"
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
              We Power Every Part of the Audio Economy
            </h1>
            <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] invisible">
              Two ways your shows can earn: be visible to buyers in our tools,
              and get pitched for high-value brand campaigns.
            </span>
          </div>
          <div className="z-10" data-aos="fade-up">
            <MarketingCardGroup />
          </div>
        </section>
      </div>
      <div className="w-full bg-white flex flex-column flex-wrap md:flex-row gap-16 pt-[96px] pr-20 pb-12 pl-20">
        <section className="w-full flex flex-col gap-[64px]">
          <div className="w-[100%] flex items-center justify-center flex-wrap md:flex-nowrap gap-[20px]">
            <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
              We Power Every Part of the Audio Economy
            </h1>
            <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] invisible">
              Two ways your shows can earn: be visible to buyers in our tools,
              and get pitched for high-value brand campaigns.
            </span>
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
          <Image
            src="/assets/images/map-base.svg"
            alt="Map"
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
        </section>
      </div>
      <div className="w-full flex px-[50px]">
        <BrandsScroller />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[20px] px-[80px] py-[96px] bg-[#F8F9FA]">
        <h2 className="w-full md:w-[40%] gradient-text font-semibold text-[42px] leading-[50px]">
          Accountability & Standards
        </h2>
        <div className="w-full md:w-[60%] flex flex-col gap-[40px]">
          <p className="text-[#344054] text-[32px] leading-[40px] font-[500] font-[Switzer]">
            Because podcast and digital audio advertising shouldn't be
            complicated, opaque, or out of reach. Next connects the dots,
            helping brands scale campaigns and publishers unlock new revenue,
            with tools, tech, and teams that power performance.
          </p>

          <Image
            className="flex w-full"
            src="/assets/images/aboutUs-whyweexist.png"
            alt="Proof"
            width={500}
            height={264}
          />
        </div>
      </div>
      <div className="w-full bg-white flex flex-column flex-wrap md:flex-row gap-16 pt-[96px] pr-20 pb-12 pl-20">
        <section className="w-full flex flex-col items-center justify-center bg-[#FFFFFF] gap-[64px]">
          <div className="w-full flex flex-col px-[24px] pt-[36px]  pb-[0px] lg:py-[96px] lg:px-[64px] bg-[#FFEDFB] items-center justify-between gap-[24px]">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-[20px] lg:gap-[40px]">
              <div className="flex flex-col items-start justify-start gap-[20px] max-w-[520px]">
                <div className="flex flex-col items-start justify-center gap-[24px]">
                  <div className="flex flex-col items-start justify-center gap-[20px]">
                    {/* <h1 className="text-[#F11F68] font-medium text-[16px] leading-[24px]">
                      NBM is your Trusted Audio Ad Partner
                    </h1> */}
                    <h2 className="gradient-text font-semibold text-[42px] leading-[50px]">
                      Accountability & Standards
                    </h2>
                  </div>
                  <div>
                    <p className="text-[#344054] text-[20px] leading-[28px]">
                      We hold every campaign to the highest standards, ensuring
                      transparency, brand safety, and measurable performance.
                    </p>
                  </div>
                </div>
                <Image
                  className="mt-[150px] flex ml-auto"
                  src="/assets/images/aboutUs_acount.png"
                  alt="Proof"
                  width={400}
                  height={264}
                />
              </div>
              {/* Right div */}
              <div className="flex flex-col items-start justify-center gap-[24px]">
                <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                  <Image
                    src="/assets/images/iab.png"
                    alt="Proof"
                    width={44}
                    height={44}
                  />

                  <h5 className="text-[#262626] font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                    Member of the Interactive Advertising Bureau (IAB)
                  </h5>
                </div>

                <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="21.5" fill="#FFD0F4" />
                    <path
                      d="M20.4185 30.0125C20.603 30.1202 20.6952 30.174 20.8254 30.2019C20.9265 30.2236 21.0739 30.2236 21.1749 30.2019C21.3051 30.174 21.3973 30.1202 21.5818 30.0125C23.2052 29.0655 27.6668 26.0905 27.6668 22.0001V18.8335C27.6668 17.9386 27.6668 17.4911 27.5289 17.1735C27.3887 16.8506 27.249 16.6789 26.9615 16.4759C26.6786 16.2762 26.124 16.1608 25.0149 15.9302C23.7925 15.6759 22.8537 15.2168 21.9955 14.5529C21.5839 14.2345 21.3781 14.0753 21.2171 14.0319C21.0472 13.9861 20.9531 13.9861 20.7832 14.0319C20.6222 14.0753 20.4164 14.2345 20.0048 14.5529C19.1466 15.2168 18.2078 15.6759 16.9854 15.9302C15.8763 16.1608 15.3218 16.2762 15.0389 16.4759C14.7513 16.6789 14.6117 16.8506 14.4714 17.1735C14.3335 17.4911 14.3335 17.9386 14.3335 18.8335V22.0001C14.3335 26.0905 18.7951 29.0655 20.4185 30.0125Z"
                      stroke="#FF3893"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h5 className="text-[#262626] font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                    Built-in ad quality and brand safety controls
                  </h5>
                </div>
                <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="21.5" fill="#FFD0F4" />
                    <path
                      d="M28.5 29.5H14.8333C14.3666 29.5 14.1333 29.5 13.955 29.4092C13.7982 29.3293 13.6707 29.2018 13.5908 29.045C13.5 28.8667 13.5 28.6334 13.5 28.1667V14.5M28.5 17.8333L23.9714 22.3619C23.8064 22.5269 23.7239 22.6094 23.6288 22.6404C23.5451 22.6675 23.4549 22.6675 23.3712 22.6404C23.2761 22.6094 23.1936 22.5269 23.0286 22.3619L21.4714 20.8047C21.3064 20.6397 21.2239 20.5572 21.1288 20.5263C21.0451 20.4991 20.9549 20.4991 20.8712 20.5263C20.7761 20.5572 20.6936 20.6397 20.5286 20.8047L16.8333 24.5M28.5 17.8333H25.1667M28.5 17.8333V21.1667"
                      stroke="#FF3893"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h5 className="text-[#262626] font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                    Transparent tracking and brand lift tools
                  </h5>
                </div>
                <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="21.5" fill="#FFD0F4" />
                    <path
                      d="M20.9998 13.6667C23.0842 15.9487 24.2688 18.9101 24.3332 22.0001C24.2688 25.0901 23.0842 28.0515 20.9998 30.3334M20.9998 13.6667C18.9154 15.9487 17.7309 18.9101 17.6665 22.0001C17.7309 25.0901 18.9154 28.0515 20.9998 30.3334M20.9998 13.6667C16.3975 13.6667 12.6665 17.3977 12.6665 22.0001C12.6665 26.6025 16.3975 30.3334 20.9998 30.3334M20.9998 13.6667C25.6022 13.6667 29.3332 17.3977 29.3332 22.0001C29.3332 26.6025 25.6022 30.3334 20.9998 30.3334M13.0832 19.5001H28.9165M13.0832 24.5001H28.9165"
                      stroke="#FF3893"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h5 className="text-[#262626] font-medium text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                    Trusted by global brands and premium audio networks
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex items-center justify-center flex-wrap gap-[40px] md:flex-nowrap">
            <div className="w-full flex flex-col md:w-[50%] gap-[40px]">
              <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                Trusted by Leading Brands, Networks, & Creators
              </h1>
              <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                From FMCG to fintech, our campaigns drive real results, for
                advertisers, publishers, and podcasters.
              </h6>
            </div>
            <Image
              src="/assets/images/about_us_trustright.png"
              alt="podcasters-image"
              className="w-full md:w-[50%] h-auto object-cover rounded-[16px]"
              width={500}
              height={450}
            />
          </div>
        </div>
        </div>
        <section
          className="w-full bg-[#F9F8FA] flex flex-col items-center justify-center rounded-xl gap-[46px] md:gap-[64px] px-[80px] py-[96px]"
          data-aos="fade-up"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-8 justify-between items-center gap-4 px-[16px] lg:px-[0px] md:gap-[24px]">
            <div className="lg:col-span-6">
              <h1 className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px]">
                Podcast Advertising Case Studies & Audio Campaign Results
              </h1>
            </div>
            <div className="lg:col-span-2 flex itesm-start md:items-end justify-start md:justify-end h-full">
              <GradientButton
                text="Explore All"
                className="h-[44px] w-[144px]"
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
            </div>
          </div>
          <div
            className="max-w-[14400px] flex flex-col lg:flex-row justify-start w-full items-center gap-4 md:gap-[20px]"
            data-aos="fade-up"
          >
            <CaseStudies />
          </div>
        </section>
       <div className="flex flex-col md:flex-row gap-[64px] pt-[96px] pr-[80px] pb-[48px] pl-[80px] bg-[#FFFEFF]">
          <div className="w-full flex flex-col md:w-[50%] gap-[40px]">
            <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
              Press & Media Enquiries
            </h1>
            <h6 className="text-[20px] leading-[28px] font-[400] text-[#344054] font-[Switzer]">
              For media enquiries, speaker requests, or partnerships, please reach out to our team. We’re always happy to share insights or provide comments on the audio industry.
            </h6>
          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-[20px] p-[24px] bg-[#F8F9FA] rounded-[16px] opacity-100">
            <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="10" fill="#F11F68"/>
                <path d="M18.0944 23.2288C18.0322 22.8282 18 22.4179 18 22C18 17.5817 21.6052 14 26.0526 14C30.4999 14 34.1052 17.5817 34.1052 22C34.1052 22.9981 33.9213 23.9535 33.5852 24.8345C33.5154 25.0175 33.4804 25.109 33.4646 25.1804C33.4489 25.2512 33.4428 25.301 33.4411 25.3735C33.4394 25.4466 33.4493 25.5272 33.4692 25.6883L33.8717 28.9585C33.9153 29.3125 33.9371 29.4895 33.8782 29.6182C33.8266 29.731 33.735 29.8205 33.6211 29.8695C33.4911 29.9254 33.3146 29.8995 32.9617 29.8478L29.7765 29.3809C29.6101 29.3565 29.527 29.3443 29.4512 29.3448C29.3763 29.3452 29.3245 29.3507 29.2511 29.3661C29.177 29.3817 29.0823 29.4172 28.893 29.4881C28.0097 29.819 27.0524 30 26.0526 30C25.6344 30 25.2237 29.9683 24.8227 29.9073M19.6316 34C22.5965 34 25 31.5376 25 28.5C25 25.4624 22.5965 23 19.6316 23C16.6667 23 14.2632 25.4624 14.2632 28.5C14.2632 29.1106 14.3603 29.6979 14.5395 30.2467C14.6153 30.4787 14.6532 30.5947 14.6657 30.6739C14.6786 30.7567 14.6809 30.8031 14.6761 30.8867C14.6714 30.9668 14.6514 31.0573 14.6113 31.2383L14 34L16.9948 33.591C17.1583 33.5687 17.24 33.5575 17.3114 33.558C17.3865 33.5585 17.4264 33.5626 17.5001 33.5773C17.5701 33.5912 17.6742 33.6279 17.8823 33.7014C18.4306 33.8949 19.0191 34 19.6316 34Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="flex flex-col gap-[8px] ">
              <span className="font-[Switzer] font-[600] text-[20px] leading-[28px] text-[#262626]">
                Email
              </span>
              <span className="font-[Switzer] font-[400] text-[16px] leading-[24px] text-[#344054]">
                Contact the marketing team
              </span>
            </div>
            <div className="font-[Switzer] font-[600] text-[16px] leading-[24px] text-[#F11F68]">
              hello@nextbroadcast.com
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}
