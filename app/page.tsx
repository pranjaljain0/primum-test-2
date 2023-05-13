'use client';

import SideNav from '@/components/SideNav/SideNav';
import Slide1 from '@/components/slides/slide1';
import Slide2 from '@/components/slides/slide2';
import Slide3 from '@/components/slides/slide3';
import Slide4 from '@/components/slides/slide4';
import Slide5 from '@/components/slides/slide5';
import SlideButton from '@/components/Button/SlideButton';
import { UserSchema } from '@/schema';
import { sidenav_data } from '@/data/sidenav';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Home() {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    watch,
    formState: { errors }
  } = useForm({ resolver: zodResolver(UserSchema) });

  const RenderSlides = () => {
    return (
      <>
        {step == 0 ? <Slide1 register={register} errors={errors} /> : null}
        {step == 1 ? (
          <Slide2 register={register} getValues={getValues} setValue={setValue} />
        ) : null}
        {step == 2 ? (
          <Slide3 register={register} getValues={getValues} setValue={setValue} />
        ) : null}
        {step == 3 ? <Slide4 setStep={setStep} getValues={getValues} /> : null}
        {step == 4 ? <Slide5 /> : null}

        <SlideButton setStep={setStep} step={step} trigger={trigger} errors={errors} />
      </>
    );
  };

  return (
    <main>
      <nav className="block lg:hidden">
        <div className="bg-no-repeat bg-cover h-[15rem] flex items-center justify-center bg-[url(/images/bg-sidebar-mobile.svg)]"        >
          {sidenav_data.map((step_data_item, index) => (
            <SideNav
              step={step_data_item.step}
              title=""
              message=""
              state={index === step ? 'active' : ''}
            />
          ))}
        </div>
      </nav>
      <div className="flex flex-col items-center justify-start h-screen pt-32 lg:justify-center lg:pb-0 lg:pt-0 bg-neutral-magnolia">
        <div className="absolute pb-8 mx-4 bg-white rounded-lg shadow-lg top-[10rem] lg:w-[65rem] lg:relative lg:top-0 lg:pb-0 h-[650px] md:h-[610px]">
          <div className="grid grid-cols-12 gap-8 lg:gap-6 md:gap-12">
            <nav className="hidden col-span-12 lg:col-span-4  bg-no-repeat bg-center h-[38rem] lg:block relative bg-[url(/images/bg-sidebar-desktop.svg)]">
              <div className="absolute top-[4rem] left-[4rem]">
                {sidenav_data.map((step_data_item, index) => (
                  <div key={index}>
                    <SideNav
                      step={step_data_item.step}
                      title={step_data_item.title}
                      message={step_data_item.message}
                      state={index === step ? 'active' : ''}
                    />
                  </div>
                ))}
              </div>
            </nav>
            <div className="col-span-12 px-8 py-5 lg:pr-[7rem] lg:col-span-8">{RenderSlides()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
