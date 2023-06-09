import { useCallback, useEffect, useState } from 'react';

import { addOn } from '@/types';
import { addOns } from '@/data/addOns';

export default function Slide3({ register, getValues, setValue }: any) {
  const [selectedAddOns, setSelectedAddOns] = useState<any>([]);

  const handleClick = useCallback(
    (addOn: addOn) => {
      let newSelectedAddOns = [...selectedAddOns];
      if (newSelectedAddOns.includes(addOn.name)) {
        newSelectedAddOns = newSelectedAddOns.filter((name) => name !== addOn.name);
      } else {
        newSelectedAddOns.push(addOn.name);
      }
      setSelectedAddOns(newSelectedAddOns);
      setValue('selectedAddOns', JSON.stringify(newSelectedAddOns));
    },
    [selectedAddOns]
  );

  useEffect(() => {
    if (getValues('selectedAddOns') !== undefined && getValues('selectedAddOns') !== null) {
      setSelectedAddOns(JSON.parse(getValues('selectedAddOns')));
    } else {
      setValue('selectedAddOns', JSON.stringify({}));
    }
  }, []);

  return (
    <>
      <div className="pt-10 pb-8">
        <h1 className="text-4xl UbuntuBold text-primary-marineBlue">Pick add-ons</h1>
        <h1 className="pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray">
          Add-ons help enhance your gaming experience.
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-4">
          {addOns.map((addOnItem: addOn, index) => (
            <div key={index}>
              <div className="relative">
                <input
                  type="checkbox"
                  name="add_on"
                  value={addOnItem.name}
                  id={addOnItem.id}
                  checked={selectedAddOns !== undefined && selectedAddOns !== null && Object.keys(selectedAddOns).length !== 0 && selectedAddOns.includes(addOnItem.name)}
                  className="peer w-5 h-5 absolute top-[1.8rem] left-[1rem] accent-primary-purplishBlue rounded-lg"
                  onChange={() => handleClick(addOnItem)}
                />
                <label
                  htmlFor={addOnItem.id}
                  className="
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
                    <p className="text-sm lg:text-base text-primary-marineBlue UbuntuMedium">
                      {addOnItem.name}
                    </p>
                    <p className="pt-1 text-xs lg:text-sm text-neutral-coolGray UbuntuRegular">
                      {addOnItem.desc}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm lg:text-base text-primary-purplishBlue UbuntuMedium">
                      {!getValues('anually')
                        ? '+$' + addOnItem.priceAddMo + '/mo'
                        : '+$' + addOnItem.priceAddYr + '/yr'}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
