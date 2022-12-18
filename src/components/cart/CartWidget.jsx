import React from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="w-1/3 flex justify-end items-center">
      <button className="bg-richB w-8 h-8 text-lg text-richW rounded-lg hover:bg-sunglow hover:text-richB hover:shadow hover:shadow-richB">
        <Link to={"/cart"}>
          <i className="uil uil-shopping-cart-alt"></i>
        </Link>
      </button>
    </div>
  );
}

export default CartWidget;