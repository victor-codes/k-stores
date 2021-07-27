import React from "react";
import styles from "./Footer.module.css";
import { Emoji } from "../../assets/icon/Emoji";
import { ArrowRight } from "../../assets/icon/ArrowRight";

export const MailSection = () => {
  return (
    <div className={styles.mail_section}>
      <div>
        <div className={styles.newsletter}>
          <Emoji />
          <h4 className={styles.heading_4}>WE ALSO MAKE EMAILS</h4>
        </div>
        <p className={styles.mail_text}>
          Recieve updates and offers you’ll actually be interested in.
          Unsubscriber any time.{" "}
        </p>
      </div>
      <div className={styles.email}>
        <ArrowRight />
        <input
          className={styles.input_field}
          type="mail"
          placeholder="Your email"
        />
      </div>
    </div>
  );
};
