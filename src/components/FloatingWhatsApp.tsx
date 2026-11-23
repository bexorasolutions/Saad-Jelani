import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONTACT } from '../data/studioData';

export function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS_CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Belle & Bow Kitchens on WhatsApp"
      className="fixed bottom-4 right-4 z-30 inline-flex items-center justify-center gap-2.5 h-11 px-3.5 md:px-4 bg-[#162C4E] text-[#FAF7F2] border border-[#C5A267]/60 shadow-lg hover:bg-[#0F1F38] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A267]"
    >
      <MessageCircle className="w-4 h-4 text-[#DFC99E] shrink-0" aria-hidden="true" />
      <span className="hidden md:inline text-xs font-semibold tracking-[0.1em] uppercase whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}
