import React, { useState } from 'react';

interface ContactViewProps {
  onOpenConsultation: () => void;
  onOpenSampleBox: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onOpenConsultation,
  onOpenSampleBox,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('New Project Commission Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 space-y-16">
      {/* Contact Header */}
      <div className="border-b border-[#d0c4bd]/40 pb-12 space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-xs text-[#914b31] uppercase tracking-[0.25em]">
            Correspondence
          </span>
          <span className="w-8 h-px bg-[#d0c4bd]"></span>
          <span className="font-label-sm text-xs text-[#4d4540] uppercase tracking-widest">
            Private Appointment Only
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl text-[#000000] tracking-tight">
          Connect with the Atelier
        </h1>
        <p className="font-body-lg text-lg text-[#4d4540] max-w-2xl leading-relaxed">
          We welcome confidential dialogues regarding upcoming residential commissions, cultural pavilions, and institutional acquisitions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Studio Locations */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <div className="border-b border-[#d0c4bd]/30 pb-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block mb-1">
                Central Practice
              </span>
              <h3 className="font-headline-md text-xl text-[#000000]">Zurich Head Atelier</h3>
              <p className="font-body-sm text-sm text-[#4d4540] mt-1 leading-relaxed">
                Talstrasse 14, 8001 Zürich, Switzerland
                <br />
                Direct Desk: +41 44 218 90 00
                <br />
                zurich@ateliervane.com
              </p>
            </div>

            <div className="border-b border-[#d0c4bd]/30 pb-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block mb-1">
                Curatorial Branch
              </span>
              <h3 className="font-headline-md text-xl text-[#000000]">Paris Research Studio</h3>
              <p className="font-body-sm text-sm text-[#4d4540] mt-1 leading-relaxed">
                Rue de Turenne, 75003 Paris, France
                <br />
                Direct Desk: +33 1 42 68 11 20
                <br />
                paris@ateliervane.com
              </p>
            </div>

            <div className="pb-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31] block mb-1">
                Tectonic Joinery Pavilion
              </span>
              <h3 className="font-headline-md text-xl text-[#000000]">Kyoto Joinery Pavilion</h3>
              <p className="font-body-sm text-sm text-[#4d4540] mt-1 leading-relaxed">
                Sakyo-ku, Kyoto 606-8414, Japan
                <br />
                Direct Desk: +81 75 752 4400
                <br />
                kyoto@ateliervane.com
              </p>
            </div>
          </div>

          <div className="bg-[#f0eee8] p-6 border border-[#d0c4bd]/50 space-y-3">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#1c1c18] font-semibold block">
              Quick Actions
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenConsultation}
                className="flex-1 bg-[#000000] text-[#ffffff] py-2.5 text-xs font-label-md uppercase tracking-wider hover:bg-[#914b31] transition-colors"
              >
                Inquire / Consult
              </button>
              <button
                onClick={onOpenSampleBox}
                className="flex-1 border border-[#000000] text-[#000000] py-2.5 text-xs font-label-md uppercase tracking-wider hover:bg-[#e5e2dc] transition-colors"
              >
                Sample Box
              </button>
            </div>
          </div>
        </div>

        {/* Right: Direct Dispatch Message Form */}
        <div className="lg:col-span-7 bg-[#f6f3ed] p-8 md:p-10 border border-[#d0c4bd]/40">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#914b31]">
                  Direct Correspondence
                </span>
                <h3 className="font-headline-md text-2xl text-[#000000]">
                  Send a Confidential Dispatch
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#fcf9f3] border-b border-[#7e756f] p-2.5 text-sm font-body-sm text-[#1c1c18] outline-none"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="vance@residence.com"
                    className="w-full bg-[#fcf9f3] border-b border-[#7e756f] p-2.5 text-sm font-body-sm text-[#1c1c18] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                  Subject / Commission Inquiries
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#fcf9f3] border-b border-[#7e756f] p-2.5 text-sm font-body-sm text-[#1c1c18] outline-none"
                >
                  <option>New Project Commission Inquiry</option>
                  <option>Material Archive &amp; Specimen Requisition</option>
                  <option>Press &amp; Monograph Publication Request</option>
                  <option>Private Atelier Appointment</option>
                </select>
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase tracking-widest text-[#4d4540] block mb-1">
                  Message &amp; Spatial Parameters *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your location, architectural scope, and desired timeline..."
                  className="w-full bg-[#fcf9f3] border-b border-[#7e756f] p-2.5 text-sm font-body-sm text-[#1c1c18] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#000000] text-[#ffffff] hover:bg-[#914b31] py-3.5 text-xs font-label-md uppercase tracking-widest transition-colors shadow-sm"
              >
                Transmit Correspondence Protocol
              </button>
            </form>
          ) : (
            <div className="space-y-6 py-6">
              <div className="flex items-center gap-3 text-[#914b31]">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
                <div>
                  <span className="font-label-sm text-xs uppercase tracking-widest font-semibold block">
                    Transmission Successful
                  </span>
                  <h4 className="font-headline-sm text-xl text-[#000000]">
                    Message Encrypted &amp; Dispatched
                  </h4>
                </div>
              </div>
              <p className="font-body-sm text-sm text-[#4d4540] leading-relaxed">
                Thank you, <strong className="text-[#1c1c18]">{senderName}</strong>. Your correspondence regarding{' '}
                <strong className="text-[#1c1c18]">{subject}</strong> has been delivered directly to the managing partners.
                Our secretary will reply to <strong className="text-[#1c1c18]">{senderEmail}</strong> within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setMessage('');
                }}
                className="border border-[#000000] text-[#000000] px-5 py-2.5 text-xs font-label-md uppercase tracking-widest hover:bg-[#e5e2dc] transition-colors"
              >
                Send Another Dispatch
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
