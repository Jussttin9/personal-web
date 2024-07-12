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

function getClassName (deploy: string) {
    if (deploy === "none") {
        return styles.hidden
    } else {
        return styles.depl
    }
}

export default function ProjectCard({ proj_title, image, img_alt, github_link, deploy, children }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                {proj_title}
            </div>
            <Image
                className={styles.img}
                src={image}
                width={500}
                height={300}
                alt={img_alt}
            />
            <div className={styles.desc}>
                {children}
            </div>
            <div className={styles.links}>
                <a href={github_link} target="_blank">
                    <Image 
                        src="github-mark.svg"
                        width={58}
                        height={56}
                        alt="github link"    
                    />
                </a>
                <a href={deploy} target="_blank" className={getClassName(deploy)}>
                    <Image 
                        src="/website.png"
                        width={58}
                        height={56}
                        alt="website link"    
                    /> 
                </a>
            </div>
        </div>
    );
}