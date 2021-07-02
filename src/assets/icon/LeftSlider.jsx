import React from "react";
import "../../../src/slider.css";

export const LeftSlider = ({ onclick, type }) => {
  return (
    <svg
      type={type}
      onClick={onclick}
      className="left"
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65 82.3332L34.6666 51.9999L65 21.6666"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
