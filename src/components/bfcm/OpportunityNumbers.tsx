import type { EvidenceCard } from "@/data/bfcm/types";

export default function OpportunityNumbers({ cards }: { cards: EvidenceCard[] }) {
  return (
    <section className="w-full">
      <h2 className="gradient-text text-[24px] md:text-[28px] leading-[1.2] font-bold mb-6 md:mb-8">
        The opportunity in numbers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const inner = (
            <>
              {card.href ? (
                <span className="absolute top-4 right-4 text-[#6B5B80]" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12L12 4M12 4H6M12 4v6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ) : null}
              <p className="text-[#1A1A1A] text-[28px] md:text-[32px] leading-none font-bold mb-3 pr-6">
                {card.headline}
              </p>
              <p className="text-[#3D3D3D] text-[14px] md:text-[15px] leading-[1.45] flex-1 mb-4">
                {card.description}
              </p>
              <p className="text-[#8A7A9A] text-[12px] leading-[1.4]">{card.source}</p>
            </>
          );

          const className =
            "relative flex flex-col bg-white rounded-[16px] p-5 md:p-6 shadow-[0_4px_20px_rgba(80,40,100,0.06)] min-h-[200px] transition-transform duration-300 hover:-translate-y-0.5";

          if (card.href) {
            return (
              <a
                key={card.headline}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} hover:shadow-[0_8px_28px_rgba(80,40,100,0.12)]`}
              >
                {inner}
              </a>
            );
          }

          return (
            <div key={card.headline} className={className}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
