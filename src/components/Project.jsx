import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "../index.css";
import projectImage1 from "../assets/pmb.png";
import projectImage2 from "../assets/ssms.jpg";
import projectImage3 from "../assets/qr.png";
import projectImage4 from "../assets/curr.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pslick from "../assets/pslick.jpg";

const projects = [
  {
    title: "PMB : PAY MY Bills",
    description:
      "Managed secure user authentication for cardholders and buyers. Implemented an intuitive interface for buyers to discover and request deals",
    techStack: ["HTML", "CSS", "JavaScript", "Flask"],
    demoLink: "https://github.com/Harshad313D/Pay_My_Bills",
    githubLink: "https://github.com/Harshad313D/Pay_My_Bills",
    image: projectImage1,
  },
  {
    title: "SSMS : Student Skills Management System",
    description:
      "Led a web project promoting Students skills and development through web apps, streamlining skills, achievements, progress, result, and grades.",
    techStack: ["HTML", "JavaScript", "Bootstrap", "Django", "Node.js"],
    demoLink:
      "https://github.com/Harshad313D/SSMS-Student-Skill-Management-System",
    githubLink:
      "https://github.com/Harshad313D/SSMS-Student-Skill-Management-System",
    image: projectImage2,
  },
  {
    title: "QR Code Wizard",
    description:
      "This platform generates QR code from your text, you can directly scan it or download it in pdf format.",
    techStack: ["HTML", "CSS", "JS", "API integrations"],
    demoLink: "https://harshad313d.github.io/QR-Wizard/",
    githubLink: "https://github.com/Harshad313D/QR-Wizard",
    image: projectImage3,
  },
  {
    title: "Currency Exchange Rates",
    description:
      "Convert currencies effortlessly with Currency Exchange Rates, a web application that allows users to quickly check exchange rates between different currencies.",
    techStack: ["HTML", "CSS", "JS", "API integrations"],
    demoLink: "https://harshad313d.github.io/Currency-Exchange-Rates/",
    githubLink:
      "https://github.com/Harshad313D/Currency-Exchange-Rates?tab=readme-ov-file",
    image: projectImage4,
  },
];

const projectsSlides = [
  {
    title: "Project 5",
    demoLink: "https://nutri-guide-delta.vercel.app/",
    projectName: "NutriGuide",
  },

  {
    title: "Project 6",
    demoLink: "https://harshad313d.github.io/Quote-Wizard/",
    projectName: "Quote Wizard !",
  },
  {
    title: "Project 7",
    demoLink: "https://dummy-eight-zeta.vercel.app/",
    projectName: "Dummy company Website",
  },
  {
    title: "Project 8",
    demoLink: "https://harshad313d.github.io/Age_calculator/",
    projectName: "Age Calculator",
  },
  {
    title: "Project 9",
    demoLink: "https://harshad313d.github.io/tic-tac-toe-using-JS/",
    projectName: "Tic Tac Toe",
  },
];

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between w-full p-4 rounded-lg border-2 border-black shadow-black mb-4 relative overflow-hidden ${
        index % 2 === 0 ? "bg-blue-300" : "bg-yellow-300"
      } ${inView ? "fadeInUp" : "opacity-0"} group`}
    >
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
      {index % 2 === 0 ? (
        <>
          <div className="md:w-1/2 w-full flex justify-center p-4 z-10">
            <img
              src={project.image}
              alt={project.title}
              className="object-fill w-64 h-64 rounded-full"
            />
          </div>
          <div className="md:w-1/2 w-full p-4 text-left z-10">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <div className="mt-4">
              <span className="text-sm font-semibold">Tech Stack: </span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 rounded-full px-2 py-1 text-xs mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href={project.demoLink}
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 w-full p-4 text-left z-10">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <div className="mt-4">
              <span className="text-sm font-semibold">Tech Stack: </span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 rounded-full px-2 py-1 text-xs mr-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <a
                href={project.demoLink}
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center p-4 z-10">
            <img
              src={project.image}
              alt={project.title}
              className="object-fill w-64 h-64 rounded-full"
            />
          </div>
        </>
      )}
    </div>
  );
};

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative p-6 pt-12 pb-12 gradient-bg">
      <h2 className="text-4xl text-white font-bold text-center mb-6 hover:text-cyan-300 transition duration-300">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <Slider
        {...settings}
        className="bg-[#090a34] p-2 rounded-lg mt-8 shadow-xl"
      >
        {projectsSlides.map((slide, index) => (
          <div key={index}>
            <div
              className="bg-center bg-cover p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              style={{ backgroundImage: `url(${pslick})` }}
            >
              <h3 className="text-2xl font-extrabold text-center text-yellow-400 mb-4">
                {slide.title}
              </h3>
              <div className="text-center space-y-4">
                <p className="text-lg font-semibold text-gray-100">
                  {slide.projectName}
                </p>
                <a
                  href={slide.demoLink}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    View Demo
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
