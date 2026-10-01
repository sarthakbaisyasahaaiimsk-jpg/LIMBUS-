/**
 * Centralized Registration Configuration for LIMBUS 3.0
 * Reads environment variables configured via VITE_REG_*
 * If missing, gracefully renders "Registration opening soon"
 */

export interface RegistrationInfo {
  url: string | null;
  isAvailable: boolean;
  statusText: string;
}

export const REGISTRATION_CONFIG: Record<string, string | undefined> = {
  // Flagship Academic Events
  TREASURE_HUNT: import.meta.env.VITE_REG_TREASURE_HUNT,
  DIAGNOSTIC_DILEMMA: import.meta.env.VITE_REG_DIAGNOSTIC_DILEMMA,
  CLINICAL_CASE: import.meta.env.VITE_REG_CLINICAL_CASE,
  MUN: import.meta.env.VITE_REG_MUN,

  // Medical Quizzes
  MED_QUEST: import.meta.env.VITE_REG_MED_QUEST,
  MED_VOYAGE: import.meta.env.VITE_REG_MED_VOYAGE,
  MED_SUMMIT: import.meta.env.VITE_REG_MED_SUMMIT,

  // Nursing Quizzes
  CONQR: import.meta.env.VITE_REG_CONQR,
  NEXUS: import.meta.env.VITE_REG_NEXUS,
  ZENITH: import.meta.env.VITE_REG_ZENITH,

  // Clinical Workshops
  BLS: import.meta.env.VITE_REG_BLS,
  POCUS: import.meta.env.VITE_REG_POCUS,
  BMS: import.meta.env.VITE_REG_BMS,
  SUTURING: import.meta.env.VITE_REG_SUTURING,
  LAPAROSCOPY: import.meta.env.VITE_REG_LAPAROSCOPY,
  OBG: import.meta.env.VITE_REG_OBG,
  NEONATAL_RESUSCITATION: import.meta.env.VITE_REG_NEONATAL_RESUSCITATION,
  FIRST_RESPONDER: import.meta.env.VITE_REG_FIRST_RESPONDER,
  ESSENTIAL_CLINICAL_SKILLS: import.meta.env.VITE_REG_ESSENTIAL_CLINICAL_SKILLS,
};

export function getRegistrationInfo(eventKey: string): RegistrationInfo {
  const url = REGISTRATION_CONFIG[eventKey]?.trim();
  const isAvailable = Boolean(url && url.length > 5 && (url.startsWith('http://') || url.startsWith('https://')));

  return {
    url: isAvailable ? (url as string) : null,
    isAvailable,
    statusText: isAvailable ? 'Register Now' : 'Registration opening soon',
  };
}
