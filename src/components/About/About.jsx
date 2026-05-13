import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            <span className="text-gradient-purple">Astik Gupta</span>
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'App Developer',
                'Data Analytics',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m an aspiring full-stack developer with hands-on experience in projects using the MERN stack. I enjoy building responsive, user-friendly web apps and continuously learning new technologies.
          </p>
          {/* Resume Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <a
              href="/Resume.pdf"
              download="Astik_Gupta_CV.pdf"
              className="inline-block text-white py-4 px-10 rounded-full mt-8 text-lg font-bold transition duration-300 transform hover:scale-110 animate-glow-pulse"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              }}
            >
              DOWNLOAD CV
            </a>

            {/*             <a
              href="https://drive.google.com/file/d/VIDEO_CV_FILE_ID/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#a855f7] border-2 border-[#a855f7] py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:bg-[#a855f7] hover:text-white"
            >
              WATCH VIDEO CV
            </a> */}
          </div>
        </div>

        {/* Right Side - Static Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative group">
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-500/30 rounded-full overflow-hidden relative z-10 shadow-[0_0_50px_rgba(130,69,236,0.3)] group-hover:border-purple-500 transition-colors duration-500">
            <img
              src={profileImage}
              alt="Astik Gupta"
              className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
