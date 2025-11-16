import Breadcrumb from "@/components/Breadcrumb";
import CaseStudies from "@/components/CaseStudies";
import CaseStudyLib from "@/components/CaseStudyLib";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PodcastCaseStudy from "@/components/PodcastCaseStudy";
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
  };
});

console.log({ caseStudiesArrary });

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
            <Breadcrumb
              pages={[
                { name: "About Us", link: "/about-us" },
                { name: "Case Study Library", link: "/case-study-library" },
              ]}
            />

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

      <PodcastCaseStudy title="Featured Case Studies" showButton={false} />

      <CaseStudyLib caseStudies={caseStudiesArrary} />
      <Footer />
    </div>
  );
}
