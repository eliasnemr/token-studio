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
        className={`text-black dark:text-grey20 outline-none
                  w-full px-4 py-6 pr-8 rounded
                  text-sm font-bold
                   appearance-none
                  transition-all
                  bg-grey20
                  dark:bg-darkContrast
        `}
      >
        <option value="file">Upload File</option>
        <option value="url">URL</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey20">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
