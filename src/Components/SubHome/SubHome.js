import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Product from "./Product";
import Navbar from "../Navbar/Navbar";

export default function SubHome({ data }) {
  const pathname = window.location.pathname;
  const Data = data.map((detail) => (
    <Product
      name={detail.name}
      price={detail.price}
      url={detail.url}
      key={detail.id}
    />
  ));

  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div
        style={{ flexDirection: "column" }}
        className="max_width_1366 padding_16"
      >
        <h2 className="heading_sub_home">
          <Link to="/" style={{ font: "inherit", color: "#c4c4c4" }}>
            Home
          </Link>
          {/* <span className="link_slash">/</span> */}
          {pathname}
        </h2>
        <div className="grid_sub_home">{Data}</div>
      </div>
      <Footer />
    </div>
  );
}
