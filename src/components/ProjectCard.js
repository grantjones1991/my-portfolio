// src/components/ProjectCard.js
import React from "react";

function ProjectCard({ title, description, link }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "5px" }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectCard;
