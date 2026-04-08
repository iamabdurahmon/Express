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
          <a href="#contact">Get Quote</a>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <a href="/" className={styles.logo}>
          EXPRESS
        </a>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
