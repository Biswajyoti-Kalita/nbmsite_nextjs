"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import isMobile from "@/util/util";

const isMobileScreen = isMobile();
console.log("advertisers page isMobileScreen popular channels", isMobileScreen);
export default function PopularChannels() {
  const rows = isMobileScreen
    ? [
        [
          "/assets/images/brands/times.png",
          "/assets/images/brands/goalhanger.png",
          "/assets/images/brands/syok.png",
          "/assets/images/brands/talk-sports.png",
          "/assets/images/brands/barstool.png",
          "/assets/images/brands/apple-podcast.jpg",
          "/assets/images/brands/anyai.png",
          "/assets/images/brands/amazon-music.png",
          "/assets/images/brands/pandora.png",
          "/assets/images/brands/rogers.png",
          "/assets/images/brands/deezer.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/antenna.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/bbc.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/sonos.png",
        ],
        [
          "/assets/images/brands/the-economist.png",
          "/assets/images/brands/joox.png",
          "/assets/images/brands/ft.png",
          "/assets/images/brands/podbean.png",
          "/assets/images/brands/last_podcast_network.png",
          "/assets/images/brands/right-podcast.png",
          "/assets/images/brands/iheart.png",
          "/assets/images/brands/spreaker.png",
          "/assets/images/brands/radiopublic.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/spotify.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/acast.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/fox-news.jpg",
          "/assets/images/brands/times.png",
          "/assets/images/brands/stitcher.png",
        ],
      ]
    : [
        [
          "/assets/images/brands/times.png",
          "/assets/images/brands/goalhanger.png",
          "/assets/images/brands/syok.png",
          "/assets/images/brands/talk-sports.png",
          "/assets/images/brands/barstool.png",
          "/assets/images/brands/apple.png",
          "/assets/images/brands/anyai.png",
          "/assets/images/brands/amazon-music.png",
          "/assets/images/brands/pandora.png",
        ],
        [
          "/assets/images/brands/rogers.png",
          "/assets/images/brands/deezer.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/antenna.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/bbc.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/sonos.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/spotify.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/acast.png",
          "/assets/images/brands/times.png",
          "/assets/images/brands/fox-news.jpg",
          "/assets/images/brands/times.png",
          "/assets/images/brands/stitcher.png",
        ],
        [
          "/assets/images/brands/the-economist.png",
          "/assets/images/brands/joox.png",
          "/assets/images/brands/ft.png",
          "/assets/images/brands/podbean.png",
          "/assets/images/brands/last_podcast_network.png",
          "/assets/images/brands/right-podcast.png",
          "/assets/images/brands/iheart.png",
          "/assets/images/brands/spreaker.png",
          "/assets/images/brands/radiopublic.png",
        ],
      ];

  const splideOptions1 = {
    type: "loop" as const,
    direction: "ttb" as const,
    drag: "free" as const,
    gap: 24,
    height: isMobileScreen ? 400 : 550,
    autoWidth: false,
    perPage: 4,
    autoScroll: {
      speed: 0.8,
      pauseOnHover: false,
    },
    arrows: false,
    pagination: false,
  };

  const splideOptions2 = {
    type: "loop" as const,
    direction: "ttb" as const,
    drag: "free" as const,
    gap: 24,
    height: isMobileScreen ? 400 : 550,
    autoWidth: false,
    perPage: 4,
    autoScroll: {
      speed: 0.7,
      pauseOnHover: false,
    },
    arrows: false,
    pagination: false,
  };
  const splideOptions3 = {
    type: "loop" as const,
    direction: "ttb" as const,
    drag: "free" as const,
    gap: 24,
    height: isMobileScreen ? 400 : 550,
    autoWidth: false,
    perPage: 4,
    autoScroll: {
      speed: 0.6,
      pauseOnHover: false,
    },
    arrows: false,
    pagination: false,
  };
  console.log("advertisers page rows", rows);

  return (
    <div className="w-full bg-[#F8F9FA] rounded-[16px] flex flex-row gap-4 p-4 h-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex-1 overflow-hidden">
          <Splide
            options={
              rowIndex === 0
                ? splideOptions1
                : rowIndex === 1
                ? splideOptions2
                : splideOptions3
            }
            extensions={{ AutoScroll }}
          >
            {row.map((image, imageIndex) => (
              <SplideSlide key={imageIndex}>
                <div className="bg-[#FFFFFF] border-1 border-[#E5E5E5] rounded-[12px] flex flex-col items-center justify-center w-[175px] h-[115px]">
                  <Image
                    src={image}
                    alt="popular-channel"
                    width={100}
                    height={85}
                    className="w-auto max-w-[140px] h-auto max-h-[85px]"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ))}
    </div>
  );
}
