import ActionSidebar from "@/components/ActionSidebar";
import BrandsScroller from "@/components/BrandsScroller";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GradientButton from "@/components/GradientButton";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import PopularChannels from "@/components/PopularChannels";
import Image from "next/image";

export default function Podcaster() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center bg-white">
      <Navbar
        bgColor="bg-[#511DB5]"
        bgColorOnOpen="bg-[#511DB5]"
        linkColor="#FFFEFF"
      />

      <div className="bg-[#511DB5] flex flex-col items-center justify-center w-full pt-[50px] lg:pt-0">
        <PageBanner
        
        breadcrumb={[{ name: "For Podcasters", link: "/podcasters" }]}
        headline="For Podcasters & Creators"
        title="Monetize Your Podcast Without Working Harder"
        description="Where podcasts of any language meet premium advertisers from
        around the world."
        image="/assets/images/podcaster.jpg"
        buttons={[ {text: "Request a Call Back", type: "secondary", showCallMeBackModal: true}, { text: "Download Podcaster Pack", type: "tertiary", link: "/assets/files/Podcaster Media Kit.pdf" }]}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px]">
          <BrandsScroller />
          <section
            className="w-full p-4 mt-[64px] md:mt-[64px] md:mt-0 md:p-[80px] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center justify-between relative lg:max-w-[1440px]"
            id="home"
          >
            <div className="w-full">
              <Image
                src="/assets/images/podcast-recording-session.jpg"
                alt="podcast-recording-session"
                className="w-full h-full object-cover rounded-[9px] lg:rounded-[16px]"
                width={500}
                height={500}
                priority
              />
            </div>

            <div className="w-full flex flex-col items-start justify-center gap-[24px]">
              <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] gradient-text tracking-[-0.02em]">
                How Podcasters Earn with Next Audio
              </h1>
              <div className="flex flex-col items-start justify-center gap-[12px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <Image src="/assets/images/checkicon.png" alt="check-circle" width={28} height={28} className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]" />
                  <h1>
                    <span className="font-semibold text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Dynamically inserted ads:
                    </span>
                    <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      {" "}
                      Get listed in{" "}
                      <a
                        target="_blank"
                        href="https://admanager.fm"
                        className="text-[#344054] underline"
                      >
                        AdManager.FM
                      </a>
                      , our self-serve platform used by agencies and brands
                      worldwide.
                    </span>
                  </h1>
                </div>

                <div className="flex flex-row items-start justify-start gap-[12px]">
                <Image src="/assets/images/checkicon.png" alt="check-circle" width={28} height={28} className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]" />

                  <h1>
                    <span className="font-semibold text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Host-read ads & sponsorships:{" "}
                    </span>
                    <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                      Be eligible for premium brand campaigns curated and
                      managed by our team.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[84px] lg:py-[48px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFEFF]">
            <div className="w-full flex flex-col lg:flex-row  items-center justify-between gap-[46px] lg:gap-[64px] rounded-[16px]">
              <div className="w-full flex flex-col items-start justify-center gap-[40px] max-w-[590px]">
                <div className="flex flex-col items-start justify-center gap-[24px]">
                  <h1 className="font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px] gradient-text tracking-[-0.02em]">
                    Is Your Podcast a Good Fit?
                  </h1>
                  <div className="flex flex-col items-start justify-center gap-[32px]">
                    <div className="flex flex-col items-start justify-center gap-[16px]">
                      <p className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
                        To ensure quality for advertisers, we currently accept
                        shows that meet at least one of the following:
                      </p>
                      <div className="flex flex-col items-start justify-center gap-[12px]">
                        <h1 className="flex flex-row items-center justify-start gap-[12px]">
                          <Image src="/assets/images/checkicon.png" alt="check-circle" width={28} height={28} />

                          <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                            Have been consistently publishing for 6 months or
                            more
                          </span>
                        </h1>

                        <h1 className="flex flex-row items-center justify-start gap-[12px]">
                        <Image src="/assets/images/checkicon.png" alt="check-circle" width={28} height={28} />
                        <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                            Reach 1,000+ monthly listeners
                          </span>
                        </h1>

                        <h1 className="flex flex-row items-center justify-start gap-[12px]">
                          <Image src="/assets/images/checkicon.png" alt="check-circle" width={28} height={28} className="w-[28px] h-[28px]" />
                          <span className="font-normal text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em]">
                            Cover a highly niche topic or audience (e.g.
                            medical, aerospace, regional, etc.)
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#344054]">
                        We welcome podcasts in any language. Next Audio is a global
                        network with demand from advertisers around the world.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block w-full mb-2">
                  <GradientButton
                    text="Info Sheet"
                    type="secondary"
                    className=""
                    textClassName="text-[16px] leading-[24px]"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="w-full rounded-[9px] lg:rounded-[16px] overflow-hidden">
                  <Image
                    src="/assets/images/podcaster3.png"
                    alt="podcaster-package"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[48px] lg:pt-[96px] pb-[48px] px-[16px] lg:px-[80px] flex flex-col items-center justify-center gap-[64px] bg-[#FFFFFF]">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center rounded-[16px] gap-[20px] p-[0px] bg-[#FFFFFF] max-w-[1280px]">
              <div className="w-full flex flex-col items-start justify-center gap-[40px] bg-[#F11F68] rounded-[16px] p-[32px] lg:p-[64px] w-full">
                <div>
                  <h1 className="font-semibold text-[26px] lg:text-[32px] leading-[34px] lg:leading-[40px] tracking-[-0.02em] text-[#FFFEFF]">
                    Join the company trusted by thousands of creators to connect
                    with top global advertisers.
                  </h1>
                </div>
                <div className="flex flex-col items-start justify-center gap-[16px] w-full">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-[16px] w-full">
                    <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] min-w-[238px] w-full">
                      <h1 className="font-semibold text-[32px] leading-[40px] tracking-[0.0em] gradient-text">
                        300+
                      </h1>
                      <h2 className="font-semibold text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0.0em] text-[#262626]">
                        Brands <br />& agencies
                      </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] min-w-[238px] w-full">
                      <h1 className="font-semibold text-[32px] leading-[40px] tracking-[0.0em] gradient-text">
                        850+
                      </h1>
                      <h2 className="font-semibold text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px] tracking-[0.0em] text-[#262626]">
                        Campaigns
                        <br /> delivered
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[12px] bg-[#FFFEFF] rounded-[16px] p-[24px] w-full">
                    <h1 className="font-semibold text-[32px] leading-[40px] tracking-[0.0em] gradient-text">
                      90+
                    </h1>
                    <h2 className="font-semibold text-[20px] leading-[28px] tracking-[0.0em] text-[#262626]">
                      Global markets
                    </h2>
                  </div>
                </div>
              </div>
              <PopularChannels />
            </div>
          </section>


          <FAQSection          
            faqs={
              [
                {
                  title: "Is this only for host-read ads?",
                  description:
                    "No, we run a range of campaigns including programmatic ads and premium brand partnerships. You’ll be considered for both, depending on fit.",
                },
                {
                  title:
                    "Is this exclusive?",
                  description:
                    "Not at all. You keep full ownership of your podcast and can continue working with other partners or monetisation tools.",
                },
                {
                  title: "What kind of advertisers will I work with?",
                  description:"We only work with vetted, brand-safe advertisers, including global names and trusted local companies. You always have the final say.",
                },
                {
                  title: "How do I get started?",
                  description: "Simple, just contact us and share your show. Our team will review your podcast and guide you through next steps.",
                },
                {
                  title: "What makes a podcast eligible?",
                  description: "We generally look for shows that have been active for 6+ months with a regular audience of 1,000+ listeners per episode — but we also consider niche formats and strong engagement.",
                },
                {
                  title: "How do I get paid?",
                  description: "Payment depends on the type of campaign, but you’ll receive earnings directly based on bookings and ad delivery.",
                }
              ]}
          />

          <Insights />

        </div>
      </div>
      <Footer />
      <ActionSidebar />
    </div>
  );
}
