import React from "react";
import "./Button.css";

export const Button = ({ size, type }) => {
  return <button className={`${type} ${size}`}>Add to cart</button>;
};
