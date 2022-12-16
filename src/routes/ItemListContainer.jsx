import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Products from "../components/Products";

import { Data } from "../data/Data";

function Catalogue() {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (name.toLocaleLowerCase() === "all") {
      setItems(Data);
    } else {
      const itemsData = Data.filter((item) => item.categorys.includes(name.toLocaleLowerCase()));
      setItems(itemsData);
    }
  }, [name]);

  return (
    <section className="w-full h-full flex flex-col justify-start items-center bg-white">
      <div className="grid grid-cols-4 gap-6 p-5">
        {items.map((item) => {
          return <Products key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Catalogue;
