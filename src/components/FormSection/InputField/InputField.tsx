import styles from "./styles.module.scss"

interface IInputField {
    placeholder: string,
    inputType: string
}

export default function InputField({ placeholder, inputType }: IInputField) {
    return (
        <>
            <input className={styles.input} placeholder={placeholder} type={inputType} />
        </>
    )
}