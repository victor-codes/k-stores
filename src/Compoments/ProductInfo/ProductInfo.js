import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductInfo.module.css";
import { Button } from "../Button/Button";

export default function ProductInfo() {
  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div className={styles.padding}>
        <div className={styles.img_container}>
          <img className={styles.product_img} src="/main_image.png" alt="" />
          <div className={styles.product_other_img_container}>
            <img className={styles.product_other_img} src="" alt="" />
            <img className={styles.product_other_img} src="" alt="" />
            <img className={styles.product_other_img} src="" alt="" />
            <img className={styles.product_other_img} src="" alt="" />
            <img className={styles.product_other_img} src="" alt="" />
            <img className={styles.product_other_img} src="" alt="" />
          </div>
        </div>
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
            <Button type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
