import { createContext, useState } from "react";
import ShoppingCart from "../component/ShoppingCart";

export const TitleContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [isOpen , setisOpen] = useState(false)
  const [cartItems, setCartItems] = useState([]);

  const opencart = () => {
    setisOpen(true)
  }
  const closecart = () => {
    setisOpen(false)
  }

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }

  function removeItemFromCart(id) {
    setCartItems(currItems => currItems.filter(item => item.id !== id));
  }

  return (
    <TitleContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        closecart,
        opencart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </TitleContext.Provider>
  );
}
