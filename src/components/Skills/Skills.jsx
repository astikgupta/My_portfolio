// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>
      <p className="text-gray-400 mt-6 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
          className="h-full"
        >
          <div className="bg-[#110d26] backdrop-blur-md px-8 py-10 rounded-2xl border border-gray-800 h-full hover:border-purple-500/50 shadow-[0_0_20px_1px_rgba(130,69,236,0.1)] transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-widest">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-transparent border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/5 rounded-2xl py-2 px-4 transition-all duration-300 group"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
