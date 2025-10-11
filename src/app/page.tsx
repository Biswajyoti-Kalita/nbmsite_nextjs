import Navbar from "@/components/Navbar";
import MarketingCardGroup from "@/components/MarketingCardGroup";
import BrandsScroller from "@/components/BrandsScroller";
import CaseStudies from "@/components/CaseStudies";
import KnowledgeHubCard from "@/components/KnowledgeHubCard";
import KnowledgeHubCard2 from "@/components/KnowledgeHubCard2";
import Testimonial from "@/components/Testimonial";
import TestimonialGroup from "@/components/TestimonialGroup";
import Footer from "@/components/Footer";
import Image from "next/image";
import ActionSidebar from "@/components/ActionSidebar";

export default function Home() {
  return (
    <div className="min-h-screen h-full  w-full flex flex-col items-center justify-center bg-white">
    <div className="bg-white lg:max-w-[1440px]">
      <Navbar bgColor="bg-white" bgColorOnOpen="bg-[#F11F68]" isPrimary={true} />

      <section
        className="w-full bg-white rounded-xl p-4 mt-[64px] md:mt-[120px] md:mt-0 md:p-[80px] relative"
        id="home"
        data-aos="fade-up"
      >

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <h1 className="font-semibold text-[48px] md:text-5xl lg:text-[60px] leading-[54px] md:leading-[72px] -tracking-[2%] text-[#262626]">
              The Audio Advertising company
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-center justify-end">
            <h6 className="text-[18px] leading-[28px] md:text-xl font-normal text-[#344054]">
              All your podcast advertising in one powerful place.
            </h6>
          </div>
        </div>
      {/* Wave Background Section */}
      <div 
        className="w-full bg-no-repeat absolute left-0 right-0 opacity-50"
      >
        <img src="/assets/images/waves.png" alt="hero-image" className="w-full bg-bottom bg-no-repeat h-[230px]" />
      </div>

        <div className="mt-8 md:mt-[64px] z-10" data-aos="fade-up">
          <MarketingCardGroup />
        </div>
      </section>

      <BrandsScroller />

      <section
        className="w-full bg-[#FFF9FE] flex flex-col items-center justify-center rounded-xl py-8 md:py-[80px] px-4 md:px-[96px] gap-8 md:gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center lg:gap-0"
        >
          <div
            className="flex flex-col items-start justify-start gap-[16px] md:gap-[32px] pb-4 md:pb-[30px]"
          >
            <span
              className="border-color-3 border border-1 p-2 px-4 rounded-3xl color-3 font-medium text-sm md:text-base text-[#F11F68]"
            >
              About Us
            </span>
            <h1
              className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px]"
            >
              Inside Next: The Team Behind Global Audio Campaigns
            </h1>
          </div>
          <div
            className="flex flex-col items-start justify-end gap-4 md:gap-[32px]"
          >
            <p
              className="text-[#344054] text-base md:text-lg lg:text-[20px] leading-tight md:leading-[28px] font-normal"
            >
              Discover how we support advertisers, podcasters, and publishers
              with global reach and trusted audio advertising solutions.
            </p>
            <button
              className="gradient-bg-button px-3 md:px-4 py-2 md:py-2.5 bg-white rounded-[4px] flex items-center justify-center gap-[6px]"
            >
              <span
                className="text-[#FFF] text-sm md:text-base lg:text-[16px] leading-tight md:leading-[24px] -tracking-[0%] font-semibold"
                >Learn About Next</span
              >
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13.959L13 1.95898M13 1.95898H5M13 1.95898V9.95898"
                  stroke="#FFFEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="max-w-[1440px] w-full grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-4 md:gap-[24px]"
          data-aos="fade-up"
        >
          <div
            className="relative flex flex-col items-start justify-between gap-4 md:gap-0 p-4 md:p-6 md:bg-none md:bg-[#FFEDFB] rounded-2xl h-[150px] md:h-[200px] w-full max-w-[300px] bg-[url('/assets/images/about-us-image-1.jpg')] bg-center bg-cover"
          >
            <div className="md:hidden absolute inset-0 bg-black/50"></div>
            <div
              className="relative z-10 flex flex-col items-start justify-between gap-4 md:gap-0 h-full"
            >
              <h1
                className="text-[32px] leading-[40px] text-[#FFFEFF] md-gradient-text font-medium md:text-3xl lg:text-[60px] md:leading-[68px]"
              >
                300+
              </h1>
              <h6
                className="font-medium text-base md:text-lg lg:text-[20px] leading-tight md:leading-[28px] text-[#FFFEFF] md:text-[#262626]"
              >
                Active brands & agencies
              </h6>
            </div>
          </div>

          <div
            className="relative flex flex-col items-start justify-between gap-4 md:gap-0 p-4 md:p-6 bg-[#FFEDFB] rounded-2xl h-[150px] md:h-[200px] w-full max-w-[300px] bg-[url('/assets/images/about-us-image-1.jpg')] bg-center bg-cover md:bg-none"
          >
            <div className="md:hidden absolute inset-0 bg-black/50"></div>
            <div
              className="relative z-10 flex flex-col items-start justify-between gap-4 md:gap-0 h-full"
            >
              <h1
                className="text-[32px] leading-[40px] text-[#FFFEFF] md-gradient-text font-medium md:text-3xl lg:text-[60px] md:leading-[68px]"
              >
                90+
              </h1>
              <h6
                className="font-medium text-base md:text-lg lg:text-[20px] leading-tight md:leading-[28px] text-[#FFFEFF] md:text-[#262626]"
              >
                Global markets
              </h6>
            </div>
          </div>

          <div
            className="relative flex flex-col items-start justify-between gap-4 md:gap-0 p-4 md:p-6 bg-[#FFEDFB] rounded-2xl h-[150px] md:h-[200px] w-full max-w-[300px] bg-[url('/assets/images/about-us-image-1.jpg')] bg-center bg-cover md:bg-none"
          >
            <div className="md:hidden absolute inset-0 bg-black/50"></div>
            <div
              className="relative z-10 flex flex-col items-start justify-between gap-4 md:gap-0 h-full"
            >
              <h1
                className="text-[32px] leading-[40px] text-[#FFFEFF] md-gradient-text font-medium md:text-3xl lg:text-[60px] md:leading-[68px]"
              >
                850+
              </h1>
              <h6
                className="font-medium text-base md:text-lg lg:text-[20px] leading-tight md:leading-[28px] text-[#FFFEFF] md:text-[#262626]"
              >
                Campaigns delivered
              </h6>
            </div>
          </div>

          <div
            className="relative flex flex-col items-start justify-between gap-4 md:gap-0 p-4 md:p-6 bg-[#FFEDFB] rounded-2xl h-[150px] md:h-[200px] w-full max-w-[300px] bg-[url('/assets/images/about-us-image-1.jpg')] bg-center bg-cover md:bg-none"
          >
            <div className="md:hidden absolute inset-0 bg-black/50"></div>
            <div
              className="relative z-10 flex flex-col items-start justify-between gap-4 md:gap-0 h-full"
            >
              <h1
                className="text-[32px] leading-[40px] text-[#FFFEFF] md-gradient-text font-medium md:text-3xl lg:text-[60px] md:leading-[68px]"
              >
                35,000+
              </h1>
              <h6
                className="font-medium text-base md:text-lg lg:text-[20px] leading-tight md:leading-[28px] text-[#FFFEFF] md:text-[#262626]"
              >
                Podcasts in the network
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-[#F8F9FA] flex flex-col items-center justify-center rounded-xl py-8 md:py-[80px] px-4 md:px-[96px] gap-8 md:gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-8 justify-between items-center gap-4 md:gap-[24px]"
        >
          <div className="lg:col-span-6">
            <h1
              className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px]"
            >
              Podcast Advertising Case Studies & Audio Campaign Results
            </h1>
          </div>
          <div
            className="lg:col-span-2 flex itesm-start md:items-end justify-start md:justify-end h-full"
          >
            <button
              className="gradient-bg-button px-3 md:px-4 py-2 md:py-2.5 bg-white rounded-[4px] flex items-center justify-center gap-[6px]"
            >
              <span
                className="text-[#FFF] text-sm md:text-base lg:text-[16px] leading-tight md:leading-[24px] -tracking-[0%] font-semibold"
                >Explore All</span
              >
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13.959L13 1.95898M13 1.95898H5M13 1.95898V9.95898"
                  stroke="#FFFEFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="max-w-[14400px] flex flex-col lg:flex-row justify-start w-full items-center gap-4 md:gap-[20px]"
          data-aos="fade-up"
        >
          <CaseStudies />
        </div>
      </section>

      <section
        className=" max-w-[360px] lg:max-w-[1440px] w-full bg-[#FFFEFF] flex flex-col items-start justify-start py-8 md:py-[80px] px-4 md:px-[96px] gap-8 md:gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="max-w-[1440px] flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-4 md:gap-[24px]"
        >
          <div className="lg:col-span-4">
            <h1
              className="gradient-text font-semibold text-[34px] leading-[42px] md:text-3xl lg:text-[32px] xl:text-[42px] leading-tight md:leading-[50px] tracking-[-0.02em]"
            >
              Next Knowledge Hub
            </h1>
          </div>
          <div className="max-w-[520px]">
            <h6
              className="text-[#344054] text-base md:text-lg lg:text-[20px] leading-[24px] md:leading-[28px] font-normal"
            >
              Insights, tools, and trends from our blog, webinars, and LinkedIn
              feed
            </h6>
          </div>
        </div>  

        <div
          className="max-w-[1440px] hidden  lg:flex flex-row w-full justify-between items-center gap-4 px-4 lg:px-0 md:gap-[20px] overflow-x-scroll"
          data-aos="fade-up"
        >
          <div
            className="flex  flex-row lg:flex-col items-start justify-start gap-[20px] border-[0.74px] border-[#E8E8E8] rounded-[16px] w-[400px] px-4 lg:px-0"
          >
            <KnowledgeHubCard description="Digital harmony is achieved through simplicity. Complexity may impress, but simplicity captivates the user's heart❤️" image="/assets/images/card-bg.jpg" authorImage="/assets/images/person.png" author="Shekhar Verma" date="20h" />

            <KnowledgeHubCard  description="Digital harmony is achieved through simplicity. Complexity may impress, but simplicity captivates the user's heart❤️" authorImage="/assets/images/person.png" author="Shekhar Verma" date="20h" />
                        

          </div>

          <div
            className="flex flex-row lg:flex-col items-start justify-start gap-[20px] border-[0.74px] border-[#E8E8E8] rounded-[16px] w-[400px] px-4 lg:px-0"
          >


            <KnowledgeHubCard description="Digital harmony is achieved through simplicity. Complexity may impress, but simplicity captivates the user's heart❤️" authorImage="/assets/images/person.png" author="Shekhar Verma" date="20h" />
            <KnowledgeHubCard description="Digital harmony is achieved through simplicity. Complexity may impress, but simplicity captivates the user's heart❤️" image="/assets/images/card-bg.jpg" authorImage="/assets/images/person.png" author="Shekhar Verma" date="20h" />
          
          </div>

          <div
            className="flex flex-row lg:flex-col items-start justify-start gap-[20px] border-[0.74px] border-[#E8E8E8] rounded-[16px] w-[400px] px-4 lg:px-0"
          >
            <KnowledgeHubCard2 title="Webinar" description="Podcast Advertising vs Social Media Marketing: Which Drives Better Engagement" image="/assets/images/card-bg-22.jpg" date="16 June 2025" />
            <KnowledgeHubCard2 title="Webinar" description="Podcast Advertising vs Social Media Marketing: Which Drives Better Engagement" image="/assets/images/card-bg-22.jpg"  date="16 June 2025" />
          </div>
        </div>
      </section>
        
      <section
        className="w-full bg-[#FFFFFF] flex flex-col items-end justify-end md:py-[80px] px-4 md:px-[96px] gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="max-w-[1280px] flex flex-row w-full justify-between items-end gap-[24px]"
        >
          <div
            className="flex flex-col items-start justify-start gap-4 md:gap-[20px]"
          >
            <div
              className="flex flex-col items-start justify-start gap-3 md:gap-[16px]"
            >
              <span
                className="text-[#F11F68] border border-[#F11F68] rounded-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-[16px] leading-tight md:leading-[24px] font-medium"
                >Testimonials</span
              >
              <h1
                className="font-semibold text-2xl md:text-3xl lg:text-[42px] leading-tight md:leading-[50px] gradient-text"
              >
                What Our Clients Say
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end gap-4 md:gap-[20px]">
            <div
              className="flex flex-row items-center justify-center gap-4 md:gap-[24px]"
            >
              <Image
                src="/assets/images/left.png"
                alt="left-arrow"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
                id="prevTestimonial"
                width={20}
                height={20}
              />
              <Image
                src="/assets/images/right.png"
                alt="right-arrow"
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
                id="nextTestimonial"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <TestimonialGroup />
      </section> 

      <section
        className="w-full bg-[#FFFFFF] flex flex-col items-end justify-end py-8 md:py-[80px] px-4 md:px-[96px] gap-8 md:gap-[64px]"
        data-aos="fade-up"
      >
        <div
          className="py-[48px] flex flex-row w-full justify-between items-center gap-[32px]"
        >
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div
              className="bg-[#F11F68] rounded-[16px] p-[32px] lg:p-[64px] flex flex-col items-start justify-between gap-[24px]"
            >
              <div className="flex flex-col gap-[12px]">
                <h2
                  className="text-[#FFFEFF] font-semibold text-[42px] leading-[50px]"
                >
                  Ready to Launch?
                </h2>
                <h3
                  className="text-[#FFFEFF] font-normal text-[20px] leading-[28px]"
                >
                  We make Audio work for you.
                </h3>
              </div>
              <div
                className="flex flex-col md:flex-row items-start justify-start gap-[12px]"
              >
                <button
                  className="bg-[#FFFEFF] py-[10px] px-[16px] rounded-[4px] w-[200px]"
                >
                  <span className="gradient-text">Call me back</span>
                </button>

                <button
                  className="border-[#FFFEFF] border-2 py-[10px] px-[16px] rounded-[4px] w-[200px]"
                >
                  <span className="text-[#FFFEFF]">Download Media Kit</span>
                </button>

                <button
                  className="border-[#FFFEFF] border-2 py-[10px] px-[16px] rounded-[4px] w-[200px]"
                >
                  <span className="text-[#FFFEFF]">Create AI Ads</span>
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/image-4.png"
                alt="ready-to-launch"
                className="w-full h-auto"
                width={475}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>
      <ActionSidebar />
    </div>
    <Footer />

    </div>
  );
}
