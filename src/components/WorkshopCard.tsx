import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Check, ChevronDown, ChevronUp, ArrowUpRight, AlertCircle, Sparkles } from 'lucide-react';
import { WorkshopItem } from '../data/workshops';
import { getRegistrationInfo } from '../config/registrations';
import { LaurelWreath } from './GreekMotifs';

interface WorkshopCardProps {
  workshop: WorkshopItem;
}

export const WorkshopCard: React.FC<WorkshopCardProps> = ({ workshop }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const regInfo = getRegistrationInfo(workshop.configKey);

  return (
    <div
      className={`relative bg-[#0D1424] border ${
        workshop.isPopular ? 'border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/5' : 'border-[#D4AF37]/20'
      } hover:border-[#D4AF37]/60 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Popular Badge */}
      {workshop.isPopular && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#B8860B] to-[#E5C158] text-[#080C14] text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>High Demand</span>
        </div>
      )}

      <div>
        {/* Category & Mythic Title */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37] flex items-center gap-1">
            <LaurelWreath size={12} />
            <span>{workshop.category}</span>
          </span>
          <span className="font-serif italic text-xs text-[#A39682]">
            {workshop.greekTitle}
          </span>
        </div>

        {/* Workshop Title */}
        <h3 className="font-serif-cinzel text-xl sm:text-2xl font-bold text-[#F4EEDD] mt-1">
          {workshop.name}
        </h3>

        <p className="text-xs font-serif italic text-[#C5A880] mt-0.5">
          {workshop.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#A39682] mt-3 leading-relaxed">
          {workshop.description}
        </p>

        {/* Core Procedure Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {workshop.keyProcedures.slice(0, 3).map((proc, i) => (
            <span
              key={i}
              className="text-[10px] bg-[#111A2E] text-[#E8DFD0] border border-[#D4AF37]/15 px-2 py-0.5 rounded"
            >
              {proc}
            </span>
          ))}
          {workshop.keyProcedures.length > 3 && (
            <span className="text-[10px] text-[#A39682] px-1 py-0.5">
              +{workshop.keyProcedures.length - 3} more
            </span>
          )}
        </div>

        {/* Logistics strip */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/15 space-y-2 text-xs text-[#C5A880]">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="font-medium text-[#E8DFD0]">{workshop.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>{workshop.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="truncate">{workshop.venue}</span>
          </div>
        </div>

        {/* Expandable Objectives & Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-[#D4AF37]/20 space-y-3 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block mb-1.5">
                Curricular Learning Objectives
              </span>
              <ul className="space-y-1.5 text-[#A39682]">
                {workshop.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#080C14]/60 p-2.5 rounded border border-[#D4AF37]/15 space-y-1 text-[11px]">
              <div>
                <span className="text-[#A39682]">Faculty: </span>
                <span className="text-[#E8DFD0] font-medium">{workshop.leadFaculty}</span>
              </div>
              <div>
                <span className="text-[#A39682]">Certification: </span>
                <span className="text-[#D4AF37]">{workshop.certification}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Action Row */}
      <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase text-[#A39682] block">Registration Fee</span>
          <span className="font-bold text-sm text-[#D4AF37]">{workshop.fee}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-2.5 py-1.5 text-xs text-[#C5A880] hover:text-[#F4EEDD] flex items-center gap-1 focus:outline-none"
          >
            <span>{isExpanded ? 'Less' : 'Objectives'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {regInfo.isAvailable && regInfo.url ? (
            <a
              href={regInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#080C14] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-all inline-flex items-center gap-1 active:scale-95 shadow-md"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ) : (
            <span className="px-3 py-1.5 text-[11px] text-[#A39682] bg-[#080C14] border border-[#D4AF37]/15 rounded flex items-center gap-1">
              <AlertCircle className="w-3 h-3 text-[#D4AF37]" />
              <span>Opening Soon</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
