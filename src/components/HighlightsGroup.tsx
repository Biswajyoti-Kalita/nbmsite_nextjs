"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import GradientButton from "./GradientButton";

export default function HighlightsGroup() {
  const [splideWidth, setSplideWidth] = useState(100);

  useEffect(() => {
    const updateWidth = () => {
      const highlights = document.getElementById("highlights");
      if (highlights) {
        setSplideWidth(highlights.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const splideOptions = {
    type: "slide" as const,
    drag: "free" as const,
    gap: 30,
    width: splideWidth,
    autoWidth: true,
    pagination: true,
    arrows: false,
    perPage: 1,
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
      1280: {
        perPage: 2,
      },
    },
  };

  return (
    <Splide options={splideOptions}>
      <SplideSlide>
        <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center rounded-[16px] bg-[#FFFFFF] border border-[#E8E8E8] max-w-[305px] lg:max-w-[779px]">
          <div className="relative flex flex-col justify-between items-center rounded-[16px] bg-[#091A3A] min-w-[305px] h-[305px]">
            <span className="absolute top-[24px] left-[24px] text-[#FFFEFF] text-[14px] leading-[22px] border border-[#FFFEFF] px-[8px] py-[4px] rounded-[24px]">
              Guide
            </span>
            <div className="w-full h-full absolute top-[90px] left-[25px] flex flex-col justify-between items-center max-w-[255px] max-h-[125px] gap-[15px]">
              <Image
                src="/assets/images/q-3-4.png"
                alt="guide-icon"
                width={255}
                height={48}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-between items-start p-[24px] min-w-[305px]  lg:min-w-[434px] h-auto lg:h-[305px]">
            <div className="w-full flex flex-col justify-between items-center gap-[19px]">
              <div className="w-full flex flex-col justify-between items-start gap-[16px] lg:gap-[8px]">
                <h2 className="text-[#262626] font-bold text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px]">
                  The Q4 Podcast Playbook for Media Planners
                </h2>
                <span className="text-[#344054] font-normal text-[14px] leading-[16px] lg:leading-[22px]">
                  Advertiser
                </span>
              </div>
              <div className="w-full flex flex-row justify-between items-center border-t border-[#E8E8E8] py-[24px]">
                <span className="text-[#344054] font-normal text-[14px] leading-[22px]">
                  Agency Guide: How to integrate podcasts into your Q4 media
                  plans
                </span>
              </div>
            </div>
            <GradientButton
              className="w-[142px]"
              text="Download"
              type="secondary"
              textClassName="text-[16px] leading-[24px] font-bold"
              rightIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1V15M8 15L15 8M8 15L1 8"
                    stroke="url(#paint0_linear_4394_19804)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4394_19804"
                      x1="1"
                      y1="8"
                      x2="15"
                      y2="8"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F11F68" />
                      <stop offset="1" stopColor="#162ABF" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center rounded-[16px] bg-[#FFFFFF] border border-[#E8E8E8] max-w-[305px] lg:max-w-[779px]">
          <div className="w-full relative justify-between items-start gap-[20px] min-w-[305px] h-[305px]">
            <Image
              src="/assets/images/mics-to-screen.jpg"
              alt="guide"
              width={367}
              height={305}
              className="z-0 w-full h-full rounded-[16px] absolute top-0 left-0 object-cover"
            />
            <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
              Guide
            </span>
            <Image
              src="/assets/images/nbm_logo_white.png"
              alt="play"
              width={54}
              height={24}
              className="z-20 absolute top-[24px] right-[24px]"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 z-10 rounded-[16px]"></div>
            <div className="absolute top-[98px] left-[10px] right-[10px] flex flex-col justify-between items-start gap-[24px] z-20">
              <h2 className="text-white  w-full text-[16px] lg:text-[20px] leading-[16px] text-center font-extrabold uppercase">
                From Mics to Screens
              </h2>
              <div className="bg-[#F683CA] rounded-[16px] p-[10px] flex flex-row justify-between items-center gap-[10px]">
                <span className="text-[#262626] text-[12px] leading-[17px]  font-extrabold text-center">
                  Smart strategies for Advertising and Creating on the Changing
                  Media Landscape
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between items-start p-[24px] min-w-[305px] lg:min-w-[434px] h-auto lg:h-[305px]">
            <div className="w-full flex flex-col justify-between items-center gap-[19px]">
              <div className="w-full flex flex-col justify-between items-start gap-[16px] lg:gap-[8px]">
                <h2 className="text-[#262626] font-bold text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px]">
                  From Mics to Screens
                </h2>
                <div className="flex flex-row justify-between items-start gap-[11px]">
                  {["Advertiser", "Podcaster"].map((point, index) => (
                    <div
                      className="flex flex-row gap-[11px] items-center"
                      key={`${index}`}
                    >
                      <span className="font-normal text-[14px] leading-[22px] tracking-[0em] text-[#344054]">
                        {point}
                      </span>
                      {index < ["Advertiser", "Podcaster"].length - 1 && (
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
              <div className="w-full flex flex-row justify-between items-center border-t border-[#E8E8E8] py-[24px]">
                <span className="text-[#344054] font-normal text-[14px] leading-[22px]">
                  Podcast Advertising and Show Strategy for the YouTube Era
                </span>
              </div>
            </div>
            <GradientButton
              className="w-[142px]"
              text="Download"
              type="secondary"
              textClassName="text-[16px] leading-[24px] font-bold"
              rightIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1V15M8 15L15 8M8 15L1 8"
                    stroke="url(#paint0_linear_4394_19804)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4394_19804"
                      x1="1"
                      y1="8"
                      x2="15"
                      y2="8"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F11F68" />
                      <stop offset="1" stopColor="#162ABF" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center rounded-[16px] bg-[#FFFFFF] border border-[#E8E8E8] max-w-[305px] lg:max-w-[779px]">
          <div className="w-full relative  flex flex-col justify-center items-center gap-[20px] min-w-[305px] h-[305px] bg-[#091A3A] rounded-[16px]">
            <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
              Guide
            </span>
            <Image
              src="/assets/images/nbm_logo_white.png"
              alt="play"
              width={54}
              height={24}
              className="z-20 absolute top-[24px] right-[24px]"
            />
            <Image
              src="/assets/images/skill-seeker.png"
              alt="skill-seeker"
              width={258}
              height={123}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full flex flex-col justify-between items-start p-[24px] min-w-[305px] lg:min-w-[434px] h-auto lg:h-[305px]">
            <div className="w-full flex flex-col justify-between items-center gap-[19px]">
              <div className="w-full flex flex-col justify-between items-start gap-[16px] lg:gap-[8px]">
                <h2 className="text-[#262626] font-bold text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px]">
                Audience Targeting Profiles
                </h2>
                <div className="flex flex-row justify-between items-start gap-[11px]">
                  {["Advertiser"].map((point, index) => (
                    <div
                      className="flex flex-row gap-[11px] items-center"
                      key={`${index}`}
                    >
                      <span className="font-normal text-[14px] leading-[22px] tracking-[0em] text-[#344054]">
                        {point}
                      </span>
                      {index < ["Advertiser"].length - 1 && (
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
              <div className="w-full flex flex-row justify-between items-center border-t border-[#E8E8E8] py-[24px]">
                <span className="text-[#344054] font-normal text-[14px] leading-[22px]">
                A guide to podcast listener personas and how to match your brand to their mindset
                </span>
              </div>
            </div>
            <GradientButton
              className="w-[142px]"
              text="Download"
              type="secondary"
              textClassName="text-[16px] leading-[24px] font-bold"
              rightIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1V15M8 15L15 8M8 15L1 8"
                    stroke="url(#paint0_linear_4394_19804)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4394_19804"
                      x1="1"
                      y1="8"
                      x2="15"
                      y2="8"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F11F68" />
                      <stop offset="1" stopColor="#162ABF" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}
