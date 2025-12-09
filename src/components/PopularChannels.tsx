"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function PopularChannels() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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

  // Animation durations for different speeds
  const animationDurations = ["20s", "25s", "30s"];

  return (
    <div className="w-full bg-[#F8F9FA] rounded-[16px] flex flex-row gap-4 p-4 h-full">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex-1 overflow-hidden ${
            isMobileScreen && rowIndex >= 2 ? "hidden" : ""
          }`}
        >
          <div
            className="overflow-hidden relative"
            style={{
              height: isMobileScreen ? "400px" : "550px",
            }}
          >
            <div 
              className="flex flex-col animate-scroll-vertical"
              style={{ 
                gap: isMobileScreen ? "16px" : "24px",
                animationDuration: animationDurations[rowIndex] || "20s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }}
            >
              {/* Render slides twice for seamless infinite loop */}
              {[...row, ...row, ...row].map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="flex-shrink-0"
                  style={{ 
                    marginBottom: isMobileScreen ? "16px" : "0px",
                  }}
                >
                  <div
                    className={`bg-[#FFFFFF] border-1 border-[#E5E5E5] rounded-[12px] flex flex-col items-center justify-center w-[150px] md:w-[175px] h-[115px]`}
                  >
                    <Image
                      src={image}
                      alt="popular-channel"
                      width={100}
                      height={85}
                      className="w-auto max-w-[140px] h-auto max-h-[85px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
