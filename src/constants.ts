import { Product, Category } from './types';
import { PackageIcon, ZapIcon, LayersIcon, ShieldCheckIcon, SparklesIcon, ScissorsIcon } from './components/icons/CategoryIcons';


export const PRODUCTS: Product[] = [
  {
    id: 'copper-tape',
    name: 'Copper Tape',
    image: 'https://picsum.photos/seed/copper/500/500',
    shortDescription: 'Provides excellent EMI shielding, electrical conductivity, and grounding for electronics.',
    features: ['High conductivity adhesive', 'Excellent conformability', 'Solderable'],
    uses: ['EMI/RFI shielding in electronic devices', 'Cable wrapping', 'Grounding applications', 'Stained glass artistry'],
    category: 'specialty-tapes'
  },
  {
    id: 'reflective-tape',
    name: 'Reflective Tape',
    image: 'https://picsum.photos/seed/reflective/500/500',
    shortDescription: 'High-visibility safety marking for vehicles, signs, and industrial environments.',
    features: ['High retro-reflectivity', 'Weather and solvent resistant', 'Aggressive adhesive'],
    uses: ['Vehicle conspicuity marking', 'Safety signs', 'Factory and warehouse floor marking', 'Work zone safety'],
    category: 'safety-tapes'
  },
  {
    id: 'conductive-grid-tape',
    name: 'Conductive Grid Tape',
    image: 'https://picsum.photos/seed/grid/500/500',
    shortDescription: 'Anti-static protection for sensitive electronics and components.',
    features: ['Creates a Faraday Cage effect', 'Low static generation', 'Clear for visibility'],
    uses: ['Sealing ESD bags and containers', 'Use in cleanrooms and static-sensitive areas', 'Grounding work surfaces'],
    category: 'antistatic-tapes'
  },
  {
    id: 'aluminium-waterproof-tape',
    name: 'Aluminium Waterproof Tape',
    image: 'https://picsum.photos/seed/aluminium/500/500',
    shortDescription: 'Durable sealing and insulation for HVAC, roofs, and water pipes.',
    features: ['Butyl adhesive for strong waterproofing', 'UV and temperature resistant', 'Flexible and conformable'],
    uses: ['HVAC duct sealing', 'Roof and gutter repair', 'Pipe insulation and sealing', 'Automotive repairs'],
    category: 'adhesive-tapes'
  },
  {
    id: 'fine-line-masking-tape',
    name: 'Fine Line Masking Tape',
    image: 'https://picsum.photos/seed/fineline/500/500',
    shortDescription: 'Creates sharp, clean paint lines for precision masking in automotive and industrial painting.',
    features: ['Ultra-thin for sharp lines', 'Resists paint bleed-through', 'Conformable for curves'],
    uses: ['Automotive custom paint jobs', 'Industrial painting', 'Architectural design', 'Pinstriping'],
    category: 'specialty-tapes'
  },
  {
    id: 'lohmann-duploflex-tape',
    name: 'Lohmann Duploflex Tape',
    image: 'https://picsum.photos/seed/lohmann/500/500',
    shortDescription: 'High-tack foam adhesive designed for flexographic printing plate mounting.',
    features: ['Consistent thickness for print quality', 'High adhesion and residue-free removal', 'Absorbs vibrations'],
    uses: ['Mounting photopolymer plates in flexo printing', 'Wide-web and narrow-web printing'],
    category: 'printing-tapes'
  },
  {
    id: 'silicone-tape',
    name: 'Silicone Splicing Tape',
    image: 'https://picsum.photos/seed/silicone/500/500',
    shortDescription: 'Heat resistant and non-stick, ideal for high-temperature splicing and sealing.',
    features: ['High-temperature resistance (up to 260°C)', 'Non-stick silicone adhesive', 'Clean removal'],
    uses: ['Splicing of silicone-coated papers and films', 'Powder coating masking', 'High-temp sealing applications'],
    category: 'specialty-tapes'
  },
  {
    id: '3m-double-sided-foam-tape',
    name: '3M Double Sided Foam Tape',
    image: 'https://picsum.photos/seed/foam/500/500',
    shortDescription: 'Strong, conformable foam tape for gap filling and mounting on uneven surfaces.',
    features: ['High-strength acrylic adhesive', 'Conformable foam core', 'Absorbs shock and vibration'],
    uses: ['Mounting signs, nameplates, and trims', 'Automotive interior/exterior attachment', 'Appliance assembly'],
    category: 'double-sided-tapes'
  },
  {
    id: 'bopp-packing-tape',
    name: 'BOPP Packing Tape',
    image: 'https://picsum.photos/seed/bopp/500/500',
    shortDescription: 'The industry standard for reliable carton sealing and general packaging.',
    features: ['Strong polypropylene backing', 'High tensile strength', 'Available in clear, brown, and custom prints'],
    uses: ['Carton and box sealing', 'Bundling and strapping', 'General purpose packaging in warehouses'],
    category: 'adhesive-tapes'
  },
  {
    id: 'powder-coating-tape',
    name: 'Powder Coating Tape',
    image: 'https://picsum.photos/seed/powder/500/500',
    shortDescription: 'High-temperature polyester tape for masking surfaces during powder coating processes.',
    features: ['Resists high temperatures (up to 204°C)', 'Sharp paint lines', 'Removes cleanly without residue'],
    uses: ['Masking parts for powder coating', 'E-coating', 'Anodizing processes'],
    category: 'specialty-tapes'
  },
    {
    id: 'high-temp-resistant-sealing-tape',
    name: 'High Temp Resistant Sealing Tape',
    image: 'https://picsum.photos/seed/hightemp/500/500',
    shortDescription: 'For thermal insulation and sealing in high heat zones.',
    features: ['Withstands extreme temperatures', 'Excellent sealing properties', 'Durable and long-lasting'],
    uses: ['Sealing high-temperature ovens and furnaces', 'Exhaust system repairs', 'Industrial insulation wrapping'],
    category: 'specialty-tapes'
  },
  {
    id: 'hazard-tape',
    name: 'Hazard Warning Tape',
    image: 'https://picsum.photos/seed/hazard/500/500',
    shortDescription: 'Brightly colored for visual warning and marking of hazardous areas in industrial zones.',
    features: ['High visibility diagonal stripes', 'Durable PVC film', 'Strong rubber-based adhesive'],
    uses: ['Marking physical hazards', 'Aisle marking for traffic', 'Identifying safety equipment locations'],
    category: 'safety-tapes'
  },
   {
    id: 'high-reflective-cloth-tape',
    name: 'High Reflective Cloth Tape',
    image: 'https://picsum.photos/seed/reflectivecloth/500/500',
    shortDescription: 'Durable, high-visibility tape for harsh environments.',
    features: ['Cloth backing for strength', 'High retro-reflectivity', 'Weather and abrasion resistant'],
    uses: ['Marking outdoor hazards', 'Safety clothing enhancement', 'Emergency vehicle marking'],
    category: 'safety-tapes'
  },
  {
    id: 'duct-tape',
    name: 'Duct Tape',
    image: 'https://picsum.photos/seed/duct/500/500',
    shortDescription: 'A versatile, strong, and water-resistant tape for general repairs, bundling, and sealing.',
    features: ['Polyethylene-coated cloth scrim', 'Strong, aggressive adhesive', 'Water-resistant and tearable by hand'],
    uses: ['General maintenance and repair', 'Sealing ducts and pipes (temporary)', 'Bundling wires and cables'],
    category: 'adhesive-tapes'
  },
  {
    id: 'masking-tape',
    name: 'Masking Tape',
    image: 'https://picsum.photos/seed/masking/500/500',
    shortDescription: 'General-purpose paper tape for painting, labeling, and light bundling.',
    features: ['Crepe paper backing', 'Easy to tear', 'Removes cleanly within hours'],
    uses: ['Non-critical painting', 'Labeling containers', 'Light-duty bundling and packaging'],
    category: 'adhesive-tapes'
  },
  {
    id: 'filament-tape',
    name: 'Filament Tape',
    image: 'https://picsum.photos/seed/filament/500/500',
    shortDescription: 'High-strength tape reinforced with fiberglass filaments for heavy-duty applications.',
    features: ['Extremely high tensile strength', 'Resistant to tears and abrasion', 'Aggressive adhesive'],
    uses: ['Heavy box reinforcing', 'Palletizing and unitizing loads', 'Metal coil tabbing'],
    category: 'adhesive-tapes'
  },
  {
    id: 'glass-cloth-tape',
    name: 'Glass Cloth Tape',
    image: 'https://picsum.photos/seed/glasscloth/500/500',
    shortDescription: 'High-temperature tape with excellent mechanical strength for demanding applications.',
    features: ['Withstands high temperatures', 'High abrasion resistance', 'Conformable woven backing'],
    uses: ['Permanent sealing of high-temp ducts', 'Electrical insulation', 'Aircraft maintenance'],
    category: 'specialty-tapes'
  },
  {
    id: 'vhb-tape',
    name: 'VHB (Very High Bond) Tape',
    image: 'https://picsum.photos/seed/vhb/500/500',
    shortDescription: 'A strong alternative to rivets, welds, and screws for permanent bonding.',
    features: ['Durable viscoelastic acrylic foam', 'Creates a permanent seal against water', 'Absorbs shock and distributes stress'],
    uses: ['Panel to frame bonding', 'Stiffener to panel attachment', 'Mounting decorative materials'],
    category: 'double-sided-tapes'
  },
  {
    id: 'antistatic-shielding-tape',
    name: 'Antistatic Shielding Tape',
    image: 'https://picsum.photos/seed/shielding/500/500',
    shortDescription: 'Metalized polyester tape providing a static shielding layer for ESD protection.',
    features: ['Four-layer construction', 'Creates Faraday Cage', 'Used for sealing shielding bags'],
    uses: ['Sealing ESD shielding bags', 'Securing components in ESD-safe environments'],
    category: 'antistatic-tapes'
  },
  {
    id: 'floor-marking-tape',
    name: 'Floor Marking Tape',
    image: 'https://picsum.photos/seed/floor/500/500',
    shortDescription: 'Durable vinyl tape for marking aisles, walkways, and hazards in warehouses and factories.',
    features: ['Resists abrasion, moisture, and solvents', 'Vibrant colors for high visibility', 'Easy to apply and remove'],
    uses: ['Aisle marking', 'Social distancing guides', 'Marking out work cells and storage zones'],
    category: 'safety-tapes'
  },
  {
    id: 'anti-slip-tape',
    name: 'Anti-Slip Tape',
    image: 'https://picsum.photos/seed/antislip/500/500',
    shortDescription: 'Grit-coated tape to provide traction on slippery surfaces, preventing slips and falls.',
    features: ['Durable mineral-coated surface', 'Strong, waterproof adhesive', 'Suitable for indoor and outdoor use'],
    uses: ['Stairs and ramps', 'Loading docks', 'Locker rooms and pool areas', 'Machine shop floors'],
    category: 'safety-tapes'
  }
];

export const CATEGORIES: Category[] = [
    { id: 'adhesive-tapes', name: 'Adhesive Tapes', icon: PackageIcon },
    { id: 'specialty-tapes', name: 'Specialty Tapes', icon: SparklesIcon },
    { id: 'double-sided-tapes', name: 'Double Sided Tapes', icon: LayersIcon },
    { id: 'antistatic-tapes', name: 'Antistatic Tapes', icon: ZapIcon },
    { id: 'printing-tapes', name: 'Printing Tapes', icon: ScissorsIcon },
    { id: 'safety-tapes', name: 'Safety Tapes', icon: ShieldCheckIcon },
];

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
];
