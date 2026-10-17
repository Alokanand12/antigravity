import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/projects';

interface PortfolioViewProps {
  onSelectProject: (projectId: string) => void;
  onOpenSampleBox: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onSelectProject,
  onOpenSampleBox,
}) => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Cultural' | 'Material Archive'>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
      {/* Portfolio Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#d0c4bd]/40 pb-8 mb-10 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-[0.25em]">
              Archival Ledger
            </span>
            <span className="w-8 h-px bg-[#d0c4bd]"></span>
            <span className="font-label-sm text-xs text-[#4d4540] uppercase tracking-widest">
              Folio 01 — 06
            </span>
          </div>
          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#000000] tracking-tight">
            Selected Works
          </h1>
          <p className="font-body-md text-sm md:text-base text-[#4d4540] max-w-xl leading-relaxed">
            A curated index of permanent residential estates, monolithic cultural pavilions, and spatial interior interventions worldwide.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-[#f0eee8] border border-[#d0c4bd]/50">
          {(['All', 'Residential'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 font-label-md text-xs uppercase tracking-wider transition-colors ${
                filter === cat
                  ? 'bg-[#ffffff] text-[#000000] shadow-xs font-semibold'
                  : 'text-[#4d4540] hover:text-[#000000]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className="group cursor-pointer flex flex-col justify-between bg-[#fcf9f3] border border-[#d0c4bd]/40 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div>
              {/* Image Frame */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#f0eee8] mb-4 relative">
                <img
                  src={project.heroImage}
                  alt={project.heroAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#000000] text-[#ffffff] font-label-sm text-xs px-2.5 py-1 uppercase tracking-widest">
                  {project.folio}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#fcf9f3]/90 backdrop-blur-xs px-3 py-1 text-xs font-label-sm uppercase tracking-wider text-[#1c1c18]">
                  {project.timeline}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-label-sm uppercase tracking-wider text-[#914b31]">
                  <span>{project.location}</span>
                  <span className="text-[#4d4540]">{project.scale}</span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#000000] group-hover:text-[#914b31] transition-colors">
                  {project.title}
                </h2>
                <p className="font-body-sm text-sm text-[#4d4540] line-clamp-2 leading-relaxed">
                  {project.manifesto}
                </p>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 mt-4 border-t border-[#d0c4bd]/30 flex items-center justify-between text-xs font-label-sm uppercase tracking-wider">
              <span className="text-[#4d4540]">{project.patrons}</span>
              <span className="text-[#000000] group-hover:text-[#914b31] flex items-center gap-1 font-semibold">
                Explore Monograph
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </article>
        ))}

        {/* Coming Soon Archive Preview Card */}
        <article
          onClick={onOpenSampleBox}
          className="group cursor-pointer flex flex-col justify-between bg-[#f6f3ed] border border-dashed border-[#7e756f]/40 p-6 transition-all duration-300 hover:border-[#000000]"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#914b31]">
              <span className="material-symbols-outlined text-[24px]">inventory_2</span>
              <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">
                Material Archive Case Study
              </span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#000000]">
              The Tactile Specimen Ledger
            </h3>
            <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
              Explore our proprietary collection of quarried Baltic Gotland limestone, fumed smoked oak, slaked calcite plaster, and Belgian unbleached flax linen.
            </p>
          </div>
          <div className="pt-6">
            <span className="inline-flex items-center gap-2 bg-[#000000] text-[#ffffff] px-4 py-2 text-xs font-label-md uppercase tracking-widest hover:bg-[#914b31] transition-colors">
              Requisition Physical Box
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};
