import {useEffect, useState} from "react";

function useIsMobileCheck() {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);


    return {
        isMobile
    }
}



export default useIsMobileCheck;