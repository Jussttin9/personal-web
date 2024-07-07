"use client";
import styles from "./page.module.css";
import Link from 'next/link';
import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

export default function Nav() {
    const tabs = [
        { label: 'Home' },
        { label: 'About' },
        { label: 'Projects' },
        { label: 'Resume' }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div>
            <nav className={styles['nav-bar']}>
                    {tabs.map((item) => (
                        <Link
                            key={item.label}
                            href={item.label === 'Home' ? '/' : `/${item.label}`}
                            className={`${item === selectedTab ? "selected" : ""} ${styles.page}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.label}`}
                        </Link>
                    ))}
            </nav>
        </div>
        
    );
}