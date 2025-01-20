"use client";

import React from "react";

interface ImageUploadSelectProps {
  mintOpt: string;
  imageUploadOption: string;
  handleOptionChange: (value: "file" | "url") => void;
  setFieldValue: (field: string, value: string) => void;
  values: {
    url: string;
  };
}

export default function ImageUploadSelect({
  mintOpt,
  imageUploadOption,
  handleOptionChange,
  setFieldValue,
  values,
}: ImageUploadSelectProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleOptionChange(e.target.value as "file" | "url");
    if (values.url.length) {
      setFieldValue("url", "");
    }
  };

  return (
    <div className="relative">
      <select
        value={imageUploadOption}
        onChange={handleSelectChange}
        disabled={mintOpt === "nft"}
        className={`
          w-full px-4 py-6 
          bg-grey10 dark:bg-[#17191c]
          text-black dark:text-grey20 font-medium
          rounded-lg
          appearance-none
          focus:outline-none
          outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          hover:dark:bg-lightDarkContrast
          hover:bg-grey20
          cursor-pointer
        `}
      >
        <option value="file">Upload File</option>
        <option value="url">URL</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-black dark:text-grey100">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
