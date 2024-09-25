import { useFormikContext } from "formik";
import { useState } from "react";
import { errorTextStyle } from "../../styles";

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
      <div className="grid grid-cols-3 items-center">
        <hr className="border " />
        <label className="text-xs text-center text-light text-neutral-600 dark:text-neutral-100">
          Add Additional Metadata
        </label>
        <hr className="border "/>
      </div>
      <div className="space-y-4 mt-2">
        {values.extraMetadata.map((item, index) => (
          <div key={index} className="p-4 bg-neutral-200 dark:bg-neutral-950">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="text"
                value={item.key}
                disabled
                className="flex-grow bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
              />
              <input
                type="text"
                value={item.value}
                disabled
                className="flex-grow bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
              />
              <button
                type="button"
                onClick={() => removeMetadata(index)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
            {errors.extraMetadata && errors.extraMetadata[index] && (
              <div className={errorTextStyle}>
                {errors.extraMetadata[index].key && (
                  <p>{errors.extraMetadata[index].key}</p>
                )}
                {errors.extraMetadata[index].value && (
                  <p>{errors.extraMetadata[index].value}</p>
                )}
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
          <input
            type="text"
            placeholder="Key"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            className="flex-grow bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
          />
          <input
            type="text"
            placeholder="Value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="flex-grow bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
          />
          <button
            type="button"
            onClick={addMetadata}
            className="bg-blue-500 flex-1 focus:outline-none w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default ExtraMetadataFields;
