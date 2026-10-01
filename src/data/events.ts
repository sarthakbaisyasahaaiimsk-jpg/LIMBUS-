export interface EventItem {
  id: string;
  configKey: string;
  name: string;
  greekTitle: string;
  subtitle: string;
  category: 'Flagship' | 'Clinical' | 'Diagnostic' | 'Simulation';
  date: string;
  time: string;
  venue: string;
  description: string;
  detailedOverview: string[];
  eligibility: string;
  teamSize: string;
  registrationFee: string;
  rounds: {
    roundNumber: number;
    title: string;
    description: string;
  }[];
  rules: string[];
  prizes: {
    first: string;
    second: string;
    third?: string;
  };
  contactPerson: {
    name: string;
    designation: string;
    phone: string;
    email: string;
  };
  highlights: string[];
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'treasure-hunt',
    configKey: 'TREASURE_HUNT',
    name: 'Treasure Hunt',
    greekTitle: 'The Labyrinth of Minos',
    subtitle: 'Campus-wide Cryptic Quest for the Aegis of Athena',
    category: 'Flagship',
    date: '2, 3, 4 Nov (Prelims) & 5 Nov (Finale)',
    time: 'Round dispatches 16:00 onwards; Grand Finale 10:30',
    venue: 'AIIMS Kalyani Central Courtyard & Academic Campus',
    description: 'An exhilarating 4-day intellectual odyssey across the AIIMS Kalyani campus. Teams unravel 7 rounds of cryptic medical riddles, anatomical coordinates, and puzzle fragments.',
    detailedOverview: [
      'Preliminary rounds on 2, 3, and 4 November test problem-solving, lateral thinking, and campus navigation under strict time constraints.',
      'Teams collect physical puzzle pieces across waypoints, decoding ancient Greek-ciphered medical clues.',
      'The top 8 survivor teams advance to the high-stakes Grand Finale on 5 November to claim the sacred Aegis of Athena.'
    ],
    eligibility: 'Medical, Nursing & Allied Healthcare undergraduate students.',
    teamSize: '4–5 Members per team (Inter-college teams permitted)',
    registrationFee: '₹200 per team',
    rounds: [
      {
        roundNumber: 1,
        title: 'The Oracle’s Whisper',
        description: 'Solve opening medical cipher cards to pinpoint your team’s initial campus quadrant.'
      },
      {
        roundNumber: 2,
        title: 'Anatomical Coordinates',
        description: 'Physical trail of clues hidden near key academic monuments and laboratory wings.'
      },
      {
        roundNumber: 3,
        title: 'The Caduceus Enigma',
        description: 'Lateral clinical puzzle solving to acquire vital structural map fragments.'
      },
      {
        roundNumber: 4,
        title: 'Labyrinth Stage I',
        description: 'Time-trial navigation round with mystery checkpoints and decoy scrolls.'
      },
      {
        roundNumber: 5,
        title: 'Sphinx’s Diagnostic Riddle',
        description: 'Rapid-fire clinical dilemma station required before unlocking the vault coordinate.'
      },
      {
        roundNumber: 6,
        title: 'The Trial of Athena',
        description: 'Assembling composite puzzle pieces to discover the secret finale chamber.'
      },
      {
        roundNumber: 7,
        title: 'The Grand Finale — Aegis Ascendant',
        description: 'Live finale on 5 November between the top qualifying teams for ultimate fest glory.'
      }
    ],
    rules: [
      'Teams must strictly consist of 4 to 5 registered students.',
      'Cross-college combinations are welcome; valid institutional photo IDs must be carried by all members.',
      'Use of bicycles, scooters, or motor vehicles on campus trails is strictly prohibited; all navigation is on foot.',
      'Tampering with clues, removing clues from designated locations, or intentionally misguiding other teams results in immediate disqualification.',
      'Decisions made by the LIMBUS 3.0 Treasure Hunt Organizing Core are final and binding.'
    ],
    prizes: {
      first: '₹12,000 + Aegis of Athena Trophy + Certificates of Excellence',
      second: '₹7,000 + Runner-up Trophy + Certificates',
      third: '₹3,000 + Certificates of Merit'
    },
    contactPerson: {
      name: 'Anirban Roy & Debanjan Sen',
      designation: 'Student Event Coordinators',
      phone: '+91 98301 24510',
      email: 'treasurehunt.limbus@aiimskalyani.edu.in'
    },
    highlights: ['7 Immersive Rounds', 'Physical Puzzle Fragments', 'Campus-Wide Labyrinth', '₹22,000+ Prize Pool']
  },
  {
    id: 'diagnostic-dilemma',
    configKey: 'DIAGNOSTIC_DILEMMA',
    name: 'Diagnostic Dilemma',
    greekTitle: 'The Riddle of the Sphinx',
    subtitle: 'Clinical Reasoning, Puzzles, Crosswords & Diagnostic Acumen',
    category: 'Diagnostic',
    date: '3 November 2026 (Prelims) & 4 November 2026 (Finals)',
    time: 'Prelims: 11:00 – 14:00 | Stage Finals: 16:00 – 18:00',
    venue: 'Lecture Hall 1 & Main Academic Auditorium',
    description: 'A battle of astute clinical minds. Navigate convoluted patient vignettes, clinical photograph anagrams, rare syndrome crosswords, and rapid differential pathways.',
    detailedOverview: [
      'Participants tackle progressive diagnostic tiers starting from emergency room presentations to uncommon multisystem clinical syndromes.',
      'Includes specialized segments: Electrocardiographic riddles, histopathology slide mysteries, and radiologic spotlight puzzles.',
      'Top 6 teams advance to the Grand Stage Buzzer Round with negative marking and audience interaction.'
    ],
    eligibility: 'MBBS students (All professional years) & Medical Interns.',
    teamSize: 'Teams of 2 or Individual (Solo) Participation',
    registrationFee: '₹50 per team (or solo entry)',
    rounds: [
      {
        roundNumber: 1,
        title: 'Written Vignette Crossword',
        description: 'Timed written round with clinical anagrams, rare eponyms, and diagnostic riddles.'
      },
      {
        roundNumber: 2,
        title: 'Rapid Differentials',
        description: 'Fast-paced elimination identifying the definitive diagnosis from cryptic investigation panels.'
      },
      {
        roundNumber: 3,
        title: 'Stage Buzzer Finale',
        description: 'Audio-visual case progression, spotter rounds, and reverse buzzer differentials on stage.'
      }
    ],
    rules: [
      'Participation can be as a duo (2 members) or individual (1 member).',
      'Electronic devices and medical reference apps are strictly prohibited in the exam/competition hall.',
      'Stage finals follow a rapid buzzer format with penalties for erroneous buzz-ins.',
      'In case of a tie, sudden-death clinical case spotters will decide the victor.'
    ],
    prizes: {
      first: '₹8,000 + Athena Laurel Trophy + Certificate',
      second: '₹5,000 + Certificate of Excellence',
      third: '₹2,500 + Certificate of Merit'
    },
    contactPerson: {
      name: 'Dr. Ritwik Ghosh & Sayantani Das',
      designation: 'Clinical Event Heads',
      phone: '+91 94332 18970',
      email: 'diagnostics.limbus@aiimskalyani.edu.in'
    },
    highlights: ['Vignette Crosswords', 'Histopath & Imaging Spotters', 'Stage Buzzer Arena', 'Open to All MBBS & Interns']
  },
  {
    id: 'clinical-case-presentation',
    configKey: 'CLINICAL_CASE',
    name: 'Clinical Case Presentation',
    greekTitle: 'Hermes’ Caduceus Colloquium',
    subtitle: 'Peer-Reviewed Abstract Submission & Grand Faculty Jury Defence',
    category: 'Clinical',
    date: '4 November (Jury Round) & 5 November (Valedictory Finals)',
    time: '10:00 – 13:30 (Day 3) | 14:00 – 16:00 (Day 4)',
    venue: 'Auditorium 2 & Main Academic Auditorium',
    description: 'Showcase rare clinical encounters, enigmatic diagnostic challenges, or innovative therapeutic milestones before an esteemed AIIMS Kalyani faculty panel.',
    detailedOverview: [
      'Two-stage evaluation: Blinded peer review of structured abstracts (Introduction, Case Description, Discussion & Conclusion) followed by on-stage presentation.',
      '8 minutes presentation + 4 minutes rigorous viva voce defence before AIIMS Kalyani senior clinical faculty.',
      'Categories include General Medicine & Subspecialties, Surgery & Allied, Pediatrics, OBG, and Emergency Medicine.'
    ],
    eligibility: 'MBBS Undergraduates & Medical Interns.',
    teamSize: 'Two-member team or Individual (Solo) presenter',
    registrationFee: '₹50 per entry',
    rounds: [
      {
        roundNumber: 1,
        title: 'Structured Abstract Screening',
        description: 'Submission of blinded 300-word structured clinical case abstract with signed patient consent/anonymity.'
      },
      {
        roundNumber: 2,
        title: 'Faculty Jury Oral Defence',
        description: 'PowerPoint presentation (maximum 12 slides) defending differential diagnoses and management protocols.'
      },
      {
        roundNumber: 3,
        title: 'Grand Valedictory Showcase',
        description: 'Top presentations showcased during the LIMBUS 3.0 Plenary Session.'
      }
    ],
    rules: [
      'Patient confidentiality must be strictly preserved; unmasked facial photos or identifiable information will cause disqualification.',
      'Presenter must be an undergraduate student or medical intern at the time of LIMBUS 3.0.',
      'Selected abstracts will be published in the official LIMBUS 3.0 Academic Proceedings with ISBN.',
      'Presentations must adhere strictly to the 8+4 minute timekeeper bell.'
    ],
    prizes: {
      first: '₹10,000 + Gold Medal + Publication Feature',
      second: '₹6,000 + Silver Medal + Certificate',
      third: '₹3,000 + Bronze Medal + Certificate'
    },
    contactPerson: {
      name: 'Dr. Sagnik Roy & Trishita Ghosh',
      designation: 'Academic Presentation Secretariat',
      phone: '+91 98741 02389',
      email: 'clinicalcases.limbus@aiimskalyani.edu.in'
    },
    highlights: ['AIIMS Faculty Jury', 'ISBN Proceedings Publication', 'Medal Presentations', 'Duo or Solo Entry']
  },
  {
    id: 'model-united-nations',
    configKey: 'MUN',
    name: 'Model United Nations (MUN)',
    greekTitle: 'Areopagus Diplomatic Council',
    subtitle: 'Global Health Diplomacy, Bioethics & Multilateral Negotiations',
    category: 'Simulation',
    date: '2 & 3 November 2026',
    time: 'Day 1: 11:30 – 16:30 | Day 2: 10:00 – 15:30',
    venue: 'Executive Conference Hall 1, Administrative Block',
    description: 'An academic diplomacy simulation. Step into the shoes of international diplomats and health ministers to debate pandemic treaties, healthcare inequity, and biomedical ethics.',
    detailedOverview: [
      'Simulated Committee: World Health Assembly (WHA) / UN Economic and Social Council (ECOSOC).',
      'Agenda: "Equitable Distribution of Next-Generation Biologics, Pandemic Preparedness, and Intellectual Property Waivers in Humanitarian Crises".',
      'Two days of moderated caucuses, unmoderated diplomatic lobbying, working paper drafting, and draft resolution voting.'
    ],
    eligibility: 'Open to all Undergraduate Medical, Nursing, and University students.',
    teamSize: 'Individual (Solo) Delegate Registration',
    registrationFee: '₹50 per delegate',
    rounds: [
      {
        roundNumber: 1,
        title: 'Country Allocation & Position Paper',
        description: 'Submission of 1-page diplomatic position paper representing the assigned member state’s foreign health policy.'
      },
      {
        roundNumber: 2,
        title: 'Caucus Debates & Formal Lobbying',
        description: 'General Speakers List (GSL), moderated caucuses on health security, and unmoderated bloc formulation.'
      },
      {
        roundNumber: 3,
        title: 'Resolution Drafting & Plenary Vote',
        description: 'Drafting international working papers, introducing amendments, and the final plenary roll-call vote.'
      }
    ],
    rules: [
      'UNA-USA rules of procedure will govern all committee proceedings.',
      'Western business attire or formal national dress is mandatory for all committee sessions.',
      'Delegates must uphold diplomatic decorum and zero-tolerance plagiarism in draft resolutions.',
      'Executive Board rulings on points of order and parliamentary procedure are absolute.'
    ],
    prizes: {
      first: 'Best Delegate: ₹7,000 + Diplomatic Gavel Trophy + Certificate',
      second: 'High Commendation: ₹4,000 + Certificate',
      third: 'Special Mention (2 Delegates): ₹1,500 each + Certificate'
    },
    contactPerson: {
      name: 'Rohan Chatterjee & Shreya Mukherjee',
      designation: 'Secretariat, LIMBUS MUN',
      phone: '+91 97488 66321',
      email: 'mun.limbus@aiimskalyani.edu.in'
    },
    highlights: ['World Health Assembly Simulation', 'Global Bioethics Focus', 'Diplomatic Gavel Trophy', 'Executive Board Guidance']
  }
];
