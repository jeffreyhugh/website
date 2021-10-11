import styles from "../styles/shared.module.css"

export default function SmallElement({children}) {
    return (
        <div className={styles.smallElement}>{children}</div>
    )
}