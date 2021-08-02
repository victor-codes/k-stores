import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductDescription.module.css";
import { ProductInfoData } from "../../../context/DisplayContext";

export default function Product({ id, name, price, path, imgUrl }) {
  const { setData } = useContext(ProductInfoData);

  return (
    <Link
      to={`/product/id`}
      className="no_underline"
      onClick={() => {
        setData({ img: imgUrl, main_img: imgUrl, other_img: imgUrl });
      }}
    >
      <div className={styles.product}>
        <img className={styles.product_img} src={imgUrl} alt={name} />
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
