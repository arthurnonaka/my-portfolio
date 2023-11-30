import React from "react";
import "../styles/MyProjects.css"
import Project from "../components/Project";
import projectImage from "../images/projeto.jpeg";
import projectImage2 from "../images/projeto2.jpeg";

export default function MyProjects() {
	return (
		<div className="projects-view">
			<div className="projects-title">
				<h1>PROJETOS E EXPERIÊNCIAS</h1>
			</div>
			<div className="projects-content">
				<div className="projects-timeline">
					<div className="job-description"></div>
					<div className="timeline"></div>
				</div>
				<div className="projects-displayer">
					<div className="projects-list">
						<Project name="Projeto 1" imagePath={projectImage} description="Projeto 1 de teste" link="" />
						<Project name="Projeto 2" imagePath={projectImage2} description="Projeto 2 de teste" link="" />
					</div>
					<div className="projects-description"></div>
				</div>
			</div>
		</div>
	)
}