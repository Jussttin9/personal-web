import styles from "./page.module.css";
import Image from "next/image"
import Nav from "../Nav";
import {motion} from "framer-motion";

export default function Hero() {
    return (
        <div>
            <Nav/>
            <div className={styles.container}>
                <div className={styles.title}>
                    Justin&apos;s Portfolio
                </div>
                <div className={styles.image}>
                    <Image 
                    className={styles.img}
                    src="/me.jpg"
                    alt="a picture of me!"
                    width={525}
                    height={700}
                    priority
                    />
                </div>
            </div>
        </div>
    );
}