import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => project.webapp && window.open(project.webapp, "_blank")}
            className="group border border-gray-800 bg-[#110d26] backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="w-full h-40 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110d26] via-transparent to-transparent opacity-90"></div>
            </div>
            
            {/* Content Section */}
            <div className="p-5 flex-grow flex flex-col relative z-10 -mt-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block border border-purple-500/30 bg-purple-500/10 text-[10px] font-semibold text-purple-300 tracking-wider uppercase rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-3 border-t border-gray-800/50 flex items-center justify-between text-sm">
                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span className="font-medium">GitHub</span>
                  </a>
                ) : (
                  <div></div>
                )}
                
                {project.webapp ? (
                  <a 
                    href={project.webapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span className="font-medium">Live</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/astikgupta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-purple-500/50 bg-purple-500/10 text-white font-bold rounded-full hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 group"
        >
          <span>View More Projects on GitHub</span>
          <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Work;
