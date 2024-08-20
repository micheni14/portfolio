// src/components/About.js
import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiChakraui, SiElixir, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-5xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-5xl" /> },
  { name: "Chakra UI", icon: <SiChakraui className="text-teal-500 text-5xl" /> },
  { name: "Elixir", icon: <SiElixir className="text-purple-500 text-5xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
];

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between px-6">
      {/* About Text */}
      <div className="lg:w-1/2 lg:pr-10 text-center lg:text-left">
        <h2 className="text-5xl font-bold text-blue-900 mb-4">
          About Me
        </h2>
        <p className="text-xl text-gray-700 mb-6">
          I’m a full-stack developer with 3 years of experience, specializing in React, JavaScript, Node.js, and other modern web technologies. I hold a bachelor's degree in Business and Information Technology, which has equipped me with a unique blend of technical and business acumen.
        </p>
        <p className="text-xl text-gray-700 mb-12">
          My passion lies in creating elegant and efficient solutions to complex problems. I’m driven to continuously improve and deliver high-quality work that not only meets but exceeds expectations.
        </p>
        </div>

        {/* Skills Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <h3 className="text-4xl font-semibold text-blue-900 mb-6 text-center lg:text-left">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg py-6 px-4 transform transition-transform hover:scale-105"
              >
                <div className="mb-4">{skill.icon}</div>
                <p className="text-xl font-semibold text-blue-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
