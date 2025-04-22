import React from "react";
import ProjectCard from "../sections/ProjectCard"; // adjust path based on your folder structure

function Projects() {
  const projectData = [
    {
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.",
      image: "/card-top.jpg", // replace with actual path
      tags: ["photography", "travel", "winter"],
    },
    {
      title: "MCP SQL Bot",
      description:
        "An AI tool that transforms natural language into SQL queries using OpenRouter + PostgreSQL.",
      image: "/card-top.jpg",
      tags: ["ai", "backend", "express"],
    },
    {
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.",
      image: "/card-top.jpg", // replace with actual path
      tags: ["photography", "travel", "winter"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
