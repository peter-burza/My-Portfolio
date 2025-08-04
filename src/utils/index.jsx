const projectData = [
    {
        id: "echoes",
        title: "Echoes",
        liveVersionLink: "https://peter-echoes.netlify.app/",
        description: "Echoes is an app where you can create a personal library of neatly organized and searchable notes and ideas. Simply - notes app",
        usedTechnology: ["Next.js"],
        imgSrc: "/echoes-ref.png",
        imgAlt: "Echoes img reference"
    },
    {
        id: "unalive",
        title: "Unalive",
        liveVersionLink: "https://peter-unalive.netlify.app/",
        description: "Funny way of tracking your life time. I made this just for practicing the React framework..",
        usedTechnology: ["React"],
        imgSrc: "/unalive-ref.png",
        imgAlt: "Unalive img reference"
    },
    {
        id: "harmonyToMastery",
        title: "Harmony to Mastery",
        liveVersionLink: "https://peter-harmony-to-mastery.netlify.app/",
        description: "This page has been created for reference purposes only. You can take a look at my TailwindCSS practice ;)",
        usedTechnology: ["HTML", "TailwindCSS"],
        imgSrc: "/harmony-to-mastery-ref.png",
        imgAlt: "Harmony to Mastery img reference"
    },
    {
        id: "caffiend",
        title: "Caffiend",
        liveVersionLink: "https://peter-caffiend.netlify.app/",
        description: "If you're a one of us (the Coffie Drinker!) this web app is made with love just for you. You can track you're caffeine consumption.",
        usedTechnology: ["React", "Firebase"],
        imgSrc: "/caffiend-ref.png",
        imgAlt: "Caffiend img reference"
    },
    {
        id: "movieMatch",
        title: "Movie Match",
        liveVersionLink: "https://peter-movie-match.netlify.app/",
        description: "You want to check some movies including some details? Check the Movie Match searcher.",
        usedTechnology: ["React"],
        imgSrc: "/movie-match-ref.png",
        imgAlt: "Movie Match img reference"
    },
    {
        id: "pokedex",
        title: "Pokedéx",
        liveVersionLink: "https://peter-pokedex.netlify.app/",
        description: "Simple Pokemon wiki. You can search there for any pokemon you like, and get a lots of info about it!",
        usedTechnology: ["React"],
        imgSrc: "/pokedex-ref.png",
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
        imgSrc: "/snaqe-ref.png",
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
        imgSrc: "/google-ref.png",
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


export { projectData, experienceData }