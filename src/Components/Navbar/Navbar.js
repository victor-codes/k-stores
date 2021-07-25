import React from "react";
import { MenuIcon } from "../../assets/icon/MenuIcon";
import { UserIcon } from "../../assets/icon/UserIcon";
import { CartIcon } from "../../assets/icon/CartIcon";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import { Logo } from "../../assets/icon/logo";

export default function Navbar({ fill, color }) {
  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.logo_and_link}>
          <div className={styles.logo}>
            <div className={styles.menu}>
              <MenuIcon color={color} />
            </div>
            <Link
              to="/"
              style={{ color: `${color}` }}
              className={styles.company_name}
            >
              {/* <Logo /> */}
              K store
            </Link>
          </div>
          <div className={styles.category_nav}>
            <Link
              to="/cloths"
              style={{ color: `${color}`, marginRight: "16px" }}
              className={styles.category_link}
            >
              Cloths
            </Link>
            <Link
              to="shoes"
              style={{ color: `${color}` }}
              className={styles.category_link}
            >
              Shoes
            </Link>
          </div>
        </div>
        <div className={styles.user}>
          <div>
            <UserIcon fill={fill} />
          </div>
          <Link to="/cart">
            <CartIcon fill={fill} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
