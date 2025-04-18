"use client";
import Nav from "@/components/Nav";
import styles from "./page.module.css";
import {motion} from "framer-motion";
import Image from "next/image";

export default function Resume() {
    return (
        <div>
            <Nav selected="Resume"/>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className={styles.pdf}>
                    <a href="Resume.pdf" target="_blank">
                        View Resume PDF
                        <Image
                            className={styles.redirect}
                            src="arrow-top-right.svg"
                            alt="redirect arrow"
                            height={25}
                            width={25}
                        />
                    </a>
                </div>
                
                <hr/>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <h2>Justin Tran</h2>
                        <p>(415) 361-0866 <strong>&#183;</strong> jr.tran79@gmail.com <strong>&#183;</strong> <a href="https://www.linkedin.com/in/justin-tran9/" target="_blank" className={styles.link}>https://www.linkedin.com/in/justin-tran9/</a> <strong>&#183;</strong> <a href="https://github.com/Jussttin9" target="_blank" className={styles.link}>https://github.com/Jussttin9</a></p>
                    </div>
                    <div className={styles.education}>
                        <h3 className={styles.subtitle}>EDUCATION</h3>
                        <hr/>
                        <div className={styles['name-and-date']}>
                            <p>University of California, San Diego</p>
                            <p>La Jolla, CA</p>
                        </div>
                        <div className={styles['name-and-date']}>
                            <p>Bachelor of Science in Computer Science</p>
                            <p>Expected 2025</p>
                        </div>
                        <ul className={styles.list}>
                            <li>Cumulative GPA: 3.91</li>
                            <li>Relevant Coursework: Data Structures and Algorithms, Theory of Computation, Software Engineering, Web Client Languages</li>
                        </ul>
                    </div>
                    <div className={styles.education}>
                        <h3 className={styles.subtitle}>EXPERIENCE</h3>
                        <hr/>
                        <div className={styles['name-and-date']}>
                            <p>Trulioo</p>
                            <p>San Diego, CA</p>
                        </div>
                        <div className={styles['name-and-date']}>
                            <p>Junior Software Engineer Intern</p>
                            <p>September 2024 - Present</p>
                        </div>
                        <ul className={styles.list}>
                            <li>Designed scalable, reusable, and robust solutions using PHP and Tailwind CSS to implement and maintain a marketing website based on user story acceptance criteria in a team-based environment, improving overall performance by 20% and engagement by 15%.</li>
                            <li>Developed and optimized OpenSearch queries to enhance an internal business tool, enabling real-time retrieval of business data from AWS S3, resulting in an increase of search accuracy by 20% and improving performance by 10%.</li>
                            <li>Created end-to-end UI tests using Cypress, automating user workflows, validating over 25 different features.</li>
                        </ul>
                    </div>
                    <main className={styles.projects}>
                        <h3 className={styles.subtitle}>PROJECTS</h3>
                        <hr/>
                        <div>
                            <div className={styles['name-and-date']}>
                                <p>GeoGuru</p>
                                <p>La Jolla, CA</p>
                            </div>
                            <div className={styles['name-and-date']}>
                                <p>Backend Developer</p>
                                <p>April 2024 - August 2024</p>
                            </div>
                            <ul className={styles.list}>
                                <li>Cooperated with a team to create a travel planner using ReactJS, CSS, Javascript, MongoDB, ExpressJS, and NodeJS focusing on establishing an intuitive itinerary platform for users to easily discover and plan nearby events</li>
                                <li>Spearheaded a team of backend developers in implementing API routes using ExpressJS to manage itinerary data stored in MongoDB and integrate event information from various web APIs like Yelp API and OpenTripMap API.</li>
                                <li>Implemented Firebase for user authorization and authentication, allowing users to access their travel plans across different devices.</li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles['name-and-date']}>
                                <p>E-Waste Website</p>
                                <p>La Jolla, CA</p>
                            </div>
                            <div className={styles['name-and-date']}>
                                <p>Software Engineer</p>
                                <p>April 2024 - June 2024</p>
                            </div>
                            <ul className={styles.list}>
                                <li>Led a team of developers and researchers to implement and deploy an informative website using Figma, ReactJS, NextJS, and Typescript aimed at educating college students about proper electronic waste disposal practices resulting in a 15% increase in campus-wide adherence to e-waste disposal guidelines.</li>
                                <li>Crafted and developed a user-friendly UI using Figma and created reusable ReactJS components to establish seamless user-experiences for various different devices.</li>
                                <li>Integrated NextJS UI components to enhance content organization and increase user engagement through a personality quiz.</li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles['name-and-date']}>
                                <p>Developer Journal</p>
                                <p>La Jolla, CA</p>
                            </div>
                            <div className={styles['name-and-date']}>
                                <p>Full Stack Developer</p>
                                <p>April 2024 - June 2024</p>
                            </div>
                            <ul className={styles.list}>
                                <li>Collaborated with various feature teams to construct a journal for developers using HTML, CSS, and Javascript, allowing developers to easily store and document their designs and coding decisions.</li>
                                <li>Optimized data storage through custom Javascript classes and localStorage, improving efficiency and execution when importing and exporting data.</li>
                                <li>Integrated WebAPIs such as the ChatGPT API to implement a chatbot, allowing developers to receive real-time responses to prompts.</li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles['name-and-date']}>
                                <p>Hackathon Dinosaur Evolution Simulator Project</p>
                                <p>La Jolla, CA</p>
                            </div>
                            <div className={styles['name-and-date']}>
                                <p>Software Engineer</p>
                                <p>April 2024</p>
                            </div>
                            <ul className={styles.list}>
                                <li>Won 5th place overall out of 300+ participants in a competitive hackathon.</li>
                                <li>Led a team to develop a genetic algorithm, in Python, to model dinosaur behavior and evolution, to determine the most optimal dinosaur for a given environment.</li>
                                <li>Collaborated closely with a team to implement modular environments using Pygame and contributed to the development of randomized level designs.</li>
                                <li>Designed and tested a dynamic dinosaur behavior using machine learning algorithms and breeding system that allows for continuous evolution over several generations.</li>
                            </ul>
                        </div>
                    </main>
                    <footer className={styles.additional}>
                        <h3 className={styles.subtitle}>ADDITIONAL</h3>
                        <hr/>
                            <ul>
                                <li><strong>Programming: </strong>Java, C++, HTML, CSS, Javascript, Python, ReactJS, ExpressJS, NodeJS, NextJS, MongoDB, Typescript, Tailwind CSS, PHP, Svelte</li>
                                <li><strong>Skills: </strong>Figma, Google Suite, GitLab, WordPress, Cypress, Jira</li>
                            </ul>
                    </footer>
                </div>
            </motion.div>
        </div>
    );
}