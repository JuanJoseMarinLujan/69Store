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

  function handleClearCart() {
    localStorage.removeItem("cart");
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
      <div className="w-1/3 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold p-8">CART</h2>
        {/* <span>Number of items: 100</span> */}
        <article className="w-11/12">
          <div>
            {cartItems.map((item) => {
              return <CartItem key={item.id} item={item} onDelete={handleClickDelete} />;
            })}
          </div>
          <div className="p-10 flex flex-col justify-center items-center gap-8">
            <h3 className="text-3xl font-bold">Total: ${total}</h3>
            <div className="flex items-center justify-around w-96">
              <button
                type="button"
                className="bg-richB font-sans font-bold text-xl text-richW w-40 h-10 flex justify-center items-center rounded-xl hover:bg-orange shadow shadow-richB"
              >
                <Link to="/checkout">Check-Out</Link>
              </button>
              <button
                type="button"
                onClick={() => handleClearCart()}
                className="bg-richB font-sans font-bold text-xl text-richW w-40 h-10 flex justify-center items-center rounded-xl hover:bg-tart shadow shadow-richB"
              >
                Clean Cart
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <section className="w-full h-full flex flex-col justify-start items-center p-5 border">
      {cant == 0 ? <EmptyCart /> : <FullCart />}
    </section>
  );
}

export default Cart;
