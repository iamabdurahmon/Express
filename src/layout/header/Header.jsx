import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.topInfo}>
          <p>EKSPRESS@mail.com</p>
          <span className={styles.line}></span>
          <p>+1 (333) 000-0000</p>
        </div>
        <div className={styles.headerBtn}>
          <a href="/">Get Quote</a>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <a href="/" className={styles.logo}>
          EXPRESS
        </a>

        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/">Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="/">About Us</a>
            </li>
            <li className={styles.navItem}>
              <a href="/">Services</a>
            </li>
            <li className={styles.navItem}>
              <a href="/">Contact Us</a>
            </li>
            <li className={styles.navItem}>
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
