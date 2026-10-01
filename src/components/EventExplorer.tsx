import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { EVENTS_DATA, EventItem } from '../data/events';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const EventExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'Flagship', 'Clinical', 'Diagnostic', 'Simulation'];

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.greekTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080C14] text-[#E8DFD0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />
            <span>The Arenas of Odyssey</span>
            <LaurelWreath size={16} className="rotate-180" />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            Flagship Academic Competitions
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
            From campus-wide cryptic labyrinths to clinical dilemma showdowns and high-stakes multilateral diplomacy.
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs (Functional Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0D1424] border border-[#D4AF37]/20 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#080C14] font-semibold shadow-sm'
                    : 'text-[#C5A880] hover:text-[#F4EEDD] hover:bg-white/5'
                }`}
              >
                {cat === 'All' ? 'All Competitions' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#A39682] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#0D1424] border border-[#D4AF37]/20 focus:border-[#D4AF37] rounded-lg text-xs text-[#E8DFD0] placeholder-[#A39682] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onOpenDetails={(ev) => setActiveModalEvent(ev)}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-[#0D1424]/40 border border-[#D4AF37]/15 rounded-xl mt-6">
            <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-2 opacity-50" />
            <p className="text-sm text-[#C5A880]">No events match your current filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#D4AF37] underline hover:text-[#E5C158]"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Modal View */}
      <EventModal
        event={activeModalEvent}
        isOpen={Boolean(activeModalEvent)}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
};
