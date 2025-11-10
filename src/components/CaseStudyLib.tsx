"use client";

// import Link from "next/link";
import { useEffect, useState } from "react";
import GradientButton from "./GradientButton";
import Image from "next/image";

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  banner_image: string;
  banner_title: string;
  banner_subtitle: string;
  summary: {
    client: string;
    industry: string;
    campaign_types: string;
    audio_format: string;
    audience_profile: string;
  };
  objective: string;
  execution: {
    title: string;
    points: string[];
    bottom_text?: string;
  };
  results: {
    title: string;
    subtitle: string;
  }[];
  audio: {
    image: string;
    title: string;
    points: string[];
    audio_file: string;
  };
  testimonials?: {
    quote: string;
    stars: number;
    name: string;
    designation: string;
    image: string;
  }[];
}

export default function CaseStudyLib({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  // const [originalData, setoriginalData] = useState(caseStudies);
  const originalData = caseStudies;
  const [filteredData, setFilteredData] = useState(caseStudies);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("View All");

  const filters = [
    "All",
    ...originalData.map((study) => study.summary.campaign_types).toString().split(',').map((campaignType) => campaignType.trim())
  ].filter((filter) => filter !== "").filter((filter, index, self) => self.indexOf(filter) === index);

  const industries = [
    "View All",
    ...originalData.map((study) => study.summary.industry.toString().split(',').map((industry) => industry.trim())),
  ].flat().filter((filter) => filter !== "").filter((filter, index, self) => self.indexOf(filter) === index);

  console.log({ filteredData });


  useEffect(() => {
    console.log({ selectedIndustry, selectedFilter });
    if (selectedIndustry === "View All" && selectedFilter === "All") {
      setFilteredData(originalData);
    } else if (selectedIndustry === "View All") {
      setFilteredData(originalData.filter((study) => study.summary.campaign_types.toString().split(',').map((campaignType) => campaignType.trim()).includes(selectedFilter)));
    } else if (selectedFilter === "All") {
      setFilteredData(originalData.filter((study) => study.summary.industry.toString().split(',').map((industry) => industry.trim()).includes(selectedIndustry)));
    } else {
      setFilteredData(originalData.filter((study) => study.summary.industry.toString().split(',').map((industry) => industry.trim()).includes(selectedIndustry) && study.summary.campaign_types.toString().split(',').map((campaignType) => campaignType.trim()).includes(selectedFilter)));
    }
  }, [selectedIndustry, selectedFilter, originalData]);


  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-12 bg-[#FFFEFF] text-[#262626]">
      {/* Left Sidebar */}
      <aside className="lg:w-1/4 space-y-4">
        <h3 className="font-[Switzer] font-semibold text-[14px] tracking-[-0.02em] text-[#F11F68]">
          Industry
        </h3>
        <ul className="space-y-2">
          {industries.map((industry, index) => (
            <li
              key={index}
              className={`${selectedIndustry === industry ? "bg-[#F8F9FA]" : ""} text-[16px] cursor-pointer hover:text-[#262626] hover:bg-[#F8F9FA] transition-colors px-[8px] py-[12px]`}
              onClick={() => setSelectedIndustry(industry)}
            >
              {industry}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <section className="flex-1 space-y-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 text-[14px] rounded-full border ${selectedFilter === filter ? "bg-[#F5F3FF] text-[#7A5AF8] border-[#7A5AF8]" : "border-[#E0E0E0] text-[#262626]"}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {filteredData?.map((study) => (
            <div
              key={study.id}
              className="rounded-[16px] border border-[#E8E8E8] bg-[#FFFEFF] flex flex-col justify-between shadow-sm hover:shadow-md transition-all "
            >
              <div className="relative flex flex-col items-center justify-center gap-[10px] border border-[#E8E8E8] rounded-[8px] h-[305px]">
                <span className=" absolute top-[24px] left-[24px] text-[14px] leading-[22px] font-medium text-[#344054] border border-[#344054] rounded-[24px] px-[8px] py-[4px]">
                  {study.category}
                </span>
                <Image
                  src={study.audio.image}
                  alt={study.name}
                  className="w-full max-w-[180px] h-full max-h-[150px] object-contain mb-6"
                  width={180}
                  height={150}
                />
              </div>

              <div className="flex flex-col items-start justify-start gap-[24px] p-[24px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <h3 className="font-bold text-[26px] leading-[34px] text-[#262626]">
                    {study.name}
                  </h3>
                  <div className="flex flex-row gap-[11px] items-center">
                    {study.audio.points.map((point, index) => (
                      <div
                        className="flex flex-row gap-[11px] items-center"
                        key={`${study.id}-${index}`}
                      >
                        <span className="font-normal text-[14px] leading-[22px] tracking-[0em] text-[#344054]">
                          {point}
                        </span>
                        {index < study.audio.points.length - 1 && (
                          <span>
                            <svg
                              width="4"
                              height="4"
                              viewBox="0 0 4 4"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="2" cy="2" r="2" fill="#344054" />
                            </svg>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <GradientButton
                  text="View Case Study"
                  className="w-[191px]"
                  type="secondary"
                  rightIcon={
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 13L13 1M13 1H5M13 1V9"
                        stroke="url(#paint0_linear_4392_18464)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4392_18464"
                          x1="1"
                          y1="7"
                          x2="13"
                          y2="7"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F11F68" />
                          <stop offset="1" stop-color="#162ABF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                  // href={`/case-studies/${study.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
