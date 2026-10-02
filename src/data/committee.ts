export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  category: 'Patronage' | 'Executive' | 'Operations' | 'Events' | 'Quizzes';
  contact?: string;
}

export const COMMITTEE_DATA: CommitteeMember[] = [
  // Patronage
  {
    id: 'patron',
    name: 'Prof. (Dr.) Arvind Sinha',
    designation: 'Patron & Executive Director',
    category: 'Patronage',
  },
  {
    id: 'dean',
    name: 'Prof. (Dr.) Biswabina Ray',
    designation: 'Dean (Academics)',
    category: 'Patronage',
  },
  {
    id: 'faculty-advisor',
    name: 'Prof. (Dr.) Indranil Chakrabarti',
    designation: 'Faculty Advisor',
    category: 'Patronage',
  },

  // Executive
  {
    id: 'org-sec',
    name: 'Sarthak Baisya Saha',
    designation: 'Organising Secretary',
    category: 'Executive',
  },
  {
    id: 'joint-sec-1',
    name: 'Ankit Kumar',
    designation: 'Joint Organising Secretary & Workshop Organiser',
    category: 'Executive',
  },
  {
    id: 'joint-sec-2',
    name: 'Gayathri Udayan',
    designation: 'Joint Organising Secretary',
    category: 'Executive',
  },
  {
    id: 'chief-organizer',
    name: 'Sharmeen Danial',
    designation: 'Chief Organizer & IT Head',
    category: 'Executive',
  },
  {
    id: 'chief-coord-1',
    name: 'Abhinash Narendra',
    designation: 'Chief Coordinator',
    category: 'Executive',
  },
  {
    id: 'chief-coord-2',
    name: 'Sanchita Kirtania',
    designation: 'Chief Coordinator',
    category: 'Executive',
  },
  {
    id: 'treasurer-1',
    name: 'Smarak Swaroop Pradhan',
    designation: 'Treasurer',
    category: 'Executive',
  },
  {
    id: 'treasurer-2',
    name: 'Aneesha Dasari',
    designation: 'Treasurer',
    category: 'Executive',
  },

  // Operations
  {
    id: 'pr',
    name: 'Pratik Raj',
    designation: 'Chief of Communication & PR',
    category: 'Operations',
  },

  // Events
/*{
    id: 'event-1',
    name: 'Vishal Soni',
    designation: 'Events Head',
    category: 'Events',
  },
  {
    id: 'event-2',
    name: 'Aritra Roy',
    designation: 'Events Head',
    category: 'Events',
  },
  {
    id: 'event-3',
    name: 'Binit Tudu',
    designation: 'Events Head',
    category: 'Events',
  },
  {
    id: 'event-4',
    name: 'Ashutosh Kumar',
    designation: 'Events Head',
    category: 'Events',
  },*/

  // Quizzes
  {
    id: 'quiz-1',
    name: 'Dipti Prasad Behera',
    designation: 'Medical Quiz Head',
    category: 'Quizzes',
  },
  {
    id: 'quiz-2',
    name: 'Rudra Narayan Pradhan',
    designation: 'Medical Quiz Head',
    category: 'Quizzes',
  },
  {
    id: 'quiz-3',
    name: 'Pulakit Biswal',
    designation: 'Medical Quiz Head',
    category: 'Quizzes',
  },
  {
    id: 'quiz-4',
    name: 'Moumita De',
    designation: 'Medical Quiz Head',
    category: 'Quizzes',
  },
];