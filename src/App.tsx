/**
 * LIMBUS 3.0 — The Official Website of the Annual Academic Fest of AIIMS Kalyani
 * Held from 2–5 November 2026.
 * Theme: ODYSSEY
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EventExplorer } from './components/EventExplorer';
import { QuizArena } from './components/QuizArena';
import { WorkshopGrid } from './components/WorkshopGrid';
import { Schedule } from './components/Schedule';
import { Committee } from './components/Committee';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Smooth scroll handler with header offset
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'events', 'quizzes', 'workshops', 'schedule', 'committee', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Special case for hero at top
      if (scrollY < windowHeight * 0.4) {
        setActiveSection('hero');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-[#E8DFD0] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#FFF8E7]">
      {/* Primary Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-screen Hero Section */}
        <Hero
          onExplore={() => scrollToSection('about')}
          onRegister={() => scrollToSection('events')}
        />

        {/* About LIMBUS 3.0 & AIIMS Kalyani */}
        <About />

        {/* Flagship Academic Competitions Explorer */}
        <EventExplorer />

        {/* Medical & Nursing Quiz Arena */}
        <QuizArena />

        {/* Hands-on Clinical Workshops */}
        <WorkshopGrid />

        {/* Interactive 2–5 Nov Schedule Timeline */}
        <Schedule />


        {/* Steering Committee & Leadership */}
        <Committee />

        {/* Location & Official Helpdesk */}
        <ContactLocation />
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
