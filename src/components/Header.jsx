export default function Header() {

    return (
        <header>
            <div className="identity-container">
                <div className="identity-text-container">
                    <a href="/">
                        <h1>Peter Burza</h1>
                    </a>
                    <h2>Front End Developer</h2>
                </div>
                <div className="identity-img-container">
                    <img src="/public/profile-img.jpg" alt="profile-image" />
                </div>
            </div>
            <p>I build accessible, pixel-perfect digital experiences for the web.</p>
            <nav>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </nav>
            <div className="social-links-container">
                <a href="https://github.com/peter-burza" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/peter-burza-695958326/" target="_blank"><i
                    className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </header>
    )
}