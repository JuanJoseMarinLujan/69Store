import React from "react";
import { Link } from "react-router-dom";

function Products({ item }) {
  return (
    <article
      key={item.id}
      className="flex flex-col justify-around items-center h-96 w-80 bg-silver p-2 rounded-sm"
    >
      <img src={item.image} alt="" className="w-60 h-64" />
      <div className="w-11/12 h-24 flex flex-col justify-center items-center">
        <h3 className="w-max h-1/3 p-2">{item.name}</h3>
        <h4 className="font-bold h-1/3">$ {item.price}</h4>
        <div className="p-2">
          <Link
            to={`/product/${item.id}`}
            className="bg-richB text-richW w-20 flex justify-start pl-3 items-center rounded-xl hover:bg-orange hover:shadow hover:shadow-richB"
          >
            See<i className="uil uil-arrow-right pl-1"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Products;
