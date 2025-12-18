import { type StaticImageData } from 'next/image';

export enum Work {
  HAVEN = 'haven',
  CANAAN = 'canaan',
  SHIRE = 'shire',
  SANCHIBAGS = 'sanchi-bags',
  CHEMBAKASSERY = 'chembakassery',
  MAISONSANGHAM = 'maison-sangham',
  STROCH = 'st-roch',
  BIJU = 'biju',
}

interface BulletPoint {
  title: string;
  description: string;
}

export interface WorkDetails {
  id: Work;
  tileImg: StaticImageData;
  title: string;
  shortTitle?: string;
  subTitle: string;
  location: string;
  completionYear: string;
  area: string;
  duration: string;
  budget: string;
  overview: string;
  designIntent: string;
  materialsAndTechniques?: BulletPoint[];
  keyFeatures: BulletPoint[];
  materialPallete?: BulletPoint[];
  functionalLayout?: BulletPoint[];
  sustainabilityMeasures?: BulletPoint[];
  culturalConsiderations?: string | BulletPoint[];
  outcome: string;
  testimonial: string;
  testimonialVideo: string;
  admiration: string;
  featuredVideos?: FeaturedVideo[];
  ctaId: Work;
  images: string[];
  imageCount: number;
}

export interface FeaturedVideo {
  title: string;
  description: string;
  video: string;
}
