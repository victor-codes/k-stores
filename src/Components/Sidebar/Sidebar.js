import React, { useContext } from "react";
import { animated, config, useSpring } from "react-spring";
import { Close } from "../../assets/icon/Close";
import styles from "./Sidebar.module.css";
import { SidebarContext } from "../../context/Sidebar";

export default function Sidebar() {
  const { toggle, setToggle } = useContext(SidebarContext);

  const sidebar = useSpring({
    transform: toggle ? `translateX(0%)` : `translateX(-100%)`,
    config: { ...config.gentle, duration: 500 },
  });

  return (
    <animated.div style={sidebar} className={styles.sidebar_container}>
      <nav>
        <div className={styles.header}>
          <h1 className={styles.company_name}>K store</h1>
          <div className={styles.close_btn}>
            <button
              className={styles.close_btn}
              onClick={() => setToggle(false)}
            >
              <Close />
              <span style={{ marginLeft: "5px" }}>Close</span>
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <div className={styles.div_container}>
              <h5 className={styles.sub_heading_1}>Cloths</h5>
            </div>
            <div className={styles.div_container}>
              <a className={styles.body_1} href="/men/cloths">
                Men
              </a>
            </div>
            <div className={styles.div_container}>
              <a className={styles.body_1} href="/women/cloths">
                Women
              </a>
            </div>
          </div>
          <div style={{ marginTop: "12px" }}>
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
    </animated.div>
  );
}
