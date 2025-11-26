"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";

export default function LaunchYourPodcast() {
    return (
        <section className="pt-[48px] lg:pt-[96px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF]">
        <div className="w-full flex flex-row items-center justify-center rounded-[16px] px-[16px] lg:px-[40px] p-[24px] lg:p-[60px] gap-[24px] lg:gap-[59px] bg-[#F11F68]">
          <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-[59px]">
            <div className="w-full flex flex-col items-start justify-between max-w-[540px]">
              <Image
                src="/assets/images/admanager-logo.png"
                alt="advertiser-left-banner-bg"
                className="w-auto h-[60px] object-cover"
                width={500}
                height={500}
              />
              <div className="flex flex-col items-start justify-center gap-[52px] mt-[24px] lg:mt-[48px]">
                <h1 className="text-[#FFFEFF] text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold -tracking-[2%]">
                  Launch Your Podcast Campaign Now
                </h1>
                <div>
                  <div className="p-[16px] lg:p-4">
                    <ol className="relative text-white border-s my-4 xs:my-8 px-2 xs:px-4 border-dashed">
                      <li
                        className="ms-8 items-center flex"
                        style={{ marginBottom: "48px" }}
                      >
                        <span
                          className="absolute flex items-center justify-center bg-color-1 color-3 w-12 h-12 rounded-full -start-4 ring-1 text-[20px] font-semibold"
                          style={{ insetInlineStart: "-24px" }}
                        >
                          1
                        </span>
                        <h3
                          className="font-medium color-4 leading-tight text-xl"
                          id="bannerItem1"
                        >
                          Create your free ad
                        </h3>
                      </li>
                      <li
                        className="mb-10 ms-8 items-center flex"
                        style={{ marginBottom: "48px" }}
                      >
                        <span
                          className="absolute flex items-center justify-center bg-color-1 color-3 w-12 h-12 rounded-full -start-4 ring-1  text-[20px] font-semibold"
                          style={{ insetInlineStart: "-24px" }}
                        >
                          2
                        </span>
                        <h3
                          className="font-medium color-4 leading-tight text-xl"
                          id="bannerItem2"
                        >
                          Target your audience
                        </h3>
                      </li>
                      <li
                        className="mb-10 ms-8 items-center flex"
                        style={{ marginBottom: "48px" }}
                      >
                        <span
                          className="absolute flex items-center justify-center bg-color-1 color-3 w-12 h-12 rounded-full -start-4 ring-1  text-[20px] font-semibold"
                          style={{ insetInlineStart: "-24px" }}
                        >
                          3
                        </span>
                        <h3
                          className="font-medium color-4 leading-tight text-xl"
                          id="bannerItem3"
                        >
                          Launch Campaign!
                        </h3>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-row justify-center justify-end items-center w-full md:w-[620px]"
              style={{ zIndex: "11" }}
            >
              <div className="bg-white rounded-2xl w-full md:max-w-[540px] p-[16px] lg:p-8">
                <form
                  className="bg-white w-full flex flex-col text-center justify-center items-center"
                  action="https://admanager.fm/nbmaistudio"
                  target="_blank"
                >
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_251_14474)">
                        <path
                          d="M5.75957 29.8333V23.1667M2.55957 26.5H8.95957M16.6396 4.5L14.4198 10.5118C14.0588 11.4895 13.8784 11.9783 13.5977 12.3894C13.3489 12.7539 13.0433 13.0723 12.6934 13.3314C12.2987 13.6237 11.8294 13.8117 10.8909 14.1878L5.11957 16.5L10.8909 18.8122C11.8294 19.1883 12.2987 19.3763 12.6934 19.6686C13.0433 19.9277 13.3489 20.2461 13.5977 20.6106C13.8784 21.0217 14.0588 21.5105 14.4198 22.4882L16.6396 28.5L18.8593 22.4882C19.2203 21.5105 19.4008 21.0217 19.6815 20.6106C19.9302 20.2461 20.2359 19.9277 20.5857 19.6686C20.9804 19.3763 21.4497 19.1883 22.3882 18.8122L28.1596 16.5L22.3882 14.1878C21.4497 13.8117 20.9804 13.6237 20.5857 13.3314C20.2359 13.0723 19.9302 12.7539 19.6815 12.3894C19.4008 11.9783 19.2203 11.4895 18.8593 10.5118L16.6396 4.5Z"
                          stroke="url(#paint0_linear_251_14474)"
                          strokeWidth="2.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <g clipPath="url(#clip1_251_14474)">
                          <path
                            d="M26.7508 28.4999V21.8333M26.7508 8.49992V1.83325M23.5508 5.16659H29.9508M23.5508 25.1666H29.9508M37.6308 3.16659L35.411 9.1784C35.0501 10.156 34.8696 10.6449 34.5889 11.056C34.3401 11.4204 34.0345 11.7388 33.6847 11.998C33.2899 12.2903 32.8207 12.4783 31.8821 12.8543L26.1108 15.1666L31.8821 17.4788C32.8207 17.8548 33.2899 18.0428 33.6847 18.3352C34.0345 18.5943 34.3401 18.9127 34.5889 19.2771C34.8696 19.6883 35.0501 20.1771 35.411 21.1548L37.6308 27.1666L39.8505 21.1548C40.2115 20.1771 40.392 19.6883 40.6727 19.2771C40.9214 18.9127 41.2271 18.5943 41.5769 18.3352C41.9716 18.0428 42.4409 17.8548 43.3794 17.4788L49.1508 15.1666L43.3794 12.8543C42.4409 12.4783 41.9716 12.2903 41.5769 11.998C41.2271 11.7388 40.9214 11.4204 40.6727 11.056C40.392 10.6449 40.2115 10.156 39.8505 9.1784L37.6308 3.16659Z"
                            stroke="url(#paint1_linear_251_14474)"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_251_14474"
                          x1="2.55957"
                          y1="17.1667"
                          x2="28.1596"
                          y2="17.1667"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F11F68"></stop>
                          <stop offset="1" stopColor="#162ABF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_251_14474"
                          x1="23.5508"
                          y1="15.1666"
                          x2="49.1508"
                          y2="15.1666"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F11F68"></stop>
                          <stop offset="1" stopColor="#162ABF"></stop>
                        </linearGradient>
                        <clipPath id="clip0_251_14474">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0 0.5)"
                          ></rect>
                        </clipPath>
                        <clipPath id="clip1_251_14474">
                          <rect
                            width="10.24"
                            height="9.33333"
                            fill="white"
                            transform="translate(21.7607 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="text-slate-900 text-xl sm:text-2xl md:text-3xl font-bold">
                      Create Free Podcast Ads
                    </span>
                  </div>

                  <div className="text-slate-700 text-base sm:text-lg font-normal leading-loose mb-4">
                    Launch audio campaigns in 3 minutes
                  </div>
                  <div className="w-full flex flex-col items-start justify-center gap-[16px]">
                    <input
                      type="text"
                      name="brand"
                      className="border border-color-1 placeholder-color-1 text-base rounded-lg block w-full p-2.5 mb-3 text-slate-700"
                      placeholder="Enter brand name"
                    />
                    <textarea
                      name="content"
                      className="border border-color-1 placeholder-color-1 text-base rounded-lg block w-full p-2.5 mb-3 text-slate-700"
                      placeholder="Write an outline of your product/services, target audience, and call to action"
                      rows={5}
                    ></textarea>
                    <select
                      name="voice_gender"
                      className="border border-color-1 placeholder-color-1 text-base rounded-lg block w-full p-2.5 text-slate-700"
                    >
                      <option>Recommended</option>
                      <option value="male">Male</option>
                      <option value="male">Female</option>
                    </select>
                    <div className="w-full flex flex-row items-center justify-center my-2">
                      <GradientButton
                        text="Create Free Podcast Ad"
                        textClassName="text-[16px] leading-[24px] font-semibold"
                        className="h-[44px]"
                        fullWidth
                        buttonType="submit"
                        rightIcon={
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>

                        }
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
 )
}