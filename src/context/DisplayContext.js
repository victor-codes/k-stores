import React, { useState, createContext } from "react";

export const ProductInfoData = createContext();
export default function ProductInfoProvider({ children }) {
  const [data, setData] = useState({
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    main_img:
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    other_img:
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    product_name: "Product Name",
    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, porta morbi varius sollicitudin quam. Feugiat a, donec ullamcorper tellus mi suspendisse scelerisque ullamcorper. Mattis nunc duis venenatis, eu neque nulla pellentesque pellentesque. Feugiat cursus lectus volutpat sed ut.",
    product_price: "$ 162",
  });

  return (
    <ProductInfoData.Provider value={{ data, setData }}>
      {children}
    </ProductInfoData.Provider>
  );
}
