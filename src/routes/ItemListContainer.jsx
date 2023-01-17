import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Products from "../components/Products";
import SpinnerLoad from "../components/SpinnerLoad";

import { database } from "../firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const ProductsCollection = collection(database, "Products");

    getDocs(ProductsCollection)
      .then((res) => {
        const products = res.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        if (name.toLowerCase() === "all") {
          setItems(products);
        } else {
          const itemsData = products.filter((item) =>
            item.category.includes(name.toLowerCase())
          );
          setItems(itemsData);
        }
      })
      .catch((err) => console.log(err));

    /* if (name.toLowerCase() === "all") {
      getDocs(ProductsCollection)
        .then((res) => {
          const products = res.docs.map((item) => {
            return {
              ...item.data(),
              id: item.id,
            };
          });
          setItems(products);
          console.log(products);
        })
        .catch((err) => console.log(err));
    } else {
      const queryCategory = query(
        ProductsCollection,
        where("categorys", "==", name.toLowerCase())
      );
      console.log(name.toLowerCase());
      getDocs(queryCategory)
        .then((res) => {
          const products = res.docs.map((item) => {
            return {
              ...item.data(),
              id: item.id,
            };
          });
          setItems(products);
          console.log(products);
        })
        .catch((err) => console.log(err));
    } */
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [name]);

  return (
    <section className="w-11/12 h-full flex flex-col justify-center items-center bg-white">
      <div className="pt-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">CATALOGUE</h2>
        <span className="text-sm pt-1 pb-5">{name.toUpperCase()}</span>
      </div>
      {loading == true ? (
        <SpinnerLoad loading={loading} />
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
