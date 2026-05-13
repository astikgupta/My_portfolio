import React from "react";
import { experiences } from "../../constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my freelance work and the projects I have delivered for clients
        </p>
      </div>

      {/* Experience Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="group border border-gray-800 bg-[#110d26] backdrop-blur-md rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col h-full"
          >
            {/* Header: Logo and Info */}
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 bg-white/5 rounded-xl overflow-hidden flex-shrink-0 border border-gray-700 group-hover:border-purple-500/30 transition-colors">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {experience.role}
                </h3>
                <h4 className="text-purple-300 font-medium text-sm mt-0.5">
                  {experience.company}
                </h4>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider font-semibold">
                  {experience.date}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {experience.desc}
            </p>

            {/* Skills and Link */}
            <div className="mt-auto pt-6 border-t border-gray-800/50 flex flex-col gap-4">
              <div>
                <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block border border-purple-500/20 bg-purple-500/5 text-[10px] font-bold text-purple-300/80 uppercase rounded-md px-2 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {experience.webapp && (
                <a 
                  href={experience.webapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold text-sm transition-colors mt-2"
                >
                  Visit Live Site <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
