import Image from "next/image"
import styles from "./styles.module.scss"
import { MdOutlineArrowOutward } from "react-icons/md"

interface ICaseCard {
    urlImg: string,
    widthImg: number,
    heightImg: number,
    altImg: string,
    title: string,
    subtitle: string 
}

export default function CaseCard({ urlImg, widthImg, heightImg, altImg, title, subtitle }: ICaseCard) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={urlImg}
                    width={widthImg}
                    height={heightImg}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
                    alt={altImg}
                />
            </div>

            <div className={styles.text}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <button><MdOutlineArrowOutward /></button>
            </div>
        </div>
    )
}