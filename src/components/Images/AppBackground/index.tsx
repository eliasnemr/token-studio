import React, {useContext} from 'react';
import {appContext} from "../../../AppContext.tsx";

interface SVGBackgroundProps {
    children: React.ReactNode;
    type: 'main' | 'main_full_opacity' | 'custom' | 'nft'
}

const bgs = {
    main_full_opacity: "/assets/main-bg-opacity.svg",
    main: "/assets/main-bg.svg",
    custom: "/assets/custom-bg.svg",
    nft: "/assets/nft-bg.svg"
};

const AppBackground: React.FC<SVGBackgroundProps> = ({ children, type }) => {
    const { isDarkMode, isMobile } = useContext(appContext);

    return (
        <div className="relative min-h-full w-full">
            <div
                className={`absolute inset-0 bg-no-repeat bg-center bg-cover z-0 ${isDarkMode ? "bg-black" : "bg-white"}`}
                style={{
                    backgroundImage: !isMobile ? `url(${bgs[type]})` : "none"
                }}
            />
            <div className="z-10 absolute inset-0 flex h-full w-full md:justify-center">
                {children}
            </div>
        </div>
    );
};

export default AppBackground;

