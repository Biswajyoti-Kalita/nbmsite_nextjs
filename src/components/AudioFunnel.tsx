"use client";

import Link from "next/link";
import { useState } from "react";

const FunnelChip = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`py-[10px] px-[16px] border border-[2px] rounded-[44px] ${
        isActive
          ? "bg-[#FFEDFB] border-[#F11F68]"
          : "bg-[#FFFFFF] border-[#344054]"
      }`}
      onClick={onClick}
    >
      <h1
        className={`w-full font-semibold text-[16px] leading-[24px] tracking-[0em] whitespace-nowrap ${
          isActive ? "text-[#F11F68]" : "text-[#344054]"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default function AudioFunnel() {
  const [activeFunnel, setActiveFunnel] = useState("top_of_funnel");

  return (
    <section className="pt-[84px] lg:pt-[96px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-start justify-start gap-[46px] lg:gap-[64px] bg-[#FFFEFF]">
      <h1 className="font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] gradient-text tracking-[-0.02em]">
        Audio That Delivers Across the Funnel
      </h1>
      <div className="w-full flex flex-col items-start justify-center gap-[40px] border-[0px] lg:border-[1px] border-[#D2D2D2] rounded-[16px] p-[0px] lg:p-[40px] bg-[#FFFEFF]">
        <div className="w-full flex flex-row items-start justify-start gap-[10px] overflow-x-auto">
          <FunnelChip
            title="Top of Funnel"
            isActive={activeFunnel === "top_of_funnel"}
            onClick={() => setActiveFunnel("top_of_funnel")}
          />
          <FunnelChip
            title="Mid-Funnel"
            isActive={activeFunnel === "middle_of_funnel"}
            onClick={() => setActiveFunnel("middle_of_funnel")}
          />
          <FunnelChip
            title="Bottom of Funnel"
            isActive={activeFunnel === "bottom_of_funnel"}
            onClick={() => setActiveFunnel("bottom_of_funnel")}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[10px] max-w-[1280px] border-t border-b lg:border-[0px] border-[#D2D2D2] py-[32px] lg:py-[0px]">
          <div className="w-full flex flex-col items-center justify-center bg-[#F7F2FF] rounded-[10px] lg:rounded-[16px] max-w-[550px]">
            <div className="w-full flex flex-col items-center justify-center gap-[28px] pt-[42px] pb-[42px]">
              <h1 className="font-bold text-[12.5px] lg:text-[20px] leading-[15px] lg:leading-[24px] tracking-[-0.01em] text-[#262626]">
                Marketing Funnel
              </h1>
              <div className="w-full flex flex-col items-center justify-center gap-[4px] lg:gap-[16px]">
                <h6
                  className={`font-semibold w-full text-[9px] lg:text-[15px] leading-[11px] lg:leading-[17px] tracking-[-0.02em] text-center text-[#262626] ${
                    activeFunnel === "top_of_funnel"
                      ? "text-[#F11F68]"
                      : "text-[#262626]"
                  }`}
                >
                  Awareness
                </h6>
                <div className="max-w-[129px] lg:max-w-[199px]">
                  {activeFunnel === "top_of_funnel" ? (
                    <svg
                      width="199"
                      height="63"
                      viewBox="0 0 199 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover"
                    >
                      <path
                        d="M187.823 1H11.0111C3.85801 1 -0.981873 8.29169 1.79596 14.8834L18.9763 55.6519C20.5384 59.3585 24.1692 61.7685 28.1915 61.7685H170.691C174.717 61.7685 178.35 59.3542 179.91 55.6427L197.042 14.8741C199.812 8.28362 194.972 1 187.823 1Z"
                        fill="url(#paint0_linear_1237_3076)"
                        stroke="#7E083E"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1237_3076"
                          x1="99.4089"
                          y1="4.87895"
                          x2="99.4089"
                          y2="107.122"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F11F68" />
                          <stop offset="1" stopColor="#8B123C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="197"
                      height="61"
                      viewBox="0 0 197 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover"
                    >
                      <path
                        d="M186.822 0H10.0101C2.85704 0 -1.98285 7.29169 0.794981 13.8834L17.9754 54.6519C19.5374 58.3585 23.1682 60.7685 27.1905 60.7685H169.69C173.716 60.7685 177.349 58.3542 178.909 54.6427L196.041 13.8741C198.811 7.28362 193.971 0 186.822 0Z"
                        fill="#F11F68"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-[4px] lg:gap-[16px]">
                <h6
                  className={`font-semibold w-full text-[9px] lg:text-[15px] leading-[11px] lg:leading-[17px] tracking-[-0.02em] text-center text-[#262626] ${
                    activeFunnel === "middle_of_funnel"
                      ? "text-[#F11F68]"
                      : "text-[#262626]"
                  }`}
                >
                  Consideration
                </h6>
                <div className="max-w-[80px] lg:max-w-[120px]">
                  {activeFunnel === "middle_of_funnel" ? (
                    <svg
                      width="122"
                      height="66"
                      viewBox="0 0 122 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover"
                    >
                      <path
                        d="M110.424 1H11.0121C3.85923 1 -0.98066 8.29118 1.79666 14.8828L19.9713 58.0182C21.5332 61.7251 25.1641 64.1353 29.1867 64.1353H92.6523C96.7038 64.1353 100.355 61.6908 101.898 57.9448L119.67 14.8094C122.382 8.22745 117.543 1 110.424 1Z"
                        fill="url(#paint0_linear_1254_9623)"
                        stroke="#8C0A45"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1254_9623"
                          x1="60.6537"
                          y1="1"
                          x2="60.6537"
                          y2="84.5845"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3893" />
                          <stop offset="1" stopColor="#992258" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="120"
                      height="64"
                      viewBox="0 0 120 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover"
                    >
                      <path
                        d="M109.423 0H10.0101C2.85728 0 -1.98261 7.29118 0.794703 13.8828L18.9693 57.0182C20.5312 60.7251 24.1622 63.1353 28.1847 63.1353H91.6503C95.7018 63.1353 99.3529 60.6908 100.896 56.9448L118.668 13.8094C121.38 7.22745 116.541 0 109.423 0Z"
                        fill="#FF3893"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-[4px] lg:gap-[16px]">
                <h6
                  className={`font-semibold w-full text-[9px] lg:text-[15px] leading-[11px] lg:leading-[17px] tracking-[-0.02em] text-center text-[#262626] ${
                    activeFunnel === "bottom_of_funnel"
                      ? "text-[#F11F68]"
                      : "text-[#262626]"
                  }`}
                >
                  Purchase
                </h6>
                <div className="max-w-[31px] lg:max-w-[43px]">
                  {activeFunnel === "bottom_of_funnel" ? (
                    <svg
                      width="43"
                      height="47"
                      viewBox="0 0 43 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover"
                    >
                      <path
                        d="M31.114 1H11.0112C3.88639 1 -0.952848 8.23877 1.77061 14.8225L11.933 39.3894C15.3545 47.6606 27.0862 47.6152 30.4436 39.3177L40.3839 14.7508C43.0438 8.17692 38.2056 1 31.114 1Z"
                        fill="url(#paint0_linear_1254_9640)"
                        stroke="#FF43C8"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1254_9640"
                          x1="21.0003"
                          y1="1"
                          x2="21.0003"
                          y2="61.975"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#B11E86" />
                          <stop offset="1" stop-color="#4B0D39" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="41"
                      height="45"
                      viewBox="0 0 41 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover"
                    >
                      <path
                        d="M30.113 0H10.0102C2.88541 0 -1.95382 7.23877 0.769632 13.8225L10.9321 38.3894C14.3536 46.6606 26.0852 46.6152 29.4426 38.3177L39.3829 13.7508C42.0429 7.17692 37.2046 0 30.113 0Z"
                        fill="#B11E86"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {activeFunnel === "top_of_funnel" && (
            <div className="w-full flex flex-col items-center justify-center  gap-[32px] lg:gap-[40px] max-w-[590px]">
              <div className="w-full flex flex-col items-center justify-start gap-[24px]">
                <h1 className="font-bold w-full text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] tracking-[-0.02em] text-[#262626]">
                  Build Awareness
                </h1>
                <div className="w-full flex flex-col items-center justify-center gap-[16px]">
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      +64% unaided brand recall vs. other digital formats
                    </h6>
                  </div>
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      70% of listeners say podcast ads help them discover new
                      products
                    </h6>
                  </div>
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      Dynamic insertion enables timely, targeted messaging at
                      scale
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start  py-[10px] px-[16px] gap-[6px]">
                <Link href="/case-studies/emirates-airlines">
                <h4 className="font-bold text-[16px] leading-[24px] tracking-[-0.0em] gradient-text flex flex-row items-center justify-center gap-[6px]">
                Read Awareness Case Studies
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L13 1M13 1H5M13 1V9"
                      stroke="url(#paint0_linear_4298_1540)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4298_1540"
                        x1="1"
                        y1="7"
                        x2="13"
                        y2="7"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F11F68" />
                        <stop offset="1" stop-color="#162ABF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </h4>
                </Link>
              </div>
            </div>
          )}

          {activeFunnel === "middle_of_funnel" && (
            <div className="w-full flex flex-col items-center justify-center gap-[32px] lg:gap-[40px] max-w-[590px]">
              <div className="w-full flex flex-col items-center justify-start gap-[24px]">
                <h1 className="font-bold w-full text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] tracking-[-0.02em] text-[#262626]">
                  Increase Consideration
                </h1>
                <div className="w-full flex flex-col items-center justify-center gap-[16px]">
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      Host-read ads deliver 2x higher engagement than visual
                      formats
                    </h6>
                  </div>
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      Listeners feel more connected to brands advertised on
                      podcasts
                    </h6>
                  </div>
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      Personalised messaging drives relevance and recall
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start  py-[10px] px-[16px] gap-[6px]">
                <Link href="/case-studies/bel">
                  <h4 className="font-bold text-[16px] leading-[24px] tracking-[-0.0em] gradient-text flex flex-row items-center justify-center gap-[6px]">
                  Read Consideration Case Studies
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 13L13 1M13 1H5M13 1V9"
                        stroke="url(#paint0_linear_4298_1540)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4298_1540"
                          x1="1"
                          y1="7"
                          x2="13"
                          y2="7"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F11F68" />
                          <stop offset="1" stop-color="#162ABF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h4>
                </Link>
                
              </div>
            </div>
          )}

          {activeFunnel === "bottom_of_funnel" && (
            <div className="w-full flex flex-col items-center justify-center gap-[32px] lg:gap-[40px] max-w-[590px]">
              <div className="w-full flex flex-col items-center justify-start gap-[24px]">
                <h1 className="font-bold w-full text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] tracking-[-0.02em] text-[#262626]">
                  Drive Action
                </h1>
                <div className="w-full flex flex-col items-center justify-center gap-[16px]">
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      51% of listeners have made a purchase after hearing a
                      podcast ad
                    </h6>
                  </div>
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      Listen-through rates consistently exceed 80%
                    </h6>
                  </div>
                  <div className="w-full flex flex-row gap-[12px]">
                    <div className="w-[24px] lg:w-[26px]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
                      >
                        <path
                          d="M7.58366 12.8334L11.0837 16.3334L18.0837 9.33342M24.5003 12.8334C24.5003 19.2767 19.277 24.5001 12.8337 24.5001C6.39034 24.5001 1.16699 19.2767 1.16699 12.8334C1.16699 6.39009 6.39034 1.16675 12.8337 1.16675C19.277 1.16675 24.5003 6.39009 24.5003 12.8334Z"
                          stroke="#F11F68"
                          strokeWidth="2.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <h6 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[-0.0em] text-[#344054]">
                      Strong performance in brand lift, intent, and conversion
                      metrics
                    </h6>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start  py-[10px] px-[16px] gap-[6px]">
                <Link href="/case-study-library">                
                  <h4 className="font-bold text-[16px] leading-[24px] tracking-[-0.0em] gradient-text flex flex-row items-center justify-center gap-[6px]">
                    Read Conversion Case Study
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 13L13 1M13 1H5M13 1V9"
                        stroke="url(#paint0_linear_4298_1540)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4298_1540"
                          x1="1"
                          y1="7"
                          x2="13"
                          y2="7"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F11F68" />
                          <stop offset="1" stop-color="#162ABF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h4>
                </Link>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
