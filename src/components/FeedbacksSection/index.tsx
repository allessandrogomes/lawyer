'use client'

import FeedbackCard from "./FeeebackCard"
import StatisticsNumber from "./StatisticsNumber"
import styles from "./styles.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function FeedbacksSection() {
    return (
        <section className={styles.section}>
            <div className={styles.statistics}>
                <div className={styles.boxStatistics}>
                    <StatisticsNumber title="12k+" subtitle="Complete Work" />
                    <StatisticsNumber title="70+" subtitle="Team Members" />
                    <StatisticsNumber title="990+" subtitle="Satisfied Clientes" />
                    <StatisticsNumber title="100+" subtitle="Winning Awards" />
                </div>
            </div>

            <div className={styles.feedbacks}>
                <div className={styles.boxFeedbacks}>
                    <h3>Clients Feedbacks</h3>
                    <Swiper
                        style={{ maxWidth: "100%" }}
                        modules={[Pagination]}
                        slidesPerView={1}
                        grabCursor
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <FeedbackCard
                                image="/feedbacks/feedback-1.webp"
                                autor="Luciano Frederico"
                                message="&quot;Raylaw provides a professional and accountable Family Law practice without fear of the referrers reputation being diversely affected&quot;"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <FeedbackCard
                                image="/feedbacks/feedback-2.webp"
                                autor="Ricardo Salvatore"
                                message="&quot;Raylaw provides a professional and accountable Family Law practice without fear of the referrers reputation being diversely affected&quot;"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <FeedbackCard
                                image="/feedbacks/feedback-3.webp"
                                autor="Luci Alves"
                                message="&quot;Raylaw provides a professional and accountable Family Law practice without fear of the referrers reputation being diversely affected&quot;"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}