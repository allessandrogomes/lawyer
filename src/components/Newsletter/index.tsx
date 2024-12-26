import styles from "./styles.module.scss"
import { LuBellRing } from "react-icons/lu"

export default function NewsLetter() {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <LuBellRing className={styles.bellIcon}/>
                <h3>Stay Always In Touch & Get Update</h3>
            </div>

            <div className={styles.form}>
                <input placeholder="Enter your email"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}