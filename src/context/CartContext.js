import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  sessionStorage.setItem("cart_item", JSON.stringify(cartItem));

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
