import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerTop}>
          {/* Logo va matn bo'limi */}
          <div className={styles.footerInfo}>
            <h2 className={styles.logo}>EKSPRESS</h2>
            <p className={styles.description}>
              At FastGo, we believe in providing our clients with personalized
              and efficient logistics solutions that meet their unique needs.
            </p>
          </div>

          {/* Navigatsiya bo'limi */}
          <div className={styles.footerLinks}>
            <h3>NAVIGATION</h3>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Loyiha bo'limi */}
          <div className={styles.recentProject}>
            <h3>RECENT PROJECT</h3>
            <div className={styles.projectBox}></div>
          </div>

          {/* Obuna bo'limi */}
          <div className={styles.subscribe}>
            <h3>SUBSCRIBE US</h3>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Enter Your Email" />
              <button type="button">SUBSCRIBE NOW</button>
            </div>
          </div>
        </div>

        {/* Uzuq-uzuq chiziq */}
        <div className={styles.divider}></div>

        <div className={styles.footerBottom}>
          <p>COPYRIGHT © 2023 EKSPRESS</p>
          <p>DESIGNED BY TOKOTEMA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
