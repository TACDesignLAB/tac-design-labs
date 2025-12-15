import SanchiBgImg from '~/assets/images/sanchi.jpg';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.SANCHIBAGS,
  tileImg: SanchiBgImg,
  title: 'SANCHI BAGS TAILORING UNIT',
  shortTitle: 'Sanchi',
  subTitle:
    'A functional and eco-friendly tailoring unit, showcasing practicality and sustainable design.',
  location: 'Venjaramoodu, Trivandrum',
  completionYear: 'September, 2023',
  area: '260 sqm (2,800 sqft)',
  duration: '6 months',
  budget: '₹30.8 lakh',
  overview:
    'The Sanchi Bags Tailoring Unit is an institutional building that embodies the principles of sustainability and community empowerment. Designed to house the production of Sanchi bags and other handcrafted items, the structure serves as both a functional workspace and a symbol of local resilience.',
  designIntent: `The building's design is deeply integrated with its surroundings, occupying the flatter terrain of a contoured site. The architecture prioritizes minimal environmental disruption while maximizing comfort and efficiency for the workers. The central octagonal hub is the heart of the building, offering an open, unobstructed space that facilitates the primary activities of tailoring and storage.`,
  materialsAndTechniques: [
    {
      title: 'Locally Sourced Materials',
      description:
        'Approximately 95% of materials sourced within a 30 km radius to minimize environmental impact.',
    },
    {
      title: 'Rat Trap Bond Wall System',
      description:
        'Used in bricklaying to enhance insulation and reduce material usage.',
    },
    {
      title: 'Traditional Trussed Roofing',
      description:
        'Includes skylights and clerestory windows for natural light and ventilation minimizing the reliance on artificial energy sources.',
    },
  ],
  keyFeatures: [
    {
      title: 'Central Octagonal Unit',
      description:
        'Serves as the main occupational space, designed for maximum transparency and accessibility.',
    },
    {
      title: 'Ancillary Spaces',
      description:
        'Include a dining area with an attic for temporary accommodation and an office with a custom bay window.',
    },
    {
      title: 'Clerestory Windows and Skylights',
      description:
        'Enhance natural lighting and promote a continuous passive cooling strategy.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Rat-trap Bond Walls',
      description:
        'Provides enhanced insulation, reducing indoor temperatures and energy consumption.',
    },
    {
      title: 'Passive Cooling',
      description:
        'Achieved through strategically placed windows, clerestory, and the building’s octagonal layout, which facilitates natural air circulation.',
    },
    {
      title: 'Material Reuse',
      description:
        'Doors, windows, rafters, purlins, and Mangalore tiles are repurposed from nearby sites, minimizing environmental impact and construction costs.',
    },
  ],
  outcome:
    'The Sanchi Bags Tailoring Unit is not just a place of work but a testament to the possibility of merging architectural design with sustainable practices, creating a space that supports both the business and the community it serves.',
  testimonial:
    'A walkthrough of the Sanchi Bags Tailoring Unit, featuring architect Ashams Ravi and a heartfelt testimonial from the owner on their experience working with TAC Design LAB.',
  testimonialVideo: 'https://youtube.com/embed/P-sFe-UYqD4?si=1IAfM27ez2nKi-0E',
  admiration:
    'The Sanchi Bags project showcases the power of sustainable design to uplift local communities and promote ethical production. This initiative goes beyond architecture, representing a fusion of creativity, sustainability, and social impact.',
  ctaId: Work.HAVEN,
  images: Array.from(
    { length: 20 },
    (_, index) => `/sanchi/${(index + 1).toString()}.jpg`,
  ),
  imageCount: 20,
};
