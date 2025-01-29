import { makeTokenImage } from "../../utils/functions";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  url: string;
  mimeType: string;
}

const PreviewToken = ({ url, mimeType }: Props) => {
  const isArtImage = url.includes("artimage");
  const isDataImage = url.includes("data:image");
  const isOnChainImage = mimeType.length !== 0;
  const imageSize = !isDataImage && !isArtImage ? "w-48 h-48" : "w-12 h-12";

  // Create the full data URL only if it's not already one
  const imageUrl = isArtImage
    ? makeTokenImage(url)
    : isOnChainImage && !isDataImage
      ? `data:image/${mimeType};base64,${url}`
      : url;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`${imageSize} aspect-square overflow-hidden mx-auto border border-grey20 dark:border-darkContrastFour`}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <motion.img
          src={imageUrl}
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
