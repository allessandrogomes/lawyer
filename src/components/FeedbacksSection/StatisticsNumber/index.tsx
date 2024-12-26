import styles from "./styles.module.scss"

interface IStatisticsNumber {
    title: string,
    subtitle: string
}

export default function StatisticsNumber({ title, subtitle }: IStatisticsNumber) {
    return (
        <div className={styles.number}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}