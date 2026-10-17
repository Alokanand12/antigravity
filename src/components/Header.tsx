import React, { useState } from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenSampleBox: () => void;
  onOpenConsultation: () => void;
  sampleCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSampleBox,
  onOpenConsultation,
  sampleCount = 5,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'studio', label: 'Studio & Philosophy' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact / Inquire' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#fcf9f3]/90 backdrop-blur-xl border-b border-[#d0c4bd]/30 shadow-[0_1px_8px_rgba(30,26,23,0.03)] transition-colors">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNav('portfolio')}
          className="flex items-baseline gap-2 group text-left cursor-pointer focus:outline-none"
        >
          <span className="font-headline-md text-xl md:text-2xl tracking-wider text-[#1c1c18] uppercase group-hover:text-[#914b31] transition-colors">
            Atelier Vane
          </span>
          <span className="font-label-sm text-[11px] text-[#4d4540] tracking-widest uppercase hidden sm:inline-block pl-2 border-l border-[#d0c4bd]/60">
            Architecture • Curation
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-Line, 4-5 links) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              (link.id === 'portfolio' && (currentView === 'portfolio' || currentView === 'villa-sorensen' || currentView === 'tribeca-loft')) ||
              currentView === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`font-label-md text-xs uppercase tracking-widest py-1.5 transition-all whitespace-nowrap shrink-0 border-b ${
                  isActive
                    ? 'text-[#1c1c18] border-[#000000] font-semibold'
                    : 'text-[#4d4540] border-transparent hover:text-[#1c1c18] hover:border-[#d0c4bd]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick sample kit trigger */}
          <button
            onClick={onOpenSampleBox}
            title="Open Specimen Sample Box"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-label-md uppercase tracking-wider text-[#914b31] hover:text-[#1c1c18] border border-[#d0c4bd]/60 px-3 py-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
            <span>Samples ({sampleCount})</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenConsultation}
            className="hidden lg:inline-flex items-center justify-center bg-[#000000] text-[#ffffff] font-label-md text-xs uppercase px-4 py-2 hover:bg-[#914b31] hover:text-[#ffffff] transition-all rounded-none tracking-widest whitespace-nowrap shrink-0 shadow-sm"
          >
            Inquire / Consult
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1c1c18] hover:bg-[#ebe8e2] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f3] border-b border-[#d0c4bd] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left font-label-md text-sm uppercase tracking-widest py-2 text-[#1c1c18] border-b border-[#f0eee8]"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSampleBox();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 border border-[#914b31] text-[#914b31] py-2.5 font-label-md text-xs uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-[16px]">inventory_2</span>
              Requisition Sample Box
            </button>
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#000000] text-[#ffffff] py-2.5 font-label-md text-xs uppercase tracking-widest"
            >
              Inquire / Consult
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
