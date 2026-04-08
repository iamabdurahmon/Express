import styles from "./howitworks.module.css"
import Vektor from "../../assets/package.png"
import { useState } from "react"

const HowItWorks = () => {

    const [ImgUrl, setImgUrl] = useState("https://djqizrxa6f10j.cloudfront.net/apps/thirdparty/request-a-quote/raq-header.png")

    return (
        <div className={styles.Wrapper}>
            <div className={styles.Context}>
                <div className={styles.ImageDiv}>
                    <img src={ImgUrl} alt="" />
                </div>

                <div className={styles.Title}>
                    <span className={styles.SubHeading}>
                        How It Works
                    </span>

                    <h1 className={styles.Heading}>
                        Simplify Your Shipping Experience with Our Easy Step Process
                    </h1>

                    <p className={styles.Text}>
                        At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.
                    </p>
                </div>
            </div>

            <hr className={styles.Line} />

            <div className={styles.Step}>
                <div className={styles.Card} onClick={() => {
                    setImgUrl("https://djqizrxa6f10j.cloudfront.net/apps/thirdparty/request-a-quote/raq-header.png")
                }}>
                    <div className={styles.IconDiv}>
                        <span className={styles.Label}>
                            Step 1
                        </span>
                        <img src={Vektor} className={styles.VektorImg} alt="" />
                    </div>
                    <h2 className={styles.Heading2}>Request a Quote</h2>
                    <p className={styles.CardText}>
                        At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </p>
                </div>

                <div className={styles.Card} onClick={() => {
                    setImgUrl("https://www.powerthesaurus.org/_images/terms/provide_details-synonyms-2.png")
                }}>
                    <div className={styles.IconDiv}>
                        <span className={styles.Label}>
                            Step 2
                        </span>
                        <img src={Vektor} className={styles.VektorImg} alt="" />
                    </div>
                    <h2 className={styles.Heading2}>Provide Details</h2>
                    <p className={styles.CardText}>
                        At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </p>
                </div>
                <div className={styles.Card} onClick={() => {
                    setImgUrl("https://www.redeemclothingrecycling.com/blog/wp-content/uploads/2020/06/blog1.jpg")
                }}>
                    <div className={styles.IconDiv}>
                        <span className={styles.Label}>
                            Step 3
                        </span>
                        <img src={Vektor} className={styles.VektorImg} alt="" />
                    </div>
                    <h2 className={styles.Heading2}>Schedule Pick-Up</h2>
                    <p className={styles.CardText}>
                        At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default HowItWorks