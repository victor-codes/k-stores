import React, { Suspense, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductDescription.module.css";
import { ProductInfoData } from "../../../context/DisplayContext";
// import { ProductInfo } from "../../../DisplayContext";

export default function Product({ name, description, url }) {
  const { data, setData } = useContext(ProductInfoData);
  // useEffect(() => {
  //   console.log(data);
  // });
  return (
    <Link
      to={`/product/id`}
      className="no_underline"
      onClick={() => {
        setData({ img: url, main_img: url, other_img: url });
      }}
    >
      <div className={styles.product}>
        <Suspense
          fallback={
            <div
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "#ff00ff",
              }}
            >
              loading...
            </div>
          }
        >
          <img className={styles.product_img} src={url} alt={name} />
        </Suspense>
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
