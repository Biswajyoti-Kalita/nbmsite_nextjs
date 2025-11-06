import CaseStudies from "@/components/CaseStudies";
import CaseStudyLib from "@/components/CaseStudyLib";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
            <div className="flex flex-row items-center justify-start gap-[12px]">
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
              <span className="text-[#D2D2D2] font-medium text-[14px] leading-[22px]">
                About Us
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
                Case Study Library
              </span>
            </div>
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
      <div className="w-full bg-white flex flex-column flex-wrap p-[80px] gap-[40px]">
        <h1 className="font-[Switzer] font-semibold text-[32px] lg:text-[48px] leading-[40px] lg:leading-[54px] tracking-[-0.02em] text-[#262626]">
          Featured Case Studies
        </h1>
        <div className="max-w-[14400px] flex flex-col lg:flex-row justify-start w-full items-center gap-4 md:gap-[20px]"
          data-aos="fade-up">
          <CaseStudies />
        </div>
      </div>
      <CaseStudyLib/>
      <Footer />
    </div>
  );
}
