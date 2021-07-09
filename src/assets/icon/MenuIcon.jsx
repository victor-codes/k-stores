import React, { useContext } from "react";
import { SidebarContext } from "../../context/Sidebar";

export const MenuIcon = ({ color }) => {
  const { setToggle } = useContext(SidebarContext);
  return (
    <button style={{ padding: "0" }} onClick={() => setToggle(true)}>
      <svg
        className="w-6 h-6"
        width={24}
        fill="none"
        stroke={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </button>
  );
};
