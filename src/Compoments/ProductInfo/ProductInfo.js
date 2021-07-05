import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductInfo.module.css";
import { Button } from "../Button/Button";
import { CartContext } from "../../context/CartContext";

export default function ProductInfo() {
  const { cartItem, setCartItem } = useContext(CartContext);

  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div className={styles.padding}>
        <div className={styles.img_container}>
          <img className={styles.product_img} src="/main_image.png" alt="" />
          <div className={styles.product_other_img_container}>
            <img
              className={styles.product_other_img}
              src="/main_image.png"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="/main_image.png"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="/main_image.png"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="/main_image.png"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="/main_image.png"
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src="/main_image.png"
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
              style={{ width: "-webkit-fill-available", padding: "0px" }}
              onClick={() => {
                setCartItem([
                  {
                    product_name: "product name",
                    product_img: "product_img",
                    product_desc: "product desc",
                    price: "$ 25",
                  },
                  ...cartItem
                ]);
              }}
            >
              <Button type="primary" value="Add to cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
