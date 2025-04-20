import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
