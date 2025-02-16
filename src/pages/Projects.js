// src/pages/Projects.js
import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectData = [
    { title: "BlockCal", description: "Calendar App", link:"https://example.com"},
    { title: "Hazmapp", description: "Description for Project 2", link: "https://example.com" },
    { title: "Liquid Level Dection", description: "Liquid Photo Measurer", link: "https://example.com" },
];

function Projects() {
    return (
        <section style={{ padding: "2rem" }}>
            <h2>My Projects</h2>
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
