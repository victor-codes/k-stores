import React, { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel-js";

import styles from "./Main.module.css";
import { LeftSlider } from "../../../assets/icon/LeftSlider";
import { RightSlider } from "../../../assets/icon/RightSlider";
export default function Main() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: [
        {
          id: "1",
          renderItem: (
            <div>
              <img className={styles.main_image} src="/main_image.png" alt="" />
              <div
                style={{ backgroundColor: "#CC021C" }}
                className={styles.background}
              ></div>
            </div>
          ),
        },
        {
          id: "2",
          renderItem: (
            <div>
              <div
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)",
                  backgroundRepeat: "no-repeat",
                }}
                className={styles.background}
              ></div>
            </div>
          ),
        },
        {
          id: "3",
          renderItem: (
            <div>
              <div
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)",
                }}
                className={styles.background}
              ></div>
            </div>
          ),
        },
      ],
    });
  return (
    <div>
      <div className={styles.back}></div>
      <div className={styles.heading_container}>
        <h1 className={styles.absolute_h1}>THE LAST TREND IS HERE</h1>
      </div>
      <div className={styles.absolute_center}>
        {carouselFragment}
        {/* <div>
          <img className={styles.main_image} src="/main_image.png" alt="" />
          <div className={styles.background}></div>
        </div> */}
        {/* <div></div>
        <div></div> */}
      </div>
      <div className={styles.max_width}>
        <div className={styles.fill_container}>
          <button
            type="prev"
            onClick={slideToPrevItem}
            className={styles.chervon_left}
          >
            <LeftSlider />
          </button>
          <button
            type="next"
            onClick={slideToNextItem}
            className={styles.chervon_right}
          >
            <RightSlider />
          </button>
        </div>
      </div>
      <button className={styles.cta_btn}>GET IT NOW</button>
    </div>
  );
}
