import styles from "./styles.module.scss"
import { FaStar } from "react-icons/fa"

interface IFeedbackCard {
    image: string,
    autor: string,
    message: string
}

export default function FeedbackCard({ image, autor, message }: IFeedbackCard) {
    return (
        <div className={styles.card}>
            <div style={{ backgroundImage: `url(${image})` }} className={styles.image}></div>
            <p>{autor}</p>
            <div className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className={styles.message}>{message}</p>
        </div>
    )
}