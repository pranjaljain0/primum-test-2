"use client";

import { Component, ReactElement, useState } from 'react';
import { handleNextStep, handlePrevStep } from "@/helpers/helper"

import Slide1 from '@/components/slides/slide1';
import Slide2 from '@/components/slides/slide2';
import Slide3 from '@/components/slides/slide3';
import Slide4 from '@/components/slides/slide4';
import Slide5 from '@/components/slides/slide5';

export default function Home() {
  const [step, setStep] = useState(0);

  const RenderSlides = () => {
    return (<>
      {step == 0 ?
        <Slide1 />
        : null}
      {step == 1 ?
        <Slide2 />
        : null}
      {step == 2 ?
        <Slide3 />
        : null}
      {step == 3 ?
        <Slide4
        />
        : null}
      {step == 4 ?
        <Slide5 />
        : null}

      {step != 4 ?
        <div className={
          `flex 
                lg:mt-16 
                lg:py-10
                lg:px-[7rem]
                lg:bg-transparent
                lg:absolute
                lg:w-[49rem]
                lg:border-t-0
                fixed bottom-0 right-0 px-4 bg-white w-full py-3 mt-0 border-t-2
                ${step > 0 ? 'justify-between' : 'justify-end'}`}
        >
          {step > 0 ?
            <button type="button" onClick={() => handlePrevStep(setStep)} className="px-4 py-2 text-base transition rounded-md text-neutral-coolGray myFontBold hover:text-neutral-coolGray/50 hover:scale-90">
              Go Back
            </button>
            : null}
          <button type="submit"
            onClick={() => { handleNextStep(setStep) }}
            className={`w-32 h-12 px-4 py-2 text-base text-white rounded-md myFontRegular transition hover:scale-90
                ${step == 3 ? 'bg-primary-purplishBlue hover:bg-primary-purplishBlue/90' : 'bg-primary-marineBlue hover:bg-primary-marineBlue/90'}
                `}>
            {step == 3 ? 'Confirm' : 'Next Step'}
          </button>
        </div>
        : null}
    </>)
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-start h-screen pt-32 lg:justify-center lg:pb-0 lg:pt-0 bg-neutral-magnolia">
        <div className="absolute pb-8 mx-4 bg-white rounded-lg shadow-lg top-[10rem] lg:w-[65rem] lg:relative lg:top-0 lg:pb-0 h-[650px] md:h-[610px]">
          <div className="grid grid-cols-12 gap-8 lg:gap-6 md:gap-12">
            <nav className="hidden col-span-12 lg:col-span-4  bg-no-repeat bg-center h-[38rem] lg:block relative bg-[url(/images/bg-sidebar-desktop.svg)]">
              <div className="absolute top-[4rem] left-[4rem]">
                <span>Side Nav</span>
              </div>
            </nav>
            <div className="col-span-12 px-8 py-5 lg:pr-[7rem] lg:col-span-8">
              <span>Form Area</span>
              {RenderSlides()}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
