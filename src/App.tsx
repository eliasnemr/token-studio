import "./App.css";
import AppThemeSwitch from "./components/AppThemeSwitch";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import MobileMenu from "./components/MobileMenu";

function App() {
  return (
    <AppLayout>

        <Header />

        <MobileMenu />

        <main className="flex-1 flex">
            <Outlet />
        </main>


      <footer className="flex items-end justify-center py-4">
        <AppThemeSwitch />
      </footer>
    </AppLayout>
  );
}

export default App;
