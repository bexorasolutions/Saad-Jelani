import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_SERVICES, type ServiceId } from '../data/studioData';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#F3EDE2] text-[#162C4E] border-b border-[#162C4E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8C6C34] mb-3">
              Our Services
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[3rem] font-medium leading-[1.1] text-[#162C4E] text-balance">
              Thoughtful Design &amp; Installation Across Every Room
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] leading-[1.7] text-[#4B5970]">
              From bespoke kitchens and fitted bedrooms to architectural media
              walls, panelling, and Venetian plaster—each discipline is delivered
              with seamless continuity across Telford, Shropshire, Staffordshire,
              and Birmingham.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_SERVICES.map((service, idx) => {
            const isMarquee = idx === 0;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(idx * 0.06, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group flex flex-col justify-between p-8 bg-[#FAF7F2] border border-[#162C4E]/12 transition-colors duration-200 hover:border-[#C5A267] ${
                  isMarquee ? 'md:col-span-2 lg:col-span-1 bg-[#162C4E] text-[#FAF7F2] border-[#162C4E]' : ''
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 pb-5 mb-6 border-b border-current/12">
                    <span
                      className={`font-editorial text-2xl font-medium tabular-nums ${
                        isMarquee ? 'text-[#DFC99E]' : 'text-[#8C6C34]'
                      }`}
                    >
                      {service.number}.
                    </span>
                    <span
                      className={`text-xs tracking-[0.06em] ${
                        isMarquee ? 'text-[#FAF7F2]/75' : 'text-[#4B5970]'
                      }`}
                    >
                      {service.scopeNote}
                    </span>
                  </div>

                  <h3
                    className={`font-editorial text-2xl font-medium leading-[1.2] mb-3 ${
                      isMarquee ? 'text-[#FAF7F2]' : 'text-[#162C4E]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs mb-4 ${
                      isMarquee ? 'text-[#DFC99E]' : 'text-[#8C6C34]'
                    }`}
                  >
                    {service.categoryLabel}
                  </p>

                  <p
                    className={`text-sm leading-[1.7] ${
                      isMarquee ? 'text-[#FAF7F2]/85' : 'text-[#4B5970]'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-current/10">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 ${
                      isMarquee
                        ? 'text-[#DFC99E] hover:text-[#FAF7F2] focus-visible:outline-[#FAF7F2]'
                        : 'text-[#162C4E] hover:text-[#8C6C34] focus-visible:outline-[#162C4E]'
                    }`}
                  >
                    <span>Discuss This Service</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
