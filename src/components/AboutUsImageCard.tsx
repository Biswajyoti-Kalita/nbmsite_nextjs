"use client";
import Image from "next/image";
import { useState } from "react";

interface AboutUsImageCardProps {
  title: string;
  description: string;
  image: string;
}

export default function AboutUsImageCard({ title, description, image }: AboutUsImageCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    className="relative flex flex-col items-start justify-between gap-4 md:gap-0 p-4 md:p-6 md:bg-none md:bg-[#FFEDFB] rounded-2xl h-[150px] md:h-[200px] w-full max-w-[300px] bg-center bg-cover"
  >
    <div className="md:hidden absolute inset-0 bg-black/50 z-20"></div>
    {
        hover && <div className="bg-black/10 absolute top-0 left-0 w-full h-full z-20"></div>
    }
    {
        hover && <Image src={image} alt={title} width={300} height={200} className="w-full h-full object-cover rounded-2xl absolute top-0 left-0 z-10" />
    }
    <div
      className="relative z-10 flex flex-col items-start justify-between gap-4 md:gap-0 h-full"
    >
      <h1
        className="text-[32px] leading-[40px]  font-medium md:text-3xl lg:text-[60px] md:leading-[68px]  transition-all duration-300"
      >
        {
            hover ? <span className="text-[#FFFEFF]">{title}</span> : <span className="md-gradient-text">{title}</span>
        }
      </h1>
      <h6
        className="font-medium text-base md:text-lg lg:text-[20px] leading-tight md:leading-[28px] text-[#FFFEFF] md:text-[#262626] hover:text-[#262626] transition-all duration-300"
      >
        {
            hover ? <span className="text-[#FFFEFF]">{description}</span> : <span className="text-[#262626]">{description}</span>
        }
      </h6>
    </div>
  </div>
 );
}