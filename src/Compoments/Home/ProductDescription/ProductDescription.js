import { nanoid } from "nanoid";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductDescription.module.css";

export default function Product({ name, description, url }) {
  // const id = nanoid(10).toString();
  return (
    <Link to={`/product/product-id`} className="no_underline">
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
