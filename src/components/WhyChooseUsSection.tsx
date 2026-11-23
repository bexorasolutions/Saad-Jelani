import { ShieldCheck, Award, Clock, Compass } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/studioData';

const PILLARS = [
  {
    icon: Award,
    title: 'BiKBBI Registered Member',
    summary: 'Verified Installation Accountability',
    description:
      'As a member of The British Institute of Kitchen, Bedroom & Bathroom Installation, every project adheres to recognised UK standards of workmanship, compliance, and customer care.',
  },
  {
    icon: ShieldCheck,
    title: '£5 Million Public Liability Insurance',
    summary: 'Complete Homeowner Peace of Mind',
    description:
      'Every kitchen, bedroom, media wall, and plaster commission is backed by £5 million in comprehensive public liability insurance from initial survey to handover.',
  },
  {
    icon: Clock,
    title: '10+ Years of Specialist Experience',
    summary: 'Decade-Deep Joinery & Fitting Expertise',
    description:
      'Over ten years designing, supplying, and installing bespoke interiors ensures precise scribing, clean mitres, and practical problem-solving in period and modern properties alike.',
  },
  {
    icon: Compass,
    title: 'One Unified Design Partner',
    summary: 'Telford · Shropshire · Staffordshire · Birmingham',
    description:
      'Instead of coordinating separate kitchen fitters, bedroom carpenters, media wall builders, and plasterers, Belle & Bow unifies every finish under one dedicated studio.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-[#FAF7F2] text-[#162C4E] border-b border-[#162C4E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Sticky Editorial Intro */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6C34] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.12] text-[#162C4E] text-balance mb-6">
              Accredited Craftsmanship, Built Around Your Home
            </h2>
            <p className="text-[15px] leading-[1.75] text-[#4B5970] mb-8">
              Inviting tradespeople into your home requires complete trust.
              Belle &amp; Bow Kitchens combines boutique studio design with the
              formal credentials, insurance protection, and decade-long track
              record your investment deserves.
            </p>

            <div className="p-6 bg-[#F3EDE2] border border-[#162C4E]/10 space-y-2">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#8C6C34]">
                Regional Service Coverage
              </p>
              <p className="font-editorial text-xl text-[#162C4E]">
                {BUSINESS_CONTACT.serviceAreas.join(' · ')}
              </p>
              <p className="text-xs text-[#4B5970] leading-relaxed">
                Home consultations and full installations delivered across the
                West Midlands and Shropshire borders.
              </p>
            </div>
          </div>

          {/* Right 2x2 Architectural Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 bg-[#FAF7F2] border border-[#162C4E]/12 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center bg-[#162C4E] text-[#DFC99E] mb-6">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-[#8C6C34] mb-1.5">
                      {pillar.summary}
                    </p>
                    <h3 className="font-editorial text-2xl font-medium text-[#162C4E] mb-3 leading-snug tabular-nums">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-[1.7] text-[#4B5970]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
