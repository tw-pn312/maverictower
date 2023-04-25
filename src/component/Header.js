import React from "react";
import styles from "./Headerstyle.module.css";
import Maverick from "../image/Maverick.svg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={Maverick} />
      </div>
      <div className={styles.linkContainer}>
        <a class="active" href="#home" className={styles.linkTab}>
          Home
        </a>
        <a href="#our-service" className={styles.linkTab}>
          Our Service
        </a>
        <a href="#case-studies" className={styles.linkTab}>
          Case Studies
        </a>
        <a href="#blog" className={styles.linkTab}>
          Blog
        </a>
        <a href="#contact" className={styles.linkTab}>
          Contact
        </a>
        <button type="button" className={styles.headerBtn}>
          Schedule a call
        </button>
      </div>
    </div>
  );
};

export default Header;
