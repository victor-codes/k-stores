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
import axios from "axios";
import { menClothes } from "../../utils/fetch";
// import  fetchOperation  from "../../utils/fetch";

export default function ProductInfo() {
  const [data1, setData1] = useState(false);
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  const { data, setData } = useContext(ProductInfoData);
  const { cartItem, setCartItem } = useContext(CartContext);
  const url =
    "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80";
  // const myrewuest = new Request("api.json");
  const pathname = window.location.pathname;
  const { id } = useParams();

  function valid(param) {
    let relativePath = "";

    // let data2 = menClothes();
    // console.log(data2);
    if (pathname.includes("clothes/men")) {
      let length = api.men.cloths.length;
      if (param < length) {
        setData1(api.men.cloths[param - 1]);
      }
    } else if (pathname.includes("clothes/women")) {
      setData1(api.women.cloths[param - 1]);
    } else if (pathname.includes("shoes/men")) {
      setData1(api.men.shoes[param - 1]);
    } else if (pathname.includes("shoes/women")) {
      setData1(api.women.shoes[param - 1]);
    } else {
      relativePath = "";
    }
  }

  useEffect(() => {
    if (alert) {
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    }
    valid(id);
  }, [alert, data1]);
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
      {data1 === false ? (
        <div className="padding">Invalid Link go back to home</div>
      ) : (
        <div className={styles.padding}>
          <div className={styles.img_container}>
            <img className={styles.product_img} src={data1.url} alt="" />
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
                <h2 className={styles.heading_5}>{data1.name}</h2>
              </div>
              <div className={styles.heading_container}>
                <h3 className={styles.heading_6}>{data1.price}</h3>
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
                          product_name: data1.name,
                          product_img: `${data1.url}`,
                          product_desc: "Product Description",
                          price: data1.price,
                          path: `${pathname}`,
                        },
                        ...cartItem,
                      ]);
                    }
                    console.log(pathname);
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
      )}

      <Footer />
    </div>
  );
}
