import React from "react";

const CartItem = ({ item, onDelete }) => {
  return (
    <div key={item.id}>
      <img src={item.image} alt="" className="w-60 h-64" />
      <div>
        <h3>{item.name}</h3>
        <div>
          {/* <p>Size: {item.size}</p> */}
          {/* <p>
            Categorys:{" "}
            {item.categorys.map((e) => (
              <span> {e} </span>
            ))}
          </p> */}
        </div>
        <div>
          <p>Quantity: {item.quantity}</p>
          <p>Unit price: $ {item.price}</p>
          <p>Subtotal: $ {item.quantity * item.price}</p>
        </div>
        <button onClick={() => onDelete(item.id)}>
          <i className="uil uil-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
