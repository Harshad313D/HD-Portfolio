import React from "react";
import useIntersectionObserver from "../components/useIntersectionObserver";

const Experience = () => {
  const [isVisible1, ref1] = useIntersectionObserver();
  const [isVisible2, ref2] = useIntersectionObserver();
  return (
    <div className="min-h-screen bg-[#9B59B6] font-anime ">
      {/* Header */}
      <header className="text-center pt-12 pb-6 ">
        <h1 className="text-4xl font-bold text-center mb-10 hover:text-cyan-300 transition duration-300">
          Experience
        </h1>
        <p className="text-xl mt-4 italic text-yellow-300 ">
          Oops, I am a fresher passing out in 2024.
        </p>
        <p className="text-white italic ">But I have internship experience. </p>
      </header>
      {/* Main Content */}

      {/* <section
        ref={ref3}
        className={`container mx-auto px-4 pt-6 pb-12 ${
          isVisible1 ? "animate-zoomIn" : "opacity-0"
        }`}
      > */}
      <section className="container mx-auto px-4 pt-6 pb-12">
        <div className="bg-[#2ECC71] text-gray-700 p-6 rounded-lg contact-card">
          <h2 className="text-4xl font-bold mb-4 text-center text-yellow-300">
            Internships
          </h2>

          <div className="space-y-6">
            <div
              ref={ref1}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible1 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              {/* <div className="bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300"> */}
              <h3 className="text-3xl font-semibold text-blue-600">
                MHTECHIN Pune
              </h3>
              <p className="text-lg mt-2 font-semibold">
                Software Developer Intern (WFO)
              </p>
              <p className="mt-2">
                Worked on deploying static and dynamic webpages, managing
                projects with Git/GitHub and Docker, following SDLC, utilizing
                Figma for design, and handling client sites.
              </p>
              <p className="mt-2">
                <strong>Project:</strong> RMCC Website, MHTECHIN Website, ERP,
                CRM, Employee Tracking
              </p>
            </div>

            <div
              ref={ref2}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible1 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              {/* <div className="bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300"> */}
              <h3 className="text-3xl font-semibold text-blue-600">
                Oasis Infobyte
              </h3>
              <p className="text-lg mt-2 font-semibold">
                Web Developer Intern (WFH)
              </p>
              <p className="mt-2">
                Worked on deploying static and dynamic webpages,Created Some
                cool web apps.It was a task based internship and i completed the
                following tasks, and got appreciasion and internship completion
                letter.
              </p>
              <p className="mt-2">
                <strong>Project:</strong>Landing Page, Portfolio Website,
                Temperature Converter.
              </p>
            </div>
          </div>
          <p className="text-lg text-center text-cyan-300 pt-6">
            Looking forward to new opportunities!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
