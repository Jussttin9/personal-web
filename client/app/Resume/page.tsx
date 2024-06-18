import Nav from "@/components/Nav";
import styles from "./page.module.css";

export default function Resume() {
    return (
        <div>
            <Nav curPage="Resume"/>
            <div className={styles.container}>
            <div className={styles.info}>
                <h2>name here</h2>
                insert phone number, email, linkedin, github
            </div>
            <div className={styles.education}>
                <h3 className={styles.subtitle}>Education</h3>
                <hr/>
                <div className={styles['name-and-date']}>
                    <p>School 1</p>
                    <p>Date 1</p>
                </div>
                <ul>
                    <li>bullet 1</li>
                    <li>bullet 2</li>
                </ul>
                <div className={styles['name-and-date']}>
                    <p>School 2</p>
                    <p>Date 2</p>
                </div>
                <ul>
                    <li>bullet 1</li>
                    <li>bullet 2</li>
                </ul>
            </div>
            <main className={styles.projects}>
                <h3 className={styles.subtitle}>Projects</h3>
                <hr/>
                <div className={styles.project}>
                    <div className={styles['name-and-date']}>
                        <p>Project Name 1</p>
                        <p>Location 1</p>
                    </div>
                    <div className={styles['name-and-date']}>
                        <p>Role Title 1</p>
                        <p>Date 1</p>
                    </div>
                    <ul>
                        <li>bullet 1</li>
                        <li>bullet 2</li>
                        <li>bullet 3</li>
                        <li>bullet 4</li>
                    </ul>
                </div>
                <div className={styles.project}>
                    <div className={styles['name-and-date']}>
                        <p>Project Name 2</p>
                        <p>Location 2</p>
                    </div>
                    <div className={styles['name-and-date']}>
                        <p>Role Title 2</p>
                        <p>Date 2</p>
                    </div>
                    <ul>
                        <li>bullet 1</li>
                        <li>bullet 2</li>
                        <li>bullet 3</li>
                        <li>bullet 4</li>
                    </ul>
                </div>
            </main>
            <footer className={styles.additional}>
                <h3 className={styles.subtitle}>Additional</h3>
                <hr/>
                    <ul>
                        <li>bullet 1</li>
                        <li>bullet 2</li>
                    </ul>
            </footer>
        </div>
        </div>
    );
}