import React, { useEffect, useState } from "react";
import allProjects from "../Data/projects";
import { Link } from "react-router-dom";

const filters = ["All", "Desigin", "Animation", "Frontend", "Backend"];

const Projects = () => {
  const [selected, setSelected] = useState("All");



  const filteredProjects =
    selected === "All"
      ? allProjects
      : allProjects.filter((project) => project.type === selected);

  return (
    <section className=" py-16 md:px-10">
      {/* Intro */}
      <div className="text-center py-2 md:py-20 mb-12 Mons">
        <h2 className="text-3xl md:text-4xl  font-bold mb-4">
          A collection of my best projects
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          With many years in web development, I acquired extensive experience working
          on projects across multiple industries and technologies. Let me show you my
          best creations.
        </p>
        <button
          onClick={() => window.location.href = "mailto:tusharmohta001@gmail.com"}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold"
        >
          🚀 Hire Me
        </button>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-6 flex-wrap mb-10 text-sm">
        {filters.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(item)}
            className={`pb-1 border-b-2 transition-all duration-200 ${selected === item
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-400 hover:text-blue-300"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group dark:bg-[#2a2a2a] bg-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-black/40 border  border-white/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <Link
                  to={`/projects/${project.title}`}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 hover:bg-blue-500 transition"
                >
                  <span className="text-white">↗</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
