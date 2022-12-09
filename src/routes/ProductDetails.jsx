import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Data } from "../components/data/Data";

function ProductDetails() {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const [item, setDatailItem] = useState([]);

  useEffect(() => {
    const itemData = Data.find((e) => e.id == id);
    setDatailItem(itemData);
  });

  function handleClickMinus() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  function handleClickPlus() {
    setAmount(amount + 1);
  }

  return (
    <section className="w-screen h-screen flex flex-col justify-start items-center bg-richW p-5">
      <article className="w-11/12 h-10 flex justify-end">
        <Link to="/catalogue">
          <i className="uil uil-times text-4xl"></i>
        </Link>
      </article>
      <article
        key={item.id}
        className="flex justify-center items-center h-screen w-screen bg-richW p-2 gap-10"
      >
        <img src={item.image} alt="" className="w-60 h-64" />
        <div className="flex flex-col gap-5">
          <h3 className="w-max h-1/3">{item.name}</h3>
          <h4 className="font-bold  h-1/3">$ {item.price}</h4>
          {/* <p>
          Sizes:{" "}
          {item.sizes.map((sz, index) => (
            <span key={index}> {sz}. </span>
          ))}
        </p> */}
          {/* <p>
          Categorys:{" "}
          {item.categorys.map((ct) => (
            <span> {ct} </span>
          ))}
        </p> */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <button
                onClick={handleClickMinus}
                className="bg-richB text-richW w-10 h-1/3 flex justify-center items-center rounded-xl hover:bg-orange"
              >
                <i className="uil uil-minus"></i>
              </button>
              <label htmlFor="" className="font-bold">
                {" "}
                {amount}{" "}
              </label>
              <button
                onClick={handleClickPlus}
                className="bg-richB text-richW w-10 h-1/3 flex justify-center items-center rounded-xl hover:bg-orange"
              >
                <i className="uil uil-plus"></i>
              </button>
            </div>
            <button className="bg-richB text-richW w-20 h-1/3 flex justify-center p-1 items-center rounded-xl hover:bg-silver">
              Add
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProductDetails;
