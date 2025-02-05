import { useContext, useState, useEffect } from "react";
import * as yup from "yup";
import { useSearchParams } from "react-router-dom";
import { Formik } from "formik";
import Decimal from "decimal.js";
import { appContext } from "../../AppContext";

import MessageArea from "../../components/MessageArea";
import AnimatePageIn from "../Animate/AnimatePageIn";
import AddImage from "../AddImage";
import PreviewToken from "../PreviewToken";
import PrimaryButton from "../PrimaryButton";
import { isValidURLAll, isValidURLSecureOnly } from "../../utils/functions";

import UploadIcon from "../Icons/UploadIcon";
import SimpleTokenIcon from "../Icons/SimpleTokenIcon";
import CustomTokenIcon from "../Icons/CustomTokenIcon";
import NonFungibleIcon from "../Icons/NonFungibleIcon";
import RubbishIcon from "../Icons/RubbishIcon";
import WebIcon from "../Icons/WebIcon";
import FireIcon from "../Icons/FireIcon";
import ExtraMetadataFields from "../ExtraMetadata";
import { errorTextStyle } from "../../styles";
import SecondaryButton from "../SecondaryButton";
import DoneIcon from "../Icons/DoneIcon";
import copyToClipboard from "../../utils/copyToClipboard";

const TokenStudio = () => {
  const {
    loaded,
    getBalance,
    balance: wallet,
    setTransactionSubmitting,
    setTransactionError,
    setTransactionPending,
    setTransactionSuccess,
  } = useContext(appContext);
  const [selectedOption, setSelectedOption] = useState<
   any
  >("default");
  const [imageUploadOption, setImageUploadOption] = useState<
    "file" | "url" | null
  >(null);
  const [searchParams] = useSearchParams();

  const [copied, setCopied] = useState(false);

  // Set the mode according to the search params if any
  useEffect(() => {
    if (
      searchParams &&
      searchParams.get("mode") &&
      ["1", "2", "3"].includes(searchParams.get("mode")!)
    ) {
      setSelectedOption(
        searchParams.get("mode") === "1"
          ? "default"
          : searchParams.get("mode") === "2"
          ? "custom"
          : searchParams.get("mode") === "3"
          ? "nft"
          : "default"
      );
    }
  }, [searchParams]);

  useEffect(() => {
    if (loaded && loaded.current) {
      getBalance();
    }
  }, [loaded]);

  const handleOptionChange = (mode: string, event: any) => {
    if (mode === "form") {
      return setSelectedOption(event.target.value);
    }

    setImageUploadOption(event.target.value);
  };

  const handleCopy = async (value: string) => {
    setCopied(true);

    copyToClipboard(value);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCopied(false);
  };

  return (
    <AnimatePageIn display={true}>
      <section className="mx-3 mt-8">
        <div className="grid grid-cols-[1fr_auto] items-center">
          <h6 className="font-bold tracking-wide dark:text-neutral-300">
            Token Studio
          </h6>
        </div>
        <p>
          {selectedOption === "default" && "Create a simple token"}
          {selectedOption === "custom" && "Create a custom token with an image"}
          {selectedOption === "nft" && "Create a non-fungible token"}
        </p>
        <Formik
          initialValues={{
            name: "",
            amount: "",
            burn: "",
            url: "",
            ticker: "",
            description: "",
            owner: "",
            webvalidation: "",
            extraMetadata: [],
          }}
          onSubmit={async (
            {
              amount,
              name,
              burn,
              url,
              ticker,
              description,
              webvalidation,
              owner,
              extraMetadata,
            },
            { resetForm }
          ) => {
            // reset all..
            setTransactionSubmitting(true);
            setTransactionPending(false);
            setTransactionError(false);
            setTransactionSuccess(false);
            try {
              // Create a promise for the MDS command and await its resolution

              if (selectedOption === "default") {
                await new Promise((resolve, reject) => {
                  (window as any).MDS.cmd(
                    `tokencreate amount:${amount} name:${name} ${
                      burn.length ? "burn:" + burn : ""
                    }`,
                    (resp: any) => {
                      if (resp.pending) reject("PENDING");

                      if (!resp.status) {
                        reject(
                          resp.message
                            ? resp.message
                            : resp.error
                            ? resp.error
                            : "Failed to send!"
                        );
                      } else {
                        resolve(true);
                      }
                    }
                  );
                });
              }

              if (selectedOption === "custom") {
                await new Promise((resolve, reject) => {
                  const token = {
                    name: name,
                    url: url,
                    description: description,
                    ticker: ticker,
                    webvalidate: webvalidation,
                    ...extraMetadata.reduce((acc, { key, value }) => {
                      acc[key] = value;
                      return acc;
                    }, {}),
                  };

                  (window as any).MDS.cmd(
                    `tokencreate decimals:8 amount:${amount} name:"${JSON.stringify(
                      token
                    )}" ${burn.length ? "burn:" + burn : ""}`,
                    (resp: any) => {
                      if (resp.pending) reject("PENDING");

                      if (!resp.status) {
                        reject(
                          resp.message
                            ? resp.message
                            : resp.error
                            ? resp.error
                            : "Failed to send!"
                        );
                      } else {
                        resolve(true);
                      }
                    }
                  );
                });
              }

              if (selectedOption === "nft") {
                await new Promise((resolve, reject) => {
                  const token = {
                    name: name,
                    url: url,
                    description: description,
                    owner: owner,
                    webvalidate: webvalidation,
                    ...extraMetadata.reduce((acc, { key, value }) => {
                      acc[key] = value;
                      return acc;
                    }, {}),
                  };

                  (window as any).MDS.cmd(
                    `tokencreate decimals:0 amount:${amount} name:"${JSON.stringify(
                      token
                    )}" ${burn.length ? "burn:" + burn : ""}`,
                    (resp: any) => {
                      if (resp.pending) reject("PENDING");

                      if (!resp.status) {
                        reject(
                          resp.message
                            ? resp.message
                            : resp.error
                            ? resp.error
                            : "Failed to send!"
                        );
                      } else {
                        resolve(true);
                      }
                    }
                  );
                });
              }

              setTransactionSuccess(true);
              await new Promise((resolve) => setTimeout(resolve, 2000));

              // reset
              setTransactionSubmitting(false);
              setTransactionSuccess(false);
              resetForm();
            } catch (error) {
              console.error(error);
              if (error instanceof Error) {
                setTransactionError(error.message);
              } else if (error === "PENDING") {
                setTransactionPending(true);
              } else {
                setTransactionError(
                  typeof error === "string"
                    ? error
                    : "An unknown error occurred"
                );
              }
            }
          }}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .required("Field is required")
              .matches(/^[^\\;]+$/, "Invalid characters."),
            owner:
              selectedOption !== "default" && selectedOption !== "custom"
                ? yup
                    .string()
                    .matches(/^[^\\;]+$/, "Invalid characters.")
                    .max(255)
                : yup.string().nullable(),
            amount: yup
              .string()
              .required("Field is required")
              .matches(/^\d*\.?\d+$/, "Enter a valid number")
              //@ts-ignore
              .test("test amount", function (val) {
                //@ts-ignore
                const { parent, path, createError } = this;

                if (!val) {
                  return false;
                }

                try {
                  if (new Decimal(val).isZero()) {
                    throw new Error("You can't mint zero tokens");
                  }

                  if (new Decimal(val).decimalPlaces() > 1) {
                    throw new Error(
                      "You can't mint a token with decimal places"
                    );
                  }

                  if (new Decimal(val).lessThan(1)) {
                    throw new Error("You can't mint less than 1 token");
                  }

                  if (new Decimal(val).greaterThan(1000000000)) {
                    throw new Error("Too much!");
                  }

                  return true;
                } catch (error) {
                  if (error instanceof Error) {
                    return createError({ path, message: error.message });
                  }
                }
              }),
            url:
              selectedOption !== "default"
                ? yup
                    .string()
                    .trim()
                    .test("check-my-url", "Enter a valid URL", function (val) {
                      const { path, createError } = this;

                      if (!val) {
                        return true;
                      }

                      try {
                        if (
                          val.substring(0, "data:image".length) === "data:image"
                        ) {
                          return true;
                        }

                        if (
                          val.substring(0, "<artimage>".length) === "<artimage>"
                        ) {
                          return true;
                        }

                        if (!isValidURLAll(val)) {
                          throw new Error("Enter a valid URL");
                        }

                        return true;
                      } catch (error) {
                        if (error instanceof Error) {
                          return createError({ path, message: error.message });
                        }
                        return createError({
                          path,
                          message: "Enter a valid URL",
                        });
                      }
                    })
                : yup.string().nullable(),
            //@ts-ignore
            burn: yup
              .string()
              .matches(/^\d*\.?\d+$/, "Enter a valid number")
              .test("test burn", function (val) {
                const { path, parent, createError } = this;

                if (!val) {
                  return true;
                }

                try {
                  if (new Decimal(val).isZero()) {
                    return true;
                  }

                  if (!parent.amount) {
                    return true;
                  }

                  if (new Decimal(val).greaterThan(wallet[0].sendable)) {
                    throw new Error("Insufficient funds");
                  }

                  if (new Decimal(val).decimalPlaces() > 18) {
                    throw new Error(
                      "You can't have more than 18 decimal places."
                    );
                  }

                  return true;
                } catch (error) {
                  if (error instanceof Error) {
                    return createError({ path, message: error.message });
                  }
                }
              }),
            description:
              selectedOption !== "default"
                ? yup
                    .string()
                    .min(0)
                    .max(255, "Maximum 255 characters allowed.")
                : yup.string().nullable(),
            ticker:
              selectedOption !== "default" && selectedOption !== "nft"
                ? yup
                    .string()
                    .min(0)
                    .max(5, "Maximum 5 characters allowed.")
                    .matches(/^[^\\;]+$/, "Invalid characters.")
                : yup.string().nullable(),
            webvalidation:
              selectedOption !== "default"
                ? yup
                    .string()
                    .test(
                      "check-my-webvalidator",
                      "Invalid Url, must be https",
                      function (val) {
                        const { path, createError } = this;

                        if (!val) {
                          return true;
                        }

                        try {
                          if (!isValidURLSecureOnly(val)) {
                            throw new Error("Invalid URL, must be https");
                          }

                          return true;
                        } catch (error) {
                          if (error instanceof Error) {
                            return createError({
                              path,
                              message: error.message,
                            });
                          }

                          return createError({ path, message: "Invalid Url" });
                        }
                      }
                    )
                : yup.string().nullable(),
            extraMetadata: yup.array().of(
              yup.object().shape({
                key: yup
                  .string()
                  .required("Field is required")
                  .matches(
                    /^[a-zA-Z0-9_]+$/,
                    "Key can only contain letters, numbers, and underscores"
                  )
                  .max(50, "Key must be at most 50 characters"),
                value: yup
                  .string()
                  .required("Field is required")
                  .max(255, "Value must be at most 255 characters"),
              })
            ),
          })}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            isValid,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <>
                <div className="flex-1 flex flex-col">
                  {/* Custom Radio Buttons */}
                  <div className="my-3">
                    <fieldset>
                      <div className="grid grid-cols-3 gap-2">
                        <label
                          className={`text-center justify-center text-sm p-4 flex-col rounded-lg sm:roundd-full sm:flex-row flex items-center transition-all ${
                            selectedOption === "default"
                              ? "bg-black dark:bg-black font-bold"
                              : "bg-neutral-200 dark:bg-[#1B1B1B]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="option"
                            value="default"
                            checked={selectedOption === "default"}
                            onChange={(e) => handleOptionChange("form", e)}
                            className="hidden"
                          />
                          <span
                            className={`${
                              selectedOption === "default" && "text-white"
                            }`}
                          >
                            <SimpleTokenIcon fill="currentColor" size={20} />
                          </span>
                          <span
                            className={`ml-0 sm:ml-2 ${
                              selectedOption === "default" ? "text-white" : ""
                            }`}
                          >
                            Simple
                          </span>
                        </label>
                        <label
                          className={`text-center justify-center text-sm flex-col rounded-lg sm:roundd-full sm:flex-row p-4 flex items-center transition-all ${
                            selectedOption === "custom"
                              ? "bg-black dark:bg-black font-bold"
                              : "bg-neutral-200 dark:bg-[#1B1B1B]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="option"
                            value="custom"
                            checked={selectedOption === "custom"}
                            onChange={(e) => {
                              handleOptionChange("form", e);

                              setImageUploadOption(null);
                              setFieldValue("url", "");
                            }}
                            className="hidden"
                          />
                          <span
                            className={`${
                              selectedOption === "custom" && "text-white"
                            }`}
                          >
                            <CustomTokenIcon fill="currentColor" size={20} />
                          </span>
                          <span
                            className={`ml-0 sm:ml-2 ${
                              selectedOption === "custom" ? "text-white" : ""
                            }`}
                          >
                            Custom
                          </span>
                        </label>
                        <label
                          className={`text-center justify-center text-sm flex-col rounded-lg sm:roundd-full sm:flex-row p-4 flex items-center transition-all ${
                            selectedOption === "nft"
                              ? "bg-black dark:bg-black font-bold"
                              : "bg-neutral-200 dark:bg-[#1B1B1B]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="option"
                            value="nft"
                            checked={selectedOption === "nft"}
                            onChange={(e) => {
                              handleOptionChange("form", e);

                              setImageUploadOption(null);
                              setFieldValue("url", "");
                            }}
                            className="hidden"
                          />
                          <span
                            className={`${
                              selectedOption === "nft" ? "text-white" : ""
                            }`}
                          >
                            <NonFungibleIcon fill="currentColor" size={20} />
                          </span>
                          <span
                            className={`ml-0 sm:ml-2 ${
                              selectedOption === "nft" ? "text-white" : ""
                            }`}
                          >
                            Non-fungible
                          </span>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                </div>

                {selectedOption === "default" && (
                  <>
                    <div className="my-2">
                      <label className="text-sm opacity-70 dark:text-neutral-300">
                        Amount to mint
                      </label>
                      <input
                        id="amount"
                        name="amount"
                        type="text"
                        placeholder="0.0"
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                      />
                      {errors && errors.amount && touched && touched.amount && (
                        <p className={errorTextStyle}>{errors.amount}</p>
                      )}
                    </div>

                    <div className="my-2">
                      <label className="text-sm opacity-70 dark:text-neutral-300">
                        Token name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Token Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                      />
                      {errors && errors.name && touched && touched.name && (
                        <p className={errorTextStyle}>{errors.name}</p>
                      )}
                    </div>

                    <div className="mt-16 flex gap-2">
                      <PrimaryButton
                        disabled={!isValid || isSubmitting}
                        type="submit"
                      >
                        Mint
                      </PrimaryButton>
                      <SecondaryButton
                        type="button"
                        extraClass={`flex-1 ${
                          copied && "!bg-teal-500 !text-white"
                        } !outline-none`}
                        onClick={() => {
                          

                          if (
                            selectedOption !== "custom" &&
                            selectedOption !== "nft"
                          ) {
                            handleCopy(
                              `tokencreate name:${values.name} amount:${values.amount} decimals:8`
                            );
                          }

                          if (selectedOption === "custom") {
                            const token = {
                              name: values.name,
                              url: values.url,
                              description: values.description,
                              ticker: values.ticker,
                              webvalidate: values.webvalidation,
                              ...values.extraMetadata.reduce(
                                (acc, { key, value }) => {
                                  acc[key] = value;
                                  return acc;
                                },
                                {}
                              ),
                            };

                            handleCopy(
                              `tokencreate name:${JSON.stringify(
                                token
                              )} amount:${values.amount} decimals:8`
                            );
                          }

                          if (selectedOption === "nft") {
                            const token = {
                              name: values.name,
                              url: values.url,
                              description: values.description,
                              owner: values.owner,
                              webvalidate: values.webvalidation,
                              ...values.extraMetadata.reduce(
                                (acc, { key, value }) => {
                                  acc[key] = value;
                                  return acc;
                                },
                                {}
                              ),
                            };

                            handleCopy(
                              `tokencreate name:${JSON.stringify(
                                token
                              )} amount:${values.amount} decimals:0`
                            );
                          }
                        }}
                      >
                        {!copied && "CLI"}

                        {copied && (
                          <span className="flex items-center gap-2">
                            Copied! <DoneIcon size={22} fill="currentColor" />
                          </span>
                        )}
                      </SecondaryButton>
                    </div>

                    {errors && errors.burn && (
                      <p className="text-sm text-center mt-3 text-neutral-600 dark:text-orange-300">
                        {errors.burn}
                      </p>
                    )}

                    <div className="my-2 w-full flex">
                      <p className="text-sm my-auto dark:text-neutral-300">
                        Network
                        <br /> fee
                      </p>
                      <div className="ml-auto">
                        <span className="flex justify-end text-orange-500 dark:text-orange-400">
                          <FireIcon size={22} fill="currentColor" />
                        </span>
                        <input
                          id="burn"
                          name="burn"
                          value={values.burn}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="0.0"
                          className={`placeholder:font-mono placeholder:text-neutral-500 bg-transparent focus:outline-none text-right max-w-max text-sm dark:placeholder:text-neutral-400 ${
                            errors && errors.burn
                              ? "underline underline-red-500 text-red-500"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  </>
                )}

                {(selectedOption === "custom" || selectedOption === "nft") && (
                  <>
                    <div className="my-4">
                      <div className="flex-1 flex flex-col">
                        {!imageUploadOption && (
                          <p className="text-center dark:text-neutral-300 animate-pulse mb-3">
                            Choose image upload method
                          </p>
                        )}
                        <div>
                          <fieldset>
                            <div className="grid grid-cols-2 gap-2">
                              <label
                                className={`${
                                  selectedOption === "nft" && "opacity-50"
                                } justify-center text-sm p-4 flex-col rounded-lg sm:roundd-full sm:flex-row flex items-center transition-all ${
                                  imageUploadOption === "file"
                                    ? "bg-black dark:bg-black font-bold"
                                    : "bg-neutral-200 dark:bg-[#1B1B1B]"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="option"
                                  disabled={selectedOption === "nft"}
                                  value="file"
                                  checked={imageUploadOption === "file"}
                                  onChange={(e) => {
                                    handleOptionChange("imageUpload", e);

                                    if (values.url.length) {
                                      setFieldValue("url", "");
                                    }
                                  }}
                                  className="hidden"
                                />
                                <span
                                  className={`${
                                    imageUploadOption === "file" && "text-white"
                                  }`}
                                >
                                  <UploadIcon fill="currentColor" size={20} />
                                </span>
                                <span
                                  className={`ml-2 ${
                                    imageUploadOption === "file"
                                      ? "text-white"
                                      : ""
                                  }`}
                                >
                                  Upload File
                                </span>
                              </label>
                              <label
                                className={`justify-center text-sm flex-col rounded-lg sm:roundd-full sm:flex-row p-4 flex items-center transition-all ${
                                  imageUploadOption === "url"
                                    ? "bg-black dark:bg-black font-bold"
                                    : "bg-neutral-200 dark:bg-[#1B1B1B]"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="option"
                                  value="url"
                                  checked={imageUploadOption === "url"}
                                  onChange={(e) => {
                                    handleOptionChange("imageUpload", e);

                                    if (values.url.length) {
                                      setFieldValue("url", "");
                                    }
                                  }}
                                  className="hidden"
                                />
                                <span
                                  className={`${
                                    imageUploadOption === "url"
                                      ? "text-white"
                                      : ""
                                  }`}
                                >
                                  <WebIcon fill="currentColor" size={20} />
                                </span>
                                <span
                                  className={`ml-2 ${
                                    imageUploadOption === "url"
                                      ? "text-white"
                                      : ""
                                  }`}
                                >
                                  URL
                                </span>
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      <div className="relative my-6">
                        {values.url && (
                          <div className="grid grid-cols-[1fr_auto] items-center justify-center gap-4">
                            <PreviewToken
                              name={values.name}
                              amount={values.amount}
                              url={values.url}
                            />
                            <span
                              onClick={() => setFieldValue("url", "")}
                              className="flex justify-center bg-neutral-200 hover:bg-neutral-300 dark:hover:bg-black dark:bg-[#1B1B1B] p-4 rounded-lg"
                            >
                              <RubbishIcon fill="currentColor" />
                            </span>
                          </div>
                        )}
                      </div>
                      {imageUploadOption === "file" && <AddImage />}
                      {imageUploadOption === "url" && (
                        <div className="my-2">
                          <label className="text-sm opacity-70 dark:text-neutral-300">
                            Image URL
                          </label>

                          <input
                            id="url"
                            name="url"
                            type="text"
                            placeholder="Image URL"
                            value={values.url}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                          />
                          {errors && errors.url && touched && touched.url && (
                            <p className={errorTextStyle}>{errors.url}</p>
                          )}
                        </div>
                      )}
                    </div>
                    <AnimatePageIn display={imageUploadOption !== null}>
                      <div className="my-2">
                        <label className="text-sm opacity-70 dark:text-neutral-300">
                          Amount to mint
                        </label>
                        <input
                          id="amount"
                          name="amount"
                          type="text"
                          placeholder="0.0"
                          value={values.amount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                        />
                        {errors &&
                          errors.amount &&
                          touched &&
                          touched.amount && (
                            <p className={errorTextStyle}>{errors.amount}</p>
                          )}
                      </div>

                      <div className="my-2">
                        <label className="text-sm opacity-70 dark:text-neutral-300">
                          Token name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Token Name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                        />
                        {errors && errors.name && touched && touched.name && (
                          <p className={errorTextStyle}>{errors.name}</p>
                        )}
                      </div>

                      {selectedOption === "custom" && (
                        <div className="my-2">
                          <label className="text-sm opacity-70 dark:text-neutral-300">
                            Ticker Symbol
                          </label>

                          <input
                            id="ticker"
                            name="ticker"
                            type="text"
                            placeholder="Token Ticker Symbol (e.g MINIMA, BTC, ETH)"
                            value={values.ticker}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                          />
                          {errors &&
                            errors.ticker &&
                            touched &&
                            touched.ticker && (
                              <p className={errorTextStyle}>{errors.ticker}</p>
                            )}
                        </div>
                      )}

                      {selectedOption === "nft" && (
                        <div className="my-2">
                          <label className="text-sm opacity-70 dark:text-neutral-300">
                            Creator's Name
                          </label>

                          <input
                            id="owner"
                            name="owner"
                            type="text"
                            placeholder="Creator Name"
                            value={values.owner}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                          />
                          {errors &&
                            errors.owner &&
                            touched &&
                            touched.owner && (
                              <p className={errorTextStyle}>{errors.owner}</p>
                            )}
                        </div>
                      )}

                      {(selectedOption === "custom" ||
                        selectedOption === "nft") && (
                        <>
                          <div className="my-2">
                            <label className="text-sm opacity-70 dark:text-neutral-300">
                              Description
                            </label>
                            <MessageArea
                              id="description"
                              name="description"
                              value={values.description}
                              error={false}
                              handleBlur={handleBlur}
                              handleChange={handleChange}
                              placeholder="Token Description"
                            />
                            {errors && errors.description && (
                              <p className={errorTextStyle}>
                                {errors.description}
                              </p>
                            )}
                          </div>

                          <div className="my-2">
                            <label className="text-sm opacity-70 dark:text-neutral-300">
                              Token Authenticity
                            </label>

                            <input
                              id="webvalidation"
                              name="webvalidation"
                              type="text"
                              placeholder="Token Authenticity URL"
                              value={values.webvalidation}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="bg-white rounded p-4 w-full focus:border focus:outline-none dark:placeholder:text-neutral-600 dark:bg-[#1B1B1B]"
                            />
                            {errors &&
                              errors.webvalidation &&
                              touched &&
                              touched.webvalidation && (
                                <p className={errorTextStyle}>
                                  {errors.webvalidation}
                                </p>
                              )}

                            <p className="text-xs dark:text-neutral-400 text-left mt-2 text-neutral-500">
                              Hosting a .txt file on your webpage with the
                              tokenid of this token after it is minted will
                              validate its authenticity
                            </p>
                          </div>

                          <ExtraMetadataFields values={values} />
                        </>
                      )}
                      <div className="mt-16 flex gap-2">
                        <PrimaryButton
                          disabled={!isValid || isSubmitting}
                          type="submit"
                          extraClass="flex-grow"
                        >
                          Mint
                        </PrimaryButton>
                        <SecondaryButton
                          type="button"
                          extraClass={`flex-1 ${
                            copied && "!bg-teal-500 !text-white"
                          } !outline-none`}
                          onClick={() => {
                            if (
                              selectedOption !== "custom" &&
                              selectedOption !== "nft"
                            ) {
                              handleCopy(
                                `tokencreate name:${values.name} amount:${values.amount} decimals:8`
                              );
                            }

                            if (selectedOption === "custom") {
                              const token = {
                                name: values.name,
                                url: values.url,
                                description: values.description,
                                ticker: values.ticker,
                                webvalidate: values.webvalidation,
                                ...values.extraMetadata.reduce(
                                  (acc, { key, value }) => {
                                    acc[key] = value;
                                    return acc;
                                  },
                                  {}
                                ),
                              };

                              handleCopy(
                                `tokencreate name:${JSON.stringify(
                                  token
                                )} amount:${values.amount} decimals:8`
                              );
                            }

                            if (selectedOption === "nft") {
                              const token = {
                                name: values.name,
                                url: values.url,
                                description: values.description,
                                owner: values.owner,
                                webvalidate: values.webvalidation,
                                ...values.extraMetadata.reduce(
                                  (acc, { key, value }) => {
                                    acc[key] = value;
                                    return acc;
                                  },
                                  {}
                                ),
                              };

                              handleCopy(
                                `tokencreate name:${JSON.stringify(
                                  token
                                )} amount:${values.amount} decimals:0`
                              );
                            }
                          }}
                        >
                          {!copied && "CLI"}

                          {copied && (
                            <span className="flex items-center gap-2">
                              Copied! <DoneIcon size={22} fill="currentColor" />
                            </span>
                          )}
                        </SecondaryButton>
                      </div>

                      {errors && errors.burn && (
                        <p className="text-sm text-center mt-3 text-neutral-600 dark:text-orange-300">
                          {errors.burn}
                        </p>
                      )}

                      <div className="my-2 w-full flex">
                        <p className="text-sm my-auto dark:text-neutral-300">
                          Network
                          <br /> fee
                        </p>
                        <div className="ml-auto">
                          <span className="flex justify-end text-orange-500 dark:text-orange-400">
                            <FireIcon size={22} fill="currentColor" />
                          </span>
                          <input
                            id="burn"
                            name="burn"
                            value={values.burn}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="0.0"
                            className={`placeholder:font-mono placeholder:text-neutral-500 bg-transparent focus:outline-none text-right max-w-max text-sm dark:placeholder:text-neutral-400 ${
                              errors && errors.burn
                                ? "underline underline-red-500 text-red-500"
                                : ""
                            }`}
                          />
                        </div>
                      </div>
                    </AnimatePageIn>
                  </>
                )}
              </>
            </form>
          )}
        </Formik>
      </section>
    </AnimatePageIn>
  );
};

export default TokenStudio;
