import ProjectCard from "./ProjectCard"
import ExperienceCard from "./ExperienceCard"

export default function Main() {
    const projectData = [
        {
            id: "movieMatch",
            title: "Movie Match",
            liveVersionLink: "https://peter-movie-match.netlify.app/",
            description: "You want to check some movies including some details? Check the Movie Match searcher.",
            usedTechnology: ["React"],
            imgSrc: "/movie-match-title.png",
            imgAlt: "Movie Match img reference"
        },
        {
            id: "pokedex",
            title: "Pokedéx",
            liveVersionLink: "https://peter-pokedex.netlify.app/",
            description: "Simple Pokemon wiki. You can search there for any pokemon you like, and get a lots of info about it!",
            usedTechnology: ["React"],
            imgSrc: "/pokedex-project-ref.png",
            imgAlt: "Pokedex img reference"
        },
        {
            id: "todoApp",
            title: "Todo App",
            liveVersionLink: "https://peter-todo-app.netlify.app/",
            description: "When you're doing multiple tasks at the same time, there's never a bad idea to note them and track their progression..",
            usedTechnology: ["React"],
            imgSrc: "/todo-app-ref.png",
            imgAlt: "Todo App img reference"
        },
        {
            id: "snaqe",
            title: "SNAQE",
            liveVersionLink: "https://snaqe.netlify.app/",
            description: "I love coding games, so as probably a lot of people, I decided to code an \"old classic\" - Snake Game. Working on this project was also a good way to practice javasript (OOP mostly).",
            usedTechnology: ["Javascript", "HTML", "CSS"],
            imgSrc: "/snake-game-project-ref.png",
            imgAlt: "SNAQE img reference"
        },
        {
            id: "counterPal",
            title: "CounterPal",
            liveVersionLink: "https://peter-counterpal.netlify.app/",
            description: ( // Used this synta because of the <em> tag (it's for make the inside text italic)
                <>
                    For early practice, what can be easier than a counter app.{" "}
                    <em>"Our old friend CounterPal!"</em>{" "}
                    CounterPal was my 1st app where I used React.
                </>
            ),
            usedTechnology: ["React"],
            imgSrc: "/counterpal-ref.png",
            imgAlt: "CounterPal img reference"
        },
        {
            id: "googleHomePageClone",
            title: "Google Home Page Clone",
            liveVersionLink: "https://goopetergle.netlify.app/",
            description: "Project was meant to be as a practice of basic HTML & CSS front-end web tools.",
            usedTechnology: ["HTML", "CSS"],
            imgSrc: "/google-project-ref.png",
            imgAlt: "Google Home Page img reference"
        }
    ]
    const experienceData = [
        {
            timePeriod: "2024 - PRESENT",
            companyLink: "https://www.brueckner-slovakia.com/en/Career",
            companyName: "Design Engineer · Brueckner Slovakia s.r.o.",
            description: "Drawing a technical documentation, approving tech. docs., assembly support, pre-assembly quality control. Making a diagnostics about upcomming issues with the components used in the assembly. Work closely with team of designers and also interact with the assembly workers.",
            usedTechnology: ["SolidEdge", "SAP", "ECTR"]
        },
        {
            timePeriod: "2023 - 2024",
            companyLink: "https://www.ses.sk/en/",
            companyName: "Design Engineer · SES Tlmače a.s.",
            description: "Design, creation, processing and control of production technical documentation. Cooperation with other members of the design team.",
            usedTechnology: ["AutoCAD", "Inventor"]
        }
    ]

    return (
        <main>

            {/* <!-- -------------------------------------------  ABOUT  -------------------------------------------  --> */}

            <section id="about">
                <div className="sticky-header">
                    <h3>ABOUT</h3>
                </div>
                <div className="about-content">
                    <p>I started coding at the age of 15, purely for fun, exploring languages like
                        <a href="https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma" className="anchor-text" target="_blank"> HTML</a>,
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="anchor-text" target="_blank"> CSS</a>,
                        <a href="https://dotnet.microsoft.com/en-us/languages/csharp" className="anchor-text" target="_blank"> C#</a>,
                        <a href="https://www.w3schools.com/PHP/php_intro.asp" className="anchor-text" target="_blank"> PHP</a>,
                        <a href="https://www.geeksforgeeks.org/what-is-mysql/" className="anchor-text" target="_blank"> MySQL</a>, and
                        <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript" className="anchor-text" target="_blank"> JavaScript</a>.
                        Over the years, this hobby helped me develop critical thinking, adaptability, and a creative approach to problem-solving.
                    </p>
                    <p>In the past six months, I've been consistently self-learning modern tools for both front-end and back-end development. This includes
                        <a href="https://www.w3schools.com/whatis/whatis_react.asp" className="anchor-text" target="_blank"> React.js</a>,
                        <a href="https://vuejs.org/guide/introduction.html" className="anchor-text" target="_blank"> Vue.js</a>,
                        <a href="https://nextjs.org/docs" className="anchor-text" target="_blank"> Next.js</a>,
                        <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" className="anchor-text" target="_blank"> Node.js</a>,
                        <a href="https://expressjs.com/" className="anchor-text" target="_blank"> Express.js</a>,
                        <a href="https://www.postgresql.org/about/" className="anchor-text" target="_blank"> PostgreSQL</a>,
                        <a href="https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma" className="anchor-text" target="_blank"> Prisma</a>, and
                        <a href="https://docs.docker.com/get-started/docker-overview/" className="anchor-text" target="_blank"> Docker</a>.
                        These frameworks have expanded my ability to build dynamic user interfaces and scalable systems.
                    </p>
                    <p>My journey as a Junior Full Stack Developer is driven by curiosity, persistence, and a passion for innovation. Every project and challenge is an opportunity to grow, my skills, and contribute meaningful solutions.</p>
                    <p>In my spare time (when i'm not coding...) I usually travel with my wonderful family, or play the violin. Reading or running in the forrest are always great ways to chill out.</p>
                </div>
            </section>

            {/* <!-- -------------------------------------------  EXPERIENCE  -------------------------------------------  --> */}

            <section id="experience">
                <div className="sticky-header">
                    <h3>EXPERIENCE</h3>
                </div>
                <div className="experience-content">
                    {experienceData.map((experience, experienceIndex) => {
                        return (
                            <ExperienceCard key={experienceIndex} experience={experience} />
                        )
                    })}
                    <a href="/">
                        <p className="anchor-text">View Full Resume <i className="fa-solid fa-arrow-right anchor-icon"></i>
                        </p>
                    </a>
                </div>
            </section>

            {/* <!-- -------------------------------------------  PROJECTS  -------------------------------------------  --> */}

            <section id="projects">
                <div className="sticky-header">
                    <h3>PROJECTS</h3>
                </div>
                <div className="projects-content">
                    {projectData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    <a href="">
                        <p className="anchor-text">View Full Project Archive<i className="fa-solid fa-arrow-right anchor-icon"></i>
                        </p>
                    </a>
                </div>
            </section>
        </main>
    )
}
