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
          <div className="w-full flex flex-col justify-between items-start gap-[10px] p-0 lg:px-[32px] rounded-[16px] bg-[#F8F9FA] h-full">
            <div className="w-full flex flex-col justify-between items-start gap-[32px] lg:gap-[64px] py-[12px] rounded-[16px]">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-start gap-[20px]">
                
                
                <div className="w-full max-w-[426px] flex flex-col justify-between items-start gap-[32px] bg-[#FFFEFF] border border-[#E8E8E8] rounded-[16px]">
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[305px] rounded-[16px]">
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
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px]  gap-[24px]">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-bold">
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[305px] rounded-[16px]">
                    <Image
                      src="/assets/images/women-music.png"
                      alt="guide"
                      width={367}
                      height={238}
                      className="z-0 w-full h-full rounded-[16px] absolute top-0 left-0 object-cover"
                    />
                    <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
                      Video
                    </span>
                    <Image
                      src="/assets/images/nbm_logo_white.png"
                      alt="play"
                      width={54}
                      height={24}
                      className="z-20 absolute top-[24px] right-[24px]"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 z-10 rounded-[16px]"></div>
                    <div className="absolute z-20 pt-[107px] pl-[27px] flex flex-row justify-center items-center gap-[8px]">
                      <span className="text-white text-[35px] lg:text-[43px] leading-[56px] lg:leading-[70px] font-bold uppercase">
                        VIDEO
                      </span>
                      <span className="text-[#FF3893] font-extrabold lg:text-[44px] text-[35px] leading-[56px] lg:leading-[70px]">
                        +
                      </span>

                    </div>
                    <div className="absolute z-20 pt-[158px] pl-[48px] flex flex-row justify-center items-center gap-[8px]">
                      <span className="text-white text-[35px] lg:text-[43px] leading-[56px] lg:leading-[70px] font-bold uppercase">
                        podcasts
                      </span>
                      <span className="text-[#FF3893] font-extrabold lg:text-[44px] text-[35px] leading-[56px] lg:leading-[70px]">
                        +
                      </span>
                    </div>
                    <div className="absolute z-20 pt-[208px] pl-[81px] flex flex-row justify-center items-center gap-[8px]">
                      <span className="text-white text-[35px] lg:text-[43px] leading-[56px] lg:leading-[70px] font-bold uppercase">
                        advertisers
                      </span>
                      <span className="text-[#FF3893] font-extrabold lg:text-[44px] text-[35px] leading-[56px] lg:leading-[70px]">
                        +
                      </span>
                    </div>




                  </div>
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px]  gap-[24px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-bold">
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[305px] bg-black rounded-[16px]">
                    <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
                      Graphic
                    </span>
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 z-10 rounded-[16px]"></div>

                    <div className="absolute left-0 right-0 z-20 top-[89px] flex flex-col justify-center items-center gap-[18px] h-[125px]">
                      <Image src="/assets/images/admanager-logo.png" alt="graphic" width={246} height={58} className="max-w-[246px] h-[58px]" />
                      <div>
                      <h3 className="text-white text-center uppercase text-[22px] leading-[28px] font-extrabold">
                        <span className="text-center">THE anatomy of an </span>
                        <span className="underline">effective</span>
                      </h3>
                      <h3 className="text-white text-center uppercase text-[22px] leading-[28px] font-extrabold">
                        <span>20 second podcast ad</span>
                      </h3>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px] gap-[24px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-bold">
                        The anatomy of an effective 20 second podcast ad
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
                        A proven framework to write short podcast ads that deliver awareness and results
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[305px] rounded-[16px] bg-black">
                    <Image
                      src="/assets/images/waves.png"
                      alt="waves"
                      width={367}
                      height={238}
                      className="z-0 w-full h-full rounded-[16px] absolute top-0 left-0 object-cover"
                    />
                    <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
                      Graphic
                    </span>
                    <Image
                      src="/assets/images/nbm_logo_white.png"
                      alt="play"
                      width={54}
                      height={24}
                      className="z-20 absolute top-[24px] right-[24px]"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/50 z-10 rounded-[16px]"></div>
                    
                    
                    <div className="absolute z-20 top-[163px] left-[24px] flex flex-row justify-center items-center gap-[8px]">
                      <span className="text-white text-[28px] leading-[34px] font-extrabold ">
                      Why Podcast Advertising <br />Belongs in Every Media <br />Plan
                      </span>
                    </div>
                    

                  </div>
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px]  gap-[24px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-bold">
                        Why Podcast Advertising Belongs in Every Media Plan
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
                        Buying podcast ads. Reach premium audiences no other media can touch
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[305px] rounded-[16px] bg-[#091A3A]">
                    <Image
                      src="/assets/images/skill-seeker.png"
                      alt="waves"
                      width={367}
                      height={238}
                      className="rounded-[16px] absolute pt-[90px] pl-[84px]"
                    />
                    <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
                      Graphic
                    </span>
                    <Image
                      src="/assets/images/nbm_logo_white.png"
                      alt="play"
                      width={54}
                      height={24}
                      className="z-20 absolute top-[24px] right-[24px]"
                    />
                    
                  
                  </div>
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px]  gap-[24px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-bold">
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
                        A guide to podcast listener personas and how to match your brand to their mindset
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[305px] rounded-[16px] bg-[#091A3A]">
                    <Image
                      src="/assets/images/skill-seeker.png"
                      alt="waves"
                      width={367}
                      height={238}
                      className="rounded-[16px] absolute pt-[90px] pl-[84px]"
                    />
                    <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
                      Graphic
                    </span>
                    <Image
                      src="/assets/images/admanager-logo.png"
                      alt="play"
                      width={157}
                      height={37}
                      className="z-20 absolute top-[61px] left-[32px]"
                    />
                    <Image
                      src="/assets/images/q-3-4.png"
                      alt="play"
                      width={370}
                      height={123}
                      className="z-20 absolute top-[100px] lef-[32px]"
                    />
                  
                  </div>
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px]  gap-[24px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-bold">
                        The Q4 Podcast Playbook for Media Planners
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
                        Agency Guide: How to integrate podcasts into your Q4 media plans
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
                  <div className="w-full relative justify-between items-start gap-[20px] w-[426px] h-[305px] rounded-[16px] bg-black">
                    <Image
                      src="/assets/images/introduction.png"
                      alt="waves"
                      width={367}
                      height={238}
                      className="w-full rounded-[16px] absolute top-[38px] right-0 bottom-0 left-0 object-cover"
                    />
                    <span className="top-[24px] left-[24px] absolute py-[4px] px-[8px] rounded-[24px] text-[#FFFEFF] z-20 border border-[#FFFEFF]">
                      Guide
                    </span>                 
                  </div>
                  <div className="w-full flex flex-col justify-between items-start p-[24px] min-h-[262px]  gap-[24px] ">
                    <div className="w-full flex flex-col justify-between items-start gap-[14px]">
                      <div className="w-full flex flex-col justify-between items-start gap-[16px]">
                        <h2 className="text-[#262626] text-[22px] lg:text-[26px] leading-[30px] lg:leading-[34px] font-bold">
                        The Q4 Podcast Playbook for Media Planners
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
                        Agency Guide: How to integrate podcasts into your Q4 media plans
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
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
