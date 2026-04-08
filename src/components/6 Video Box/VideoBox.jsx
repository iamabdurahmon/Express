import styles from "./VideoBox.module.css"

const VideoSection = () => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Content}>
                <h1 className={styles.Title}>
                    SEE IT IN ACTION
                </h1>

                <p className={styles.SubText}>
                    Watch Our Video to Get a Clear Understanding of How It Works
                </p>

                <div className={styles.PlayBtn}>
                    <div className={styles.PlayIcon}></div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection