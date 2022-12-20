import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Products from "../components/Products";

import { Data } from "../data/Data";

function ItemListContainer() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (name.toLowerCase() === "all") {
      setItems(Data);
      setTimeout(() =>{
        setLoading(false);
      }, 1000);
      
    } else {
      const itemsData = Data.filter((item) =>
        item.categorys.includes(name.toLowerCase())
      );
      setItems(itemsData);
      setTimeout(() =>{
        setLoading(false);
      }, 1000);
    }
  }, [name]);

  return (
    <section className="w-11/12 h-full flex flex-col justify-start items-center bg-white">
      <div className="pt-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">CATALOGUE</h2>
        <span className="text-sm pt-1 pb-5">{name.toUpperCase()}</span>
      </div>
      {loading == true ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-5 gap-2 pb-10">
          {items.map((item) => {
            return <Products key={item.id} item={item} />;
          })}
        </div>
      )}
    </section>
  );
}

export default ItemListContainer;
