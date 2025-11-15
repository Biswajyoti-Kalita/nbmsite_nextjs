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
            <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[12px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 14.1664H13.3333M9.18141 2.30312L3.52949 6.69906C3.15168 6.99291 2.96278 7.13983 2.82669 7.32383C2.70614 7.48682 2.61633 7.67044 2.56169 7.86566C2.5 8.08605 2.5 8.32537 2.5 8.804V14.8331C2.5 15.7665 2.5 16.2332 2.68166 16.5898C2.84144 16.9034 3.09641 17.1583 3.41002 17.3181C3.76654 17.4998 4.23325 17.4998 5.16667 17.4998H14.8333C15.7668 17.4998 16.2335 17.4998 16.59 17.3181C16.9036 17.1583 17.1586 16.9034 17.3183 16.5898C17.5 16.2332 17.5 15.7665 17.5 14.8331V8.804C17.5 8.32537 17.5 8.08605 17.4383 7.86566C17.3837 7.67044 17.2939 7.48682 17.1733 7.32383C17.0372 7.13983 16.8483 6.99291 16.4705 6.69906L10.8186 2.30312C10.5258 2.07541 10.3794 1.96155 10.2178 1.91779C10.0752 1.87917 9.92484 1.87917 9.78221 1.91779C9.62057 1.96155 9.47418 2.07541 9.18141 2.30312Z"
                  stroke="#D2D2D2"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#E8E8E8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#FFFEFF] font-medium text-[14px] leading-[22px]">
                Why Audio
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#E8E8E8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#FFFEFF] font-medium text-[14px] leading-[22px]">
                Knowledge hub central library
              </span>
            </div>

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
