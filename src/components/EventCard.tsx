import React from 'react';
import { Calendar, MapPin, Users, ArrowUpRight, ChevronRight, AlertCircle } from 'lucide-react';
import { EventItem } from '../data/events';
import { getRegistrationInfo } from '../config/registrations';
import { LaurelWreath } from './GreekMotifs';

interface EventCardProps {
  event: EventItem;
  onOpenDetails: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onOpenDetails }) => {
  const regInfo = getRegistrationInfo(event.configKey);

  return (
    <div className="relative group bg-[#0D1424] hover:bg-[#111A2E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5">
      {/* Top Subtle Border Indicator */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Card Header & Category Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-1.5">
            <LaurelWreath size={12} />
            <span>{event.category}</span>
          </span>
          <span className="text-xs font-serif italic text-[#A39682]">
            {event.greekTitle}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="font-serif-cinzel text-xl sm:text-2xl font-bold text-[#F4EEDD] group-hover:text-[#D4AF37] transition-colors">
          {event.name}
        </h3>

        <p className="text-xs text-[#C5A880] mt-1 line-clamp-1 font-serif italic">
          {event.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#A39682] mt-3 line-clamp-3 leading-relaxed">
          {event.description}
        </p>

        {/* Highlights List */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {event.highlights.slice(0, 3).map((hl, i) => (
            <span
              key={i}
              className="text-[10px] text-[#C5A880] bg-[#080C14]/70 px-2 py-0.5 rounded border border-[#D4AF37]/15"
            >
              {hl}
            </span>
          ))}
        </div>

        {/* Key Metadata (Unboxed) */}
        <div className="mt-5 pt-4 border-t border-[#D4AF37]/15 space-y-2 text-xs text-[#C5A880]">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="truncate">{event.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="truncate">{event.teamSize}</span>
          </div>
        </div>
      </div>

      {/* Card Action Row */}
      <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between gap-3">
        <div className="text-left">
          <span className="text-[10px] uppercase text-[#A39682] block">Fee</span>
          <span className="font-bold text-xs sm:text-sm text-[#F4EEDD]">{event.registrationFee}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenDetails(event)}
            className="px-3 py-1.5 text-xs text-[#C5A880] hover:text-[#F4EEDD] hover:bg-[#15233E] rounded transition-colors inline-flex items-center gap-1 focus:outline-none"
          >
            <span>Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {regInfo.isAvailable && regInfo.url ? (
            <a
              href={regInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#080C14] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-all inline-flex items-center gap-1 active:scale-95"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(event)}
              className="px-3 py-1.5 text-[11px] text-[#A39682] bg-[#080C14] border border-[#D4AF37]/15 rounded hover:border-[#D4AF37]/40 transition-colors inline-flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3 text-[#D4AF37]" />
              <span>Upcoming</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
