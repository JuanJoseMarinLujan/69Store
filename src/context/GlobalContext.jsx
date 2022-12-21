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
        if (item.id === element.id) {
          let newProduct = {
            ...item,
            quantity: element.quantity,
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

  function getQuantity(id) {
    const item = cart.find((e) => e.id === id);
    return item?.quantity;
  }

  function getQuantityTotal() {
    const item = cart.reduce((acum, item) => {
      return acum + item.quantity;
    }, 0);
    return item;
  }

  function deleteItemCart(id) {
    let newCart = cart.filter((e) => e.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalPrice() {
    const total = cart.reduce((acum, element) => {
      return acum + element.price * element.quantity;
    }, 0);
    return total;
  }

  const Data = {
    cart,
    setCart,
    addToCart,
    deleteItemCart,
    clearCart,
    getQuantity,
    getTotalPrice,
    getQuantityTotal,
  };

  return (
    <GlobalContext.Provider value={Data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
