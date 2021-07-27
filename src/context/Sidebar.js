import React, { useState, createContext } from "react";

export const SidebarContext = createContext();

export default function ToggleProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}
