export const handleNextStep = async (setStep: Function) => {
    try {
        setStep((prevStep: any) => prevStep + 1);
    } catch (e) {
        console.log(e)
    }
};

export const handlePrevStep = async (setStep: Function) => {
    try {
        setStep((prevStep: any) => prevStep - 1);
    } catch (e) {
        console.log(e)
    }
};