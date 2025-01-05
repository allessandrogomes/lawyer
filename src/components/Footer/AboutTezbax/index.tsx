import DefaultTitle from "../shared/DefaultTitle"
import styles from "./styles.module.scss"
import { PiPhoneCallFill } from "react-icons/pi"

export default function AboutTezbax() {
    return (
        <div className={styles.container}>
            <DefaultTitle title="AboutTezbax"/>
            <p>Is a team highly experienced transactional and litigation attorneys from some of the nation&apos;s biggest and most elite law firms. Get Free Case Review.</p>
            <div className={styles.phoneNumber}>
                <PiPhoneCallFill className={styles.icon} />
                <div>
                    <h5>Ready to take action?</h5>
                    <p>+088 345 889 344</p>
                </div>
            </div>
        </div>
    )
}