import DefaultTitle from "../shared/DefaultTitle"
import styles from "./styles.module.scss"

interface IGenericListLinks {
    title: string,
    links: string[],
    isNotLink?: boolean
}

export default function GenericListLinks({ title, links, isNotLink }: IGenericListLinks) {
    return (
        <div className={styles.container}>
            <DefaultTitle title={title}/>
            <ul className={styles.list}>
                {links.map((item, index) => <li style={ isNotLink ? { opacity: 100 } : {}} key={index}>{item}</li>)}
            </ul>
        </div>
    )
}