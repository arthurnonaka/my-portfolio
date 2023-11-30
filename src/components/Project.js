import React from "react";
import "../styles/Project.css";

function Project({ name, imagePath, description, link = "" }) {
    const getDescription = () => {
        return description;
    }

    const getLink = () => {
        return link;
    }

    return (
        <div>
            <img className="project-img" src={imagePath} alt={name} data-name={name}/>
        </div>
    )
}

export default Project;