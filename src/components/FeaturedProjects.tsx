"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import GradientButton from "./GradientButton";
import { useRouter } from "next/navigation";

interface FeatureProjectCardProps {
  left_image: string;
  right_title: string;
  right_subtitle: string;
  right_description: string;
}

const FeatureProjectCard = (FeatureProject: FeatureProjectCardProps) => {
  const router = useRouter();
  return (
    <div className="rounded-2xl bg-[#FFFEFF] w-full md:w-[740px] h-auto md:h-[250px] border-1 border-[#E8E8E8] flex  flex-col md:flex-row items-start justify-start">
      <div className="flex flex-col items-start justify-start gap-[16px] border-[#E8E8E8] border-r-1 h-full rounded-2xl w-full lg:min-w-[300px]">
        <div className="flex flex-row items-center justify-center gap-[16px] w-full">
          <Image
            src={FeatureProject.left_image}
            alt="bel"
            className="w-full h-full"
            width={180}
            height={150}
          />
        </div>
      </div>
      <div className="flex flex-col p-[24px] items-start justify-between lg:justify-start gap-[9px] lg:min-w-[430px]">
        <div className="flex flex-col items-start justify-start gap-[19px] w-full">
          <div className="flex flex-col items-start justify-start gap-[16px] w-full">
            <div className="bg-[#ABEFC6] py-[4px] px-[10px] rounded-3xl p-8">
              <span className="text-[#091A3A] text-[14px] leading-[22px] font-normal">
                {FeatureProject.right_title}
              </span>
            </div>
            <div>
              <h2 className="text-[#262626] font-semibold text-[22px] leading-[30px] md:text-[26px] md:leading-[34px]">
                {FeatureProject.right_subtitle}
              </h2>
            </div>
            <div>
              <p className="text-[#262626] font-normal text-[16px] leading-[24px]">
                {FeatureProject.right_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FeaturedProjects() {
  const [splideWidth, setSplideWidth] = useState(100);

  useEffect(() => {
    const updateWidth = () => {
      const featureProjects = document.getElementById("featureProjects");
      if (featureProjects) {
        setSplideWidth(featureProjects.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const home = document.getElementById("home");
      if (home) {
        setSplideWidth(home.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const featureProjects = [
    {
      left_image: "/assets/images/think-with-hessa.jpg",
      right_title: "Brand Integration",
      right_subtitle: "Think with Hessa x DP World",
      right_description: "A podcast about embracing positive change, awakening to higher awareness, and choosing to live in the light through personal stories and reflections",
    },
    {
      left_image: "/assets/images/dodge-ram.jpg",
      right_title: "Branded Show",
      right_subtitle: "Dodge Ram",
      right_description: "Ramadan-themed podcast presented by RAM Middle East, exploring how we can strengthen our moral, intellectual, and human contributions during the Holy Month.",
    },
    {
      left_image: "/assets/images/property-finder.jpg",
      right_title: "Branded Show",
      right_subtitle: "Property Finder",
      right_description: "Powered by Property Finder, Home Finders is a real estate podcast that covers the latest trends, insights, and news in the UAE real estate market today",
    },
    {
      left_image: "/assets/images/couchonomics.jpg",
      right_title: "Branded Show",
      right_subtitle: "Couchonomics",
      right_description: "Economics and leadership podcast hosted by Arjun Vir Singh, produced for a regional audience.",
    },
    {
      left_image: "/assets/images/below-fold.jpg",
      right_title: "Branded Show",
      right_subtitle: "Below Fold",
      right_description: "Top ranking business news podcast hosted by Ibrahim Jabri, supported with full-service production.",
    },
    {
      left_image: "/assets/images/el-podcaster.jpg",
      right_title: "Show Production",
      right_subtitle: "El Podcasters",
      right_description: "El Podcasters features conversations with influential people who have made a real impact on society, alongside lighthearted, unexpected questions that keep the dialogue fun and engaging.",
    }
  ];

  const splideOptions3 = {
    type: "slide" as const,
    drag: "free" as const,
    gap: 20,
    width: splideWidth,
    autoWidth: true,
    autoScroll: false,
    pagination: true,
    arrows: false,
    
  };

  return (
    <div className="w-full overflow-visible relative" id="featureProjects">
      <Splide options={splideOptions3} extensions={{ AutoScroll }}>
        {featureProjects.map((FeatureProject, index) => (
          <SplideSlide key={index}>
            <FeatureProjectCard {...FeatureProject} />
          </SplideSlide>
        ))}
      </Splide>
      <div className="hidden md:block absolute w-[50px] md:w-[120px] h-full top-0 right-[0px] z-5 rounded-lg p-4 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
}
