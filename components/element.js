import styles from "../styles/shared.module.css"

export default function Element({children}) {
    return (
        <div className={styles.element}>{children}</div>
    )
}