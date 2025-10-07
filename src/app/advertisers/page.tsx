import BrandsScroller from "@/components/BrandsScroller";
import Button from "@/components/Button";
import GradientButton from "@/components/GradientButton";
import Navbar from "@/components/Navbar";

export default function Advertisers() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center">
      <Navbar bgColor="bg-[#B11E86]" linkColor="#FFFEFF" />
      <div className="bg-[#B11E86] flex flex-col items-center justify-center w-full">
        <section
          className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 items-center justify-between relative lg:max-w-[1440px]"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <h1 className="font-medium text-[16px] leading-[32px] text-[#FFFEFF]">
              For Brands & Media Agencies
            </h1>
            <div className="flex flex-col gap-[32px] items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-semibold text-[60px] leading-[72px] text-[#FFFEFF]">
                  High-Impact Audio Ads. Made Easy for Busy Teams
                </h1>
              </div>
              <h2 className="font-semibold text-[20px] leading-[28px] text-[#FFFEFF]">
                Global high-performance podcast and digital audio campaigns,
                delivered quickly, efficiently, and tailored to your goals.
              </h2>
              <div className="flex flex-row gap-[12px] items-center justify-start">
                <GradientButton
                  type="secondary"
                  text="Launch Your Own Campaign"
                />
                <GradientButton
                  type="tertiary"
                  text="Next Managed Campaign Service"
                />
              </div>
            </div>
          </div>

          <div className=" absolute right-0 top-0 bottom-0">
            <img
              src="./assets/images/advertisers-right-banner-bg.png"
              alt="advertisers-image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <section className="pt-[96px] pb-[48px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF] lg:max-w-[1440px]">
            <div className="w-full flex flex-row px-[80px] items-center justify-center gap-[24px]">
              <div className="w-full text-start">
                <h1 className="gradient-text font-bold text-[42px] leading-[50px] -tracking-[2%]">
                  Brands That Trust Us
                </h1>
              </div>
              <div className="py-[8px]">
                <p className="font-normal text-[#344054] text-[20px] leading-[28px]">
                  Over 300 advertisers have launched more than 850 successful
                  campaigns, across every budget, goal, and industry.
                </p>
              </div>
            </div>
            <BrandsScroller />
          </section>
          <section className="pt-[96px] pb-[48px] px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF]">
            <div className="w-full flex flex-row  items-center justify-center gap-[24px]">
              <div className="w-full text-start">
                <h1 className="gradient-text font-bold text-[42px] leading-[50px] -tracking-[2%]">
                  Choose Your Audio Advertising Solution
                </h1>
              </div>
              <div className="py-[8px]">
                <p className="font-normal text-[#344054] text-[20px] leading-[28px]">
                  Same trusted results. Two flexible ways to get there. Pick the
                  setup that fits your workflow, team, and goals.
                </p>
              </div>
            </div>
            <div className="w-full border-2 border-[#D2D2D2] rounded-[16px] p-[40px] gap-[40px] flex flex-col items-center justify-center ">
              <div className="w-full flex flex-row items-center justify-start gap-[10px]">
                <Button
                  text="Launch Your Campaign"
                  borderColor="#F11F68"
                  textColor="#F11F68"
                  bgColor="#FFEDFB"
                />
                <Button
                  text="Managed by Next"
                  borderColor="#344054"
                  textColor="#344054"
                  bgColor="#FFFFFF"
                />
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <div className="w-full bg-[#E1D2FF] rounded-[16px]">
                  <img
                    src="./assets/images/audioadsolbanner.svg"
                    alt="managed-by-next"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-[40px] p-[40px]">
                  <div className="flex flex-col items-start justify-center gap-[24px]">
                    <div>
                      <h1 className="font-bold text-[36px] leading-[44px] text-[#262626]">
                        Launch fast.
                      </h1>
                      <h1 className="font-bold text-[36px] leading-[44px] text-[#262626]">
                        From $50 /week
                      </h1>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[16px]">
                      <h5 className="text-[#344054] text-[20px] leading-[28px]">
                        For marketers & agencies who want to do it themselves
                      </h5>
                      <div className="flex flex-col items-start justify-center gap-[12px]">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <svg
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
                          <h6 className="text-[#344054] text-[20px] leading-[28px]">
                            Create you ad
                          </h6>
                        </div>

                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <svg
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
                          <h6 className="text-[#344054] text-[20px] leading-[28px]">
                            Target your audience
                          </h6>
                        </div>

                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <svg
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
                              stroke-linejoin="round"
                            />
                          </svg>
                          <h6 className="text-[#344054] text-[20px] leading-[28px]">
                            Go live in minutes
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <GradientButton
                      text="Start with Self-Serve"
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
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-[96px] pb-[48px] px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF]">
            <div className="w-full flex flex-row items-center justify-center rounded-[16px] px-[60px] py-[60px] gap-[59px] bg-[#F11F68]">
              <div className="w-full flex flex-row items-start justify-center gap-[59px]">
                <div className="w-full flex flex-col items-start justify-between max-w-[540px]">
                  <img
                    src="./assets/images/full-logo-white.png"
                    alt="advertiser-left-banner-bg"
                    className="w-auto h-[40px] object-cover"
                  />
                  <div className="flex flex-col items-start justify-center gap-[52px] mt-[48px]">
                    <h1 className="text-[#FFFEFF] text-[42px] leading-[50px] font-semibold -tracking-[2%]">
                      Launch Your Podcast Campaign Now
                    </h1>
                    <div>
                      <div className="p-2 xs:p-4">
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
                  <div className="bg-white rounded-2xl w-full md:max-w-[540px] p-8">
                    <form
                      className="bg-white w-full flex flex-col text-center justify-center items-center"
                      action="/nbmaistudio"
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
                              stroke-width="2.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <g clip-path="url(#clip1_251_14474)">
                              <path
                                d="M26.7508 28.4999V21.8333M26.7508 8.49992V1.83325M23.5508 5.16659H29.9508M23.5508 25.1666H29.9508M37.6308 3.16659L35.411 9.1784C35.0501 10.156 34.8696 10.6449 34.5889 11.056C34.3401 11.4204 34.0345 11.7388 33.6847 11.998C33.2899 12.2903 32.8207 12.4783 31.8821 12.8543L26.1108 15.1666L31.8821 17.4788C32.8207 17.8548 33.2899 18.0428 33.6847 18.3352C34.0345 18.5943 34.3401 18.9127 34.5889 19.2771C34.8696 19.6883 35.0501 20.1771 35.411 21.1548L37.6308 27.1666L39.8505 21.1548C40.2115 20.1771 40.392 19.6883 40.6727 19.2771C40.9214 18.9127 41.2271 18.5943 41.5769 18.3352C41.9716 18.0428 42.4409 17.8548 43.3794 17.4788L49.1508 15.1666L43.3794 12.8543C42.4409 12.4783 41.9716 12.2903 41.5769 11.998C41.2271 11.7388 40.9214 11.4204 40.6727 11.056C40.392 10.6449 40.2115 10.156 39.8505 9.1784L37.6308 3.16659Z"
                                stroke="url(#paint1_linear_251_14474)"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                              <stop stop-color="#F11F68"></stop>
                              <stop offset="1" stop-color="#162ABF"></stop>
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_251_14474"
                              x1="23.5508"
                              y1="15.1666"
                              x2="49.1508"
                              y2="15.1666"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#F11F68"></stop>
                              <stop offset="1" stop-color="#162ABF"></stop>
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
                          className="border border-color-1 placeholder-color-1 text-base rounded-lg block w-full p-2.5 mb-3"
                          placeholder="Enter brand name"
                        />
                        <textarea
                          name="content"
                          className="border border-color-1 placeholder-color-1 text-base rounded-lg block w-full p-2.5 mb-3"
                          placeholder="Write an outline of your product/services, target audience, and call to action"
                          rows={5}
                        ></textarea>
                        <select
                          name="voice_gender"
                          className="border border-color-1 placeholder-color-1 text-base rounded-lg block w-full p-2.5 text-[#98A2B3]"
                        >
                          <option>Recommended</option>
                          <option value="male">Male</option>
                          <option value="male">Female</option>
                        </select>
                        <div className="w-full flex flex-row items-center justify-center my-2">
                          <GradientButton
                            text="Create Free Podcast Ad"
                            fullWidth
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center pt-[48px] pb-[96px] px-[80px] bg-[#FFFFFF]">
            <div className="w-full flex flex-row items-center justify-between gap-[51px]">
              <div className="flex flex-col items-start justify-center gap-[40px] max-w-[540px]">
                <div className="flex flex-col items-start justify-center gap-[24px]">
                  <h1 className="gradient-text font-semibold text-[42px] leading-[50px]">
                    One Partner. Total Audio Reach.
                  </h1>
                  <div className="flex flex-col items-start justify-center gap-[16px]">
                    <p className="text-[#344054] text-[20px] leading-[28px]">
                      Reach your audience across global, regional, and niche
                      publishers, shows, and networks, all through one
                      streamlined buy.
                    </p>
                    <div className="flex flex-col items-start justify-center gap-[12px]">
                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              stroke-width="2.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[20px] leading-[28px]">
                          No vendor juggling
                        </h6>
                      </div>

                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              stroke-width="2.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[20px] leading-[28px]">
                          No messy reporting
                        </h6>
                      </div>

                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              stroke-width="2.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[20px] leading-[28px]">
                          No delays
                        </h6>
                      </div>

                      <div className="flex flex-row items-center justify-start gap-[12px]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1089_7557)">
                            <path
                              d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z"
                              stroke="#F11F68"
                              stroke-width="2.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1089_7557">
                              <rect
                                width="28"
                                height="28"
                                rx="14"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h6 className="text-[#344054] text-[20px] leading-[28px]">
                          No missed customers
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <GradientButton text="Download Media Kit" />
                </div>
              </div>
              <div>
                <img src="./assets/images/reach.png" alt="Media Kit" />
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col items-center justify-center py-[48px] px-[80px] bg-[#FFFFFF] gap-[64px]">
            <div className="w-full flex flex-col py-[96px] px-[64px] bg-[#FFEDFB] items-center justify-between gap-[24px]">
              <div className="flex flex-row items-start justify-between gap-[148px]">
                <div className="flex flex-col items-start justify-start gap-[40px] max-w-[520px]">
                  <div className="flex flex-col items-start justify-center gap-[24px]">
                    <div className="flex flex-col items-start justify-center gap-[20px]">
                      <h1 className="text-[#F11F68] font-medium text-[16px] leading-[24px]">
                        NBM is your Trusted Audio Ad Partner
                      </h1>
                      <h2 className="gradient-text font-semibold text-[42px] leading-[50px]">
                        Proof not promises
                      </h2>
                    </div>
                    <div>
                      <p className="text-[#344054] text-[20px] leading-[28px]">
                        Transparent, brand-safe, high-performing campaigns,
                        powered by best-in-class tools built for podcast and
                        digital audio advertising.
                      </p>
                    </div>
                  </div>
                  <GradientButton text="Download Media Kit" />
                </div>
                {/* Right div */}
                <div className="flex flex-col items-start justify-center gap-[24px]">
                  <div className="flex flex-col items-start justify-center gap-[16px] border-b-[#D2D2D2] border-b-[1px] pb-[32px]">
                    <img src="./assets/images/iab.png" alt="Proof" />

                    <h5 className="text-[#262626] font-medium text-[20px] leading-[28px]">
                      IAB-certified practices for trusted reporting
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
                      <g clip-path="url(#clip0_942_14433)">
                        <path
                          d="M18.4993 25.3334C21.721 25.3334 24.3327 22.7217 24.3327 19.5001C24.3327 16.2784 21.721 13.6667 18.4993 13.6667C15.2777 13.6667 12.666 16.2784 12.666 19.5001C12.666 22.7217 15.2777 25.3334 18.4993 25.3334Z"
                          stroke="#FF3893"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.4993 30.3334C26.721 30.3334 29.3327 27.7217 29.3327 24.5001C29.3327 21.2784 26.721 18.6667 23.4993 18.6667C20.2777 18.6667 17.666 21.2784 17.666 24.5001C17.666 27.7217 20.2777 30.3334 23.4993 30.3334Z"
                          stroke="#FF3893"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_942_14433">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(11 12)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <h5 className="text-[#262626] font-medium text-[20px] leading-[28px]">
                      Independent brand safety & suitability controls
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

                    <h5 className="text-[#262626] font-medium text-[20px] leading-[28px]">
                      Third-party analytics and conversion tracking
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
