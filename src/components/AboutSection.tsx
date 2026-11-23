import { motion } from 'motion/react';
import { BRAND_LOGO_PATH, BUSINESS_CONTACT } from '../data/studioData';
import { SafeImage } from './SafeImage';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#FAF7F2] text-[#162C4E] border-b border-[#162C4E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Brand Identity Crest & Editorial Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6C34] mb-4">
                About Belle &amp; Bow
              </p>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.12] text-[#162C4E] text-balance mb-6">
                An Independent Design Studio Rooted in Craft &amp; Cohesion
              </h2>

              <div className="space-y-5 text-[15px] sm:text-base leading-[1.75] text-[#334155]">
                <p>
                  Based in Telford, United Kingdom,{' '}
                  <strong className="font-semibold text-[#162C4E]">
                    Belle &amp; Bow Kitchens
                  </strong>{' '}
                  is an independent kitchen and interior design studio dedicated
                  to creating homes that feel calm, considered, and architecturally
                  unified.
                </p>
                <p>
                  Rather than treating rooms in isolation, we design and install
                  complete interior environments—from bespoke kitchens and fitted
                  bedrooms to statement media walls, decorative wall panelling,
                  and hand-trowelled Venetian plaster finishes.
                </p>
                <p>
                  Backed by over 10 years of specialist experience, BiKBBI
                  membership, and £5 million public liability insurance, we bring
                  personal studio attention and exacting trade standards to every
                  home across Telford, Shropshire, Staffordshire, and Birmingham.
                </p>
              </div>
            </div>

            {/* Official Studio Crest Lockup */}
            <div className="mt-10 pt-8 border-t border-[#162C4E]/12 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-28 h-28 shrink-0 bg-[#162C4E] p-1 border border-[#C5A267]/50">
                <SafeImage
                  src={BRAND_LOGO_PATH}
                  alt="Belle & Bow Kitchens — Beautifully Unified Official Brand Logo"
                  fallbackTitle="Belle & Bow"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <p className="font-editorial text-2xl font-medium text-[#162C4E]">
                  {BUSINESS_CONTACT.tagline}
                </p>
                <p className="text-sm text-[#4B5970] leading-relaxed">
                  Independent Design &amp; BiKBBI Accredited Installation ·
                  Telford, Shropshire, Staffordshire &amp; Birmingham
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Craftsmanship Detail Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 min-h-[360px] lg:min-h-[480px] bg-[#F3EDE2] border border-[#162C4E]/10 overflow-hidden">
              <SafeImage
                src="/src/assets/images/about_craftsmanship_detail_1795463868863.jpg"
                alt="Hand-painted deep navy timber cabinetry with unlacquered brushed brass hardware and marble worktop"
                fallbackTitle="Bespoke Joinery Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#4B5970]">
              <span>Signature Palette · Deep Navy, Warm Ivory &amp; Brushed Brass</span>
              <span className="tabular-nums">10+ Years Craftsmanship</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
