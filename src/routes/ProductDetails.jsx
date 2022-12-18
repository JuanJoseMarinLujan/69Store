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
        className="w-5/12 h-4/6 flex justify-center items-center gap-16"
      >
        <div className="w-3/5 h-5/6 flex justify-center items-center bg-silver rounded-lg shadow">
          <img src={item.image} alt="" className="w-80 h-96 shadow" />
        </div>
        <div className="flex flex-col h-40 gap-8">
          <h3 className="w-max h-1/3 text-2xl">{item.name}</h3>
          <h4 className="font-bold text-2xl h-1/3">$ {item.price * amount}</h4>
          <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-5">
              <div className="flex justify-start items-center gap-5 h-1/2">
                <button
                  type="button"
                  onClick={handleClickMinus}
                  className="bg-richB text-richW w-10 h-6 flex justify-center items-center rounded-xl hover:bg-orange hover:shadow hover:shadow-richB"
                >
                  <i className="uil uil-minus"></i>
                </button>
                <label htmlFor="" className="font-bold text-xl">
                  {amount}
                </label>
                <button
                  type="button"
                  onClick={handleClickPlus}
                  className="bg-richB text-richW w-10 h-6 flex justify-center items-center rounded-xl hover:bg-orange hover:shadow hover:shadow-richB"
                >
                  <i className="uil uil-plus"></i>
                </button>
              </div>
              <button
                type="submit"
                className="bg-richB text-silver hover:text-richB w-20 h-1/2 flex justify-center p-1 items-center rounded-xl hover:bg-sunglow hover:shadow hover:shadow-richB"
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
