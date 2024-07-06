"use client";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Nav curPage="About"/>
            <div className={styles.container}>
                <Image
                    src="/about.png"
                    alt="a picture of me!"
                    height={700}
                    width={525}
                />
                <div className={styles.about}>
                    this is the about me section. 
                </div>
            </div>
        </div>
    );
}