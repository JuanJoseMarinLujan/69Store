import React from "react";
import { useCartContextGlobal } from "../../context/CartContext";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {
  const { deleteItemCart } = useCartContextGlobal();

  function handleClick(e) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deleteItemCart(e);
      }
    });
  }

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
        onClick={() => handleClick(item.id)}
        className="bg-tart h-10 w-10 rounded-lg text-3xl text-richW hover:bg-gate"
      >
        <i className="uil uil-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartItem;
