import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Cart.module.css";
import { Button } from "../Button/Button";
import ProductSection from "./ProductSection";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
  const { cartItem } = useContext(CartContext);
  return (
    <div>
      <Navbar fill="#555555" color="#000" />
      <div className="padding margin_4">
        <h2 className={styles.sub_heading}>CARTS</h2>
        <div className={styles.flex_gap}>
          {cartItem.map((product, id) => (
            <ProductSection
              url={product.product_img}
              key={id}
              name={product.product_name}
              desc={product.product_desc}
            />
          ))}
          <ProductSection url="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
          <ProductSection url="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80" />
          <ProductSection url="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
          <ProductSection url="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
          <ProductSection url="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" />
        </div>
        <div className={styles.total}>
          <h3 className={styles.caption}>TOTAL</h3>
          <div className={styles.total_container}>
            <p className={styles.sub_heading_2}>$ 500</p>
          </div>
        </div>
        <div className={styles.margin_40}>
          <Button type="primary" value="Proceed to Checkout" />
        </div>
      </div>
    </div>
  );
}
