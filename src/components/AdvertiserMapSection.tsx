"use client";
import Image from "next/image";
import GradientButton from "./GradientButton";
import { openShareBriefModal } from "@/util/modalEvents";
import { useEffect, useState, useRef } from "react";

export default function AdvertiserMapSection() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  const showCountriesList = (country: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCountry(country);
  };

  const hideCountriesList = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCountry(null);
  };

  const handleCountryClick = (country: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCountry(country);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveCountry(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center pt-[32px] pb-[88px] lg:py-[48px] px-[16px] lg:px-[80px] bg-[#FFFEFF] gap-[64px]">
      <div className="w-full flex flex-col items-start justify-center gap-[46px] lg:gap-[64px]">
        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-[16px] lg:gap-[64px]">
          <div className="w-full">
            <h1 className="gradient-text font-semibold text-[34px] lg:text-[42px] leading-[42px] lg:leading-[50px]">
              Start Planning Your Reach
            </h1>
          </div>
          <div className="w-full flex flex-col items-start justify-between gap-[32px]">
            <p className="text-[#344054] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px]">
              From global to hyper-local, our footprint gives you the
              flexibility to reach the right listeners in the right places.
            </p>
            <GradientButton
              text="Request a Proposal"
              className="w-[200px] h-[44px]"
              textClassName="text-[16px] leading-[24px] font-semibold"
              rightIcon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M18 6H10M18 6V14"
                    stroke="#FFFEFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              onClick={openShareBriefModal}
            />
          </div>
        </div>
        <div className="w-full relative flex-col">
          <div
            ref={containerRef}
            className="w-full gap-0 lg:gap-[40px] px-0 lg:px-[100px] flex flex-col lg:flex-row items-start justify-between"
          >
            {[
              {
                name: "The Americas",
                countries: [
                  {
                    name: "Argentina",
                    flag: "/assets/images/flags/argentina.svg",
                    reach: "5.1 m",
                  },
                  {
                    name: "Brazil",
                    flag: "/assets/images/flags/brazil.svg",
                    reach: "16.9 m",
                  },
                  {
                    name: "Canada",
                    flag: "/assets/images/flags/canada.svg",
                    reach: "19.4 m",
                  },
                  {
                    name: "Chile",
                    flag: "/assets/images/flags/chile.svg",
                    reach: "28 m",
                  },
                  {
                    name: "Colombia",
                    flag: "/assets/images/flags/colombia.svg",
                    reach: "7.7 m",
                  },
                  {
                    name: "Ecuador",
                    flag: "/assets/images/flags/ecuador.svg",
                    reach: "25.7 m",
                  },
                  {
                    name: "Mexico",
                    flag: "/assets/images/flags/mexico.svg",
                    reach: "1.4 m",
                  },
                  {
                    name: "United States",
                    flag: "/assets/images/flags/usa.svg",
                    reach: "25.7 m",
                  },
                ],
              },
              {
                name: "UK, Ireland & Europe",
                countries: [
                    {
                        name: "Austria",
                        flag: "/assets/images/flags/austria.svg",
                        reach: "4.7 m",
                      },
                      {
                        name: "Denmark",
                        flag: "/assets/images/flags/denmark.svg",
                        reach: "3.2 m",
                      },
                      {
                        name: "Finland",
                        flag: "/assets/images/flags/finland.svg",
                        reach: "2.5 m",
                      },
                      {
                        name: "France",
                        flag: "/assets/images/flags/france.svg",
                        reach: "39 m",
                      },
                      {
                        name: "Germany",
                        flag: "/assets/images/flags/germany.svg",
                        reach: "53.5 m",
                      },
                      {
                        name: "Greece",
                        flag: "/assets/images/flags/greece.svg",
                        reach: "750 k",
                      },
                      {
                        name: "Hungary",
                        flag: "/assets/images/flags/hungary.svg",
                        reach: "1.3 m",
                      },
                      {
                        name: "Ireland",
                        flag: "/assets/images/flags/ireland.svg",
                        reach: "1.8  m",
                      },
                      {
                        name: "Italy",
                        flag: "/assets/images/flags/italy.svg",
                        reach: "16 m",
                      },
                      {
                        name: "Netherlands",
                        flag: "/assets/images/flags/netherlands.svg",
                        reach: "5.9 m",
                      },
                      {
                        name: "Norway",
                        flag: "/assets/images/flags/norway.svg",
                        reach: "2.9 m",
                      },
                      {
                        name: "Poland",
                        flag: "/assets/images/flags/poland.svg",
                        reach: "2.6 m",
                      },
                      {
                        name: "Portugal",
                        flag: "/assets/images/flags/portugal.svg",
                        reach: "2.3 m",
                      },
                      {
                        name: "Romania",
                        flag: "/assets/images/flags/romania.svg",
                        reach: "1.2 m",
                      },
                      {
                        name: "Spain",
                        flag: "/assets/images/flags/spain.svg",
                        reach: "18 m",
                      },
                      {
                        name: "Sweden",
                        flag: "/assets/images/flags/sweden.svg",
                        reach: "6.7 m",
                      },
                      {
                        name: "Switzerland",
                        flag: "/assets/images/flags/switzerland.svg",
                        reach: "5 m",
                      },
                    {
                    name: "UK",
                    flag: "/assets/images/flags/uk.svg",
                    reach: "27m",
                  },
                ],
              },
              {
                name: "Middle East",
                countries: [

                  {
                    name: "Bahrain",
                    flag: "/assets/images/flags/bahrain.svg",
                    reach: "192k",
                  },
                  {
                    name: "Jordan",
                    flag: "/assets/images/flags/jordan.svg",
                    reach: "5.4 m",
                  },
                  {
                    name: "KSA",
                    flag: "/assets/images/flags/ksa.svg",
                    reach: "27.1 m",
                  },
                  {
                    name: "Kuwait",
                    flag: "/assets/images/flags/kuwait.svg",
                    reach: "700k",
                  },
                  {
                    name: "Lebanon",
                    flag: "/assets/images/flags/lebanon.svg",
                    reach: "200k",
                  },
                  {
                    name: "Oman",
                    flag: "/assets/images/flags/oman.svg",
                    reach: "306k",
                  },
                  {
                    name: "Qatar",
                    flag: "/assets/images/flags/qatar.svg",
                    reach: "575k",
                  },
                  {
                    name: "UAE",
                    flag: "/assets/images/flags/uae.svg",
                    reach: "3.9 m",
                  }
                ],
              },
              {
                name: "Asia-Pacific",
                countries: [
                  {
                    name: "Australia",
                    flag: "/assets/images/flags/australia.svg",
                    reach: "11.3 m",
                  },
                  {
                    name: "Bangladesh",
                    flag: "/assets/images/flags/bangladesh.svg",
                    reach: "195k",
                  },
                  {
                    name: "Cambodia",
                    flag: "/assets/images/flags/cambodia.svg",
                    reach: "106k",
                  },
                  {
                    name: "India",
                    flag: "/assets/images/flags/india.svg",
                    reach: "34m",
                  },
                  {
                    name: "Indonesia",
                    flag: "/assets/images/flags/indonesia.svg",
                    reach: "795k",
                  },
                  {
                    name: "Japan",
                    flag: "/assets/images/flags/japan.svg",
                    reach: "10 m",
                  },
                  {
                    name: "South Korea",
                    flag: "/assets/images/flags/south-korea.svg",
                    reach: "2.1 m",
                  },
                  {
                    name: "Sri Lanka",
                    flag: "/assets/images/flags/sri-lanka.svg",
                    reach: "68k",
                  },
                  {
                    name: "Malaysia",
                    flag: "/assets/images/flags/malaysia.svg",
                    reach: "3.8 m",
                  },
                  {
                    name: "Nepal",
                    flag: "/assets/images/flags/nepal.svg",
                    reach: "80k",
                  },
                  {
                    name: "New Zealand",
                    flag: "/assets/images/flags/new-zealand.svg",
                    reach: "1.3 m",
                  },
                  {
                    name: "Pakistan",
                    flag: "/assets/images/flags/pakistan.svg",
                    reach: "164k",
                  },
                  {
                    name: "Philippines",
                    flag: "/assets/images/flags/philippines.svg",
                    reach: "3.6 m",
                  },
                  {
                    name: "Singapore",
                    flag: "/assets/images/flags/singapore.svg",
                    reach: ".5 m",
                  },
                  {
                    name: "Thailand",
                    flag: "/assets/images/flags/thailand.svg",
                    reach: "888k",
                  },
                  {
                    name: "Vietnam",
                    flag: "/assets/images/flags/vietnam.svg",
                    reach: "1.4 m",
                  },
                ],
                
              },
              {
                name: "Africa",
                countries: [
                    {
                        name: "Algeria",
                        flag: "/assets/images/flags/algeria.svg",
                        reach: "866k",
                      },
                  {
                    name: "Angola",
                    flag: "/assets/images/flags/angola.svg",
                    reach: "306k",
                  },
                  {
                    name: "Egypt",
                    flag: "/assets/images/flags/egypt.svg",
                    reach: "5.5 m",
                  },
                  {
                    name: "Ghana",
                    flag: "/assets/images/flags/ghana.svg",
                    reach: "9.2 m",
                  },
                  {
                    name: "Kenya",
                    flag: "/assets/images/flags/kenya.svg",
                    reach: "4.1 m",
                  },

                  {
                    name: "Morocco",
                    flag: "/assets/images/flags/morocco.svg",
                    reach: "6 m",
                  },
                  {
                    name: "Nigeria",
                    flag: "/assets/images/flags/nigeria.svg",
                    reach: "40.4 m",
                  },
                  {
                    name: "South Africa",
                    flag: "/assets/images/flags/south-africa.svg",
                    reach: "13.1 m",
                  },    
                  {
                    name: "Tanzania",
                    flag: "/assets/images/flags/tanzania.svg",
                    reach: "1.5 m",
                  },
                  {
                    name: "Uganda",
                    flag: "/assets/images/flags/uganda.svg",
                    reach: "652k",
                  }
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`w-full  flex flex-col items-start justify-center gap-[12px] lg:gap-[6px] py-[20px] lg:py-[10px] px-[16px] border-[#E8E8E8]  ${ activeCountry  === item.name ? " lg:border-[#F11F68] lg:bg-[#FFEDFB] " : " lg:border-[#344054] " }  border-1 lg:border-[2px] border-b-0 border-l-0 border-r-0 border-t-1 rounded-none lg:rounded-[44px]`}
              >
                <div className="w-full countries-list-container flex flex-col gap-[12px]">
                  <h1
                    className={`text-[#262626] ${ activeCountry == item.name ? "lg:text-[#F11F68] lg:border-[#F11F68]": "lg:text-[#344054]" }  text-[20px] lg:text-[16px] leading-[28px] lg:leading-[24px] text-start lg:text-center w-full font-medium text-nowrap cursor-pointer flex flex-row items-center justify-between lg:justify-center gap-[4px] lg:gap-0`}
                    onClick={(e) => handleCountryClick(item.name, e)}
                  >
                    {item.name}
                    <div className="flex lg:hidden cursor-pointer">
                        {
                            activeCountry !== item.name ? (
                                <span className="" onClick={(e) => showCountriesList(item.name, e)}>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 1V15M1 8H15"
                                    stroke="#262626"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>                                          
                            ): (
                                <span className="" onClick={(e) => hideCountriesList(e)}>
                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H15" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </span>
                            )
                        }
                    </div>
                  </h1>
                  {activeCountry === item.name && (
                    <div className="bg-[#FFFEFF] shadow-none lg:shadow-md block lg:absolute top-[50px] rounded-[8px] py-[8px] lg:py-[12px] px-[16px] flex flex-col gap-[24px] countries-list-div">
                      <div className={`w-full grid ${item.countries.length > 10 ? 'grid-cols-2' : 'grid-cols-1'} gap-[20px] lg:gap-[8px]`}>
                        {item.countries.map((country, index) => (
                          <div
                            key={index}
                            className="w-full flex flex-row items-center justify-start gap-[8px]"
                          >
                            <Image
                              src={country.flag}
                              alt={country.name}
                              width={24}
                              height={24}
                            />
                            <h1 className="text-[#262626] text-[14px] lg:text-[12px] leading-[18px] text-center w-full font-medium text-nowrap flex flex-row items-center justify-start gap-[4px]">
                              {country.name}
                              <span className="text-[#667085] font-normal text-[14px] lg:text-[12px] leading-[20px]">
                                {country.reach}
                              </span>
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Image
            src="/assets/images/map-base.svg"
            alt="Map"
            width={1000}
            height={1000}
            className="w-full object-cover hidden lg:flex "
          />
        </div>
      </div>
    </section>
  );
}
