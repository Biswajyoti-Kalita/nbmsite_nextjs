"use client";

import { useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface PlayerProps {
  audioUrl: string;
}
export default function Player({ audioUrl }: PlayerProps) {
  const [waveform, setWaveform] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const rewind = () => {
    if (waveform) {
      waveform.seekTo(waveform.getCurrentTime() - 5);
    }
  };

  const playPause = () => {
    if (waveform) {
      waveform.playPause().then(() => {
        console.log(waveform.isPlaying());
        setIsPlaying(waveform.isPlaying());
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const forward = () => {
    if (waveform) {
        console.log(waveform.getCurrentTime());
      waveform.seekTo(waveform.getCurrentTime() + 5);
    }
  };

  useEffect(() => {
    const _wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#9DA4AE",
      progressColor: "#F11F68",
      url: audioUrl,
      height: 24,
    });

    setWaveform(_wavesurfer);

    return () => {
      if (waveform) {
        _wavesurfer.destroy();
        setWaveform(null);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-[8px]">
      <div className="w-full flex flex-row items-center justify-between">
        <span className="font-semibold text-[14px] leading-[14px] tracking-[0em] text-[#262626]">
          00:00
        </span>
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <span
            className="w-[24px] h-[22px] flex items-center justify-center"
            onClick={rewind}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 11L8 6L13 1M6 11L1 6L6 1"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span
            className="w-[40px] lg:w-[32px] h-[40px] lg:h-[32px] flex items-center justify-center"
            onClick={playPause}
          >
            {isPlaying ? (
                <svg
  width="32"
  height="32"
  viewBox="0 0 32 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-[40px] lg:w-[32px] h-[40px] lg:h-[32px]"
>
  <rect
    width="32"
    height="32"
    rx="16"
    fill="#262626"
  />
  <rect
    x="11"
    y="10"
    width="3"
    height="12"
    rx="0.8"
    fill="white"
  />
  <rect
    x="18"
    y="10"
    width="3"
    height="12"
    rx="0.8"
    fill="white"
  />
</svg>

            ) : (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[40px] lg:w-[32px] h-[40px] lg:h-[32px] " > <rect width="32" height="32" rx="16" fill="#262626" /> <path d="M11.3333 11.3262C11.3333 10.6787 11.3333 10.355 11.4683 10.1766C11.5859 10.0211 11.7657 9.92491 11.9603 9.91329C12.1836 9.89995 12.453 10.0795 12.9917 10.4387L20.002 15.1122C20.4472 15.409 20.6697 15.5574 20.7473 15.7444C20.8151 15.9079 20.8151 16.0916 20.7473 16.2551C20.6697 16.4422 20.4472 16.5905 20.002 16.8873L12.9917 21.5609C12.453 21.92 12.1836 22.0996 11.9603 22.0862C11.7657 22.0746 11.5859 21.9784 11.4683 21.823C11.3333 21.6445 11.3333 21.3208 11.3333 20.6733V11.3262Z" stroke="#FFFEFF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" /> </svg>
            )}
          </span>
          <span
            className="w-[24px] h-[22px] flex items-center justify-center"
            onClick={forward}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L6 6L1 1M8 11L13 6L8 1"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <span className="">
          <span className="font-semibold text-[14px] leading-[14px] tracking-[0em] text-[#898989]">
            00:30
          </span>
        </span>
      </div>
      <div className="w-full flex items-center justify-center">
        <div id="waveform" className="w-full max-h-[16px]"></div>
      </div>
    </div>
  );
}
