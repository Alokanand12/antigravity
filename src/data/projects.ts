export interface Chamber {
  id: string;
  sequence: string;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface Specimen {
  code: string;
  name: string;
  finish: string;
  origin: string;
  application: string;
  imageUrl: string;
  imageAlt: string;
  notes: string;
  porosity?: string;
  acousticCoeff?: string;
}

export interface Project {
  id: string;
  folio: string;
  category: 'Residential' | 'Cultural' | 'Commercial' | 'Material Archive';
  title: string;
  subtitle: string;
  scope: string;
  location: string;
  locationShort: string;
  year: string;
  scale: string;
  timeline: string;
  patrons: string;
  heroImage: string;
  heroAlt: string;
  detailImage: string;
  detailAlt: string;
  coordinates: {
    lat: string;
    lng: string;
    place: string;
    orientation: string;
    sunlight: string;
  };
  manifesto: string;
  manifestoDoc: string;
  narrativeParagraphs: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  specimens: Specimen[];
  chambers: Chamber[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    initial: string;
  };
  nextFolio?: {
    id: string;
    folio: string;
    category: string;
    title: string;
    location: string;
    year: string;
    imageUrl: string;
    imageAlt: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'villa-sorensen',
    folio: '04 / RES',
    category: 'Residential',
    title: 'Villa Sørensen',
    subtitle: 'Sound Estate Residence',
    scope: 'Full Scope Architectural Renovation & Spatial Curation',
    location: 'Hellerup, The Sound — Denmark',
    locationShort: 'Hellerup, CPH',
    year: 'Construct 2024',
    scale: '4,800 ft² (420 m²)',
    timeline: 'Autumn 2024',
    patrons: 'Sørensen Family',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUWD0KUK6dTl_nwQyyAC7WngfLtBYr1SlL-NuruBBO6JX9uOZOyu3qZpi0-5e7_FH1q6HwByk4JLRZUFlliW-jy4SaKFYSrK3eiXk32FHMrmN60KvQ1DHYYhr8poP2LzSlgIU2df4raYgu1ognjyNSOGZHHmNX0Zez-yMXKl7rg19Tw-RbutDnVSm29QyqqMZ9FBeBzbH-VT1iE8Xz4VSbJbLa4wujKSe_tEkOcW7UnBjHsvlL877x5g',
    heroAlt: 'Editorial architectural interior photograph of Villa Sorensen living space looking toward the Baltic Sound in Hellerup. Sunken hearth in honed Gotland limestone with soft morning light streaming across oiled smoked oak floors, minimalist linen curtains drifting in the sea breeze, serene Nordic luxury, muted bone and terracotta tones.',
    detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsI77Ij81ns2RK0pebaFuZgebxO7Ke52Pj58J-vW7KpJaYQ-RYkgh72m4aosY35iPaPtTPKkJ4hHG2amfwiFEZfPHM4FAQhqIosBj8tpGruGtsQxh_CCZerGVBXZ-HFSu45gPW_OFRj7LxjWi5GslDpi6nZe3HEpAb2XXMH8UvDaQwRAA78ItmCgllVFtSBjCPm6aD_UU1B1MJE_E0WkpXxVd8AXWGIe-5W-fFzxd7lwju0bUyBI62JA',
    detailAlt: 'Architectural detail macro photograph of honed 40mm Gotland limestone slab corner joint with warm smoked oak paneling, raking daylight catching mineral grain, tactile stone surface.',
    coordinates: {
      lat: `55°44'12.4"N`,
      lng: `12°35'04.8"E`,
      place: 'Hellerup Coast',
      orientation: 'East-Northeast towards Øresund Strait',
      sunlight: 'Dawn Low-Rake to Zenith Diffuse'
    },
    manifesto: 'An exploration of soft Nordic light, warm Gotland limestone, and seamless transitions between interior sanctuaries and coastal gardens.',
    manifestoDoc: 'Atelier Vane Spatial Thesis — Doc. 42',
    narrativeParagraphs: [
      'Perched along the historic coastal promenade of Hellerup, Villa Sørensen stands as a deliberate rejection of cold Scandinavian minimalism. The program was commissioned to transform an early 20th-century waterfront villa into a multi-generational acoustic and tactile haven, framing the dynamic grey-blue waters of the Sound.',
      'Our intervention was guided by continuous material planes. Rather than treating rooms as isolated boxes, circulation occurs through thick portal thresholds lined in fumed smoked oak. Custom joinery conceals all utilitarian apparatus, leaving only tectonic volume, tactile lime plaster textures, and monumental monoliths of Gotland limestone to absorb the ever-shifting sea light.'
    ],
    metrics: [
      { label: 'Project Duration', value: '340d' },
      { label: 'Water Vista Span', value: '14.2m' },
      { label: 'Bespoke Millwork', value: '100%' }
    ],
    specimens: [
      {
        code: 'M-01',
        name: 'Gotland Limestone',
        finish: 'Honed 40mm Solid Slabs',
        origin: 'Baltic Quarries, Sweden',
        application: 'Sunken Hearth • Kitchen Island',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJcW6yvWa7Kr6C5vdmDeJd01IBnqAQa2mG2EQDEkQPdHewKMyAW1N-RMYXCv3AdEPuyEC4Ppgkz63eVvLWOMZj94AVISmQkqZiGWfBWrFQZWnD2uSxNFSmVNG4wroIcLr1L0UGuW2BJJF8oafB9FpthBoegR6blIhxz__7fOCvON-w_9yllNCnFrHqDr7uhIp8zbLw9VKOxCP12HxBDlPcMss85zA1ybU-pI8S7P1dTQVKYyRi2R6mSw',
        imageAlt: 'Close up architectural swatch photograph of pale grey-beige Gotland Limestone with soft fossiled textures, matte honed 40mm slab finish, natural architectural lighting.',
        notes: 'Dense Silurian sedimentary rock rich in micro-fossils and calcite veins. Thermally inert with exceptional radiant retention.',
        porosity: '1.2% by volume',
        acousticCoeff: 'NRC 0.12'
      },
      {
        code: 'M-02',
        name: 'Smoked White Oak',
        finish: 'Fumed Natural Oil Finish',
        origin: 'Jutland Certified Forests, Denmark',
        application: 'Acoustic Ceilings • Millwork',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7VYGV3MPsWG_XMNOx8U2N-Tb3E7PozjBixWEVHW3f6TO4vscS0sQBJp1zbmkie_d5FzlYSjjAplZQahhEvC4OtAqH3koIE27GaCsuXzaZom_lLknR3-OND0yXn-4k9-sPkzmptKfoejoy0sJHu0V5_ALVX5etzO3mVEUxg2xh8HfNOm_xySs8waDe78X3DRb0AGiegtW_qtejDcc1_9-jCZeIGqlYOhHjXTfN7ivRRjdhJEPKn54blA',
        imageAlt: 'Architectural material specimen sample of fumed Danish white oak wood with deep natural grain, matte low-luster organic oil finish, warm Scandinavian brown tone.',
        notes: 'Ammonia-fumed in sealed vacuum chambers to react with natural tannins, darkening through the entire wood volume rather than surface stain.',
        porosity: 'Micro-cellular density 0.72 g/cm³',
        acousticCoeff: 'NRC 0.45 fluted profile'
      },
      {
        code: 'M-03',
        name: 'Slaked Lime Plaster',
        finish: 'Troweled Multi-Layer Calcite',
        origin: 'Veneto Kilns, Italy',
        application: 'Continuous Monolithic Walls',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqbmdg7zfhDEe-qdThjyUePdEkcECyvYp-tYJtpAYAuYwhVntIztWPEOT7ftcSYABDvZwpCHziS8ptLh6CVXfp7rcVl8Cv9NTI2ktTucBUCuJupZq8x4UOCb_A6sKaPs4T3JXO1PYL4sCxRWPxvSBelNyfelGT5sPv1_02ZecMdrByk6Elh0S3Pmq65Lk2mYv0-ozHAs5-nYQoHGeP3vx0bOg3eTS--zgZY7uwcjylMSzjxIY-ZSMAyQ',
        imageAlt: 'Textural architectural detail of slaked lime plaster wall with subtle trowel marks and earthy mineral wash, warm bone white, quiet ambient light.',
        notes: 'Matured for 36 months in underground pits before hand-troweling with fine washed river quartz. Breathable and mold-inhibiting.',
        porosity: 'Vapor-permeable sd < 0.02m',
        acousticCoeff: 'Diffuse scattering αd = 0.18'
      },
      {
        code: 'M-04',
        name: 'Patinated Bronze',
        finish: 'Unlacquered Living Metal',
        origin: 'Bavarian Foundry, Germany',
        application: 'Handles • Recessed Pulls',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnqMh5NtzK1ZBYi_AudTJjF1LL-IIK_m5-xxtRDwZoK4CoC9emfPkQZ4tdry7OuXnCF_INAYBfvlkEXWKN1dyu-R95R6k1eoqhJkbL8eXyWaHhW1UUhb6_lMCz_2H0H8Twf7qJQp_s9e8O4tAA_VhPlfdpuYppgSTARryJzQzn8qj1a6JzBOdMjx6anknnnKXBSNxGJp2gn1ZIMvQVS-qRqcr6r9jsGpMdFII-gGURCcIVBEUTY-5fKQ',
        imageAlt: 'Extreme macro sample of unlacquered patinated bronze hardware with hand-rubbed warm deep brown and golden edge undertones, architectural metalwork.',
        notes: 'Hand-burnished with liver of sulfur and sealed with beeswax. Patina evolves organically under skin contact and sea-spray atmosphere.',
        porosity: 'Non-porous solid alloy',
        acousticCoeff: 'Resonant dampening pin'
      },
      {
        code: 'M-05',
        name: 'Belgian Raw Linen',
        finish: 'Custom Acoustic Draping',
        origin: 'Flanders Weaving Mills, Belgium',
        application: 'Primary Chamber Acoustic Walls',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoFu3IpyknTLWkpgrVpTgaiIXeqR2OLblefP2wbdKhzTPD3_Y73pTCSWyZL5ap3_hKDNurembRPKrz8FppJ2WLZ1oK2HA04PEr1cwxmhuLocpcTqnKe2VcPbIh-IEW3VRFD88w4Uv0EyLKJAi8DGf3MlLA7bRcHzne0Msv34dLaiwdhyIhX1B-R759oRiUyF17QujBlBvbTQBQObpABsXGrqP9hi1phQSm4sTyiztWOgavepk6v6j3sw',
        imageAlt: 'Close up architectural textile sample of heavy weight raw Belgian linen with open natural slub weave in unbleached warm oatmeal tone, gentle drape.',
        notes: 'Heavyweight 540 g/m² unbleached flax fiber with organic slub texture, mounted over 50mm high-density mineral wool core for sound isolation.',
        porosity: 'Air flow resistivity 18 kPa·s/m²',
        acousticCoeff: 'NRC 0.85 backed'
      }
    ],
    chambers: [
      {
        id: 'chamber-01',
        sequence: 'Chamber 01',
        tag: 'Gathering Sanctuary',
        title: 'The Great Hall & Sunken Hearth',
        description: 'Lowered 45 centimeters below the general grade of the ground plane, the hearth anchors the spatial narrative. By lowering eye level toward the ground, occupants experience an intimate vantage point where the Baltic horizon line meets the raw limestone plinth.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMMcc_Ja7uslCAKHEXUj9sSs9t6dN67iARKspoLqPkGR6TOxb3B6Ywbej9pQN7fHppMwG-JFEzRYbeyWSkTXbuFgr8SDY8AeRv2pKcFFR7-436fZPib5oRNFk54PAr5c7Rchu89CmW_8RRez11PEJFKT6orIDzfm8C9eLxWpNbrlDe4oVhLdflbAV7E8JfO-KGG4-5Bxq94H3LyV6qpFqLknUDID4qYD2bUcuSNxYdvnFL1-zABoDYuQ',
        imageAlt: 'Architectural photograph of Chamber 01 The Great Hall in Villa Sorensen. Sunken living room with 45cm lowered pit, monumental Gotland limestone fireplace hearth, acoustic vertical wood slat ceiling, minimalist furniture upholstered in oatmeal boucle, expansive floor to ceiling window framing ocean.',
        specs: [
          { label: 'Depression Depth', value: '−450 mm from Finished Floor' },
          { label: 'Firebox Carving', value: 'Single 2.8 Ton Limestone Monolith' },
          { label: 'Ceiling Resonance', value: 'NRC 0.85 Acoustic Timber Fins' },
          { label: 'Daylight Ingress', value: 'Frameless Low-Iron Triple Glazing' }
        ]
      },
      {
        id: 'chamber-02',
        sequence: 'Chamber 02',
        tag: 'Culinary Preparation',
        title: 'Monolithic Culinary Atelier',
        description: 'Conceived as an architectural sculpture rather than a domestic utility space. A central 4.2-meter island carved from Roman travertine commands the room, while tall pocket cabinetry crafted from book-matched smoked oak vanishes flush into plaster reveals to conceal appliances.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCXpbcdTLIx0v5cEyfTwE1uGEBW2zJ2REBXNhV63h7FTJtJ2VQaxYdN7yua9fj5GyxPZC4c9OUlBOt6ay12NLCsPdLB4OyhB8WnW4GLASplocwysLhpsG20d_7TAVLbhYfo_aFvsPIEsACdgFE3kesZmmrAaKMsswZWcd8KuMhK45vRFQY4ZEb0cdr0kwfnU0zHyjNkJxQ-O3M4zhB-VTxIS92QWirefz2AcjAC0FIvH9EXJiuCuzzSw',
        imageAlt: 'Interior architectural photograph of Chamber 02 the Culinary Atelier in Villa Sorensen. Monumental fluted travertine kitchen island standing in open sunlight, dark smoked oak full-height pocket cabinetry, integrated bronze minimalist fixtures, warm sculptural aesthetics.',
        specs: [
          { label: 'Island Geometry', value: '4,200 × 1,100 × 920 mm Fluted' },
          { label: 'Appliance Integration', value: 'Fully Concealed Gaggenau 400 Series' },
          { label: 'Ventilation Protocol', value: 'Downdraft Plasma Filtration • 0dB' },
          { label: 'Joinery Latches', value: 'Custom Waxed Raw Bronze Pivot Pins' }
        ]
      },
      {
        id: 'chamber-03',
        sequence: 'Chamber 03',
        tag: 'Rest & Immersion',
        title: 'Primary Suite & Sound Vista',
        description: 'Positioned directly along the waterfront threshold, the primary chamber is wrapped in sound-dampening acoustic wall segments faced in raw Belgian unbleached linen. Mornings are greeted by unfiltered dawn reflections glancing off the ceiling plaster.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOIwD1k_qkswvORNtP-9gNznn9siV8SEeH4ylFv5B65MAxJC5X8gAZBCet4YUVr_kD5OrYePUJaKk2kHCAUs0oQ-wfIUHShsJBlnrSFJxsrt9uGlkCccCmYZBhcH0Y00ZV4fLHI3X-36XtVXvXIGN7ySKlfBq4UpmtnuvyrEwF5PbsNghNYExkWeNYAlnx9q6gjy-PWkGWHVOOuEMu1xDex_nGzosi_jYqBkDX03sK6s5w1lDL_k08Jg',
        imageAlt: 'Architectural photograph of Chamber 03 Primary Suite in Villa Sorensen. Low-slung bespoke oak bed platform floating on natural limestone floor, walls upholstered in fluted raw Belgian linen panels, panoramic glass door opening onto private garden patio overlooking the sea.',
        specs: [
          { label: 'Acoustic Paneling', value: 'Fluted Belgian Linen on Rockwool Core' },
          { label: 'Platform Bedstead', value: 'Bespoke Floating Smoked Oak Sled' },
          { label: 'En-Suite Threshold', value: 'Pocketing Pivot Glass • Acid Etched' },
          { label: 'Thermal Massing', value: 'Geothermal In-Slab Radiant System' }
        ]
      }
    ],
    testimonial: {
      quote: '“Atelier Vane did not simply redesign our home; they orchestrated the passage of the Baltic day. The manner in which the sunken hearth cradles low winter sunlight and the quietude achieved by the acoustic oak fins has transformed our daily rhythm into something contemplative and enduring.”',
      author: 'Mads & Freja Sørensen',
      role: 'Patrons • Villa Sørensen, Hellerup',
      initial: 'S'
    },
    nextFolio: {
      id: 'tribeca-loft',
      folio: 'Folio 05 • Urban Sanctuary',
      category: 'Residential',
      title: 'The Tribeca Loft',
      location: 'New York City • Cast Iron Historic District',
      year: 'Completed 2024',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFvdwwjUTEf4kTCOyceUCSFxu_t97y6d0c4dKTJ_kdtbV7-KrvLPaQo8J3kCkwV20811XPwp2jCYZClZ5wrVNdoFMZWpfpedKa5TcSqXlIFrNJ5fpPteZuxzfHF40CYABtKlcLme5wjasFhT5BOKdb95CvXn4GyEdcynBQrldP2ybAlxWj29IfZss21h7pmY8MCgK8C63Rhp_p97LpZku-O5s_a6--Goss1iouajyU5jkt_Y6kDRUQSQ',
      imageAlt: 'Preview architectural photograph of The Tribeca Loft case study. Industrial cast iron columns paired with poured terrazzo floors and fluted dark walnut partitions in a sun-drenched Manhattan interior.'
    }
  },
  {
    id: 'tribeca-loft',
    folio: '05 / RES',
    category: 'Residential',
    title: 'The Tribeca Loft',
    subtitle: 'Urban Cast Iron Sanctuary',
    scope: 'Historic Preservation & Tactile Interior Architecture',
    location: 'Franklin Street, Manhattan — New York',
    locationShort: 'Tribeca, NYC',
    year: 'Construct 2024',
    scale: '3,900 ft² (362 m²)',
    timeline: 'Spring 2024',
    patrons: 'Kaufman-Vogel Collection',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFvdwwjUTEf4kTCOyceUCSFxu_t97y6d0c4dKTJ_kdtbV7-KrvLPaQo8J3kCkwV20811XPwp2jCYZClZ5wrVNdoFMZWpfpedKa5TcSqXlIFrNJ5fpPteZuxzfHF40CYABtKlcLme5wjasFhT5BOKdb95CvXn4GyEdcynBQrldP2ybAlxWj29IfZss21h7pmY8MCgK8C63Rhp_p97LpZku-O5s_a6--Goss1iouajyU5jkt_Y6kDRUQSQ',
    heroAlt: 'The Tribeca Loft interior showing exposed cast iron Corinthian capitals, continuous aggregate terrazzo floor, and oiled walnut bookcases.',
    detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnqMh5NtzK1ZBYi_AudTJjF1LL-IIK_m5-xxtRDwZoK4CoC9emfPkQZ4tdry7OuXnCF_INAYBfvlkEXWKN1dyu-R95R6k1eoqhJkbL8eXyWaHhW1UUhb6_lMCz_2H0H8Twf7qJQp_s9e8O4tAA_VhPlfdpuYppgSTARryJzQzn8qj1a6JzBOdMjx6anknnnKXBSNxGJp2gn1ZIMvQVS-qRqcr6r9jsGpMdFII-gGURCcIVBEUTY-5fKQ',
    detailAlt: 'Hand-chiseled bronze hinge joint on walnut sliding partition.',
    coordinates: {
      lat: `40°43'08.2"N`,
      lng: `74°00'34.1"W`,
      place: 'Tribeca Historic District',
      orientation: 'South-Southwest onto cobblestone corridor',
      sunlight: 'High afternoon clerestory beam'
    },
    manifesto: 'Restoring tectonic gravity to an 1892 industrial frame through hand-poured Venetian terrazzo, oiled black walnut, and acoustic stillness amidst Manhattan.',
    manifestoDoc: 'Atelier Vane Spatial Thesis — Doc. 48',
    narrativeParagraphs: [
      'Occupying the entire fourth floor of an 1892 cast-iron warehouse on Franklin Street, this residence negotiates between monumental 19th-century industrial structural bones and intimate private contemplation.',
      'Rather than dividing the loft with drywall partitions, we inserted four freestanding architectural pavilions clad in end-grain black walnut and sound-absorbing fluted bouclé. The original fluted Corinthian cast-iron columns were stripped to bare metal and sealed with microcrystalline wax.'
    ],
    metrics: [
      { label: 'Ceiling Clearance', value: '4.15m' },
      { label: 'Terrazzo Pour', value: '360 m²' },
      { label: 'Acoustic Rating', value: 'STC 58' }
    ],
    specimens: [
      {
        code: 'M-06',
        name: 'Venetian Poured Terrazzo',
        finish: 'Honed Carrara & River Flint Matrix',
        origin: 'Veneto Aggregate / Local Pour',
        application: 'Continuous Monolithic Flooring',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJcW6yvWa7Kr6C5vdmDeJd01IBnqAQa2mG2EQDEkQPdHewKMyAW1N-RMYXCv3AdEPuyEC4Ppgkz63eVvLWOMZj94AVISmQkqZiGWfBWrFQZWnD2uSxNFSmVNG4wroIcLr1L0UGuW2BJJF8oafB9FpthBoegR6blIhxz__7fOCvON-w_9yllNCnFrHqDr7uhIp8zbLw9VKOxCP12HxBDlPcMss85zA1ybU-pI8S7P1dTQVKYyRi2R6mSw',
        imageAlt: 'Honed Venetian terrazzo sample with marble aggregates.',
        notes: 'Jointless poured cementitious matrix with 70% hand-selected Carrara marble and river quartz aggregate, ground to a silk satin sheen.',
        porosity: '0.8% by weight',
        acousticCoeff: 'Thermal radiant integration'
      },
      {
        code: 'M-07',
        name: 'American Black Walnut',
        finish: 'Boiled Linseed Oil & Beeswax',
        origin: 'Appalachian Hardwood Reserve',
        application: 'Freestanding Pavilions • Library Wall',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7VYGV3MPsWG_XMNOx8U2N-Tb3E7PozjBixWEVHW3f6TO4vscS0sQBJp1zbmkie_d5FzlYSjjAplZQahhEvC4OtAqH3koIE27GaCsuXzaZom_lLknR3-OND0yXn-4k9-sPkzmptKfoejoy0sJHu0V5_ALVX5etzO3mVEUxg2xh8HfNOm_xySs8waDe78X3DRb0AGiegtW_qtejDcc1_9-jCZeIGqlYOhHjXTfN7ivRRjdhJEPKn54blA',
        imageAlt: 'Rich dark black walnut with subtle golden chatoyancy.',
        notes: 'Slow-grown, air-dried Appalachian walnut with quarter-sawn grain, oiled and hand-rubbed over three weeks.',
        porosity: 'High stability',
        acousticCoeff: 'NRC 0.38'
      }
    ],
    chambers: [
      {
        id: 'chamber-t1',
        sequence: 'Chamber 01',
        tag: 'Social Forum',
        title: 'The Great Columnar Gallery',
        description: 'Spanning sixty feet between exterior cast-iron facades, the central gallery celebrates the four Corinthian columns as freestanding sculptures.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFvdwwjUTEf4kTCOyceUCSFxu_t97y6d0c4dKTJ_kdtbV7-KrvLPaQo8J3kCkwV20811XPwp2jCYZClZ5wrVNdoFMZWpfpedKa5TcSqXlIFrNJ5fpPteZuxzfHF40CYABtKlcLme5wjasFhT5BOKdb95CvXn4GyEdcynBQrldP2ybAlxWj29IfZss21h7pmY8MCgK8C63Rhp_p97LpZku-O5s_a6--Goss1iouajyU5jkt_Y6kDRUQSQ',
        imageAlt: 'The great room in Tribeca Loft with double-height windows and antique rug over terrazzo.',
        specs: [
          { label: 'Column Geometry', value: '450mm Ø Cast Iron Corinthian' },
          { label: 'Fenestration', value: 'Original 1892 Double-Hung Hardwood' },
          { label: 'Sound Isolation', value: 'Floating Neoprene Sub-Slab' }
        ]
      }
    ],
    testimonial: {
      quote: '“Living in the loft feels like inhabiting an architectural sanctuary carved directly out of New York history. Atelier Vane managed to mute the avenue completely while letting the cast-iron bones breathe.”',
      author: 'Elena Kaufman & Marc Vogel',
      role: 'Art Historians & Patrons, Tribeca',
      initial: 'K'
    },
    nextFolio: {
      id: 'villa-sorensen',
      folio: 'Folio 04 • Sound Estate Residence',
      category: 'Residential',
      title: 'Villa Sørensen',
      location: 'Hellerup, Denmark • Baltic Sound Waterfront',
      year: 'Completed 2024',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUWD0KUK6dTl_nwQyyAC7WngfLtBYr1SlL-NuruBBO6JX9uOZOyu3qZpi0-5e7_FH1q6HwByk4JLRZUFlliW-jy4SaKFYSrK3eiXk32FHMrmN60KvQ1DHYYhr8poP2LzSlgIU2df4raYgu1ognjyNSOGZHHmNX0Zez-yMXKl7rg19Tw-RbutDnVSm29QyqqMZ9FBeBzbH-VT1iE8Xz4VSbJbLa4wujKSe_tEkOcW7UnBjHsvlL877x5g',
      imageAlt: 'Villa Sorensen hero view overlooking the Baltic Sound.'
    }
  }
];
