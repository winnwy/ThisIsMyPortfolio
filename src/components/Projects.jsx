import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="py-20 border-b border-neutral-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-neutral-300 mb-12">Projects</h2>
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Project Description */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-neutral-300 mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                
                {/* My Contributions */}
                {project.contributions && (
                  <div className="text-neutral-400 mb-4">
                    <h4 className="text-sm font-semibold text-neutral-300 mb-2">
                      My Contributions:
                    </h4>
                    <ul className="list-disc pl-5">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;