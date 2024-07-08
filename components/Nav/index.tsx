"use client";
import styles from "./page.module.css";
import Link from 'next/link';
import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

interface NavProps {
    selected: string
}

export default function Nav({selected} : NavProps) {
    return (
        <div>
            <nav className={styles['nav-bar']}>
                <Link href='/' className={selected === 'Home' ? styles.selected : styles.page}>Home</Link>
                <Link href='/About' className={selected === 'About' ? styles.selected : styles.page}>About</Link>
                <Link href='/Projects' className={selected === 'Projects' ? styles.selected : styles.page}>Projects</Link>
                <Link href='/Resume' className={selected === 'Resume' ? styles.selected : styles.page}>Resume</Link>
            </nav>
        </div>
        
    );
}