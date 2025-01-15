import {useState} from "react";


type MintOpts = 'default' | 'custom' | 'nft';
function useStudioOpts() {
    const [mintOpt, setMintOpts] = useState<MintOpts>('default');

    return {
        mintOpt,
        setMintOpts
    }
}

export default useStudioOpts;