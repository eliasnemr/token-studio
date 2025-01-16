import {useEffect, useState} from "react";

const useMinimaWallet = (loaded) => {
    const [wallet, setWallet] = useState([]);


    useEffect(() => {

        if (!loaded || (loaded && !loaded.current)) {

            return;
        }


        MDS.cmd("balance", (resp) => {
            setWallet(resp.response);
        })

    }, [loaded]);


    return {
        wallet
    }
}


export default useMinimaWallet;