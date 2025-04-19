import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./Pages/Cart.jsx";
import Login from "./Pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
