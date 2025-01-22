import { useFormikContext } from "formik";
import { useState } from "react";
import Tooltip from "../Tooltip";
import AddIcon from "../Icons/AddIcon";

function ExtraMetadataFields({ values }) {
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");

  const formik: any = useFormikContext();
  const { setFieldValue, errors } = formik;

  const addMetadata = () => {
    if (newKey && newValue) {
      setFieldValue("extraMetadata", [
        ...values.extraMetadata,
        { key: newKey, value: newValue },
      ]);
      setNewKey("");
      setNewValue("");
    }
  };

  const removeMetadata = (index) => {
    const updatedMetadata = values.extraMetadata.filter((_, i) => i !== index);
    setFieldValue("extraMetadata", updatedMetadata);
  };

  return (
    <>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <hr className="border border-grey20 dark:border-darkContrastFour m-auto w-full" />
        <div className="flex gap-2 px-4 items-center">
          <label className="text-xs text-center text-black dark:text-white shrink-0">
            Add Additional Metadata
          </label>
          <Tooltip
            content="Add extra attributes to your token / NFT"
            extraClass="-right-[14px] top-[20px]"
          >
            <span className="text-[#91919D] hover:text-[#D3D3D8] dark:text-grey100 hover:dark:text-grey25">
              <svg
                className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25 14.4492H10.75V8.69922H9.25V14.4492ZM10 6.98772C10.2288 6.98772 10.4207 6.9103 10.5755 6.75547C10.7303 6.60064 10.8077 6.4088 10.8077 6.17997C10.8077 5.95114 10.7303 5.7593 10.5755 5.60447C10.4207 5.4498 10.2288 5.37247 10 5.37247C9.77117 5.37247 9.57933 5.4498 9.4245 5.60447C9.26967 5.7593 9.19225 5.95114 9.19225 6.17997C9.19225 6.4088 9.26967 6.60064 9.4245 6.75547C9.57933 6.9103 9.77117 6.98772 10 6.98772ZM10.0017 19.1992C8.68775 19.1992 7.45267 18.9499 6.2965 18.4512C5.14033 17.9526 4.13467 17.2758 3.2795 16.421C2.42433 15.5661 1.74725 14.5609 1.24825 13.4052C0.749417 12.2496 0.5 11.0148 0.5 9.70097C0.5 8.38697 0.749333 7.15189 1.248 5.99572C1.74667 4.83955 2.42342 3.83389 3.27825 2.97872C4.13308 2.12355 5.13833 1.44647 6.294 0.947469C7.44967 0.448635 8.68442 0.199219 9.99825 0.199219C11.3123 0.199219 12.5473 0.448552 13.7035 0.947218C14.8597 1.44589 15.8653 2.12264 16.7205 2.97747C17.5757 3.8323 18.2528 4.83755 18.7518 5.99322C19.2506 7.14889 19.5 8.38364 19.5 9.69747C19.5 11.0115 19.2507 12.2466 18.752 13.4027C18.2533 14.5589 17.5766 15.5646 16.7218 16.4197C15.8669 17.2749 14.8617 17.952 13.706 18.451C12.5503 18.9498 11.3156 19.1992 10.0017 19.1992ZM10 17.6992C12.2333 17.6992 14.125 16.9242 15.675 15.3742C17.225 13.8242 18 11.9326 18 9.69922C18 7.46589 17.225 5.57422 15.675 4.02422C14.125 2.47422 12.2333 1.69922 10 1.69922C7.76667 1.69922 5.875 2.47422 4.325 4.02422C2.775 5.57422 2 7.46589 2 9.69922C2 11.9326 2.775 13.8242 4.325 15.3742C5.875 16.9242 7.76667 17.6992 10 17.6992Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Tooltip>
        </div>
        <hr className="border border-grey20 dark:border-darkContrastFour m-auto w-full" />
      </div>
      <div className="space-y-4 mt-2">
        <div className="space-y-0 space-x-2 flex">
          <input
            type="text"
            placeholder="Attribute (e.g. Color, Size, Material)"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            className=" dark:text-white min-w-0 text-black bg-grey10 dark:bg-darkContrast dark:text-grey80 outline-none py-3 px-4 flex-grow"
          />
          <input
            type="text"
            placeholder="Value (e.g. red, large, wool)"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="dark:text-white min-w-0 text-black bg-grey10 dark:bg-darkContrast dark:text-grey80 outline-none py-3 px-4 flex-grow"
          />
          <button
            type="button"
            className="min-w-[32px]  p-0 appearance-none outline-none focus:outline-none text-darkContrast hover:text-mediumDarkContrast dark:text-white disabled:text-grey20 dark:disabled:text-darkContrastFour"
            disabled={newKey.length === 0 || newValue.length === 0}
            onClick={addMetadata}
          >
            <AddIcon size={26} />
          </button>
        </div>

        {values.extraMetadata.map((item, index) => (
          <div key={index}>
            <div className="space-y-0 space-x-2 flex">
              <input
                type="text"
                value={item.key}
                disabled
                className={`${errors.extraMetadata && errors.extraMetadata[index]?.key && "border border-red"} min-w-0 text-black bg-grey10 dark:bg-darkContrast dark:text-white outline-none py-3 px-4 flex-1 flex-grow`}
              />
              <input
                type="text"
                value={item.value}
                disabled
                className={`${errors.extraMetadata && errors.extraMetadata[index]?.value && "border border-red"} min-w-0 text-black bg-grey10 dark:bg-darkContrast dark:text-white outline-none py-3 px-4 flex-1 flex-grow`}
              />
              <button
                type="button"
                className="min-w-[32px] p-0 appearance-none outline-none focus:outline-none hover:opacity-80"
                onClick={() => removeMetadata(index)}
              >
                <img alt="cancel" src="./assets/cancel.svg" />
              </button>
            </div>
            {errors.extraMetadata && errors.extraMetadata[index] && (
              <div>
                {errors.extraMetadata[index].key && (
                  <p className="text-sm text-red pt-4">
                    {errors.extraMetadata[index].key}
                  </p>
                )}
                {errors.extraMetadata[index].value && (
                  <p className="text-sm text-red pt-4">
                    {errors.extraMetadata[index].value}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ExtraMetadataFields;
