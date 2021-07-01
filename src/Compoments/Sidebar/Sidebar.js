import React from "react";
import { Close } from "../../assets/icon/Close";
import styles from "./Sidebar.module.css";

export default function Sdebar() {
  return (
    <div>
      <nav>
        <div className={styles.header}>
          <h1 className={styles.company_name}>K store</h1>
          <div className={styles.close_btn}>
            <Close />
            Close
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <div className={styles.div_container}>
              <h5 className={styles.sub_heading_1}>Cloths</h5>
            </div>
            <div className={styles.div_container}>
              <a className={styles.body_1} href="/cloths/men">
                Men
              </a>
            </div>
            <div className={styles.div_container}>
              <a className={styles.body_1} href="/cloths/women">
                Women
              </a>
            </div>
          </div>
          <div>
            <div className={styles.div_container}>
              <h5 className={styles.sub_heading_1}>Shoes</h5>
            </div>
            <div className={styles.div_container}>
              <a className={styles.body_1} href="/shoes/men">
                Men
              </a>
            </div>
            <div className={styles.div_container}>
              <a className={styles.body_1} href="/shoes/women">
                Women
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
