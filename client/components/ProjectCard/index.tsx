import { ReactNode } from "react";
import styles from "./page.module.css";
import Image from "next/image";

interface ProjectCardProps {
    proj_title: string,
    image: string,
    img_alt: string,
    github_link: string,
    deploy: string
    children: ReactNode
}

/**
 * TODO:
 * - format card
 * - retrieve github icon
 * - decide on deploy icon
 * - create function where deploy icon only appears if provided with link
 * - dropdown for description maybe?
 * - choose a different background project card color
 */

export default function ProjectCard({ proj_title, image, img_alt, github_link, deploy, children }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                {proj_title}
            </div>
            <Image
                src={image}
                width={300}
                height={200}
                alt={img_alt}
            />
            <div className={styles.desc}>
                {children}
            </div>
            <div className={styles.links}>
                <a href={github_link}>github link</a>
                <a href={deploy}>deployed web</a>
            </div>
        </div>
    );
}