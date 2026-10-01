import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, BookOpen, Stethoscope, Users, Building2, MapPin } from 'lucide-react';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const About: React.FC = () => {
  const stats = [
    {
      num: '4',
      suffix: 'Days',
      label: 'Of Intellectual Odyssey',
      desc: '2 to 5 November 2026',
      icon: Compass,
    },
    {
      num: '4',
      suffix: 'Events',
      label: 'Flagship Academic Contests',
      desc: 'Treasure Hunt, Diagnostics, Cases & MUN',
      icon: Award,
    },
    {
      num: '6',
      suffix: 'Arenas',
      label: 'Medical & Nursing Quizzes',
      desc: 'MED× Series & CONQR, NEXUS, ZENITH',
      icon: BookOpen,
    },
    {
      num: '9',
      suffix: 'Workshops',
      label: 'Hands-on Clinical Labs',
      desc: 'BLS, POCUS, BMS, Laparoscopy & more',
      icon: Stethoscope,
    },
    {
      num: '1500+',
      suffix: 'Scholars',
      label: 'Pan-India Delegation',
      desc: 'Medical & Healthcare Undergraduates',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#080C14] text-[#E8DFD0] overflow-hidden">
      {/* Background Subtle Odyssey Architecture */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <img
          src="/images/odyssey_temple_medical_1790846296973.jpg"
          alt="Temple of Episteme"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14] via-[#080C14]/80 to-[#080C14]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />
            <span>The Sacred Pursuit of Episteme</span>
            <LaurelWreath size={16} className="rotate-180" />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            An Academic Odyssey in Medicine
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#C5A880]">
            “In the crucible of reason, Athena forged the healer’s discernment.”
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
          {/* Left: About LIMBUS 3.0 Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif-cinzel text-2xl font-bold text-[#F4EEDD] border-l-2 border-[#D4AF37] pl-4">
              Where Ancient Wisdom Meets Clinical Precision
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-[#C5A880]/90">
              <strong className="text-[#F4EEDD]">LIMBUS 3.0</strong> is the premier Annual Academic Fest of{' '}
              <span className="text-[#D4AF37]">AIIMS Kalyani</span>, conceived to celebrate the synthesis of rigorous scientific
              inquiry, clinical acumen, diagnostic puzzle-solving, and collegiate camaraderie.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#A39682]">
              Framed within the mythological grandeur of the <strong className="text-[#E8DFD0]">Odyssey</strong> and blessed by{' '}
              <strong className="text-[#E8DFD0]">Athena</strong> — the ancient Greek goddess of strategic wisdom, justice, and
              erudition — LIMBUS 3.0 provides an intellectual colosseum for the sharpest medical and nursing minds of India to test
              their clinical depth, procedural mastery, emergency reflex, and ethical clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0D1424]/70 border border-[#D4AF37]/15 rounded-lg p-4">
                <span className="font-serif-cinzel text-sm font-semibold text-[#F4EEDD] block mb-1">
                  Clinical Mastery
                </span>
                <p className="text-xs text-[#A39682] leading-normal">
                  High-fidelity simulations, invasive bedside procedural drilling, and emergency ultrasound protocols.
                </p>
              </div>

              <div className="bg-[#0D1424]/70 border border-[#D4AF37]/15 rounded-lg p-4">
                <span className="font-serif-cinzel text-sm font-semibold text-[#F4EEDD] block mb-1">
                  Diagnostic Acumen
                </span>
                <p className="text-xs text-[#A39682] leading-normal">
                  Vignettes, pathological enigmas, and stage buzzer confrontations against India’s brightest minds.
                </p>
              </div>
            </div>
          </div>

          {/* Right: AIIMS Kalyani Institutional Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0D1424]/90 border border-[#D4AF37]/30 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-2xl gold-glow-subtle">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="/images/limbus_official_logo.png"
                  alt="Official LIMBUS 3.0 Logo"
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] shrink-0"
                />
                <div>
                  <h4 className="font-serif-cinzel text-lg font-bold text-[#F4EEDD]">
                    AIIMS Kalyani
                  </h4>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37]">
                    Institute of National Importance · LIMBUS 3.0
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#C5A880] leading-relaxed mb-6">
                Established under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY) by the Ministry of Health and Family Welfare,
                Government of India, AIIMS Kalyani stands as a benchmark of excellence in medical research, super-specialty patient care,
                and transformative healthcare pedagogy.
              </p>

              {/* Official Brochure Location */}
              <div className="pt-4 border-t border-[#D4AF37]/15 space-y-2">
                <div className="flex items-start gap-2.5 text-xs text-[#E8DFD0]">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    NH-34 Connector, Basantapur, Saguna, Kalyani, Nadia District, West Bengal, India — 741245
                  </span>
                </div>
                <div className="text-[11px] text-[#A39682] pl-6">
                  Latitude: 22.9750° N · Longitude: 88.4344° E
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics Ribbon */}
        <div className="mt-16 pt-12 border-t border-[#D4AF37]/20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-[#0D1424]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 rounded-xl p-5 text-center transition-all duration-300"
                >
                  <div className="inline-flex p-2.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="font-serif-cinzel text-3xl sm:text-4xl font-black text-[#F4EEDD] tabular-nums">
                    {stat.num}
                  </div>
                  <div className="text-xs uppercase font-semibold tracking-wider text-[#D4AF37] mt-1">
                    {stat.suffix}
                  </div>
                  <div className="text-xs font-medium text-[#E8DFD0] mt-1 line-clamp-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#A39682] mt-0.5 line-clamp-1">
                    {stat.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
