export interface ScheduleEvent {
  id: string;
  time: string;
  title: string;
  greekTheme: string;
  type: 'Ceremony' | 'Competition' | 'Workshop' | 'Quiz' | 'Valedictory';
  venue: string;
  badgeText: string;
  description: string;
  relatedId?: string;
  relatedType?: 'event' | 'workshop' | 'quiz';
}

export interface DaySchedule {
  dayNumber: number;
  dateStr: string;
  dayName: string;
  themeTitle: string;
  themeKicker: string;
  events: ScheduleEvent[];
}

export const SCHEDULE_DAYS: DaySchedule[] = [
  {
    dayNumber: 1,
    dateStr: '2 November 2026',
    dayName: 'Monday',
    themeTitle: 'The Awakening & Foundation',
    themeKicker: 'Athena’s Inception',
    events: [
      {
        id: 'd1-1',
        time: '09:00 – 13:00',
        title: 'Workshop: Essential Clinical Skills (ABG, ICD, Defibrillation)',
        greekTheme: 'The Asclepian Mastery',
        type: 'Workshop',
        venue: 'MSN Lab, CON',
        badgeText: 'Advanced Critical Care',
        description: 'Radial artery puncture, safe-triangle chest drain placement, and manual cardioversion.',
        relatedId: 'essential-clinical-skills',
        relatedType: 'workshop'
      },
      {
        id: 'd1-2',
        time: '10:00 – 13:00',
        title: 'Workshop: Broad Medical Skills (BMS)',
        greekTheme: 'The Chiron Apprenticeship',
        type: 'Workshop',
        venue: 'Nursing Lab',
        badgeText: 'Hands-on Procedural',
        description: 'Intubation, urethral catheterisation, lumbar puncture, and LMA placement simulation.',
        relatedId: 'bms',
        relatedType: 'workshop'
      },
      {
        id: 'd1-3',
        time: '14:00 – 17:00',
        title: 'Workshop: Obstetrics & Gynaecology (OBG - Cohort A)',
        greekTheme: 'The Sanctuary of Hera',
        type: 'Workshop',
        venue: 'LT',
        badgeText: 'Maternal Care',
        description: 'Normal birth mechanics, shoulder dystocia management, AMTSL, and episiotomy suturing.',
        relatedId: 'obg',
        relatedType: 'workshop'
      },
      {
        id: 'd1-4',
        time: '14:00 – 17:00',
        title: 'Treasure Hunt: Round 1 & Clue Dispatch',
        greekTheme: 'The Oracle’s Whisper',
        type: 'Competition',
        venue: 'Yamuna Hall',
        badgeText: 'Campus-wide Quest',
        description: 'First clue packet release and time-trial sprint across campus coordinates.',
        relatedId: 'treasure-hunt',
        relatedType: 'event'
      },
      {
        id: 'd1-5',
        time: '14:00 – 17:00',
        title: 'CONQR Nursing Quiz Finals (1st & 2nd Year Nursing)',
        greekTheme: 'The Spartan Phalanx',
        type: 'Quiz',
        venue: 'Nursing Classroom',
        badgeText: 'Nursing Arena',
        description: 'Foundations of nursing, bedside care algorithms, applied anatomy, and emergency first aid finals.',
        relatedId: 'conqr',
        relatedType: 'quiz'
      }
    ]
  },
  {
    dayNumber: 2,
    dateStr: '3 November 2026',
    dayName: 'Tuesday',
    themeTitle: 'The Crucible of Differentials',
    themeKicker: 'The Labyrinth Trial',
    events: [
      {
        id: 'd2-1',
        time: '10:00 – 13:00',
        title: 'Workshop: Basic Life Support (BLS - Cohort A)',
        greekTheme: 'Breath of Prometheus',
        type: 'Workshop',
        venue: 'Nursing Skill Lab',
        badgeText: 'AHA Certified Drill',
        description: 'Hands-on chest compressions, AED operation, and choking relief with computerized QCPR mannequins.',
        relatedId: 'bls',
        relatedType: 'workshop'
      },
      {
        id: 'd2-2',
        time: '10:00 – 13:00',
        title: 'Workshop: First Responder Trauma Course (Cohort A)',
        greekTheme: 'The Shield of Achilles',
        type: 'Workshop',
        venue: 'LT',
        badgeText: 'Trauma Protocol',
        description: 'MARCH trauma resuscitation, CAT tourniquets, wound packing, and mass-casualty triage.',
        relatedId: 'first-responder',
        relatedType: 'workshop'
      },
      {
        id: 'd2-3',
        time: '10:00 – 13:00',
        title: 'Workshop: Broad Medical Skills (BMS)',
        greekTheme: 'The Chiron Apprenticeship',
        type: 'Workshop',
        venue: 'Nursing Lab',
        badgeText: 'Hands-on Procedural',
        description: 'Intubation, urethral catheterisation, lumbar puncture, and LMA placement simulation.',
        relatedId: 'bms',
        relatedType: 'workshop'
      },
      {
        id: 'd2-4',
        time: '10:00 – 13:00',
        title: 'Model United Nations (MUN) — Committee Session I',
        greekTheme: 'Areopagus Diplomatic Council',
        type: 'Competition',
        venue: 'Yamuna Hall & LT',
        badgeText: 'Diplomacy Simulation',
        description: 'Roll-call, agenda adoption, General Speakers List, and debate on global health pandemics & bioethics.',
        relatedId: 'model-united-nations',
        relatedType: 'event'
      },
      {
        id: 'd2-5',
        time: '14:00 – 17:00',
        title: 'Workshop: Laparoscopy & Minimal Access Surgery',
        greekTheme: 'Hephaestus’ Precision Forge',
        type: 'Workshop',
        venue: 'MS Office Area',
        badgeText: 'Keyhole Surgery',
        description: 'Pelvic box trainer simulation, bimanual coordination, FLS peg transfer, and intracorporeal knotting.',
        relatedId: 'laparoscopy',
        relatedType: 'workshop'
      },
      {
        id: 'd2-6',
        time: '14:00 – 17:00',
        title: 'Workshop: Point of Care Ultrasound (POCUS - Cohort A)',
        greekTheme: 'The All-Seeing Aegis',
        type: 'Workshop',
        venue: 'Nursing LT',
        badgeText: 'Imaging Masterclass',
        description: 'E-FAST trauma protocols, vascular ultrasound guidance, and lung pathology sonography.',
        relatedId: 'pocus',
        relatedType: 'workshop'
      },
      {
        id: 'd2-7',
        time: '14:00 – 17:00',
        title: 'Workshop: Basic Suturing & Knot Tying',
        greekTheme: 'The Craft of Daedalus',
        type: 'Workshop',
        venue: 'MS Office Area',
        badgeText: 'Surgical Skills',
        description: 'Instrument ergonomics, mattress and subcuticular sutures, and manual surgical knotting.',
        relatedId: 'suturing',
        relatedType: 'workshop'
      },
      {
        id: 'd2-8',
        time: '14:00 – 17:00',
        title: 'Diagnostic Dilemma: Preliminary Crossword & Vignettes',
        greekTheme: 'The Riddle of the Sphinx',
        type: 'Competition',
        venue: 'LT',
        badgeText: 'Clinical Elimination',
        description: 'Crosswords, anagrams, radiologic clues, and clinical case puzzles to select top stage finalists.',
        relatedId: 'diagnostic-dilemma',
        relatedType: 'event'
      },
      {
        id: 'd2-9',
        time: '14:00 – 17:00',
        title: 'MED×QUEST Stage Finals (1st-Year MBBS)',
        greekTheme: 'The Oracle of Delphi',
        type: 'Quiz',
        venue: 'LT',
        badgeText: 'Stage Quiz Finals',
        description: 'Top qualifying teams battle through Anatomy dissections, neurophysiology pathways, and biochemical enigmas.',
        relatedId: 'med-quest',
        relatedType: 'quiz'
      },
      {
        id: 'd2-10',
        time: '14:00 – 17:00',
        title: 'NEXUS Nursing Quiz Finals (3rd & 4th Year Nursing)',
        greekTheme: 'The Thread of Ariadne',
        type: 'Quiz',
        venue: 'Nursing Classroom',
        badgeText: 'Specialty Nursing',
        description: 'Med-Surg clinical challenges, pediatric milestones, psychiatric nursing, and OBG protocols.',
        relatedId: 'nexus',
        relatedType: 'quiz'
      },
      {
        id: 'd2-11',
        time: '14:00 – 17:00',
        title: 'Treasure Hunt: Round 2 — Cryptic Campus Riddles',
        greekTheme: 'The Caduceus Trail',
        type: 'Competition',
        venue: 'Yamuna Hall',
        badgeText: 'Sprint Round',
        description: 'Elimination round narrowing field to the top qualifying seeker squads.',
        relatedId: 'treasure-hunt',
        relatedType: 'event'
      }
    ]
  },
  {
    dayNumber: 3,
    dateStr: '4 November 2026',
    dayName: 'Wednesday',
    themeTitle: 'The Zenith of Clinical Acumen',
    themeKicker: 'The Olympus Summit',
    events: [
      {
        id: 'd3-1',
        time: '10:00 – 13:00',
        title: 'Workshop: Basic Life Support (BLS - Cohort B)',
        greekTheme: 'Breath of Prometheus',
        type: 'Workshop',
        venue: 'Nursing Skill Lab',
        badgeText: 'AHA Certified Drill',
        description: 'Encore cohort for adult, pediatric, infant CPR and AED rapid deployment certification.',
        relatedId: 'bls',
        relatedType: 'workshop'
      },
      {
        id: 'd3-2',
        time: '10:00 – 13:00',
        title: 'Workshop: Pediatric Emergency Care (Cohort A)',
        greekTheme: 'The Cradle of Asclepius',
        type: 'Workshop',
        venue: 'LT',
        badgeText: 'Pediatric Care',
        description: 'Pediatric assessment, emergency management, and hands-on newborn and child care simulation.',
        relatedId: 'pediatric',
        relatedType: 'workshop'
      },
      {
        id: 'd3-3',
        time: '10:00 – 13:00',
        title: 'Workshop: First Responder Trauma Course (Cohort B)',
        greekTheme: 'The Shield of Achilles',
        type: 'Workshop',
        venue: 'LT',
        badgeText: 'Trauma Protocol',
        description: 'Encore session for MARCH trauma resuscitation, CAT tourniquets, wound packing, and mass-casualty triage.',
        relatedId: 'first-responder',
        relatedType: 'workshop'
      },
      {
        id: 'd3-4',
        time: '10:00 – 13:00',
        title: 'Workshop: Broad Medical Skills (BMS)',
        greekTheme: 'The Chiron Apprenticeship',
        type: 'Workshop',
        venue: 'Nursing Lab',
        badgeText: 'Hands-on Procedural',
        description: 'Encore session for catheterisation, intubation, lumbar puncture, and airway devices.',
        relatedId: 'bms',
        relatedType: 'workshop'
      },
      {
        id: 'd3-5',
        time: '10:00 – 13:00',
        title: 'Clinical Case Presentation',
        greekTheme: 'Hermes’ Caduceus Colloquium',
        type: 'Competition',
        venue: 'LT',
        badgeText: 'Oral Presentation',
        description: 'Delegates present and defend clinical cases before the AIIMS Kalyani clinical faculty.',
        relatedId: 'clinical-case-presentation',
        relatedType: 'event'
      },
      {
        id: 'd3-6',
        time: '10:00 – 13:00',
        title: 'MED×VOYAGE Stage Finals (2nd-Year MBBS)',
        greekTheme: 'The Voyage of the Argo',
        type: 'Quiz',
        venue: 'LT',
        badgeText: 'Para-Clinical Finals',
        description: 'Pathology histospotters, antimicrobial mechanisms, and microbiological enigma buzzer rounds.',
        relatedId: 'med-voyage',
        relatedType: 'quiz'
      },
      {
        id: 'd3-7',
        time: '14:00 – 17:00',
        title: 'Workshop: Laparoscopy & Minimal Access Surgery',
        greekTheme: 'Hephaestus’ Precision Forge',
        type: 'Workshop',
        venue: 'MS Office Area',
        badgeText: 'Keyhole Surgery',
        description: 'Pelvic box trainer simulation, bimanual coordination, FLS peg transfer, and intracorporeal knotting.',
        relatedId: 'laparoscopy',
        relatedType: 'workshop'
      },
      {
        id: 'd3-8',
        time: '14:00 – 17:00',
        title: 'Workshop: Basic Suturing & Knot Tying',
        greekTheme: 'The Craft of Daedalus',
        type: 'Workshop',
        venue: 'MS Office Area',
        badgeText: 'Surgical Skills',
        description: 'Instrument ergonomics, mattress and subcuticular sutures, and manual surgical knotting.',
        relatedId: 'suturing',
        relatedType: 'workshop'
      },
      {
        id: 'd3-9',
        time: '14:00 – 17:00',
        title: 'Diagnostic Dilemma: Grand Stage Buzzer Round',
        greekTheme: 'The Sphinx’s Judgment',
        type: 'Competition',
        venue: 'LT',
        badgeText: 'Auditorium Buzzer',
        description: 'Final teams tackle progressive clinical reveals with sudden-death risk buzzers.',
        relatedId: 'diagnostic-dilemma',
        relatedType: 'event'
      },
      {
        id: 'd3-10',
        time: '14:00 – 17:00',
        title: 'ZENITH Advanced Nursing Quiz Finals (Officers & MSc)',
        greekTheme: 'The Apex of Wisdom',
        type: 'Quiz',
        venue: 'Nursing Classroom',
        badgeText: 'Postgraduate Arena',
        description: 'Advanced critical care nursing, hemodynamic monitoring, infection control, and clinical research.',
        relatedId: 'zenith',
        relatedType: 'quiz'
      },
      {
        id: 'd3-11',
        time: '14:00 – 17:00',
        title: 'Treasure Hunt: Grand Finale — Aegis of Athena',
        greekTheme: 'Aegis Ascendant',
        type: 'Competition',
        venue: 'Yamuna Hall',
        badgeText: 'Grand Championship',
        description: 'The final showdown between top surviving squads to discover the Aegis of Athena.',
        relatedId: 'treasure-hunt',
        relatedType: 'event'
      }
    ]
  },
  {
    dayNumber: 4,
    dateStr: '5 November 2026',
    dayName: 'Thursday',
    themeTitle: 'The Culmination & Triumph',
    themeKicker: 'Athena’s Triumph',
    events: [
      {
        id: 'd4-1',
        time: '10:00 – 13:00',
        title: 'Workshop: Pediatric Emergency Care (Cohort B)',
        greekTheme: 'The Cradle of Asclepius',
        type: 'Workshop',
        venue: 'LT',
        badgeText: 'Pediatric Care',
        description: 'Second run of pediatric assessment, emergency management, and child care simulation.',
        relatedId: 'pediatric',
        relatedType: 'workshop'
      },
      {
        id: 'd4-2',
        time: '10:00 – 13:00',
        title: 'Model United Nations (MUN) — Committee Session II & Resolutions',
        greekTheme: 'The Areopagus Vote',
        type: 'Competition',
        venue: 'Yamuna Hall & LT',
        badgeText: 'Draft Resolution',
        description: 'Drafting international healthcare treaties, treaty amendments, voting procedures, and closing gavels.',
        relatedId: 'model-united-nations',
        relatedType: 'event'
      },
      {
        id: 'd4-3',
        time: '14:00 – 17:00',
        title: 'Workshop: Laparoscopy & Minimal Access Surgery',
        greekTheme: 'Hephaestus’ Precision Forge',
        type: 'Workshop',
        venue: 'MS Office Area',
        badgeText: 'Keyhole Surgery',
        description: 'Pelvic box trainer simulation, bimanual coordination, FLS peg transfer, and intracorporeal knotting.',
        relatedId: 'laparoscopy',
        relatedType: 'workshop'
      },
      {
        id: 'd4-4',
        time: '14:00 – 17:00',
        title: 'Workshop: Point of Care Ultrasound (POCUS - Cohort B)',
        greekTheme: 'The All-Seeing Aegis',
        type: 'Workshop',
        venue: 'Nursing LT',
        badgeText: 'Imaging Masterclass',
        description: 'Second run of E-FAST trauma protocols, vascular ultrasound guidance, and lung pathology sonography.',
        relatedId: 'pocus',
        relatedType: 'workshop'
      },
      {
        id: 'd4-5',
        time: '14:00 – 17:00',
        title: 'Workshop: Obstetrics & Gynaecology (OBG - Cohort B)',
        greekTheme: 'The Sanctuary of Hera',
        type: 'Workshop',
        venue: 'LT',
        badgeText: 'Maternal Care',
        description: 'Second run of birthing simulation, PPH balloon tamponade, and perineal repair.',
        relatedId: 'obg',
        relatedType: 'workshop'
      },
      {
        id: 'd4-6',
        time: '14:00 – 17:00',
        title: 'Workshop: Basic Suturing & Knot Tying',
        greekTheme: 'The Craft of Daedalus',
        type: 'Workshop',
        venue: 'MS Office Area',
        badgeText: 'Surgical Skills',
        description: 'Instrument ergonomics, mattress and subcuticular sutures, and manual surgical knotting.',
        relatedId: 'suturing',
        relatedType: 'workshop'
      },
      {
        id: 'd4-7',
        time: '14:00 – 17:00',
        title: 'MED×SUMMIT Grand Stage Finale (3rd/Final Yr & Interns)',
        greekTheme: 'Mount Olympus Grand Conclave',
        type: 'Quiz',
        venue: 'LT',
        badgeText: 'Flagship Clinical Arena',
        description: 'The premier medical quiz showdown. Real-time emergency algorithms, ECG crises, and clinical dilemmas.',
        relatedId: 'med-summit',
        relatedType: 'quiz'
      }
    ]
  }
];