import React, { useContext } from "react";
import { appContext } from "../../../AppContext.tsx";
import { useLocation } from "react-router-dom";

interface SVGBackgroundProps {
  children: React.ReactNode;
  type: "main" | "main_full_opacity" | "custom" | "nft" | "none";
}

const bgs = {
  main_full_opacity: "./assets/main-bg-opacity.svg",
  main: "./assets/main-bg.svg",
  custom: "./assets/custom-bg.svg",
  nft: "./assets/nft-bg.svg",
};

const AppBackground: React.FC<SVGBackgroundProps> = ({ children, type }) => {
  const { isDarkMode, isMobile } = useContext(appContext);
  const { pathname } = useLocation();

  return (
    <div
      className={`${pathname.includes("intro") ? "relative min-h-full w-full" : "relative flex flex-col min-h-screen w-full"}`}
    >
      <div
        className={`absolute inset-0 bg-no-repeat bg-center bg-cover z-0 flex-grow ${isDarkMode ? "bg-black" : "bg-white"}`}
        style={{
          backgroundImage:
            !isMobile || type !== "none" ? `url(${bgs[type]})` : "none",
        }}
      />
      <div
        className={`${pathname.includes("intro") ? "z-10 absolute inset-0 flex h-full w-full md:justify-center" : "z-10 relative flex-grow flex h-full w-full md:justify-center"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AppBackground;
