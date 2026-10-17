import React from 'react';
import { Project, Specimen } from '../data/projects';

interface CaseStudyVillaSorensenProps {
  project: Project;
  onNavigate: (view: string) => void;
  onOpenSampleBox: () => void;
  onOpenCadModal: () => void;
  onSelectSpecimen: (specimen: Specimen) => void;
}

export const CaseStudyVillaSorensen: React.FC<CaseStudyVillaSorensenProps> = ({
  project,
  onNavigate,
  onOpenSampleBox,
  onOpenCadModal,
  onSelectSpecimen,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = (e: React.MouseEvent) => {
    e.preventDefault();
    const manifest = `ATELIER VANE — ARCHITECTURAL ARCHIVE
VILLA SØRENSEN — MONOGRAPH 2024 (FOLIO 04)
HELLERUP, THE SOUND, DENMARK
Full Scope Architectural Renovation & Spatial Curation

PATRONS: Sørensen Family
SCALE: 4,800 ft² (420 m²)
WATER VISTA SPAN: 14.2m
BESPOKE MILLWORK: 100%

CHAMBERS:
- Chamber 01: The Great Hall & Sunken Hearth (-450mm floor depression, 2.8T Gotland Limestone)
- Chamber 02: Monolithic Culinary Atelier (4,200mm Fluted Roman Travertine Island)
- Chamber 03: Primary Suite & Sound Vista (Acoustic Belgian Flax Enclosure)

CAD SPECIFICATION REF: DK-CPH-2024-88401
All rights reserved © Atelier Vane.
`;
    const blob = new Blob([manifest], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Atelier-Vane_Villa-Sorensen_Vector-Spec-Plate04A.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Archival Navigation & Breadcrumbs */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 pt-6 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#4d4540] font-label-sm text-xs uppercase tracking-widest">
            <button
              onClick={() => onNavigate('portfolio')}
              className="hover:text-[#000000] transition-colors flex items-center gap-1 focus:outline-none"
            >
              <span className="material-symbols-outlined text-[14px]">arrow_back</span>
              Selected Works
            </button>
            <span>/</span>
            <span className="text-[#1c1c18]">Folio 04</span>
            <span>/</span>
            <span className="text-[#914b31] tracking-widest font-semibold">Villa Sørensen</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrint}
              className="text-[#4d4540] hover:text-[#000000] flex items-center gap-1.5 font-label-sm text-xs uppercase tracking-widest transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-[15px]">print</span>
              Architectural Monograph
            </button>
            <span className="w-px h-3 bg-[#d0c4bd]"></span>
            <button
              onClick={onOpenSampleBox}
              className="flex items-center gap-1.5 text-[#914b31] font-label-sm text-xs uppercase tracking-widest hover:text-[#000000] transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-[15px]">inventory_2</span>
              Requisition Sample Box
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Title & Hero Visual Composite */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-6">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-[0.25em]">
                {project.location}
              </span>
              <span className="w-10 h-px bg-[#d0c4bd]"></span>
              <span className="font-label-sm text-xs text-[#4d4540] uppercase tracking-widest">
                {project.year}
              </span>
            </div>
            <h1 className="font-display-lg text-4xl sm:text-6xl lg:text-7xl text-[#000000] tracking-tight font-normal leading-[1.05]">
              {project.title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right pb-2">
            <p className="font-label-md text-xs uppercase tracking-widest text-[#4d4540]">
              {project.subtitle}
            </p>
            <p className="font-body-sm text-sm text-[#4d4540] italic mt-0.5">
              {project.scope}
            </p>
          </div>
        </div>

        {/* Asymmetric Grand Photo Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-9 relative group overflow-hidden bg-[#f0eee8] shadow-md">
            <div className="aspect-[16/10] w-full relative">
              <img
                src={project.heroImage}
                alt={project.heroAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-6 left-6 bg-[#fcf9f3]/90 backdrop-blur-md px-4 py-2 flex items-center gap-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#914b31]"></span>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#1c1c18]">
                  Chamber 00 — Exterior Sound Axis
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-[#f6f3ed] p-6 space-y-4 shadow-xs border border-[#d0c4bd]/40">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block">
                Site Coordinate
              </span>
              <div className="space-y-1">
                <p className="font-headline-sm text-xl text-[#000000] font-normal">
                  {project.coordinates.lat}
                </p>
                <p className="font-body-sm text-xs text-[#4d4540]">
                  {project.coordinates.lng} • {project.coordinates.place}
                </p>
              </div>
              <div className="pt-2 border-t border-[#d0c4bd]/40">
                <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block mb-1">
                  Orientation
                </span>
                <p className="font-body-sm text-xs text-[#1c1c18]">
                  {project.coordinates.orientation}
                </p>
              </div>
              <div className="pt-2 border-t border-[#d0c4bd]/40">
                <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block mb-1">
                  Sunlight Exposure
                </span>
                <p className="font-body-sm text-xs text-[#1c1c18]">
                  {project.coordinates.sunlight}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#f0eee8] aspect-square shadow-sm group border border-[#d0c4bd]/40">
              <img
                src={project.detailImage}
                alt={project.detailAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#000000]/80 via-[#000000]/40 to-transparent">
                <p className="font-label-sm text-xs uppercase tracking-wider text-[#ffffff]">
                  Detail • Tectonic Joint L-02
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metadata Ribbon (Full-width Structured Ledger) */}
      <section className="w-full bg-[#ebe8e2] py-6 mb-16 border-y border-[#d0c4bd]/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <div className="space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block">
                Folio
              </span>
              <p className="font-headline-sm text-lg text-[#000000]">{project.folio}</p>
            </div>
            <div className="space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block">
                Location
              </span>
              <p className="font-body-md text-sm text-[#1c1c18] font-medium">{project.locationShort}</p>
            </div>
            <div className="space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block">
                Scale
              </span>
              <p className="font-body-md text-sm text-[#1c1c18] font-medium">{project.scale}</p>
            </div>
            <div className="space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block">
                Timeline
              </span>
              <p className="font-body-md text-sm text-[#1c1c18] font-medium">{project.timeline}</p>
            </div>
            <div className="space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block">
                Scope
              </span>
              <p className="font-body-md text-sm text-[#1c1c18] font-medium">{project.scope}</p>
            </div>
            <div className="space-y-1">
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#4d4540] block">
                Patrons
              </span>
              <p className="font-body-md text-sm text-[#1c1c18] font-medium">{project.patrons}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curatorial Intention & Narrative Split */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0eee8] text-[#4d4540] font-label-sm text-xs uppercase tracking-widest border border-[#d0c4bd]/40">
              Curatorial Manifesto
            </div>
            <blockquote className="font-display-sm text-2xl sm:text-3xl text-[#000000] leading-snug font-normal">
              “{project.manifesto}”
            </blockquote>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-8 h-px bg-[#914b31]"></span>
              <p className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] font-semibold">
                {project.manifestoDoc}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 lg:pl-6 text-[#4d4540] font-body-lg text-base sm:text-lg leading-relaxed">
            {project.narrativeParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className="pt-4 grid grid-cols-3 gap-6 bg-[#f6f3ed] p-6 border border-[#d0c4bd]/40">
              {project.metrics.map((metric, i) => (
                <div key={i} className="space-y-1">
                  <span className="font-headline-md text-2xl md:text-3xl text-[#000000] block">
                    {metric.value}
                  </span>
                  <span className="font-label-sm text-[11px] text-[#4d4540] uppercase tracking-wider block">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tactile Ledger & Material Specimens Row */}
      <section className="w-full bg-[#f6f3ed] py-16 mb-20 border-y border-[#d0c4bd]/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-label-sm text-xs uppercase tracking-[0.2em] text-[#914b31] block mb-1">
                Pallet &amp; Specimen Ledger
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#000000]">
                Tectonic Materiality
              </h2>
            </div>
            <p className="font-body-sm text-sm text-[#4d4540] max-w-md leading-relaxed">
              Sourced from Baltic quarries, Danish master carpenters, and traditional Flemish weaving ateliers.
              Every substance responds to sound and marine humidity.
            </p>
          </div>

          {/* Specimen Tiles Grid (M-01 to M-05) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {project.specimens.map((specimen) => (
              <div
                key={specimen.code}
                onClick={() => onSelectSpecimen(specimen)}
                className="bg-[#fcf9f3] p-3 flex flex-col justify-between shadow-xs border border-[#d0c4bd]/50 group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="aspect-square w-full mb-3 overflow-hidden bg-[#f0eee8] relative">
                    <img
                      src={specimen.imageUrl}
                      alt={specimen.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 bg-[#fcf9f3] text-[#000000] font-label-sm text-xs px-2 py-0.5 uppercase tracking-widest border border-[#d0c4bd]/40">
                      {specimen.code}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-label-md text-xs uppercase tracking-wider text-[#000000] group-hover:text-[#914b31] transition-colors">
                      {specimen.name}
                    </p>
                    <p className="font-body-sm text-xs text-[#4d4540]">
                      {specimen.finish}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-[#d0c4bd]/30">
                  <span className="font-label-sm text-[10px] text-[#7e756f] uppercase tracking-widest block mb-0.5">
                    Application
                  </span>
                  <span className="font-body-sm text-xs text-[#1c1c18] line-clamp-1">
                    {specimen.application}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spatial Sequences / Photographic Narrative (3 Chambers) */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 pb-20 space-y-16">
        {/* Chamber Header */}
        <div className="flex items-center justify-between border-b border-[#d0c4bd]/40 pb-4">
          <div className="space-y-1">
            <span className="font-label-sm text-xs uppercase tracking-[0.2em] text-[#914b31]">
              Spatial Sequences
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#000000]">
              The Chamber Choreography
            </h2>
          </div>
          <span className="font-label-md text-xs uppercase tracking-widest text-[#4d4540]">
            Sequence 01 — 03
          </span>
        </div>

        {/* Chamber 01 */}
        {project.chambers[0] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative group shadow-md overflow-hidden bg-[#f0eee8] border border-[#d0c4bd]/40">
              <div className="aspect-[4/3] w-full">
                <img
                  src={project.chambers[0].imageUrl}
                  alt={project.chambers[0].imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#000000] text-[#ffffff] font-label-sm text-xs px-3 py-1 uppercase tracking-widest">
                {project.chambers[0].sequence}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              <div className="space-y-2">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block">
                  {project.chambers[0].tag}
                </span>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-[#000000]">
                  {project.chambers[0].title}
                </h3>
              </div>
              <p className="font-body-md text-sm md:text-base text-[#4d4540] leading-relaxed">
                {project.chambers[0].description}
              </p>
              {/* Technical Spec Box */}
              <div className="bg-[#f0eee8] p-5 space-y-3 border border-[#d0c4bd]/40">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#000000] font-semibold block">
                  Tectonic Specifications
                </span>
                <div className="space-y-2 text-xs font-body-sm text-[#4d4540]">
                  {project.chambers[0].specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-1.5 ${
                        i < project.chambers[0].specs.length - 1 ? 'border-b border-[#d0c4bd]/40' : ''
                      }`}
                    >
                      <span>{spec.label}</span>
                      <span className="text-[#1c1c18] font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chamber 02: Monolithic Culinary Atelier (Flipped) */}
        {project.chambers[1] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 lg:pr-4">
              <div className="space-y-2">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block">
                  {project.chambers[1].tag}
                </span>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-[#000000]">
                  {project.chambers[1].title}
                </h3>
              </div>
              <p className="font-body-md text-sm md:text-base text-[#4d4540] leading-relaxed">
                {project.chambers[1].description}
              </p>
              {/* Technical Spec Box */}
              <div className="bg-[#f0eee8] p-5 space-y-3 border border-[#d0c4bd]/40">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#000000] font-semibold block">
                  Tectonic Specifications
                </span>
                <div className="space-y-2 text-xs font-body-sm text-[#4d4540]">
                  {project.chambers[1].specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-1.5 ${
                        i < project.chambers[1].specs.length - 1 ? 'border-b border-[#d0c4bd]/40' : ''
                      }`}
                    >
                      <span>{spec.label}</span>
                      <span className="text-[#1c1c18] font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 relative group shadow-md overflow-hidden bg-[#f0eee8] border border-[#d0c4bd]/40">
              <div className="aspect-[4/3] w-full">
                <img
                  src={project.chambers[1].imageUrl}
                  alt={project.chambers[1].imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute top-4 right-4 bg-[#000000] text-[#ffffff] font-label-sm text-xs px-3 py-1 uppercase tracking-widest">
                {project.chambers[1].sequence}
              </div>
            </div>
          </div>
        )}

        {/* Chamber 03: Primary Suite & Sound Vista */}
        {project.chambers[2] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative group shadow-md overflow-hidden bg-[#f0eee8] border border-[#d0c4bd]/40">
              <div className="aspect-[4/3] w-full">
                <img
                  src={project.chambers[2].imageUrl}
                  alt={project.chambers[2].imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#000000] text-[#ffffff] font-label-sm text-xs px-3 py-1 uppercase tracking-widest">
                {project.chambers[2].sequence}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              <div className="space-y-2">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block">
                  {project.chambers[2].tag}
                </span>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-[#000000]">
                  {project.chambers[2].title}
                </h3>
              </div>
              <p className="font-body-md text-sm md:text-base text-[#4d4540] leading-relaxed">
                {project.chambers[2].description}
              </p>
              {/* Technical Spec Box */}
              <div className="bg-[#f0eee8] p-5 space-y-3 border border-[#d0c4bd]/40">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#000000] font-semibold block">
                  Tectonic Specifications
                </span>
                <div className="space-y-2 text-xs font-body-sm text-[#4d4540]">
                  {project.chambers[2].specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-1.5 ${
                        i < project.chambers[2].specs.length - 1 ? 'border-b border-[#d0c4bd]/40' : ''
                      }`}
                    >
                      <span>{spec.label}</span>
                      <span className="text-[#1c1c18] font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Planimetric Architectural Analysis (CAD & Schematics) */}
      <section className="w-full bg-[#000000] text-[#ffffff] py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-[#ffdbcf]">
                  Technical Schematics
                </span>
                <span className="w-12 h-px bg-[#7e756f]"></span>
                <span className="font-label-sm text-xs text-[#89827e] uppercase tracking-widest">
                  Plate 04-A
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#ffffff]">
                Planimetric Architectural Analysis
              </h2>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={onOpenCadModal}
                className="bg-[#fcf9f3] text-[#000000] font-label-md text-xs uppercase tracking-widest px-4 py-2 hover:bg-[#e5e2dc] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                Enlarge CAD Schematic
              </button>
              <button
                onClick={handleDownloadPdf}
                className="border border-[#7e756f] text-[#ffffff] font-label-md text-xs uppercase tracking-widest px-4 py-2 hover:bg-[#d0c4bd]/10 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                Vector Spec PDF (14.2 MB)
              </button>
            </div>
          </div>

          {/* Schematic Blueprint Canvas Area */}
          <div className="bg-[#e5e2dc]/5 border border-[#7e756f]/30 p-4 md:p-8 relative overflow-hidden">
            {/* Blueprint HUD Overlay Details */}
            <div className="flex flex-wrap items-center justify-between text-[#89827e] font-label-sm text-xs uppercase tracking-widest mb-6 border-b border-[#7e756f]/20 pb-4 gap-4">
              <div className="flex flex-wrap items-center gap-6">
                <span>Scale • 1:100 @ A1 Format</span>
                <span>Datum • +2.40m Baltic High Water</span>
                <span>Grid Axis • X: 1–8 / Y: A–F</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#ffdbcf] animate-pulse"></span>
                <span className="text-[#ffffff]">Architectural Spec Review Status: Approved Final</span>
              </div>
            </div>

            {/* Inline SVG Architectural Plan (Precision Vector Floorplan) */}
            <div className="w-full overflow-x-auto py-4">
              <div className="min-w-[760px] mx-auto relative flex justify-center">
                <svg
                  className="w-full max-w-4xl h-auto text-[#ffffff] stroke-current"
                  fill="none"
                  viewBox="0 0 900 480"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.06"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="900" height="480" fill="url(#archGrid)" stroke="none" />

                  {/* Building Outer Envelope & Perimeter Walls */}
                  <rect x="120" y="60" width="660" height="360" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <rect
                    x="128"
                    y="68"
                    width="644"
                    height="344"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="0.75"
                  />

                  {/* Chamber 01: Great Hall & Sunken Hearth (Left Zone) */}
                  <rect x="150" y="90" width="260" height="300" stroke="currentColor" strokeDasharray="4 2" strokeWidth="1.2" />
                  <rect x="180" y="140" width="180" height="180" stroke="currentColor" strokeWidth="1.5" />
                  <text
                    x="270"
                    y="210"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.9"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="10"
                    letterSpacing="2"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    01 • Sunken Hearth
                  </text>
                  <text
                    x="270"
                    y="230"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.5"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="8"
                    letterSpacing="1.5"
                    stroke="none"
                  >
                    −450 MM LVL
                  </text>

                  {/* Limestone Fireplace Monolith */}
                  <rect
                    x="130"
                    y="190"
                    width="40"
                    height="80"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="currentColor"
                    fillOpacity="0.15"
                  />
                  <line x1="130" y1="190" x2="170" y2="270" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
                  <line x1="170" y1="190" x2="130" y2="270" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />

                  {/* Chamber 02: Culinary Atelier (Center Zone) */}
                  <line x1="430" y1="60" x2="430" y2="420" stroke="currentColor" strokeWidth="1.5" />
                  <rect
                    x="470"
                    y="170"
                    width="90"
                    height="200"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <line x1="475" y1="170" x2="475" y2="370" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="480" y1="170" x2="480" y2="370" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="485" y1="170" x2="485" y2="370" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                  <text
                    x="515"
                    y="275"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.9"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="10"
                    letterSpacing="2"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    02 • Atelier Island
                  </text>

                  {/* Pocket wall storage spine */}
                  <rect x="580" y="80" width="24" height="280" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="580" y1="130" x2="604" y2="130" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="580" y1="190" x2="604" y2="190" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="580" y1="250" x2="604" y2="250" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="580" y1="310" x2="604" y2="310" stroke="currentColor" strokeWidth="0.8" />

                  {/* Chamber 03: Primary Suite & Sound Vista (Right Zone) */}
                  <line x1="620" y1="60" x2="620" y2="420" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="660" y="160" width="90" height="110" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="670" y="170" width="30" height="20" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
                  <rect x="710" y="170" width="30" height="20" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
                  <text
                    x="705"
                    y="310"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.9"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="10"
                    letterSpacing="2"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    03 • Suite Vista
                  </text>

                  {/* Water Terrace Vista Glazing Axis (Top) */}
                  <line x1="140" y1="60" x2="760" y2="60" stroke="#ffa586" strokeWidth="2.5" />
                  <text
                    x="450"
                    y="44"
                    textAnchor="middle"
                    fill="#ffa586"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9"
                    letterSpacing="3"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    Coastal Glazing Axis • Øresund Sea Vista
                  </text>

                  {/* Dimensioning Hash & Extension Lines */}
                  <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.75">
                    <line x1="120" y1="445" x2="780" y2="445" />
                    <line x1="120" y1="440" x2="120" y2="450" />
                    <line x1="430" y1="440" x2="430" y2="450" />
                    <line x1="620" y1="440" x2="620" y2="450" />
                    <line x1="780" y1="440" x2="780" y2="450" />
                  </g>
                  <text
                    x="275"
                    y="465"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.7"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9"
                    letterSpacing="1"
                    stroke="none"
                  >
                    12,400 mm
                  </text>
                  <text
                    x="525"
                    y="465"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.7"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9"
                    letterSpacing="1"
                    stroke="none"
                  >
                    7,600 mm
                  </text>
                  <text
                    x="700"
                    y="465"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.7"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9"
                    letterSpacing="1"
                    stroke="none"
                  >
                    8,200 mm
                  </text>
                </svg>
              </div>
            </div>

            {/* Schematic Key & Engineering Footnotes */}
            <div className="mt-6 pt-4 border-t border-[#7e756f]/20 grid grid-cols-1 md:grid-cols-4 gap-6 font-body-sm text-xs text-[#89827e]">
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#ffffff] block mb-1">
                  01 Structural Foundation
                </span>
                <p className="leading-relaxed">
                  Continuous cast-in-place low-carbon concrete slab anchored on bedrock substrate.
                </p>
              </div>
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#ffffff] block mb-1">
                  02 Thermal Mass
                </span>
                <p className="leading-relaxed">
                  Gotland limestone perimeter heating trenches maintaining constant 21°C interior climate.
                </p>
              </div>
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#ffffff] block mb-1">
                  03 Marine Envelope
                </span>
                <p className="leading-relaxed">
                  Class-4 marine zinc cladding with standing seam capillary breaks along seaside facade.
                </p>
              </div>
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#ffffff] block mb-1">
                  04 Verification Archive
                </span>
                <p className="leading-relaxed">
                  Building Commissioning Reg: DK-CPH-2024-88401. All specs certified for archival registry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patron Testimonial */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 pb-20">
        <div className="bg-[#f0eee8] p-8 md:p-12 lg:p-16 relative overflow-hidden border border-[#d0c4bd]/40">
          <div className="max-w-3xl space-y-6">
            <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-[#914b31] block">
              Patron Monograph
            </span>
            <blockquote className="font-headline-lg text-2xl md:text-3xl text-[#000000] italic leading-relaxed">
              {project.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-full bg-[#e5e2dc] flex items-center justify-center font-headline-sm text-lg text-[#000000]">
                {project.testimonial.initial}
              </div>
              <div>
                <p className="font-label-md text-xs uppercase tracking-wider text-[#000000]">
                  {project.testimonial.author}
                </p>
                <p className="font-body-sm text-xs text-[#4d4540]">
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          </div>
          {/* Architectural emblem watermark */}
          <div className="absolute -right-8 -bottom-8 pointer-events-none opacity-5 text-[#000000]">
            <span className="material-symbols-outlined text-[240px]">architecture</span>
          </div>
        </div>
      </section>

      {/* Next Folio Transition Bar */}
      {project.nextFolio && (
        <section className="w-full bg-[#ebe8e2] py-16 border-t border-[#d0c4bd]/40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-2">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block">
                  Next Case Study
                </span>
                <p className="font-label-md text-xs uppercase tracking-widest text-[#4d4540]">
                  {project.nextFolio.folio}
                </p>
                <h4 className="font-headline-lg text-2xl md:text-3xl text-[#000000]">
                  {project.nextFolio.title}
                </h4>
                <p className="font-body-sm text-xs text-[#4d4540]">
                  {project.nextFolio.location} • {project.nextFolio.year}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div
                  onClick={() => onNavigate(project.nextFolio!.id)}
                  className="aspect-[16/9] w-full overflow-hidden bg-[#f0eee8] relative group cursor-pointer shadow-xs border border-[#d0c4bd]/40"
                >
                  <img
                    src={project.nextFolio.imageUrl}
                    alt={project.nextFolio.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#000000]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end">
                <button
                  onClick={() => onNavigate(project.nextFolio!.id)}
                  className="inline-flex items-center justify-center gap-3 bg-[#000000] text-[#ffffff] px-6 py-3 font-label-md text-xs uppercase tracking-widest hover:bg-[#914b31] transition-all cursor-pointer shadow-sm"
                >
                  Proceed to Folio 05
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
