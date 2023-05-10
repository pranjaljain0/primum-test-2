import { handleNextStep, handlePrevStep } from "@/helpers/helper"

function SlideButton({ setStep, step, trigger, errors }: any) {
    return (
        <>{step != 4 ?
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
                    <button type="button" onClick={() => handlePrevStep(setStep)} className="px-4 py-2 text-base transition rounded-md text-neutral-coolGray UbuntuBold hover:text-neutral-coolGray/50 hover:scale-90">
                        Go Back
                    </button>
                    : null}
                <button type="submit"
                    onClick={() => {
                        trigger().then((res: any) => {
                            res && handleNextStep(setStep)
                        })

                    }}
                    className={`w-32 h-12 px-4 py-2 text-base text-white rounded-md UbuntuRegular transition hover:scale-90
                ${step == 3 ? 'bg-primary-purplishBlue hover:bg-primary-purplishBlue/90' : 'bg-primary-marineBlue hover:bg-primary-marineBlue/90'}
                `}>
                    {step == 3 ? 'Confirm' : 'Next Step'}
                </button>
            </div>
            : null}</>
    )
}

export default SlideButton