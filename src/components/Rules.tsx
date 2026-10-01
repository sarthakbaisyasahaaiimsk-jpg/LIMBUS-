import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, AlertCircle, Info, FileText } from 'lucide-react';
import { RULES_DATA } from '../data/rules';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const Rules: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string>('general-quiz-rules');

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? '' : id);
  };

  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080C14] text-[#E8DFD0]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />
            <span>The Codex of Hippocrates & Athena</span>
            <LaurelWreath size={16} className="rotate-180" />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            Regulations & Guidelines
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
            Review all eligibility standards, team squad limits, outstation credentials, and payment reconciliation mandates.
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        {/* Expandable Accordions */}
        <div className="mt-10 space-y-4">
          {RULES_DATA.map((section) => {
            const isOpen = openAccordionId === section.id;
            return (
              <div
                key={section.id}
                className="bg-[#0D1424] border border-[#D4AF37]/20 hover:border-[#D4AF37]/45 rounded-xl overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold block">
                        {section.greekEpithet}
                      </span>
                      <h3 className="font-serif-cinzel text-base sm:text-lg font-bold text-[#F4EEDD]">
                        {section.title}
                      </h3>
                      <p className="text-xs text-[#A39682] mt-0.5 line-clamp-1">
                        {section.summary}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#D4AF37] shrink-0 p-1.5 rounded-full hover:bg-white/5 transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#D4AF37]/15 space-y-4 text-xs sm:text-sm text-[#C5A880]">
                    <ul className="space-y-2.5">
                      {section.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{rule}</span>
                        </li>
                      ))}
                    </ul>

                    {section.keyNotice && (
                      <div className="mt-4 p-3 rounded-lg bg-[#111A2E] border border-[#D4AF37]/30 flex items-start gap-2.5 text-xs text-[#E8DFD0]">
                        <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-snug">{section.keyNotice}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Brochure Download Reference Notice */}
        <div className="mt-10 p-6 bg-[#0D1424]/60 border border-[#D4AF37]/20 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#D4AF37] shrink-0" />
            <div>
              <span className="font-serif-cinzel text-sm font-bold text-[#F4EEDD] block">
                Official LIMBUS 3.0 Rulebook & Brochure
              </span>
              <span className="text-[#A39682]">
                Limbus 3.0 Brochure_20260929_204005_0000.pdf · All rights reserved AIIMS Kalyani
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold text-xs whitespace-nowrap">
            <span>Verified Institutional Edition</span>
          </div>
        </div>
      </div>
    </section>
  );
};
