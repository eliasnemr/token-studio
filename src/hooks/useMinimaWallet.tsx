import { useEffect, useRef, useState } from "react";

const useMinimaWallet = (loaded) => {
  const [wallet, setWallet] = useState([]);

  const balanceInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!loaded || (loaded && !loaded.current)) {
      return;
    }

    getBalance();
  }, [loaded]);

  const getBalance = () => {
    MDS.cmd("balance", (resp) => {
      setWallet(resp.response);

      const needsUpdate = resp.response.some((t) => t.unconfirmed !== "0");

      if (needsUpdate) {
        setWallet(resp.response);

        if (!balanceInterval.current) {
          balanceInterval.current = setInterval(getBalance, 10000);
        }
      } else {
        if (balanceInterval.current) {
          clearInterval(balanceInterval.current);
          balanceInterval.current = null;
        }
      }

      setWallet(resp.response);
    });
  };

  return {
    wallet,
    getBalance,
  };
};

export default useMinimaWallet;
