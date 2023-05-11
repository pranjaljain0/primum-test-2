import { useCallback, useEffect, useState } from "react";

import { addOn } from "@/types/addOn";
import { addOns } from "@/data/addOns";

export default function Slide3({ register, getValues, setValue }: any) {
    const [selectedAddOns, setSelectedAddOns] = useState<addOn[]>([]);

    const handleClick = useCallback(
        (addOn: any) => {
            let newSelectedAddOns = [...selectedAddOns];
            if (newSelectedAddOns.includes(addOn.name)) {
                newSelectedAddOns = newSelectedAddOns.filter(
                    name => name !== addOn.name
                );
            } else {
                newSelectedAddOns.push(addOn.name);
            }
            setSelectedAddOns(newSelectedAddOns);
            setValue('selectedAddOns',
                JSON.stringify(newSelectedAddOns))
        },
        [selectedAddOns]
    );

    useEffect(() => {
        setValue('selectedAddOns',
            JSON.stringify({}))
        setValue('onlineservice', false)
        setValue('largerstorage', false)
        setValue('custom', false)
    }, [])



    return (<>
        <div className="pt-10 pb-8">
            <h1 className='text-4xl myFontBold text-primary-marineBlue'>Pick add-ons</h1>
            <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>Add-ons help enhance your gaming experience.</h1>
        </div>
        <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
                {addOns.map((addOnItem, index) => (
                    <div key={index}>
                        <div className="relative">
                            <input
                                type="checkbox"
                                name="add_on"
                                value={addOnItem.name}
                                id={addOnItem.id}
                                checked={selectedAddOns.includes(addOnItem.name)}
                                className="peer w-5 h-5 absolute top-[1.8rem] left-[1rem] accent-primary-purplishBlue rounded-lg"
                                onChange={() => handleClick(addOnItem)}
                            />
                            <label htmlFor={addOnItem.id} className="
                            flex 
                            cursor-pointer 
                            items-center 
                            justify-between 
                            rounded-lg 
                            border-[1.4px] 
                            hover:border-primary-purplishBlue 
                            border-neutral-lightGray p-4 text-sm 
                            peer-checked:border-primary-purplishBlue 
                            peer-checked:bg-neutral-magnolia"
                            >
                                <div className="pl-8 lg:pl-10">
                                    <p className="text-sm lg:text-base text-primary-marineBlue myFontMedium">{addOnItem.name}</p>
                                    <p className="pt-1 text-xs lg:text-sm text-neutral-coolGray myFontRegular">{addOnItem.desc}</p>
                                </div>
                                <div>
                                    <p className="text-sm lg:text-base text-primary-purplishBlue myFontMedium">
                                        {!getValues("anually") ? '+$' + addOnItem.priceAddMo + '/mo' : '+$' + addOnItem.priceAddYr + '/yr'}
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    </>)
}