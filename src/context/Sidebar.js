import React, { useState, createContext, useEffect } from "react";

export const SidebarContext = createContext();

export default function ({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}