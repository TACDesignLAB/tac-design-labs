import { data as canaanData } from './canaan';
import { data as csData } from './chembakassery';
import { data as havenData } from './haven';
import { data as maisonSanghamData } from './maison-sangham';
import { Work } from './models';
import { data as sanchiBagsData } from './sanchibags';
import { data as shireData } from './shire';
import type { WorkDetails } from './models';

export const detailsStore: Record<Work, WorkDetails> = {
  [Work.HAVEN]: havenData,
  [Work.CANAAN]: canaanData,
  [Work.SHIRE]: shireData,
  [Work.SANCHIBAGS]: sanchiBagsData,
  [Work.CHEMBAKASSERY]: csData,
  [Work.MAISONSANGHAM]: maisonSanghamData,
};

export const projectOrder = [
  Work.CANAAN,
  Work.SHIRE,
  Work.SANCHIBAGS,
  Work.CHEMBAKASSERY,
  Work.HAVEN,
  Work.MAISONSANGHAM,
];
