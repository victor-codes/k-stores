import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartIcon = ({ fill }) => {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="cart_container">
      <div className="number_of_item_container">
        <p className="number_of_item">{cartItem.length}</p>
      </div>
      <svg
        width={24}
        className="w-6 h-6"
        fill="none"
        stroke={fill}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    </div>
  );
};
