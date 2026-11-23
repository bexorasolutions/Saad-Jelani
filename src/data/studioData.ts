export type ServiceId =
  | 'bespoke-kitchens'
  | 'supply-fitting'
  | 'bedrooms'
  | 'media-walls'
  | 'wall-panelling'
  | 'venetian-plaster';

export interface StudioService {
  id: ServiceId;
  number: string;
  title: string;
  categoryLabel: string;
  scopeNote: string;
  description: string;
}

export type PortfolioCategory =
  | 'all'
  | 'kitchens'
  | 'bedrooms'
  | 'media-panelling'
  | 'venetian-plaster';

export interface PortfolioPlate {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'all'>;
  categoryLabel: string;
  discipline: string;
  materials: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
  serviceId: ServiceId;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const BRAND_LOGO_PATH =
  '/assets/aistudio/2f445d91-2973-4178-b5eb-0123aeee7d39_7159d607.png';

export const BUSINESS_CONTACT = {
  name: 'Belle & Bow Kitchens',
  tagline: 'Beautifully Designed. Perfectly Unified.',
  location: 'Telford, United Kingdom',
  phoneDisplay: '07880 495995',
  phoneHref: 'tel:+447880495995',
  email: 'jtinteriors10@gmail.com',
  whatsappUrl: 'https://wa.me/447880495995',
  serviceAreas: ['Telford', 'Shropshire', 'Staffordshire', 'Birmingham'],
};

export const TRUST_CREDENTIALS = [
  {
    label: 'BiKBBI Member',
    detail: 'Accredited Kitchen & Bedroom Installation Standards',
  },
  {
    label: '£5M Public Liability',
    detail: 'Comprehensive Protection for Your Home',
  },
  {
    label: '10+ Years Experience',
    detail: 'Specialist Joinery & Interior Craftsmanship',
  },
  {
    label: 'Regional Studio',
    detail: 'Telford · Shropshire · Staffordshire · Birmingham',
  },
];

export const STUDIO_SERVICES: StudioService[] = [
  {
    id: 'bespoke-kitchens',
    number: '01',
    title: 'Bespoke Kitchen Design & Installation',
    categoryLabel: 'Architecture · Cabinetry · Project Management',
    scopeNote: 'Full Concept to Handover',
    description:
      'Individually proportioned kitchens tailored to your architecture and daily rituals. From spatial layouts and custom islands to stone worktops, lighting, and BiKBBI-accredited installation.',
  },
  {
    id: 'supply-fitting',
    number: '02',
    title: 'Kitchen Supply & Fitting',
    categoryLabel: 'Curated Cabinetry · Precision Installation',
    scopeNote: 'Supply & Expert Fitting',
    description:
      'Seamless procurement and installation of premium British and European cabinetry, integrated appliances, and solid work surfaces—fitted with exacting joinery tolerances.',
  },
  {
    id: 'bedrooms',
    number: '03',
    title: 'Bedroom Design & Installation',
    categoryLabel: 'Fitted Wardrobes · Dressing Rooms',
    scopeNote: 'Tailored Storage',
    description:
      'Calm, floor-to-ceiling fitted wardrobes, dressing alcoves, and integrated bedside joinery crafted to maximise storage while preserving serene architectural lines.',
  },
  {
    id: 'media-walls',
    number: '04',
    title: 'Media Walls',
    categoryLabel: 'Living Spaces · Concealed Integration',
    scopeNote: 'Custom Living Joinery',
    description:
      'Bespoke feature media walls incorporating recessed televisions, linear fireplaces, acoustic slatted timber, ambient LED coffers, and hidden cable management.',
  },
  {
    id: 'wall-panelling',
    number: '05',
    title: 'Decorative Wall Panelling',
    categoryLabel: 'Wainscoting · Fluted Timber · Mouldings',
    scopeNote: 'Architectural Detailing',
    description:
      'Classic Shaker wainscoting, heritage picture-frame mouldings, and contemporary fluted oak panelling installed to bring tactile rhythm and unity across adjoining rooms.',
  },
  {
    id: 'venetian-plaster',
    number: '06',
    title: 'Venetian Plaster Finishes',
    categoryLabel: 'Artisan Surfaces · Mineral Sheen',
    scopeNote: 'Hand-Trowelled Finish',
    description:
      'Authentic multi-coat Italian lime and marble plaster applied by hand to create luminous, subtly textured walls that elevate kitchens, hallways, and feature fireplaces.',
  },
];

export const PORTFOLIO_PLATES: PortfolioPlate[] = [
  {
    id: 'plate-navy-shaker',
    title: 'Deep Navy Shaker & Honed Marble Island',
    category: 'kitchens',
    categoryLabel: 'Kitchens',
    discipline: 'Bespoke Kitchen Design & Installation',
    materials: 'Hand-Painted Navy Timber · Calacatta Marble · Brushed Brass',
    description:
      'An editorial showcase of deep navy cabinetry balanced against warm honed marble veining, unlacquered champagne brass hardware, and wide-plank natural oak flooring.',
    imageSrc: '/src/assets/images/hero_luxury_kitchen_1795463869280.jpg',
    imageAlt:
      'Bespoke deep navy Shaker kitchen with honed marble island and champagne brass lighting',
    featured: true,
    serviceId: 'bespoke-kitchens',
  },
  {
    id: 'plate-ivory-kitchen',
    title: 'Warm Ivory Cabinetry & Contrasting Island',
    category: 'kitchens',
    categoryLabel: 'Kitchens',
    discipline: 'Kitchen Supply & Fitting',
    materials: 'Cashmere Ivory Joinery · Navy Island · Limestone Floor',
    description:
      'Open-plan kitchen and dining architecture uniting full-height larder cabinetry in warm ivory with a deep navy preparation island and antique brass canopy detailing.',
    imageSrc: '/src/assets/images/portfolio_shaker_kitchen_1795463870226.jpg',
    imageAlt:
      'Open-plan ivory bespoke kitchen with contrasting navy island and brass pendants',
    serviceId: 'supply-fitting',
  },
  {
    id: 'plate-bedroom-suite',
    title: 'Floor-to-Ceiling Cashmere Fitted Wardrobes',
    category: 'bedrooms',
    categoryLabel: 'Bedrooms',
    discipline: 'Bedroom Design & Installation',
    materials: 'Warm Ivory Shaker Doors · Champagne Handles · Cove Lighting',
    description:
      'Full-height tailored wardrobe run with subtle architectural mouldings, warm recessed ceiling illumination, and cohesive proportions designed for restful bedrooms.',
    imageSrc: '/src/assets/images/portfolio_bedroom_wardrobe_1795463870631.jpg',
    imageAlt:
      'Luxury bespoke fitted bedroom with floor-to-ceiling cashmere ivory wardrobes',
    serviceId: 'bedrooms',
  },
  {
    id: 'plate-media-wall',
    title: 'Architectural Navy & Fluted Oak Media Wall',
    category: 'media-panelling',
    categoryLabel: 'Media Walls & Panelling',
    discipline: 'Media Walls & Wall Panelling',
    materials: 'Midnight Navy Joinery · Natural Oak · Limestone Hearth',
    description:
      'Symmetrical living room centrepiece combining recessed screen framing, linear fireplace hearth, lit oak display alcoves, and continuous fluted wall panelling.',
    imageSrc: '/src/assets/images/portfolio_media_wall_1795463871536.jpg',
    imageAlt:
      'Bespoke navy and oak living room media wall with recessed fireplace and warm LED shelving',
    serviceId: 'media-walls',
  },
  {
    id: 'plate-venetian-plaster',
    title: 'Hand-Trowelled Venetian Plaster & Wainscoting',
    category: 'venetian-plaster',
    categoryLabel: 'Venetian Plaster',
    discipline: 'Venetian Plaster & Decorative Panelling',
    materials: 'Warm Ivory Lime Plaster · Timber Wainscoting · Brass Inlay',
    description:
      'Mineral-rich Venetian plaster catching warm wall-sconce light above precision timber panelling with refined champagne brass inlay trim.',
    imageSrc: '/src/assets/images/portfolio_venetian_plaster_1795463871487.jpg',
    imageAlt:
      'Warm ivory hand-trowelled Venetian plaster feature wall above dark timber panelling',
    serviceId: 'venetian-plaster',
  },
  {
    id: 'plate-joinery-detail',
    title: 'Cabinetry Joinery & Unlacquered Brass Detail',
    category: 'kitchens',
    categoryLabel: 'Kitchens',
    discipline: 'Bespoke Craftsmanship Detail',
    materials: 'Solid Painted Ash · Brushed Champagne Brass · Marble Edge',
    description:
      'A closer study of tactile woodgrain beneath matte navy lacquer, paired with solid cast brass cup handles and eased marble edge profiles.',
    imageSrc: '/src/assets/images/about_craftsmanship_detail_1795463868863.jpg',
    imageAlt:
      'Close-up of navy painted timber kitchen cabinetry with brushed champagne brass cup pull',
    serviceId: 'bespoke-kitchens',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Private Design Consultation',
    subtitle: 'Site Survey & Discovery',
    description:
      'We visit your home across Telford, Shropshire, Staffordshire, or Birmingham to measure your space, understand natural light, and discuss how your rooms should flow together.',
  },
  {
    number: '02',
    title: 'Unified Spatial & Material Design',
    subtitle: 'Joinery, Finishes & Palette',
    description:
      'Every element—from kitchen cabinetry and stone profiles to wardrobes, media walls, panelling, and Venetian plaster—is curated as one cohesive architectural specification.',
  },
  {
    number: '03',
    title: 'Precision Supply & Installation',
    subtitle: 'BiKBBI Accredited Craftsmanship',
    description:
      'With over 10 years of installation expertise and £5 million public liability insurance, our craftsmen manage fitting, joinery, and specialist wall finishes to exacting tolerances.',
  },
  {
    number: '04',
    title: 'Walkthrough & Handover',
    subtitle: 'Perfection in Every Detail',
    description:
      'We conduct a thorough inspection of every hinge, mitre, appliance integration, and hand-trowelled surface before handing over your newly unified living space.',
  },
];
