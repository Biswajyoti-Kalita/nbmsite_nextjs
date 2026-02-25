import Breadcrumb from "@/components/Breadcrumb";
import CaseStudies from "@/components/CaseStudies";
import CaseStudyTestimonialGroup from "@/components/CaseStudyTestimonialGoup";
import DiscoverAudioSection from "@/components/DiscoverAudioSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import PodcastCaseStudy from "@/components/PodcastCaseStudy";
import caseStudies from "@/data/caseStudies.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AudioPlanObjective from "@/components/AudioPlanObjective";

export default async function AudioPlanPage() {

  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#091A3A]"
        bgColorOnOpen="bg-[#091A3A]"
        linkColor="#FFFEFF"
      />

      <div
        className="bg-[#091A3A] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0 relative"
        style={{
          backgroundImage: `url('/assets/images/audio-plan.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute z-10 inset-0 bg-[#091A3A] opacity-[0.75]"></div>
        <section
          className="w-full p-4 pb-[60px] mt-[64px] md:mt-[64px] md:mt-0 lg:p-[80px] flex flex-col lg:flex-row gap-[24px] lg:gap-[80px] items-start justify-start relative lg:max-w-[1440px] z-10"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 max-h-[530px] px-0">
          <Breadcrumb 
              pages={[
                { name: "Advertisers", link: "/advertisers" }, 
                { name: "Audio Plan", link: "/audio-plan" }
              ]}
          />          

            <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-[8px] lg:gap-[16px]">
              <h1 className="font-medium uppercase text-[14px] lg:text-[16px] leading-[22px] lg:leading-[32px] text-[#FFFEFF] py-[4px]">
                
              </h1>
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-bold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                Where Do You Need to Drive Impact?
                </h1>
                <h2 className="font-medium text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] text-[#FFFEFF] tracking-[0em]">
                Audio doesn&apos;t do one thing. It depends on the objective.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px] p-[20px] md:p-[80px]">
            
            <AudioPlanObjective />

        </div>
      </div>
      <Footer />
    </div>
  );
}
