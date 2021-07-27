import React from "react";
import { ChervonRight } from "../../assets/icon/ChervonRight";
import styles from "./SectionHeader.module.css";

export const SectionHeader = ({ name }) => {
  let link = name.toLowerCase().split(" ").reverse().join("/");
  return (
    <a href={`/${link}`} className="no_underline">
      <div className="flex margin margin_16">
        <h3 className={styles.h3}>{name}</h3>
        <ChervonRight />
      </div>
    </a>
  );
};
