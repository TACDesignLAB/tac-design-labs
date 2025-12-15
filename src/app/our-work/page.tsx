import React from 'react';
import { detailsStore, projectOrder } from '~/constants/works';
import Link from 'next/link';

import { getOptimizedBackgroundImage } from '~/utils/background-image-optimizer';

import OurWorkBgButton from '~/assets/images/button-background.png';
import landingPageArchitectureBackground from '~/assets/images/our-work-bg-img.png';
import OurWorkCta from '~/assets/images/our-work-cta.png';

import ProjectTile from './project-tile';

const OurWork = () => {
  const optimizedLandingPageArchitectureBackground =
    getOptimizedBackgroundImage({
      src: landingPageArchitectureBackground.src,
      width: landingPageArchitectureBackground.width,
      height: landingPageArchitectureBackground.height,
    });
  const optimizedWorkShopBgImg = getOptimizedBackgroundImage({
    src: OurWorkCta.src,
    width: OurWorkCta.width,
    height: OurWorkCta.height,
  });
  const optimizedOurWorkBgButton = getOptimizedBackgroundImage({
    src: OurWorkBgButton.src,
    width: OurWorkBgButton.width,
    height: OurWorkBgButton.height,
  });

  return (
    <div
      className="bg-[#E9D0B7] font-primary"
      style={{
        backgroundImage: optimizedLandingPageArchitectureBackground,
      }}
    >
      <div className="px-[18px] py-11 md:px-28 md:py-24">
        <div className="mb-8 md:mb-20">
          <h1 className="mb-4 text-center text-4xl text-primary-500 md:text-5xl">
            Designing <span className="text-accent-500">Spaces</span>, Shaping{' '}
            <span className="text-accent-500">Futures</span>
          </h1>
          <p className="text-center text-base text-[#173552] md:text-4xl">
            At TAC Design LAB, our portfolio reflects our dedication to
            sustainability, innovation and craftsmanship. Explore a curated
            selection of projects where thoughtful design meets environmental
            responsibility.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {projectOrder.map((workId) => (
            <ProjectTile key={workId} project={detailsStore[workId]} />
          ))}
        </div>
      </div>

      <div>
        <hr className="mx-auto border-t-4 border-white md:border-t-8"></hr>
        <div
          className="relative w-full items-center justify-center bg-cover bg-center px-1 py-8 text-white md:px-24 md:py-12 lg:px-2 lg:py-2"
          style={{
            backgroundImage: optimizedWorkShopBgImg,
          }}
        >
          <div className="relative z-10 h-full items-center justify-center text-white">
            <h2 className="mb-7 text-center font-primary text-[32px] md:text-[50px]">
              <span className="font-bold">Workshops</span>
              <br />
              <span className="text-[28px] md:text-[40px]">
                Learn, Build, Innovate
              </span>
            </h2>
            <div className="px-6 text-center text-[16px] tracking-wide text-surface-500 md:text-[28px]">
              <p className="mb-10">
                Gain hands-on experience in sustainable construction through our
                expertly curated workshops. Explore the possibilities of bamboo,
                mud and brick while honing the skills that redefine modern
                architecture.
              </p>
              <div className="mb-2">Take the first step toward change.</div>
              <div className="flex justify-center">
                <Link
                  href="/workshops"
                  style={{ backgroundImage: optimizedOurWorkBgButton }}
                  className="rounded bg-cover bg-center p-8 px-4 text-[13px] font-bold text-primary-500 duration-200 hover:scale-105 hover:bg-opacity-80 md:p-12 md:text-2xl"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-auto w-full border-t-4 border-white md:border-t-8"></hr>
      </div>
    </div>
  );
};

export default OurWork;
