import React from 'react';
import { Project, Specimen } from '../data/projects';

interface CaseStudyTribecaLoftProps {
  project: Project;
  onNavigate: (view: string) => void;
  onOpenSampleBox: () => void;
  onSelectSpecimen: (specimen: Specimen) => void;
}

export const CaseStudyTribecaLoft: React.FC<CaseStudyTribecaLoftProps> = ({
  project,
  onNavigate,
  onOpenSampleBox,
  onSelectSpecimen,
}) => {
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
            <span className="text-[#1c1c18]">Folio 05</span>
            <span>/</span>
            <span className="text-[#914b31] tracking-widest font-semibold">The Tribeca Loft</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.print()}
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

        {/* Hero Visual Grid */}
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
                  Chamber 01 — Columnar Gallery Axis
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
                  Detail • Tectonic Bronze Hinge T-04
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metadata Ribbon */}
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

      {/* Curatorial Narrative */}
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

      {/* Tectonic Materiality */}
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
              Continuous hand-poured aggregate surfaces paired with Appalachian heartwood walnut.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Patron Monograph */}
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
                  Return to Folio 04
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
