"use client";

import React from "react";

interface ImageUploadSelectProps {
  mintOpt: string;
  imageUploadOption: string;
  handleOptionChange: (value: "file" | "url" | "custom") => void;
  setFieldValue: (field: string, value: string) => void;
  values: {
    url: string;
  };
}

export default function CustomImageUploadSelect({
  mintOpt,
  imageUploadOption,
  handleOptionChange,
  setFieldValue,
  values,
}: ImageUploadSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  const handleSelect = (value: "file" | "url" | "custom") => {
    handleOptionChange(value);
    if (values.url.length) {
      setFieldValue("url", "");
    }
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={mintOpt === "nft"}
        className={`
          w-full px-6 py-6
          bg-grey10 hover:bg-grey20
          dark:bg-darkContrast  dark:hover:bg-mediumDarkContrast            
          rounded-lg
          flex items-center justify-between
          transition-all duration-200          
          disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-black dark:text-white">
          {imageUploadOption === "file"
            ? "Upload image on-chain"
            : imageUploadOption === "url"
              ? "URL"
              : "Create custom on-chain image"}
        </span>

        <span className="text-grey60">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute z-10 w-full text-black dark:text-white mt-1 overflow-hidden bg-grey10 dark:bg-mediumDarkContrast p-1 shadow-lg"
          role="listbox"
        >
          {imageUploadOption !== "file" && (
            <div
              className={`
              px-6 py-4 cursor-pointer
              transition-colors duration-200
                hover:bg-grey20 dark:hover:bg-darkContrast 
              ${imageUploadOption === "file" ? "bg-grey10 dark:bg-mediumDarkContrast" : ""}
            `}
              onClick={() => handleSelect("file")}
              role="option"
              aria-selected={imageUploadOption === "file"}
            >
              Upload image on-chain
            </div>
          )}
          {imageUploadOption !== "custom" && (
            <div
              className={`
              px-6 py-4 cursor-pointer
              transition-colors duration-200
                hover:bg-grey20  dark:bg-darkContrast
              ${imageUploadOption === "url" ? "bg-grey10 dark:bg-mediumDarkContrast" : ""}
            `}
              onClick={() => handleSelect("custom")}
              role="option"
              aria-selected={imageUploadOption === "custom"}
            >
              Custom on-chain image
            </div>
          )}
          {imageUploadOption !== "url" && (
            <div
              className={`
              px-6 py-4 cursor-pointer
              transition-colors duration-200
                hover:bg-grey20  dark:bg-darkContrast
              ${imageUploadOption === "url" ? "bg-grey10 dark:bg-mediumDarkContrast" : ""}
            `}
              onClick={() => handleSelect("url")}
              role="option"
              aria-selected={imageUploadOption === "url"}
            >
              URL
            </div>
          )}
        </div>
      )}
    </div>
  );
}
