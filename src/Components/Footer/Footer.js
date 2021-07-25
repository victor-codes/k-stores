import React from "react";
import styles from "./Footer.module.css";
import { MailSection } from "./MailSection";
import { SocialMedia } from "../../utils/SocialMediaLink.jsx";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      {children}
      <div className={styles.nav}>
        <nav>
          <h1 className={styles.heading_1}>K store</h1>
          <div className={styles.navlink}>
            <div className={styles.wrap}>
              <div className={styles.navlink_category}>
                MENS
                <div>
                  <p>Tshirts</p>
                  <p>Shirts</p>
                  <p>Sweaters</p>
                  <p>Jeans</p>
                  <p>Jackets</p>
                  <p>Accessories</p>
                </div>
              </div>
              <div className={styles.navlink_category}>
                WOMENS
                <div>
                  <p>Tops</p>
                  <p>Sweaters</p>
                  <p>Dresses</p>
                  <p>Jeans</p>
                  <p>Jackets</p>
                  <p>Accessories</p>
                </div>
              </div>
              <div className={styles.navlink_category}>
                SITE
                <div>
                  <p>Journal</p>
                  <p>About</p>
                  <p>Our Story</p>
                </div>
              </div>
              <div className={styles.navlink_category}>
                SUPPORT
                <div>
                  <p>Shipping and Delivery</p>
                  <p>Returns Policy</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.address}>
                <div className={styles.gap_10}>
                  MANHATTAN STORE
                  <p
                    className={styles.text_size}
                    style={{ width: "100%", maxWidth: "256px" }}
                  >
                    526 Avenue Of The Americas New York NY
                  </p>
                </div>
                <div className={styles.gap_10}>
                  BROOKLYN STORE
                  <p
                    className={styles.text_size}
                    style={{ width: "100%", maxWidth: "221.54px" }}
                  >
                    118 Knickerbocker Ave East Williamsburg
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SocialMedia />
          </div>
          <p className={styles.copyright}>
            © 2020 K store. All rights reserved.
          </p>
        </nav>
      </div>
    </footer>
  );
}
