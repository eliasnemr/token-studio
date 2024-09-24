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
      <label className="text-sm opacity-70 dark:text-neutral-300 font-bold">
        Add Additional Metadata
      </label>
      <div className="space-y-4 mt-2">
        {values.extraMetadata.map((item, index) => (
          <div key={index}>
            <div  className="flex items-center space-x-2">
              <input
                type="text"
                value={item.key}
                disabled
                className="bg-neutral-200 dark:bg-gray-700 text-black dark:text-white rounded p-2 flex-1 font-bold"
              />
              <input
                type="text"
                value={item.value}
                disabled
                className="bg-neutral-200 dark:bg-gray-700 text-black dark:text-white rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={() => removeMetadata(index)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
              {errors.extraMetadata && errors.extraMetadata[index]  && (
              <div className={errorTextStyle}>
                {errors.extraMetadata[index].key && <p>{errors.extraMetadata[index].key}</p>}
                {errors.extraMetadata[index].value && <p>{errors.extraMetadata[index].value}</p>}
              </div>
            )}


          </div>
        ))}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Key"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={addMetadata}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>

         
        </div>
      </div>
    </>
  );
}

export default ExtraMetadataFields;
