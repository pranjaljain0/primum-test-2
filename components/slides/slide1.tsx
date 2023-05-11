import InputWrapper from "../InputWrapper/InputWrapper";

export default function Slide1({
    register,
    errors,
}: any) {
    return (
        <>
            <div className="pt-10 pb-8">
                <h1 className='text-4xl UbuntuBold text-primary-marineBlue'>Personal info</h1>
                <h1 className='pt-2 text-base lg:text-lg UbuntuRegular text-neutral-coolGray'>Please provide your name, email address, and phone number.</h1>
            </div>
            <div>
                <form id="user-info-form">
                    <InputWrapper
                        label="Name"
                        id='name'
                        name='name'
                        placeholder="e.g. Pranjal Jain"
                        register={register}
                        required
                        errorMessage={errors.name ? errors.name : null}
                    />
                    <InputWrapper
                        label="Email Address"
                        placeholder="e.g. pranjaljain0697@gmail.com"
                        id="email"
                        register={register}
                        required
                        name='email'
                        pattern={{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid Email address"
                        }}
                        errorMessage={errors.email ? errors.email : null}
                    />
                    <InputWrapper
                        label="Phone Number"
                        placeholder="e.g. +1 973 517 7359"
                        id="phone"
                        name="phone"
                        register={register}
                        required
                        pattern={{
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                            message: "Invalid Phone number"
                        }}
                        errorMessage={errors.phone ? errors.phone : null}
                    />
                </form>
            </div>
        </>)
}