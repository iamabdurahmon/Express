import { useState } from "react";
import styles from "./hero.module.css";
import heroImg from "../../assets/hero-img.png";
import Header from "../../layout/header/Header";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("tracking");

  return (
    <div className={styles.hero} id="hero">
      <Header />

      <div className={styles.heroDesc}>
        <h3>we are best logistic company</h3>
        <h1>
          Streamline Your Shipping with <br /> Our Cargo Services
        </h1>
        <p>
          Simplify your shipping process and make it more efficient with our
          cargo services. From start to finish, we'll handle everything to
          ensure your cargo arrives safely.
        </p>

        <div className={styles.heroBottom}>
          <img src={heroImg} alt="image" />
          <div className={styles.heroForm}>
            <div className={styles.bottomBtns}>
              <span
                className={activeTab === "tracking" ? styles.active : ""}
                onClick={() => setActiveTab("tracking")}
              >
                Tracking
              </span>
              <span
                className={activeTab === "rate" ? styles.active : ""}
                onClick={() => setActiveTab("rate")}
              >
                Rate & Ship
              </span>
            </div>

            {activeTab === "tracking" && (
              <div className={`${styles.input} ${styles.trackingInput}`}>
                <input type="text" placeholder="TRACKING ID" />
                <button type="submit">TRACK</button>
              </div>
            )}

            {activeTab === "rate" && (
              <div className={`${styles.input} ${styles.rateInput}`}>
                <input type="text" placeholder="From (City, Country)" />
                <button type="submit">GET RATE</button>
              </div>
            )}

            <div className={styles.faqText}>
              <p>
                See the tracking id on shipping document. <span>Help</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
