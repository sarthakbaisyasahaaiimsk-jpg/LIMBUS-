import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { COMMITTEE_DATA, CommitteeMember } from '../data/committee';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    { label: 'All Leadership', value: 'ALL' },
    { label: 'Patronage & Deans', value: 'Patronage' },
    { label: 'Secretariat & Finance', value: 'Executive' },
    { label: 'Operations & PR', value: 'Operations' },
    { label: 'Events & Quizzes', value: 'Events' },
  ];

  const filteredMembers = COMMITTEE_DATA.filter((m) => {
    if (activeCategory === 'ALL') return true;

    if (activeCategory === 'Events') {
      return m.category === 'Events' || m.category === 'Quizzes';
    }

    return m.category === activeCategory;
  });

  return (
    <section
      id="committee"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] text-[#E8DFD0]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />

            <span>The Argonauts of AIIMS Kalyani</span>

            <LaurelWreath
              size={16}
              className="rotate-180"
            />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            The Organizing Committee
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
            The faculty patronage, executive secretariat, and student leads
            powering LIMBUS 3.0.
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#080C14] border border-[#D4AF37]/20 rounded-lg max-w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeCategory === cat.value
                  ? 'bg-[#D4AF37] text-[#080C14] font-semibold shadow-sm'
                  : 'text-[#C5A880] hover:text-[#F4EEDD]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Committee Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {filteredMembers.map((member: CommitteeMember) => (
            <div
              key={member.id}
              className="bg-[#0D1424] hover:bg-[#111A2E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between shadow-lg group relative overflow-hidden"
            >
              {/* Subtle top laurel accent */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#D4AF37]/5 rounded-full blur-md group-hover:bg-[#D4AF37]/15 transition-all" />

              <div>
                {/* Member Name & Designation */}
                <div>
                  <h3 className="font-serif-cinzel text-lg font-bold text-[#F4EEDD] group-hover:text-[#D4AF37] transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs font-medium text-[#C5A880] mt-1">
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Contact Link */}
              {member.contact && (
                <div className="mt-4 pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs">
                  <a
                    href={`mailto:${member.contact}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />

                    <span className="text-[11px] truncate max-w-[200px]">
                      {member.contact}
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};