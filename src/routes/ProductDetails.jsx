import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ItemDetails from "../components/ItemDetails";

import { Data } from "../data/Data";

function ProductDetails() {
  const { id } = useParams();
  const [item, setDataiItem] = useState([]);

  useEffect(() => {
    const itemData = Data.find((e) => e.id == id);
    setDataiItem(itemData);
  });

  /* function handleClickFav() {
    const addItemCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      categorys: item.categorys,
      quantity: amount,
    };

    if (localStorage.getItem("cart")) {
      let localStrg = JSON.parse(localStorage.getItem("cart"));
      if (localStrg.find((e) => e.id === item.id)) {
        return;
      } else {
        localStrg.push(addItemCart);
        localStorage.setItem("cart", JSON.stringify(localStrg));
      }
      console.log(localStrg);
    } else {
      localStorage.setItem("cart", JSON.stringify([addItemCart]));
    }
  } */

  return (
    <section className="w-full h-full flex justify-center items-center">
      <ItemDetails Item={item} />
    </section>
  );
}

export default ProductDetails;