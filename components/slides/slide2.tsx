import { useEffect, useState } from "react";

import Image from "next/image";
import { plans } from "@/data/plans";

export default function Slide2({ register, setValue, getValues }: any) {
    const [tab, setTab] = useState(1);
    const [optionPrice, setOptionPrice] = useState(false);


    useEffect(() => {
        if (getValues('plan') !== undefined && getValues('plan') !== null) {
            setTab(getValues('plan') + 1)
            setOptionPrice(getValues('anually'))
        }
        else {
            setValue('plan', 0)
            setValue('anually', false)
        }
    }, [])

    return (<>
        <div className="pt-10 pb-8">
            <h1 className='text-4xl UbuntuBold text-primary-marineBlue'>Select your plan</h1>
            <h1 className='pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray'>You have the option of monthly or yearly billing.</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
            {plans.map((plan, index) => (
                <button
                    key={plan.name}
                    id={plan.name}
                    onClick={() => {
                        setValue('plan', index)
                        setTab(index + 1)
                    }}
                    type="button"
                    className={`flex border-[1.4px] flex-row items-center p-4 space-x-4 hover:border-primary-purplishBlue rounded-lg md:flex-col md:items-start md:space-x-0 cursor-pointer
                    ${tab != index + 1 ? ' border-neutral-lightGray' : 'border-primary-purplishBlue bg-neutral-magnolia'}`}
                >
                    <Image src={plan.icon} alt={`Picture of ${plan.name} plan`} width={40} height={40} />
                    <div className="pt-0 text-left md:pt-14">
                        <h1 className="text-lg UbuntuMedium text-primary-marineBlue">{plan.name}</h1>
                        <h1 className="text-sm UbuntuRegular text-neutral-coolGray">{optionPrice ? '+$' + plan.priceYr + '/yr' : '+$' + plan.priceMo + '/mo'}</h1>
                        <h1 className="pt-1 text-xs UbuntuBold text-primary-marineBlue">{optionPrice ? '2 months free ' : ''}</h1>
                    </div>
                </button>
            ))}
        </div>
        <div className="flex items-center justify-center p-4 mt-6 bg-neutral-alabaster">
            <div className="flex items-center space-x-3">
                <h1 className={`text-sm UbuntuMedium  ${optionPrice == false ? 'text-primary-marineBlue' : 'text-neutral-coolGray'}`}>Monthly</h1>
                <label htmlFor="anually" className="relative cursor-pointer h-7 w-14">
                    <input type="checkbox" id="anually" className="sr-only peer"
                        checked={optionPrice ? true : false}
                        onChange={() => {
                            setValue('anually', !optionPrice)
                            setOptionPrice(!optionPrice)
                        }}
                    />
                    <span id="customSlider" className="absolute inset-0 transition rounded-full bg-neutral-lightGray peer-checked:bg-primary-marineBlue"></span>
                    <span className="absolute inset-0 m-1 h-5 w-5 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:w-5 peer-checked:translate-x-7 peer-checked:bg-white peer-checked:ring-transparent"> </span>
                </label>
                <h1 className={`text-sm UbuntuMedium  ${optionPrice == true ? 'text-primary-marineBlue' : 'text-neutral-coolGray'}`}>Yearly</h1>
            </div>
        </div>
    </>)
}