import React from "react";
import { useContextGlobal } from "../../context/GlobalContext";

const CartItem = ({ item }) => {
  const { deleteItemCart } = useContextGlobal();
  return (
    <div key={item.id} className="flex justify-center items-center gap-10 p-5">
      <img src={item.image} alt="" className="w-40 h-44 rounded-lg" />
      <div className="h-40 w-1/3 flex flex-col justify-around items-start">
        <h3 className="font-sans text-lg">{item.name}</h3>
        <div>
          <p className="font-sans">Size: {item.size}</p>
          <p className="font-sans">Quantity: {item.quantity}</p>
          <p className="font-sans">Unit price: ${item.price}</p>
          <p className="font-sans">Subtotal: ${item.quantity * item.price}</p>
        </div>
      </div>
      <button
        onClick={() => deleteItemCart(item.id)}
        className="bg-tart h-10 w-10 rounded-lg text-3xl text-richW hover:bg-gate"
      >
        <i className="uil uil-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartItem;