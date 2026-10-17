import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="w-full bg-[#f6f3ed] text-[#1c1c18] mt-20 pt-16 pb-12 border-t border-[#d0c4bd]/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16">
          {/* Studio Profile */}
          <div className="md:col-span-5 flex flex-col justify-between pr-4 space-y-6">
            <div className="space-y-3">
              <span className="font-headline-md text-2xl uppercase tracking-wider text-[#1c1c18] block">
                Atelier Vane
              </span>
              <p className="font-body-sm text-sm text-[#4d4540] max-w-sm leading-relaxed">
                Spatial permanence, tectonic discipline, and interior compositions dedicated to architectural collectors and private patrons globally.
              </p>
            </div>
            <div>
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block">
                Zurich • Paris • Kyoto
              </span>
            </div>
          </div>

          {/* Folio */}
          <div className="md:col-span-2 space-y-4">
            <p className="font-label-md text-xs uppercase tracking-widest text-[#1c1c18]">Folio</p>
            <ul className="space-y-2.5 font-body-sm text-sm text-[#4d4540]">
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  Private Residences
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  Cultural Pavilions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  Material Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('villa-sorensen')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  Monograph 2024
                </button>
              </li>
            </ul>
          </div>

          {/* Practice */}
          <div className="md:col-span-2 space-y-4">
            <p className="font-label-md text-xs uppercase tracking-widest text-[#1c1c18]">Practice</p>
            <ul className="space-y-2.5 font-body-sm text-sm text-[#4d4540]">
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  The Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  Craft &amp; Joinery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  Commission Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#1c1c18] transition-colors text-left"
                >
                  Press Folio
                </button>
              </li>
            </ul>
          </div>

          {/* Correspondence */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-label-md text-xs uppercase tracking-widest text-[#1c1c18]">Correspondence</p>
            <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
              By private appointment only.
              <br />
              <a
                href="mailto:inquiries@ateliervane.com"
                className="hover:text-[#914b31] underline underline-offset-4 transition-colors"
              >
                inquiries@ateliervane.com
              </a>
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-block font-label-sm text-xs uppercase tracking-widest text-[#1c1c18] hover:text-[#914b31] underline underline-offset-8 transition-colors text-left"
              >
                Begin Consultation Protocol →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 border-t border-[#d0c4bd]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-[#4d4540]">
          <span className="font-label-sm text-xs uppercase tracking-widest">
            © 2024 Atelier Vane. All rights reserved.
          </span>
          <div className="flex items-center gap-6 font-label-sm text-xs uppercase tracking-widest">
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-[#1c1c18] transition-colors"
            >
              Legal Monograph
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#1c1c18] transition-colors"
            >
              Privacy Framework
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="hover:text-[#1c1c18] transition-colors"
            >
              Site Index
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
