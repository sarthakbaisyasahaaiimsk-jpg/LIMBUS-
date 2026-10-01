import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MapPin, Users, Award, ShieldCheck, Mail, Phone, ArrowUpRight, AlertCircle } from 'lucide-react';
import { EventItem } from '../data/events';
import { getRegistrationInfo } from '../config/registrations';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

interface EventModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!event || !isOpen) return null;

  const regInfo = getRegistrationInfo(event.configKey);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080C14]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#0D1424] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Greek Decorative Border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#B8860B] via-[#E5C158] to-[#B8860B]" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-[#D4AF37]/15 bg-[#080C14]/60">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                  <img
                    src="/images/limbus_logo.png"
                    alt="LIMBUS Seal"
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] shrink-0"
                  />
                  <span>{event.greekTitle}</span>
                  <span>·</span>
                  <span>{event.category}</span>
                </div>
                <h3 className="font-serif-cinzel text-2xl sm:text-3xl font-bold text-[#F4EEDD]">
                  {event.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#C5A880] mt-1 font-serif italic">
                  {event.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-[#A39682] hover:text-[#F4EEDD] hover:bg-white/5 rounded-full transition-colors focus:outline-none"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Details Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-4 border-t border-[#D4AF37]/15 text-xs text-[#C5A880]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <div>
                  <span className="text-[#A39682] block text-[10px] uppercase">Date</span>
                  <span className="font-medium text-[#F4EEDD]">{event.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <div>
                  <span className="text-[#A39682] block text-[10px] uppercase">Time</span>
                  <span className="font-medium text-[#F4EEDD]">{event.time}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <div>
                  <span className="text-[#A39682] block text-[10px] uppercase">Team Size</span>
                  <span className="font-medium text-[#F4EEDD]">{event.teamSize}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <div>
                  <span className="text-[#A39682] block text-[10px] uppercase">Entry Fee</span>
                  <span className="font-bold text-[#D4AF37]">{event.registrationFee}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm text-[#C5A880] leading-relaxed">
            {/* Description */}
            <div>
              <h4 className="font-serif-cinzel text-base font-bold text-[#F4EEDD] mb-2 flex items-center gap-2">
                <span>The Challenge</span>
              </h4>
              <p className="text-[#E8DFD0]/90 mb-3">{event.description}</p>
              <ul className="space-y-2 text-xs sm:text-sm">
                {event.detailedOverview.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rounds & Progression */}
            {event.rounds && event.rounds.length > 0 && (
              <div>
                <h4 className="font-serif-cinzel text-base font-bold text-[#F4EEDD] mb-3">
                  Stages of Progression ({event.rounds.length} Rounds)
                </h4>
                <div className="space-y-2.5">
                  {event.rounds.map((round) => (
                    <div
                      key={round.roundNumber}
                      className="bg-[#080C14]/50 border border-[#D4AF37]/15 rounded-lg p-3 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center font-bold text-xs shrink-0">
                        {round.roundNumber}
                      </span>
                      <div>
                        <span className="font-serif-cinzel text-xs font-semibold text-[#F4EEDD] block">
                          {round.title}
                        </span>
                        <p className="text-xs text-[#A39682] mt-0.5">{round.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rules & Eligibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#080C14]/40 border border-[#D4AF37]/15 rounded-lg p-4">
                <h5 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Eligibility</span>
                </h5>
                <p className="text-xs text-[#E8DFD0]">{event.eligibility}</p>
                <div className="mt-3 pt-3 border-t border-[#D4AF37]/10 flex items-start gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{event.venue}</span>
                </div>
              </div>

              <div className="bg-[#080C14]/40 border border-[#D4AF37]/15 rounded-lg p-4">
                <h5 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD] mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Laurel Accolades & Prizes</span>
                </h5>
                <div className="space-y-1 text-xs">
                  <div className="text-[#F4EEDD] font-medium">1st Prize: {event.prizes.first}</div>
                  <div className="text-[#C5A880]">2nd Prize: {event.prizes.second}</div>
                  {event.prizes.third && <div className="text-[#A39682]">3rd Prize: {event.prizes.third}</div>}
                </div>
              </div>
            </div>

            {/* Event Rules List */}
            <div>
              <h4 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD] mb-2">
                Regulations & Protocol
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A39682]">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Person */}
            <div className="bg-[#111A2E]/60 border border-[#D4AF37]/20 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A39682] block">
                  Event Coordinator
                </span>
                <span className="font-semibold text-[#F4EEDD]">{event.contactPerson.name}</span>
                <span className="text-[#C5A880] block text-[11px]">{event.contactPerson.designation}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#D4AF37]">
                <a
                  href={`tel:${event.contactPerson.phone}`}
                  className="flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{event.contactPerson.phone}</span>
                </a>
                <a
                  href={`mailto:${event.contactPerson.email}`}
                  className="flex items-center gap-1 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{event.contactPerson.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Modal Footer with Registration CTA */}
          <div className="p-4 sm:p-6 bg-[#080C14] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A39682]">
              Registration Fee: <span className="font-bold text-[#D4AF37] text-sm">{event.registrationFee}</span>
            </div>

            {regInfo.isAvailable && regInfo.url ? (
              <a
                href={regInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080C14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-all shadow-md active:scale-95"
              >
                <span>Register for {event.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium text-[#A39682] bg-[#111A2E] border border-[#D4AF37]/20 rounded-md cursor-not-allowed">
                <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Registration opening soon</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
