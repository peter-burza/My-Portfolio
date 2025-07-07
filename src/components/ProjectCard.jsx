export default function ProjectCard(props) {
	const { project } = props
	
	return (
		<div className="projects-card">
			<div className="projects-card-column">
				<a href={project.liveVersionLink} target="_blank">
					<h4 className="anchor-text">{project.title}<i
						className="fa-solid fa-arrow-right anchor-icon"></i></h4>
				</a>
				<p>{project.description}</p>
				<div className="icon-num-container">
					{/* <i className="fa-solid fa-star icon-num"></i>
                  <p>678</p> */}
				</div>
				<div className="used-tools-container">
					{project.usedTechnology.map((val, valKey) => {
						return (
							<p key={valKey}>{val}</p>
						)
					})}
				</div>
			</div>
			<div className="img-container">
				<img src={project.imgSrc} alt="{project.imgAlt}" />
			</div>
		</div>
	)
}
