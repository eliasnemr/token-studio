import { makeTokenImage } from "../../utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  url: string;
}

const PreviewToken = ({ url }: Props) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [url]);

  const isArtImage = url.includes("artimage");
  const isDataImage = url.includes("data:image");
  const imageSize = !isDataImage && !isArtImage ? "w-48 h-48" : "w-12 h-12";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`${imageSize} aspect-square overflow-hidden mx-auto border border-darkContrastFour`}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <motion.img
          src={isArtImage ? makeTokenImage(url) : url}
          alt="preview"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PreviewToken;
