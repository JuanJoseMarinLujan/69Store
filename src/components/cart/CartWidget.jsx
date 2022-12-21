import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../../context/GlobalContext";

function CartWidget() {
  const { cart } = useContextGlobal();
  return (
    <div className="w-1/3 flex justify-end items-center gap-1">
      {cart.length > 0 ? <span>{cart.length}</span> : <span></span>}
      <button className="bg-richB w-8 h-8 text-lg text-richW rounded-lg hover:bg-sunglow hover:text-richB hover:shadow hover:shadow-richB">
        <Link to={"/69Store/cart"}>
          <i className="uil uil-shopping-cart-alt"></i>
        </Link>
      </button>
    </div>
  );
}

export default CartWidget;
