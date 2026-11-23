import { BRAND_LOGO_PATH, BUSINESS_CONTACT } from '../data/studioData';
import { SafeImage } from './SafeImage';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1F38] text-[#FAF7F2] border-t border-[#C5A267]/25">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF7F2]/12">
          {/* Brand Crest & Mission */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 bg-[#162C4E] border border-[#C5A267]/40 overflow-hidden">
                <SafeImage
                  src={BRAND_LOGO_PATH}
                  alt="Belle & Bow Kitchens Crest"
                  fallbackTitle="Belle & Bow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-editorial text-2xl font-medium tracking-[0.04em] text-[#FAF7F2]">
                  BELLE &amp; BOW KITCHENS
                </p>
                <p className="text-xs tracking-[0.16em] uppercase text-[#DFC99E]">
                  Beautifully Unified
                </p>
              </div>
            </div>

            <p className="text-sm leading-[1.7] text-[#FAF7F2]/75 max-w-md">
              Independent kitchen and interior design studio in Telford,
              specialising in bespoke kitchens, fitted bedrooms, media walls,
              decorative wall panelling, and Venetian plaster finishes.
            </p>

            <p className="text-xs text-[#DFC99E]/90">
              BiKBBI Member · £5M Public Liability Insured · 10+ Years Experience
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#DFC99E]">
              Studio Navigation
            </p>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <li>
                <a href="#home" className="hover:text-[#DFC99E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DFC99E] transition-colors">
                  About Belle &amp; Bow
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFC99E] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#DFC99E] transition-colors">
                  Our Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#DFC99E] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DFC99E] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="hover:text-[#DFC99E] transition-colors"
                >
                  Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Areas */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#DFC99E]">
              Contact &amp; Service Areas
            </p>
            <div className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <p>{BUSINESS_CONTACT.location}</p>
              <p>
                <a
                  href={BUSINESS_CONTACT.phoneHref}
                  className="hover:text-[#DFC99E] transition-colors tabular-nums"
                >
                  Tel: {BUSINESS_CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${BUSINESS_CONTACT.email}`}
                  className="hover:text-[#DFC99E] transition-colors"
                >
                  {BUSINESS_CONTACT.email}
                </a>
              </p>
              <p>
                <a
                  href={BUSINESS_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DFC99E] hover:underline underline-offset-4"
                >
                  WhatsApp Direct Consultation
                </a>
              </p>
              <p className="pt-2 text-xs text-[#FAF7F2]/65 leading-relaxed">
                Serving {BUSINESS_CONTACT.serviceAreas.join(', ')}.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>
            &copy; {currentYear} Belle &amp; Bow Kitchens. All rights reserved.
          </p>
          <p>Bespoke Kitchen &amp; Interior Design · Telford, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
