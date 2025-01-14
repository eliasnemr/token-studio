import {useContext} from "react";
import {appContext} from "../../AppContext.tsx";
import BlockCount from "../Header/BlockCount";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
    const { isMenuOpen, toggleMenu } = useContext(appContext);

    return <div
        className={`fixed md:hidden border-t border-darkContrastFour inset-0 top-[74px] bg-black z-[9999] overflow-y-auto py-10 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
    >
        <div className="mx-6 md:mx-10 mb-8 border-b border-darkContrastFour pb-6">
            <BlockCount />
        </div>
        <nav className="flex flex-col space-y-6 items-start px-6">
            <NavLink
                onClick={toggleMenu}
                to="/help"
                className={({isActive}) =>
                    `text-2xl font-medium ${
                        isActive
                            ? "text-lightOrange"
                            : "text-white dark:hover:text-grey20"
                    }`
                }
            >
                Help
            </NavLink>
            <NavLink
                onClick={toggleMenu}
                to="/globalexchange"
                className={({isActive}) =>
                    `text-2xl font-medium whitespace-nowrap ${
                        isActive
                            ? "text-lightOrange"
                            : "text-white dark:hover:text-grey20"
                    }`
                }
            >
                Light mode
            </NavLink>

        </nav>
    </div>
}

export default MobileMenu;