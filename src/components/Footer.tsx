import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';
import { LaurelWreath } from './GreekMotifs';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06090F] border-t border-[#D4AF37]/30 text-[#A39682] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Greek Meander Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 greek-border-top opacity-50" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/15">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/limbus_official_logo.png"
                alt="Official LIMBUS 3.0 Logo"
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.3)] shrink-0"
              />
              <span className="font-serif-cinzel text-2xl font-bold tracking-widest text-[#F4EEDD]">
                LIMBUS 3.0
              </span>
            </div>

            <p className="font-serif italic text-sm text-[#C5A880]">
              “Wisdom • Medicine • Competition • Discovery • Skill • Odyssey”
            </p>

            <p className="text-xs text-[#A39682] leading-relaxed max-w-sm">
              The Annual Academic Fest of All India Institute of Medical Sciences (AIIMS) Kalyani.
              Held from 2–5 November 2026. Dedicated to Athena, the patron of clinical acumen, strategic intellect, and healing wisdom.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  About LIMBUS & AIIMS Kalyani
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  Flagship Academic Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quizzes')}
                  className="hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  Medical & Nursing Quizzes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workshops')}
                  className="hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  Hands-on Clinical Workshops
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('schedule')}
                  className="hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  2–5 November Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rules')}
                  className="hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  Rules & Eligibility
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Credits */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD]">
              Institutional Host
            </h4>
            <p className="text-xs text-[#C5A880] leading-relaxed">
              All India Institute of Medical Sciences, Kalyani<br />
              NH-34 Connector, Basantapur, Saguna,<br />
              Kalyani, Nadia District, West Bengal — 741245<br />
              An Autonomous Institute of National Importance
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
              <Compass className="w-4 h-4" />
              <span>Theme: ODYSSEY 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39682]">
          <div className="flex items-center gap-2">
            <LaurelWreath size={14} className="text-[#D4AF37]" />
            <span>© 2026 LIMBUS 3.0 · AIIMS Kalyani. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              <span>Return to Olympus</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
