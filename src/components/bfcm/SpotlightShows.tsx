import type { SpotlightShow } from "@/data/bfcm/types";
import Image from "next/image";

function AccessBadge() {
  return (
    <span
      className="absolute top-2 left-2 z-10 w-6 h-6 rounded-full bg-[#6B21A8] flex items-center justify-center shadow-sm"
      title="Exclusive or preferred-partner access"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M6 1.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6L6 7.5 3.6 8.7l.5-2.6L2.2 4.3l2.6-.4L6 1.5z"
          fill="white"
        />
      </svg>
    </span>
  );
}

function ShowCover({
  show,
  size = "md",
}: {
  show: SpotlightShow;
  size?: "md" | "sm";
}) {
  const sizeClass = size === "sm" ? "aspect-square w-full max-w-[88px]" : "aspect-square w-full";

  return (
    <div className={`relative ${sizeClass} rounded-[2px] overflow-hidden bg-[#EDE4F5] shadow-sm`}>
      {show.hasAccess ? <AccessBadge /> : null}
      <Image
        src={show.artworkUrl}
        alt={show.name}
        fill
        className="object-cover"
        sizes={size === "sm" ? "88px" : "(max-width: 768px) 33vw, 160px"}
      />
    </div>
  );
}

export default function SpotlightShows({
  intro,
  shows,
  surprisePicks,
  surpriseNote,
  accessKey,
}: {
  intro: string;
  shows: SpotlightShow[];
  surprisePicks: SpotlightShow[];
  surpriseNote: string;
  accessKey: string;
}) {
  return (
    <div className="bg-white rounded-[20px] p-5 md:p-6 shadow-[0_4px_24px_rgba(80,40,100,0.08)] h-full flex flex-col gap-5">
      <div>
        <h2 className="gradient-text text-[22px] md:text-[26px] leading-[1.25] font-bold mb-2">
          Spotlight show opportunities
        </h2>
        <p className="text-[#5B4B73] text-[14px] md:text-[15px] leading-[1.5]">
          {intro}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {shows.map((show) => (
          <ShowCover key={show.name} show={show} />
        ))}
      </div>

      <div className="border-t border-[#EDE4F5] pt-4 flex flex-col sm:flex-row gap-4 sm:items-start">
        
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <h6 className="text-[#2B1654] text-[15px] font-bold mb-2 text-right">Surprise Picks</h6>
            <p className="text-[#6B5B80] text-[13px] leading-[1.5] text-right">
              {surpriseNote}
            </p>
          </div>
          <div className="flex gap-2 min-w-[200px]">
            {surprisePicks.map((show) => (
              <ShowCover key={show.name} show={show} size="sm" />
            ))}
          </div>
        </div>
        
      </div>

      <div className="flex items-start gap-2 text-[#6B5B80] text-[12px] leading-[1.4] mt-auto">
        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#6B21A8] flex items-center justify-center shrink-0">
          <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M6 1.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6L6 7.5 3.6 8.7l.5-2.6L2.2 4.3l2.6-.4L6 1.5z"
              fill="white"
            />
          </svg>
        </span>
        <span>{accessKey}</span>
      </div>
    </div>
  );
}
