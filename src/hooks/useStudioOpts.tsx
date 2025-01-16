import {useState} from "react";


type MintOpts = 'default' | 'custom' | 'nft';
function useStudioOpts() {
    const [mintOpt, setMintOpts] = useState<MintOpts>('default');
    const [reviewing, setReviewing] = useState(false);

    const toggleReview = () => {
        setReviewing(!reviewing);
    }

    return {
        mintOpt,
        setMintOpts,
        reviewing,
        toggleReview
    }
}

export default useStudioOpts;