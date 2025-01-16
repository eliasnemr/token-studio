import { FormikValues, useFormikContext } from "formik";
import BackIcon from "../Icons/BackIcon";
import PrimaryButton from "../PrimaryButton";
import { useContext } from "react";
import { appContext } from "../../AppContext.tsx";
import PreviewToken from "../PreviewToken";

const Review = () => {
  const { toggleReview, mintOpt } = useContext(appContext);
  const { values, submitForm, resetForm } = useFormikContext<FormikValues>();

  const isBurning = values.burn && parseInt(values.burn) > 0;
  return (
    <div className="space-y-6">
      <button
        onClick={() => toggleReview()}
        type="button"
        className="focus:outline-none appearance-none outline-none p-0 flex gap-2 items-center"
      >
        <BackIcon size={20} fill="white" />
        <span className="text-white text-sm">
          {mintOpt === "default" && "Simple"}
          {mintOpt === "custom" && "Custom"}
          {mintOpt === "nft" && "NFT"}
        </span>
      </button>

      <div className=" space-y-4">
        <span className="font-bold text-[18px]">Review</span>

        <div className="bg-darkContrast rounded p-4 space-y-6">
          {mintOpt !== "default" && !!values.url.length && (
            <PreviewToken url={values.url} />
          )}

          <div>
            <h3 className="text-grey80">Token name</h3>
            <p>{values.name}</p>
          </div>
          <div>
            <h3 className="text-grey80">Total supply</h3>
            <p>{values.amount}</p>
          </div>

          {mintOpt !== "default" && !!values.description.length && (
            <div>
              <h3 className="text-grey80">Description</h3>
              <p>{values.description}</p>
            </div>
          )}

          {mintOpt !== "default" && !!values.ticker.length && (
            <div>
              <h3 className="text-grey80">Ticker</h3>
              <p>{values.ticker}</p>
            </div>
          )}

          {mintOpt !== "default" && !!values.webvalidation.length && (
            <div>
              <h3 className="text-grey80">Web validation URL</h3>
              <a href={values.webvalidation} target="_blank">
                {values.webvalidation}
              </a>
            </div>
          )}

          {mintOpt !== "default" && !!values.extraMetadata.length && (
            <div className="space-y-4">
              {values.extraMetadata.map((item, i) => (
                <div key={item.key + "_" + i}>
                  <h3 className="text-grey80">{item.key}</h3>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {isBurning && (
            <div>
              <h3 className="text-grey80">Burn amount</h3>
              <p>{values.burn}</p>
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
          className="appearance-none outline-none hover:text-grey80"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Review;
