import React from 'react';

interface StudioViewProps {
  onOpenConsultation: () => void;
  onNavigate: (view: string) => void;
}

export const StudioView: React.FC<StudioViewProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 space-y-16">
      {/* Studio Hero */}
      <div className="border-b border-[#d0c4bd]/40 pb-12 space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-[0.25em]">
            Practice &amp; Ethos
          </span>
          <span className="w-8 h-px bg-[#d0c4bd]"></span>
          <span className="font-label-sm text-xs text-[#4d4540] uppercase tracking-widest">
            Est. Zurich 2012
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl text-[#000000] tracking-tight">
          Tectonic Discipline &amp; Spatial Permanence
        </h1>
        <p className="font-body-lg text-lg text-[#4d4540] max-w-3xl leading-relaxed">
          Atelier Vane is an international architecture and spatial curation practice.
          We reject transient fashion in favor of monolithic geometry, natural light orchestration, and tactile materiality that deepens in character over centuries.
        </p>
      </div>

      {/* Triad Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#f6f3ed] p-8 border border-[#d0c4bd]/40 space-y-4">
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-widest font-semibold block">
            01. Geological Monoliths
          </span>
          <h3 className="font-headline-md text-2xl text-[#000000]">
            Material Provenance
          </h3>
          <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
            Every stone slab, timber flitch, and bronze casting is individually selected at its source — Baltic quarries, managed Jutland forests, and Alpine kilns.
          </p>
        </div>

        <div className="bg-[#f6f3ed] p-8 border border-[#d0c4bd]/40 space-y-4">
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-widest font-semibold block">
            02. Acoustic Sanctuary
          </span>
          <h3 className="font-headline-md text-2xl text-[#000000]">
            The Architecture of Silence
          </h3>
          <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
            Space should cradle human thought. Through concealed rockwool cores, heavy linen acoustic drapery, and calibrated resonant timber fins, our rooms attenuate exterior turmoil.
          </p>
        </div>

        <div className="bg-[#f6f3ed] p-8 border border-[#d0c4bd]/40 space-y-4">
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-widest font-semibold block">
            03. Low-Rake Light
          </span>
          <h3 className="font-headline-md text-2xl text-[#000000]">
            Diurnal Rhythm
          </h3>
          <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
            We orient thresholds, sunken hearths, and reflective plaster reveals to capture the seasonal passage of dawn and dusk, generating profound atmospheric presence.
          </p>
        </div>
      </div>

      {/* Global Ateliers */}
      <div className="border-t border-[#d0c4bd]/40 pt-12 space-y-8">
        <div>
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-widest block mb-1">
            Studio Presence
          </span>
          <h2 className="font-headline-lg text-3xl text-[#000000]">
            Zurich • Paris • Kyoto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-2 border-[#000000] pl-6 space-y-2">
            <h4 className="font-headline-sm text-lg text-[#000000]">Zurich Head Atelier</h4>
            <p className="text-xs text-[#7e756f] uppercase font-label-sm">Talstrasse 14, 8001 Zürich</p>
            <p className="text-sm text-[#4d4540]">Primary design lab, materials vault, and structural engineering coordination.</p>
          </div>
          <div className="border-l-2 border-[#000000] pl-6 space-y-2">
            <h4 className="font-headline-sm text-lg text-[#000000]">Paris Research Studio</h4>
            <p className="text-xs text-[#7e756f] uppercase font-label-sm">Rue de Turenne, 75003 Paris</p>
            <p className="text-sm text-[#4d4540]">Curatorial archive, fine art liaison, and historic preservation studio.</p>
          </div>
          <div className="border-l-2 border-[#000000] pl-6 space-y-2">
            <h4 className="font-headline-sm text-lg text-[#000000]">Kyoto Joinery Pavilion</h4>
            <p className="text-xs text-[#7e756f] uppercase font-label-sm">Sakyo-ku, Kyoto 606-8414</p>
            <p className="text-sm text-[#4d4540]">Master timber joinery research, hand-rubbed urushi lacquering, and garden integration.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#f0eee8] p-8 md:p-12 border border-[#d0c4bd]/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-headline-md text-2xl text-[#000000]">
            Commission a Private Monograph
          </h3>
          <p className="text-sm text-[#4d4540] max-w-xl">
            We collaborate with six patrons annually to author enduring residential estates and cultural pavilions.
          </p>
        </div>
        <button
          onClick={onOpenConsultation}
          className="bg-[#000000] text-[#ffffff] px-6 py-3 font-label-md text-xs uppercase tracking-widest hover:bg-[#914b31] transition-colors whitespace-nowrap"
        >
          Initiate Consultation Protocol
        </button>
      </div>
    </div>
  );
};
