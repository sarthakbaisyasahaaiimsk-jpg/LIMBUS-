import React from 'react';

export const GreekMeanderDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center my-6 opacity-60 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent flex-1" />
      <div className="px-4 flex items-center gap-2">
        <svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4AF37]">
          <path
            d="M0 7H8V1H16V13H4V10H13V4H10V7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M40 7H32V1H24V13H36V10H27V4H30V7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent flex-1" />
    </div>
  );
};

export const LaurelWreath: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21a9 9 0 0 1-9-9c0-3.3 1.8-6.2 4.5-7.7" />
      <path d="M12 21a9 9 0 0 0 9-9c0-3.3-1.8-6.2-4.5-7.7" />
      <path d="M8 8a3 3 0 0 1 3-3" />
      <path d="M16 8a3 3 0 0 0-3-3" />
      <path d="M7 14a4 4 0 0 1 3-3" />
      <path d="M17 14a4 4 0 0 0-3-3" />
      <path d="M9 19a4 4 0 0 1 2-2" />
      <path d="M15 19a4 4 0 0 0-2-2" />
    </svg>
  );
};

export const AsclepiusCaduceus: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central Staff */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      {/* Staff finial / orb */}
      <circle cx="12" cy="3" r="1.5" fill="currentColor" />
      {/* Asclepian Serpent coiled */}
      <path
        d="M8 7c2-2 6-2 7 0s-1 3-3 4-4 2-3 4 5 3 4 5-3 2-4 1"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    </svg>
  );
};

export const GreekTempleIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Pediment Roof */}
      <path d="M2 9L12 3L22 9" />
      <line x1="2" y1="9" x2="22" y2="9" />
      {/* Classical Columns */}
      <line x1="5" y1="9" x2="5" y2="19" />
      <line x1="9.6" y1="9" x2="9.6" y2="19" />
      <line x1="14.4" y1="9" x2="14.4" y2="19" />
      <line x1="19" y1="9" x2="19" y2="19" />
      {/* Base / Stylobate */}
      <line x1="2" y1="19" x2="22" y2="19" />
      <line x1="1" y1="21" x2="23" y2="21" />
    </svg>
  );
};
