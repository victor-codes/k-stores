import React from "react";
import "./Button.css";

export const Button = ({ size, type, value }) => {
  return <button className={`${type} ${size}`}>{value}</button>;
};
