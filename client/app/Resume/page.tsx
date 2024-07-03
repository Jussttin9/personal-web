"use client";
import Nav from "@/components/Nav";
import styles from "./page.module.css";

export default function Resume() {
    return (
        <div>
            <Nav curPage="Resume"/>
            <div className={styles.container}>
            <div className={styles.info}>
                <h2>Justin Tran</h2>
                <p>(415)361-0866 <strong>&#183;</strong> jr.tran79@gmail.com <strong>&#183;</strong> <a href="https://www.linkedin.com/in/justin-tran9/" target="_blank" className={styles.link}>https://www.linkedin.com/in/justin-tran9/</a> <strong>&#183;</strong> <a href="https://github.com/Jussttin9" target="_blank" className={styles.link}>https://github.com/Jussttin9</a></p>
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
                    <li>Relevant Coursework: Software Tools and Techniques, Theory of Computation, Software Engineering</li>
                </ul>
            </div>
            <main className={styles.projects}>
                <h3 className={styles.subtitle}>PROJECTS</h3>
                <hr/>
                <div className={styles.project}>
                    <div className={styles['name-and-date']}>
                        <p>GeoGuru</p>
                        <p>La Jolla, CA</p>
                    </div>
                    <div className={styles['name-and-date']}>
                        <p>Backend Developer</p>
                        <p>March 2024 - Present</p>
                    </div>
                    <ul className={styles.list}>
                        <li>Cooperated with a team to create a travel planner using ReactJS, CSS, Javascript, MongoDB, ExpressJS, and NodeJS focusing on establishing an intuitive itinerary platform for users to easily discover and plan nearby events</li>
                        <li>Spearheaded a team of backend developers in implementing API routes using ExpressJS to manage itinerary data stored in MongoDB and integrate event information from various web APIs like Yelp API and OpenTripMap API.</li>
                        <li>Implemented Firebase for user authorization and authentication, allowing users to access their travel plans across different devices.</li>
                    </ul>
                </div>
                <div className={styles.project}>
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
                <div className={styles.project}>
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
                <div className={styles.project}>
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
                        <li><strong>Programming: </strong>Java, C++, HTML, CSS, Javascript, Python, ReactJS, ExpressJS, NodeJS, NextJS, MongoDB, Typescript</li>
                        <li><strong>Skills: </strong>Figma, Google Suite, Git</li>
                    </ul>
            </footer>
        </div>
        </div>
    );
}