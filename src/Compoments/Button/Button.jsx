import React from "react";
import "./Button.css";

export const Button = ({ size, type, value }) => {
  return <span className={`${type} ${size}`}>{value}</span>;
};
