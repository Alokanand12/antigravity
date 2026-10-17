import React, { useState } from 'react';

interface CadInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export const CadInspectionModal: React.FC<CadInspectionModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeLayers, setActiveLayers] = useState({
    grid: true,
    structure: true,
    hearth: true,
    kitchen: true,
    suite: true,
    glazing: true,
    dimensions: true,
  });

  if (!isOpen) return null;

  const toggleLayer = (key: keyof typeof activeLayers) => {
    setActiveLayers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDownloadCadSpec = () => {
    const specText = `ATELIER VANE — ARCHITECTURAL ARCHIVE
==================================================
PROJECT: ${projectTitle.toUpperCase()} — FOLIO 04
DOCUMENT: PLATE 04-A: PLANIMETRIC ARCHITECTURAL ANALYSIS
DATUM: +2.40m Baltic High Water
SCALE: 1:100 @ A1 Format / 1:50 Enlargement
REGISTRATION: DK-CPH-2024-88401
STATUS: APPROVED FINAL FOR CONSTRUCTION ARCHIVE

DIMENSIONS & SPECIFICATIONS:
- Structural Slab: 28,200 mm x 14,800 mm low-carbon continuous cast
- Chamber 01: Sunken Hearth (12,400 mm span, -450 mm depression, 2.8T Gotland Monolith)
- Chamber 02: Culinary Atelier (7,600 mm span, 4,200x1,100x920 mm Travertine Island)
- Chamber 03: Primary Suite (8,200 mm span, Belgian flax acoustic baffle system)
- Seaside Glazing Axis: Frameless triple low-iron acoustic glazing (14,200 mm continuous)

MATERIAL MANIFEST:
- M-01 Gotland Limestone (Honed 40mm Solid Slabs)
- M-02 Smoked White Oak (Fumed Natural Oil Finish)
- M-03 Slaked Lime Plaster (Troweled Multi-Layer Calcite)
- M-04 Patinated Bronze (Unlacquered Living Metal)
- M-05 Belgian Raw Linen (Custom Acoustic Draping)

ISSUED BY: Atelier Vane Zurich & Copenhagen Studios
`;
    const blob = new Blob([specText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Atelier-Vane_Villa-Sorensen_CAD-Plate-04A.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#000000]/85 backdrop-blur-md"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-[#1c1c18] border border-[#7e756f]/40 text-[#ffffff] shadow-2xl flex flex-col max-h-[92vh] z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#7e756f]/30 bg-[#141412]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#ffa586]">
                High-Resolution Plan Inspection
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffa586] animate-pulse hidden sm:inline-block" />
              <span className="font-label-sm text-[11px] text-[#89827e] uppercase tracking-wider hidden sm:inline-block">
                Scale 1:50 @ Enlargement
              </span>
            </div>
            <h4 className="font-headline-sm text-lg md:text-xl text-[#ffffff] mt-0.5">
              {projectTitle} — Ground Plan Technical Blueprint
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#89827e] hover:text-[#ffffff] hover:bg-[#201a15] transition-colors focus:outline-none"
            aria-label="Close CAD modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* CAD Toolbar: Layers and Zoom */}
        <div className="px-4 md:px-6 py-2.5 bg-[#1f1b18] border-b border-[#7e756f]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Layer toggles */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-[#89827e] mr-1">
              Layers:
            </span>
            <button
              onClick={() => toggleLayer('hearth')}
              className={`px-2.5 py-1 font-label-sm text-[11px] uppercase tracking-wider transition-colors border ${
                activeLayers.hearth
                  ? 'bg-[#ffa586]/20 border-[#ffa586] text-[#ffa586]'
                  : 'bg-transparent border-[#7e756f]/40 text-[#7e756f]'
              }`}
            >
              01 Hearth
            </button>
            <button
              onClick={() => toggleLayer('kitchen')}
              className={`px-2.5 py-1 font-label-sm text-[11px] uppercase tracking-wider transition-colors border ${
                activeLayers.kitchen
                  ? 'bg-[#ffa586]/20 border-[#ffa586] text-[#ffa586]'
                  : 'bg-transparent border-[#7e756f]/40 text-[#7e756f]'
              }`}
            >
              02 Culinary
            </button>
            <button
              onClick={() => toggleLayer('suite')}
              className={`px-2.5 py-1 font-label-sm text-[11px] uppercase tracking-wider transition-colors border ${
                activeLayers.suite
                  ? 'bg-[#ffa586]/20 border-[#ffa586] text-[#ffa586]'
                  : 'bg-transparent border-[#7e756f]/40 text-[#7e756f]'
              }`}
            >
              03 Suite
            </button>
            <button
              onClick={() => toggleLayer('glazing')}
              className={`px-2.5 py-1 font-label-sm text-[11px] uppercase tracking-wider transition-colors border ${
                activeLayers.glazing
                  ? 'bg-[#ffa586]/20 border-[#ffa586] text-[#ffa586]'
                  : 'bg-transparent border-[#7e756f]/40 text-[#7e756f]'
              }`}
            >
              Glazing Axis
            </button>
            <button
              onClick={() => toggleLayer('dimensions')}
              className={`px-2.5 py-1 font-label-sm text-[11px] uppercase tracking-wider transition-colors border ${
                activeLayers.dimensions
                  ? 'bg-[#ffa586]/20 border-[#ffa586] text-[#ffa586]'
                  : 'bg-transparent border-[#7e756f]/40 text-[#7e756f]'
              }`}
            >
              Dimensions
            </button>
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.25))}
              className="p-1.5 bg-[#201a15] hover:bg-[#31312d] text-[#ffffff] transition-colors"
              title="Zoom Out"
            >
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="font-mono text-xs text-[#89827e] min-w-[40px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
              className="p-1.5 bg-[#201a15] hover:bg-[#31312d] text-[#ffffff] transition-colors"
              title="Zoom In"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="px-2 py-1 text-[11px] font-label-sm uppercase tracking-wider bg-[#201a15] hover:bg-[#31312d] text-[#89827e] hover:text-[#ffffff] transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Blueprint Canvas Area */}
        <div className="p-4 md:p-8 flex items-center justify-center overflow-auto max-h-[60vh] bg-[#0c0c0b]">
          <div
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease-out',
            }}
            className="w-full max-w-4xl min-w-[700px] select-none"
          >
            <svg
              className="w-full h-auto text-[#ffffff] stroke-current"
              fill="none"
              viewBox="0 0 900 480"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="modalArchGrid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.08"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>

              {/* Grid Background */}
              {activeLayers.grid && (
                <rect width="900" height="480" fill="url(#modalArchGrid)" stroke="none" />
              )}

              {/* Outer Envelope */}
              {activeLayers.structure && (
                <>
                  <rect
                    x="120"
                    y="60"
                    width="660"
                    height="360"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
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
                </>
              )}

              {/* Chamber 01: Great Hall & Sunken Hearth */}
              {activeLayers.hearth && (
                <g id="layer-hearth">
                  <rect
                    x="150"
                    y="90"
                    width="260"
                    height="300"
                    stroke="currentColor"
                    strokeDasharray="4 2"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="180"
                    y="140"
                    width="180"
                    height="180"
                    stroke="#ffa586"
                    strokeWidth="1.8"
                    fill="#ffa586"
                    fillOpacity="0.05"
                  />
                  <text
                    x="270"
                    y="210"
                    textAnchor="middle"
                    fill="#ffa586"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="11"
                    letterSpacing="2"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    01 • Sunken Hearth
                  </text>
                  <text
                    x="270"
                    y="232"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.6"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9"
                    letterSpacing="1.5"
                    stroke="none"
                  >
                    −450 MM FROM REF FINISHED FLOOR
                  </text>
                  {/* Fireplace Monolith */}
                  <rect
                    x="130"
                    y="190"
                    width="40"
                    height="80"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <line x1="130" y1="190" x2="170" y2="270" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
                  <line x1="170" y1="190" x2="130" y2="270" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
                </g>
              )}

              {/* Chamber 02: Culinary Atelier */}
              {activeLayers.kitchen && (
                <g id="layer-kitchen">
                  <line x1="430" y1="60" x2="430" y2="420" stroke="currentColor" strokeWidth="1.5" />
                  <rect
                    x="470"
                    y="170"
                    width="90"
                    height="200"
                    stroke="#ffffff"
                    strokeWidth="2"
                    fill="#ffffff"
                    fillOpacity="0.1"
                  />
                  <line x1="475" y1="170" x2="475" y2="370" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="480" y1="170" x2="480" y2="370" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="485" y1="170" x2="485" y2="370" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                  <text
                    x="515"
                    y="275"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="11"
                    letterSpacing="2"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    02 • Atelier Island
                  </text>
                  <text
                    x="515"
                    y="295"
                    textAnchor="middle"
                    fill="#89827e"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="8.5"
                    letterSpacing="1"
                    stroke="none"
                  >
                    4,200 × 1,100 MM TRAVERTINE
                  </text>
                  {/* Pocket wall joinery */}
                  <rect x="580" y="80" width="24" height="280" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="580" y1="130" x2="604" y2="130" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="580" y1="190" x2="604" y2="190" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="580" y1="250" x2="604" y2="250" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="580" y1="310" x2="604" y2="310" stroke="currentColor" strokeWidth="0.8" />
                </g>
              )}

              {/* Chamber 03: Primary Suite & Sound Vista */}
              {activeLayers.suite && (
                <g id="layer-suite">
                  <line x1="620" y1="60" x2="620" y2="420" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="660" y="160" width="90" height="110" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="670" y="170" width="30" height="20" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
                  <rect x="710" y="170" width="30" height="20" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
                  <text
                    x="705"
                    y="310"
                    textAnchor="middle"
                    fill="currentColor"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="11"
                    letterSpacing="2"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    03 • Suite Vista
                  </text>
                  <text
                    x="705"
                    y="330"
                    textAnchor="middle"
                    fill="#89827e"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="8.5"
                    letterSpacing="1"
                    stroke="none"
                  >
                    FLUTED BELGIAN FLAX WALLS
                  </text>
                </g>
              )}

              {/* Glazing Axis */}
              {activeLayers.glazing && (
                <g id="layer-glazing">
                  <line x1="140" y1="60" x2="760" y2="60" stroke="#ffa586" strokeWidth="3" />
                  <text
                    x="450"
                    y="42"
                    textAnchor="middle"
                    fill="#ffa586"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="10"
                    letterSpacing="3"
                    style={{ textTransform: 'uppercase' }}
                    stroke="none"
                  >
                    Coastal Glazing Axis • Øresund Sea Vista (14.2m Continuous)
                  </text>
                </g>
              )}

              {/* Dimensions */}
              {activeLayers.dimensions && (
                <g id="layer-dimensions" stroke="currentColor" strokeOpacity="0.6" strokeWidth="0.75">
                  <line x1="120" y1="445" x2="780" y2="445" />
                  <line x1="120" y1="440" x2="120" y2="450" />
                  <line x1="430" y1="440" x2="430" y2="450" />
                  <line x1="620" y1="440" x2="620" y2="450" />
                  <line x1="780" y1="440" x2="780" y2="450" />
                  <text
                    x="275"
                    y="465"
                    textAnchor="middle"
                    fill="currentColor"
                    fillOpacity="0.8"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9.5"
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
                    fillOpacity="0.8"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9.5"
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
                    fillOpacity="0.8"
                    fontFamily="'Plus Jakarta Sans', sans-serif"
                    fontSize="9.5"
                    letterSpacing="1"
                    stroke="none"
                  >
                    8,200 mm
                  </text>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 md:p-6 border-t border-[#7e756f]/30 bg-[#141412] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-label-sm uppercase tracking-wider text-[#89827e] space-y-1">
            <div>Coordinate Axis: CPH-HELLERUP-SOUND-04</div>
            <div className="text-[#ffa586]">Verification: Approved for Spatial Curation Archival Registry</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadCadSpec}
              className="bg-[#201a15] hover:bg-[#31312d] text-[#ffffff] border border-[#7e756f]/50 px-4 py-2 text-xs font-label-md uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px]">download</span>
              Vector Spec Manifest
            </button>
            <button
              onClick={onClose}
              className="bg-[#ffffff] text-[#000000] hover:bg-[#ffa586] hover:text-[#000000] px-5 py-2 text-xs font-label-md uppercase tracking-widest transition-colors"
            >
              Dismiss Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
