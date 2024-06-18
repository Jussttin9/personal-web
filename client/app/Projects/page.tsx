import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import Nav from "@/components/Nav";

export default function Projects() {
    return (
        <div>
            <Nav curPage="Projects"/>
            <div className={styles.container}>
            <ProjectCard proj_title="Project 1 goes off of the line" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes. And it goes off the screen. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus accusamus modi voluptatem quibusdam suscipit. Natus beatae pariatur eum expedita magnam assumenda, ab nam, temporibus vitae nostrum reprehenderit atque dolores.
            </ProjectCard>
            <ProjectCard proj_title="Project 2" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 3" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 4" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 5" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 6" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 7" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 8" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 9" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
            <ProjectCard proj_title="Project 10" image="/emolga_and_pachurisu.jpg" img_alt="emolga and pachurisu"  github_link="boo" deploy="boo">
                This is where the description goes.
            </ProjectCard>
        </div>
        </div>
    );
}