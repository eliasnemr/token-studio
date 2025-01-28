import { FormikValues, useFormikContext } from "formik";
import BackIcon from "../Icons/BackIcon";
import PrimaryButton from "../PrimaryButton";
import { useContext } from "react";
import { appContext } from "../../AppContext.tsx";
import PreviewToken from "../PreviewToken";
import NodeLocked from "../NodeLocked";

const Review = () => {
  const { toggleReview, mintOpt } = useContext(appContext);
  const { values, submitForm, resetForm } = useFormikContext<FormikValues>();

  const isBurning = values.burn && parseInt(values.burn) > 0;
  return (
    <NodeLocked onClose={() => toggleReview()}>
      <div className="space-y-6">
        <button
          onClick={() => toggleReview()}
          type="button"
          className="focus:outline-none appearance-none outline-none p-0 flex gap-2 items-center text-black dark:text-white hover:text-grey80 hover:dark:text-grey80"
        >
          <BackIcon size={20} fill="currentColor" />
          <span className=" text-sm">Edit</span>
        </button>

        <div className=" space-y-4">
          <span className="text-black dark:text-white font-bold text-[18px]">
            Review
          </span>

          <div className="bg-grey20 dark:bg-darkContrast rounded p-4 space-y-6">
            {mintOpt !== "default" && !!values.url.length && (
              <PreviewToken url={values.url} />
            )}

            <div>
              <h3 className="text-black dark:text-grey80">Token name</h3>
              <p className="text-black dark:text-white">{values.name}</p>
            </div>
            <div>
              <h3 className="text-black dark:text-grey80">Total supply</h3>
              <p className="text-black dark:text-white">{values.amount}</p>
            </div>
            <div>
              <h3 className="text-black dark:text-grey80">Decimals</h3>
              <p className="text-black dark:text-white">{values.decimals}</p>
            </div>

            {mintOpt !== "default" && !!values.description.length && (
              <div>
                <h3 className="text-black dark:text-grey80">Description</h3>
                <p className="text-black dark:text-white">
                  {values.description}
                </p>
              </div>
            )}

            {mintOpt !== "default" && !!values.ticker.length && (
              <div>
                <h3 className="text-black dark:text-grey80">Ticker</h3>
                <p className="text-black dark:text-white">{values.ticker}</p>
              </div>
            )}

            {mintOpt !== "default" && !!values.webvalidation.length && (
              <div>
                <h3 className="text-black dark:text-grey80">
                  Web validation URL
                </h3>
                <a
                  className="text-black dark:text-white"
                  href={values.webvalidation}
                  target="_blank"
                >
                  {values.webvalidation}
                </a>
              </div>
            )}

            {mintOpt !== "default" && !!values.extraMetadata.length && (
              <div className="space-y-4">
                {values.extraMetadata.map((item, i) => (
                  <div key={item.key + "_" + i}>
                    <h3 className="text-black dark:text-grey80">{item.key}</h3>
                    <p className="text-black dark:text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            )}

            {isBurning && (
              <div>
                <h3 className="text-black dark:text-grey80">Burn amount</h3>
                <p className="text-black dark:text-white">{values.burn}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid space-y-4">
          <PrimaryButton type="submit" onClick={() => submitForm()}>
            Create
          </PrimaryButton>
          <button
            onClick={() => {
              resetForm();
              toggleReview();
            }}
            type="button"
            className="focus:outline-none appearance-none outline-none text-black dark:text-white hover:text-lightDarkContrast dark:hover:text-grey80"
          >
            Cancel creation
          </button>
        </div>
      </div>
    </NodeLocked>
  );
};

export default Review;
