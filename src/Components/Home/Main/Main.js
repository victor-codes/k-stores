import React, { useState, useEffect, useContext } from "react";
import { useSpringCarousel } from "react-spring-carousel-js";
import { ProductInfoData } from "../../../context/DisplayContext";
import styles from "./Main.module.css";
import { LeftSlider } from "../../../assets/icon/LeftSlider";
import { RightSlider } from "../../../assets/icon/RightSlider";
import { Link } from "react-router-dom";

export default function Main() {
  const { data, setData } = useContext(ProductInfoData);
  const [count, setCount] = useState(0);
  const ImageSliderLink = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80",
  ];
  const ProductSliderLink = ["/shoes/men/2", "/shoes/women/1", "/clothes/women/6"];

  const [activeSection, setActiveSection] = useState(0);

  const words = ["THE LAST TREND IS HERE"];
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      springConfig: {
        easing: 400,
      },
      withLoop: true,
      items: [
        {
          id: "1",
          renderItem: (
            <div>
              <img className={styles.main_image} src="/main_image.png" alt="" />
              <div
                style={{ backgroundColor: "#CC021C", zIndex: "-10" }}
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
                    "url(https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80)",
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
                    "url(https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80)",
                }}
                className={styles.background}
              ></div>
            </div>
          ),
        },
      ],
    });

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter effect
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 100 : 100, parseInt(Math.random() * 1)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink, words]);

  return (
    <div>
      <div className={styles.back}></div>
      <div className={styles.heading_container}>
        <h1 className={styles.absolute_h1}>
          {`${words[index].substring(0, subIndex)}${blink ? "" : " "}`}
        </h1>
      </div>
      <div className={styles.absolute_center}>{carouselFragment}</div>
      <div className={styles.max_width}>
        <div className={styles.fill_container}>
          <button
            type="prev"
            onClick={() => {
              slideToPrevItem();
              setActiveSection((prev) => (prev <= 0 ? 2 : (prev - 1) % 3));
            }}
            className={styles.chervon_left}
          >
            <LeftSlider />
          </button>
          <button
            type="next"
            onClick={() => {
              slideToNextItem();
              setActiveSection((prev) => (prev === 2 ? 0 : prev + 1));
            }}
            className={styles.chervon_right}
          >
            <RightSlider />
          </button>
        </div>
      </div>
      <Link
        onClick={() => {
          setData({
            ...data,
            img: ImageSliderLink[activeSection],
            main_img: ImageSliderLink[activeSection],
            other_img: ImageSliderLink[activeSection],
          });
        }}
        to={ProductSliderLink[activeSection]}
        className={styles.cta_btn}
      >
        GET IT NOW
      </Link>
    </div>
  );
}
