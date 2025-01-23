import { useLocation } from "react-router-dom";

export default function Subheader() {
  const { pathname } = useLocation();

  const getTitle = () => {
    if (pathname.includes("help")) {
      return "Token Studio Help";
    }
  };

  const title = getTitle();

  if (title !== "Token Studio Help") {
    return null;
  }

  return (
    <div className="w-full bg-grey20 dark:bg-darkContrast px-4 md:px-15">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-center font-bold text-2xl py-8 md:text-4xl">
          <h1 className="text-2xl md:text-4xl sm:text-footer-title font-semibold px-4 md:px-15 text-black dark:text-white w-full">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
