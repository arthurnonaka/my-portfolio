import React, { useState } from "react";
import "../styles/MyProjects.css"
import Project from "../components/Project";
import ProjectDescription from "../components/ProjectDescription";
import projectImage from "../images/projeto.jpeg";
import projectImage2 from "../images/projeto2.jpeg";
import Timeline from "../components/Timeline";

export default function MyProjects() {
	const [selectedProject, setSelectedProject] = useState(null);

	const handleProjectClick = ({ name, description, link }) => {
		setSelectedProject({ name, description, link });
	};
	return (
		<div className="projects-view">
			<div className="projects-title">
				<h1>PROJETOS E EXPERIÊNCIAS</h1>
			</div>
			<div className="projects-content">
				<div className="projects-timeline">
					<div className="job-description"></div>
					<div className="timeline">
						<Timeline />
					</div>
				</div>
				<div className="projects-displayer">
					<div className="projects-list">
						<Project name="Projeto 1" imagePath={projectImage} description="Projeto 1 de teste" link="" onClick={handleProjectClick} />
						<Project name="Projeto 2" imagePath={projectImage2} description="Projeto 2 de teste" link="" onClick={handleProjectClick} />
					</div>
					<div className="projects-description">
						{selectedProject && (
							<ProjectDescription name={selectedProject.name} description={selectedProject.description} link={selectedProject.link} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}