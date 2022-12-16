import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/catalogue/:name" element={<ItemListContainer />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
