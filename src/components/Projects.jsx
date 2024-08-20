import React from "react";
import { FaGithub, FaLink, FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { SiNextdotjs, SiRedux, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section id="projects" className="relative min-h-screen px-6 py-12 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto">
        {/* Back Arrow */}
        <Link to="/" className="flex items-center text-teal-400 hover:text-teal-600 mb-4">
          <FaArrowLeft size={24} className="mr-2" />
          <span className="font-bold text-2xl text-teal-400">Lewis Micheni</span>
        </Link>

        {/* Project Section Title */}
        <h2 className="text-4xl font-semibold text-gray-200 mb-8 text-center lg:text-left">
          My Projects
        </h2>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-teal-400 mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-4">Year: {project.year}</p>
              <div className="flex space-x-4 mb-4">
                {project.tech.map((icon, i) => (
                  <span key={i} className="text-xl text-teal-400">{icon}</span>
                ))}
              </div>
              <a href={project.live} className="text-blue-500 hover:text-blue-700">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

// Project Data
const projects = [
  {
    year: "2024",
    name: "Mech Connect",
    tech: [<DiReact />, <DiNodejsSmall />, <SiMongodb />],
    link: "https://github.com/micheni14",
    live: "https://mechconnect.app",
  },
  {
    year: "2024",
    name: "Virtual Vault",
    tech: [<DiReact />, <DiNodejsSmall />, <SiMongodb />],
    link: "https://github.com/micheni14",
    live: "https://virtualvault.lol/",
  },
  {
    year: "2024",
    name: "Zerohustle",
    tech: [<SiNextdotjs />, <DiNodejsSmall />],
    link: "https://github.com/micheni14",
    live: "https://zerohustle.vercel.app",
  },
  {
    year: "2024",
    name: "Kianjokoma Coffee Factory Management System",
    tech: [<DiReact />, <DiNodejsSmall />, <SiMongodb />],
    link: "https://github.com/micheni14",
    live: "https://kianjokomacoffee.netlify.app",
  },
  {
    year: "2023",
    name: "Tikiti.Africa",
    tech: [<DiReact />, <DiNodejsSmall />],
    link: "https://github.com/micheni14",
    live: "https://tikiti.africa",
  },
  {
    year: "2023",
    name: "Digimed",
    tech: [<DiReact />, <SiRedux />, <DiNodejsSmall />],
    link: "https://github.com/micheni14",
    live: "https://digimed.app",
  },
  {
    year: "2022",
    name: "Building Materials and Construction",
    tech: [<DiReact />, <SiRedux />, <DiNodejsSmall />],
    link: "https://github.com/micheni14",
    live: "https://buildingmaterialsandexcavation.co.ke/",
  },
];