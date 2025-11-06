'use client';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      industry: 'FMCG',
      logo: '/logos/bel.svg',
      name: 'Bel Group',
      tags: ['Awareness', 'Sponsorship'],
    },
    {
      id: 2,
      industry: 'E-commerce',
      logo: '/logos/careem.svg',
      name: 'Careem',
      tags: ['Performance', 'DCO'],
    },
    {
      id: 3,
      industry: 'Banking & Finance',
      logo: '/logos/saxobank.svg',
      name: 'Saxo Bank',
      tags: ['Awareness'],
    },
    {
      id: 4,
      industry: 'Fintech',
      logo: '/logos/hubpay.svg',
      name: 'Hubpay',
      tags: ['Awareness'],
    },
  ];

  const filters = [
    'All',
    'Host-Read',
    'DCO (Dynamic Creative Optimization)',
    'Awareness',
    'Consideration',
    'Performance',
    'Branded Podcast',
  ];

  const industries = [
    'View All',
    'Automotive',
    'Banking and Finance',
    'CPG',
    'Education',
    'E-commerce',
    'Fintech',
    'FMCG',
    'Luxury',
    'Travel & Tourism',
    'Tech',
    'Other',
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-12 bg-[#FFFEFF] text-[#262626]">
      {/* Left Sidebar */}
      <aside className="lg:w-1/4 space-y-4">
        <h3 className="font-[Switzer] font-semibold text-[14px] tracking-[-0.02em] text-[#F11F68]">
          Industry
        </h3>
        <ul className="space-y-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="text-[16px] cursor-pointer hover:text-[#262626] hover:bg-[#F8F9FA] transition-colors px-[8px] py-[12px]"
            >
              {industry}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <section className="flex-1 space-y-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 text-[14px] rounded-full border ${
                idx === 0
                  ? 'bg-[#F5F3FF] text-[#7A5AF8] border-[#7A5AF8]'
                  : 'border-[#E0E0E0] text-[#262626]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-[#E5E5E5] bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <span className="inline-block text-[12px] font-medium text-[#5F5F5F] border border-[#E5E5E5] rounded-full px-3 py-1 mb-4">
                  {study.industry}
                </span>
                <img
                  src={study.logo}
                  alt={study.name}
                  className="h-[60px] object-contain mb-6"
                />
                <h3 className="font-[Switzer] font-semibold text-[20px] leading-[28px] mb-1">
                  {study.name}
                </h3>
                <p className="text-[14px] text-[#5F5F5F]">
                  {study.tags.join(' • ')}
                </p>
              </div>

              <button className="mt-6 inline-flex items-center justify-center w-fit px-4 py-2 rounded-md border border-[#7A5AF8] text-[#7A5AF8] font-medium text-[14px] hover:bg-[#F5F3FF] transition-colors">
                View Case Study ↗
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
