import styles from "./styles.module.scss"

export default function IntroSection() {
    return (
        <section className={styles.section}>

            <div className={styles.boxLeftContent}>
                <h1>Best Law Expart In The Erea</h1>
                <button>Talk with Expart</button>
                <h4>Ready to take action?</h4>
                <p>088 345 889 344</p>
            </div>

            <div className={styles.boxRightContent}>
                <h3>Book An Appointment</h3>
                <p>Rinting and typesetting industryLorem Ipsum has been the</p>

                <h3>Get Free Case Evaluation</h3>
                <p>Rinting and typesetting industryLorem Ipsum has been the</p>
                
                <h3>Pay Bil Online</h3>
                <p>Rinting and typesetting industryLorem Ipsum has been the</p>
            </div>
        </section>
    )
}