import {useState} from "react";

function useMenuProps() {
    const [isMenuOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isMenuOpen);
    }


    return {
        isMenuOpen,
        toggleMenu
    }
}


export default useMenuProps;