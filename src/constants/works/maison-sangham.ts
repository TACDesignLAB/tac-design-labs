import MaisonSanghamBgImg from '~/assets/images/maison-sangham.jpg';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.MAISONSANGHAM,
  tileImg: MaisonSanghamBgImg,
  title: 'MAISON SANGHAM',
  subTitle:
    'A sustainable homestay that blends nature, tradition, and mindful living.',
  location: 'Varkala, Trivandrum',
  completionYear: '2024',
  area: '4,110 sq. ft.',
  duration: '11 months',
  budget: '₹70 lakhs',
  overview:
    'Maison Sangham, nestled in the calm landscapes of Varkala, redefines eco-conscious hospitality through sustainable building methods. Designed as a dual-purpose space, with a homestay below and residence above, it offers guests an immersive, nature-connected experience that promotes mindful and responsible living.',
  designIntent:
    'The design philosophy centers around climate-responsive and nature-integrated living. Each of the three guest cottages was designed to ensure privacy, cross ventilation, and abundant natural light. Arched verandas, earthy tones, and open spaces create a cozy, home-like ambiance, while the upper residential unit maintains seamless spatial connectivity and comfort. The intent was not just to build a structure, but to create a space that inspires awareness about sustainable living.',
  keyFeatures: [
    {
      title: 'Cottages',
      description:
        'Three self-contained units with living, kitchen, bedspace, and attached toilets.',
    },
    {
      title: 'Bottle Walls',
      description:
        'Beer bottle partitions offering privacy with colorful light play.',
    },
    {
      title: 'Roofing',
      description:
        'Filler slab roof with sloping truss shades using reused Mangalore tiles for thermal comfort.',
    },
    {
      title: 'Accessibility',
      description: 'Ramp access ensuring inclusivity for all.',
    },
    {
      title: 'Residence',
      description:
        'Upper unit with open kitchen, living, pooja, and meditation balconies.',
    },
    {
      title: 'Outdoor Spaces',
      description:
        'Pond and gathering areas enhancing the retreat-like experience.',
    },
  ],
  materialPallete: [
    {
      title: 'Foundation',
      description: 'Locally sourced granite stones.',
    },
    {
      title: 'Walls',
      description:
        'Combination of reused and new mud bricks with rat-trap bond.',
    },
    {
      title: 'Roofing',
      description: 'Filler slab with reused Mangalore pattern tiles.',
    },
    {
      title: 'Flooring',
      description: 'Oxide and terracotta tile finishes.',
    },
    {
      title: 'Partitions',
      description: 'Upcycled glass bottle walls.',
    },
    {
      title: 'Doors and Windows',
      description: 'Fully reused timber frames and panels.',
    },
    {
      title: 'Paint',
      description:
        'Lime wash for ceilings to maintain breathability and reduce VOCs.',
    },
  ],
  functionalLayout: [
    {
      title: 'Ground Floor',
      description:
        'Three independent cottages, each with a veranda, compact living space, bed space, kitchenette, and bathroom.',
    },
    {
      title: 'First Floor',
      description:
        'Two-bedroom residential unit with open kitchen, dining, formal living, pooja, and twin balconies for yoga and meditation.',
    },
    {
      title: 'Outdoor Spaces',
      description:
        'A pond, gathering hut, and landscaped green zones that encourage community and connection with nature.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Reduced Concrete Usage',
      description: 'Arches replace beams, optimizing material efficiency.',
    },
    {
      title: 'Reused Materials',
      description:
        'Over 50% of the structure uses reclaimed bricks, tiles, wood, and bottles.',
    },
    {
      title: 'Passive Cooling',
      description:
        'Rat trap bond and filler slab technologies ensure thermal comfort.',
    },
    {
      title: 'Energy Efficiency',
      description: 'Solar water heaters installed for renewable energy use.',
    },
    {
      title: 'Local Engagement',
      description:
        'Labor, artisans, and materials sourced entirely from the local community.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Vernacular Influence',
      description:
        "Reflects Kerala's architectural charm through sloping roofs, exposed brick, and arched verandas.",
    },
    {
      title: 'Material Expression',
      description:
        'Rustic, minimalist palette celebrating the raw beauty of natural materials.',
    },
    {
      title: 'Craftsmanship',
      description:
        'Lime-washed ceilings and bottle-work details echo sustainable and locally rooted design traditions.',
    },
  ],
  outcome:
    'Maison Sangham stands completed and fully operational, welcoming guests seeking a mindful retreat amidst nature. Visitors appreciate its down-to-earth atmosphere, traditional charm, and ecological balance, making it not just a place to stay, but an experience that reconnects one with simplicity and serenity.',
  testimonial: '',
  testimonialVideo: '',
  admiration:
    'Maison Sangham exemplifies how architecture can nurture both people and the planet, bridging traditional wisdom and sustainable innovation to create an immersive, eco-conscious living experience.',
  ctaId: Work.CANAAN,
  images: Array.from(
    { length: 28 },
    (_, index) => `/maison-sangham/${(index + 1).toString()}.jpg`,
  ),
  imageCount: 28,
};
