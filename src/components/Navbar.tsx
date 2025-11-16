"use client";
import GradientButton from "./GradientButton";
import { useEffect, useState } from "react";
import isMobile from "@/util/util";
import Image from "next/image";
import Link from "next/link";
import CallMeBack from "./CallMeBack";
import ShareBrief from "./ShareBrief";


const isMobileScreen = isMobile();

interface NavbarProps {
  bgColor?: string;
  linkColor?: string;
  isPrimary?: boolean;
  bgColorOnOpen?: string;
}
export default function Navbar({ bgColor = "bg-white", bgColorOnOpen = "bg-[#F11F68]", linkColor = "#262626", isPrimary = false }: NavbarProps) {

  const [isMobileScreenMenuOpen, setisMobileScreenMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallMeBackModalOpen, setIsCallMeBackModalOpen] = useState(false);
  const [isShareBriefModalOpen, setIsShareBriefModalOpen] = useState(false);

  const showShareBriefModal = () => {
    setisMobileScreenMenuOpen(false); // Close mobile menu if open
    setIsShareBriefModalOpen(true);
  }

  const closeShareBriefModal = () => {
    setIsShareBriefModalOpen(false);
  }

  const showCallMeBackModal = () => {
    setisMobileScreenMenuOpen(false); // Close mobile menu if open
    setIsCallMeBackModalOpen(true);
  }

  const closeCallMeBackModal = () => {
    setIsCallMeBackModalOpen(false);
  }


  useEffect(() => {
    if (isMobileScreen) {
      setisMobileScreenMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 50;
      setIsScrolled(hasScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCallMeBackModalOpen) {
        closeCallMeBackModal();
      }
    };

    if (isCallMeBackModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isCallMeBackModalOpen]);

  return (
    <>
    <div className={`${isMobileScreenMenuOpen || isScrolled ? bgColorOnOpen+ '' : bgColor} flex justify-start items-start fixed top-0 left-0 right-0 z-[9999] mb-2 w-full  h-16 md:h-20 transition-all duration-300`}>
      <div className="w-full p-4 py-8 md:p-8 xl:max-w-[1440px]">
        <div className="w-full mt-4 md:mt-0">
          <nav className="fixed w-full z-20 top-0 start-0">
            <div
              className={`${isMobileScreenMenuOpen ? bgColorOnOpen + ' h-screen' : bgColor}  max-w-[1440px] h-[80px] mx-auto flex items-center justify-between gap-2 md:gap-4 px-4 lg:px-20 py-2 transition-shadow duration-300`}
              id="navbar"
              style={{height: '80px'}}
            >
              <Link href="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
              {
                (isMobileScreen && isMobileScreenMenuOpen) || !isPrimary ? (
                  <Image
                    src="/assets/images/logo-white.svg"
                    className="w-auto h-[30px]"
                    alt="NextBroadcastMedia Logo"
                    width={50}
                    height={50}
                  />
                ) : (
                  <Image
                    src="/assets/images/logo.svg"
                    className="w-auto h-[50px] md:h-[64px]"
                    alt="NextBroadcastMedia Logo"
                    width={50}
                    height={50}
                  />
                )
              }
              </Link>

              {
                !isMobileScreen  &&
                  <div
                  className="lg:flex flex-row w-full items-center gap-[24px] h-[64px] text-base leading-[24px] font-semibold"
                  style={{ color: linkColor }}
                >
                  <a href="/advertisers" className="hover:underline transition-all" style={{ color: linkColor }}
                    >For Advertisers</a
                  >
                  <a href="/publishers" className="hover:underline transition-all" style={{ color: linkColor }}
                    >For Publishers</a
                  >
                  <a href="/podcasters" className="hover:underline transition-all" style={{ color: linkColor }}
                    >For Podcasters</a
                  >
                  <a href="/about-us" className="hover:underline transition-all" style={{ color: linkColor }}>About Us</a>
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
                        <Image
                          src="/assets/images/x-close.png"
                          alt="Menu"
                          className="w-6 h-6"
                          width={40}
                          height={40}
                        />
                      ) : (
                        <Image
                          src="/assets/images/menu.png"
                          alt="Menu"
                          className="w-6 h-6"
                          width={40}
                          height={40}
                        />
                      )
                    }
                  </button>
                ):
                (
                  <div className="flex flex-row gap-[12px] h-[64px] items-center">
                  <GradientButton type={ isPrimary ? "secondary" : "tertiary"} text="Share a Brief" className="h-[48px]" onClick={showShareBriefModal} />
                  <GradientButton type={ isPrimary ? "primary" : "secondary"} text="Сall Me Back" className="h-[48px]" onClick={showCallMeBackModal} />
                </div>
                )
                }
              </div>
            </div>

            {
              isMobileScreen && isMobileScreenMenuOpen &&
              <div className={`max-w-[1440px] mx-auto ${bgColorOnOpen} h-screen px-4 py-2`}>
                <div id="mobile-menu" className="lg:hidden px-4 py-2">
                  <ul className="flex flex-col gap-[20px]  my-[40px]">
                    <li>
                      <a href="/advertisers" className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold hover:underline transition-all"
                        >For Advertisers</a
                      >
                    </li>
                    <li>
                      <a href="/publishers" className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold hover:underline transition-all"
                        >For Publishers</a
                      >
                    </li>
                    <li>
                      <a href="/podcasters" className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold hover:underline transition-all"
                        >For Podcasters</a
                      >
                    </li>
                    <li>
                      <a
                        href="/about-us"
                        className="text-[#FFFEFF] text-[24px] leading-[32px] font-semibold hover:underline transition-all"
                        >About Us</a
                      >
                    </li>
                  </ul>
                  <div className="flex flex-row gap-[20px] justify-center items-center w-full">
                    <div className="w-full flex flex-row justify-center items-center">
                      <GradientButton type="tertiary" text="Share a Brief" className="w-[160px] h-[40px]"  onClick={showShareBriefModal}/>
                    </div>
                    <div className="w-full flex flex-row justify-center items-center">
                      <GradientButton type="secondary" text="Сall Me Back" className="w-[160px] h-[40px]" onClick={() => showCallMeBackModal()} />
                    </div>
                  </div>
                </div>
              </div>
              }
          </nav>
        </div>
      </div>
    </div>

    {/* Share Brief Modal */}
    {isShareBriefModalOpen && (
      <div 
        className="fixed inset-0 z-[10000] flex items-end lg:items-center justify-center  p-0 lg:p-4 bg-black/40 bg-opacity-20"
        onClick={closeShareBriefModal}
      >
      <div 
      className="relative w-full max-w-[900px] max-h-auto flex flex-row items-end lg:items-center justify-center overflow-y-auto shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <ShareBrief closeModal={closeShareBriefModal} />
    </div>
      </div>
    )}

    {/* Call Me Back Modal */}
    {isCallMeBackModalOpen && (
      <div 
        className="fixed inset-0 z-[10000] flex items-center justify-center  p-0 lg:p-4 bg-black/40 bg-opacity-20"
        onClick={closeCallMeBackModal}
      >
        <div 
          className="relative w-full max-w-[900px] max-h-[700px] overflow-y-auto shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeCallMeBackModal}
            className="absolute top-[64px] lg:top-4 right-4 z-10 p-0 w-10 h-10 lg:p-2 text-[#262626] transition-colors rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <Image
              src="/assets/images/close.png"
              alt="Close"
              width={12}
              height={12}
              className="w-[12px] h-[12px]"
            />
          </button>
          <CallMeBack closeModal={closeCallMeBackModal} />
        </div>
      </div>
    )}
    </>
  );
}
