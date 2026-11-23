import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import {
  PORTFOLIO_PLATES,
  type PortfolioCategory,
  type PortfolioPlate,
  type ServiceId,
} from '../data/studioData';
import { SafeImage } from './SafeImage';

interface PortfolioSectionProps {
  onEnquireSimilar: (serviceId: ServiceId) => void;
}

const FILTER_OPTIONS: { id: PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'All Spaces' },
  { id: 'kitchens', label: 'Kitchens' },
  { id: 'bedrooms', label: 'Bedrooms' },
  { id: 'media-panelling', label: 'Media Walls & Panelling' },
  { id: 'venetian-plaster', label: 'Venetian Plaster' },
];

export function PortfolioSection({ onEnquireSimilar }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPlates =
    activeCategory === 'all'
      ? PORTFOLIO_PLATES
      : PORTFOLIO_PLATES.filter((plate) => plate.category === activeCategory);

  const activePlate: PortfolioPlate | null =
    lightboxIndex !== null && filteredPlates[lightboxIndex]
      ? filteredPlates[lightboxIndex]
      : null;

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredPlates.length
        );
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredPlates.length) % filteredPlates.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPlates.length]);

  const handleCategoryChange = (category: PortfolioCategory) => {
    setActiveCategory(category);
    setLightboxIndex(null);
  };

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-[#FAF7F2] text-[#162C4E] border-b border-[#162C4E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header & Interactive Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6C34] mb-3">
              Our Portfolio
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[3rem] font-medium leading-[1.1] text-[#162C4E] text-balance">
              Curated Interior Architecture &amp; Design Studies
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#4B5970]">
              Explore our signature aesthetic direction across bespoke kitchens,
              fitted bedrooms, custom media walls, timber panelling, and
              Venetian plaster finishes. Select any study to inspect full-scale
              details.
            </p>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter portfolio by space type"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F3EDE2] border border-[#162C4E]/10 self-start lg:self-end"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeCategory === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(option.id)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#162C4E] ${
                    isSelected
                      ? 'bg-[#162C4E] text-[#FAF7F2]'
                      : 'text-[#162C4E]/75 hover:text-[#162C4E] hover:bg-[#FAF7F2]/60'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlates.map((plate, index) => {
            const isHeroSpan =
              activeCategory === 'all' && index === 0 && filteredPlates.length > 2;

            return (
              <motion.article
                key={plate.id}
                layout="position"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col bg-[#FAF7F2] border border-[#162C4E]/12 overflow-hidden transition-colors duration-200 hover:border-[#C5A267] ${
                  isHeroSpan ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="relative w-full overflow-hidden bg-[#162C4E]/5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#162C4E]"
                  aria-label={`Inspect ${plate.title}`}
                >
                  <div
                    className={`w-full overflow-hidden ${
                      isHeroSpan ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <SafeImage
                      src={plate.imageSrc}
                      alt={plate.imageAlt}
                      fallbackTitle={plate.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 bg-[#0F1F38]/80 text-[#FAF7F2] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <Expand className="w-4 h-4" />
                  </span>
                </button>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#8C6C34] mb-2">
                      <span>{plate.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{plate.discipline}</span>
                    </div>

                    <h3 className="font-editorial text-2xl font-medium text-[#162C4E] leading-snug">
                      {plate.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#4B5970]">
                      {plate.materials}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#162C4E]/10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className="text-xs font-semibold tracking-[0.1em] uppercase text-[#162C4E] hover:text-[#8C6C34] transition-colors cursor-pointer"
                    >
                      View Full Study
                    </button>
                    <button
                      type="button"
                      onClick={() => onEnquireSimilar(plate.serviceId)}
                      className="text-xs text-[#4B5970] hover:text-[#162C4E] underline underline-offset-4 decoration-[#C5A267]/60 transition-colors cursor-pointer"
                    >
                      Enquire Similar
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePlate && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePlate.title}
          className="fixed inset-0 z-50 bg-[#0F1F38]/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#FAF7F2] text-[#162C4E] border border-[#C5A267]/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close gallery view"
              className="absolute top-3 right-3 z-20 inline-flex items-center justify-center w-11 h-11 bg-[#0F1F38] text-[#FAF7F2] hover:bg-[#162C4E] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A267]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Column */}
            <div className="lg:col-span-8 relative bg-[#0F1F38] aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
              <SafeImage
                src={activePlate.imageSrc}
                alt={activePlate.imageAlt}
                fallbackTitle={activePlate.title}
                className="w-full h-full object-cover"
              />

              {filteredPlates.length > 1 && (
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredPlates.length) %
                          filteredPlates.length
                      )
                    }
                    aria-label="Previous design study"
                    className="inline-flex items-center justify-center w-11 h-11 bg-[#0F1F38]/85 text-[#FAF7F2] hover:bg-[#162C4E] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % filteredPlates.length
                      )
                    }
                    aria-label="Next design study"
                    className="inline-flex items-center justify-center w-11 h-11 bg-[#0F1F38]/85 text-[#FAF7F2] hover:bg-[#162C4E] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Metadata & Action Column */}
            <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-[#FAF7F2]">
              <div className="pr-8">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8C6C34] mb-3">
                  {activePlate.categoryLabel}
                </p>
                <h3 className="font-editorial text-3xl font-medium leading-tight text-[#162C4E] mb-4">
                  {activePlate.title}
                </h3>
                <p className="text-xs font-medium text-[#4B5970] pb-4 mb-4 border-b border-[#162C4E]/10">
                  {activePlate.materials}
                </p>
                <p className="text-sm leading-[1.7] text-[#334155]">
                  {activePlate.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#162C4E]/10 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    const serviceId = activePlate.serviceId;
                    setLightboxIndex(null);
                    onEnquireSimilar(serviceId);
                  }}
                  className="w-full py-3.5 px-5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#162C4E] text-[#FAF7F2] hover:bg-[#0F1F38] transition-colors cursor-pointer"
                >
                  Book Consultation for This Style
                </button>
                <p className="text-xs text-center text-[#4B5970] tabular-nums">
                  Study {lightboxIndex + 1} of {filteredPlates.length} · Press
                  ESC to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
