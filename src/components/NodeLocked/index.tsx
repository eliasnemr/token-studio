import { useContext, useEffect, useState } from "react";
import { appContext } from "../../AppContext.tsx";
import { AnimatePresence, motion } from "framer-motion";

const NodeLocked = ({ children, onClose }) => {
  const [nodeLocked, setNodeLocked] = useState(false);
  const { loaded } = useContext(appContext);

  useEffect(() => {
    if (!loaded || (loaded && !loaded.current)) return;

    MDS.cmd("vault", (res) => {
      if (res.response.locked) {
        setNodeLocked(true);
      }
    });
  }, [loaded]);

  if (nodeLocked) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#000000] bg-opacity-80 backdrop-blur-sm md:backdrop-blur-none z-50 flex items-end sm:items-center justify-center"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#17191c] w-full sm:rounded-lg rounded-t-[32px] shadow-xl sm:max-w-md sm:mx-4 overflow-hidden"
          >
            <div className="flex flex-col items-center w-full space-y-10">
              <div className="flex flex-col items-center w-full pt-10 space-y-6">
                <h3 className="text-[#f9f9fa] text-[18px] md:text-[28px] font-medium text-center">
                  Your node is locked
                </h3>
                <p className="text-center text-[#f9f9fa]">
                  Please unlock your node to access this page.
                </p>
              </div>

              {/* Action Button */}
              <div className="px-4 md:px-10 w-full pb-10">
                <button
                  onClick={() => {
                    // do smt
                    onClose();
                  }}
                  className="w-full py-3 bg-mediumDarkContrast hover:bg-lightDarkContrast text-[#f9f9fa] transition-colors text-base font-medium rounded-none focus:outline-none outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return <>{children}</>;
};

export default NodeLocked;
