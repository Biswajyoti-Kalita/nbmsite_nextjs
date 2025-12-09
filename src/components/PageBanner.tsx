"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import Breadcrumb from "./Breadcrumb";
import { openCallMeBackModal, openShareBriefModal } from "@/util/modalEvents";
import Link from "next/link";

interface PageBannerProps {
    breadcrumb: { name: string; link: string }[];
    headline: string;
    title: string;
    description: string;
    image: string;
    buttons: {
        text: string;
        type: "secondary" | "tertiary";
        link?: string;
        showBriefModal?: boolean;
        showCallMeBackModal?: boolean;
        classNames?: string;
    }[];
}

export default function PageBanner({ breadcrumb, headline, title, description, image, buttons }: PageBannerProps) {
    return (
        <section
          className="w-full mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] lg:pb-0 grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start justify-start relative lg:max-w-[1440px]"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 h-[580px] px-4 lg:px-0">
            <Breadcrumb pages={breadcrumb} />

            <h1 className="font-medium uppercase text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF]"> 
              {headline}
            </h1>
            <div className="flex flex-col gap-[32px] items-start justify-start">
                <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  {title}
                </h1>
              <h2 className="font-[Switzer] font-medium lg:font-[500] text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0] text-[#FFFEFF]">
                {description}
              </h2>

              <div className="flex flex-col lg:flex-row gap-[12px] items-start lg:items-center justify-start">

                {
                  buttons.map((button, index) => (
                    <div key={index}>

                    {
                      button.link && <Link href={button.link}
                      target={button.link.endsWith(".pdf") ? "_blank" : "_self"}
                      >                         
                                            <GradientButton
                      key={index}
                      type={button.type}
                      text={button.text}
                      className={` ${button.classNames}`}
                      textClassName="text-[16px] leading-[24px]"
                  
                    />
                      </Link>
                    }

                    {
                      button.showBriefModal && <GradientButton
                        type={button.type}
                        text={button.text}
                        className={`h-[44px] ${button.classNames}`}
                        textClassName="text-[16px] leading-[24px]"
                        onClick={openShareBriefModal}
                      />
                    }

                    {
                      button.showCallMeBackModal && <GradientButton
                        type={button.type}
                        text={button.text}
                        className={`h-[44px] ${button.classNames}`}
                        textClassName="text-[16px] leading-[24px]"
                        onClick={openCallMeBackModal}
                      />
                    }
                    </div>
                  ))
                }

              </div>
            </div>
          </div>

          <div className="relative lg:absolute right-[0px] top-0 lg:top-9  bottom-0 w-full max-w-[600px] flex items-center justify-center">
            <Image
              src={image}
              alt="podcasters-image"
              className="w-full h-full max-h-[500px] object-cover rounded-none lg:rounded-l-2xl"
              width={500}
              height={500}
            />
          </div>
        </section>
    )
}