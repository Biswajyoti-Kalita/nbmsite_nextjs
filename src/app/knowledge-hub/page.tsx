import Footer from "@/components/Footer";
import HighlightsGroup from "@/components/HighlightsGroup";
import KnowledgeHubLib from "@/components/KnowledgeHubLib";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";


export default function KnowledgeHub() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#091A3A]"
        bgColorOnOpen="bg-[#091A3A]"
        linkColor="#FFFEFF"
      />
      <div className="bg-[#091A3A] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
      <PageBanner
          breadcrumb={[{ name:  "Why Audio", link: "/why_audio" }, { name: "Knowledge hub central library", link: "/knowledge-hub" }]}
          headline=""
          title="Podcast Advertising Knowledge Hub"
          description="Guides, reports, articles, and more to help you grow with
                digital audio advertising."
          image="/assets/images/knowledge_hub.jpg"
          buttons={[]}
        />
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
