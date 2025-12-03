import AboutUsSection from "@/components/AboutUsSection";
import BrandsScroller from "@/components/BrandsScroller";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import MonetizePodcastSection from "@/components/MonetizePodcastSection";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import PopularChannels from "@/components/PopularChannels";
import PublisherRevenuSection from "@/components/PublisherRevenuSection";
import TestimonialGroup from "@/components/TestimonialGroup";

export default function Publishers() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#6C1DA7]"
        bgColorOnOpen="bg-[#6C1DA7]"
        linkColor="#FFFEFF"
      />
      <div className="bg-[#6C1DA7] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
        {/* <PublisherBanner /> */}
        <PageBanner
          breadcrumb={[{ name: "For Publishers", link: "/publishers" }]}
          headline="For Publishers, networks and production houses"
          title="Monetize Your Catalogue with Global Brand Demand"
          description="Connect your shows to premium advertisers across 90+ markets and hundreds of active campaigns."
          image="/assets/images/publisher-right-bg.png"
          buttons={[ {text: "Request a Call Back", type: "secondary", showCallMeBackModal: true}, { text: "Download Publisher Pack", type: "tertiary", link: "/assets/files/Publisher Media Kit.pdf" }]}
        />
      </div>
      <div className="w-full bg-white flex flex-column flex-wrap md:flex-row gap-16 pt-[84px] lg:pt-24 px-[16px] lg:pr-20 pb-12 lg:pl-20">
        <section className="w-full flex flex-col gap-[46px] lg:gap-[64px]">
          <div className="w-[100%] flex items-center justify-center flex-wrap md:flex-nowrap gap-[20px]">
            <h1 className="w-[100%] gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
              Two powerful ways to grow your revenue
            </h1>
            <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
              Two ways your shows can earn: be visible to buyers in our tools,
              and get pitched for high-value brand campaigns.
            </span>
          </div>
          <PublisherRevenuSection />

          <div className="w-full flex flex-col items-center justify-center gap-[40px]">
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-center gap-[40px]">
              <div className="w-full max-w-[589px] flex flex-col gap-[32px] lg:gap-[40px]">
                <h1 className="w-[100%] capitalize gradient-text font-semibold lg:font-bold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] tracking-[-0.02em]">
                  You’re in good company
                </h1>
                <h6 className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                  From indie creators to global studios, these publishers
                  already trust Next Audio to deliver results. If you run high-quality
                  shows with engaged audiences, we’d love to work with you.
                </h6>
                <GradientButton
                  type="primary"
                  text="Download Publisher Kit"
                  className="h-[48px] max-w-[200px]"
                  textClassName="text-[16px] leading-[24px]"
                />
              </div>
              <PopularChannels />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-[#FFF9FE] flex flex-col flex-wrap md:flex-row gap-[46px] lg:gap-16 py-[84px] lg:py-[96px] px-[16px] lg:px-[80px]">
        <AboutUsSection />

      </div>
      <BrandsScroller />
      <div className="w-full bg-[#FFF9FE] flex flex-col flex-wrap md:flex-row gap-16 py-[84px] lg:py-[96px] px-[16px] lg:px-[80px]">
        <MonetizePodcastSection />

      </div>
      <section className="w-full flex flex-row items-center justify-center px-[16px] py-[84px] lg:py-[96px] lg:px-[80px]">
        <div
          className="w-full flex flex-col items-center justify-center px-[16px] py-[32px] lg:py-[48px] gap-[64px] md:max-h-[506px] lg:max-h-[368px] rounded-[16px] relative bg-no-repeat bg-cover lg:bg-contain bg-center"
          style={{
            backgroundImage: "url(/assets/images/diverse-group.jpg)",
          }}
        >
          <div className="absolute z-10 inset-0 bg-[#091A3A] opacity-80 rounded-[16px]"></div>
          <div className="w-full z-20 flex flex-col items-start justify-center gap-[40px] p-0 lg:p-[32px] lg:p-[64px] rounded-[16px]">
            <div>
              <h1 className="text-[#D6E4FF] capitalize text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                Supporting the Shows That
              </h1>
              <h1 className="text-[#D6E4FF] capitalize text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                Deserve to Grow
              </h1>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-start lg:justify-end gap-[64px]">
              <div>
                <h1 className="text-[#D6E4FF]  capitalize text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                  …with expertise, tools, and
                </h1>
                <h1 className="text-[#D6E4FF] capitalize text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] font-semibold">
                  access to global advertisers.
                </h1>
              </div>
              <div className="flex flex-row h-full items-start lg:items-end justify-start lg:justify-end">
                <GradientButton
                  text="Meet Next Audio"
                  type="secondary"
                  className="h-[44px] w-[148px]"
                  textClassName="text-[16px] leading-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <TestimonialGroup />

      <FAQSection
      
          faqs= {[
            {
              title: "Who can join the Next network?",
              description:
                "Any podcast publisher, network, or production house with high-quality shows and active listenership. We support both regional and global content strategies.",
            },
            {
              title:
                "How is my inventory monetised?",
              description:
                "Next Audio is a platform that allows you to create and manage your podcast advertising campaigns.",
            },
            {
              title: "What types of brands do you work with?",
              description:
                "We work with global brands, major media agencies, and regional advertisers across industries, including finance, FMCG, travel, tech, health, and more.",
            },
            {
              title:
                "Is this a non-exclusive partnership?",
              description:
                "Yes. We operate under a non-exclusive model. You retain full control and can continue monetizing through other platforms or partners.",
            },
            {
              title:
                "How do I get started?",
              description:
                "Just get in touch with our team. We’ll review your shows and guide you through onboarding, no platform migration or setup fees required.",
            },
          ]}
      />

      <Footer />
    </div>
  );
}
