import React, { useState } from 'react';
import { WORKSHOPS_DATA } from '../data/workshops';
import { WorkshopCard } from './WorkshopCard';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const WorkshopGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterOptions = [
    { label: 'All 9 Workshops', value: 'ALL' },
    { label: 'Resuscitation & ICU', value: 'Resuscitation' },
    { label: 'Surgical & Laparoscopy', value: 'Surgical' },
    { label: 'Imaging & POCUS', value: 'Imaging' },
    { label: 'Procedural Skills', value: 'Procedural' },
    { label: 'Maternal & Emergency', value: 'Specialty' },
  ];

  const filteredWorkshops = WORKSHOPS_DATA.filter((ws) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'Specialty') return ws.category === 'Specialty' || ws.category === 'Emergency';
    return ws.category === selectedFilter;
  });

  return (
    <section id="workshops" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080C14] text-[#E8DFD0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />
            <span>The Forge of Chiron</span>
            <LaurelWreath size={16} className="rotate-180" />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            Hands-on Clinical Workshops
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
            Nine intensive experiential masterclasses conducted by distinguished AIIMS Kalyani clinical faculty on state-of-the-art simulation phantoms.
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        {/* Feature Spotlight Banner */}
        <div className="mt-8 mb-12 bg-[#0D1424] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-56 sm:h-72 lg:h-full relative overflow-hidden">
            <img
              src="/images/clinical_hands_surgical_1790846314396.jpg"
              alt="Hands-on surgical & clinical procedures"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0D1424] via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
              Simulation & Clinical Skills Center
            </span>

            <h3 className="font-serif-cinzel text-xl sm:text-2xl font-bold text-[#F4EEDD]">
              Deliberate Practice Under Master Clinicians
            </h3>

            <p className="text-xs sm:text-sm text-[#C5A880] leading-relaxed">
              Every workshop features high-fidelity tactile feedback models, minimal observer ratios (maximum 4:1 per station),
              dedicated procedural toolkits, and formal competency certificates accredited by AIIMS Kalyani.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
              <div className="bg-[#080C14]/60 p-2.5 rounded border border-[#D4AF37]/15">
                <span className="font-serif-cinzel text-lg font-bold text-[#D4AF37] block">9</span>
                <span className="text-[10px] text-[#A39682]">Certified Labs</span>
              </div>
              <div className="bg-[#080C14]/60 p-2.5 rounded border border-[#D4AF37]/15">
                <span className="font-serif-cinzel text-lg font-bold text-[#D4AF37] block">4:1</span>
                <span className="text-[10px] text-[#A39682]">Trainer Ratio</span>
              </div>
              <div className="bg-[#080C14]/60 p-2.5 rounded border border-[#D4AF37]/15">
                <span className="font-serif-cinzel text-lg font-bold text-[#D4AF37] block">100%</span>
                <span className="text-[10px] text-[#A39682]">Hands-on Drills</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#0D1424] border border-[#D4AF37]/20 rounded-lg max-w-fit mx-auto mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedFilter === opt.value
                  ? 'bg-[#D4AF37] text-[#080C14] font-semibold shadow-sm'
                  : 'text-[#C5A880] hover:text-[#F4EEDD]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  );
};
