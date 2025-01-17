import "./App.css";
import Header from "./components/Header";

import { Outlet, useLocation } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import MobileMenu from "./components/MobileMenu";
import AppBackground from "./components/Images/AppBackground";
import { useContext } from "react";
import { appContext } from "./AppContext.tsx";
import TransactionStatus from "./components/TransactionStatus";

function App() {
  const { mintOpt } = useContext(appContext);
  const { pathname } = useLocation();

  return (
    <AppLayout>
      <Header />

      <MobileMenu />

      <main className="flex-1 flex">
        <AppBackground
          type={
            !pathname.includes("help") && mintOpt === "default"
              ? "main"
              : !pathname.includes("help") && mintOpt === "custom"
                ? "custom"
                : !pathname.includes("help") && mintOpt === "nft"
                  ? "nft"
                  : "none"
          }
        >
          <Outlet />
        </AppBackground>

        <TransactionStatus />
      </main>
    </AppLayout>
  );
}

export default App;
