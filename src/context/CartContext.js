import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState(
    [localStorage.getItem("cart_item")] || []
  );
  if (!localStorage.getItem("cart_item"))
    localStorage.setItem("cart_item", JSON.stringify(cartItem));

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
