import React from "react";
import { ChervonRight } from "../../assets/icon/ChervonRight";
import styles from "./SectionHeader.module.css";

export const SectionHeader = ({ name }) => {
  return (
    <a href="/" className="no_underline">
      <div
        className="flex margin"
      >
        <h3 className={styles.h3}>{name}</h3>
        <ChervonRight />
      </div>
    </a>
  );
};
