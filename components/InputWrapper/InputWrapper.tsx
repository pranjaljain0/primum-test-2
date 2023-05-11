import { handleEmailValidation } from '@/helpers/helper';

function InputWrapper({
  label,
  errorMessage = null,
  register,
  required,
  pattern,
  name,
  placeholder,
  value,
  id
}: any) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between px-[0.10rem]">
        <label className="block mb-2 text-sm font-medium text-gray-900 UbuntuMedium">{label}</label>
        <label className="block pr-2 mb-2 text-sm font-medium text-primary-strawberry UbuntuMedium">
          {errorMessage?.message}
        </label>
      </div>
      <input
        className={
          errorMessage == null
            ? 'outline-none border-[1.5px] border-neutral-coolGray UbuntuMedium  text-primary-marineBlue text-base rounded-lg  focus:border-none block w-full p-3 focus:outline-neutral-coolGray '
            : 'outline-none border-[1.5px] border-primary-strawberry UbuntuMedium text-primary-strawberry text-base rounded-lg focus:border-none block w-full p-3 focus:outline-primary-strawberry'
        }
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        {...register(id, {
          required: `${label} is required`,
          pattern: pattern
        })}
      />
    </div>
  );
}

export default InputWrapper;
