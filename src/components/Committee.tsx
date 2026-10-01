
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { COMMITTEE_DATA, CommitteeMember } from '../data/committee';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  // First three members are Patrons.
  const patrons = COMMITTEE_DATA.slice(0, 3);

  // All remaining members belong to the Organizing Committee.
  const organizingCommittee = COMMITTEE_DATA.slice(3);

  const categories = [
    { label: 'All Members', value: 'ALL' },
    { label: 'Secretariat & Finance', value: 'Executive' },
    { label: 'Operations & PR', value: 'Operations' },
    { label: 'Events & Quizzes', value: 'Events' },
  ];

  // Filter only the Organizing Committee.
  const filteredMembers = organizingCommittee.filter((member) => {
    if (activeCategory === 'ALL') return true;

    if (activeCategory === 'Events') {
      return (
        member.category === 'Events' ||
        member.category === 'Quizzes'
      );
    }

    return member.category === activeCategory;
  });

  // Reusable member card.
  const renderMemberCard = (member: CommitteeMember) => (
    <div
      key={member.id}
      className="bg-[#0D1424] hover:bg-[#111A2E]
        border border-[#D4AF37]/20
        hover:border-[#D4AF37]/50 rounded-xl p-5
        transition-all duration-300 flex flex-col
        justify-between shadow-lg group relative overflow-hidden"
    >
      {/* Subtle gold accent */}
      <div
        className="absolute -top-6 -right-6 w-16 h-16
          bg-[#D4AF37]/5 rounded-full blur-md
          group-hover:bg-[#D4AF37]/15 transition-all"
      />

      {/* Member details */}
      <div className="relative">
        <h3
          className="font-serif-cinzel text-lg font-bold
            text-[#F4EEDD] group-hover:text-[#D4AF37]
            transition-colors"
        >
          {member.name}
        </h3>

        <p className="text-xs font-medium text-[#C5A880] mt-1">
          {member.designation}
        </p>
      </div>

      {/* Optional contact link */}
      {member.contact && (
        <div className="mt-4 pt-3 border-t border-[#D4AF37]/15">
          <a
            href={`mailto:${member.contact}`}
            className="inline-flex items-center gap-1.5
              text-xs text-[#D4AF37] hover:underline"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />

            <span className="text-[11px] truncate max-w-[200px]">
              {member.contact}
            </span>
          </a>
        </div>
      )}
    </div>
  );

  // Reusable section heading.
  const renderSectionHeading = (
    title: string,
    subtitle: string
  ) => (
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <div
        className="inline-flex items-center gap-2
          text-xs uppercase tracking-[0.25em] text-[#D4AF37]"
      >
        <LaurelWreath size={16} />

        <span>LIMBUS 3.0 · AIIMS Kalyani</span>

        <LaurelWreath size={16} className="rotate-180" />
      </div>

      <h2
        className="font-serif-cinzel text-3xl sm:text-4xl
          lg:text-5xl font-bold text-[#F4EEDD] tracking-tight"
      >
        {title}
      </h2>

      <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
        {subtitle}
      </p>

      <GreekMeanderDivider className="my-6" />
    </div>
  );

  return (
    <section
      id="committee"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8
        bg-[#0B0F19] text-[#E8DFD0]"
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================================
            SECTION 1: PATRONS
        ========================================= */}
        <div id="patrons" className="scroll-mt-24">
          {renderSectionHeading(
            'Patrons',
            'The guiding wisdom and faculty leadership behind LIMBUS 3.0.'
          )}

          {/* Three Patron Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2
              lg:grid-cols-3 gap-5 mt-10 max-w-5xl mx-auto"
          >
            {patrons.map(renderMemberCard)}
          </div>
        </div>

        {/* =========================================
            GOLD DIVIDER BETWEEN SECTIONS
        ========================================= */}
        <div className="flex items-center gap-4 sm:gap-6 my-16 sm:my-20">
          <div
            className="h-px flex-1 bg-gradient-to-r
              from-transparent via-[#D4AF37]/60 to-[#D4AF37]"
          />

          <div
            className="w-3 h-3 rotate-45 bg-[#D4AF37]
              shadow-[0_0_12px_rgba(212,175,55,0.3)]"
          />

          <div
            className="h-px flex-1 bg-gradient-to-l
              from-transparent via-[#D4AF37]/60 to-[#D4AF37]"
          />
        </div>

        {/* =========================================
            SECTION 2: ORGANIZING COMMITTEE
        ========================================= */}
        <div
          id="organizing-committee"
          className="scroll-mt-24"
        >
          {renderSectionHeading(
            'Organizing Committee',
            'The secretariat, coordinators, and student leaders bringing the Odyssey to life.'
          )}

          {/* Category Filters */}
          <div
            className="mt-8 flex flex-wrap items-center
              justify-center gap-1.5 p-1 bg-[#080C14]
              border border-[#D4AF37]/20 rounded-lg
              max-w-fit mx-auto"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                aria-pressed={activeCategory === category.value}
                className={`px-3.5 py-2 text-xs font-medium
                  rounded-md transition-all duration-200 ${
                    activeCategory === category.value
                      ? 'bg-[#D4AF37] text-[#080C14] font-semibold shadow-sm'
                      : 'text-[#C5A880] hover:text-[#F4EEDD] hover:bg-[#D4AF37]/10'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Organizing Committee Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2
              lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12"
          >
            {filteredMembers.map(renderMemberCard)}
          </div>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <p className="text-center text-[#C5A880] mt-12">
              No members found in this category.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};
