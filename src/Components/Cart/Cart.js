import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Cart.module.css";
import { Button } from "../Button/Button";
import ProductSection from "./ProductSection";
import { CartContext } from "../../context/CartContext";
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
            path={product.path}
            name={product.product_name}
            desc={product.product_desc}
          />
        ))}
      </div>
    </>
  );
  return (
    <div className="App">
      <Navbar fill="#555555" color="#000" />
      <div className="padding_m margin_4 max_width_1366">
        {/* className={styles.cart_section} */}
        <div
          style={{
            width: "-webkit-fill-available",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 className={styles.sub_heading}>
            CARTS {/*({cartItem.length})*/}
          </h2>
          <div style={{ width: "-webkit-fill-available" }}>
            {cartItem.length < 1 ? EmptyCartTemplate : cartTemplate}
          </div>
        </div>
        <div className={styles.summary_section}>
          <h2 className={styles.heading_summary}>SUMMARY</h2>
          <div className={styles.summary_2}>
            <div
              className={styles.inside_summary_container}
              style={{ marginBottom: "16px" }}
            >
              <p className={styles.price_header}>Subtotal</p>
              <span className={styles.price_text}> $ 0.00</span>
            </div>
            <div className={styles.inside_summary_container}>
              <p className={styles.price_header}>Estimated shipping fee</p>
              <span className={styles.price_text}> $ 0.00</span>
            </div>
            <div className={styles.line_divider}></div>

            <div
              className={styles.inside_summary_container}
              style={{ marginBottom: "16px" }}
            >
              <p className={styles.price_header}>Total</p>
              <span className={styles.price_text}> $ 0.00</span>
            </div>
            <div className={styles.margin_40}>
              <button
                disabled={cartItem.length >= 1 ? false : true}
                onClick={() => {
                  alert("Continue to checkout");
                }}
                className={styles.button_width}
              >
                <Button type="primary" value="Proceed to Checkout" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
