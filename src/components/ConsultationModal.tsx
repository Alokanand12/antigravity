import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [typology, setTypology] = useState('Private Residence');
  const [region, setRegion] = useState('Scandinavia / Northern Europe');
  const [scale, setScale] = useState('300–600 m²');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `AV-CNS-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-[#000000]/70 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#fcf9f3] border border-[#d0c4bd] shadow-2xl p-6 md:p-8 z-10 max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-[#d0c4bd]/40 pb-4 mb-6">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31]">
              Private Commission Protocol
            </span>
            <h3 className="font-headline-md text-2xl text-[#1c1c18] mt-1">
              Architectural Consultation Intake
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#e5e2dc] text-[#4d4540] transition-colors"
            aria-label="Close consultation modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="font-body-sm text-xs text-[#4d4540] leading-relaxed">
              Atelier Vane accepts a limited quota of six architectural and spatial commissions per calendar year.
              Please provide preliminary parameters for review by our partners in Zurich and Copenhagen.
            </p>

            {/* Typology */}
            <div>
              <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-2">
                Project Typology
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-body-sm">
                {[
                  'Private Residence',
                  'Heritage Renovation',
                  'Cultural Pavilion',
                  'Spatial Curation',
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setTypology(type)}
                    className={`p-2.5 text-left border transition-all ${
                      typology === type
                        ? 'border-[#000000] bg-[#f0eee8] font-semibold text-[#1c1c18]'
                        : 'border-[#d0c4bd]/50 bg-[#fcf9f3] text-[#4d4540] hover:border-[#7e756f]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Region & Scale */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                  Site Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-[#f0eee8] border-b border-[#7e756f] p-2 text-xs font-body-sm text-[#1c1c18] outline-none"
                >
                  <option>Scandinavia / Northern Europe</option>
                  <option>Western Europe (Zurich / Paris / Alps)</option>
                  <option>North America (East &amp; West Coast)</option>
                  <option>Japan / East Asia</option>
                  <option>Other Global Territory</option>
                </select>
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                  Approximate Scale
                </label>
                <select
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}
                  className="w-full bg-[#f0eee8] border-b border-[#7e756f] p-2 text-xs font-body-sm text-[#1c1c18] outline-none"
                >
                  <option>Under 300 m² (Intimate Sanctuary)</option>
                  <option>300–600 m² (Estate / Full Residence)</option>
                  <option>600–1,200 m² (Compound / Pavilion)</option>
                  <option>1,200+ m² (Masterplan Program)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                  Patron / Representative Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Henrik Sørensen"
                  className="w-full bg-[#f0eee8] border-b border-[#7e756f] p-2 text-xs font-body-sm text-[#1c1c18] outline-none placeholder:text-[#7e756f]/70"
                />
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                  Direct Correspondence Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@domain.com"
                  className="w-full bg-[#f0eee8] border-b border-[#7e756f] p-2 text-xs font-body-sm text-[#1c1c18] outline-none placeholder:text-[#7e756f]/70"
                />
              </div>
            </div>

            <div>
              <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                Spatial Intent &amp; Site Brief
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe your vision, architectural landmarks, timeline expectations, or desired materiality..."
                className="w-full bg-[#f0eee8] border-b border-[#7e756f] p-2 text-xs font-body-sm text-[#1c1c18] outline-none placeholder:text-[#7e756f]/70 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#000000] text-[#ffffff] hover:bg-[#914b31] py-3 text-xs font-label-md uppercase tracking-widest transition-colors shadow-sm"
              >
                Submit Consultation Protocol
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6 py-4">
            <div className="bg-[#f0eee8] p-6 border border-[#d0c4bd]/60 space-y-4">
              <div className="flex items-center gap-2 text-[#914b31]">
                <span className="material-symbols-outlined text-[24px]">verified</span>
                <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">
                  Intake Dossier Received
                </span>
              </div>
              <h4 className="font-headline-sm text-xl text-[#1c1c18]">
                Protocol Reference: {refCode}
              </h4>
              <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
                Thank you, <strong className="text-[#1c1c18]">{name}</strong>. Your inquiry for a{' '}
                <strong className="text-[#1c1c18]">{typology}</strong> in{' '}
                <strong className="text-[#1c1c18]">{region}</strong> has been assigned to our Zurich
                curatorial desk. An architectural partner will respond within two business days.
              </p>
              <div className="pt-2 text-xs text-[#7e756f] border-t border-[#d0c4bd]/60 space-y-1">
                <div>Confirmation dispatched to: <span className="text-[#1c1c18]">{email}</span></div>
                <div>Status: Partner Review in Progress</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 border border-[#000000] py-2.5 text-xs font-label-md uppercase tracking-widest hover:bg-[#e5e2dc] transition-colors"
              >
                Submit Another Inquiry
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-[#000000] text-[#ffffff] py-2.5 text-xs font-label-md uppercase tracking-widest hover:bg-[#914b31] transition-colors"
              >
                Close Protocol
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
