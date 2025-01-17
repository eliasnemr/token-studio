import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppProvider from "./AppContext.tsx";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import GettingStarted from "./pages/GettingStarted";
import Help from "./pages/Help";
import TokenStudio from "./components/TokenStudio";
import RootRedirect from "./components/RootDirect";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <RootRedirect />,
      },
      {
        path: "studio",
        element: <TokenStudio />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "*",
        element: <Navigate to="/studio" replace />,
      },
    ],
  },
  {
    path: "/intro",
    element: <GettingStarted />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
