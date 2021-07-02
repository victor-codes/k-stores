import React, { useState } from "react";
import { MenuIcon } from "../../assets/icon/MenuIcon";
import { UserIcon } from "../../assets/icon/UserIcon";
import { CartIcon } from "../../assets/icon/CartIcon";
import styles from "./Navbar.module.css";

export default function Navbar({ fill, color }) {
  return (
    <header className={styles.headr}>
      <nav className={styles.header}>
        <div className={styles.logo_and_link}>
          <div className={styles.logo}>
            <div className={styles.menu}>
              <MenuIcon color={color} />
            </div>
            <a
              style={{ color: `${color}` }}
              className={styles.company_name}
              href="/"
            >
              K store
            </a>
          </div>
          <div className={styles.category_nav}>
            <a
              style={{ color: `${color}` }}
              className={styles.category_link}
              href=""
            >
              Cloths
            </a>
            <a
              style={{ color: `${color}` }}
              className={styles.category_link}
              href=""
            >
              Shoes
            </a>
          </div>
        </div>
        <div className={styles.user}>
          <div>
            <UserIcon fill={fill} />
          </div>
          <div>
            <CartIcon fill={fill} />
          </div>
        </div>
      </nav>
    </header>
  );
}
