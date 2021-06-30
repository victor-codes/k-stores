import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Cart.module.css";
import { Button } from "../Button/Button";

import ProductSection from "./ProductSection";

export default function Cart() {
  return (
    <div>
      <Navbar fill="#555555" color="#000" />
      <div className="padding margin_4">
        <h2 className={styles.sub_heading}>CARTS</h2>
        <div className={styles.flex_gap}>
          <ProductSection url="" />
          <ProductSection url="" />
          <ProductSection url="" />
          <ProductSection url="" />
          <ProductSection url="" />
        </div>
        <div className={styles.total}>
          <h3 className={styles.caption}>TOTAL</h3>
          <div className={styles.total_container}>
          <p className={styles.sub_heading_2}>$ 500</p>
          </div>
        </div>
        <div className={styles.margin_40}>
          <Button type="primary" />
        </div>
      </div>
    </div>
  );
}
