import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { Routes } from "./Routes/routes.jsx";
import ContextProvider from "./AuthContext/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);
