import styles from "./styles.module.scss"

interface IDefaultTitle {
    title: string
}

export default function DefaultTitle({ title }: IDefaultTitle) {
    return (
        <h4 className={styles.title}>{title}</h4>
    )
}