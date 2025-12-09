"use client";
import Image from "next/image";
import Button from "@/components/Button";
import GradientButton from "./GradientButton";
import { useState } from "react";
import { openShareBriefModal } from "@/util/modalEvents";

import Link from "next/link";

export default function AdvertiserLaunchCampaign() {
  const [selectedOption, setSelectedOption] = useState("launch-your-campaign");

  return (
    <div className="w-full border-[0px] lg:border-[2px] border-[#D2D2D2] rounded-[16px] px-0 lg:px-[40px] py-[24px] lg:py-[40px] gap-[40px] flex flex-col items-center justify-center ">
      <div className="w-full flex flex-row items-start lg:items-center justify-start overflow-x-auto gap-[10px]">
        <Button
          text="Launch Your Campaign"
          borderColor={
            selectedOption === "launch-your-campaign" ? "#F11F68" : "#344054"
          }
          textColor={
            selectedOption === "launch-your-campaign" ? "#F11F68" : "#344054"
          }
          bgColor={
            selectedOption === "launch-your-campaign" ? "#FFEDFB" : "#FFFFFF"
          }
          onClick={() => setSelectedOption("launch-your-campaign")}
        />
        <Button
          text="Managed by Next Audio"
          borderColor={
            selectedOption === "managed-by-next-audio" ? "#F11F68" : "#344054"
          }
          textColor={
            selectedOption === "managed-by-next-audio" ? "#F11F68" : "#344054"
          }
          bgColor={
            selectedOption === "managed-by-next-audio" ? "#FFEDFB" : "#FFFFFF"
          }
          onClick={() => setSelectedOption("managed-by-next-audio")}
        />
      </div>
      {selectedOption === "launch-your-campaign" && (
        <div className="w-full :border-b-[2px] border-t-[2px] lg:border-b-[0px] lg:border-t-[0px] py-[24px] lg:py-[0px] border-[#D2D2D2] flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full bg-[#E1D2FF] rounded-[16px]">
            <Image
              src="/assets/images/audioadsolbanner.svg"
              alt="managed-by-Next Audio"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-[40px] px-[0px] lg:px-[40px] py-[24px] lg:py-[40px]">
            <div className="flex flex-col items-start justify-center gap-[24px]">
              <div>
                <h1 className="font-bold font-semibold lg:font-bold text-[28px] lg:text-[42px] leading-[36px] lg:leading-[50px] text-[#262626]">
                  Launch fast.
                </h1>
                <h1 className="font-bold font-semibold lg:font-bold text-[28px] lg:text-[42px] leading-[36px] lg:leading-[50px] text-[#262626]">
                  From $50 /week
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center gap-[16px]">
                <h5 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  For marketers & agencies who want to do it themselves
                </h5>
                <div className="flex flex-col items-start justify-center gap-[12px]">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
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
                      Create you ad
                    </h6>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
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
                      Target your audience
                    </h6>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
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
                      Go live in minutes
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link href="https://admanager.fm" target="_blank">
              <GradientButton
                text="Start with Self-Serve"
                textClassName="text-[16px] leading-[24px] font-semibold"
                rightIcon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14"
                      stroke="#FFFEFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                type="primary"
              />
              </Link>
            </div>
          </div>
        </div>
      )}

      {selectedOption === "managed-by-next-audio" && (
        <div className="w-full border-[#FFE2F8] flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full bg-[#FFE2F8] rounded-[16px] max-w-[549px] h-[420px] flex items-center justify-center">
            <Image
              src="/assets/images/total-impressions.svg"
              alt="managed-by-Next Audio"
              width={500}
              height={500}
              className="w-full h-auto lg:h-full object-cover max-w-[477px] max-h-[301px]"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-[40px] px-[0px] lg:px-[40px] py-[24px] lg:py-[40px]">
            <div className="flex flex-col items-start justify-center gap-[24px]">
              <div>
                <h1 className="font-bold font-semibold lg:font-bold text-[28px] lg:text-[42px] leading-[36px] lg:leading-[50px] text-[#262626]">
                Managed campaign, 
                built for scale
                </h1>
              </div>
              <div className="flex flex-col items-start justify-center gap-[16px]">
                <h5 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                For agencies, larger brands, or custom goals
                </h5>
                <div className="flex flex-col items-start justify-center gap-[12px]">
                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
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
                    Dynamic ad formats
                    </h6>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
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
                    Strategic support and planning
                    </h6>
                  </div>

                  <div className="flex flex-row items-center justify-start gap-[12px]">
                    <svg
                      className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
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
                    Advanced analytics and measurement
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <GradientButton
                text="Request a Proposal"                
                type="primary"
                textClassName="text-[16px] leading-[24px] font-semibold"
                className=" h-[44px]"
                onClick={openShareBriefModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
