import React, { useState, createContext } from "react";

export const ProductInfoData = createContext();

export default function ProductInfoProvider({ children }) {
  const [data, setData] = useState({
    img: "",
    main_img: "",
    other_img: "",
  });

  return (
    <ProductInfoData.Provider value={{ data, setData }}>
      {children}
    </ProductInfoData.Provider>
  );
}
