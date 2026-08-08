import React, { useState }  from "react";
import styles from "../Home/Home.module.css";
import onejpg from "../Home/images/one.jpg";
import twojpg from "../Home/images/two.jpg";
import threejpg from "../Home/images/three.jpg";
import fourjpg from "../Home/images/four.jpg";
import fivejpg from "../Home/images/five.jpg";
import sixjpg from "../Home/images/six.jpg";
import sevenjpg from "../Home/images/seven.jpg";
import eightjpg from "../Home/images/eight.jpg";
import ninejpg from "../Home/images/nine.jpg";
import tenjpg from "../Home/images/ten.jpg";
import elevenjpg from "../Home/images/eleven.jpg";
import twelvejpg from "../Home/images/twelve.jpg";
import thirteenjpg from "../Home/images/thirteen.jpg";
import fourteenjpg from "../Home/images/fourteen.jpg";
import fifteenjpg from "../Home/images/fifteen.jpg";
import sixteenjpg from "../Home/images/sixteen.jpg";
import seventeenjpg from "../Home/images/seventeen.jpg";
import eighteenjpg from "../Home/images/eighteen.jpg";

const Home = () => {
  const [showFirstSet, setShowFirstSet] = useState(true);

  const toggleImageSet = () => {
    setShowFirstSet((prev) => !prev);
  };

  return (
    <div className={styles.home_div}>
      <h1>მოგონებები</h1>
      <div className={styles.images_div}>
        {showFirstSet ? (
          <>
            <img
              className={styles.images}
              src={onejpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={twojpg}
              alt="Description of the image2"
            />
            <img
              className={styles.images}
              src={threejpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={fourjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={fivejpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={sixjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={sevenjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={eightjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={ninejpg}
              alt="Description of the image1"
            />
          </>
        ) : (
          <>
            <img
              className={styles.images}
              src={tenjpg}
              alt="Description of the image10"
            />
            <img
              className={styles.images}
              src={elevenjpg}
              alt="Description of the image11"
            />
            <img
              className={styles.images}
              src={twelvejpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={thirteenjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={fourteenjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={fifteenjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={sixteenjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={seventeenjpg}
              alt="Description of the image1"
            />
            <img
              className={styles.images}
              src={eighteenjpg}
              alt="Description of the image1"
            />
          </>
        )}
      </div>
      <button className={styles.change_btn} onClick={toggleImageSet} >შეცვალე ფოტოები</button>
    </div>
  );
};

export default Home;
