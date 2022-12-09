import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart({ addCart, addCant }) {
  const [cant, setCant] = useState(0);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setData(addCart);
    setCant(addCant);
  }, [cant]);

  function EmptyCart() {
    return (
      <article className="flex justify-center items-center w-11/12 h-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <h3 className="text-4xl">Oops! Empty cart</h3>
          <button className="bg-richB w-auto p-2 h-auto flex justify-center items-center rounded-xl hover:bg-orange">
            <Link to="/catalogue" className="font-sans font-bold text-lg text-richW "
            >¡Continue watching!</Link>
          </button>
        </div>
      </article>
    );
  }

  function FullCart() {
    return (
      <article className="w-11/12">
        <div>
          <h2>Cart</h2>
          {/* <span>Number of items: 100</span> */}
        </div>
        <div>
          {data.map((item) => {
            return (
              <div>
                <img src={item.image} alt="" className="w-60 h-64" />
                <div>
                  <h3>{item.name}</h3>
                  <div>
                    <p>Size: {item.size}</p>
                    <p>
                      Categorys:{" "}
                      {item.categorys.map((e) => (
                        <span> {e} </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <p>Quantity: {item.quantity}</p>
                    <p>Unit price: $ {item.price}</p>
                    <p>Subtotal: $ {item.quantity * item.price}</p>
                  </div>
                  <button>
                    <i className="uil uil-trash-alt"></i>
                  </button>
                </div>
              </div>
            );
          })}
          <span>Total: $ {total}</span>
        </div>
        <div>
          <button>Check-Out</button>
          <button>Clean Cart</button>
        </div>
      </article>
    );
  }

  return (
    <section className="w-screen h-screen flex flex-col justify-start items-center bg-richW p-5">
      <article className="w-11/12 h-10 flex justify-end">
        <Link to="/catalogue">
          <i className="uil uil-times text-4xl"></i>
        </Link>
      </article>
      {cant == 0 ? <EmptyCart /> : <FullCart />}
    </section>
  );
}

export default Cart;
