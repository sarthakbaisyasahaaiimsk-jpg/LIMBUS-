export interface RuleSection {
  id: string;
  title: string;
  greekEpithet: string;
  summary: string;
  rules: string[];
  keyNotice?: string;
}

export const RULES_DATA: RuleSection[] = [
  {
    id: 'general-quiz-rules',
    title: 'General Quiz Arena Regulations',
    greekEpithet: 'The Decrees of Athena',
    summary: 'Standard governing rules across MED×QUEST, MED×VOYAGE, MED×SUMMIT, CONQR, NEXUS, and ZENITH.',
    rules: [
      'Preliminary rounds will be conducted using the official LIMBUS 3.0 secure online testing platform with automated timer locks.',
      'Any use of secondary mobile devices, unauthorized browser tabs, smartwatches, or AI diagnostic aids during prelims results in immediate permanent ban.',
      'Stage finals follow structured timing: 30 seconds for direct questions, 15 seconds for passed questions, and 5 seconds for buzzer rounds.',
      'Negative marking applies in designated risk rounds (-5 or -10 points for incorrect answers). Buzzer false-starts incur penalty points.',
      'In the event of a tie at the end of stage rounds, a sudden-death clinical spotter sequence will be invoked.',
      'The Quizmaster and Faculty Jury decisions are absolute, final, and indisputable.'
    ],
    keyNotice: 'All quiz participants must report to the respective preliminary holding venues at least 30 minutes before official dispatch.'
  },
  {
    id: 'team-size-requirements',
    title: 'Team Composition & Squad Sizing',
    greekEpithet: 'The Phalanx Guilds',
    summary: 'Strict squad limits, cross-year combinations, and solo eligibility guidelines.',
    rules: [
      'Treasure Hunt: Teams must consist of minimum 4 and maximum 5 members. No solo or trio teams permitted due to safety and waypoint balance.',
      'Diagnostic Dilemma & Clinical Case Presentation: Teams may consist of 2 members (duo) or 1 member (individual solo).',
      'Medical Quizzes (MED×QUEST, MED×VOYAGE, MED×SUMMIT): Teams can be duo or individual. Both members must belong to the respective eligibility year bracket.',
      'Nursing Quizzes (CONQR, NEXUS, ZENITH): Both members in a duo must satisfy the specific academic year criteria (e.g., both 1st/2nd yr for CONQR).',
      'Model United Nations (MUN): Solo registration only (Single Delegate representing an assigned nation-state).',
      'Substitutions: Once registration closes, team member substitutions require 48 hours prior written request with valid justification.'
    ],
    keyNotice: 'Changing team composition midway through the fest without Organizing Secretary authorization will lead to squad disqualification.'
  },
  {
    id: 'inter-college-participation',
    title: 'Inter-College Participation & Identity Verification',
    greekEpithet: 'The Pan-Hellenic League',
    summary: 'Guidelines for visiting delegations from medical, nursing, and healthcare institutions across India.',
    rules: [
      'LIMBUS 3.0 warmly welcomes students and interns from all NMC/INC recognized medical, dental, and nursing institutions across India.',
      'Every participant must carry their official Institutional Photo ID Card throughout all 4 days on campus.',
      'For inter-college teams (members from different institutes), each member must upload their individual institutional proof during registration.',
      'Delegates require a digital or physical Bonafide Certificate / NOC from their college administration or Student Council for institutional awards.',
      'AIIMS Kalyani provides dedicated hospitality helpdesks, campus security clearance, and local transit assistance from Kalyani railway station.'
    ],
    keyNotice: 'Accommodation is available on prior booking basis for registered outstation delegations on a first-come, first-served basis.'
  },
  {
    id: 'payment-proof-requirements',
    title: 'Registration Verification & Payment Proofs',
    greekEpithet: 'The Treasury of Apollo',
    summary: 'Financial validation, UPI / transaction ID records, and digital entry pass generation.',
    rules: [
      'All payments must be completed via official AIIMS Kalyani LIMBUS UPI / Net Banking gateways embedded in the registration forms.',
      'The 12-digit UTR / Bank Transaction Reference Number must be entered accurately into the Google Form/Portal during submission.',
      'A clear, un-cropped screenshot displaying the Transaction ID, Date, Time, and Amount Paid must be uploaded.',
      'An automated registration verification ticket with unique QR Code will be issued to the registered email within 24–48 hours of payment reconciliation.',
      'Registration fees are strictly non-refundable once approved by the treasury committee, except in case of event cancellation by the institute.'
    ],
    keyNotice: 'Keep digital and printed copies of your payment receipt and QR entry pass ready at the LIMBUS Welcome Desk upon campus arrival.'
  },
  {
    id: 'intern-restrictions',
    title: 'Medical Intern & Resident Eligibility',
    greekEpithet: 'The Veteran Asclepiads',
    summary: 'Demarcation of eligible events for currently serving CRMI (Compulsory Rotatory Medical Interns).',
    rules: [
      'Interns are strictly barred from participating in pre-clinical and para-clinical quizzes (MED×QUEST and MED×VOYAGE) to ensure fair undergraduate competition.',
      'Interns are enthusiastically eligible to compete in MED×SUMMIT (Clinical Medical Quiz) and Clinical Case Presentation.',
      'Interns may also participate in Diagnostic Dilemma, Model United Nations (MUN), and Treasure Hunt.',
      'All 9 Hands-on Clinical Workshops (BLS, POCUS, BMS, Suturing, Laparoscopy, OBG, NRP, First Responder, Clinical Skills) are open to interns.',
      'Proof of current internship status (Internship ID card or completion certificate draft) must be furnished.'
    ],
    keyNotice: 'Postgraduate MD/MS residents are not eligible for undergraduate competitions, but are welcome to attend workshops and the ZENITH nursing arena if applicable.'
  },
  {
    id: 'event-specific-rules',
    title: 'Event-Specific Protocols & Code of Conduct',
    greekEpithet: 'The Oath of Hippocrates',
    summary: 'Clinical case abstract rules, campus safety guidelines, and academic sportsmanship.',
    rules: [
      'Clinical Case Abstract: Maximum 300 words structured text. Must obtain written informed consent for publication from the patient or legal guardian.',
      'Workshops: Sterile PPE, surgical scrubs or clean white aprons and stethoscopes are required for surgical and clinical simulation modules.',
      'Campus Decorum: AIIMS Kalyani is a zero-tolerance tobacco, alcohol, and drug-free institutional campus. Any violation results in expulsion and police intimation.',
      'Respect toward patient simulators, expensive laparoscopic trainers, and ultrasound probes is mandatory. Willful equipment damage will incur full replacement liability.',
      'Sportsmanship: In keeping with the spirit of the Odyssey, intellectual honesty and collegiate camaraderie must be upheld at all times.'
    ],
    keyNotice: 'Emergency contact numbers and first-aid medical booths are stationed across every active venue throughout the 4 days.'
  }
];
