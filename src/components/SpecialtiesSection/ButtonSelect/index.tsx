import { MouseEventHandler, ReactElement } from "react"
import styles from "./styles.module.scss"

interface IButtonSelect {
    icon: ReactElement,
    text: string,
    selected: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function ButtonSelect({ icon, text, selected, onClick }: IButtonSelect) {
    return (
        <button style={selected ? { backgroundColor: "#50223C", color: "#FFFFFF" } : {}} onClick={onClick} className={styles.button}>{icon}<p>{text}</p></button>
    )
}