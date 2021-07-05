import React from "react";
import "../../../src/slider.css";

export const RightSlider = ({ onclick, type }) => {
  return (
    <svg
      type={type}
      onClick={onclick}
      className="right"
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39 21.6666L69.3333 51.9999L39 82.3332"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
