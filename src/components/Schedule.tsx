import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, MapPin, Calendar, Tag } from 'lucide-react';
import { SCHEDULE_DAYS, ScheduleEvent } from '../data/schedule';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

interface ScheduleProps {
  onSelectEvent?: (eventId: string, type: 'event' | 'workshop' | 'quiz') => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onSelectEvent }) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [selectedEventType, setSelectedEventType] = useState<string>('ALL');

  const currentDay = SCHEDULE_DAYS.find((d) => d.dayNumber === selectedDayNumber) || SCHEDULE_DAYS[0];

  const filteredEvents = currentDay.events.filter((item) => {
    if (selectedEventType === 'ALL') return true;
    return item.type.toLowerCase() === selectedEventType.toLowerCase();
  });

  const typeColorMap: Record<string, { bg: string; text: string; border: string }> = {
    Ceremony: { bg: 'bg-purple-950/40', text: 'text-purple-300', border: 'border-purple-700/40' },
    Competition: { bg: 'bg-blue-950/40', text: 'text-blue-300', border: 'border-blue-700/40' },
    Workshop: { bg: 'bg-emerald-950/40', text: 'text-emerald-300', border: 'border-emerald-700/40' },
    Quiz: { bg: 'bg-amber-950/40', text: 'text-amber-300', border: 'border-amber-700/40' },
    Valedictory: { bg: 'bg-rose-950/40', text: 'text-rose-300', border: 'border-rose-700/40' },
  };

  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] text-[#E8DFD0]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />
            <span>The Chronology of Athena</span>
            <LaurelWreath size={16} className="rotate-180" />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            Interactive Timeline
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
            Navigate the 4-day odyssey of inaugurals, high-voltage quizzes, hands-on clinical rotations, and grand valedictories.
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        {/* Day Selector Tabs (Days 1–4) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {SCHEDULE_DAYS.map((day) => {
            const isSelected = day.dayNumber === selectedDayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNumber(day.dayNumber)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden focus:outline-none ${
                  isSelected
                    ? 'bg-[#15233E] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                    : 'bg-[#0D1424] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#111A2E]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#E5C158] to-[#B8860B]" />
                )}
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block">
                  Day 0{day.dayNumber} · {day.dayName}
                </span>
                <span className="font-serif-cinzel text-lg sm:text-xl font-bold text-[#F4EEDD] block mt-0.5">
                  {day.dateStr.split(' ')[0]} {day.dateStr.split(' ')[1]}
                </span>
                <span className="text-[11px] text-[#A39682] block truncate mt-1">
                  {day.themeKicker}
                </span>
              </button>
            );
          })}
        </div>

        {/* Day Header Banner */}
        <div className="mt-8 bg-[#0D1424] border border-[#D4AF37]/20 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentDay.dateStr}</span>
              <span>·</span>
              <span>{currentDay.dayName}</span>
            </div>
            <h3 className="font-serif-cinzel text-xl sm:text-2xl font-bold text-[#F4EEDD] mt-1">
              {currentDay.themeTitle}
            </h3>
          </div>

          {/* Quick Filter by Type */}
          <div className="flex flex-wrap items-center gap-1 text-xs">
            {['ALL', 'Workshop', 'Quiz', 'Competition'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedEventType(t)}
                className={`px-3 py-1 rounded transition-colors ${
                  selectedEventType === t
                    ? 'bg-[#D4AF37] text-[#080C14] font-semibold'
                    : 'bg-[#080C14] text-[#A39682] hover:text-[#F4EEDD] border border-[#D4AF37]/15'
                }`}
              >
                {t === 'ALL' ? 'All Slots' : `${t}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Timeline Stream */}
        <div className="mt-8 relative border-l-2 border-[#D4AF37]/30 ml-4 sm:ml-32 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDayNumber + selectedEventType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {filteredEvents.map((item: ScheduleEvent) => {
                const style = typeColorMap[item.type] || typeColorMap.Competition;
                return (
                  <div key={item.id} className="relative pl-6 sm:pl-8 group">
                    {/* Timeline Node Orb */}
                    <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-[#080C14] border-2 border-[#D4AF37] group-hover:scale-125 group-hover:bg-[#D4AF37] transition-all" />

                    {/* Time Pin for Desktop (Left Rail) */}
                    <div className="hidden sm:block absolute -left-32 top-3 w-28 text-right font-mono text-xs text-[#D4AF37] font-semibold tabular-nums">
                      {item.time.split('–')[0].trim()}
                    </div>

                    {/* Event Timeline Card */}
                    <div className="bg-[#0D1424] hover:bg-[#111A2E] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 rounded-xl p-5 transition-all duration-200 shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        {/* Mobile Time */}
                        <div className="sm:hidden flex items-center gap-1 text-xs text-[#D4AF37] font-mono font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{item.time}</span>
                        </div>

                        {/* Event Category Tag */}
                        <span
                          className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${style.bg} ${style.text} ${style.border}`}
                        >
                          {item.type} · {item.badgeText}
                        </span>

                        <span className="font-serif italic text-xs text-[#A39682]">
                          {item.greekTheme}
                        </span>
                      </div>

                      <h4 className="font-serif-cinzel text-lg sm:text-xl font-bold text-[#F4EEDD] group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#A39682] mt-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-[#D4AF37]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#C5A880]">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{item.venue}</span>
                        </div>

                        <div className="hidden sm:flex items-center gap-1 text-[#A39682]">
                          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span className="font-mono tabular-nums">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
