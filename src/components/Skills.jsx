import React from "react";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaPython,
  FaWindows,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  BiLogoFlask,
  BiLogoFigma,
  BiLogoGoogleCloud,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import "../index.css";
import { FaGit } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiAppwrite } from "react-icons/si";

const skills = {
  frontend: [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-3xl text-orange-500" />,
      level: 90,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-3xl text-blue-500" />,
      level: 85,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-3xl text-yellow-500" />,
      level: 80,
    },
    {
      name: "React",
      icon: <FaReact className="text-3xl text-blue-400" />,
      level: 75,
    },
    {
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss className="text-3xl text-teal-400" />,
      level: 85,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-3xl text-purple-500" />,
      level: 80,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      level: 50,
    },
    {
      name: "Python",
      icon: <FaPython className="text-3xl text-blue-500" />,
      level: 80,
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-3xl text-blue-500" />,
      level: 70,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className="text-3xl text-green-500" />,
      level: 50,
    },
    {
      name: "Flask",
      icon: <BiLogoFlask className="text-3xl text-blue-500" />,
      level: 50,
    },
  ],
  cloud: [
    {
      name: "AWS",
      icon: <FaAws className="text-3xl text-black bg-orange-500 rounded-xl" />,
      level: 60,
    },
    {
      name: "GCP",
      icon: (
        <BiLogoGoogleCloud className="text-3xl text-blue-500 bg-white rounded-xl" />
      ),
      level: 45,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-3xl text-blue-500 bg-white rounded-xl" />,
      level: 65,
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite className="text-3xl text-pink-500 " />,
      level: 50,
    },
  ],
  tools: [
    {
      name: "GitHub",
      icon: <FaGithub className="text-3xl text-black" />,
      level: 90,
    },
    {
      name: "Git",
      icon: <FaGit className="text-3xl text-orange-600" />,
      level: 85,
    },
    {
      name: "VS Code",
      icon: <VscVscode className="text-3xl text-blue-500" />,
      level: 80,
    },
    {
      name: "Figma",
      icon: <BiLogoFigma className="text-3xl text-purple-500" />,
      level: 65,
    },
    {
      name: "Windows",
      icon: <FaWindows className="text-3xl text-blue-500" />,
      level: 70,
    },
    {
      name: "Linux",
      icon: <FaLinux className="text-3xl text-black bg-white rounded-full" />,
      level: 60,
    },
  ],
};

const SkillCard = ({ title, skills, animation }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white shadow-lg p-5 rounded-lg comic-card h-full flex flex-col justify-between transform transition duration-300 ${
        inView ? animation : ""
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4 ">
          <div className="flex items-center">
            {skill.icon}
            <h3 className="ml-4 text-xl font-bold">{skill.name}</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full mt-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
              style={{
                width: `${skill.level}%`,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Skills = () => (
  <div className="min-h-screen bg-lime-500 ">
    <div className="py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 hover:text-cyan-300 transition duration-300">
        My Skills
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <SkillCard
          title="Frontend "
          skills={skills.frontend}
          animation="animate-slideInLeft"
        />
        <SkillCard
          title="Backend"
          skills={skills.backend}
          animation="animate-zoomIn"
        />
        <SkillCard
          title="Cloud"
          skills={skills.cloud}
          animation="animate-zoomIn"
        />
        <SkillCard
          title="Tools"
          skills={skills.tools}
          animation="animate-slideInRight"
        />
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#000080"
        fillOpacity="1"
        d="M0,64L48,96C96,128,192,192,288,234.7C384,277,480,299,576,277.3C672,256,768,192,864,186.7C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
);

export default Skills;
