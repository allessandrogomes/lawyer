import AboutTezbax from "./AboutTezbax"
import GenericListLinks from "./GenericListLinks"
import styles from "./styles.module.scss"

const linksServiceOfferings = [
    "Personal Injury",
    "Domestic Violence",
    "Driving Crimes",
    "Gun Crimes",
    "Personal Injury",
    "Suicide & Rape",
    "Drug Crimes"
]

const linksQuickLinks = [
    "Raylaw Group",
    "Our Business Model",
    "Our Lawyers Team",
    "Recent Cases",
    "Lawyer Blog & News",
    "Get in Touch",
    "Condition"
]

const linksContactInfo = [
    "Fargo Bank, 355 S Grand Ave, Los",
    "Angeles, CA 90071",
    "Email: example@example.com",
    "Phone: 800.123.4567",
    "Fax: 800.123.4567",
    "Get Directions"
]

export default function Footer() {
    return (
        <footer className={styles.section}>
            <div className={styles.boxLinks}>
                <AboutTezbax />
                <GenericListLinks title="Quick Links" links={linksQuickLinks} />
                <GenericListLinks title="Service Offerings" links={linksServiceOfferings} />
                <GenericListLinks isNotLink title="Contact Info" links={linksContactInfo} />
            </div>
            <div className={styles.divisory}></div>
            <h3>&copy; 2025 Raylaw - Consulting Company . All Rights Reserved.</h3>
        </footer>
    )
}