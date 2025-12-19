import { detailsStore } from '~/constants/works';
import Image from 'next/image';

import type { BannerProps } from './model';

function Banner(props: BannerProps) {
  const { work } = props;
  const currentWork = detailsStore[work];

  return (
    <div className="relative flex h-[441px] w-full items-center justify-center lg:h-[622px]">
      <Image
        src={currentWork.tileImg}
        alt={currentWork.title}
        fill
        objectFit="cover"
        objectPosition="center"
        className="scale-100 transform"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Part */}
      <div className="flex h-[304px] w-full flex-col items-center justify-center gap-4 bg-[#ECC19A33] text-center text-white backdrop-blur-[4.1px]">
        <h1 className="text-[10vw] font-bold lg:text-[66px]">
          {currentWork.title}
        </h1>
        <p className="max-w-[351px] text-[22px] lg:max-w-[1082px] lg:text-[1.91vw]">
          {currentWork.subTitle}
        </p>
      </div>
    </div>
  );
}

export default Banner;
