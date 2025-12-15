import CanaanBgImg from '~/assets/images/canaan.jpg';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.CANAAN,
  tileImg: CanaanBgImg,
  title: 'CANAAN',
  subTitle:
    'A modern residence in Thiruvananthapuram, thoughtfully designed with sustainability in mind.',
  location: 'Powdikonam, Trivandrum',
  completionYear: '2019',
  area: '2,530 sqft',
  duration: '4 months',
  budget: '₹28 lakh ',
  overview:
    'The Canaan Residence is a thoughtfully designed home that harmoniously blends traditional Kerala architecture with sustainable practices. Situated in a valley between two major hills, the residence is shaped by its natural contours, fostering a strong connection between the indoor and outdoor environments.',
  designIntent:
    'The design emphasizes passive cooling and natural ventilation, achieved through a central courtyard that connects every space on the ground floor. This courtyard not only enhances light and air circulation but also integrates a water body to cool the breeze entering the structure, ensuring thermal comfort throughout the year.',
  materialsAndTechniques: [
    {
      title: 'Salvaged Materials',
      description: 'Reused Mangalore tiles, wood, and reinforcement rods.',
    },
    {
      title: 'Rat Trap Bond Wall System',
      description: 'Reduces heat transfer for improved thermal comfort.',
    },
    {
      title: 'Bottle Wall',
      description:
        'Distinctive feature in the tower room, reduces structural load.',
    },
    {
      title: 'Bamboo Slab Roofing',
      description:
        'Locally sourced bamboo enhances natural insulation and minimizes water leakage.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Recycled Materials',
      description: '90% of construction materials are reused, reducing waste.',
    },
    {
      title: 'Rainwater Harvesting',
      description: 'Collects water in a courtyard tank for reuse.',
    },
    {
      title: 'Shading and Vegetation',
      description: 'Minimizes solar radiation and promotes energy efficiency.',
    },
    {
      title: 'Stack Effect Cooling',
      description: 'Natural airflow system ensures consistent cooling.',
    },
    {
      title: 'Renewable Resources',
      description:
        'Use of bamboo and other eco-friendly materials reduces environmental impact.',
    },
  ],
  keyFeatures: [
    {
      title: 'Central Courtyard',
      description:
        'Focal point for passive lighting, ventilation, and thermal comfort.',
    },
    {
      title: 'Bottle Wall',
      description:
        'Innovative design element supporting the tower room structure.',
    },
    {
      title: 'Reused Materials',
      description: 'Includes doors, windows, and reinforcement rods.',
    },
    {
      title: 'Bamboo Slab Roofing',
      description: 'Enhances natural insulation and minimizes water leakage.',
    },
    {
      title: 'Thermal Analysis',
      description:
        'Strategic shading and ventilation maintain comfort in all seasons.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Kerala Architectural Heritage',
      description:
        'Integrates traditional design with modern sustainable practices.',
    },
    {
      title: 'Harmonious Placement',
      description:
        "The home is designed to blend with the valley's natural contours.",
    },
    {
      title: 'Indoor-Outdoor Connection',
      description: 'Enhances living experience through seamless transitions.',
    },
    {
      title: 'Joint Family Living',
      description: 'Promotes unity within a sustainably built environment.',
    },
  ],
  outcome:
    "The Canaan Residence, the architect's own home, combines traditional Kerala architecture with sustainable practices. It showcases innovative materials and techniques while respecting the site’s natural contours. This home serves as an inspiring model for eco-conscious living, encouraging others to adopt sustainable design.",
  testimonial:
    'A glimpse into Project Canaan, showcasing its sustainable design features and the innovative approaches that make it an eco-friendly haven.',
  testimonialVideo:
    'https://www.youtube.com/embed/B5cMCt0_VL8?si=3odiSBYhPiZjukSF',
  admiration:
    'Project Canaan is not just a house; it’s a statement of how thoughtful design and sustainability can coexist beautifully. This project is a benchmark for future green architecture.',
  featuredVideos: [
    {
      title: 'Project Canaan: Sustainable Architecture Walkthrough',
      description:
        'This video offers an in-depth walkthrough of Project Canaan, showcasing its sustainable design features, including passive cooling systems, local material usage, and rainwater harvesting.',
      video: 'https://www.youtube.com/embed/FQNXv0QjVfg',
    },
    {
      title: 'Incorporating Traditional Techniques for Modern Sustainability',
      description:
        'Discover how Project Canaan incorporates traditional architectural techniques adapted to modern sustainability needs, blending aesthetic appeal with eco-conscious design.',
      video: 'https://www.youtube.com/embed/nag5n_bDz_c',
    },
    {
      title: 'Passive Cooling and Thermal Comfort at Project Canaan',
      description:
        'Explore the passive cooling strategies used at Project Canaan, with a focus on the innovative roof design and cross-ventilation methods that enhance thermal comfort.',
      video: 'https://www.youtube.com/embed/wkCBJ-Y_7ho?t=21s',
    },
    {
      title: 'The Vision Behind Project Canaan: An Architectural Insight',
      description: `In this video, the architect narrates the design philosophy and the sustainable strategies implemented at Project Canaan, providing insight into the thoughtful integration of eco-friendly practices within the home's architecture.`,
      video: 'https://www.youtube.com/embed/9w7kEwVBmEk',
    },
  ],
  ctaId: Work.SHIRE,
  images: Array.from(
    { length: 30 },
    (_, index) => `/canaan/${(index + 1).toString()}.jpg`,
  ),
  imageCount: 30,
};
