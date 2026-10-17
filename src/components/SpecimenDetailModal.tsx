import React from 'react';
import { Specimen } from '../data/projects';

interface SpecimenDetailModalProps {
  specimen: Specimen | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToSampleBox: (code: string) => void;
  isInSampleBox: boolean;
}

export const SpecimenDetailModal: React.FC<SpecimenDetailModalProps> = ({
  specimen,
  isOpen,
  onClose,
  onAddToSampleBox,
  isInSampleBox,
}) => {
  if (!isOpen || !specimen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/70 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#fcf9f3] border border-[#d0c4bd] shadow-2xl p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-[#d0c4bd]/50 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31]">
                Material Specimen Ledger
              </span>
              <span className="text-[#7e756f]">/</span>
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#1c1c18] font-bold">
                {specimen.code}
              </span>
            </div>
            <h3 className="font-headline-md text-2xl text-[#1c1c18] mt-1">
              {specimen.name}
            </h3>
            <p className="font-body-sm text-xs text-[#4d4540] italic">
              {specimen.finish}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#e5e2dc] text-[#4d4540] transition-colors"
            aria-label="Close specimen detail modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Specimen High-Res Visual */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#f0eee8] mb-6 relative group">
          <img
            src={specimen.imageUrl}
            alt={specimen.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-[#000000] text-[#ffffff] font-label-sm text-xs px-2.5 py-1 uppercase tracking-widest">
            {specimen.code}
          </div>
        </div>

        {/* Technical Data Ledger */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f0eee8] p-4 text-xs font-body-sm">
            <div>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#7e756f] block mb-1">
                Geographic Provenance
              </span>
              <span className="font-medium text-[#1c1c18]">{specimen.origin}</span>
            </div>
            <div>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#7e756f] block mb-1">
                Architectural Application
              </span>
              <span className="font-medium text-[#1c1c18]">{specimen.application}</span>
            </div>
            {specimen.porosity && (
              <div>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#7e756f] block mb-1">
                  Porosity / Material Density
                </span>
                <span className="font-medium text-[#1c1c18]">{specimen.porosity}</span>
              </div>
            )}
            {specimen.acousticCoeff && (
              <div>
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#7e756f] block mb-1">
                  Acoustic Absorption
                </span>
                <span className="font-medium text-[#1c1c18]">{specimen.acousticCoeff}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#1c1c18] font-semibold block">
              Tectonic Notes &amp; Behavior
            </span>
            <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
              {specimen.notes}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#d0c4bd]/40">
          <button
            onClick={() => onAddToSampleBox(specimen.code)}
            className={`flex-1 py-3 px-4 font-label-md text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
              isInSampleBox
                ? 'bg-[#f0eee8] border border-[#000000] text-[#000000]'
                : 'bg-[#000000] text-[#ffffff] hover:bg-[#914b31]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isInSampleBox ? 'check' : 'inventory_2'}
            </span>
            {isInSampleBox ? 'Included in Requisition Box' : 'Add to Requisition Box'}
          </button>
          <button
            onClick={onClose}
            className="py-3 px-5 border border-[#7e756f]/40 hover:bg-[#e5e2dc] text-[#1c1c18] font-label-md text-xs uppercase tracking-widest transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
