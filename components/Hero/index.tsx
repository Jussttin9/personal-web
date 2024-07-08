"use client"
import styles from "./page.module.css";
import Image from "next/image"
import Nav from "../Nav";
import {motion} from "framer-motion";

export default function Hero() {
    return (
        <div>
            <Nav selected="Home"/>
            <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
            >
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
            </motion.div>
        </div>
    );
}