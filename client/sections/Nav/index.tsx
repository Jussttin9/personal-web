import styles from "./page.module.css";

export default function Nav() {
    return (
        <nav className={styles['nav-bar']}>
            <a href="/home" className={styles.page}>Home</a>
            <a href="/about" className={styles.page}>About</a>
            <a href="/contact" className={styles.page}>Contact</a>
        </nav>
    );
}