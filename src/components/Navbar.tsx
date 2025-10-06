"use client";
import GradientButton from "./GradientButton";
import { useEffect, useState } from "react";
import isMobile from "@/util/util";


const isMobileScreen = isMobile();
export default function Navbar() {

  const [isMobileScreenMenuOpen, setisMobileScreenMenuOpen] = useState(false);
  

  useEffect(() => {

  }, []);

  useEffect(() => {
    if (isMobileScreen) {
      setisMobileScreenMenuOpen(false);
    }
  }, [isMobileScreen]);

  return (
    <div className={`${isMobileScreenMenuOpen ? 'bg-[#F11F68] h-screen' : 'bg-white'} flex justify-center items-center fixed top-0 left-0 right-0 z-20 mb-2`}>
      <div className="w-full p-4 md:p-8 xl:max-w-[1440px]">
        <div className="w-full mt-4 md:mt-0">
          <nav className="fixed w-full z-20 top-0 start-0">
            <div
              className="max-w-[1440px] h-16 md:h-20 mx-auto flex items-center justify-between gap-2 md:gap-4 px-4 lg:px-20 py-2 transition-shadow duration-300"
              id="navbar"
            >
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {
                isMobileScreen && isMobileScreenMenuOpen ? (
                  <img
                    src="./assets/images/logo-white.svg"
                    className="w-auto h-[50px] md:h-[64px]"
                    alt="NextBroadcastMedia Logo"
                  />
                ) : (
                  <img
                    src="./assets/images/logo.svg"
                    className="w-auto h-[50px] md:h-[64px]"
                    alt="NextBroadcastMedia Logo"
                  />
                )
              }
              </a>

              {
                !isMobileScreen  &&
                  <div
                  className="lg:flex flex-row w-full items-start gap-[24px] text-[#262626] text-base font-semibold"
                >
                  <a href="/nbmaistudio" className="text-[#262626]"
                    >For Advertisers</a
                  >
                  <a href="#how-it-works" className="text-[#262626]"
                    >For Publishers</a
                  >
                  <a href="https://nextbroadcast.media" className="text-[#262626]"
                    >For Podcasters</a
                  >
                  <a href="#pricing" className="text-[#262626]">About Us</a>
                </div>   
              }


              <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-3">

                {isMobileScreen ? (  
                  <button
                    id="toggleBtn"
                    type="button"
                    onClick={() => setisMobileScreenMenuOpen(!isMobileScreenMenuOpen)}
                    className="block lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  >
                    <span className="sr-only">Open main menu</span>
                    {
                      isMobileScreenMenuOpen ? (
                        <img
                          src="./assets/images/x-close.png"
                          alt="Menu"
                          className="w-6 h-6"
                        />
                      ) : (
                        <img
                          src="./assets/images/menu.png"
                          alt="Menu"
                          className="w-6 h-6"
                        />
                      )
                    }
                  </button>
                ):
                (
                  <div className="flex flex-row gap-[12px]">
                  <GradientButton type="secondary" text="Share a Brief" />
                  <GradientButton type="primary" text="Сall Me Back" />
                </div>
                )
                }
              </div>
            </div>

            {
              isMobileScreen && isMobileScreenMenuOpen &&
              <div className="max-w-[1440px] mx-auto bg-[#F11F68] h-screen px-4 py-2">
                <div id="mobile-menu" className="lg:hidden px-4 py-2">
                  <ul className="flex flex-col gap-[20px]  my-[40px]">
                    <li>
                      <a href="/nbmaistudio" className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold"
                        >AI Ad-Studio</a
                      >
                    </li>
                    <li>
                      <a href="#how-it-works" className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold"
                        >How it works</a
                      >
                    </li>
                    <li>
                      <a href="#pricing" className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold"
                        >Pricing</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://nextbroadcast.media"
                        className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold"
                        >About Us</a
                      >
                    </li>
                  </ul>
                  <div className="flex flex-row gap-[20px]">
                    <GradientButton type="tertiary" text="Share a Brief" />
                    <GradientButton type="secondary" text="Сall Me Back" />
                  </div>
                </div>
              </div>
              }
          </nav>
        </div>
      </div>
    </div>
  );
}
