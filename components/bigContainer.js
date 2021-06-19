import styles from "../styles/shared.module.css"

export default function BigContainer({children}) {
    return (
        <div className={styles.bigParent}>
            <div className={styles.bigContainer}>
                {children}
            </div>
        </div>
    )
}