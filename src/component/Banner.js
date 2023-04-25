import React from "react";
import styles from "./bannerstyle.module.css";
import Frame3 from "../image/frame3.svg";
import Frame from "../image/Frame.svg";
import Frame2 from "../image/Frame2.svg";
import Rectangle from "../image/Rectangle.svg";

const Banner = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
        <p>
          SKYROCKET YOUR HOTEL BOOKINGS WITH OUR PROVEN MARKETION SYSTEMS - GET
          50+ DIRECT BOOKING IN 90 DAYS!
        </p>
        <div className={styles.frame1}>
            <img src={Frame}/>
        </div>
        <div className={styles.frame2}>
            <img src={Frame2}/>
        </div>
        <div className={styles.frame3}>
            <img src={Frame3}/>
        </div>
      </div>
      <button type="button" className={styles.bannerBtn}>
        Unlock my booking boost now
      </button>
      <div className={styles.bottomContainer}>
        <div className={styles.bannerImgContainer}>
          <div className={styles.bannerImg}>
            <img src={Rectangle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
