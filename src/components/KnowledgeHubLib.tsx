"use client";

// import Link from "next/link";
import { useState } from "react";
import GradientButton from "./GradientButton";
import Image from "next/image";

export default function KnowledgeHubLib() {
  const [selectedType, setSelectedType] = useState("View All");
  // const filters = ["All"];

  const types = [
    "View All",
    "Guide",
    "White Paper",
    "Graphic",
    "Video",
    "Event",
    "Press",
  ];

  return (
    <section className="w-full flex flex-col justify-start items-start lg:flex-row bg-[#FFFEFF] text-[#262626] py-[96px] px-4 lg:px-[80px] gap-[64px]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start max-w-[1280px] gap-[32px] gap-[64px]">
        <div className="w-full flex flex-col justify-between items-start gap-[20px] max-w-full lg:max-w-[280px]">
          <h6 className="text-[#F11F68] font-bold text-[14px] leading-[20px] w-full">
            Type
          </h6>
          <select className="w-full border-[#D0D5DD] border-[1px] rounded-[8px] p-[10px]">
          {types.map((type, index) => (
                <option
                  key={index}
                  value={type}
                >
                  {type}
                </option>  
              ))}
          </select>
          <div className="hidden lg:flex w-full flex flex-col justify-between items-start gap-[4px] max-w-[280px]">
            <ul className="space-y-2 w-full">
              {types.map((type, index) => (
                <li
                  key={index}
                  className={`${
                    selectedType === type ? "font-bold bg-[#F8F9FA]" : ""
                  } text-[16px] cursor-pointer hover:text-[#262626] hover:bg-[#F8F9FA] transition-colors px-[8px] py-[12px]`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-[32px]">
          <div className="w-full flex flex-row justify-start items-start gap-[10px]">
            <span className="bg-[#FFEDFB] py-[8px] px-[16px] rounded-[44px] border-[2px] border-[#F11F68] gap-[6px] text-[#F11F68] text-[16px] leading-[24px] font-semibold">
              Advertiser
            </span>
            <span className="py-[8px] px-[16px] rounded-[44px] border-[2px] border-[#344054] gap-[6px] text-[#344054] text-[16px] leading-[24px] font-semibold">
              Podcaster
            </span>
            <span className="py-[8px] px-[16px] rounded-[44px] border-[2px] border-[#344054] gap-[6px] text-[#344054] text-[16px] leading-[24px] font-semibold">
              Publisher
            </span>
          </div>
          <div className="w-full flex flex-col justify-between items-start gap-[10px] p-4 lg:px-[32px] rounded-[16px] bg-[#F8F9FA] h-full">
            <div className="w-full flex flex-col justify-between items-start gap-[64px] py-[12px] rounded-[16px]">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-start gap-[20px]">
                <div className="w-full max-w-[426px] flex flex-col justify-between items-start gap-[32px] bg-[#FFFEFF] border border-[#E8E8E8] rounded-[16px]">
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[285px]">
                    <Image
                      src="/assets/images/mics-to-screen.jpg"
                      alt="guide"
                      width={367}
                      height={238}
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
                    <div className="absolute top-[98px] left-[30px] right-[30px] flex flex-col justify-between items-start gap-[24px] z-20">
                      <h2 className="text-white  w-full text-[22px] lg:text-[28px] leading-[17px] lg:leading-[22px] text-center font-extrabold">
                        From Mics to Screens
                      </h2>
                      <div className="bg-[#F683CA] rounded-[16px] p-[10px] flex flex-row justify-between items-center gap-[10px]">
                        <span className="text-[#262626] text-[12px] lg:text-[16px] leading-[17px] lg:leading-[22px] font-extrabold text-center">
                          Smart strategies for Advertising and Creating on the
                          Changing Media Landscape
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[17px] lg:leading-[34px] font-bold">
                          From Mics to Screens{" "}
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
                              {index <
                                ["Advertiser", "Podcaster"].length - 1 && (
                                <span>
                                  <svg
                                    width="4"
                                    height="4"
                                    viewBox="0 0 4 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2"
                                      cy="2"
                                      r="2"
                                      fill="#344054"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                        <h2 className="font-normal text-[14px] leading-[22px] tracking-[0em] text-[#344054]">
                        Podcast Advertising and Show Strategy for the YouTube Era{" "}
                        </h2>                        
                      </div>
                    </div>
                    <GradientButton
                      text="Download"
                      type="secondary"
                      className="w-[142px]"
                      textClassName="text-[16px] leading-[24px] tracking-[0em] text-[#344054]"
                      onClick={() => {}}
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
                            stroke="url(#paint0_linear_4394_20117)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_4394_20117"
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

                <div className="w-full max-w-[426px] flex flex-col justify-between items-start gap-[32px] bg-[#FFFEFF] border border-[#E8E8E8] rounded-[16px]">
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[285px]">
                    <Image
                      src="/assets/images/women-music.png"
                      alt="guide"
                      width={367}
                      height={238}
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

                  </div>
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[17px] lg:leading-[34px] font-bold">
                          Webinar: YouTube & Podcast Advertising{" "}
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
                              {index <
                                ["Advertiser"].length - 1 && (
                                <span>
                                  <svg
                                    width="4"
                                    height="4"
                                    viewBox="0 0 4 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="2"
                                      cy="2"
                                      r="2"
                                      fill="#344054"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                        <h2 className="font-normal text-[14px] leading-[22px] tracking-[0em] text-[#344054]">
                        Buying Podcast Ads in an Audio and YouTube World
                        </h2>                        
                      </div>
                    </div>
                    <GradientButton
                      text="Download"
                      type="secondary"
                      className="w-[142px]"
                      textClassName="text-[16px] leading-[24px] tracking-[0em] text-[#344054]"
                      onClick={() => {}}
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
                            stroke="url(#paint0_linear_4394_20117)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_4394_20117"
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



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
