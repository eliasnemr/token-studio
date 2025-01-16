import { useContext } from "react";
import { appContext } from "../../AppContext";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

import Loading from "../Lottie/Loading.json";

const TransactionStatus = () => {
  const {
    _transactionError,
    _transactionSubmitting,
    _transactionSuccess,
    _transactionPending,
    setTransactionSubmitting,
    setTransactionError,
    setTransactionSuccess,
    toggleReview,
  } = useContext(appContext);

  if (!_transactionSubmitting) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#000000] bg-opacity-80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center"
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-[#17191c] w-full sm:rounded-lg rounded-t-[32px] shadow-xl sm:max-w-md sm:mx-4 overflow-hidden"
        >
          <div className="flex flex-col items-center w-full">
            {/* Loading State */}
            {!_transactionPending &&
              !_transactionSuccess &&
              !_transactionError && (
                <div className="flex flex-col items-center w-full pt-16 pb-6">
                  <Lottie
                    className="w-[240px] h-[160px]"
                    animationData={Loading}
                    loop={true}
                  />
                  <h3 className="text-[#f9f9fa] text-[18px] md:text-[28px] font-medium text-center">
                    Creating token...
                  </h3>
                </div>
              )}

            {/* Success State */}
            {_transactionSuccess && (
              <div className="flex flex-col items-center w-full pt-16 pb-6">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <img
                    alt="success"
                    src="/assets/check_circle.png"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-[#f9f9fa] text-[18px] md:text-[28px] font-medium text-center">
                  Your token has been created
                </h3>
              </div>
            )}

            {/* Pending State */}
            {_transactionPending && (
              <div className="flex flex-col items-center w-full pt-16 pb-6 px-6">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <img
                    alt="pending"
                    src="/assets/pending.png"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-[#f9f9fa] text-[18px] md:text-[28px] font-medium text-center">
                  Token creation pending...
                </h3>
                <p className="text-[#d9d9d9] text-center mt-4">
                  Please open your 'Pending' minidapp and confirm your token
                  creation.
                </p>
              </div>
            )}

            {/* Error State */}
            {_transactionError && (
              <div className="flex flex-col items-center w-full pt-16 pb-6 px-6">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <img
                    alt="error"
                    src="/assets/error.png"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-[#f9f9fa] text-[18px] md:text-[28px] font-medium text-center">
                  Your token creation has failed
                </h3>
                <p className="text-[#d9d9d9] text-center mt-4 max-w-[280px]">
                  {_transactionError.includes("No Coins of")
                    ? "Insufficient funds"
                    : _transactionError}
                </p>
              </div>
            )}

            {/* Action Button */}
            <div className="px-4 w-full pb-20 md:pb-6">
              {(_transactionError ||
                _transactionPending ||
                _transactionSuccess) && (
                <button
                  onClick={() => {
                    setTransactionSubmitting(false);
                    if (_transactionError) setTransactionError(false);

                    setTransactionSuccess(false);
                    toggleReview();
                  }}
                  className="w-full py-3 bg-mediumDarkContrast hover:bg-lightDarkContrast text-[#f9f9fa] transition-colors text-base font-medium rounded-none"
                >
                  {_transactionError ? "Back" : "Close"}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransactionStatus;
