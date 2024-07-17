"use client";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";

export default function About() {
    return (
        <AnimatePresence>
            <div>
                <Nav selected="About"/>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.container}>
                        <Image
                            className={styles.pic}
                            src="/about.png"
                            alt="a picture of me!"
                            height={500}
                            width={375}
                        />
                        <div className={styles.about}>
                            <p>
                                Hi my name is Justin Tran. I am from San Francisco and I am a Computer Science Major at University of California, San Diego.<br/><br/>

                                I&apos;ve always been amazed by the amount of work that indie developers had put into their work to make users have enjoyable and memorable experiences. Because of this I decided to try coding my first project in high school, a quiz that allows users familiar with a certain tv show to answer questions and test their knowledge. I then expanded by making a text-based game and a dynamic battle simulation. In addition to games, I was also interested in creating websites that could help users in everyday life. <br/><br/>
                                
                                I&apos;ve been using my free time to learn a lot more about web development. In that time, I&apos;ve been able to create useful applications that assist users organize their thoughts and even spread awareness to current issues like climate change. I enjoy combining both of my interests by trying to implement appealing or fun elements to my websites such as an activity or simply by adding a more aesthetic and more interactive look to the website. <br/><br/>
                                
                                I do also enjoy doing other things such as snowboarding, swimming, drawing, playing games &#40;i.e. Stardew Valley, Honkai Star Rail, and CyberPunk&#41;. I also really like listening to K-Pop and watching anime. <br/><br/>
                                
                                If you like JOJO&apos;s Bizarre Adventure or K-Pop let me know, we&apos;ll have a lot to talk about! :&#41;
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles['link-container']}>
                        <a href="https://github.com/Jussttin9" target="_blank"><Image
                            src="github-mark.svg"
                            alt="github icon"
                            height={45}
                            width={45}
                        /></a>
                        <a href="https://www.linkedin.com/in/justin-tran9/" target="_blank"><Image
                            src="/LI-In-Bug.png"
                            alt="linkedin icon"
                            height={45}
                            width={50}
                        /></a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}