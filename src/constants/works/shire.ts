import ShireBgImg from '~/assets/images/shire.jpg';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.SHIRE,
  tileImg: ShireBgImg,
  title: 'SHIRE',
  subTitle:
    'A sustainably built house in Udupi, balancing innovation and traditional architecture.',
  location: 'Moodabettu, Udupi',
  completionYear: '2019',
  area: '2100 sqft',
  duration: '9 months',
  budget: '35 lakhs',
  overview:
    'Shire, located in Moodabettu, Udupi, is a 2100 sqft sustainable home blending traditional charm with modern functionality. Completed in 9 months on a 35-lakh budget, it tackles local challenges like waterlogging with innovative elevation techniques, offering a cozy and eco-conscious living space.',
  designIntent:
    'Shire embodies climate-responsive and sustainable design. The 1.2-meter elevated structure prevents flooding, while features like cross ventilation, double-height spaces, and passive cooling ensure comfort. Locally sourced materials, rainwater harvesting, and a biogas plant enhance its eco-friendly ethos.',
  keyFeatures: [
    {
      title: 'Elevated Structure',
      description: 'Raised 1.2 meters to mitigate waterlogging.',
    },
    {
      title: 'Accessibility',
      description: 'Ramp ensures seamless access for elderly residents.',
    },
    {
      title: 'Double-Height Roof',
      description:
        'Over dining and kitchen areas for natural light and ventilation.',
    },
    {
      title: 'Cross Ventilation',
      description: 'All rooms ensure cooler interiors during summer.',
    },
    {
      title: 'Sustainable Materials',
      description:
        'Locally sourced, including reused doors, windows, and rat trap bond bricks.',
    },
    {
      title: 'Rainwater Harvesting',
      description:
        '30,000-liter tank beneath the raised basement for efficient space management.',
    },
    {
      title: 'Biogas Plant',
      description:
        'Processes toilet and biodegradable waste to produce methane gas for cooking.',
    },
    {
      title: 'Recycled Materials',
      description:
        'Used beer bottles replace stained glass, creating a colourful, ambient lighting effect indoors.',
    },
  ],
  materialPallete: [
    {
      title: 'Foundation and Basement',
      description: 'Stone.',
    },
    {
      title: 'Walls',
      description: 'Country burnt bricks using rat trap bond technology.',
    },
    {
      title: 'Roofs',
      description: 'Filler slab and Mangalore tiles on sloping areas.',
    },
    {
      title: 'Floor Finishes',
      description: 'Yellow oxide and terracotta tiles.',
    },
    {
      title: 'Interior Finishes',
      description: 'Mud plaster, eco-friendly mud paints, and lime wash.',
    },
  ],
  functionalLayout: [
    {
      title: 'Open Plan',
      description:
        'The living, dining, and kitchen areas are interconnected in an L-shape, ensuring privacy in the kitchen while maintaining an open feel.',
    },
    {
      title: 'Private Bedrooms',
      description: 'Separated from communal spaces to provide privacy.',
    },
    {
      title: 'Mezzanine Level Workspace',
      description:
        'Houses a work and library space with a balcony overlooking the street, with storage and a car porch below.',
    },
    {
      title: 'Dedicated Dog Space',
      description: 'Designed for pets with separate access on the first floor.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Energy-efficiency',
      description:
        'With the incorporation of passive cooling systems and the use of reused materials.',
    },
    {
      title: 'Biogas plant',
      description: 'That processes waste, reducing the environmental impact.',
    },
    {
      title: 'Solar Heater',
      description: 'Use of renewable resources like solar water heating.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Traditional Design',
      description:
        'Reflects traditional Udupi architecture with rustic aesthetics.',
    },
    {
      title: 'Local Materials',
      description:
        'Highlights regional heritage through natural and local resources.',
    },
  ],
  outcome: `The Shire project was completed successfully, fulfilling the owners' expectations and those of the local community. It has inspired others in the region to explore sustainable and eco-friendly construction practices.`,
  testimonial:
    'A heartfelt testimonial from the clients of Project Shire, highlighting the unique design, sustainable features, and the personalized approach that turned their dream home into a reality.',
  testimonialVideo: 'https://www.youtube.com/embed/qpOZ6rXgR_s',
  admiration:
    'Project Shire is a testament to how personalized design and sustainability can create a harmonious living space. This project beautifully demonstrates how eco-conscious choices enhance both functionality and aesthetics.',
  ctaId: Work.SANCHIBAGS,
  images: Array.from(
    { length: 28 },
    (_, index) => `/shire/${(index + 1).toString()}.jpg`,
  ),
  imageCount: 28,
};
