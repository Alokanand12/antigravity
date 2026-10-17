import React, { useState } from 'react';
import { Specimen } from '../data/projects';

interface SampleBoxDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  specimens: Specimen[];
  selectedCodes: string[];
  onToggleCode: (code: string) => void;
}

export const SampleBoxDrawer: React.FC<SampleBoxDrawerProps> = ({
  isOpen,
  onClose,
  specimens,
  selectedCodes,
  onToggleCode,
}) => {
  const [patronName, setPatronName] = useState('');
  const [destination, setDestination] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `AV-CPH-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackingId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPatronName('');
    setDestination('');
    setProjectScope('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop Scrim */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Sliding Material Drawer Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-xl bg-[#fcf9f3] shadow-2xl p-6 md:p-10 flex flex-col justify-between overflow-y-auto transition-transform duration-300">
        <div>
          <div className="flex items-center justify-between border-b border-[#d0c4bd]/40 pb-4 mb-6">
            <div className="space-y-1">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31]">
                Material Archive Service
              </span>
              <h3 className="font-headline-md text-2xl text-[#1c1c18]">
                Requisition Tactile Box
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#e5e2dc] text-[#4d4540] hover:text-[#1c1c18] transition-colors rounded-none focus:outline-none"
              aria-label="Close sample requisition drawer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {!submitted ? (
            <>
              <p className="font-body-sm text-sm text-[#4d4540] mb-6 leading-relaxed">
                Curated physical specimen kits for architectural patrons, developers, and collectors.
                Delivered in a custom waxed timber case containing physical 100×100mm material samples from Villa Sørensen.
              </p>

              {/* Specimen Selection Checklist */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-[#1c1c18] font-semibold block">
                    Included Specimens in Case 04 ({selectedCodes.length}/{specimens.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedCodes.length === specimens.length) {
                        specimens.forEach((s) => onToggleCode(s.code));
                      } else {
                        specimens.forEach((s) => {
                          if (!selectedCodes.includes(s.code)) onToggleCode(s.code);
                        });
                      }
                    }}
                    className="text-xs font-label-sm uppercase tracking-wider text-[#914b31] hover:underline"
                  >
                    {selectedCodes.length === specimens.length ? 'Deselect All' : 'Select All'}
                  </button>
                </div>

                <div className="space-y-2">
                  {specimens.map((specimen) => {
                    const isSelected = selectedCodes.includes(specimen.code);
                    return (
                      <label
                        key={specimen.code}
                        onClick={(e) => {
                          e.preventDefault();
                          onToggleCode(specimen.code);
                        }}
                        className={`flex items-center justify-between p-3.5 cursor-pointer transition-all border ${
                          isSelected
                            ? 'bg-[#f0eee8] border-[#000000]/40 shadow-xs'
                            : 'bg-[#fcf9f3] border-[#d0c4bd]/40 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            readOnly
                            className="w-4 h-4 accent-[#000000] cursor-pointer"
                          />
                          <span className="font-body-sm text-sm text-[#1c1c18] font-medium">
                            {specimen.name} ({specimen.finish})
                          </span>
                        </div>
                        <span className="font-label-sm text-xs text-[#7e756f] uppercase tracking-wider whitespace-nowrap pl-2">
                          {specimen.code}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Requisition Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                    Patron / Studio Name *
                  </label>
                  <input
                    value={patronName}
                    onChange={(e) => setPatronName(e.target.value)}
                    className="w-full bg-[#f0eee8] border-b border-[#7e756f] focus:border-[#000000] outline-none px-3 py-2.5 font-body-sm text-sm text-[#1c1c18] placeholder:text-[#7e756f]/70"
                    placeholder="e.g. Studio O'Connor & Associates"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                    Dispatch Destination *
                  </label>
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#f0eee8] border-b border-[#7e756f] focus:border-[#000000] outline-none px-3 py-2.5 font-body-sm text-sm text-[#1c1c18] placeholder:text-[#7e756f]/70"
                    placeholder="Postal Address, City, Country"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                    Project Intent &amp; Commission Scope
                  </label>
                  <textarea
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                    className="w-full bg-[#f0eee8] border-b border-[#7e756f] focus:border-[#000000] outline-none px-3 py-2.5 font-body-sm text-sm text-[#1c1c18] placeholder:text-[#7e756f]/70 resize-none"
                    placeholder="Brief outline of upcoming residential or cultural project"
                    rows={2}
                  />
                </div>

                <div className="pt-4">
                  <button
                    disabled={selectedCodes.length === 0}
                    className="w-full bg-[#000000] text-[#ffffff] font-label-md text-xs uppercase tracking-widest py-3.5 hover:bg-[#914b31] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    type="submit"
                  >
                    Dispatch Specimen Box • Complementary Courier
                  </button>
                  <p className="font-label-sm text-[11px] text-center text-[#4d4540] mt-2 uppercase tracking-wider">
                    Inspected and sealed by Atelier Vane Zurich Vault
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="space-y-6 py-4">
              <div className="bg-[#f0eee8] p-6 border border-[#d0c4bd]/60 space-y-4">
                <div className="flex items-center gap-3 text-[#914b31]">
                  <span className="material-symbols-outlined text-[28px]">mark_email_read</span>
                  <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">
                    Requisition Manifest Confirmed
                  </span>
                </div>
                <h4 className="font-headline-sm text-xl text-[#1c1c18]">
                  Specimen Box Registered for Courier Dispatch
                </h4>
                <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
                  Thank you, <strong className="text-[#1c1c18]">{patronName}</strong>. Your custom-waxed
                  timber archival kit containing {selectedCodes.length} tactile specimen slabs is being prepared by our studio curator.
                </p>

                <div className="border-t border-[#d0c4bd]/60 pt-4 space-y-2 text-xs font-body-sm text-[#4d4540]">
                  <div className="flex justify-between">
                    <span className="uppercase tracking-wider font-label-sm">Tracking Monograph:</span>
                    <span className="font-mono text-[#1c1c18] font-bold">{trackingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase tracking-wider font-label-sm">Destination:</span>
                    <span className="text-[#1c1c18]">{destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase tracking-wider font-label-sm">Dispatch Hub:</span>
                    <span className="text-[#1c1c18]">Atelier Vane Zurich Vault</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase tracking-wider font-label-sm">Estimated Delivery:</span>
                    <span className="text-[#1c1c18]">3–5 Business Days (Insured Courier)</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 border border-[#000000] text-[#000000] font-label-md text-xs uppercase tracking-widest py-3 hover:bg-[#e5e2dc] transition-colors"
                >
                  Order Another Box
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-[#000000] text-[#ffffff] font-label-md text-xs uppercase tracking-widest py-3 hover:bg-[#914b31] transition-colors"
                >
                  Return to Monograph
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-[#d0c4bd]/30 text-center mt-6">
          <span className="font-label-sm text-xs text-[#4d4540] uppercase tracking-widest">
            Questions • materials@ateliervane.com
          </span>
        </div>
      </div>
    </div>
  );
};
