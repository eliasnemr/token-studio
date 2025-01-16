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
import RubbishIcon from "../Icons/RubbishIcon";
import WebIcon from "../Icons/WebIcon";
import FireIcon from "../Icons/FireIcon";
import ExtraMetadataFields from "../ExtraMetadata";
import { errorTextStyle } from "../../styles";
import SecondaryButton from "../SecondaryButton";
import DoneIcon from "../Icons/DoneIcon";
import copyToClipboard from "../../utils/copyToClipboard";
import { CopyIcon } from "lucide-react";
import { Input } from "../Input";
import Review from "../Review";
import { AnimatePresence, motion } from "framer-motion";
import ImageUploadSelect from "../ImageUploadSelect";

const TokenStudio = () => {
  const {
    loaded,
    getBalance,
    wallet,
    setTransactionSubmitting,
    setTransactionError,
    setTransactionPending,
    setTransactionSuccess,
    mintOpt,
    setMintOpts,
    reviewing,
    toggleReview,
  } = useContext(appContext);

  const [imageUploadOption, setImageUploadOption] = useState<"file" | "url">(
    "file",
  );
  const [searchParams] = useSearchParams();

  const [copied, setCopied] = useState(false);

  // Set the mode according to the search params if any
  useEffect(() => {
    if (
      searchParams &&
      searchParams.get("mode") &&
      ["1", "2", "3"].includes(searchParams.get("mode")!)
    ) {
      setMintOpts(
        searchParams.get("mode") === "1"
          ? "default"
          : searchParams.get("mode") === "2"
            ? "custom"
            : searchParams.get("mode") === "3"
              ? "nft"
              : "default",
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
      return setMintOpts(event.target.value);
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
    <>
      <div className="custom-scrollbar md:border border-darkContrastFour bg-black max-h-max mt-[40px] md:mt-[60px] px-4 p-0 md:p-8 rounded w-full md:max-w-[648px] md:min-w-[648px] overflow-auto pb-10 mb-0 md:mb-10 overflow-x-none">
        <section>
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
              { resetForm },
            ) => {
              if (!reviewing) {
                toggleReview();

                return;
              }

              // reset all..
              setTransactionSubmitting(true);
              setTransactionPending(false);
              setTransactionError(false);
              setTransactionSuccess(false);
              try {
                // Create a promise for the MDS command and await its resolution

                if (mintOpt === "default") {
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
                                : "Failed to send!",
                          );
                        } else {
                          resolve(true);
                        }
                      },
                    );
                  });
                }

                if (mintOpt === "custom") {
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
                        token,
                      )}" ${burn.length ? "burn:" + burn : ""}`,
                      (resp: any) => {
                        if (resp.pending) reject("PENDING");

                        if (!resp.status) {
                          reject(
                            resp.message
                              ? resp.message
                              : resp.error
                                ? resp.error
                                : "Failed to send!",
                          );
                        } else {
                          resolve(true);
                        }
                      },
                    );
                  });
                }

                if (mintOpt === "nft") {
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
                        token,
                      )}" ${burn.length ? "burn:" + burn : ""}`,
                      (resp: any) => {
                        if (resp.pending) reject("PENDING");

                        if (!resp.status) {
                          reject(
                            resp.message
                              ? resp.message
                              : resp.error
                                ? resp.error
                                : "Failed to send!",
                          );
                        } else {
                          resolve(true);
                        }
                      },
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
                      : "An unknown error occurred",
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
                mintOpt !== "default" && mintOpt !== "custom"
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
                        "You can't mint a token with decimal places",
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
                mintOpt !== "default"
                  ? yup
                      .string()
                      .trim()
                      .test(
                        "check-my-url",
                        "Enter a valid URL",
                        function (val) {
                          const { path, createError } = this;

                          if (!val) {
                            return true;
                          }

                          try {
                            if (
                              val.substring(0, "data:image".length) ===
                              "data:image"
                            ) {
                              return true;
                            }

                            if (
                              val.substring(0, "<artimage>".length) ===
                              "<artimage>"
                            ) {
                              return true;
                            }

                            if (!isValidURLAll(val)) {
                              throw new Error("Enter a valid URL");
                            }

                            return true;
                          } catch (error) {
                            if (error instanceof Error) {
                              return createError({
                                path,
                                message: error.message,
                              });
                            }
                            return createError({
                              path,
                              message: "Enter a valid URL",
                            });
                          }
                        },
                      )
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
                        "You can't have more than 18 decimal places.",
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
                mintOpt !== "default"
                  ? yup
                      .string()
                      .min(0)
                      .max(255, "Maximum 255 characters allowed.")
                  : yup.string().nullable(),
              ticker:
                mintOpt !== "default" && mintOpt !== "nft"
                  ? yup
                      .string()
                      .min(0)
                      .max(5, "Maximum 5 characters allowed.")
                      .matches(/^[^\\;]+$/, "Invalid characters.")
                  : yup.string().nullable(),
              webvalidation:
                mintOpt !== "default"
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

                            return createError({
                              path,
                              message: "Invalid Url",
                            });
                          }
                        },
                      )
                  : yup.string().nullable(),
              extraMetadata: yup.array().of(
                yup.object().shape({
                  key: yup
                    .string()
                    .required("Field is required")
                    .matches(
                      /^[a-zA-Z0-9_]+$/,
                      "Key can only contain letters, numbers, and underscores",
                    )
                    .max(50, "Key must be at most 50 characters"),
                  value: yup
                    .string()
                    .required("Field is required")
                    .max(255, "Value must be at most 255 characters"),
                }),
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
              <>
                {reviewing && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="review"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                        exit: { opacity: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Review />
                    </motion.div>
                  </AnimatePresence>
                )}

                {!reviewing && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="review"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                        exit: { opacity: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <form onSubmit={handleSubmit}>
                        <>
                          <div className="flex-1 flex flex-col">
                            {/* Custom Radio Buttons */}
                            <div className="my-3">
                              <fieldset>
                                <div className="grid grid-cols-3 gap-2 md:gap-4">
                                  <label
                                    className={`p-3 text-left justify-start text-black text-sm flex-col rounded sm:flex-row flex items-center transition-all ${
                                      mintOpt === "default"
                                        ? "bg-lightOrange"
                                        : "bg-mediumDarkContrast"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="option"
                                      value="default"
                                      checked={mintOpt === "default"}
                                      onChange={(e) =>
                                        handleOptionChange("form", e)
                                      }
                                      className="hidden"
                                    />
                                    <span
                                      className={`ml-0 sm:ml-2 ${
                                        mintOpt === "default"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      Simple
                                    </span>
                                  </label>
                                  <label
                                    className={`p-3 text-left justify-start text-black text-sm flex-col rounded sm:flex-row flex items-center transition-all ${
                                      mintOpt === "custom"
                                        ? "bg-lightOrange"
                                        : "bg-mediumDarkContrast"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="option"
                                      value="custom"
                                      checked={mintOpt === "custom"}
                                      onChange={(e) => {
                                        handleOptionChange("form", e);

                                        setImageUploadOption("file");

                                        setFieldValue("url", "");
                                      }}
                                      className="hidden"
                                    />
                                    <span
                                      className={`ml-0 sm:ml-2 ${
                                        mintOpt === "custom"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      Custom
                                    </span>
                                  </label>
                                  <label
                                    className={`p-3 text-left justify-start text-black text-sm flex-col rounded sm:flex-row flex items-center transition-all ${
                                      mintOpt === "nft"
                                        ? "bg-lightOrange"
                                        : "bg-mediumDarkContrast"
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="option"
                                      value="nft"
                                      checked={mintOpt === "nft"}
                                      onChange={(e) => {
                                        handleOptionChange("form", e);

                                        setImageUploadOption("url");

                                        setFieldValue("url", "");
                                      }}
                                      className="hidden"
                                    />
                                    <span
                                      className={`ml-0 sm:ml-2 ${
                                        mintOpt === "nft"
                                          ? "text-black"
                                          : "text-white"
                                      }`}
                                    >
                                      Non-fungible
                                    </span>
                                  </label>
                                </div>
                              </fieldset>
                            </div>
                          </div>

                          <div className="my-4 mb-6">
                            {mintOpt === "default" && (
                              <p>
                                Create a simple token. Write some more info here
                                re. what a simple token is for and who might use
                                this.
                              </p>
                            )}
                            {mintOpt === "custom" && (
                              <p>
                                Create a custom token. Write some more info here
                                re. what a simple token is for and who might use
                                this.
                              </p>
                            )}
                            {mintOpt === "nft" && (
                              <p>
                                Create a nft. Write some more info here re. what
                                a simple token is for and who might use this.
                              </p>
                            )}
                          </div>

                          {mintOpt === "default" && (
                            <>
                              <div className="space-y-3">
                                <Input
                                  id="name"
                                  name="name"
                                  label="Token name"
                                  placeholder="Enter a name for your token"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.name}
                                  touched={touched.name}
                                />

                                <Input
                                  id="amount"
                                  name="amount"
                                  type="number"
                                  label="Total supply"
                                  placeholder="Enter a total supply for your token"
                                  value={values.amount}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.amount}
                                  touched={touched.amount}
                                />

                                <Input
                                  id="burn"
                                  name="burn"
                                  type="text"
                                  label="Add a burn"
                                  placeholder="Burn"
                                  info="Enter an amount"
                                  value={values.burn}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.burn}
                                  touched={touched.burn}
                                  optional={true}
                                  required={false}
                                />
                              </div>

                              <div className="mt-8 grid md:flex gap-4">
                                <PrimaryButton
                                  disabled={!isValid || isSubmitting}
                                  type="submit"
                                  extraClass="flex-1"
                                >
                                  Review
                                </PrimaryButton>
                                <SecondaryButton
                                  type="button"
                                  extraClass={`md:min-w-[120px] ${copied && "!bg-green"}`}
                                  onClick={() => {
                                    if (
                                      mintOpt !== "custom" &&
                                      mintOpt !== "nft"
                                    ) {
                                      handleCopy(
                                        `tokencreate name:${values.name} amount:${values.amount} decimals:8`,
                                      );
                                    }

                                    if (mintOpt === "custom") {
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
                                          {},
                                        ),
                                      };

                                      handleCopy(
                                        `tokencreate name:${JSON.stringify(
                                          token,
                                        )} amount:${values.amount} decimals:8`,
                                      );
                                    }

                                    if (mintOpt === "nft") {
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
                                          {},
                                        ),
                                      };

                                      handleCopy(
                                        `tokencreate name:${JSON.stringify(
                                          token,
                                        )} amount:${values.amount} decimals:0`,
                                      );
                                    }
                                  }}
                                >
                                  {!copied && "CLI"}

                                  {copied && (
                                    <span className="flex items-center gap-2">
                                      Copied <CopyIcon size={16} />
                                    </span>
                                  )}
                                </SecondaryButton>
                              </div>
                            </>
                          )}

                          {(mintOpt === "custom" || mintOpt === "nft") && (
                            <>
                              <div className="my-4 space-y-4">
                                <ImageUploadSelect
                                  mintOpt={mintOpt}
                                  imageUploadOption={imageUploadOption}
                                  handleOptionChange={(e: "url" | "file") =>
                                    setImageUploadOption(e)
                                  }
                                  setFieldValue={setFieldValue}
                                  values={values}
                                />

                                {imageUploadOption === "file" && <AddImage />}
                                {imageUploadOption === "url" && (
                                  <Input
                                    id="url"
                                    name="url"
                                    type="text"
                                    label="Image URL"
                                    placeholder="Enter an image URL"
                                    value={values.url}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.url}
                                    touched={touched.url}
                                  />
                                )}
                              </div>

                              <div className="space-y-4">
                                <Input
                                  id="name"
                                  name="name"
                                  label="Token name"
                                  placeholder="Enter a name for your token"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.name}
                                  touched={touched.name}
                                />

                                <Input
                                  id="amount"
                                  name="amount"
                                  type="number"
                                  label="Total supply"
                                  placeholder="Enter a total supply for your token"
                                  value={values.amount}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.amount}
                                  touched={touched.amount}
                                />

                                {mintOpt === "custom" && (
                                  <Input
                                    id="ticker"
                                    name="ticker"
                                    type="text"
                                    label="Ticker"
                                    placeholder="Enter a ticker symbol for your token (e.g. BTC, ETH)"
                                    value={values.ticker}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.ticker}
                                    touched={touched.ticker}
                                  />
                                )}

                                {mintOpt === "nft" && (
                                  <Input
                                    id="owner"
                                    name="owner"
                                    type="text"
                                    label="Creator name"
                                    placeholder="Enter a creator name"
                                    value={values.owner}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.owner}
                                    touched={touched.owner}
                                  />
                                )}

                                <Input
                                  id="burn"
                                  name="burn"
                                  type="text"
                                  label="Add a burn"
                                  placeholder="Burn"
                                  info="Enter an amount"
                                  value={values.burn}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={errors.burn}
                                  touched={touched.burn}
                                  optional={true}
                                  required={false}
                                />
                              </div>

                              {(mintOpt === "custom" || mintOpt === "nft") && (
                                <div className="space-y-4 mt-4">
                                  <div className="flex flex-col gap-2">
                                    <label className="text-sm">
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
                                    {errors.description &&
                                      touched.description && (
                                        <p className="text-sm text-red">
                                          {errors.description}
                                        </p>
                                      )}
                                  </div>

                                  <Input
                                    id="webvalidation"
                                    name="webvalidation"
                                    type="text"
                                    label="Web validation URL"
                                    placeholder="Enter a web address"
                                    info="Hosting a .txt file on your webpage with
                                      the tokenid of this token after it is
                                      minted will validate its authenticity"
                                    value={values.webvalidation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.webvalidation}
                                    touched={touched.webvalidation}
                                    optional={true}
                                    required={false}
                                  />

                                  <ExtraMetadataFields values={values} />
                                </div>
                              )}

                              <div className="mt-8 grid md:flex gap-4">
                                <PrimaryButton
                                  disabled={!isValid || isSubmitting}
                                  type="submit"
                                  extraClass="flex-1"
                                >
                                  Review
                                </PrimaryButton>
                                <SecondaryButton
                                  type="button"
                                  extraClass={`md:min-w-[120px] ${copied && "!bg-green"}`}
                                  onClick={() => {
                                    if (
                                      mintOpt !== "custom" &&
                                      mintOpt !== "nft"
                                    ) {
                                      handleCopy(
                                        `tokencreate name:${values.name} amount:${values.amount} decimals:8`,
                                      );
                                    }

                                    if (mintOpt === "custom") {
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
                                          {},
                                        ),
                                      };

                                      handleCopy(
                                        `tokencreate name:${JSON.stringify(
                                          token,
                                        )} amount:${values.amount} decimals:8`,
                                      );
                                    }

                                    if (mintOpt === "nft") {
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
                                          {},
                                        ),
                                      };

                                      handleCopy(
                                        `tokencreate name:${JSON.stringify(
                                          token,
                                        )} amount:${values.amount} decimals:0`,
                                      );
                                    }
                                  }}
                                >
                                  {!copied && "CLI"}

                                  {copied && (
                                    <span className="flex items-center gap-2">
                                      Copied <CopyIcon size={16} />
                                    </span>
                                  )}
                                </SecondaryButton>
                              </div>
                            </>
                          )}
                        </>
                      </form>
                    </motion.div>
                  </AnimatePresence>
                )}
              </>
            )}
          </Formik>
        </section>
      </div>
    </>
  );
};

export default TokenStudio;
