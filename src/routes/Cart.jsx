import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CartItem from "../components/cart/CartItem";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [cant, setCant] = useState(0);

  function getLocalStorage() {
    const localStrg = JSON.parse(localStorage.getItem("cart"));
    if (localStrg) {
      setCartItems(localStrg);
      setCant(localStrg.length);
      setDataTotal();
    } else {
      setCant(0);
    }
  }

  function setDataTotal() {
    cartItems.map((item) => {
      setTotal(total + item.quantity * item.price);
    });
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  function handleClickDelete(id) {
    let newCart = cartItems.filter((e) => e.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    getLocalStorage();
  }

  function EmptyCart() {
    return (
      <article className="flex justify-center items-center w-11/12 h-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-4xl">Oops! Empty cart</h3>
          <button className="bg-richB w-auto p-2 h-auto flex justify-center items-center rounded-xl hover:bg-orange">
            <Link
              to="/catalogue/All"
              className="font-sans font-bold text-lg text-richW "
            >
              ¡Continue watching!
            </Link>
          </button>
        </div>
      </article>
    );
  }

  function FullCart() {
    return (
      <div>
        <h2>Cart</h2>
        {/* <span>Number of items: 100</span> */}
        <article className="w-11/12">
          <div>
            <div>{cartItems.map((item) => {return <CartItem item={item} onDelete={handleClickDelete} />})}</div>
            <span>Total: $ {total}</span>
          </div>
          <div>
            <button>Check-Out</button>
            <button>Clean Cart</button>
          </div>
        </article>
      </div>
    );
  }

  return (
    <section className="w-full h-full flex flex-col justify-start items-center bg-richW p-5">
      {/* <article className="w-11/12 h-10 flex justify-end">
        <Link to="/catalogue">
          <i className="uil uil-times text-4xl"></i>
        </Link>
      </article> */}
      {cant == 0 ? <EmptyCart /> : <FullCart />}
    </section>
  );
}

export default Cart;
