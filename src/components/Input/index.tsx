import React from "react";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  info?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  optional?: boolean;
}

export const Input: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  info,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = true,
  optional = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-black dark:text-white">
        {label} {optional && <span className="text-grey80">(Optional)</span>}
      </label>
      <div
        className={`flex rounded bg-grey20 dark:bg-[#17191C] ${error && "border border-red"}`}
      >
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          className={`text-black dark:text-white rounded py-3 px-4 w-full appearance-none outline-none dark:placeholder:text-grey100 bg-transparent`}
        />
        {info && (
          <div className="text-sm text-grey60 my-auto mr-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 14.4492H10.75V8.69922H9.25V14.4492ZM10 6.98772C10.2288 6.98772 10.4207 6.9103 10.5755 6.75547C10.7303 6.60064 10.8077 6.4088 10.8077 6.17997C10.8077 5.95114 10.7303 5.7593 10.5755 5.60447C10.4207 5.4498 10.2288 5.37247 10 5.37247C9.77117 5.37247 9.57933 5.4498 9.4245 5.60447C9.26967 5.7593 9.19225 5.95114 9.19225 6.17997C9.19225 6.4088 9.26967 6.60064 9.4245 6.75547C9.57933 6.9103 9.77117 6.98772 10 6.98772ZM10.0017 19.1992C8.68775 19.1992 7.45267 18.9499 6.2965 18.4512C5.14033 17.9526 4.13467 17.2758 3.2795 16.421C2.42433 15.5661 1.74725 14.5609 1.24825 13.4052C0.749417 12.2496 0.5 11.0148 0.5 9.70097C0.5 8.38697 0.749333 7.15189 1.248 5.99572C1.74667 4.83955 2.42342 3.83389 3.27825 2.97872C4.13308 2.12355 5.13833 1.44647 6.294 0.947469C7.44967 0.448635 8.68442 0.199219 9.99825 0.199219C11.3123 0.199219 12.5473 0.448552 13.7035 0.947218C14.8597 1.44589 15.8653 2.12264 16.7205 2.97747C17.5757 3.8323 18.2528 4.83755 18.7518 5.99322C19.2506 7.14889 19.5 8.38364 19.5 9.69747C19.5 11.0115 19.2507 12.2466 18.752 13.4027C18.2533 14.5589 17.5766 15.5646 16.7218 16.4197C15.8669 17.2749 14.8617 17.952 13.706 18.451C12.5503 18.9498 11.3156 19.1992 10.0017 19.1992ZM10 17.6992C12.2333 17.6992 14.125 16.9242 15.675 15.3742C17.225 13.8242 18 11.9326 18 9.69922C18 7.46589 17.225 5.57422 15.675 4.02422C14.125 2.47422 12.2333 1.69922 10 1.69922C7.76667 1.69922 5.875 2.47422 4.325 4.02422C2.775 5.57422 2 7.46589 2 9.69922C2 11.9326 2.775 13.8242 4.325 15.3742C5.875 16.9242 7.76667 17.6992 10 17.6992Z"
                fill="#91919D"
              />
            </svg>
          </div>
        )}
      </div>
      {error && touched && <p className="text-sm text-red">{error}</p>}
    </div>
  );
};
