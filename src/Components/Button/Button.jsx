import React from "react";
import "./Button.css";

export const Button = ({ size, type, value, children }) => {
  return (
    <span className={`${type} ${size}`}>
      {children}
      {value}
    </span>
  );
};
