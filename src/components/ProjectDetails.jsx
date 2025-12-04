// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import allProjects from "../Data/projects";

const ProjectDetails = () => {
  const { title } = useParams();

  // decode URL-friendly title (because spaces become %20)
  const decodedTitle = decodeURIComponent(title);
  const project = allProjects.find((p) => p.title === decodedTitle);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Project not found 😕
      </div>
    );
  }

  return (
    <section className=" py-0 px-5 md:px-20 dark:bg-[#292929] bg-gray-100">
      <Link
        to="/projects"
        className="text-blue-500 hover:underline mb-5 inline-block"
      >
        ← Back to Projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-xl shadow-md mb-10"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-600 mb-6">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg leading-relaxed mb-8">
          {project.longDescription}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          🔗 View Live Project
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
