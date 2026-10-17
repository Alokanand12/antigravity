import React from 'react';

interface ServicesViewProps {
  onOpenConsultation: () => void;
  onOpenSampleBox: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenConsultation,
  onOpenSampleBox,
}) => {
  const phases = [
    {
      number: 'Phase 01',
      title: 'Topographic & Diurnal Analysis',
      desc: '3D sunlight mapping, microclimate airflow testing, acoustic background profiling, and historical archival research of the site.',
    },
    {
      number: 'Phase 02',
      title: 'Tectonic Concept & Material Specimen Vault',
      desc: 'Production of physical 1:1 material sample boxes, curatorial narrative monograph, and spatial choreography sketches.',
    },
    {
      number: 'Phase 03',
      title: 'Planimetric CAD & Technical Schematics',
      desc: 'Precision architectural construction documentation, acoustic wall assemblies, radiant foundation engineering, and millwork details.',
    },
    {
      number: 'Phase 04',
      title: 'Artisanal Fabrication & Millwork Guilds',
      desc: 'Direct oversight with Danish woodworkers, Bavarian metal foundries, and Italian lime plasterers to craft bespoke architectural volumes.',
    },
    {
      number: 'Phase 05',
      title: 'Spatial Curation & Monograph Handover',
      desc: 'Art collection placement, tactile textile dressing, acoustic tuning, and delivery of a leather-bound archival monograph of the residence.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 space-y-16">
      {/* Services Header */}
      <div className="border-b border-[#d0c4bd]/40 pb-12 space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-[0.25em]">
            Commission Protocol
          </span>
          <span className="w-8 h-px bg-[#d0c4bd]"></span>
          <span className="font-label-sm text-xs text-[#4d4540] uppercase tracking-widest">
            Full-Scope Practice
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl text-[#000000] tracking-tight">
          Architectural Scope &amp; Curation Services
        </h1>
        <p className="font-body-lg text-lg text-[#4d4540] max-w-3xl leading-relaxed">
          From foundational earthworks and exterior envelopes to millimeter-grade bespoke joinery and custom tactile acoustics.
        </p>
      </div>

      {/* Services 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#f6f3ed] p-8 border border-[#d0c4bd]/40 space-y-4">
          <span className="material-symbols-outlined text-3xl text-[#914b31]">domain</span>
          <h3 className="font-headline-md text-2xl text-[#000000]">
            Architecture &amp; Masterplanning
          </h3>
          <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
            Full architectural design for private estates, oceanfront villas, mountain sanctuaries, and gallery pavilions. We lead zoning, permits, structural engineering, and site execution.
          </p>
        </div>

        <div className="bg-[#f6f3ed] p-8 border border-[#d0c4bd]/40 space-y-4">
          <span className="material-symbols-outlined text-3xl text-[#914b31]">handyman</span>
          <h3 className="font-headline-md text-2xl text-[#000000]">
            Bespoke Joinery &amp; Millwork
          </h3>
          <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
            Every drawer pull, pocket reveal, concealed appliance partition, and floating oak bedstead is engineered and hand-built specifically for the residence.
          </p>
        </div>

        <div className="bg-[#f6f3ed] p-8 border border-[#d0c4bd]/40 space-y-4">
          <span className="material-symbols-outlined text-3xl text-[#914b31]">palette</span>
          <h3 className="font-headline-md text-2xl text-[#000000]">
            Material Advisory &amp; Archive
          </h3>
          <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
            Direct quarry extraction rights and relationships with heritage European kilns ensure our patrons acquire rare stone, lime, bronze, and textile specimens.
          </p>
        </div>
      </div>

      {/* 5-Phase Methodology */}
      <div className="space-y-8">
        <div>
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-widest block mb-1">
            Methodology
          </span>
          <h2 className="font-headline-lg text-3xl text-[#000000]">
            The Five-Phase Commission Protocol
          </h2>
        </div>

        <div className="space-y-4">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-[#fcf9f3] p-6 border border-[#d0c4bd]/50 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#000000] transition-colors"
            >
              <div className="flex items-baseline gap-4 md:w-1/3">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] font-bold">
                  {phase.number}
                </span>
                <h4 className="font-headline-sm text-lg text-[#000000]">{phase.title}</h4>
              </div>
              <p className="font-body-sm text-sm text-[#4d4540] md:w-2/3 leading-relaxed">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-[#f0eee8] p-8 md:p-12 border border-[#d0c4bd]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-headline-md text-2xl text-[#000000]">
            Requisition a Physical Specimen Kit
          </h3>
          <p className="text-sm text-[#4d4540] mt-1">
            Experience our 100×100mm quarried stone, fumed oak, and raw Belgian linen samples.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onOpenSampleBox}
            className="border border-[#000000] text-[#000000] px-5 py-3 text-xs font-label-md uppercase tracking-widest hover:bg-[#e5e2dc] transition-colors"
          >
            Sample Box
          </button>
          <button
            onClick={onOpenConsultation}
            className="bg-[#000000] text-[#ffffff] px-6 py-3 text-xs font-label-md uppercase tracking-widest hover:bg-[#914b31] transition-colors"
          >
            Commission Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
