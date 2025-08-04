import ProjectCard from "./ProjectCard"
import ExperienceCard from "./ExperienceCard"
import { projectData } from "../utils"
import AboutMe from "./AboutMe"

export default function Main() {

    return (
        <main>

            <AboutMe />
            <ExperienceCard />
            <ProjectCard />

        </main>
    )
}
