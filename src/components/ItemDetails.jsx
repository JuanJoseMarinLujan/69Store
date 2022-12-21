import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../context/GlobalContext";

import Counter from "./Counter";

const ItemDetails = ({ Item }) => {
  const { addToCart, getQuantity } = useContextGlobal();

  function onAdd(quantity) {
      addToCart({
        ...Item,
        quantity: quantity,
      });
  }

  const quantity = getQuantity(Item.id);

  return (
    <>
      <article
        key={Item.id}
        className="w-5/12 h-4/6 flex justify-center items-center gap-16 m-52"
      >
        <div className="w-3/5 h-5/6 flex justify-center items-center bg-silver rounded-lg shadow">
          <img src={Item.image} alt="" className="w-80 h-96 shadow" />
        </div>
        <div className="flex flex-col justify-center items-start h-40 gap-8">
          <h3 className="w-max h-1/3 text-2xl">{Item.name}</h3>
          <h4 className="font-bold text-2xl h-1/3">
            $ {Item.price}
          </h4>

          <Counter onAdd={onAdd} stock={Item.stock} initial={quantity}/>

          <div className="flex gap-5 mt-5">
            <button className="bg-sunglow text-richW w-32 h-1/2 flex justify-center p-4 items-center rounded-xl hover:bg-richB shadow hover:shadow-richB">
              <Link to="/69Store/catalogue/All">Keep buying</Link>
            </button>
            <button className="bg-richB text-richW w-20 h-1/2 flex justify-center p-4 items-center rounded-xl hover:bg-orange hover:shadow hover:shadow-richB">
              <Link to="/69Store/cart">To cart</Link>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ItemDetails;
