import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./features/App.tsx";
import HomePage from "./features/home/Home.page.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HomePage />
    </StrictMode>,
);
