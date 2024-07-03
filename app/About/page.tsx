"use client";
import styles from "./page.module.css";
import Nav from "@/components/Nav";

export default function About() {
    return (
        <div>
            <Nav curPage="About"/>
            <div className={styles.about}>
                this is the about me section. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima impedit necessitatibus dolorem officia odit excepturi ut vitae fuga, inventore architecto nam consequatur, neque doloremque praesentium, quisquam exercitationem in libero dignissimos!
            </div>
        </div>
    );
}