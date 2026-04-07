import styles from "./about.module.css"

const About = () => {
  return <div className={styles.Wrapper}>
    <div className="Content">
      <div className={styles.Title}>
        <span className={styles.Sub}>
          About Us
        </span>

        <h1 className={styles.Heading}>
          Empowering Your Business with Tailored Logistics Solutions
        </h1>
      </div>
    </div>
  </div>;
};

export default About;
