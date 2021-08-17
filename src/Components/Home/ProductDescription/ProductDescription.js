import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDescription.module.css";
import { ProductInfoData } from "../../../context/DisplayContext";
// import { ProductInfo } from "../../../DisplayContext";
import api from "../../../utils/api.json";

export default function Product({
  name,
  description,
  price,
  path,
  imgUrl,
  id,
}) {
  // const { slug } = useParams();
  const { data, setData } = useContext(ProductInfoData);

  // function valid(param) {
  //   return param;
  // }
  // useEffect(() => {
  //   console.log(valid(slug));
  // });
  return (
    <Link
      to={`/${path}/${id}`}
      className="no_underline"
      onClick={() => {
        setData({
          ...data,
          img: imgUrl,
          main_img: imgUrl,
          other_img: imgUrl,
          product_name: name,
          // product_description: description,
          product_price: price,
        });
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
