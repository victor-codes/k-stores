import React, { useContext } from "react";
import styles from "./ProductSection.module.css";
import { Trash } from "../../assets/icon/Trash";
import { Minus } from "../../assets/icon/Minus";
import { ProductInfoData } from "../../context/DisplayContext";
import { Plus } from "../../assets/icon/Plus";
import { Link } from "react-router-dom";

export default function ProductSection({ url, name, desc, path }) {
  const { data, setData } = useContext(ProductInfoData);

  return (
    <div className={styles.product_section}>
      <Link
        to={`${path}`}
        onClick={() => {
          setData({
            ...data,
            img: url,
            main_img: url,
            other_img: url,
            product_name: name
          });
        }}
      >
        <img
          className={styles.cart_product_image}
          src={url}
          alt="product_name"
        />
      </Link>
      <div
        className={styles.product_info_2}
        style={{ width: "-webkit-fill-available" }}
      >
        <div className={styles.product_section_info}>
          <div>
            <div className={styles.heading_container}>
              <p className={styles.body_2}>{name ? name : "Product Name"}</p>
            </div>
            <div className={styles.heading_container}>
              <p className={styles.body_2}>
                {desc ? desc : "Product Description"}
              </p>
            </div>
          </div>
          <div className={styles.heading_container}>
            <p className={styles.body_2}>$ 125</p>
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.quantity_control}>
            <Minus />
            <div className={styles.quantity_container}>
              <p className={styles.quantity_text}>1</p>
            </div>
            <Plus />
          </div>
          <Trash />
        </div>
      </div>
    </div>
  );
}
