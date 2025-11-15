import Breadcrumb from "@/components/Breadcrumb";
import CaseStudies from "@/components/CaseStudies";
import CaseStudyLib from "@/components/CaseStudyLib";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import caseStudies from "@/data/caseStudies.json";


interface CaseStudy {
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
type CaseStudies = Record<string, CaseStudy>;
const caseStudiesData = caseStudies as CaseStudies;
const caseStudiesArrary = Object.keys(caseStudiesData).map((key) => {
  return {
    ...caseStudiesData[key],
    id: key,
  }
});

console.log({caseStudiesArrary});

export default function CaseStudyLibrary() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#091A3A]"
        bgColorOnOpen="bg-[#091A3A]"
        linkColor="#FFFEFF"
      />
      <div className="bg-[#091A3A]  flex flex-col items-center justify-center w-full">
        <section className="w-full mt-[30px] p-[20px] md:p-[80px] gap-[80px] md:gap-[80px]">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <Breadcrumb pages={[{ name: "About Us", link: "/about-us" }, { name: "Case Study Library", link: "/case-study-library" }]} />

            <div className="flex flex-col gap-[16px]">
              <h1 className="font-[Switzer] font-semibold text-[48px] lg:text-[60px] leading-[54px] lg:leading-[72px] tracking-[-0.02em] text-[#FFFEFF]">
                Audio advertising <br></br> performance
              </h1>
              <h1 className="font-[Switzer] font-medium text-[20px] leading-[28px] tracking-[0em] text-[#FFFEFF]">
                See how brands across industries are using podcast and audio{" "}
                <br></br> advertising to drive real performance, from awareness
                to action.
              </h1>
            </div>
          </div>
        </section>
      </div>

      <section
            className="w-full bg-[#F8F9FA] flex flex-col items-center justify-center rounded-xl py-8 md:py-[80px] px-4 md:px-[96px] gap-8 md:gap-[64px] max-w-[1280px]"
          >
            <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-8 justify-between items-center gap-4 md:gap-[24px]">
              <div className="lg:col-span-6">
                <h1 className="text-[#262626] font-semibold text-[24px] leading-[32px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px]">
                Featured Case Studies
                </h1>
              </div>
            </div>
            <div
              className="max-w-[14400px] flex flex-col lg:flex-row justify-start w-full items-center gap-4 md:gap-[20px]"
            >
              <CaseStudies />
            </div>
          </section>

      <CaseStudyLib caseStudies={caseStudiesArrary} />
      <Footer />
    </div>
  );
}
