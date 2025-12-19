import StRochBgImg from '~/assets/images/st-roch.jpg';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.STROCH,
  tileImg: StRochBgImg,
  title: "ST. ROCH'S CONVENT CHAPEL",
  shortTitle: "ST. ROCH'S CHAPEL",
  subTitle:
    'A modest, contemplative chapel designed for quiet devotion and spiritual uplift within the convent compound.',
  location: 'Shankhumukham, Trivandrum',
  completionYear: '2025',
  area: '418.8 sq.ft',
  duration: '4 months',
  budget: '₹8.5 lakh',
  overview:
    "The St. Roch's Convent Chapel is a small, quiet space designed exclusively for the sisters of St. Roch's Convent. Built as an extension of their everyday life and prayer, the chapel reflects simplicity and spiritual calm. Its form and material palette blend gently with the century-old convent building, creating a seamless connection between the old and the new.",
  designIntent:
    'The design stems from a need for stillness and light. Shaped in an octagon, the chapel brings everyone closer to the altar, fostering a sense of togetherness during prayer. Every detail, from its earthy materials to the scale of its openings, was guided by the intent to create a sacred yet humble atmosphere that complements the timeless character of the convent.',
  keyFeatures: [
    {
      title: 'Centralised Octagonal Plan',
      description:
        'Positions the congregation around a central altar for an intimate, inclusive liturgy.',
    },
    {
      title: 'Clerestory Windows',
      description:
        'Eight-sided sloping roof with clerestory brings vertical shafts of morning and evening light that enhance the spiritual ambience.',
    },
    {
      title: 'Stained-Glass Openings',
      description:
        'Small pivoted stained-glass windows in the side walls and door create soft, coloured light and controlled ventilation.',
    },
    {
      title: 'Veranda Link',
      description:
        'A sheltered veranda connects the chapel directly to the existing convent, ensuring easy access and continuity with the campus.',
    },
    {
      title: 'Simple Sacristy',
      description:
        "A compact sacristy within the altar supports liturgical needs without compromising the chapel's modest scale.",
    },
  ],
  materialPallete: [
    {
      title: 'Foundation & Walls',
      description:
        'Stone foundation and brick walls in rat-trap bond for insulation and material efficiency.',
    },
    {
      title: 'Roofing',
      description:
        'Steel truss roof with reused Mangalore tiles for durability and thermal comfort.',
    },
    {
      title: 'Joinery',
      description:
        'Reclaimed timber doors and pivoted windows fitted with stained glass for soft, diffused light.',
    },
    {
      title: 'Brick Detailing',
      description:
        'Exposed brick corbels, arches, niches, and pivoted brick columns reflect local craftsmanship.',
    },
  ],
  functionalLayout: [
    {
      title: 'Octagonal Plan',
      description:
        'Altar placed on one side of the octagon opposite the main entrance; seating oriented toward it.',
    },
    {
      title: 'Veranda Link',
      description: 'Direct connection to the convent for easy access.',
    },
    {
      title: 'Compact Sacristy',
      description: 'Supports essential liturgical needs.',
    },
    {
      title: 'Natural Light & Air',
      description:
        'Clerestory and pivoted stained-glass windows for daylight and ventilation.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Passive Cooling',
      description:
        'Clerestory windows enable stack effect, keeping interiors naturally cool.',
    },
    {
      title: 'Natural Lighting',
      description:
        'Stained-glass and clerestory openings provide ample daylight, reducing artificial lighting.',
    },
    {
      title: 'Material Reuse',
      description:
        'Reused doors, windows, and tiles lower environmental impact and construction waste.',
    },
    {
      title: 'Thermal Comfort',
      description:
        'Rat-trap bond walls enhance insulation and energy efficiency.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Traditional Influence',
      description:
        'Incorporates Kerala architectural sensibilities with modest proportions and earthy materials.',
    },
    {
      title: 'Craft Detailing',
      description:
        'Highlights local craftsmanship through exposed brick corbels, arches, niches, and pivoted brick elements.',
    },
    {
      title: 'Spiritual Expression',
      description:
        'Stained glass and the octagonal form reinforce the sacred, contemplative character of the chapel.',
    },
  ],
  outcome:
    "The St. Roch's Convent Chapel was completed successfully, offering the sisters a serene, spiritually uplifting space for daily prayer. Its simplicity, reuse of materials, and harmony with the century-old convent have been warmly received by the community.",
  testimonial:
    "A space of peace and devotion. The chapel's simple beauty and natural light create an atmosphere perfect for prayer and reflection.",
  testimonialVideo: '',
  admiration:
    "The St. Roch's Convent Chapel demonstrates how modest means and careful detailing can create a serene, spiritually charged space. It celebrates simplicity, reuse, and a sensitive dialogue with its historic surroundings, offering the sisters a private, dignified place for devotion.",
  featuredVideos: [
    {
      title: 'Chapel Walkthrough',
      description:
        "A short walkthrough of the St. Roch's Convent Chapel, highlighting the octagonal plan, stained-glass windows, clerestory light, and key architectural elements that define its serene spatial character.",
      video: '',
    },
  ],
  ctaId: Work.CANAAN,
  images: Array.from(
    { length: 16 },
    (_, index) => `/st-roch/${(index + 1).toString()}.jpg`,
  ),
  imageCount: 16,
};
