import ChembakasseryBgImg from '~/assets/images/chembakassery.jpg';

import { Work } from './models';
import type { WorkDetails } from './models';

export const data: WorkDetails = {
  id: Work.CHEMBAKASSERY,
  tileImg: ChembakasseryBgImg,
  title: 'CHEMBAKASSERY',
  subTitle: 'A Timeless Kerala Abode Rooted in Tradition and Sustainability.',
  location: 'Kallikaad, Kattakada',
  completionYear: '2024',
  area: '2079 sqft',
  duration: '8 months',
  budget: '40 lakhs',
  overview:
    "Chembakassery, located in Kallikaad, Kattakada, is a 2079-square-foot residence that artfully integrates Kerala's traditional architectural elements with sustainable design principles. Built for Murugesh and Maya, this project balances cultural authenticity with eco-conscious living. Completed within eight months, the house is a sanctuary that embodies Kerala’s architectural heritage while prioritizing modern sustainability.",
  designIntent:
    "The design embraces Kerala's traditional architectural form, harmonizing the house with its surrounding landscape. To achieve this, features like a central courtyard for passive cooling and a chuttu verandah encircling the living and dining spaces were incorporated. This blend of tradition and innovation enhances the home's functionality while providing thermal comfort.",
  keyFeatures: [
    {
      title: 'Central Courtyard',
      description:
        'RaEnables natural ventilation and cooling, echoing the traditional nalukettu style.',
    },
    {
      title: 'Chuttu Verandah',
      description:
        'Encircles the house to reduce heat gain and create a seamless indoor-outdoor interface.',
    },
    {
      title: 'Poomukham',
      description:
        'An inviting main veranda with intricate detailing that welcomes guests.',
    },
    {
      title: 'Tower Space and Mezzanine Floor',
      description: 'Add both functional utility and aesthetic depth.',
    },
    {
      title: 'Reclaimed Materials',
      description:
        'Incorporates reused bricks, doors, and windows to ensure sustainability.',
    },
  ],
  materialPallete: [
    {
      title: 'Foundation',
      description: 'Reused granite stones.',
    },
    {
      title: 'Walls',
      description:
        'Reused and new bricks, incorporating rat-trap bond masonry for efficiency.',
    },
    {
      title: 'Roofing',
      description: 'Timber structures with sloping roofs and filler slab.',
    },
    {
      title: 'Finishes',
      description: 'Lime wash for painting, emphasizing eco-friendliness.',
    },
  ],
  functionalLayout: [
    {
      title: 'Ground Floor',
      description:
        'Chuttu verandah encircles the house. Poomukham (main veranda), living area, prayer room (pooja), and study area provide versatile living spaces. Open kitchen and dining connect with storage and work areas. Two bedrooms feature attached bathrooms for privacy and comfort.',
    },
    {
      title: 'Mezzanine floor',
      description:
        'Offers open views and flexibility which have a visual connectivity to ground floor and first floor.',
    },
    {
      title: 'First Floor',
      description:
        'One bedroom with attached bathroom ensures secluded privacy. Tower space adds character and multifunctional use.',
    },
  ],
  sustainabilityMeasures: [
    {
      title: 'Passive Cooling',
      description:
        'Central courtyard and chuttu verandah optimize natural ventilation and thermal comfort.',
    },
    {
      title: 'Material Reuse',
      description:
        'Approximately 60% bricks, doors, and windows are repurposed, Mangalore pattern tiles, reducing waste.',
    },
    {
      title: 'Efficient Construction',
      description:
        'Filler slab & rat trap bond technology minimizes material usage and improves insulation.',
    },
    {
      title: 'Energy Conservation',
      description:
        'Design reduces reliance on mechanical cooling, promoting energy savings.',
    },
  ],
  culturalConsiderations: [
    {
      title: 'Tradition',
      description:
        'Rustic finishes and detailed brickwork celebrate Kerala’s craftsmanship.',
    },
    {
      title: 'Recycled Materials',
      description:
        'Use of reclaimed materials and natural colors enhances cultural authenticity.',
    },
    {
      title: 'Contextual Harmony',
      description:
        'Design integrates seamlessly with the local environment, balancing heritage and sustainability.',
    },
  ],
  outcome: `The project was successfully completed, meeting the client’s desire for a massive, culturally resonant home for their nuclear family. The house has been well-received for its aesthetic appeal, sustainability, and thoughtful design. Murugesh and Maya are delighted with their home, which seamlessly blends tradition with modern living.`,
  testimonial: '',
  testimonialVideo: '',
  admiration:
    "Chembakassery reflects how tradition and sustainability can come together to create a home that feels both rooted and contemporary. This project shows how thoughtful design choices—guided by climate, culture, and context—can shape a living space that is warm, efficient, and deeply connected to Kerala's architectural heritage.",
  ctaId: Work.SANCHIBAGS,
  images: Array.from(
    { length: 34 },
    (_, index) => `/chembakassery/${(index + 1).toString()}.jpg`,
  ),
  imageCount: 34,
};
