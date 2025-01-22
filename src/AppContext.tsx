import { createContext, useRef, useEffect, useState } from "react";
import useMenuProps from "./hooks/useMenuProps.tsx";
import useStudioOpts from "./hooks/useStudioOpts.tsx";
import useIsMobileCheck from "./hooks/useIsMobileCheck.tsx";
import useMinimaWallet from "./hooks/useMinimaWallet.tsx";

export const appContext = createContext({} as any);

interface IProps {
  children: any;
}
const AppProvider = ({ children }: IProps) => {
  const loaded = useRef(false);
  const menuProps = useMenuProps();
  const studioProps = useStudioOpts();
  const isMobileProps = useIsMobileCheck();
  const balanceProps = useMinimaWallet(loaded);
  const [blockNumber, setBlockNumber] = useState<null | number>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state based on localStorage
    return localStorage.getItem("dark-mode-tstudio") === "true";
  });
  const [_currencyFormat, setCurrencyFormat] = useState<{
    decimal: string;
    thousands: string;
  }>({
    decimal: ".",
    thousands: "",
  });
  const [_transactionSubmitting, setTransactionSubmitting] = useState(false);
  const [_transactionSuccess, setTransactionSuccess] = useState(false);
  const [_transactionPending, setTransactionPending] = useState(false);
  const [_transactionError, setTransactionError] = useState<false | string>(
    false,
  );

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      (window as any).MDS.init((msg: any) => {
        if (msg.event === "inited") {
          // do something Minim-y

          MDS.cmd("block", function (res) {
            setBlockNumber(res.response.block);
          });
        }

        if (msg.event === "NEWBLOCK") {
          setBlockNumber(msg.data.txpow.header.block);
        }
      });
    }
  }, [loaded]);

  useEffect(() => {
    // Apply or remove the 'dark' class on the document element
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode-tstudio", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode-tstudio", "false");
    }
  }, [isDarkMode]); // Re-run effect when isDarkMode changes

  return (
    <appContext.Provider
      value={{
        // add some stuff
        _currencyFormat,
        setCurrencyFormat,
        // This is a global txn status modal..
        _transactionSubmitting,
        setTransactionSubmitting,
        _transactionSuccess,
        setTransactionSuccess,
        _transactionError,
        setTransactionError,
        _transactionPending,
        setTransactionPending,

        ...menuProps,
        ...studioProps,
        ...isMobileProps,
        ...balanceProps,

        isDarkMode,
        setIsDarkMode,

        blockNumber,
        setBlockNumber,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
