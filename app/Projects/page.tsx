'use client';
import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/Nav";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

const currentProjectVersion = "1.0"

export default function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [projects, setProjects] = useState<any []>([])    

    useEffect(() => {
        const cachedProjects = localStorage.getItem("projects");
        const cachedProjectVersion = localStorage.getItem("projectsVersion");

        if (cachedProjects && cachedProjectVersion === currentProjectVersion) {
            setProjects(JSON.parse(cachedProjects));
        } else {
            const fetchedProjects = [
                {
                    id: "GeoGuru",
                    proj_title: "GeoGuru",
                    image: "/geoguru.png",
                    img_alt: "geoguru homepage",
                    github_link: "https://github.com/acmucsd-projects/sp24-hack-team-2",
                    deploy: "none",
                    description: "GeoGuru is a travel planner where users can create their own itinerary. Users enter their desired location of travel, conditions of times to go out, and theme of activities, and this application will provide a list of nearby events that the user can then plan and add to their itinerary. The application requires that users create an account, which allows it to save each user's vacation plans across different devices.",
                    tech_used: "Technologies Used: OpenTripMap API, Yelp API, FireBase, ReactJS, CSS, Javascript, MongoDB, ExpressJS, NodeJS, Figma."
                },
                {
                    id: "E-Waste Website",
                    proj_title: "E-Waste Website",
                    image: "/e-waste.png",
                    img_alt: "e-waste website homepage",
                    github_link: "https://github.com/Jussttin9/ewaste-project",
                    deploy: "https://syn100-ewaste.vercel.app/",
                    description: "The goal of this E-waste website is to promote and educate college students on how to properly dispose of electronic waste both on and off campus. It provides users an intro to what e-waste is and why it's so detrimental to our environment. In addition, it also talks about planned and perceived obsolescence and how they contribute to the rising amounts of unrecycled e-waste. Finally, to make things more fun, we've provided a fun personality quiz that users can take!",
                    tech_used: "Technologies Used: ReactJS, Typescript, NextJS, SCSS, Figma"
                },
                {
                    id: "Developer Journal",
                    proj_title: "Developer Journal",
                    image: "/dev-journal.png",
                    img_alt: "developer journal app",
                    github_link: "https://github.com/cse110-sp24-group32/cse110-sp24-group32",
                    deploy: "https://cse110-sp24-group32.github.io/cse110-sp24-group32/",
                    description: "This developer journal provides a more organized environment for developers to keep all of their thoughts such as code snippets, github issues, design notes, meeting notes, and freeform notes. The journal can store multiple projects and each project can contain an unlimited amount of different notes in it in order for developers to separate their notes based on each project. There are export and import options that allow developers to save their journal and either move it to another device or to send to another developer so they can upload a copy of their journal. Finally, there is also a chatbot feature where users can use a chatbot API and enter a query and receive an appropriate response.",
                    tech_used: "Technologies Used: HTML, CSS, Javascript"
                },
                {
                    id: "Datasaur Royale",
                    proj_title: "Datasaur Royale",
                    image: "/datasaur-royale.png",
                    img_alt: "datasaur royale app preview",
                    github_link: "https://github.com/Jussttin9/DatasaurRoyale",
                    deploy: "https://devpost.com/software/dinosaur-simulation-nite",
                    description: "Datasaur Royale is a battle simulator, on top of Pygame, between different kinds of dinosaurs each with different traits, attempting to find the best traits that allow dinosaurs to survive. Traits may affect their speed, how much energy they can store and consume, their combat capabilities, and other behaviors such as passive or more aggressive behaviors. There are terrain elements such as grass and ground which affect some dinosaur behaviors. Each generation spawns 25 dinosaurs and they fight until 4 are left remaining. These are assumed to be the dinosaurs with the best traits. The next generations will contain the children of the 4 winning dinosaurs from the previous generation. However, each offspring has a random chance to mutate and take on a completely different trait. As generations pass, users can observe which dinosaurs tend to survive through several generations and which die off quickly.",
                    tech_used: "Technologies Used: Python"
                },
                {
                    id: "Haunted Mansion",
                    proj_title: "Haunted Mansion",
                    image: "/option.png",
                    img_alt: "haunted mansion start menu",
                    github_link: "https://github.com/Jussttin9/Haunted-Mansion",
                    deploy: "none",
                    description: "Haunted Mansion is a text-based game that takes users through a story-driven adventure where the protagonist goes through an old, abandoned building. There are a total of 6 different endings that the users can receive based on their actions throughout the game. Try it out to find all the endings!",
                    tech_used: "Technologies Used: C++"
                }
            ];
            localStorage.setItem("projects", JSON.stringify(fetchedProjects));
            localStorage.setItem("projectsVersion", currentProjectVersion);
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
                            <div>
                                {project.description} <br/><br/>
                                <strong>{project.tech_used}</strong>
                            </div>
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
                                    <div>
                                        {projects.find(proj => proj.id === selectedId)?.description || ""}<br/><br/>
                                        <strong>{projects.find(proj => proj.id === selectedId)?.tech_used || ""}</strong>
                                    </div>
                                </ProjectCard>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}