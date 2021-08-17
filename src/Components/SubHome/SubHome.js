import React from "react";
import Footer from "../Footer/Footer";
import Product from "./Product";
import Navbar from "../Navbar/Navbar";

export default function SubHome({ data, header, path }) {
  const Data = data.map((detail) => (
    <Product
      name={detail.name}
      price={detail.price}
      url={detail.url}
      key={detail.id}
      path={path}
      id={detail.id}
    />
  ));

  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div
        style={{ flexDirection: "column" }}
        className="max_width_1366 padding_16"
      >
        <h2 className="heading_sub_home">{header}</h2>
        <div className="grid_sub_home">{Data}</div>
      </div>
      <Footer />
    </div>
  );
}
