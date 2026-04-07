import styles from "./hero.module.css";

import Header from "../../layout/header/Header";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Header />
    </div>
  );
};

export default Hero;
