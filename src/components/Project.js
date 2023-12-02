import React from "react";
import "../styles/Project.css";

function Project({ name, imagePath, description, link = "", onClick }) {
    const handleProjectClick = () => {
      onClick({ name, description, link });
    };
  
    return (
      <div onClick={handleProjectClick}>
        <img className="project-img" src={imagePath} alt={name} data-name={name} />
      </div>
    );
  }

export default Project;