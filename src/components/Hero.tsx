import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Calendar, MapPin, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { LaurelWreath, AsclepiusCaduceus } from './GreekMotifs';

interface HeroProps {
  onExplore: () => void;
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onRegister }) => {
  // Floating Greek letters & medical particles
  const particles = [
    { char: 'Ω', top: '18%', left: '12%', size: 'text-2xl', delay: 0 },
    { char: 'Ψ', top: '24%', right: '14%', size: 'text-xl', delay: 1.2 },
    { char: 'α', top: '68%', left: '8%', size: 'text-lg', delay: 0.7 },
    { char: 'Δ', top: '75%', right: '10%', size: 'text-2xl', delay: 1.5 },
    { char: 'λ', top: '42%', left: '16%', size: 'text-xl', delay: 2.1 },
    { char: 'θ', top: '55%', right: '18%', size: 'text-lg', delay: 1.8 },
  ];

  // Countdown to 2 November 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-02T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center text-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#080C14]"
    >
      {/* Background Graphic Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-b from-[#15233E]/40 via-[#0D1527]/20 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle gold accent aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[100px]" />

        {/* Parchment starlight grain */}
        <div className="absolute inset-0 opacity-20 parchment-grain" />

        {/* Floating Greek letter glyphs */}
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className={`absolute font-serif text-[#D4AF37]/25 select-none ${p.size}`}
            style={{ top: p.top, left: p.left, right: p.right }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 5 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          >
            {p.char}
          </motion.div>
        ))}

        {/* Geometric Greek meander top and bottom accents */}
        <div className="absolute top-0 left-0 right-0 h-1 greek-border-top opacity-30" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center my-auto">
        {/* Institutional Kicker (unboxed metadata rule) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.28em] text-[#C5A880] mb-5"
        >
          <LaurelWreath size={18} className="text-[#D4AF37]" />
          <span>All India Institute of Medical Sciences, Kalyani</span>
          <LaurelWreath size={18} className="text-[#D4AF37] rotate-180" />
        </motion.div>

        {/* Official LIMBUS Logo Centerpiece Insignia */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mb-6 group cursor-pointer"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#E5C158]/35 to-[#D4AF37]/20 rounded-full blur-2xl opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />
          
          <img
            src="/src/assets/images/IMG_6058.png"
            alt="Official LIMBUS Logo — AIIMS Kalyani"
            referrerPolicy="no-referrer"
            className="relative w-44 h-44 sm:w-60 sm:h-60 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)] drop-shadow-[0_0_35px_rgba(212,175,55,0.3)] group-hover:scale-105 group-hover:drop-shadow-[0_0_45px_rgba(212,175,55,0.5)] transition-all duration-700"
          />
        </motion.div>

        {/* Main Branding Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="font-serif-cinzel text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#F4EEDD] drop-shadow-sm">
            LIMBUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#B8860B]">3.0</span>
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#E8DFD0]/90 tracking-wide">
            Annual Academic Fest of AIIMS Kalyani
          </p>
        </motion.div>

        {/* Theme Reveal: ODYSSEY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-4 text-xs sm:text-sm tracking-[0.35em] uppercase text-[#D4AF37] font-semibold"
        >
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="flex items-center gap-2">
            <Compass className="w-4 h-4 animate-spin [animation-duration:15s]" />
      
          </span>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </motion.div>

        {/* Date & Location Pill Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#C5A880]"
        >
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-medium text-[#F4EEDD]">2–5 November 2026</span>
          </div>
          <span className="hidden sm:inline text-stone-600">·</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>AIIMS Kalyani, West Bengal</span>
          </div>
          <span className="hidden sm:inline text-stone-600">·</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Institute of National Importance</span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0D1424]/80 border border-[#D4AF37]/20 rounded-lg py-2.5 px-2 flex flex-col items-center backdrop-blur-sm shadow-md"
            >
              <span className="font-serif-cinzel text-xl sm:text-2xl font-bold text-[#F4EEDD] tabular-nums">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#A39682]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#080C14] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 rounded-md transition-all duration-200 shadow-xl hover:shadow-[#D4AF37]/25 active:scale-95 group font-sans"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wider text-[#F4EEDD] hover:text-[#D4AF37] bg-[#111A2E]/80 hover:bg-[#15233E] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-md transition-all duration-200 active:scale-95 font-sans"
          >
            <span>Explore LIMBUS</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 text-[#A39682] hover:text-[#D4AF37] transition-colors cursor-pointer pt-6"
        onClick={onExplore}
      >
        <span className="text-[11px] tracking-[0.2em] uppercase font-sans">Begin The Odyssey</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
