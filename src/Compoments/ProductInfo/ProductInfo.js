import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductInfo.module.css";
import { Button } from "../Button/Button";
import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import { Loader } from "../../assets/icon/Loader";

export default function ProductInfo() {
  const [loader, setLoader] = useState(false);
  const { cartItem, setCartItem } = useContext(CartContext);

  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div className={styles.padding}>
        <div className={styles.img_container}>
          <img
            className={styles.product_img}
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <div className={styles.product_other_img_container}>
            <img
              className={styles.product_other_img}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="main-page"
            />
          </div>
        </div>
        <div className={styles.line_divider}></div>
        <div className={styles.product_info}>
          <div>
            <div className={styles.heading_container}>
              <h2 className={styles.heading_5}>Product Name</h2>
            </div>
            <div className={styles.heading_container}>
              <h3 className={styles.heading_6}>$ 162</h3>
            </div>
          </div>
          <div className={styles.heading_container}>
            <p className={styles.text_size}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
              porta morbi varius sollicitudin quam. Feugiat a, donec ullamcorper
              tellus mi suspendisse scelerisque ullamcorper. Mattis nunc duis
              venenatis, eu neque nulla pellentesque pellentesque. Feugiat
              cursus lectus volutpat sed ut.
            </p>
            <button
              disabled={loader}
              style={{ width: "-webkit-fill-available", padding: "0px" }}
              onClick={() => {
                setLoader(true);
                setTimeout(() => {
                  setCartItem([
                    {
                      product_name: "product name",
                      product_img: "product_img",
                      product_desc: "product desc",
                      price: "$ 25",
                    },
                    ...cartItem,
                  ]);
                  setLoader(false);
                }, 2000);
              }}
            >
              <Button type="primary" value="Add to cart">
                {loader ? <Loader /> : ""}
              </Button>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
