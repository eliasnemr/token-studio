import { createContext, useRef, useEffect, useState } from "react";

export const appContext = createContext({} as any);

interface IProps {
  children: any;
}
const AppProvider = ({ children }: IProps) => {
  const loaded = useRef(false);
  const [_currencyFormat, setCurrencyFormat] = useState<{ decimal: string; thousands: string }>({
    decimal: '.',
    thousands: '',
});

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      (window as any).MDS.init((msg: any) => {
        if (msg.event === "inited") {
          // do something Minim-y
        }
      });
    }
  }, [loaded]);

  return (
    <appContext.Provider
      value={
        {
          // add some stuff
          _currencyFormat, setCurrencyFormat
        }
      }
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
