import { experienceData } from "../utils"

export default function ExperienceCard() {

    return (
        <section id="experience">
            <div className="sticky-header">
                <h3>EXPERIENCE</h3>
            </div>
            <div className="experience-content">
                {experienceData.map((experience, experienceIndex) => {
                    return (
                        <div key={experienceIndex} className="experience-card">
                            <p className="time-period">{experience.timePeriod}</p>
                            <div className="experience-card-column">
                                <a href={experience.companyLink} target="_blank">
                                    <h4 className="anchor-text">{experience.companyName}<i
                                        className="fa-solid fa-arrow-right anchor-icon"></i></h4>
                                </a>
                                <p>{experience.description}</p>
                                <div className="used-tools-container">
                                    {experience.usedTechnology.map((val, valKey) => {
                                        return (
                                            <p key={valKey}>{val}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <a href="/Peter_Burza_CV.pdf" target="_blank">
                    <p className="anchor-text">View Full Resume <i className="fa-solid fa-arrow-right anchor-icon"></i></p>
                </a>
            </div>
        </section>
    )
}