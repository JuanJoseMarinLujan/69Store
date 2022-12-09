import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import Header from "../components/Header";

import { Data as itemsData, Categorys } from "../components/data/Data";

function Catalogue() {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    if (item.name.toLowerCase() === "all") {
      setProjects(itemsData)
    } else {
      const newProjects = itemsData.filter((e) => {
        return e.categorys.includes(item.name.toLowerCase());
      });
      setProjects(newProjects);
    }
  }, [item]);

  function setFilters(e) {
    e === "T-Shirts" ? setItem({ name: "tshirts" }) : setItem({ name: `${e}` });
  }

  return (
    <section className="w-full h-screen flex flex-col justify-start items-center bg-white">
        <Header Categorys={Categorys} onSetFilter={setFilters} />
        <div className="pt-24  grid grid-cols-4 gap-4">
          {projects.map((item) => {
            return <Products key={item.id} item={item} />;
          })}
        </div>
    </section>
  );
}

export default Catalogue;
