import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppProvider from "./AppContext.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import GettingStarted from "./pages/GettingStarted";
import Help from "./pages/Help";

const router = createHashRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/intro",
        element: <GettingStarted />
    },
    {
        path: "/help",
        element: <Help />
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    </React.StrictMode>
);

