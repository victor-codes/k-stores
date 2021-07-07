import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Cart.module.css";
import { Button } from "../Button/Button";
import ProductSection from "./ProductSection";
import { CartContext } from "../../context/CartContext";
import { AddToCart } from "../../assets/icon/AddToCart";
import Footer from "../Footer/Footer";

export default function Cart() {
  const { cartItem } = useContext(CartContext);
  const EmptyCartTemplate = (
    <div className={styles.empty_cart_message_flex}>
      <p className={styles.text_size}>There is no item in your cart</p>
    </div>
  );

  const cartTemplate = (
    <>
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
        {/* <ProductSection url="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80" /> */}
        {/* <ProductSection url="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" /> */}
        {/* <ProductSection url="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" /> */}
        {/* <ProductSection url="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" /> */}
      </div>
    </>
  );
  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div className="padding margin_4 max_width_1366">
        <h2 className={styles.sub_heading}>CARTS {/*({cartItem.length})*/}</h2>
        <div className={styles.cart_section}>
          {cartItem.length < 1 ? EmptyCartTemplate : cartTemplate}
          <div className={styles.summary_section}>
            <h2 className={styles.heading_summary}>Summary</h2>
            <div className={styles.summary_2}>
              <div className={styles.inside_summary_container}>
                <p className={styles.price_header}>Subtotal</p>
                <span className={styles.price_text}> $ 0.00</span>
              </div>
              <div className={styles.inside_summary_container}>
                <p className={styles.price_header}>Estimated shipping fee</p>
                <span className={styles.price_text}> $ 0.00</span>
              </div>
              <div className={styles.line_divider}></div>
              <div className={styles.inside_summary_container}>
                <p className={styles.price_header}>Total</p>
                <span className={styles.price_text}> $ 0.00</span>
              </div>
              <div className={styles.margin_40}>
                <button disabled className={styles.button_width}>
                  <Button type="primary" value="Proceed to Checkout" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
