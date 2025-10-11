import Image from "next/image";
import GradientButton from "./GradientButton";

interface MarketingCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonText2: string;
  image: string;
  expanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MarketingCard({ title, description, buttonText, buttonText2, image, expanded, onMouseEnter, onMouseLeave }: MarketingCardProps) {
  return <div className={`bg-white ${expanded ? 'expanded' : 'collapsed'} marketing-card p-6 md:p-[40px] rounded-[16px] flex flex-row md:flex-col w-full md:w-auto lg:max-w-[630px] h-[116px] md:h-[300px] items-start justify-between relative`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
  <div className="absolute top-0 left-0 w-full h-full rounded-[16px] master-card-bg-container">
    <Image
      src={image}
      alt="illustration"
      className="w-full h-full object-cover rounded-[16px]"
      width={525}
      height={300}
    />
    <div
      className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-50 rounded-[16px]"
      style={{ backdropFilter: "blur(0px)" }}
    ></div>
  </div>

  <div className="z-10 flex flex-col items-start justify-start gap-2 md:gap-[16px] master-card-content">
    <h5 className="font-semibold text-[28px] leading-[34px] md:text-2xl lg:text-[32px] leading-tight md:leading-[40px] -tracking-[2%] z-10">
      {title}
    </h5>
    <h6 className="z-10 font-normal text-sm md:text-base lg:text-[20px] leading-tight md:leading-[28px] -tracking-[0%] text-[#FFFFFF]">
      {description}
    </h6>
  </div>
  <div className="z-10 flex flex-col sm:flex-row gap-2 md:gap-[12px]">

    <GradientButton type="secondary" text={ expanded ? buttonText : ''} rightIcon={
              <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13.8897L13 1.88971M13 1.88971H5M13 1.88971V9.88971"
                stroke="url(#paint0_linear_1796_2431)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1796_2431"
                  x1="1"
                  y1="7.88971"
                  x2="13"
                  y2="7.88971"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F11F68" />
                  <stop offset="1" stopColor="#162ABF" />
                </linearGradient>
              </defs>
            </svg>
    } />

    {expanded && (
    <GradientButton type="secondary" text={expanded ? buttonText2 : ''} rightIcon={
              <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13.8897L13 1.88971M13 1.88971H5M13 1.88971V9.88971"
                stroke="url(#paint0_linear_1796_2431)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1796_2431"
                  x1="1"
                  y1="7.88971"
                  x2="13"
                  y2="7.88971"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F11F68" />
                  <stop offset="1" stopColor="#162ABF" />
                </linearGradient>
              </defs>
            </svg>
    } />
)}



  </div>
</div>;
}