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
        <hr className="border border-grey20 dark:border-darkContrastFour" />
        <label className="text-xs text-center text-black dark:text-white">
          Add Additional Metadata
        </label>
        <hr className="border border-grey20 dark:border-darkContrastFour" />
      </div>
      <div className="space-y-4 mt-2">
        <div className="space-y-0 space-x-2 grid grid-cols-[1fr_1fr_auto]">
          <input
            type="text"
            placeholder="Attribute"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            className="text-black bg-grey20 dark:bg-darkContrast dark:text-grey80 outline-none py-3 px-4"
          />
          <input
            type="text"
            placeholder="Value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="text-black bg-grey20 dark:bg-darkContrast dark:text-grey80 outline-none py-3 px-4"
          />
          <button
            type="button"
            className="p-0 appearance-none outline-none focus:outline-none"
            onClick={addMetadata}
          >
            <img alt="add-circle" src="./assets/add_circle.svg" />
          </button>
        </div>

        {values.extraMetadata.map((item, index) => (
          <div key={index}>
            <div className="space-y-0 space-x-2 grid grid-cols-[1fr_1fr_auto]">
              <input
                type="text"
                value={item.key}
                disabled
                className="text-black bg-grey20 dark:bg-darkContrast dark:text-grey80 outline-none py-3 px-4"
              />
              <input
                type="text"
                value={item.value}
                disabled
                className="text-black bg-grey20 dark:bg-darkContrast dark:text-grey80 outline-none py-3 px-4"
              />
              <button
                type="button"
                className="p-0 appearance-none outline-none focus:outline-none"
                onClick={() => removeMetadata(index)}
              >
                <img alt="cancel" src="./assets/cancel.svg" />
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
      </div>
    </>
  );
}

export default ExtraMetadataFields;
