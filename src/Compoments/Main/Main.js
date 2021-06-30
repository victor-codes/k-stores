import React, { useState } from "react";
import styles from "./Main.module.css";
export default function Main() {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.back}></div>
      <h1 className={styles.absolute_h1}>THE LAST TREND IS HERE</h1>
      <div className={styles.absolute_center}>
        <h2 className={styles.product_center_fixed}>Nike</h2>
      </div>
      <div className={styles.absolute_center}>
        <img className={styles.main_image} src="/main_image.png" alt="" />
      </div>
      <button className={styles.cta_btn}>GET IT NOW</button>
    </div>
  );
}
