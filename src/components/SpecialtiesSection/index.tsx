'use client'

import ButtonSelect from "./ButtonSelect"
import styles from "./styles.module.scss"
import TitleSubtitle from "./TitleSubtitle"
import { FaPills } from "react-icons/fa"
import { GiHandcuffs } from "react-icons/gi"
import { FaGavel } from "react-icons/fa"
import { MdFamilyRestroom } from "react-icons/md"
import { GiPrisoner } from "react-icons/gi"
import { FaUserSlash } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import Image from "next/image"
import { useState } from "react"

const buttons = [
    {
        id: "drugs",
        icon: <FaPills style={{ fontSize: "32px", paddingBottom: "5px" }} />,
        text: "Drug Charges"
    },
    {
        id: "misdemeanors",
        icon: <GiHandcuffs style={{ fontSize: "32px", paddingBottom: "5px" }} />,
        text: "Misdemeanors"
    },
    {
        id: "crime",
        icon: <FaGavel style={{ fontSize: "32px", paddingBottom: "5px" }} />,
        text: "Criminal Lawer"
    },
    {
        id: "family",
        icon: <MdFamilyRestroom style={{ fontSize: "32px", paddingBottom: "5px" }} />,
        text: "Family Lawer"
    },
    {
        id: "felonies",
        icon: <GiPrisoner style={{ fontSize: "32px", paddingBottom: "5px" }} />,
        text: "Felonies Issu"
    },
    {
        id: "personal-injury",
        icon: <FaUserSlash style={{ fontSize: "32px", paddingBottom: "5px" }} />,
        text: "Persona Injury"
    }
]

const lawerVideos: IVideo[] = [
    {
        id: "drugs",
        src: "/specialties/drugs.webp",
        width: 2596,
        height: 1733,
        alt: "Imagem ilustrativa de Drogas"
    },
    {
        id: "misdemeanors",
        src: "/specialties/misdemeanors.webp",
        width: 2592,
        height: 1944,
        alt: "Imagem ilustrativa de Contravenção"
    },
    {
        id: "crime",
        src: "/specialties/crime.webp",
        width: 2417,
        height: 1546,
        alt: "Imagem ilustrativa de Crime"
    },
    {
        id: "family",
        src: "/specialties/family-lawer.webp",
        width: 1200,
        height: 600,
        alt: "Imagem ilustrativa de Advogado de Família"
    },
    {
        id: "felonies",
        src: "/specialties/felonies.webp",
        width: 3000,
        height: 2000,
        alt: "Imagem ilustrativa de Advogado de Crimes"
    },
    {
        id: "personal-injury",
        src: "/specialties/personal-injury.webp",
        width: 1000,
        height: 667,
        alt: "Imagem ilustrativa de Lesão Pessoal"
    }
]

interface IVideo {
    id: string,
    src: string,
    width: number,
    height: number,
    alt: string
}

export default function SpecialtiesSection() {

    const [typeLawerVideoSelected, setTypeLawerVideoSelected] = useState<IVideo | undefined>(lawerVideos[0])

    function selectVideo(videoId: string) {
        const video = lawerVideos.find(video => video.id === videoId)
        setTypeLawerVideoSelected(video)
        const videoElement = document.getElementById("video");

        if (videoElement) {
            const videoPosition = videoElement.getBoundingClientRect().top + window.pageYOffset;

            // Ajustando a rolagem para 80px acima
            window.scrollTo({
                top: videoPosition - 100,
                behavior: "smooth"
            });
        }
    }

    return (
        <section className={styles.section}>
            <TitleSubtitle title="Criminal Defense Cases we Cover Since 1986" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique justo a mauris convallis, at bibendum nisl tincidunt. Nulla facilisi. Suspendisse potenti. Fusce vehicula, nisi a aliquam luctus." />
            <div className={styles.specialties}>
                <div className={styles.boxButtons}>
                    {buttons.map((item) => <ButtonSelect selected={item.id === typeLawerVideoSelected!.id} onClick={() => selectVideo(item.id)} key={item.id} {...item} />)}
                </div>
                <div id="video" className={styles.image}>
                    <Image
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
                        width={typeLawerVideoSelected?.width}
                        height={typeLawerVideoSelected?.height}
                        src={typeLawerVideoSelected!.src}
                        alt={typeLawerVideoSelected!.alt}
                    />
                    <div className={styles.btnPlay}><FaPlay style={{ color: "#FFFFFF", fontSize: "20px" }} /></div>
                </div>
            </div>
        </section>
    )
}