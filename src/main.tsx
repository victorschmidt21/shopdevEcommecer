import { createRoot } from "react-dom/client";
import { routerApp } from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={routerApp} /> 
);
