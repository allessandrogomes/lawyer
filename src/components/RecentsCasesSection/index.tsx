'use client'

import styles from "./styles.module.scss"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaLongArrowAltRight } from "react-icons/fa"
import CaseCard from "./CaseCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation } from "swiper/modules"

export default function RecentsCasesSection() {
    return (
        <section className={styles.section} id="casos">
            <h2>Recents Cases Studies</h2>
            <p>Our commitment and dedication to continually move forward enables us to improve our representation and provide you with a service you...</p>
            <div className={styles.boxButtons}>
                <button className="swiper-button-prev"><FaLongArrowAltLeft /></button>
                <button className="swiper-button-next"><FaLongArrowAltRight /></button>
            </div>
            <Swiper
                style={{ marginTop: "50px" }}
                modules={[Navigation]}
                slidesPerView={2.1}
                grabCursor
                spaceBetween={20}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    1024: { slidesPerView: 1.5 },
                    1200: { slidesPerView: 1.75 },
                    1300: { slidesPerView: 2.1 },
                    1500: { slidesPerView: 2.5 },
                }}
            >
                <SwiperSlide>
                    <CaseCard
                        urlImg="/cases/case-1.webp"
                        widthImg={2000}
                        heightImg={2914}
                        altImg="Imagem ilustrativa do Caso Rosalina"
                        title="Won Rosalina"
                        subtitle="Bank & Financial"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CaseCard
                        urlImg="/cases/case-2.webp"
                        widthImg={2957}
                        heightImg={1893}
                        altImg="Imagem ilustrativa do Caso Paris Bank"
                        title="Paris Bank"
                        subtitle="Bank & Financial"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CaseCard
                        urlImg="/cases/case-3.webp"
                        widthImg={2630}
                        heightImg={1755}
                        altImg="Imagem ilustrativa do Caso Courte Jouse"
                        title="Courte Jouse"
                        subtitle="Property"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CaseCard
                        urlImg="/cases/case-4.webp"
                        widthImg={2630}
                        heightImg={1755}
                        altImg="Imagem ilustrativa do Caso Courte Jouse"
                        title="Courte Joe"
                        subtitle="Divorce"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}