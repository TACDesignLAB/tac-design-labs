import React from 'react';
import { detailsStore, projectOrder } from '~/constants/works';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  AutoScrollCarousel,
  AutoScrollCarouselContainer,
  AutoScrollCarouselNextButton,
  AutoScrollCarouselPrevButton,
  AutoScrollCarouselSlide,
} from '~/components/auto-scroll-carousel';

const OurWorkCarousel: React.FC = () => {
  return (
    <AutoScrollCarousel
      className="relative mt-6"
      loop={true}
      speed={1}
      autoScrollDirection="forward"
    >
      <AutoScrollCarouselContainer>
        {projectOrder.map((workId, index) => {
          const workDetails = detailsStore[workId];
          return (
            <AutoScrollCarouselSlide key={index}>
              <div className="w-full">
                <Link href={`/our-work/${workId}`}>
                  <div
                    className="group relative mb-4 aspect-[16/9] transform cursor-pointer rounded-lg border-2 border-[#F3F5E5] font-primary md:mb-3 md:rounded-2xl md:border-4"
                    style={{
                      boxShadow: '0px 8px 4px 0px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 z-10 rounded-lg bg-gradient-to-t from-[#000000] to-transparent opacity-70 mix-blend-multiply transition delay-150 duration-300 ease-in-out group-hover:opacity-20 md:rounded-2xl"></div>

                    {/* Image */}
                    <Image
                      src={workDetails.tileImg}
                      fill
                      alt={`${workDetails.title} Background`}
                      className="rounded-md object-cover md:rounded-xl"
                      placeholder="blur"
                    />

                    {/* Text Content */}
                    <div className="absolute bottom-3 left-4 z-20 text-white">
                      <p className="text-2xl font-bold tracking-widest md:text-4xl lg:text-[42px]">
                        {workDetails.title}
                      </p>
                      <p className="text-base text-[#FCBF89] md:text-lg lg:text-xl xl:text-2xl">
                        {workDetails.location}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </AutoScrollCarouselSlide>
          );
        })}
      </AutoScrollCarouselContainer>

      {/* Navigation Buttons */}
      <div className="mt-4 flex items-center justify-between">
        <AutoScrollCarouselPrevButton className="absolute left-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
          <ChevronLeft size={28} className="text-primary-500" />
        </AutoScrollCarouselPrevButton>

        <AutoScrollCarouselNextButton className="absolute right-0 top-1/2 z-10 -translate-y-full rounded-full bg-white p-1 shadow-lg transition-transform duration-300">
          <ChevronRight size={28} className="text-primary-500" />
        </AutoScrollCarouselNextButton>
      </div>
    </AutoScrollCarousel>
  );
};

export default OurWorkCarousel;
