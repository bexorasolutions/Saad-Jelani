import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_CONTACT, TRUST_CREDENTIALS } from '../data/studioData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onBookConsultation: () => void;
  onViewProjects: () => void;
}

export function Hero({ onBookConsultation, onViewProjects }: HeroProps) {
  return (
    <section id="home" className="relative bg-[#0F1F38] text-[#FAF7F2]">
      {/* Architectural 16:9 Full-Bleed Hero Stage */}
      <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <SafeImage
          src="/src/assets/images/hero_luxury_kitchen_1795463869280.jpg"
          alt="Luxury bespoke deep navy Shaker kitchen with honed marble island and champagne brass lighting by Belle & Bow Kitchens"
          loading="eager"
          fallbackTitle="Belle & Bow Kitchens · Telford"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Measured Contrast Scrim for >= 7:1 editorial text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0F1F38]/92 via-[#0F1F38]/75 to-[#0F1F38]/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0F1F38]/65 via-transparent to-[#0F1F38]/25"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#DFC99E] mb-5">
              Telford · Shropshire · Staffordshire · Birmingham
            </p>

            <h1 className="font-editorial text-[clamp(2.4rem,4.5vw,4.25rem)] font-medium leading-[1.06] tracking-[0.02em] text-[#FAF7F2] text-balance mb-6">
              BEAUTIFULLY DESIGNED.
              <span className="block text-[#DFC99E] mt-1">
                PERFECTLY UNIFIED.
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-[1.7] text-[#FAF7F2]/90 max-w-xl mb-10 font-normal">
              Transforming kitchens, bedrooms and living spaces with thoughtful
              design and exceptional craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase bg-[#C5A267] text-[#0F1F38] hover:bg-[#DFC99E] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF7F2]"
              >
                <span>BOOK A DESIGN CONSULTATION</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onViewProjects}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase border border-[#FAF7F2]/45 text-[#FAF7F2] hover:bg-[#FAF7F2]/10 hover:border-[#DFC99E] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A267]"
              >
                <span>VIEW OUR PROJECTS</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FAF7F2]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#FAF7F2]/80">
              <a
                href={BUSINESS_CONTACT.phoneHref}
                className="inline-flex items-center gap-2 hover:text-[#DFC99E] transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A267]" aria-hidden="true" />
                <span>Direct Studio Line: {BUSINESS_CONTACT.phoneDisplay}</span>
              </a>
              <span aria-hidden="true" className="text-[#C5A267]/60">
                ·
              </span>
              <a
                href={BUSINESS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DFC99E] transition-colors underline underline-offset-4 decoration-[#C5A267]/50"
              >
                Message via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Width Architectural Credential Strip Below Hero */}
      <div className="bg-[#FAF7F2] text-[#162C4E] border-b border-[#162C4E]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#162C4E]/10">
            {TRUST_CREDENTIALS.map((item) => (
              <div key={item.label} className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <p className="font-editorial text-xl font-semibold text-[#162C4E] tabular-nums">
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#4B5970]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
