import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartContextProvider from "./context/CartContext";

import App from "./App";
import Home from "./routes/Home";
import ItemListContainer from "./routes/ItemListContainer";
import ProductDetails from "./routes/ProductDetails";
import Cart from "./routes/Cart";
import CheckOut from "./routes/CheckOut";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/69Store/" element={<App />}>
            <Route path="/69Store/home" element={<Home />} />
            <Route
              path="/69Store/catalogue/:name"
              element={<ItemListContainer />}
            />
            <Route path="/69Store/product/:id" element={<ProductDetails />} />
            <Route path="/69Store/cart" element={<Cart />} />
            <Route path="/69Store/checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
