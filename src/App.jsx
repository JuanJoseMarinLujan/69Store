import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./routes/Home";
import Catalogue from "./routes/Catalogue";
import ProductDetails from "./routes/ProductDetails";
import Cart from "./routes/Cart";
import CheckOut from "./routes/CheckOut";

import Img1 from "./assets/Caps/Collection Caps MLB/1.jpg";

import "./App.css";

function App() {
  const [cant, setCant] = useState(1);
  const [addCart, setAddCart] = useState([
    {
      id: 1,
      name: "MLB '47 HITCH - 75th Anniversary Collection",
      price: 999.0,
      size: "K",
      categorys: ["caps", "collections"],
      image: Img1,
      quantity: 2
    },
    {
      id: 1,
      name: "MLB '47 HITCH - 75th Anniversary Collection",
      price: 999.0,
      size: "K",
      categorys: ["caps", "collections"],
      image: Img1,
      quantity: 5
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/catalogue" element={<Catalogue />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart addCart={addCart} addCant={cant} />} />
        <Route exact path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
