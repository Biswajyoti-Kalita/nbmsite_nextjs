"use client";

import { openCallMeBackModal, openShareBriefModal } from "@/util/modalEvents";
import isMobile from "@/util/util";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface Objective {
  title: string;
  color: string;
  bgColor: string;
  currentState: {
    happening: string[];
    tryingTo: string[];
  };
  audioImpact: string[];
  audioImpactNote: string;
  executionOptions: string[];
}

const objectives: Objective[] = [
  {
    title: "Awareness",
    color: "text-[#aa1d84]",
    bgColor: "bg-[#aa1d84]",
    currentState: {
        "happening": [
            "Brand recall has plateaued",
            "Paid social reach is saturated",
            "A recent investments underperformed",

        ],
        "tryingTo": [
            "Enter a new region",
            "Expand reach beyond visual platforms",
            "Be the brand buyers think of first",
        ]
    },
    audioImpact:  [
        `<span className="text-[#aa1d84]">+64%</span> unaided brand <b>recall</b>`,
        `<span className="text-[#aa1d84]">80%+</span> <b>listen-through rates</b>`,
        `<span className="text-[#aa1d84]">70%</span> of listeners <b>discover</b> new brands via podcasts`
    ],
    audioImpactNote: "High listen-through rates mean your message is heard in full, not scrolled past or skipped, increasing brand memory and recall.",
    executionOptions: [
        `<b>Broad-reach placements</b> across podcasts, streaming, web radio, and connected devices`,
        `<b>Programmatic audio</b> buying to optimize frequency and incremental reach`,
        `<b>Always-on</b> presence to build mental availability over time`,
        `Select <b>show partnerships</b> to accelerate brand credibility`,
    ]
  },
  {
    title: "Consideration",
    color: "text-[#1d28b3]",
    bgColor: "bg-[#1d28b3]",
    currentState: {
        "happening": [
            "Engagement is shallow",
            "Complex products are difficult to explain",
            "Sales cycles are lengthening",
        ],
        "tryingTo": [
            "Strengthen mid-funnel performance",
            "Build credibility in high-trust categories",
            "Improve quality of consideration",
        ]
    },
    audioImpact: [
        `<span className="text-[#1d28b3]"><b>2x engagement</b></span> vs visual formats`,
        `<span className="text-[#1d28b3]"><b>High-attention</b></span>, low-distraction environment`,
        `<span className="text-[#1d28b3]"><b>61% trust host </b></span> recommendations more than traditional ads`
    ],
    audioImpactNote: "<div class='mb-2'>Audio holds attention long enough to communicate complexity clearly. </div>  <div class='mb-2'>When trusted hosts recommend a brand within relevant content, audiences are more likely to consider it.</div>",
    executionOptions: [
        `<b>Host-read sponsorships</b> aligned to relevant shows`,
        `<b>Contextual</b> placements within category-specific content`,
        `<b>Sequential audio messaging</b> to deepen understanding`,
        `Audience-targeted <b>programmatic campaigns</b>`,
    ]
  },
  {
    title: "Performance",
    color: "text-[#6e47bd]",
    bgColor: "bg-[#6e47bd]",
    currentState: {
        "happening": [
            "Customer acquisition costs are rising",
            "Performance relies on search and paid social",
            "Paid channels face diminishing returns",
        ],
        "tryingTo": [
            "Drive installs or sign-ups",
            "Support measurable conversion events",
            "Improve mid-funnel acceleration",
        ]
    },
    audioImpact: [
        `<span className="text-[#6e47bd]"><b>High-intent</b></span> listening environment`,
        `Up to <span className="text-[#6e47bd]"><b>44% take action </b></span> following a podcast ad`,
        `<span className="text-[#6e47bd]"><b>Measurable impact</b></span> across installs, sign-ups and search`
    ],
    audioImpactNote: "<div class='mb-2'>Real Campaign Examples: </div> <div class='mb-2'>App installs delivered under<b> $3 cost per install</b> for a delivery company</div> <div><b>+12% increase in search</b> following campaign exposure for a travel org</div>",
    executionOptions: [
        `In-market audience targeting to reach users actively considering purchase`,
        `Dynamic creative aligned to offer, timing and context`,
        `Measurable impact across installs, sign-ups and branded search`,
        `Long-term show partnerships to compound response over time`,
    ]
  },
  {
    title: "Retention",
    color: "text-[#e52063]",
    bgColor: "bg-[#e52063]",
    currentState: {
        "happening": [
            "Acquisition dominates the media plan",
            "Customer churn is increasing",
            "Post-purchase engagement is declining",
        ],
        "tryingTo": [
            "Increase customer lifetime value",
            "Support renewals or upsell",
            "Maintain brand presence between purchase cycles",
        ]
    },
    audioImpact: [
        `<span className="text-[#e52063]"><b>80%+ listen-through rates</b><span>`,
        `Higher <b>brand favourability</b> post-exposure`,
        `<b>High-trust</b> host environments`
    ],
    audioImpactNote: "Audio strengthens emotional connection, not just recall.<br />Repeated exposure within trusted environments increases favourability and reinforces loyalty between purchase cycles.",
    executionOptions: [
        `<b>Always-on</b> audio campaigns across selected audio environments`,
        `<b>CRM-aligned creative</b> for existing customer segments`,
        `<b>Frequency-controlled placements</b> to maintain presence`,
        `Coordinated <b>regional messaging</b> across markets`
    ]
  },
  {
    title: "Expansion",
    color: "text-[#9d62c2]",
    bgColor: "bg-[#9d62c2]",
    currentState: {
        "happening": [
            "Growth is limited to existing markets",
            "Cross-border targeting lacks precision",
            "Messaging fails to resonate locally",
        ],
        "tryingTo": [
            "Enter a new market",
            "Reach specific cultural or language communities",
            "Establish relevance quickly in-region",
        ]
    },
    audioImpact: [
        `<b>70%</b> of listeners <b>discover new brands</b> via podcasts`,
        `<b>Language and cultural</b> audience <b>targeting</b>`,
        `<b>Contextual alignment</b> within local content`
    ],
    audioImpactNote: "<div class='mb-2'>Audio enables precise reach within specific language and cultural communities.</div> <div class='mb-2'>When brands align with locally relevant content, awareness and credibility accelerate in new markets.</div>",
    executionOptions: [
        `Region-specific show <b>partnerships</b> to build local credibility`,
        `Language and <a  href='/diaspora'><b>diaspora audience</b></a> targeting`,
        `<b>Programmatic campaigns</b> across podcasts, streaming, and web radio`,
        `Coordinated <b>multi-market rollout</b>`
    ]
  },
  {
    title: "Diversify & Test",
    color: "text-[#dc6ba0]",
    bgColor: "bg-[#dc6ba0]",
    currentState: {
        "happening": [
            "Performance is platform-dependent",
            "Incremental reach is plateauing",
            "Channel risk is rising",
        ],
        "tryingTo": [
            "Pilot new media environments",
            "Reduce platform concentration risk",
            "Modernise the channel mix",
        ]
    },
    audioImpact: [
        `<b>70%</b> of listeners <b>discover new brands</b> via podcasts`,
        `<b>High-attention, low-clutter</b> environments`,
        `<b>Incremental reach</b> beyond dominant platforms`
    ],
    audioImpactNote: "Audio complements existing channel strategy by unlocking incremental reach in under-utilized environments.<br />It enables measurable testing and optimisation in new environments.",
    executionOptions: [
        `Controlled pilot campaigns across <b>podcast and streaming audio</b>`,
        `<b>Scalable AI-driven creative testing</b> across audiences, messaging, and offers`,
        `<b>Targeted host-read</b> activations within high-fit shows`,
        `Incremental reach and brand lift  <b>measurement</b>`
    ]
  }
];

const exploreOptions = [
  {
     "title": "Media Kit",
     "url": "/advertisers"
  },
  {
     "title": "Case Studies",
     "url": "/case-study-library"
  },
  {
     "title": "Request a Proposal",
     action: "request-a-proposal"
  }
];
const isMobileScreen = isMobile();

export default function AudioPlanObjective() {
  const [selectedObjective, setSelectedObjective] = useState<Objective | null>(null);
  const router = useRouter();
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[24px]">
      {/* LEFT PANEL */}
      <div className="w-full flex flex-col items-start justify-start gap-[24px]  md:max-w-[250px]">
        <div className="lg:mb-[32px]  w-full">
          <h2 className="font-medium text-[18px] lg:text-[24px] leading-[26px] lg:leading-[28px] gradient-text tracking-[0em]">
            Primary Objectives
          </h2>
          <div className="flex flex-col items-start justify-start gap-[6px] mt-[20px]">
            {!isMobileScreen ? objectives.map((objective, index) => (
              <div key={index} className="w-full">
                <h3
                  className={`${selectedObjective?.title === objective.title ? objective.color : "text-[#262626]"} w-full font-medium text-[16px] cursor-pointer hover:${objective.color} hover:bg-[#F8F9FA] transition-colors px-2 py-1 rounded-[6px]`}
                  onClick={() => setSelectedObjective(objective)}
                >
                  {objective.title}
                </h3>
              </div>
            )) : (
              <select className="w-full font-medium text-[16px] cursor-pointer transition-colors px-[14px] py-[10px] rounded-[6px] border-[#D0D5DD] border text-[#262626] font-semibold" onChange={(e) => setSelectedObjective(objectives.find((objective) => objective.title === e.target.value) as Objective)}>
                <option value="">Select an objective</option>
                {objectives.map((objective, index) => (
                  <option key={index} value={objective.title}>
                    {objective.title}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {!isMobileScreen && (
          <hr className="bg-gray-200 w-full max-w-[200px] h-[3px]" />
        )}

        <div className="w-full">
          <h2 className="flex flex-row items-center justify-start gap-[6px] font-medium text-[18px] lg:text-[24px] leading-[26px] lg:leading-[28px] gradient-text tracking-[0em]">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </h2>
          <div className="flex flex-row lg:flex-col overflow-x-auto items-start justify-start gap-[6px] mt-[20px]">
            {exploreOptions.map(
              (objective, index) => (
                <div key={index} className="w-full">
                  <h3
                    className={`text-[#667085] whitespace-nowrap w-full font-medium text-[16px] cursor-pointer hover:text-[#262626] hover:bg-[#F8F9FA] transition-colors px-2 py-1 rounded-[6px]`}
                    onClick={() => {
                      if (objective.action === "request-a-proposal") {
                        openCallMeBackModal();
                      } else {
                        router.push(objective.url as string);
                      }
                    }}
                  >
                    {objective.title}
                  </h3>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full flex flex-col items-start justify-start gap-[24px] p-4 lg:p-[20px]">
        {!selectedObjective && (
          <div className="w-full flex flex-row items-start justify-center gap-[24px]">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[42px] h-[42px]"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="gray"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="font-semibold text-[16px] leading-[26px] lg:leading-[28px] text-[#262626] tracking-[0em]">
                Choose your primary objective to see how audio supports it.
              </h2>
              <p className="font-normal text-[14px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                Evaluate the gap. Understand the impact. Review the activation
                options.
              </p>
            </div>
          </div>
        )}

        {selectedObjective && (
          <div className="w-full flex flex-col items-start justify-start gap-[24px] lg:gap-[40px]">
            <h3 className={`w-full font-semibold text-[24px] lg:text-[32px] text-center leading-[26px] lg:leading-[28px] tracking-[0em] ${selectedObjective.color}`}>
              {selectedObjective.title} Objective
            </h3>
            <div className="w-full">
              <div className="w-full flex flex-row items-center justify-start gap-4">
                <hr className={`w-full h-[1px] ${selectedObjective.bgColor} max-w-[100px]`} />
                <h4 className={`font-bold text-[18px] whitespace-nowrap leading-[26px] lg:leading-[28px] tracking-[0em] ${selectedObjective.color}`}>
                  Current state
                </h4>
                <hr className={`w-full h-[1px] ${selectedObjective.bgColor}`} />
              </div>
              <div className="w-full flex flex-col md:flex-row items-start justify-start gap-[24px]">
                <div className="w-full py-4 flex flex-col items-start justify-start gap-[12px]">
                  <h4 className="font-semibold text-[18px] whitespace-nowrap leading-[26px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                    If This is Happening...
                  </h4>
                  <ul className="list-disc list-inside text-[16px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                    {
                        selectedObjective.currentState.happening.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                  </ul>
                </div>

                <div className="w-full py-4 flex flex-col items-start justify-start gap-[12px]">
                  <h4 className="font-semibold text-[18px] whitespace-nowrap leading-[26px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                    Or You&apos;re Trying To
                  </h4>
                  <ul className="list-disc list-inside text-[16px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                    {
                        selectedObjective.currentState.tryingTo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-row items-center justify-start gap-4">
                <hr className={`w-full h-[1px] ${selectedObjective.bgColor} max-w-[100px]`} />
                <h4 className={`font-bold text-[18px] whitespace-nowrap leading-[26px] lg:leading-[28px] tracking-[0em] ${selectedObjective.color}`}>
                  Audio Impact
                </h4>
                <hr className={`w-full h-[1px] ${selectedObjective.bgColor}`} />
              </div>
              <div className="w-full flex flex-col md:flex-row items-center justify-start gap-[24px]">
                <div className="w-full py-4 flex flex-col items-start justify-start gap-[12px]">
                  <ul className="list-disc list-inside text-[16px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                    {
                        selectedObjective.audioImpact.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))
                    }
                  </ul>
                </div>

                <div className="w-full py-4 flex flex-col items-start justify-start gap-[12px]">
                  <div className="p-4 bg-[#e8e8e8] rounded-[12px] flex flex-col items-center justify-start gap-[12px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-[24px] h-[24px] text-[#262626] my-2`}
                    >
                      <path
                        d="M9 18H15M10 21H14M12 2C9.23858 2 7 4.23858 7 7C7 8.5671 7.72141 9.96549 8.84758 10.871C10.1554 11.9213 11 13.513 11 15H13C13 13.513 13.8446 11.9213 15.1524 10.871C16.2786 9.96549 17 8.5671 17 7C17 4.23858 14.7614 2 12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-[16px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626] text-center" dangerouslySetInnerHTML={{ __html: selectedObjective.audioImpactNote }}>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-row items-center justify-start gap-4">
                <hr className={`w-full h-[1px] ${selectedObjective.color} max-w-[100px]`} />
                <h4 className={`font-bold text-[18px] whitespace-nowrap leading-[26px] lg:leading-[28px] tracking-[0em] ${selectedObjective.color}`}>
                  Execution Options
                </h4>
                <hr className={`w-full h-[1px] ${selectedObjective.color}`} />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[24px]">
                <div className="w-full py-4 flex flex-col items-start justify-start gap-[12px]">
                  <ul className="list-disc list-inside text-[16px] leading-[24px] lg:leading-[28px] tracking-[0em] text-[#262626]">
                    {
                        selectedObjective.executionOptions.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))
                    }
                  </ul>
                </div>
              </div>
              <h4 className="font-semibold text-[18px] lg:whitespace-nowrap leading-[26px] lg:leading-[28px] tracking-[0em] text-[#aa1d84]">Want to see how this would look in your plan? <span className="font-bold underline" onClick={() => openShareBriefModal()}>Request a tailored recommendation</span></h4>
            
                <button className={`${selectedObjective.bgColor} font-semibold text-white px-4 py-2 rounded-[18px] px-4 py-2 mt-[32px]`} onClick={() => router.push("/case-study-library?objective=" + selectedObjective.title)}>
                    View Case Studies
                </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
