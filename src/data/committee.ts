export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  departmentOrBatch: string;
  category: 'Patronage' | 'Executive' | 'Operations' | 'Events' | 'Quizzes' | 'Workshops';
  greekRole: string;
  bio?: string;
  contact?: string;
}

export const COMMITTEE_DATA: CommitteeMember[] = [
  // Faculty Leadership & Patronage
  {
    id: 'c-patron',
    name: 'Prof. (Dr.) Ramji Singh',
    designation: 'Patron & Executive Director',
    departmentOrBatch: 'AIIMS Kalyani Administration',
    category: 'Patronage',
    greekRole: 'Archon of the Odyssey',
    bio: 'Guiding visionary fostering academic distinction and world-class healthcare education at AIIMS Kalyani.'
  },
  {
    id: 'c-dean',
    name: 'Prof. (Dr.) Kalyan Goswami',
    designation: 'Dean (Academics)',
    departmentOrBatch: 'Academic Division, AIIMS Kalyani',
    category: 'Patronage',
    greekRole: 'High Priest of Episteme',
    bio: 'Leading curriculum innovation, research stewardship, and clinical rigor.'
  },
  {
    id: 'c-faculty-advisor',
    name: 'Dr. Sourav Sen',
    designation: 'Faculty Advisor & Organising Chairperson',
    departmentOrBatch: 'Faculty of Clinical Medicine',
    category: 'Patronage',
    greekRole: 'Mentor of the Argonauts',
    bio: 'Guiding the conceptualization and academic standards of LIMBUS 3.0.'
  },

  // Executive Secretariat
  {
    id: 'c-org-sec',
    name: 'Dr. Sagnik Roy',
    designation: 'Organising Secretary',
    departmentOrBatch: 'LIMBUS 3.0 Central Secretariat',
    category: 'Executive',
    greekRole: 'Chancellor of the Conclave',
    bio: 'Chief architect of academic scheduling, symposium orchestration, and institutional correspondence.',
    contact: 'orgsec.limbus@aiimskalyani.edu.in'
  },
  {
    id: 'c-joint-sec-1',
    name: 'Dr. Trishita Ghosh',
    designation: 'Joint Organising Secretary',
    departmentOrBatch: 'Secretariat & Academic Liaison',
    category: 'Executive',
    greekRole: 'Keeper of the Parchments',
    bio: 'Overseeing institutional invitations, faculty juries, and research abstract compliance.',
    contact: 'trishita.ghosh@aiimskalyani.edu.in'
  },
  {
    id: 'c-joint-sec-2',
    name: 'Dr. Animesh Maiti',
    designation: 'Joint Organising Secretary',
    departmentOrBatch: 'Operations & Academic Standards',
    category: 'Executive',
    greekRole: 'Steward of the Acropolis',
    bio: 'Coordinating academic event logistics, delegate accreditation, and certificate verification.'
  },
  {
    id: 'c-chief-organizer',
    name: 'Sarthak Rohan Saha',
    designation: 'Chief Organizer',
    departmentOrBatch: 'Student Council, AIIMS Kalyani',
    category: 'Executive',
    greekRole: 'Captain of the Odyssey',
    bio: 'Leading the student steering committee, overarching production, and multidisciplinary execution.',
    contact: 'chief.limbus@aiimskalyani.edu.in'
  },
  {
    id: 'c-treasurer',
    name: 'Souvik Mukherjee',
    designation: 'Treasurer & Finance Head',
    departmentOrBatch: 'Finance & Accounts Cell',
    category: 'Executive',
    greekRole: 'Master of the Royal Treasury',
    bio: 'Managing sponsorship funds, budget reconciliation, delegate fee processing, and prize allocations.'
  },

  // Operations & Communications
  {
    id: 'c-coord-1',
    name: 'Ananya Majumdar',
    designation: 'Chief Coordinator (Hospitality & Venue)',
    departmentOrBatch: 'Student Operations Core',
    category: 'Operations',
    greekRole: 'Warden of the Campus Gates',
    bio: 'Directing outstation accommodation, auditorium coordination, and delegate guidance.'
  },
  {
    id: 'c-coord-2',
    name: 'Rohan Chatterjee',
    designation: 'Chief Coordinator (Logistics & MUN)',
    departmentOrBatch: 'Student Operations Core',
    category: 'Operations',
    greekRole: 'Envoy of Areopagus',
    bio: 'Managing inter-college logistics, conference infrastructure, and diplomatic sessions.'
  },
  {
    id: 'c-coord-3',
    name: 'Shreya Mukherjee',
    designation: 'Chief Coordinator (Delegate Experience)',
    departmentOrBatch: 'Student Operations Core',
    category: 'Operations',
    greekRole: 'Herald of Athena',
    bio: 'Orchestrating smooth participant journeys, welcome helpdesks, and emergency response.'
  },
  {
    id: 'c-pr-1',
    name: 'Debosmita Banik',
    designation: 'Chief of Communication & PR',
    departmentOrBatch: 'Media & Public Relations Division',
    category: 'Operations',
    greekRole: 'Voice of the Oracle',
    bio: 'National outreach across 100+ medical colleges, institutional partnerships, and press liaison.'
  },
  {
    id: 'c-pr-2',
    name: 'Arnab Chakraborty',
    designation: 'Chief of Media & Creative Direction',
    departmentOrBatch: 'Media & Visual Arts Core',
    category: 'Operations',
    greekRole: 'Illuminator of the Odyssey',
    bio: 'Spearheading visual design, brochure publication, and official media broadcasting.'
  },

  // Event & Competition Heads
  {
    id: 'c-event-1',
    name: 'Ritwik Ghosh',
    designation: 'Head of Academic Competitions',
    departmentOrBatch: 'Clinical Competitions Wing',
    category: 'Events',
    greekRole: 'Arbiter of Trials',
    bio: 'Overseeing Diagnostic Dilemma, Case Presentations, and Treasure Hunt checkpoints.'
  },
  {
    id: 'c-event-2',
    name: 'Sayantani Das',
    designation: 'Associate Head of Competitions',
    departmentOrBatch: 'Academic Competitions Wing',
    category: 'Events',
    greekRole: 'Judge of Clinical Enigmas',
    bio: 'Crafting clinical case vignettes, crossword puzzles, and stage scoring algorithms.'
  },

  // Quiz Heads
  {
    id: 'c-quiz-1',
    name: 'Dr. Soumitra Das',
    designation: 'Chief Quizmaster & Medical Quiz Head',
    departmentOrBatch: 'Quiz Society of AIIMS Kalyani',
    category: 'Quizzes',
    greekRole: 'Hierophant of Delphi',
    bio: 'Curating MED×QUEST, MED×VOYAGE, and MED×SUMMIT clinical question vaults.'
  },
  {
    id: 'c-quiz-2',
    name: 'Pratyush Mondal',
    designation: 'Nursing Quiz Head & Arena Coordinator',
    departmentOrBatch: 'College of Nursing & Quizzing Cell',
    category: 'Quizzes',
    greekRole: 'Guardian of the Phalanx',
    bio: 'Directing the CONQR, NEXUS, and ZENITH nursing quiz competition streams.'
  },

  // Workshop Coordinators
  {
    id: 'c-ws-1',
    name: 'Dr. Priyodarshi Banerjee',
    designation: 'Chief Workshop Coordinator',
    departmentOrBatch: 'Clinical Simulation & Skills Centre',
    category: 'Workshops',
    greekRole: 'Craftsman of Chiron',
    bio: 'Coordinating high-fidelity mannequins, surgical trainer boxes, and clinical facilitators.'
  },
  {
    id: 'c-ws-2',
    name: 'Sneha Saha',
    designation: 'Workshop Logistics & Equipment Head',
    departmentOrBatch: 'Clinical Skills Volunteer Corps',
    category: 'Workshops',
    greekRole: 'Suturer of the Acropolis',
    bio: 'Ensuring suture kits, ultrasound phantoms, and CPR feedback sensors across all 9 workshops.'
  }
];
