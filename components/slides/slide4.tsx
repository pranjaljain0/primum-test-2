import { addOns } from "@/data/addOns";
import { plans } from "@/data/plans"

export default function Slide4({ getValues }: any) {
    var plan = plans[getValues("plan")]
    var anually = getValues("anually")
    const basePrice = anually ? plan.priceYr : plan.priceMo;

    var selectedAddOnsNames = JSON.parse(getValues("selectedAddOns"))
    const selectedAddOnsObject = selectedAddOnsNames.map((item: any, index: any) => {
        return addOns.find(obj => obj.name === item)
    });
    const total = basePrice + selectedAddOnsObject.reduce((a: any, b: any) => a + anually ? b.priceAddYr : b.priceAddMo, 0);

    return (<>
        <div className="pt-10 pb-8">
            <h1 className='text-4xl UbuntuBold text-primary-marineBlue'>Finishing up</h1>
            <h1 className='pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray'>Double-check everything looks OK before confirming.</h1>
        </div>
        <div>
            <div className="grid grid-cols-1 gap-6 ">
                <div className="px-8 py-4 rounded-md bg-neutral-magnolia">
                    <div className="flex items-center justify-between pb-5 border-b-[1.4px] border-neutral-lightGray">
                        <div>
                            <h1 className="text-base md:text-lg UbuntuBold text-primary-marineBlue">{
                                plan.name} ({anually == false ? 'Monthly' : 'Yearly'})
                            </h1>
                            <button
                                className="relative font-medium text-primary-purplishBlue before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-purplishBlue before:transition hover:before:scale-100"
                            >
                                Change
                            </button>
                        </div>
                        <div>
                            <h1 className="text-base md:text-lg UbuntuBold text-primary-marineBlue">
                                {anually == false ? '$' + basePrice + '/mo' : '$' + basePrice + '/yr'}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                        <div className="space-y-4">
                            {selectedAddOnsObject.map((item: any, index: number) => (
                                <h1 className="text-sm md:text-base UbuntuRegular text-neutral-coolGray" key={index}>
                                    {item.name}
                                </h1>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {selectedAddOnsObject.map((item: any, index: number) => (
                                <h1 className="text-sm md:text-base UbuntuRegular text-primary-marineBlue" key={index}>
                                    {anually == false ? '+$' + item.priceAddMo + '/mo' : '+$' + item.priceAddYr + '/yr'}
                                </h1>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between px-8">
                    <div>
                        <h1 className="text-sm md:text-base UbuntuRegular text-neutral-coolGray">
                            Total {anually == false ? '(per month)' : '(per year)'}
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-base md:text-lg UbuntuBold text-primary-purplishBlue">
                            {anually == false ? '$' + total + '/mo' : '$' + total + '/yr'}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </>)
}