import "./App.css";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import MobileMenu from "./components/MobileMenu";
import AppBackground from "./components/Images/AppBackground";
import {useContext} from "react";
import {appContext} from "./AppContext.tsx";

function App() {
  const { mintOpt } = useContext(appContext);

    return (
    <AppLayout>

        <Header />

        <MobileMenu />

        <main className="flex-1 flex">
            <AppBackground type={mintOpt === "default" ? "main" : mintOpt === "custom" ? "custom" : "nft"}>
                <Outlet />
            </AppBackground>
        </main>

    </AppLayout>
  );
}

export default App;
