import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpinnerLoad from "../components/SpinnerLoad";

import { useContextGlobal } from "../context/GlobalContext";

import CartItem from "../components/cart/CartItem";

function Cart() {
  const { cart, clearCart, getTotalPrice } = useContextGlobal();
  const [loading, setLoading] = useState(true);
  console.log(getTotalPrice());

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function EmptyCart() {
    return (
      <article className="flex justify-center items-center w-11/12 h-96 mt-44">
        <div className="flex flex-col justify-center items-center gap-10">
          <h3 className="text-6xl">Oops! Empty cart</h3>
          <button className="bg-richB w-auto p-3 h-auto flex justify-center items-center rounded-xl hover:bg-orange shadow shadow-richB">
            <Link
              to="/69Store/catalogue/All"
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
      <div className="w-1/3 flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-bold p-8">CART</h2>
        {/* <span>Number of items: 100</span> */}
        <article className="w-11/12">
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <div className="p-10 flex flex-col justify-center items-center gap-8">
            <h3 className="text-3xl font-bold">Total: ${getTotalPrice()}</h3>
            <div className="flex items-center justify-around w-96">
              <button
                type="button"
                className="bg-richB font-sans font-bold text-xl text-richW w-40 h-10 flex justify-center items-center rounded-xl hover:bg-orange shadow shadow-richB"
              >
                <Link to="/69Store/checkout">Check-Out</Link>
              </button>
              <button
                type="button"
                onClick={() => clearCart()}
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
    <section className="w-full h-full flex flex-col justify-start items-center p-5">
      {loading == true ? (
        <SpinnerLoad loading={loading}/>
      ) : cart.length == 0 ? (
        <EmptyCart />
      ) : (
        <FullCart />
      )}
    </section>
  );
}

export default Cart;
