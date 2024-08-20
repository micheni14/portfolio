import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { SiNextdotjs, SiRedux, SiMongodb } from "react-icons/si";

const featuredProjects = [
    {
        name: "Zerohustle",
        description: "A hotel booking system built using Next.js and Node.js with SSR.",
        tech: [<SiNextdotjs />, <DiNodejsSmall />],
        link: "https://zerohustle.vercel.app",
    },
    {
        name: "Virtual Vault",
        description: "An e-commerce platform designed to simplify online shopping.",
        tech: [<DiReact />, <DiNodejsSmall />, <SiMongodb />],
        link: "https://virtualvault.com",
    },
    {
        name: "Digimed",
        description: "A hospital management system with e-commerce features.",
        tech: [<DiReact />, <SiRedux />, <DiNodejsSmall />],
        link: "https://digimed.com",
    },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center lg:text-left">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-blue-900">My Professional Journey</h2>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto lg:mx-0">
            From 2019 to 2023, I worked at KifaruAfrica, a startup where I built scalable applications using modern technologies. In 2023, I transitioned to freelancing, driven by my passion for exploring new technologies and expanding my expertise in frontend, backend, and cloud development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold text-blue-900">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white shadow-xl rounded-lg p-6 transform transition-transform hover:-translate-y-2">
                <h4 className="text-2xl font-bold text-blue-900 mb-3">{project.name}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex items-center space-x-4 mb-4 justify-center">
                  {project.tech.map((icon, i) => (
                    <span key={i} className="text-3xl text-blue-500">{icon}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:text-blue-500 transition-colors duration-300">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Link to More Projects */}
        <div className="text-center mt-16">
          <a 
            href="/projects" 
            className="inline-flex items-center text-lg font-semibold text-blue-700 hover:text-blue-500 transition-colors duration-300"
          >
            View More Projects
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
