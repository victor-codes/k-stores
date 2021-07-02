import React, { useState } from "react";
import styles from "./Main.module.css";
import { LeftSlider } from "../../../assets/icon/LeftSlider";
import { RightSlider } from "../../../assets/icon/RightSlider";
export default function Main() {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.back}></div>
      <div className={styles.heading_container}>
        <h1 className={styles.absolute_h1}>THE LAST TREND IS HERE</h1>
      </div>
      <div className={styles.absolute_center}>
        <img className={styles.main_image} src="/main_image.png" alt="" />
      </div>
      <div className={styles.max_width}>
        <div className={styles.fill_container}>
          <div className={styles.chervon_left}>
            <LeftSlider />
          </div>
          <div className={styles.chervon_right}>
            <RightSlider />
          </div>
        </div>
      </div>
      <button className={styles.cta_btn}>GET IT NOW</button>
    </div>
  );
}
