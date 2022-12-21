import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();
export const useContextGlobal = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(element) {
    if (cart.some((e) => e.id === element.id)) {
      let newArray = cart.map((item) => {
        if (item.id === element.id && item.quantity + element.quantity < item.stock) {
          let newProduct = {
            ...item,
            quantity: item.quantity + element.quantity,
          };
          return newProduct;
        } else {
          return item;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, element]);
    }
  }

  function deleteItemCart(id) {
    let newCart = cart.filter((e) => e.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  const Data = {
    cart,
    setCart,
    addToCart,
    deleteItemCart,
    clearCart,
  };

  return (
    <GlobalContext.Provider value={Data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
