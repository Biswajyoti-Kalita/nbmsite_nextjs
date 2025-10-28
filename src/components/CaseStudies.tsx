'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GradientButton from './GradientButton';

interface Analytics {
    title: string;
    subtitle: string;
}

interface CaseStudyCardProps {
    left_title: string;
    left_image: string;
    right_title: string;
    right_subtitle: string;
    right_point_1: string;
    right_point_2: string;
    analytics: Analytics[];
}

const CaseStudyCard = (caseStudy: CaseStudyCardProps) => {
    return (
        <div className="rounded-2xl bg-[#FFFEFF] w-full md:w-[740px] h-auto md:h-[300px] border-1 border-[#E8E8E8] flex  flex-col md:flex-row items-start justify-start">
          <div className="flex flex-col items-start p-[10px] justify-start gap-[16px] border-[#E8E8E8] border-r-1 h-full rounded-2xl w-[305px]">
            <h1 className="border-[#344054] border-1 px-[16px] py-[4px] rounded-3xl text-[14px] leading-[22px] text-[#344054]">
              {caseStudy.left_title}
            </h1>
            <div className="flex flex-row items-center justify-center gap-[16px] w-full">
              <Image src={caseStudy.left_image} alt="bel" className="w-[180px] h-[150px] object-contain" width={180} height={150} />
            </div>
          </div>
          <div className="flex flex-col p-[24px] items-start justify-start gap-[9px]">
            <div className="flex flex-col items-start justify-start gap-[19px]">
              <div className="flex flex-col items-start justify-start gap-[16px] w-full">
                <div className="bg-[#ABEFC6] py-[4px] px-[10px] rounded-3xl p-8">
                  <span className="text-[#091A3A] text-[14px] leading-[22px] font-normal">{caseStudy.right_title}</span>
                </div>
                <div>
                  <h2 className="text-[#262626] font-semibold text-[22px] leading-[30px] md:text-[26px] md:leading-[34px]">{caseStudy.right_subtitle}</h2>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-[11px]">
                    <span className="text-[#344054] text-[14px] leading-[16px] md:leading-[22px] font-normal">{caseStudy.right_point_1}</span>
                    <span className="hidden md:block">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#344054"/>
                    </svg>                        
                    </span>
                    <span className="text-[#344054] text-[14px] leading-[16px] md:leading-[22px] font-normal text-nowrap">{caseStudy.right_point_2}</span>
                  </div>
                </div>
              </div>
              <div className=" border-[#E8E8E8] border-t-1 p-4 pl-0 w-full">
                <div className="flex flex-row items-center justify-between gap-[11px] w-full">
                  {
                    caseStudy.analytics.map((analytics: Analytics, index:number) => (

                        <div key={index} className="w-[130px]">
                            <h4 className="font-medium text-[20px] leading-[26px] text-[#262626] flex items-center justify-start gap-[4px]">
                            {analytics.title}
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 12.2923H3.26667C5.50688 12.2923 6.62698 12.2923 7.48263 11.8563C8.23528 11.4728 8.8472 10.8609 9.23069 10.1082C9.66667 9.25259 9.66667 8.13249 9.66667 5.89228L9.66667 1.62561M9.66667 1.62561L6.33333 4.95894M9.66667 1.62561L13 4.95894" stroke="#0FB89F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>                            
                            </h4>
                            <h6 className="font-normal text-[12px] leading-[20px] text-[#344054]">{analytics.subtitle}</h6>
                        </div>
                    ))
                  }
                </div>  
              </div>
            </div>
                  <GradientButton
                  text="View Case Study"
                  type="secondary"
                  
                  rightIcon={
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13.959L13 1.95898M13 1.95898H5M13 1.95898V9.95898" stroke="url(#paint0_linear_1858_6122)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="paint0_linear_1858_6122" x1="1" y1="7.95898" x2="13" y2="7.95898" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F11F68"/>
                          <stop offset="1" stopColor="#162ABF"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                  />
          </div>
        </div>
    )
}

export default function CaseStudies() {
  const [splideWidth, setSplideWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const home = document.getElementById('home');
      if (home) {
        setSplideWidth(home.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const caseStudies = [
    {
      left_title: "FMCG",
      left_image: "/assets/images/bel.png",
      right_title: "Targeting mothers of young children",
      right_subtitle: "BEL Group",
      right_point_1: "Awareness",
      right_point_2: "Full-service managed campaign",
      analytics: [
        {
          title: "+30%",
          subtitle: "Interest Rate",
        },
        {
          title: "95%",
          subtitle: "Listen Through Rate",
        },
      ],
    },
    {
      left_title: "Luxury",
      left_image: "/assets/images/valentino.png",
      right_title: "Targeting HNWI females",
      right_subtitle: "Valentino",
      right_point_1: "Awareness",
      right_point_2: "Full-service managed campaign",
      analytics: [
        {
          title: "+34%",
          subtitle: "Purchase intention",
        },
        {
          title: "+16%",
          subtitle: "Brand affection",
        },
        {
          title: "96%",
          subtitle: "Listen through rate",
        },
      ],
    },
    {
      left_title: "CPG",
      left_image: "/assets/images/centrum.png",
      right_title: "Top 15% in attribution",
      right_subtitle: "Centrum",
      right_point_1: "Consideration",
      right_point_2: "Full-service managed campaign",
      analytics: [
        {
          title: "+34%",
          subtitle: "Purchase intention",
        },
        {
          title: "+24%",
          subtitle: "Interest Rate",
        },
        {
          title: "+28%",
          subtitle: "Brand Image",
        },
      ],
    },
    {
      left_title: "Travel & Tourism",
      left_image: "/assets/images/accor.png",
      right_title: "Frequent traveller interest targeting",
      right_subtitle: "Accor Hotels",
      right_point_1: "Interest",
      right_point_2: "Produced by AI Studio",
      analytics: [
        {
          title: "96%",
          subtitle: "Listen through rate",
        },
        {
          title: "+34%",
          subtitle: "Purchase intention",
        },
      ],
    },
    {
      left_title: "Travel & Tourism",
      left_image: "/assets/images/accor.png",
      right_title: "Frequent traveller interest targeting",
      right_subtitle: "P&O Ferries",
      right_point_1: "Consideration",
      right_point_2: "DCO",
      analytics: [
        {
          title: "+45%",
          subtitle: "Consideration",
        },
        {
          title: "96%",
          subtitle: "Listen through rate",
        },
      ],
    },
  ];

  const splideOptions3 = {
    type: 'slide' as const,
    drag: 'free' as const,
    gap: 20,
    width: 3000,
    autoWidth: true,
    autoScroll: false,    
  };

  return (
    <div className="w-full overflow-visible">
      <Splide
        options={splideOptions3}
        extensions={{ AutoScroll }}
      >
        {caseStudies.map((caseStudy, index) => (
          <SplideSlide key={index}>
            <CaseStudyCard {...caseStudy} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}