import HavenBgImg from '~/assets/images/haven.jpg';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.HAVEN,
  tileImg: HavenBgImg,
  title: 'HAVEN',
  subTitle: 'A fusion of Kerala traditions and climate-responsive innovation.',
  location: 'Manvilla, Trivandrum',
  completionYear: '2023',
  area: '1,539 sq. ft.',
  duration: '7 months',
  budget: '₹25 lakhs',
  overview:
    'Haven, a climate-responsive residential project in the heart of Manvila, Trivandrum, exemplifies sustainable architecture fused with modern and traditional Kerala design elements. With a compact site of 4.25 cents, the project strikes a perfect balance between maximizing interior functionality and creating ample exterior spaces.',
  designIntent:
    'The design prioritizes thermal comfort, natural light, and ventilation through passive cooling techniques. A central courtyard, conceived in a circular form, anchors the design, enabling a radial layout that minimizes circulation space while maintaining functionality. The double-height living space, enhanced by a gable roof, adds volume and ventilation.',
  keyFeatures: [
    {
      title: 'Central Circular Courtyard',
      description:
        'Enhances passive cooling and serves as the focal point for radial design.',
    },
    {
      title: 'Double-Height Living Space',
      description:
        'A gable roof accentuates the volume and facilitates airflow.',
    },
    {
      title: 'Rat Trap Bond Masonry',
      description: 'Reduces material use by up to 30%.',
    },
    {
      title: 'Freestanding Staircase',
      description:
        "Precast steps align seamlessly with the courtyard's design.",
    },
    {
      title: 'Bottle Work Details',
      description:
        'Replace traditional stained glass, reducing carbon footprint.',
    },
  ],
  materialPallete: [
    {
      title: 'Foundation',
      description: 'Reused granite stones.',
    },
    {
      title: 'Walls',
      description: 'Reused bricks.',
    },
    {
      title: 'Roofing',
      description: 'Filler slab technology.',
    },
    {
      title: 'Flooring',
      description: 'Oxide finishes and terracotta tiles.',
    },
    {
      title: 'Windows and Doors',
      description: 'Reclaimed materials.',
    },
    {
      title: 'Paint',
      description: 'Lime wash for eco-friendliness.',
    },
  ],
  functionalLayout: [
    {
      title: 'Ground Floor',
      description:
        'Features a veranda, living area, open kitchen, work area, central courtyard, and a bedroom with an attached bathroom.',
    },
    {
      title: 'First Floor',
      description:
        'Includes two bedrooms with attached bathrooms and a balcony.',
    },
    {
      title: 'Circular Courtyard',
      description:
        'Acts as the design’s focal point, optimizing space and enhancing connectivity with minimal circulation.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Material Reuse',
      description:
        'Over 70% of the materials, including bricks and wood, are reclaimed.',
    },
    {
      title: 'Energy Efficiency',
      description:
        'Natural light and passive cooling reduce energy requirements.',
    },
    {
      title: 'Renewable Resources',
      description:
        'Solar water heating, bio-gas integration, and constructed wetlands for wastewater management.',
    },
    {
      title: 'Waste Reduction',
      description:
        'Kitchen and toilet waste processed through biogas contributes to cooking fuel.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Traditional Kerala Elements',
      description:
        'Incorporates courtyard-centric designs, reflecting the region’s architectural heritage.',
    },
    {
      title: 'Modern Minimalism',
      description:
        'Blends simplicity with functionality for a contemporary appeal.',
    },
    {
      title: 'Rustic Aesthetic',
      description:
        'Features exposed brickwork and earthy tones for a timeless and grounded look.',
    },
    {
      title: 'Contextual Design',
      description:
        'Combines cultural influences with practicality to create a harmonious living space.',
    },
  ],
  outcome:
    "Haven was completed successfully, meeting the clients' requirements for a sustainable, functional, and aesthetically pleasing family home. The clients expressed satisfaction with the design's effective use of space, eco-conscious materials, and thoughtful execution.",
  testimonial:
    'A heartfelt testimonial from the clients of Haven, Manvilla, sharing their experience of a thoughtfully designed space, blending sustainability and innovation to create their perfect sanctuary.',
  testimonialVideo:
    'https://www.youtube.com/embed/n_6n7HprSFM?si=dAqhrCCIWsacLkl4',
  admiration:
    'Haven exemplifies how sustainable design and cultural heritage can merge to create a functional, eco-conscious, and aesthetically enriching family home. This project beautifully balances tradition, innovation, and environmental responsibility.',
  ctaId: Work.CHEMBAKASSERY,
  images: Array.from(
    { length: 29 },
    (_, index) => `/haven/${(index + 1).toString()}.jpg`,
  ),
  imageCount: 29,
};
