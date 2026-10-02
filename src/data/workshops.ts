export interface WorkshopItem {
  id: string;
  configKey: string;
  name: string;
  greekTitle: string;
  tagline: string;
  category: 'Resuscitation' | 'Imaging' | 'Procedural' | 'Surgical' | 'Specialty' | 'Emergency';
  date: string;
  time: string;
  venue: string;
  fee: string;
  seatsPerBatch: number;
  description: string;
  learningObjectives: string[];
  keyProcedures: string[];
  //leadFaculty: string;
  prerequisites: string;
  certification: string;
  isPopular?: boolean;
}

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: 'bls',
    configKey: 'BLS',
    name: 'Basic Life Support (BLS)',
    greekTitle: 'Breath of Prometheus',
    tagline: 'High-Quality Resuscitation and Defibrillation',
    category: 'Resuscitation',
    date: '2 & 4 November 2026 (Day 1 & Day 3)',
    time: '10am – 1pm',
    venue: 'College of Nursing Labs, AIIMS Kalyani',
    fee: '₹250 / participant',
    seatsPerBatch: 30,
    description: 'Master the life-saving chain of survival with American Heart Association (AHA) certified guidelines on real like mannequins.',
    learningObjectives: [
      'Deliver high-quality chest compressions with real-time depth, rate, and recoil feedback.',
      'Operate automated external defibrillators (AED) with rapid rhythm recognition.',
      'Execute effective bag-valve-mask ventilation and two-rescuer coordinated CPR.',
      'Recognize and relieve severe foreign-body airway obstruction (choking).'
    ],
    keyProcedures: [
      'High-Performance Adult & Infant CPR',
      'Automated External Defibrillator (AED) Deployment',
      'Bag-Valve-Mask (BVM) Seal & Ventilation',
      'Heimlich Maneuver & Infant Back Slaps'
    ],
    //leadFaculty: 'Department of Anaesthesiology & Critical Care, AIIMS Kalyani',
    prerequisites: 'Open to all medical,non-medical, nursing, dental, and paramedical students & interns.',
    certification: 'Organisers issued Certificate',
    isPopular: true
  },
  {
    id: 'pocus',
    configKey: 'POCUS',
    name: 'Point of Care Ultrasound (POCUS)',
    greekTitle: 'The All-Seeing Aegis',
    tagline: 'Bedside Sonographic Mastery & Real-time Diagnostic Precision',
    category: 'Imaging',
    date: '3 & 5 November 2026',
    time: '2pm – 5pm',
    venue: 'College of Nursing, AIIMS Kalyani',
    fee: '₹250 / participant',
    seatsPerBatch: 30,
    description: 'Transform your physical examination with bedside ultrasound. Learn rapid bedside sonography protocols on live standardized models and phantoms.',
    learningObjectives: [
      'Master the complete Extended Focused Assessment with Sonography for Trauma (E-FAST) protocol.',
      'Acquire and interpret cardiac subxiphoid, parasternal, and apical 4-chamber windows.',
      'Perform ultrasound-guided peripheral and central vascular cannulation with needle visualization.',
      'Detect pneumothorax, pleural effusion, and pulmonary consolidation via lung ultrasound.'
    ],
    keyProcedures: [
      'E-FAST Protocol (Hepatorenal, Splenorenal, Pelvic, Cardiac, Pleural)',
      'Ultrasound-Guided Cannulation',
      //'Lung Ultrasound (Sliding Sign, B-Lines, Seashore Pattern)',
      //'Inferior Vena Cava (IVC) Collapsibility Assessment for Fluid Status'
    ],
    //leadFaculty: 'Department of Radiodiagnosis & Trauma Emergency Medicine',
    prerequisites: 'Open to all medical, nursing students & interns.',
    certification: 'Organisers issued Certificate',
    isPopular: true
  },
  {
    id: 'bms',
    configKey: 'BMS',
    name: 'Broad Medical Skills (BMS)',
    greekTitle: 'The Chiron Apprenticeship',
    tagline: 'Essential Bedside Invasive & Diagnostic Clinical Interventions',
    category: 'Procedural',
    date: '2 ,3 & 4 November 2026',
    time: '10am – 1pm',
    venue: 'College of Nursing Labs, AIIMS Kalyani',
    fee: '₹350 / participant',
    seatsPerBatch: 30,
    description: 'Comprehensive hands-on training across foundational invasive procedural skills required in emergency wards, ICUs, and general inpatient departments.',
    learningObjectives: [
      'Master aseptic catheterisation techniques across male and female urinary simulators.',
      'Execute endotracheal intubation utilizing standard Macintosh and video laryngoscopes.',
      'Perform sterile diagnostic lumbar puncture (LP) with cerebrospinal fluid manometry.',
      'Insert nasogastric (NG) tubes and Laryngeal Mask Airways (LMA) with correct anatomical positioning.'
    ],
    keyProcedures: [
      'Urethral Foley Catheterisation (Male & Female models)',
      'Direct & Video-Laryngoscopic Endotracheal Intubation',
      'Diagnostic & Therapeutic Lumbar Puncture',
      'Laryngeal Mask Airway (LMA) Supraglottic Insertion',
      'Nasogastric (NG) Tube Insertion & Placement Confirmation'
    ],
    //leadFaculty: 'Department of General Medicine & Emergency Medicine',
    prerequisites: 'Open to all medical & nursing students , interns & residents.',
    certification: 'Organisers issued Certificate',
    isPopular: true
  },
  {
    id: 'suturing',
    configKey: 'SUTURING',
    name: 'Basic Suturing & Knot Tying',
    greekTitle: 'The Craft of Daedalus',
    tagline: 'Surgical Instrument Ergonomics, Stitching Patterns & Wound Closure',
    category: 'Surgical',
    date: '3 , 4 & 5 November 2026',
    time: '2pm – 5pm',
    venue: 'Near MS Office Parking, AIIMS Kalyani',
    fee: '₹350 / participant',
    seatsPerBatch: 35,
    description: 'Build uncompromising surgical muscle memory. Master instrument grips, tissue handling, and diverse suture patterns on multilayered synthetic tissue models.',
    learningObjectives: [
      'Develop precise ergonomic control of needle holders, Adson forceps, and surgical scissors.',
      'Execute simple interrupted, continuous, horizontal mattress, and vertical mattress sutures.',
      'Practice subcuticular cosmetic wound closure and proper suture removal techniques.',
      'Master two-handed and one-handed surgical knots, instrument ties, and deep cavity secure knots.'
    ],
    keyProcedures: [
      'Simple Interrupted & Continuous Suturing',
      'Horizontal & Vertical Mattress Techniques',
      'Subcuticular Cosmetic Intradermal Closure',
      'Two-Handed, One-Handed & Instrument Knot Tying'
    ],
    //leadFaculty: 'Department of General Surgery, AIIMS Kalyani',
    prerequisites: 'All undergraduate medical, nursing , dental & allied healthcare students , interns & residents.',
    certification: 'Organisers Issued Certificate',
    isPopular: true
  },
  {
    id: 'laparoscopy',
    configKey: 'LAPAROSCOPY',
    name: 'Laparoscopy Simulation',
    greekTitle: 'Hephaestus’ Precision Forge',
    tagline: 'Minimally Invasive Surgery Fundamentals & Box Trainer Mastery',
    category: 'Surgical',
    date: '3 , 4 & 5 November 2026',
    time: '2pm – 5pm',
    venue: 'Near MS Office Parking, AIIMS Kalyani',
    fee: '₹250 / participant',
    seatsPerBatch: 30,
    description: 'Step into the modern world of keyhole surgery. Train your fulcrum effect adaptation, depth perception compensation, and precision intracorporeal manoeuvres.',
    learningObjectives: [
      'Adapt to the fulcrum effect and 2D monitor depth perception during laparoscopic manipulation.',
      'Master 0° and 30° laparoscopic camera navigation and horizon leveling.',
      'Execute standard FLS (Fundamentals of Laparoscopic Surgery) peg transfer and pattern cutting.',
      'Practice basic intracorporeal suturing and Roeder’s pre-tied slipknot placement.'
    ],
    keyProcedures: [
      'FLS Bimanual Peg Transfer Task',
      'Laparoscopic Precision Circle Cutting',
      '30-Degree Endoscopic Angle Orientation',
      'Laparoscopic Extracorporeal & Intracorporeal Knot Tying'
    ],
    //leadFaculty: 'Department of Minimal Access Surgery & Surgical Gastroenterology',
    prerequisites: 'All undergraduate medical, nursing , dental & allied healthcare students , interns & residents.',
    certification: 'Organisers Issued Certificate',
    isPopular: true
  },
  {
    id: 'obg',
    configKey: 'OBG',
    name: 'OBG Simulation Workshop',
    greekTitle: 'The Sanctuary of Hera',
    tagline: 'Labor Mechanics, Obstetric Emergencies & Perineal Repair',
    category: 'Specialty',
    date: '2 & 5 November 2026',
    time: '2pm – 5pm',
    venue: 'Obstetrics & Gynaecology Simulation Lab',
    fee: '₹350 / participant',
    seatsPerBatch: 30,
    description: 'Hands-on experiential training on high-fidelity birthing mannequins covering normal labor delivery, obstetric hemorrhage crises, and multi-layer episiotomy suturing.',
    learningObjectives: [
      'Navigate the cardinal movements of normal vertex delivery on pelvic birth simulators.',
      'Perform Active Management of the Third Stage of Labor (AMTSL) to avert hemorrhage.',
      'Simulate emergency management of Postpartum Hemorrhage (PPH) using uterine balloon tamponade.',
      'Perform anatomical infiltration and multi-layer surgical repair of mediolateral episiotomies.'
    ],
    keyProcedures: [
      'Conduct of Normal & Shoulder Dystocia Deliveries (McRoberts Maneuver)',
      'Active Management of Third Stage of Labor (AMTSL)',
      'Condom-Catheter / Bakri Balloon Uterine Tamponade',
      'Mediolateral Episiotomy Suture Repair (Vaginal mucosa, muscle & skin)'
    ],
    //leadFaculty: 'Department of Obstetrics & Gynaecology, AIIMS Kalyani',
    prerequisites: 'All undergraduate medical, nursing , dental & allied healthcare students , interns & residents.',
    certification: 'Organisers Issued Certificate'
  },
  {
    id: 'neonatal-resuscitation',
    configKey: 'NEONATAL_RESUSCITATION',
    name: 'Neonatal Resuscitation (NRP)',
    greekTitle: 'Apollo’s Dawn',
    tagline: 'The Golden Minute Protocol & Newborn Life-Saving Skills',
    category: 'Resuscitation',
    date: '4 & 5 November 2026',
    time: '10am – 1pm',
    venue: 'Lecture Theatre,AIIMS Kalyani',
    fee: '₹250 / participant',
    seatsPerBatch: 30,
    description: 'Every second counts in the first 60 seconds of human life. Train on NRP 8th Edition guidelines on premature and term infant resuscitation simulators.',
    learningObjectives: [
      'Execute the initial steps of newborn care (Warmth, Positioning, Clearing airway, Drying, Stimulating).',
      'Provide positive pressure ventilation (PPV) with self-inflating bag and T-piece resuscitator.',
      'Perform MR. SOPA corrective ventilation steps for inadequate chest expansion.',
      'Deliver coordinated newborn chest compressions (3:1 ratio) and umbilical vein catheterization drills.'
    ],
    keyProcedures: [
      'Initial Newborn Evaluation & Golden Minute Steps',
      'Bag & Mask Ventilation & MR. SOPA Corrective Algorithm',
      'Neonatal 3:1 Coordinated Chest Compressions with Two-Thumb Technique',
      'Emergency Umbilical Venous Catheter (UVC) Insertion Simulation'
    ],
    //leadFaculty: 'Department of Neonatology & Pediatrics, AIIMS Kalyani',
    prerequisites: 'All undergraduate medical, nursing , allied healthcare students , interns & residents.',
    certification: 'organisers issued Certificate'
  },
  {
    id: 'first-responder',
    configKey: 'FIRST_RESPONDER',
    name: 'First Responder Course',
    greekTitle: 'The Shield of Achilles',
    tagline: 'Pre-Hospital Triage, Hemorrhage Control & Mass Casualty Care',
    category: 'Emergency',
    date: '5 November 2026',
    time: '09:00 – 12:30',
    venue: 'Trauma & Emergency Care Annex',
    fee: '₹400 / participant',
    seatsPerBatch: 30,
    description: 'Bridging the golden hour gap before hospitalization. Learn combat-proven MARCH trauma protocols, active bleeding control, tourniquets, and spine immobilization.',
    learningObjectives: [
      'Implement the MARCH protocol (Massive hemorrhage, Airway, Respiration, Circulation, Hypothermia).',
      'Apply windlass combat tourniquets (CAT) and haemostatic gauze wound packing under time limits.',
      'Execute spine immobilization, cervical collar fitting, and coordinated log-roll manoeuvres.',
      'Apply START triage algorithm in multi-casualty disaster simulations.'
    ],
    keyProcedures: [
      'Combat Application Tourniquet (CAT) Application (Arm & Leg)',
      'Wound Packing & Pressure Dressing for Junctional Bleeds',
      'Rigid Cervical Collar Sizing & Log-Roll Technique',
      'START Triage Mass-Casualty Colour Tagging Drills'
    ],
  //leadFaculty: 'Department of Emergency Medicine & Trauma Surgery',
    prerequisites: 'Open to all students, faculty, healthcare workers & paramedical staff.',
    certification: 'Organisers Issued Certificate'
  },
  {
    id: 'essential-clinical-skills',
    configKey: 'ESSENTIAL_CLINICAL_SKILLS',
    name: 'Essential Clinical Skills',
    greekTitle: 'The Asclepian Mastery',
    tagline: 'Arterial Blood Gas, ICD Insertion, Defibrillation & ECG Mastery',
    category: 'Procedural',
    date: '2 November 2026',
    time: '9am – 1pm',
    venue: 'College of Nursing Labs, AIIMS Kalyani',
    fee: '₹250 / participant',
    seatsPerBatch: 30,
    description: 'Master advanced bedside emergency interventions: arterial puncture, chest tube placement, defibrillation/cardioversion, and ECG rhythm analysis.',
    learningObjectives: [
      'Perform sterile radial artery puncture for arterial blood gas (ABG) sampling and interpret acid-base disturbances.',
      'Simulate tube thoracostomy (Intercostal Drain / ICD insertion) on thoracic phantom models.',
      'Operate manual monophasic/biphasic defibrillators and execute synchronized cardioversion.',
      'Rapidly identify lethal arrhythmias: Ventricular Fibrillation, Pulseless VT, PEA, and Asystole.'
    ],
    keyProcedures: [
      'Radial Artery Puncture & Allen’s Test Simulation',
      'Intercostal Chest Drain (ICD) Insertion (Safe Triangle Technique)',
      'Manual Defibrillation & Synchronized Cardioversion on Arrhythmia Simulator',
      'Systematic 12-Lead ECG Analysis & STEMI Localization'
    ],
    //leadFaculty: 'Department of Pulmonary Medicine & Cardiology, AIIMS Kalyani',
    prerequisites: 'All undergraduate medical, nursing , dental & allied healthcare students , interns & residents.',
    certification: 'Organisers Issued Certificate'
  }
];
