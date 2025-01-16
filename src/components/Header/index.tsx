import BrandSVG from "../Images/BrandSVG";
import {useContext} from "react";
import {appContext} from "../../AppContext.tsx";
import BlockCount from "./BlockCount";
import AppThemeSwitch from "../AppThemeSwitch";
import HelpLink from "../Links/HelpLink";
import HamburgerButton from "./HamburgerButton";

const Header = () => {
    const {isDarkMode, toggleMenu, isMenuOpen} = useContext(appContext);

    return <div className="w-full border-b border-grey40 dark:border-darkContrastFour">
        <div className="max-w-[1800px] mx-auto">
        <header onClick={() => {
            if (window.navigator.userAgent.includes("Minima Browser")) {
                // @ts-ignore
                Android.showTitleBar();
            }
        }}
                className="h-[76px] lg:h-[94px]  px-4 md:px-15 sticky flex justify-between items-center bg-white dark:bg-black bg-[url('/assets/main-bg.svg')] bg-cover bg-center md:bg-none">

            <div className="flex gap-4">
                <BrandSVG height={42} width={37} fill={!isDarkMode ? "black" : "white"}/>
                <h3 className="text-black dark:text-white my-auto font-bold">Token Studio</h3>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
                <div
                    className="inline-flex items-center justify-center"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu();
                    }}
                >
                    <span className="sr-only">Open menu</span>
                    <HamburgerButton
                        isOpen={isMenuOpen}
                        toggle={toggleMenu}
                    />
                </div>
            </div>

            <div className="hidden items-center gap-4 md:flex">
                <BlockCount/>

                <HelpLink/>

                <AppThemeSwitch/>
            </div>


        </header>
    </div>
    </div>
}


export default Header;