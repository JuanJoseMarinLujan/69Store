import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetails from "../components/ItemDetails";
import SpinnerLoad from "../components/SpinnerLoad";

/* import { Data } from "../data/Data"; */

import { database } from "../firebase/firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";

function ProductDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setDataiItem] = useState([]);

  useEffect(() => {
    /* const itemData = Data.find((e) => e.id == id);
    setDataiItem(itemData); */

    const ProductsCollection = collection(database, "Products");

    const ref = doc(ProductsCollection, id)

    getDoc(ref)
      .then((res) => {
        setDataiItem({
          id: res.id,
          ...res.data(),
        })
      })

    setTimeout(() =>{
      setLoading(false);
    }, 1000)
  }, [id]);

  return (
    <section className="w-full h-full flex justify-center items-center">
      {loading ? <SpinnerLoad loading={loading}/> : <ItemDetails Item={item} />}
    </section>
  );
}

export default ProductDetails;
