import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductDescription.module.css";
import { ProductInfoData } from "../../../context/DisplayContext";
// import { ProductInfo } from "../../../DisplayContext";

export default function Product({ name, description, price, url }) {
  const { setData } = useContext(ProductInfoData);

  return (
    <Link
      to={`/product/id`}
      className="no_underline"
      onClick={() => {
        setData({ img: url, main_img: url, other_img: url });
      }}
    >
      <div className={styles.product}>
        <img className={styles.product_img} src={url} alt={name} />
        <div className={styles.product_info}>
          <div className={styles.product_name}>
            <h4 className={styles.name_text}> {name}</h4>
          </div>
          <div className={styles.product_price}>
            <p className={styles.price_text}>{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
