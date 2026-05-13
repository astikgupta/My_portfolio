import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-12 pb-8 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-900 bg-[#050414]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          Astik Gupta
        </h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Certification", id: "certificates" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-purple-400 text-sm font-medium transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex justify-center gap-8 mt-10">
          {[
            { 
              icon: <FaGithub />, 
              link: "https://github.com/astikgupta",
              hoverColor: "hover:text-white"
            },
            { 
              icon: <FaLinkedin />, 
              link: "https://www.linkedin.com/in/astik-gupta-a625b1244/",
              hoverColor: "hover:text-[#0077B5]"
            },
            { 
              icon: <FaWhatsapp />, 
              link: "https://wa.me/916387701460",
              hoverColor: "hover:text-[#25D366]"
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-gray-500 ${item.hoverColor} transition-all duration-300 transform hover:scale-125`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="mt-12 pt-8 border-t border-gray-900">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Astik Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
