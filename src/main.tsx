import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppProvider from "./AppContext.tsx";
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createHashRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<App />}
  ></Route>
));


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
