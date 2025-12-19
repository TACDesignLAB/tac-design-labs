import BijuBgImg from '~/assets/images/biju.png';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.BIJU,
  tileImg: BijuBgImg,
  title: 'BIJU RESIDENCE',
  shortTitle: 'BIJU',
  subTitle:
    'An adaptive reuse project that gives a 1970s home a new life while keeping its soul intact.',
  location: 'Balaramapuram, Trivandrum',
  completionYear: '2025',
  area: '2,206 sq.ft → 4,643 sq.ft',
  duration: '1 year',
  budget: '₹1 crore',
  overview:
    "Originally built around 1972, this family home at Balaramapuram has been reimagined to suit modern living while retaining its traditional warmth. The transformation was guided by the client's wish for larger, more breathable spaces that blend comfort, culture, and contemporary style.",
  designIntent:
    'The brief was simple: make the house feel bigger and breathe easier without erasing its past. We balanced conservation with selective intervention, opening up cramped rooms, improving cross ventilation, and introducing new amenities so the home could welcome both daily life and leisure.',
  keyFeatures: [
    {
      title: 'Open Living',
      description:
        'Enlarged living and dining areas designed in an open plan for better connection and flow.',
    },
    {
      title: 'Entertainment Zone',
      description:
        'Addition of a home theatre and recreational floor for leisure and family gatherings.',
    },
    {
      title: 'Outdoor Comfort',
      description:
        'A swimming pool and improved landscape enhance outdoor living.',
    },
    {
      title: 'Verandas',
      description:
        'Two new verandas on the east and south sides provide shaded sit-outs.',
    },
    {
      title: 'Structural Stability',
      description:
        'Reinforced key structural areas where walls were removed to maintain safety and balance.',
    },
  ],
  materialPallete: [
    {
      title: 'Base Structure',
      description: 'Existing brick, timber, and concrete framework retained.',
    },
    {
      title: 'Timber Restoration',
      description:
        'Original wood repaired; only damaged sections replaced to preserve character.',
    },
    {
      title: 'Roofing',
      description:
        'Reused Mangalore tiles and traditional wooden truss roofing continued for new additions.',
    },
    {
      title: 'Material Continuity',
      description:
        'New materials matched the existing palette to maintain a seamless visual blend.',
    },
  ],
  functionalLayout: [
    {
      title: 'Open Plan Living',
      description:
        'Removed internal partitions to connect the living, dining, and informal lounge.',
    },
    {
      title: 'Modern Kitchen',
      description:
        'Traditional kitchen reconfigured into a functional, contemporary layout.',
    },
    {
      title: 'Additional Floor',
      description:
        'Upper floor introduced to accommodate bedrooms and a recreational zone.',
    },
    {
      title: 'Upgraded Services',
      description:
        'Electrical and sanitary systems modernised for comfort and efficiency.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Solar Power',
      description:
        '8 kW solar PV system installed for on-site renewable energy.',
    },
    {
      title: 'Energy Efficiency',
      description:
        'LED lighting, BLDC fans, and 5-star rated appliances minimise power use.',
    },
    {
      title: 'Water Recharge',
      description: 'Rainwater directed to recharge the existing well.',
    },
    {
      title: 'Material Reuse',
      description:
        'Salvaged wood and Mangalore tiles reused to reduce waste and embodied energy.',
    },
    {
      title: 'Passive Design',
      description:
        'Verandas, sloping roofs, and cross ventilation enhance thermal comfort naturally.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Regional Identity',
      description:
        'Retained Kerala-style elements like sloping roofs, chutt verandas, and poomukham.',
    },
    {
      title: 'Blending Eras',
      description:
        'Traditional architectural vocabulary integrated with contemporary design for harmony.',
    },
    {
      title: 'Local Craftsmanship',
      description:
        'Skilled local artisans engaged to preserve detailing and maintain authenticity.',
    },
  ],
  outcome:
    'Completed in March 2025, the house now reads as a contemporary home rooted in local tradition. The owners report ease of living and warmth of the familiar, while the neighbourhood appreciated the sensitive upgrade. The project reinforced a key lesson: adaptive reuse needs patience, careful inspection and structural attention are essential to a successful, lasting transformation.',
  testimonial: '',
  testimonialVideo: '',
  admiration:
    'The Biju Residence stands as a quiet example of how homes can evolve without losing their essence. By balancing tradition with innovation, this adaptive reuse project breathes new life into an old structure, showing that conservation can be as much about continuity as it is about change.',
  featuredVideos: [],
  ctaId: Work.SHIRE,
  images: Array.from(
    { length: 22 },
    (_, index) => `/biju/${(index + 1).toString()}.png`,
  ),
  imageCount: 22,
};
