import React from "react";
import "../styles/ProjectDescription.css";

export default function ProjectDescription({ name, description, link = "" }) {
  return (
    <div className="project-description">
      <h2>{name} </h2>
      <p>{description} </p>
      <p>{link}</p>
    </div>
  )
}