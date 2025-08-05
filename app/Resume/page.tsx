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
                            <p>Sep 2023 – Jun 2025</p>
                        </div>
                        <div className={styles['name-and-date']}>
                            <p>Bachelor of Science in Computer Science, Cumulative GPA: 3.83/4.00</p>
                            <p>San Diego, CA</p>
                        </div>
                        <ul className={styles.list}>
                            <li><b>Relevant Coursework:</b> Data Structures and Algorithms, Intro to Parallel Computing, Software Engineering, Operating
Systems, Web Client Languages, AI: Search and Reasoning</li>
                        </ul>
                        <div className={styles['name-and-date']}>
                            <p>City College of San Francisco</p>
                            <p>Aug 2021 – Jun 2023</p>
                        </div>
                        <div className={styles['name-and-date']}>
                            <p>Bachelor of Science in Computer Science, Cumulative GPA: 4.00/4.00</p>
                            <p>San Francisco, CA</p>
                        </div>
                        <ul className={styles.list}>
                            <li><b>Relevant Coursework:</b> Programming Fundamentals: Java, Programming Fundamentals: C++</li>
                        </ul>
                    </div>
                    <div className={styles.education}>
                        <h3 className={styles.subtitle}>EXPERIENCE</h3>
                        <hr/>
                        <div className={styles['name-and-date']}>
                            <p>Trulioo</p>
                            <p>Sep 2024 - Present</p>
                        </div>
                        <div className={styles['name-and-date']}>
                            <p>Junior Software Engineer Intern</p>
                            <p>San Diego, CA</p>
                        </div>
                        <ul className={styles.list}>
                            <li>Designed and implemented scalable, maintainable features for a marketing website using Laravel and Tailwind CSS,
streamlining ACF blocks and resolving UX bugs based on user story acceptance criteria, enhancing user experience.</li>
                            <li>Refactored JavaScript files to improve code minification through Cloudflare, leading to a 20% increase in page
performance as measured by load time and total blocking time, and contributing to a 15% rise in user engagement.</li>
                            <li>Optimized OpenSearch queries and analyzers to strengthen tokenization and filtering, increasing search accuracy by 20%
and data throughput by 10%, and delivering faster real-time retrieval of firmographic data from AWS S3.</li>
                            <li>Automated end-to-end UI tests using Cypress in GitLab, validating 25+ user-facing features such as page rendering, iframe
loading, and dropdown filtering, which improved test coverage and reduced deployment risk.</li>
                        </ul>
                    </div>
                    <main className={styles.projects}>
                        <h3 className={styles.subtitle}>PROJECTS</h3>
                        <hr/>
                        <div>
                            <div className={styles['name-and-date']}>
                                <p>GeoGuru</p>
                                <p>Apr 2024 - Aug 2024</p>
                            </div>
                            <div className={styles['name-and-date']}>
                                <p>Backend Developer</p>
                                <p>San Diego, CA</p>
                            </div>
                            <ul className={styles.list}>
                                <li>Designed a travel planner in a team of 6 developers and designers by building a backend server on Vercel with Node.js,
Express.js, MongoDB, and Firebase, and creating RESTful APIs and a database schema to boost query performance.</li>
                                <li>Spearheaded a team of backend developers in implementing API routes using ExpressJS to manage itinerary data stored in MongoDB and integrate event information from various web APIs like Yelp API and OpenTripMap API.</li>
                                <li>Implemented Firebase Authentication with token-based JWTs for secure user authorization and authentication, allowing
seamless access to travel plans across devices, while protecting backend routes from unauthorized access.</li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles['name-and-date']}>
                                <p>E-Waste Website</p>
                                <p>Apr 2024 – Jun 2024</p>
                            </div>
                            <div className={styles['name-and-date']}>
                                <p>Software Engineer</p>
                                <p>San Diego, CA</p>
                            </div>
                            <ul className={styles.list}>
                                <li>Led a team of 4 to build and launch a responsive educational website using React, Next.js, and TypeScript, contributing to
a 15% increase in e-waste compliance by raising student awareness of recycling practices and drop-off locations.</li>
                                <li>Developed a user-friendly interface in Figma and implemented responsive React.js components with Material UI, CSS
Grid, and media queries, ensuring cross-device compatibility through manual testing.</li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles['name-and-date']}>
                                <p>Developer Journal</p>
                                <p>Apr 2024 – Jun 2024</p>
                            </div>
                            <div className={styles['name-and-date']}>
                                <p>Full Stack Developer</p>
                                <p>San Diego, CA</p>
                            </div>
                            <ul className={styles.list}>
                                <li>Created and deployed a static developer journal with HTML/CSS, and JavaScript in collaboration with feature teams,
allowing developers to easily store entries, document design decisions, and record coding workflows.</li>
                                <li>Optimized data storage using custom JavaScript classes and localStorage to speed up journal entry handling, and
integrated the OpenAI API to build an internal chatbot modal that delivers instant, contextual responses to developer
prompts.</li>
                            </ul>
                        </div>
                    </main>
                    <footer className={styles.additional}>
                        <h3 className={styles.subtitle}>Technical Skills</h3>
                        <hr/>
                            <ul>
                                <li><strong>Programming Languages: </strong>Java, C++, Python, JavaScript, TypeScript, PHP, HTML/CSS</li>
                                <li><strong>Tools/Frameworks: </strong>React, Next.js, Express.js, Node.js, Svelte, Laravel, Tailwind CSS, Firebase, MongoDB, Opensearch, Cypress, Docker, WordPress, GitLab, Jira, Figma, Google Suite</li>
                                <li><strong>Technical Competencies: </strong>Performance Optimization, Query Optimization, API Integration, End-to-End Testing, UI/UX Design, Database Management, Cloud Services</li>
                            </ul>
                    </footer>
                </div>
            </motion.div>
        </div>
    );
}