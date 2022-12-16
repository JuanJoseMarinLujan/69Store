import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Data } from "../data/Data";

function ProductDetails() {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const [item, setDataiItem] = useState([]);

  useEffect(() => {
    const itemData = Data.find((e) => e.id == id);
    setDataiItem(itemData);
  });

  function handleClickMinus() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  function handleClickPlus() {
    setAmount(amount + 1);
  }

  function handleClickFav() {
    const addItemCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      categorys: item.categorys,
      quiantity: amount,
    };

    if (localStorage.getItem("cart")) {
      let localStrg = JSON.parse(localStorage.getItem("cart"));
      if (localStrg.find((e) => e.id === item.id)) {
        return;
      } else {
        localStrg.push(addItemCart);
        localStorage.setItem("cart", JSON.stringify(localStrg));
      }
      console.log(localStrg);
    } else {
      localStorage.setItem("cart", JSON.stringify([addItemCart]));
    }
  }

  return (
    <section className="w-full h-full flex justify-center items-center">
      <article
        key={item.id}
        className="flex justify-center items-center gap-16"
      >
        <div className="w-80 h-96 flex justify-center items-center bg-silver">
          <img src={item.image} alt="" className="w-64 h-72" />
        </div>
        <div className="flex flex-col h-40 gap-8">
          <h3 className="w-max h-1/3">{item.name}</h3>
          <h4 className="font-bold text-xl h-1/3">$ {item.price * amount}</h4>
          {/* <p>
            Sizes:{" "}
            {item.sizes.map((sz, index) => (
              <span key={index}> {sz}. </span>
            ))}
          </p> */}
          {/* <p>
            Categorys:{" "}
            {item.categorys.map((ct) => (
              <span key={ct.index}> {ct} </span>
            ))}
          </p> */}
          <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-5">
              <div className="flex gap-5 h-1/2">
                <button
                  onClick={handleClickMinus}
                  className="bg-richB text-richW w-10 h-6 flex justify-center items-center rounded-xl hover:bg-orange"
                >
                  <i className="uil uil-minus"></i>
                </button>
                <label htmlFor="" className="font-bold">
                  {" "}
                  {amount}{" "}
                </label>
                <button
                  onClick={handleClickPlus}
                  className="bg-richB text-richW w-10 h-6 flex justify-center items-center rounded-xl hover:bg-orange"
                >
                  <i className="uil uil-plus"></i>
                </button>
              </div>
              <button
                type="submit"
                className="bg-richB text-richW w-20 h-1/2 flex justify-center p-1 items-center rounded-xl hover:bg-silver"
                onClick={handleClickFav}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProductDetails;
