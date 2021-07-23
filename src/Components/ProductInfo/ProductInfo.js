import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductInfo.module.css";
import { Button } from "../Button/Button";
import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import { Loader } from "../../assets/icon/Loader";
import { ProductInfoData } from "../../context/DisplayContext";
import { Alert } from "../../utils/Alert";

export default function ProductInfo() {
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  const { data, setData } = useContext(ProductInfoData);
  const { cartItem, setCartItem } = useContext(CartContext);
  const url =
    "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80";

  return (
    <div className="App">
      {alert ? (
        <Alert
          message="Product Name is succesfully added to cart"
          type={alert}
          set={(e) => setAlert(e)}
        />
      ) : null}
      <Navbar fill="#555555" color="#000" />
      <div className={styles.padding}>
        <div className={styles.img_container}>
          <img className={styles.product_img} src={data.main_img} alt="" />
          <div className={styles.product_other_img_container}>
            <img
              className={styles.product_other_img}
              src={data.other_img}
              alt="main-page"
              onClick={() => {
                setData({ ...data, main_img: url });
                console.log(data);
              }}
            />
            <img
              onClick={() => {
                setData({ ...data, main_img: url });
                console.log(data);
              }}
              className={styles.product_other_img}
              src={data.other_img}
              alt="main-page"
            />
            <img
              className={styles.product_other_img}
              src={data.other_img}
              alt="main-page"
              onClick={() => {
                setData({ ...data, main_img: url });
                console.log(data);
              }}
            />
            <img
              className={styles.product_other_img}
              src={data.other_img}
              alt="main-page"
              onClick={() => {
                setData({ ...data, main_img: url });
                console.log(data);
              }}
            />
            <img
              className={styles.product_other_img}
              src={data.other_img}
              alt="main-page"
              onClick={() => {
                setData({ ...data, main_img: url });
                console.log(data);
              }}
            />
            <img
              className={styles.product_other_img}
              src={data.other_img}
              alt="main-page"
              onClick={() => {
                setData({ ...data, main_img: url });
                console.log(data);
              }}
            />
          </div>
        </div>
        <div className={styles.line_divider}></div>
        <div className={styles.product_info}>
          <div>
            <div className={styles.heading_container}>
              <h2 className={styles.heading_5}>Product Name</h2>
            </div>
            <div className={styles.heading_container}>
              <h3 className={styles.heading_6}>$ 162</h3>
            </div>
          </div>
          <div className={styles.heading_container}>
            <p className={styles.text_size}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
              porta morbi varius sollicitudin quam. Feugiat a, donec ullamcorper
              tellus mi suspendisse scelerisque ullamcorper. Mattis nunc duis
              venenatis, eu neque nulla pellentesque pellentesque. Feugiat
              cursus lectus volutpat sed ut.
            </p>
            <button
              disabled={loader}
              style={{
                width: "-webkit-fill-available",
                padding: "0px",
                marginTop: "32px",
              }}
              onClick={() => {
                setLoader(true);
                setTimeout(() => {
                  if (loader) {
                    return null;
                  } else {
                    setCartItem([
                      {
                        product_name: "product name",
                        product_img: "product_img",
                        product_desc: "product desc",
                        price: "$ 125",
                      },
                      ...cartItem,
                    ]);
                  }
                  setLoader(false);
                  setAlert(true);
                }, 2000);
              }}
            >
              <Button type="primary" value="Add to cart">
                {loader ? <Loader /> : ""}
              </Button>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
