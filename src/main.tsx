import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import HomePage from "./features/home/Home.page.tsx";
import MenuPage from "./features/menu/Menu.page.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
