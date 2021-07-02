import React, { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel-js";
import { MenuIcon } from "../../assets/icon/MenuIcon";
import { UserIcon } from "../../assets/icon/UserIcon";
import { CartIcon } from "../../assets/icon/CartIcon";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { LeftSlider } from "../../assets/icon/LeftSlider";
import { RightSlider } from "../../assets/icon/RightSlider";

export default function Navbar({ fill, color }) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: [
        {
          id: "div-1",
          renderItem: (
            <div className={styles.test} background="#2c3e50">
              Carousel Item 1
            </div>
          ),
        },
        {
          id: "div-2",
          renderItem: (
            <div className={styles.test} background="#c0392b">
              Carousel Item 2
            </div>
          ),
        },
        {
          id: "div-3",
          renderItem: (
            <div className={styles.test} background="#8e44ad">
              Carousel Item 3
            </div>
          ),
        },
        {
          id: "div-4",
          renderItem: (
            <div className={styles.test} background="#f39c12">
              Carousel Item 4
            </div>
          ),
        },
      ],
    });
  return (
    <header className={styles.headr}>
      {/* <div style={{ fontSize: "2.4rem" }}>
        <button type="prev" onclick={slideToPrevItem}>
          <LeftSlider />
        </button>
        {carouselFragment}
        <button type="next" onclick={slideToNextItem}>
          <RightSlider />
        </button>
      </div> */}
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
              K store
            </Link>
          </div>
          <div className={styles.category_nav}>
            <Link
              to="/cloths"
              style={{ color: `${color}` }}
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
