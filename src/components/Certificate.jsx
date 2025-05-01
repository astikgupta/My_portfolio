import React from "react";
import { certificates } from "../constants";
import Tilt from "react-parallax-tilt";

const Certificate = () => (
  <section
    id="certificates"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-gradient-to-b from-[#100720] via-[#190c2f] to-[#100720]"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">CERTIFICATION</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        Verified certifications showcasing my skills and learning achievements
      </p>
    </div>

    {/* Certificates Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
      {certificates.map((cert) => (
        <Tilt
          key={cert.id}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div className="bg-[#1c1b2a] border border-[#8245ec50] rounded-2xl shadow-lg hover:shadow-[0_0_20px_#8245ecaa] transition duration-300 overflow-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-contain bg-white p-4"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.issueDate}</p>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[#8245ec] hover:underline"
              >
                View Certificate
              </a>
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Certificate;
