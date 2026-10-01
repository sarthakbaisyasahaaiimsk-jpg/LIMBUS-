import React from 'react';
import { MapPin, Navigation, Phone, Mail, Train, Plane, Car, ExternalLink, HelpCircle } from 'lucide-react';
import { LaurelWreath, GreekMeanderDivider } from './GreekMotifs';

export const ContactLocation: React.FC = () => {
  const coordinators = [
    { role: 'Academic & Secretariat Helpdesk', name: 'Dr. Sagnik Roy', phone: '+91 98741 02389', email: 'orgsec.limbus@aiimskalyani.edu.in' },
    { role: 'Student Steering & Registrations', name: 'Sarthak Rohan Saha', phone: '+91 98301 24510', email: 'chief.limbus@aiimskalyani.edu.in' },
    { role: 'Hospitality & Delegate Housing', name: 'Ananya Majumdar', phone: '+91 97488 66321', email: 'hospitality.limbus@aiimskalyani.edu.in' },
    { role: 'Treasurer & Transaction Verification', name: 'Souvik Mukherjee', phone: '+91 94332 18970', email: 'finance.limbus@aiimskalyani.edu.in' },
  ];

  const googleMapsUrl = 'https://maps.google.com/?q=AIIMS+Kalyani+Basantapur+Saguna+West+Bengal+741245';

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080C14] text-[#E8DFD0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <LaurelWreath size={16} />
            <span>The Gates of Kalyani</span>
            <LaurelWreath size={16} className="rotate-180" />
          </div>

          <h2 className="font-serif-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EEDD] tracking-tight">
            Campus Location & Contact
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#C5A880]">
            Join us at the sovereign campus of AIIMS Kalyani in Nadia District, West Bengal.
          </p>

          <GreekMeanderDivider className="my-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          {/* Left Column: Official Campus Coordinates & Transit */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0D1424] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-cinzel text-xl font-bold text-[#F4EEDD]">
                    AIIMS Kalyani
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37]">
                    Autonomous Institute of National Importance
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-[#C5A880]">
                <p className="leading-relaxed text-[#E8DFD0]">
                  <strong>All India Institute of Medical Sciences, Kalyani</strong><br />
                  NH-34 Connector, Basantapur, Saguna,<br />
                  Kalyani, Nadia District, West Bengal, India — 741245.
                </p>
                <p className="text-xs text-[#A39682]">
                  Postal Code: 741245 · District: Nadia · State: West Bengal
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080C14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-all active:scale-95 shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-[#A39682]">
                  GPS: 22.9750° N, 88.4344° E
                </span>
              </div>
            </div>

            {/* Travel & Transit Guidelines */}
            <div className="bg-[#0D1424]/70 border border-[#D4AF37]/20 rounded-2xl p-6 space-y-4">
              <h4 className="font-serif-cinzel text-sm uppercase tracking-wider font-bold text-[#F4EEDD] flex items-center gap-2">
                <Car className="w-4 h-4 text-[#D4AF37]" />
                <span>Transit & Connectivity Guide</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#080C14]/60 p-3 rounded border border-[#D4AF37]/15">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold mb-1">
                    <Train className="w-4 h-4" />
                    <span>By Railway</span>
                  </div>
                  <p className="text-[#A39682]">
                    Kalyani Railway Station (Main Jn): ~5 km.<br />
                    Kalyani Silpanchal Station: ~3 km.<br />
                    Frequent suburban trains from Sealdah (SDAH), Kolkata.
                  </p>
                </div>

                <div className="bg-[#080C14]/60 p-3 rounded border border-[#D4AF37]/15">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold mb-1">
                    <Plane className="w-4 h-4" />
                    <span>By Air</span>
                  </div>
                  <p className="text-[#A39682]">
                    Netaji Subhash Chandra Bose Int'l Airport (CCU): ~45 km.<br />
                    Connected via Kalyani Expressway / NH-12.<br />
                    Direct pre-paid taxis & ride shares available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Coordinators & Helpdesk Directory */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0D1424] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37]">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-cinzel text-xl font-bold text-[#F4EEDD]">
                    Delegate Assistance & Helplines
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#A39682]">
                    Official Fest Coordinators
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {coordinators.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#080C14]/60 hover:bg-[#111A2E]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 rounded-xl transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block">
                          {c.role}
                        </span>
                        <span className="font-serif-cinzel text-sm font-semibold text-[#F4EEDD]">
                          {c.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-[#C5A880] mt-2 sm:mt-0">
                        <a
                          href={`tel:${c.phone}`}
                          className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{c.phone}</span>
                        </a>
                        <a
                          href={`mailto:${c.email}`}
                          className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span className="hidden sm:inline">Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Official Fest Email */}
              <div className="mt-6 pt-5 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#A39682]">
                <span>Official Fest Inquiries:</span>
                <a
                  href="mailto:limbus3.0@aiimskalyani.edu.in"
                  className="text-[#D4AF37] font-semibold hover:underline"
                >
                  limbus3.0@aiimskalyani.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
