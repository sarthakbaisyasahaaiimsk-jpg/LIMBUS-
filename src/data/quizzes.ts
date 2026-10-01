export interface QuizItem {
  id: string;
  configKey: string;
  series: 'MBBS' | 'Nursing';
  codeName: string;
  greekTitle: string;
  subtitle: string;
  targetAudience: string;
  subjects: string[];
  duoFee: string;
  soloFee: string;
  prelimDate: string;
  finaleDate: string;
  format: string;
  description: string;
  syllabusHighlights: string[];
  rules: string[];
  rewards: {
    first: string;
    second: string;
    third?: string;
  };
}

export const QUIZZES_DATA: QuizItem[] = [
  // MBBS Medical Quizzes
  {
    id: 'med-quest',
    configKey: 'MED_QUEST',
    series: 'MBBS',
    codeName: 'MED×QUEST',
    greekTitle: 'The Oracle of Delphi',
    subtitle: 'Pre-Clinical Foundations of Medicine',
    targetAudience: '1st-Year MBBS Students',
    subjects: ['Gross Anatomy & Embryology', 'Human Physiology', 'Medical Biochemistry'],
    duoFee: '₹150 duo',
    soloFee: '₹100 individual',
    prelimDate: '28 October 2026 (Online Prelims)',
    finaleDate: '2 November 2026 (On-Stage Finals)',
    format: 'Online preliminary screening followed by top 6 teams advancing to live stage finals with buzzer rounds, audio-visual spotters, and clinical correlation questions.',
    description: 'The definitive pre-clinical arena. Put your mastery of anatomical dissections, neurophysiology pathways, enzymatic cascades, and metabolic genetic disorders to the ultimate test.',
    syllabusHighlights: [
      'Neuroanatomy, Embryology & Head-Neck Regional Dissections',
      'Cardiac & Renal Physiology, Acid-Base Regulation & Neurotransmission',
      'Molecular Genetics, Inborn Errors of Metabolism & Clinical Enzymology'
    ],
    rules: [
      'Strictly restricted to currently enrolled 1st-Professional Year MBBS students.',
      'Participants may register as a team of 2 (duo) or as an individual.',
      'Online prelims will be conducted on the secure LIMBUS Quiz Portal with anti-cheat webcam proctoring.',
      'Finals will comprise 5 rounds: Quick-Fire, Video Vignettes, Clinical Correlates, Reverse Buzzer, and Sudden-Death tiebreakers.'
    ],
    rewards: {
      first: '₹10,000 + Delphi Laurel Trophy + Certificates of Excellence',
      second: '₹6,000 + Silver Laurel + Certificates',
      third: '₹3,000 + Bronze Laurel + Certificates'
    }
  },
  {
    id: 'med-voyage',
    configKey: 'MED_VOYAGE',
    series: 'MBBS',
    codeName: 'MED×VOYAGE',
    greekTitle: 'The Voyage of the Argo',
    subtitle: 'Para-Clinical Diagnostic & Pharmacotherapeutic Mastery',
    targetAudience: '2nd-Year MBBS Students',
    subjects: ['Systemic Pathology', 'Pharmacology & Therapeutics', 'Microbiology & Immunology'],
    duoFee: '₹150 duo',
    soloFee: '₹100 individual',
    prelimDate: '29 October 2026 (Online Prelims)',
    finaleDate: '3 November 2026 (On-Stage Finals)',
    format: 'Comprehensive digital screening exam followed by on-stage clinical pathology and drug mechanisms showdown in the Main Auditorium.',
    description: 'Embark on the perilous journey through micro-organisms, immune defenses, morbid histopathology, and therapeutic mechanisms. Master the bridge between basic science and bed-side medicine.',
    syllabusHighlights: [
      'Histopathologic Neoplasia, Hematology & Systemic Organ Lesions',
      'Antimicrobial Stewardship, Pharmacodynamics & Autonomic Therapeutics',
      'Virology, Medical Parasitology, Bacteriology & Serological Diagnostics'
    ],
    rules: [
      'Eligible exclusively for 2nd-Professional Year MBBS students.',
      'Both members of a duo must be from the same or different recognized medical colleges.',
      'Calculators and medical apps prohibited during all examination stages.',
      'Top 6 scoring teams qualify for the live auditorium finals.'
    ],
    rewards: {
      first: '₹10,000 + Argo Golden Fleece Trophy + Certificates of Excellence',
      second: '₹6,000 + Silver Trophy + Certificates',
      third: '₹3,000 + Bronze Trophy + Certificates'
    }
  },
  {
    id: 'med-summit',
    configKey: 'MED_SUMMIT',
    series: 'MBBS',
    codeName: 'MED×SUMMIT',
    greekTitle: 'Mount Olympus Grand Conclave',
    subtitle: 'Clinical Acumen, Reasoning & Presence of Mind',
    targetAudience: '3rd-Year, Final-Year MBBS & Interns',
    subjects: ['Internal Medicine & Pediatrics', 'General Surgery & Orthopedics', 'OBG, Emergency & Critical Care'],
    duoFee: '₹150 duo',
    soloFee: '₹100 individual',
    prelimDate: '30 October 2026 (Online Prelims)',
    finaleDate: '4 November 2026 (Grand Stage Finale)',
    format: 'High-intensity clinical problem solving. Live multi-lead ECG interpretation, acute trauma decision trees, intra-operative spotters, and rapid-fire clinical bedside simulations.',
    description: 'The pinnacle of medical intellect at LIMBUS 3.0. Designed for clinical clerks, final year candidates, and medical house-staff navigating real-time life-or-death decision pathways.',
    syllabusHighlights: [
      'Acute Coronary Syndromes, Shock Protocols & Critical Care Algorithms',
      'Surgical Emergencies, Laparoscopic Anatomy & Trauma Resuscitation',
      'Pediatric Neonatology, Obstetric Hemorrhage & Antimicrobial Regimens'
    ],
    rules: [
      'Open to 3rd-year MBBS, Final-year MBBS students and currently serving Medical Interns.',
      'Teams may consist of duo or individual registration; inter-institutional pairs permitted.',
      'Finals include the high-risk "Athena Risk Round" with double-or-nothing score multipliers.',
      'Jury decisions on clinical interpretations are final.'
    ],
    rewards: {
      first: '₹15,000 + Mount Olympus Grand Trophy + Certificates of Excellence',
      second: '₹9,000 + Runner-up Grand Trophy + Certificates',
      third: '₹5,000 + Certificates of Merit'
    }
  },

  // Nursing Quiz Series
  {
    id: 'conqr',
    configKey: 'CONQR',
    series: 'Nursing',
    codeName: 'CONQR',
    greekTitle: 'The Spartan Phalanx',
    subtitle: 'Foundational Nursing Science & Human Care',
    targetAudience: '1st & 2nd Year B.Sc Nursing Students',
    subjects: ['Fundamentals of Nursing', 'Applied Anatomy & Physiology', 'Nutritional Biochemistry', 'First Aid'],
    duoFee: '₹100 duo',
    soloFee: '₹60 individual',
    prelimDate: '2 November 2026 (Morning Prelims)',
    finaleDate: '2 November 2026 (Afternoon Stage Finals)',
    format: 'Written preliminary screening in morning followed by afternoon stage finals in Seminar Hall B featuring nursing procedure spotters and patient safety scenarios.',
    description: 'Designed to honour and test the essential bedrock of patient care, bedside hygiene protocols, nursing ethics, drug calculation math, and fundamental physiology.',
    syllabusHighlights: [
      'Vital Signs Interpretation, Asepsis & Infection Control Protocols',
      'Nursing Process, Care Planning & Documentation Standards',
      'Dosage Calculations, Fluid Therapy & Emergency First Aid'
    ],
    rules: [
      'Open strictly to 1st and 2nd year B.Sc Nursing undergraduates.',
      'Institutional nursing identity card verification required.',
      'Top 6 teams qualify for the afternoon stage finale.'
    ],
    rewards: {
      first: '₹6,000 + CONQR Victory Laurel + Certificate',
      second: '₹4,000 + Certificate of Excellence',
      third: '₹2,000 + Certificate of Merit'
    }
  },
  {
    id: 'nexus',
    configKey: 'NEXUS',
    series: 'Nursing',
    codeName: 'NEXUS',
    greekTitle: 'The Thread of Ariadne',
    subtitle: 'Specialized Clinical & Maternal-Child Health Nursing',
    targetAudience: '3rd & 4th Year B.Sc Nursing Students',
    subjects: ['Medical-Surgical Nursing', 'Child Health / Pediatric Nursing', 'Mental Health & Psychiatric Nursing', 'Midwifery & OBG Nursing'],
    duoFee: '₹100 duo',
    soloFee: '₹60 individual',
    prelimDate: '3 November 2026 (Morning Prelims)',
    finaleDate: '3 November 2026 (Afternoon Stage Finals)',
    format: 'Complex clinical scenario-based preliminary round followed by interactive buzzer rounds on specialty nursing workflows and emergency obstetric triage.',
    description: 'Navigating the intricate nexus of medical-surgical care, pediatric milestones, psychopharmacological nursing, and labor room vigilance.',
    syllabusHighlights: [
      'Critical Care Nursing, Mechanical Ventilation & ICU Monitoring',
      'Obstetric Complications, Partograph Interpretation & Newborn Care',
      'Therapeutic Communication, Psych Emergencies & Pediatric Resuscitation'
    ],
    rules: [
      'Restricted to 3rd and 4th year B.Sc Nursing students.',
      'Teams of 2 or individual participation permitted.',
      'Tiebreaker rounds follow negative marking on clinical error traps.'
    ],
    rewards: {
      first: '₹7,000 + NEXUS Shield of Athena + Certificate',
      second: '₹4,500 + Certificate of Excellence',
      third: '₹2,500 + Certificate of Merit'
    }
  },
  {
    id: 'zenith',
    configKey: 'ZENITH',
    series: 'Nursing',
    codeName: 'ZENITH',
    greekTitle: 'The Apex of Wisdom',
    subtitle: 'Advanced Nursing Practice, Clinical Leadership & Research',
    targetAudience: 'Registered Nursing Officers & M.Sc Nursing Scholars',
    subjects: ['Advanced Critical Care Practice', 'Evidence-Based Nursing Research', 'Clinical Nursing Leadership', 'Infection Stewardship & Policy'],
    duoFee: '₹120 duo',
    soloFee: '₹80 individual',
    prelimDate: '4 November 2026 (Morning Prelims)',
    finaleDate: '4 November 2026 (Afternoon Stage Finals)',
    format: 'Evidence appraisal and advanced clinical decision dilemmas, followed by a live stage challenge judged by senior nursing faculty leadership.',
    description: 'The pinnacle arena for practicing nursing officers and postgraduate scholars. Celebrate evidence-based clinical leadership, research methodology, and complex patient outcomes.',
    syllabusHighlights: [
      'Advanced Hemodynamic Monitoring, Sepsis Bundles & ECMO Nursing',
      'Quantitative & Qualitative Research Design, Bio-statistics & Ethics',
      'Hospital Quality Accreditation (NABH/JCI), Nursing Administration & Leadership'
    ],
    rules: [
      'Open to Registered Nursing Officers (hospital staff) and M.Sc Nursing scholars.',
      'Valid Nursing Council registration or institutional employee/student ID mandatory.',
      'Scoring includes analytical case formulation and faculty viva rounds.'
    ],
    rewards: {
      first: '₹8,000 + ZENITH Apex Trophy + Certificates of Distinction',
      second: '₹5,000 + Certificate of Excellence',
      third: '₹2,500 + Certificate of Merit'
    }
  }
];
