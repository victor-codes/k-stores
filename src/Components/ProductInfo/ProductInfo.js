import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductInfo.module.css";
import { Button } from "../Button/Button";
import { CartContext } from "../../context/CartContext";
import Footer from "../Footer/Footer";
import { Loader } from "../../assets/icon/Loader";
import { ProductInfoData } from "../../context/DisplayContext";
import { Alert } from "../../utils/Alert";
import { useParams } from "react-router";
import api from "../../utils/api.json";

export default function ProductInfo() {
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  const { data, setData } = useContext(ProductInfoData);
  const { cartItem, setCartItem } = useContext(CartContext);
  const url =
    "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80";
  const myrewuest = new Request("api.json");
  
  // const { id } = useParams();
  // function valid(param) {
  //   let check = api.men.cloths.indexOf(param);
  //   console.log(check);
  //   if (api.men.cloths.indexOf.param) {
  //     console.log(true);
  //   }
  //   // fetch(myrewuest)

  //   //   .then((res) => console.log(res.json()))
  //   //   .catch((res) => console.error("error"));
  //   // .then((res) =>
  //   //   res.json()
  //   // )
  //   // .then((res) => {
  //   //   console.log(res);
  //   // });
  //   // return param;
  // }

  // useEffect(() => {
  //   valid(id);
  // });

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
              <h2 className={styles.heading_5}>{data.product_name}</h2>
            </div>
            <div className={styles.heading_container}>
              <h3 className={styles.heading_6}>{data.product_price}</h3>
            </div>
          </div>
          <div className={styles.heading_container}>
            <p className={styles.text_size}>{data.product_description}</p>

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
                        product_name: data.product_name,
                        product_img: `${data.main_img}`,
                        product_desc: "Product Description",
                        price: data.product_price,
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
