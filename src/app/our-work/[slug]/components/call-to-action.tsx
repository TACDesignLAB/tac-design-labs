'use client';

import { useState } from 'react';
import { detailsStore } from '~/constants/works';
import Image from 'next/image';
import Link from 'next/link';

import { capitalizeFirst } from '~/utils/capitalize-first';
import { cn } from '~/utils/cn';

import btnBg from '~/assets/btn-bg.png';

import callToActionStyles from './call-to-actions.module.css';
import type { CallToActionProps } from './model';

function CallToAction(props: CallToActionProps) {
  const { work } = props;
  const currentWork = detailsStore[work];
  const nextWorkId = currentWork.ctaId;
  const nextWork = detailsStore[nextWorkId];

  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = () => {
    const pageURL = window.location.href;
    navigator.clipboard
      .writeText(pageURL)
      .then(() => {
        setToastVisible(true);
        setTimeout(() => {
          setToastVisible(false);
        }, 2000);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert -- using alert as a fallback for clipboard copy failure
        alert('Failed to copy the URL. Please try again.');
      });
  };

  return (
    <div className="w-full bg-[#FFFFFF66] shadow-[inset_0px_10px_4px_0px_rgba(0,0,0,0.15)]">
      {/* Share */}
      <div className="relative flex h-[272px] w-full flex-col lg:h-[288px] lg:flex-row lg:items-start lg:justify-center lg:gap-10 lg:pt-10">
        <p className="mx-auto mt-7 w-[80vw] text-center text-[5vw] lg:mx-0 lg:mt-0 lg:w-[43vw] lg:text-left lg:text-[24px]">
          {`If you're inspired by ${capitalizeFirst(currentWork.title)}, share this page and help spread the message of sustainable living!`}
        </p>
        <Image
          src="/works/share-now.png"
          alt="Share Now"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto mt-1 h-[79px] w-[223px] cursor-pointer hover:scale-105 lg:mx-0 lg:mt-0 lg:h-[92px] lg:w-[262px]"
          onClick={handleCopy}
        />
        {toastVisible && (
          <div className="absolute left-1/2 top-1/2 z-30 w-[300px] -translate-x-1/2 transform rounded-lg bg-green-500 p-3 text-center text-white">
            URL copied to clipboard!
          </div>
        )}
      </div>

      {/* Next Project */}
      <div
        className="relative h-[318px] w-full overflow-visible lg:h-[370px] xl:h-[390px] 2xl:h-[400px]"
        style={{
          backgroundImage: `url(/works/cta-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div>
          <div
            className={cn(
              callToActionStyles.call_to_action_image,
              'absolute left-1/2 top-[40%] aspect-video w-[79%] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-2xl border-[5px] border-[#F3F5E5] shadow-lg lg:top-[-20%] lg:mb-80 lg:h-[300px] lg:w-[50.6vw] lg:max-w-none lg:translate-y-0',
            )}
          >
            <Image
              src={nextWork.tileImg}
              alt="Next Project"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
              style={{
                boxShadow: '0px 11px 4px 0px #00000040',
              }}
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
        </div>

        {/* Content over the image */}
        <div className="absolute left-1/2 top-[40%] z-10 w-[79%] -translate-x-1/2 -translate-y-1/2 transform text-center text-white lg:top-[0%] lg:mb-80 lg:h-[300px] lg:w-[50.6vw] lg:max-w-none lg:translate-y-0">
          <p className="text-[5vw] lg:text-[2.314vw]">
            Explore our next project
          </p>
          <p className="text-[6vw] font-bold lg:text-[2.43vw]">
            {capitalizeFirst(nextWork.title)}
          </p>
          <p className="text-[3.5vw] text-[#FCBF89] lg:text-[1.38vw]">
            {nextWork.location}
          </p>
        </div>

        <Link
          href={`/our-work/${nextWorkId}`}
          className="absolute bottom-[3%] right-1/2 z-10 mx-auto mt-1 flex h-[79px] w-[215px] translate-x-1/2 transform items-center justify-center hover:scale-105 lg:bottom-[10%] lg:mx-0 lg:mt-0 lg:h-[92px] lg:w-[262px]"
          style={{
            backgroundImage: `url(${btnBg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <span className="text-center text-[24px] font-bold text-[#331803]">
            View {capitalizeFirst(nextWork.shortTitle ?? nextWork.title)}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
