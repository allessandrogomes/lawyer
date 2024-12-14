import styles from "./styles.module.scss"

interface ITitleSubtitle {
    title: string,
    subtitle: string
}

export default function TitleSubtitle({ title, subtitle }: ITitleSubtitle) {
    return (
        <div className={styles.titleSubtitle}>
            <h2>{title}</h2>
            <div className={styles.divisory}></div>
            <p>{subtitle}</p>
        </div>
    )
}