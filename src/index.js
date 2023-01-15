import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./Store/CartProvider";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Store/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
