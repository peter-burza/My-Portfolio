export default function ExperienceCard(props) {
    const { experience } = props

    return (
        <div className="experience-card">
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
}