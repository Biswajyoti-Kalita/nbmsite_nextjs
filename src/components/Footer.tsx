import Image from "next/image";

export default function Footer() {
    return (
 
        <footer className="bg-white w-full" data-aos="fade-up">
        <div
          className="flex flex-col lg:flex-row gap-8 md:gap-[64px] px-4 md:px-[80px] py-8 md:py-[64px] bg-[#FFFEFF]"
        >
          <div
            className="grid grid-cols-2 lg:grid-cols-6 justify-between gap-8 md:gap-[54px] w-full"
          >
            <div
              className="flex col-span-2 flex-col items-start justify-start min-w-[250px] md:min-w-[280px]"
              data-aos="fade-up"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                className="max-h-[60px] w-auto"
                width={60}
                height={60}
              />
            </div>


            <div data-aos="fade-up" className="flex flex-col gap-[16px]">
              <h1
                className="text-[#262626] font-semibold text-[20px] leading-[28px]"
              >
                Who We Help
              </h1>
              <h5 className="py-[8px] text-[#344054]">Advertisers</h5>
              <h5 className="py-[8px] text-[#344054]">Publishers</h5>
              <h5 className="py-[8px] text-[#344054]">Podcasters</h5>
            </div>


            <div data-aos="fade-up" className="flex flex-col gap-[16px]">
              <h1
                className="text-[#262626] font-semibold text-[20px] leading-[28px]"
              >
                Solutions
              </h1>
              <h5 className="py-[8px] text-[#344054]">AI Ad Studio</h5>
              <h5 className="py-[8px] text-[#344054]">Admanager</h5>
            </div>

            <div data-aos="fade-up" className="flex flex-col gap-[16px]">
              <h1
                className="text-[#262626] font-semibold text-[20px] leading-[28px]"
              >
                Resources
              </h1>
              <h5 className="py-[8px] text-[#344054]">Knowledge Hub</h5>
              <h5 className="py-[8px] text-[#344054]">Case Studies</h5>
              <h5 className="py-[8px] text-[#344054]">Advertiser Media Kit</h5>
              <h5 className="py-[8px] text-[#344054]">Publisher Deck</h5>
            </div>

            <div data-aos="fade-up" className="flex flex-col gap-[16px]">
              <h1
                className="text-[#262626] font-semibold text-[20px] leading-[28px]"
              >
                Company
              </h1>
              <h5 className="py-[8px] text-[#344054]">About Us</h5>
              <h5 className="py-[8px] text-[#344054]">Contact Us</h5>
              <h5 className="py-[8px] text-[#344054]">Why Audio</h5>
            </div>


          </div>
        </div>

        <div
        className="bg-[#F8F9FA] flex flex-row justify-between items-center gap-[64px] px-[24px] lg:px-[80px] py-4 lg:py-[24px]"
      >
        <div
          className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center w-full"
        >
          <div>
            <h1 className="text-[#344054] font-normal text-[16px] leading-[24px]">
              © Next Broadcast Media 2025
            </h1>
          </div>

          <div>
            <h1 className="text-[#344054] font-normal text-[16px] leading-[24px]">
              Privacy Policy
            </h1>
          </div>

          <div>
            <h1 className="text-[#344054] font-normal text-[16px] leading-[24px]">
              Terms of Use
            </h1>
          </div>

          <div>
            <h1
              className="text-[#344054] font-normal text-[16px] leading-[24px] flex flex-row gap-[18px] items-center"
            >
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5236 0.958984H1.47639C1.08483 0.958984 0.709301 1.11453 0.432425 1.39141C0.155548 1.66829 0 2.04381 0 2.43537V19.4826C0 19.8742 0.155548 20.2497 0.432425 20.5266C0.709301 20.8034 1.08483 20.959 1.47639 20.959H18.5236C18.9152 20.959 19.2907 20.8034 19.5676 20.5266C19.8445 20.2497 20 19.8742 20 19.4826V2.43537C20 2.04381 19.8445 1.66829 19.5676 1.39141C19.2907 1.11453 18.9152 0.958984 18.5236 0.958984ZM5.96111 17.9965H2.95417V8.4451H5.96111V17.9965ZM4.45556 7.12148C4.11447 7.11956 3.7816 7.01665 3.49895 6.82572C3.21629 6.6348 2.99653 6.36443 2.8674 6.04873C2.73826 5.73302 2.70554 5.38614 2.77336 5.05186C2.84118 4.71758 3.0065 4.41088 3.24846 4.17047C3.49042 3.93006 3.79818 3.76671 4.13289 3.70103C4.4676 3.63536 4.81426 3.67031 5.12913 3.80147C5.44399 3.93263 5.71295 4.15412 5.90205 4.43799C6.09116 4.72187 6.19194 5.05539 6.19167 5.39648C6.19488 5.62485 6.15209 5.85152 6.06584 6.06299C5.97959 6.27446 5.85165 6.4664 5.68964 6.62737C5.52763 6.78835 5.33487 6.91505 5.12285 6.99994C4.91083 7.08483 4.68389 7.12617 4.45556 7.12148ZM17.0444 18.0048H14.0389V12.7868C14.0389 11.2479 13.3847 10.7729 12.5403 10.7729C11.6486 10.7729 10.7736 11.4451 10.7736 12.8257V18.0048H7.76667V8.45204H10.6583V9.77565H10.6972C10.9875 9.18815 12.0042 8.18399 13.5556 8.18399C15.2333 8.18399 17.0458 9.17982 17.0458 12.0965L17.0444 18.0048Z"
                    fill="#344054"
                  />
                </svg>
              </span>
              <span>

            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1918_1473)">
                <path d="M19.6014 6.11406C19.4883 5.68857 19.2654 5.30025 18.9551 4.98794C18.6448 4.67564 18.2579 4.45031 17.8332 4.33452C16.2695 3.91406 10.0195 3.91406 10.0195 3.91406C10.0195 3.91406 3.76953 3.91406 2.20589 4.33452C1.78114 4.45031 1.39425 4.67564 1.08394 4.98794C0.773628 5.30025 0.550786 5.68857 0.437713 6.11406C0.0195313 7.68452 0.0195312 10.9595 0.0195312 10.9595C0.0195312 10.9595 0.0195313 14.2345 0.437713 15.805C0.550786 16.2305 0.773628 16.6188 1.08394 16.9311C1.39425 17.2434 1.78114 17.4687 2.20589 17.5845C3.76953 18.005 10.0195 18.005 10.0195 18.005C10.0195 18.005 16.2695 18.005 17.8332 17.5845C18.2579 17.4687 18.6448 17.2434 18.9551 16.9311C19.2654 16.6188 19.4883 16.2305 19.6014 15.805C20.0195 14.2345 20.0195 10.9595 20.0195 10.9595C20.0195 10.9595 20.0195 7.68452 19.6014 6.11406Z" fill="#344054"/>
                <path d="M7.97461 13.9331V7.98535L13.2019 10.9592L7.97461 13.9331Z" fill="#FFFEFF"/>
                </g>
                <defs>
                <clipPath id="clip0_1918_1473">
                <rect width="20" height="20" fill="white" transform="translate(0 0.958984)"/>
                </clipPath>
                </defs>
            </svg>

              </span>
            </h1>
          </div>

          <div></div>
        </div>
      </div>
      </footer>




 )
}