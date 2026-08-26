import type { AudienceTagGroup, TagTone } from "@/data/bfcm/types";

const TONE_STYLES: Record<
  TagTone,
  { wrap: string; pill: string }
> = {
  strong: {
    wrap: "bg-[#FBF3D0]",
    pill: "bg-[#F5E6A3] text-[#5C4A00] border-[#E8D57A]",
  },
  opportunity: {
    wrap: "bg-[#DCEBFA]",
    pill: "bg-[#C5DCF5] text-[#1E3A5F] border-[#A8C8E8]",
  },
  broad: {
    wrap: "bg-[#D8F0DC]",
    pill: "bg-[#BFE5C6] text-[#1F4D2A] border-[#9DD4A8]",
  },
};

export function AudienceTagGroupCard({ group }: { group: AudienceTagGroup }) {
  const styles = TONE_STYLES[group.tone];

  return (
    <div className={`rounded-[12px] p-4 ${styles.wrap}`}>
      <h3 className="text-[#1A1A1A] text-[14px] md:text-[15px] font-semibold mb-3">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.tags.map((tag) => (
          <span
            key={tag}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[13px] font-medium ${styles.pill}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AudienceInsights({
  intro,
  groups,
  brandSafetyNote,
}: {
  intro: string;
  groups: AudienceTagGroup[];
  brandSafetyNote: string;
}) {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div>
        <h2 className="gradient-text text-[22px] md:text-[26px] leading-[1.25] font-bold mb-2">
          Where we&apos;d look for your audience
        </h2>
        <p className="text-[#5B4B73] text-[14px] md:text-[15px] leading-[1.5] italic">
          {intro}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {groups.map((group) => (
          <AudienceTagGroupCard key={group.title} group={group} />
        ))}
      </div>

      <p className="text-[#6B5B80] text-[13px] leading-[1.5] mt-auto pt-2">
        {brandSafetyNote}
      </p>
    </div>
  );
}
