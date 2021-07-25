import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductInfoData } from "../../context/DisplayContext";
import styles from "./SubHome.module.css";

export default function Product({ url, name, description }) {
  const { data, setData } = useContext(ProductInfoData);

  return (
    <Link
      to={`/product/id`}
      style={{ textDecoration: "none" }}
      onClick={() => {
        setData({ img: data.url, main_img: data.url, other_img: data.url });
      }}
    >
      <div className={styles.product}>
        <img className={styles.product_img} src={url} alt={name} />
        <div className={styles.product_info}>
          <div className={styles.product_name}>
            <h4 className={styles.name_text}> {name}</h4>
          </div>
          <div className={styles.product_description}>
            <p className={styles.description_text}>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
