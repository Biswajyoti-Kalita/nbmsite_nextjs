import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import HighlightsGroup from "@/components/HighlightsGroup";
import KnowledgeHubLib from "@/components/KnowledgeHubLib";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function KnowledgeHub() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#091A3A]"
        bgColorOnOpen="bg-[#091A3A]"
        linkColor="#FFFEFF"
      />
      <div className="bg-[#091A3A] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
        <section
          className="w-full p-4 pb-0 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start justify-start relative lg:max-w-[1440px]"
          id="home"
        >
          <div className="w-full flex flex-col items-start justify-start gap-4 h-auto lg:h-[580px] lg:px-0">
            <Breadcrumb pages={[{ name:  "Why Audio", link: "/why_audio" }, { name: "Knowledge hub central library", link: "/knowledge-hub" }]} />


            <div className="flex flex-col gap-[32px] items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <h1 className="font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] text-[#FFFEFF] tracking-[-0.02em]">
                  Podcast Advertising Knowledge Hub
                </h1>
              </div>
              <h2 className="font-[Switzer] font-medium lg:font-[500] text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0] text-[#FFFEFF]">
                Guides, reports, articles, and more to help you grow with
                digital audio advertising.
              </h2>
            </div>
          </div>

          <div className=" relative  lg:absolute right-0 top-0 bottom-0">
            <Image
              src="/assets/images/knowledge-hub_bg.png"
              alt="podcasters-image"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </section>
      </div>

      <section className="w-full bg-[#F8F9FA] flex flex-col items-center justify-center rounded-xl py-8 lg:py-[0px] px-4 md:px-[80px] gap-[10px]">
        <div className="w-full flex flex-col justify-start items-start max-w-[1280px] gap-[40px] py-[96px]">
          <h1 className="font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px] text-[#262626]">
            Highlighs
          </h1>
          <div className="w-full flex flex-row justify-between items-center gap-[20px]" id="highlights">
            <HighlightsGroup />
          </div>
        </div>
      </section>

      <KnowledgeHubLib />
      <Footer />
    </div>
  );
}
