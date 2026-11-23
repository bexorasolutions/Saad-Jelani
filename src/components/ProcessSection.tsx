import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/studioData';

interface ProcessSectionProps {
  onBookConsultation: () => void;
}

export function ProcessSection({ onBookConsultation }: ProcessSectionProps) {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-[#162C4E] text-[#FAF7F2] border-b border-[#C5A267]/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#DFC99E] mb-3">
              Our Process
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[3rem] font-medium leading-[1.1] text-[#FAF7F2] text-balance">
              Four Considered Stages From First Sketch to Final Handover
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <button
              type="button"
              onClick={onBookConsultation}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#C5A267] text-[#0F1F38] hover:bg-[#DFC99E] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Arrange Stage 01 Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-6 border-t border-[#C5A267]/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-editorial text-3xl font-medium text-[#DFC99E] tabular-nums">
                    {step.number}.
                  </span>
                  <span className="text-xs text-[#FAF7F2]/65 tracking-[0.06em]">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-[#FAF7F2] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm leading-[1.75] text-[#FAF7F2]/80">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
