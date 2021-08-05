import React from "react";
import Navbar from "../Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "../Footer/Footer";
import { MailSection } from "../Footer/MailSection";
import Product from "./ProductDescription/ProductDescription";
import { SectionHeader } from "../../utils/SectionHeader/SectionHeader";
import api from "../../utils/api.json";

export default function Home() {
  const Men = api.men;
  const Women = api.women;

  const menShoes = Men.shoes.map((detail) => (
    <Product
      key={detail.id}
      name={detail.name}
      price={detail.price}
      path="shoes/men"
      imgUrl={detail.url}
      id={detail.id}
    />
  ));

  const menCloth = Men.cloths.map((detail) => (
    <Product
      key={detail.id}
      name={detail.name}
      price={detail.price}
      path="clothes/men"
      imgUrl={detail.url}
      id={detail.id}
    />
  ));

  const womenShoe = Women.shoes.map((detail) => (
    <Product
      key={detail.id}
      name={detail.name}
      price={detail.price}
      path="shoes/women"
      imgUrl={detail.url}
      id={detail.id}
    />
  ));

  const womenCloth = Women.cloths.map((detail) => (
    <Product
      key={detail.id}
      name={detail.name}
      price={detail.price}
      path="clothes/women"
      imgUrl={detail.url}
      id={detail.id}
    />
  ));

  return (
    <div className="App">
      <Navbar fill="#fff" color="#fff" />
      <Main />
      <div className="section_container">
        <section>
          <SectionHeader name="MEN SHOES" link="" />
          <div className="flex_row_gap">{menShoes}</div>
        </section>
        <section>
          <SectionHeader name="WOMEN SHOES" />
          <div className="flex_row_gap">{womenShoe}</div>
        </section>
        <section>
          <SectionHeader name="MEN CLOTHES" />
          <div className="flex_row_gap">{menCloth}</div>
        </section>
        <section>
          <SectionHeader name="WOMEN CLOTHES" />
          <div className="flex_row_gap">{womenCloth}</div>
        </section>
      </div>
      <Footer>
        <MailSection />
      </Footer>
    </div>
  );
}
