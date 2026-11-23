import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_LOGO_PATH, BUSINESS_CONTACT } from '../data/studioData';

interface NavbarProps {
  onBookConsultation: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
];

export function Navbar({ onBookConsultation }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleCtaClick = () => {
    setMobileOpen(false);
    onBookConsultation();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#162C4E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-[52px] md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Lockup */}
        <a
          href="#home"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#162C4E]"
          aria-label="Belle & Bow Kitchens Home"
        >
          <img
            src={BRAND_LOGO_PATH}
            alt="Belle & Bow Kitchens Crest"
            referrerPolicy="no-referrer"
            className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-xs shrink-0 border border-[#C5A267]/40"
          />
          <span className="font-editorial text-base sm:text-lg md:text-xl font-semibold tracking-[0.06em] text-[#162C4E] whitespace-nowrap shrink-0">
            BELLE &amp; BOW KITCHENS
          </span>
        </a>

        {/* Zone 2: 5 Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#162C4E]/80"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#162C4E] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C5A267] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#162C4E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] border border-[#162C4E] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A267]"
          >
            Book Consultation
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#162C4E] hover:bg-[#162C4E]/5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#162C4E]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#162C4E]/10 px-6 py-6">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="py-3 text-base font-medium text-[#162C4E] border-b border-[#162C4E]/10 hover:text-[#8C6C34] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#consultation"
              onClick={handleLinkClick}
              className="py-3 text-base font-medium text-[#162C4E] border-b border-[#162C4E]/10 hover:text-[#8C6C34] transition-colors"
            >
              Contact &amp; Consultation
            </a>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full py-3.5 px-5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors cursor-pointer"
            >
              Book Design Consultation
            </button>
            <a
              href={BUSINESS_CONTACT.phoneHref}
              className="w-full py-3.5 px-5 text-center text-xs font-semibold tracking-[0.14em] uppercase border border-[#162C4E]/30 text-[#162C4E] hover:bg-[#162C4E]/5 transition-colors tabular-nums"
            >
              Call {BUSINESS_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
