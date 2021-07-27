import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Navigation.module.css";

export default function Navigation({ path, menUrl, womenUrl }) {
  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div className={styles.center_align}>
        <div className={styles.link_container}>
          <Link className={styles.scale} to={`/${path}/men`}>
            <div
              className={styles.background}
              style={{
                backgroundImage: `url(${menUrl})`,
              }}
            ></div>
            <div className={styles.btn_container}>
              <span className={styles.btn_text}>MEN</span>
            </div>
          </Link>
          <Link className={styles.scale} to={`/${path}/women`}>
            <div
              className={styles.background}
              style={{
                backgroundImage: `url(${womenUrl})`,
              }}
            ></div>
            <div className={styles.btn_container}>
              <span className={styles.btn_text}>WOMEN</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
