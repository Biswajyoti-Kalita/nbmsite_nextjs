"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

interface CaseStudyTestimonialInterface {
  quote: string;
  stars: number;
  name: string;
  designation: string;
}

const CaseStudyTestimonial = (props: CaseStudyTestimonialInterface) => {
  return (
    <div className="w-full  flex flex-col items-center justify-center px-[32px] gap-[32px]">
      <div className="w-full max-w-[1024px] min-h-[400px] flex flex-col items-center justify-between gap-[32px]">
        <div>
          <p className="font-semibold text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px] tracking-[-0.02em] lg:tracking-[0em] text-[#FFFFFF] text-center min-h-[200px]">
            Kiri’s Maida podcast was created with the Kiri team to extend the
            brand’s equity, and to be the pillar of kindness and inspiration for
            progressive moms. In parallel, the programmatic audio ads maximized
            the podcast’s awareness. The campaign drove efficient reach and for
            a first-time campaign, it truly set a remarkable benchmark.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-[16px]">
          <div className="relative w-[56px] h-[56px] overflow-hidden border-[1px] border-[#F11F68] bg-[#FFF9FE] rounded-full font-bold flex items-center justify-center text-[25px] leading-[36px] tracking-[-0.01em] text-[#344054]">
            <span>
              {"S K"
                .split(" ")
                .filter((word) => isNaN(Number(word)))
                .filter((w, i) => i < 2)
                .map((word) => word[0])
                .join("")}
            </span>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[4px]">
            <h1 className="font-semibold text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#FFFFFF]">
              Sarah Kanaan
            </h1>
            <h1 className="font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] tracking-[0em] text-[#E8E8E8]">
              Lead of Zenith
            </h1>
          </div>
          <h1 className="flex flex-row items-center justify-center gap-[4px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4378_2769)">
                  <path
                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                    fill="#FEC84B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4378_2769">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default function CaseStudyTestimonialGroup({ testimonials }: { testimonials: CaseStudyTestimonialInterface[] }) {
  const [splideWidth, setSplideWidth] = useState(100);

  useEffect(() => {
    const updateWidth = () => {
      const testimonials = document.getElementById("case-study-testimonial");
      if (testimonials) {
        setSplideWidth(testimonials.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const splideOptions = {
    type: "slide" as const,
    drag: "free" as const,
    gap: 32,
    width: splideWidth,
    pagination: true,
    arrows: false,
    perPage: 1
  };

  return (
    <div
      className="max-w-[1440px] w-full rounded-l-[16px]"
      id="testimonials"
      data-aos="fade-up"
    >
      <Splide options={splideOptions}>
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <CaseStudyTestimonial
              quote={testimonial.quote}
              stars={testimonial.stars}
              name={testimonial.name}
              designation={testimonial.designation}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
