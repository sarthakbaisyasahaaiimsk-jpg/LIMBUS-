import React, { useState } from 'react';
import { Award, Calendar, BookOpen, ArrowUpRight, AlertCircle, HelpCircle, CheckCircle } from 'lucide-react';
import { QUIZZES_DATA, QuizItem } from '../data/quizzes';
import { getRegistrationInfo } from '../config/registrations';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const QuizArena: React.FC = () => {
  const [activeSeries, setActiveSeries] = useState<'ALL' | 'MBBS' | 'NURSING'>('ALL');
  const [selectedQuizDetails, setSelectedQuizDetails] = useState<QuizItem | null>(null);

  const displayedQuizzes = QUIZZES_DATA.filter((quiz) => {
    if (activeSeries === 'ALL') return true;
    if (activeSeries === 'MBBS') return quiz.series === 'MBBS';
    if (activeSeries === 'NURSING') return quiz.series === 'Nursing';
    return true;
  });

  return (
    <section id="quizzes" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] text-[#E8DFD0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />
            <span>Colosseum of Diagnostic Intellect</span>
            <LaurelWreath size={16} className="rotate-180" />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            The Quiz Arena
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
            Six premier intellectual battlegrounds spanning pre-clinical, para-clinical, advanced bedside clinical acumen, and specialized nursing excellence.
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        {/* Series Filter Selector */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 bg-[#080C14] border border-[#D4AF37]/25 rounded-lg">
            <button
              onClick={() => setActiveSeries('ALL')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeSeries === 'ALL'
                  ? 'bg-[#D4AF37] text-[#080C14] shadow-md'
                  : 'text-[#C5A880] hover:text-[#F4EEDD]'
              }`}
            >
              All Quizzes (6 Arenas)
            </button>

            <button
              onClick={() => setActiveSeries('MBBS')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeSeries === 'MBBS'
                  ? 'bg-[#D4AF37] text-[#080C14] shadow-md'
                  : 'text-[#C5A880] hover:text-[#F4EEDD]'
              }`}
            >
              MED× MBBS Series
            </button>

            <button
              onClick={() => setActiveSeries('NURSING')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeSeries === 'NURSING'
                  ? 'bg-[#D4AF37] text-[#080C14] shadow-md'
                  : 'text-[#C5A880] hover:text-[#F4EEDD]'
              }`}
            >
              Nursing Quiz Series
            </button>
          </div>
        </div>

        {/* Quizzes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {displayedQuizzes.map((quiz) => {
            const regInfo = getRegistrationInfo(quiz.configKey);
            return (
              <div
                key={quiz.id}
                className="relative bg-[#0D1424] hover:bg-[#111A2E] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                {/* Series & Greek Mythic Title */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                      {quiz.series === 'MBBS' ? 'MBBS Arena' : 'Nursing Arena'}
                    </span>
                    <span className="font-serif italic text-xs text-[#A39682]">
                      {quiz.greekTitle}
                    </span>
                  </div>

                  <h3 className="font-serif-cinzel text-2xl font-black text-[#F4EEDD] group-hover:text-[#D4AF37] transition-colors mt-2">
                    {quiz.codeName}
                  </h3>

                  <p className="text-xs font-serif italic text-[#C5A880] mt-0.5">
                    {quiz.subtitle}
                  </p>

                  <div className="mt-3 py-2 px-3 bg-[#080C14]/60 border border-[#D4AF37]/15 rounded text-xs text-[#E8DFD0]">
                    <span className="text-[10px] uppercase text-[#A39682] block">Target Cadre</span>
                    <span className="font-medium text-[#D4AF37]">{quiz.targetAudience}</span>
                  </div>

                  <p className="text-xs text-[#A39682] mt-3 line-clamp-3 leading-relaxed">
                    {quiz.description}
                  </p>

                  {/* Subject Focus Areas */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#A39682] block">
                      Subject Coverage
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {quiz.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-[#15233E]/80 border border-[#D4AF37]/15 px-2 py-0.5 rounded text-[#E8DFD0]"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Schedule dates */}
                  <div className="mt-5 pt-3 border-t border-[#D4AF37]/15 space-y-1.5 text-xs text-[#C5A880]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>Prelims: {quiz.prelimDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#E8DFD0]">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>Stage Finals: {quiz.finaleDate}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Fee & Action */}
                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase text-[#A39682] block">Registration</span>
                    <span className="font-bold text-xs text-[#F4EEDD]">{quiz.duoFee} / {quiz.soloFee}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedQuizDetails(quiz)}
                      className="p-1.5 text-[#C5A880] hover:text-[#F4EEDD] hover:bg-[#15233E] rounded transition-colors focus:outline-none"
                      title="View Syllabus & Rules"
                    >
                      <HelpCircle className="w-4 h-4" />
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
                      <span className="px-2.5 py-1 text-[11px] text-[#A39682] bg-[#080C14] border border-[#D4AF37]/15 rounded flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-[#D4AF37]" />
                        <span>Opening Soon</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz Detail Drawer / Modal */}
      {selectedQuizDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080C14]/85 backdrop-blur-sm">
          <div className="bg-[#0D1424] border border-[#D4AF37]/40 rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                  {selectedQuizDetails.greekTitle}
                </span>
                <h3 className="font-serif-cinzel text-2xl font-bold text-[#F4EEDD]">
                  {selectedQuizDetails.codeName}
                </h3>
                <p className="text-xs text-[#C5A880] font-serif italic">
                  {selectedQuizDetails.targetAudience}
                </p>
              </div>
              <button
                onClick={() => setSelectedQuizDetails(null)}
                className="text-[#A39682] hover:text-[#F4EEDD] p-1.5 focus:outline-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#C5A880]">
              <div>
                <h4 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD] mb-1">
                  Format
                </h4>
                <p className="text-xs text-[#A39682]">{selectedQuizDetails.format}</p>
              </div>

              <div>
                <h4 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD] mb-2">
                  Key Curriculum Focus Areas
                </h4>
                <ul className="space-y-1.5">
                  {selectedQuizDetails.syllabusHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#E8DFD0]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif-cinzel text-xs uppercase tracking-wider font-bold text-[#F4EEDD] mb-2">
                  Rules & Disqualification Criteria
                </h4>
                <ul className="space-y-1 text-xs text-[#A39682]">
                  {selectedQuizDetails.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#D4AF37]">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#A39682] block text-[10px]">Prizes</span>
                  <span className="text-[#D4AF37] font-semibold">{selectedQuizDetails.rewards.first}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#A39682] block text-[10px]">Registration Fee</span>
                  <span className="text-[#F4EEDD] font-bold">{selectedQuizDetails.duoFee} / {selectedQuizDetails.soloFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
