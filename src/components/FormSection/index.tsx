'use client'

import InputField from "./InputField/InputField"
import styles from "./styles.module.scss"
import { FaPhone } from "react-icons/fa"

export default function FormSection() {
    return (
        <section className={styles.section}>
            <div className={styles.containerForm}>
                <h2>Request a Free Consultation</h2>
                <p>Fill out the form below to ricieve a free and confidential initial consultation</p>
                <form onSubmit={event => event.preventDefault()}>
                    <InputField placeholder="Enter You Name" inputType="text" />
                    <InputField placeholder="Enter You Email" inputType="text" />
                    <InputField placeholder="Your Number" inputType="text" />
                    <InputField placeholder="Subject" inputType="text" />
                    <textarea placeholder="Your Message" className={styles.textArea} />
                    <button>Send your Request</button>
                </form>
            </div>
            <div className={styles.btnCall}>
                <p>Make a Emergency Call Now</p>
                <button><FaPhone style={{ color: "#FAFAFA", fontSize: "25px"}}/></button>
            </div>
        </section>
    )
}