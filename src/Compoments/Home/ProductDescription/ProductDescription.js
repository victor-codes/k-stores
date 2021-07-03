import React from "react";
import styles from "./ProductDescription.module.css";

export default function Product({ name, description, url }) {
  return (
    <article className="no_underline">
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
    </article>
  );
}
