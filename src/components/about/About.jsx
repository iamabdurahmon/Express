import styles from "./about.module.css"
import Icon from "../../assets/anchor.png"

const About = () => {
  return <div className={styles.Wrapper}>
    <div className={styles.Info}>


      <div className="Content">
        <div className={styles.Title}>
          <span className={styles.Sub}>
            About Us
          </span>

          <h1 className={styles.Heading}>
            Empowering Your Business with Tailored Logistics Solutions
          </h1>
        </div>

        <p className={styles.Text}>
          At FastGo, we believe in providing our clients with personalized and <br /> efficient logistics solutions that meet their unique needs. With years of <br /> experience and a team of experts, we are dedicated to empowering your <br /> business with seamless shipping experiences.
        </p>

        <button className={styles.btn}><span className={styles.SubHeading}>Learn More</span></button>
      </div>

      <div className={styles.ReplaceThis}>
        <div className={styles.FunFact}>
          <div className={styles.Icon}>
            <span>
              <img src={Icon} alt="" className={styles.AnchorIcon} />
            </span>

            <h1 className={styles.Heading2}>
              647 +
            </h1>

            <button className={styles.TextBox}>
              <span className={styles.BtnText}>
                Awwards Winning
              </span>
            </button>
          </div>
        </div>
      </div>



    </div>
    <div className={styles.Cards}>

      <div className={styles.card}>
        <div className={styles.number}>01</div>
        <div className={styles.line}></div>
        <div className={styles.text}>EXPERTISE AND EXPERIENCE</div>
      </div>

      <div className={styles.card}>
        <div className={styles.number}>02</div> 
        <div className={styles.line}></div>
        <div className={styles.text}>COMMITTED TO QUALITY</div>
      </div>

      <div className={styles.card}>
        <div className={styles.number}>03</div>
        <div className={styles.line}></div>
        <div className={styles.text}>COMPREHENSIVE SERVICES</div>
      </div>
    </div>
  </div>;
};

export default About;
