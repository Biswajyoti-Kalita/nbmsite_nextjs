import ActionSidebar from "@/components/ActionSidebar";
import BrandsScroller from "@/components/BrandsScroller";
import Breadcrumb from "@/components/Breadcrumb";
import DisporaBanner from "@/components/DisporaBanner";

import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import Navbar from "@/components/Navbar";
import PopularChannels from "@/components/PopularChannels";

import QACollapseableContainer from "@/components/QACollapseableContainer";
import Image from "next/image";

export default function Diaspora() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#511DB5]"
        bgColorOnOpen="bg-[#511DB5]"
        linkColor="#FFFEFF"
      />

      <div className="bg-[#511DB5] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
        <DisporaBanner />

      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <section className="pt-[84px] lg:py-[48px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFEFF]">
            <div className="w-full flex flex-col lg:flex-row  items-center justify-between gap-[64px] rounded-[16px]">
              <div className="w-full flex flex-col items-start justify-center gap-[40px] max-w-[590px]">
                <div className="flex flex-col items-start justify-center gap-[24px]">
                  <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] gradient-text tracking-[-0.02em]">
                    Advertising Formats To Reach Diaspora Communities
                  </h1>
                  <div className="flex flex-col items-start justify-center gap-[32px]">
                    <div className="flex flex-col items-start justify-center gap-[16px]">
                      <p className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                        Connect with global-minded communities living in North
                        America, who over-index in{" "}
                        <b>education, income, and global mobility,</b> through:
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
                            <b>Programmatic scale </b>for precise, efficient
                            targeting
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
                            <b>Host-read sponsorships </b>that drive trust and
                            recall
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
                            <b>Cultural and language adaptation</b> that
                            resonates
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
                            <b>Full-funnel tracking </b> via advanced
                            third-party partners
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-2">
                  <GradientButton
                    text="Download Media Kit"
                    type="secondary"
                    textClassName="text-[16px] leading-[24px] font-semibold"
                    className=""
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

          <section className="w-full flex flex-col items-center justify-center px-[16px]  py-[84px] lg:py-[80px] lg:px-[80px] bg-[#FFFEFF] gap-[64px]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[16px] lg:gap-[24px]">
              <div>
                <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px]">
                  Target Audience Community Profiles
                </h1>
              </div>
              <div>
                <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  Explore snapshots of our audience profiles, reach, and
                  marketing potential in the U.S. and Canada
                </p>
              </div>
            </div>
            <QACollapseableContainer
              data={[
                {
                  image: "/assets/images/target-community.jpg",
                  title: "Middle Eastern & Persian Audiences",
                  description: "",
                  descriptionHTML: (
                    <ul className="list-disc list-inside">
                      <li>
                        <b>Includes:</b> Lebanon, Egypt, Jordan, UAE, Saudi
                        Arabia, Morocco, Turkey
                      </li>
                      <li>
                        <b>Network Unique Users:</b> ≥ 2.2 million
                      </li>
                      <li>
                        <b>US Profile:</b> 52% hold bachelor’s+ degrees; strong
                        in management, business, science roles
                      </li>
                    </ul>
                  ),
                },
                {
                  image: "/assets/images/south-asian.jpg",
                  title: "South Asian Audiences",
                  description: "",
                  descriptionHTML: (
                    <ul className="list-disc list-inside">
                      <li>
                        <b>Includes:</b> India, Pakistan, Bangladesh, Sri Lanka,
                        Nepal, Bhutan, Maldives.
                      </li>
                      <li>
                        <b>Network Unique Users:</b> ≥ 4.5 million
                      </li>
                      <li>
                        <b>US Profile:</b> ~5.2M living in the US; highest
                        earning immigrant group (median HH income $151k)
                      </li>
                    </ul>
                  ),
                },
                {
                  image: "/assets/images/southeast-asian.jpg",
                  title: "East & Southeast Asian Audiences",
                  description: "",
                  descriptionHTML: (
                    <ul className="list-disc list-inside">
                      <li>
                        <b>Includes:</b> China, Taiwan, Japan, South Korea,
                        Philippines, Indonesia, Malaysia, Thailand.
                      </li>
                      <li>
                        <b>Network Unique Users:</b> ≥ 1.5 million
                      </li>
                      <li>
                        <b>US Profile:</b> 63% speak non-English at home;
                        Frequent international travel
                      </li>
                    </ul>
                  ),
                },
                {
                  image: "/assets/images/African.jpg",
                  title: "African Diaspora Audiences",
                  description: "",
                  descriptionHTML: (
                    <ul className="list-disc list-inside">
                      <li>
                        <b>Includes:</b> Nigeria, Ghana, Kenya, South Africa
                      </li>
                      <li>
                        <b>Network Unique Users:</b> ≥ 6.5 million
                      </li>
                      <li>
                        <b>US Profile:</b> 69% college or more vs ~63% U.S. born
                        populations; ~33% STEM degree
                      </li>
                    </ul>
                  ),
                },
                {
                  image: "/assets/images/european.jpg",
                  title: "European Audiences",
                  description: "",
                  descriptionHTML: (
                    <ul className="list-disc list-inside">
                      <li>
                        <b>Includes:</b> Italy, France, Germany, Spain,
                        Netherlands, Ukraine, Russia, Romania.
                      </li>
                      <li>
                        <b>Network Unique Users:</b> ≥ 3.7 million
                      </li>
                      <li>
                        <b>US Profile:</b> Median HH income ~$102k; High share
                        in management, business, science, & arts
                      </li>
                      Network Unique Users: ≥ 3.7 million
                      <li>
                        <b>US Profile:</b> Median HH income ~$102k; High share
                        in management, business, science, & arts
                      </li>
                    </ul>
                  ),
                },
              ]}
            />
          </section>

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

          <section
            className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center justify-between relative lg:max-w-[1440px]"
            id="home"
          >
            <div className="w-full">
              <Image
                src="/assets/images/creative-adaption-service.jpg"
                alt="podcast-recording-session"
                className="w-full h-full object-cover"
                width={500}
                height={500}
                priority
              />
            </div>

            <div className="w-full flex flex-col items-start justify-center gap-[24px]">
              <h1 className="font-semibold text-[34px] lg:text-[48px] leading-[42px] lg:leading-[50px] gradient-text tracking-[-0.02em]">
                Creative Adaptation Services
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
                      Translate & Localise
                    </span>
                    <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Adapt existing campaigns using native voices, accurate
                      dialects, and local context.
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
                      Bilingual Mix
                    </span>
                    <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Blend English with authentic phrases or greetings to
                      connect naturally.
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
                      Culture-First
                    </span>
                    <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Anchor your message in real experiences and shared moments
                      — from Ramadan to Lunar New Year to family travel.
                    </span>
                  </h1>
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
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-[16px] w-full">
                    <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] min-w-[238px] w-full">
                      <h1 className="font-semibold text-[32px] leading-[40px] tracking-[0.0em] gradient-text">
                        350+
                      </h1>
                      <h2 className="font-semibold text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0.0em] text-[#262626]">
                        Brands <br />& agencies
                      </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] min-w-[238px] w-full">
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
             <PopularChannels />
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <ActionSidebar />
    </div>
  );
}
