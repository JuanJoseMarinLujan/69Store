import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartWidget() {
  const [quantityItems, setQuantityItems] = useState(0);
  useEffect(() => {
    getLocalStorage();
  }, [])

  function getLocalStorage() {
    let localStrg = JSON.parse(localStorage.getItem("cart"));
    if (localStrg != null) {
      localStrg.map((item) => {
        setQuantityItems(quantityItems + item.quantity);
        console.log(item.quantity);
      })
    }
  }
  return (
    <div className="w-1/3 flex justify-end items-center gap-1">
      {quantityItems > 0 ? <span>{quantityItems}</span> : <span></span>}
      <button className="bg-richB w-8 h-8 text-lg text-richW rounded-lg hover:bg-sunglow hover:text-richB hover:shadow hover:shadow-richB">
        <Link to={"/69Store/cart"}>
          <i className="uil uil-shopping-cart-alt"></i>
        </Link>
      </button>
    </div>
  );
}

export default CartWidget;
