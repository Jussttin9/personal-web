'use client';
import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/Nav";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [projects, setProjects] = useState<any []>([])    

    useEffect(() => {
        // Check if projects are already cached
        const cachedProjects = localStorage.getItem("projects");

        if (cachedProjects) {
            // Use cached projects
            setProjects(JSON.parse(cachedProjects));
        } else {
            // Fetch projects data
            const fetchedProjects = [
                {
                    id: "GeoGuru",
                    proj_title: "GeoGuru",
                    image: "/geoguru.png",
                    img_alt: "geoguru homepage",
                    github_link: "https://github.com/acmucsd-projects/sp24-hack-team-2",
                    deploy: "none",
                    description: "This is where the description goes."
                },
                {
                    id: "E-Waste Website",
                    proj_title: "E-Waste Website",
                    image: "/e-waste.png",
                    img_alt: "e-waste website homepage",
                    github_link: "https://github.com/Jussttin9/ewaste-project",
                    deploy: "https://syn100-ewaste.vercel.app/",
                    description: "This is where the description goes."
                },
                {
                    id: "Developer Journal",
                    proj_title: "Developer Journal",
                    image: "/dev-journal.png",
                    img_alt: "developer journal app",
                    github_link: "https://github.com/cse110-sp24-group32/cse110-sp24-group32",
                    deploy: "https://cse110-sp24-group32.github.io/cse110-sp24-group32/",
                    description: "This is where the description goes."
                },
                {
                    id: "Datasaur Royale",
                    proj_title: "Datasaur Royale",
                    image: "/datasaur-royale.png",
                    img_alt: "datasaur royale app preview",
                    github_link: "https://github.com/Jussttin9/DatasaurRoyale",
                    deploy: "https://devpost.com/software/dinosaur-simulation-nite",
                    description: "This is where the description goes."
                },
                {
                    id: "Haunted Mansion",
                    proj_title: "Haunted Mansion",
                    image: "/option.png",
                    img_alt: "haunted mansion start menu",
                    github_link: "https://github.com/Jussttin9/Haunted-Mansion",
                    deploy: "none",
                    description: "This is where the description goes."
                }
            ];

            // Cache projects data
            localStorage.setItem("projects", JSON.stringify(fetchedProjects));
            setProjects(fetchedProjects);
        }
    }, []);

    return (
        <div>
            <Nav curPage="Projects"/>
            <div className={styles.container}>
                {projects.map(project => (
                    <motion.div key={project.id} layoutId={project.id} onClick={() => setSelectedId(project.id)}>
                        <ProjectCard
                            proj_title={project.proj_title}
                            image={project.image}
                            img_alt={project.img_alt}
                            github_link={project.github_link}
                            deploy={project.deploy}
                        >
                            {project.description}
                        </ProjectCard>
                    </motion.div>
                ))}
                <AnimatePresence>
                    {selectedId && (
                        <>
                            <motion.div 
                                className={styles.blur}
                                onClick={() => setSelectedId(null)}
                            />
                            <motion.div className={styles.modal} layoutId={selectedId}>
                                <ProjectCard
                                    proj_title={projects.find(proj => proj.id === selectedId)?.proj_title || ""}
                                    image={projects.find(proj => proj.id === selectedId)?.image || ""}
                                    img_alt={projects.find(proj => proj.id === selectedId)?.img_alt || ""}
                                    github_link={projects.find(proj => proj.id === selectedId)?.github_link || ""}
                                    deploy={projects.find(proj => proj.id === selectedId)?.deploy || ""}
                                >
                                    {projects.find(proj => proj.id === selectedId)?.description || ""}
                                </ProjectCard>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}