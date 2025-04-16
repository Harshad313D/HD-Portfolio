import React from "react";
import useIntersectionObserver from "../components/useIntersectionObserver";

const Experience = () => {
  const [isVisible1, ref1] = useIntersectionObserver();
  const [isVisible2, ref2] = useIntersectionObserver();
  const [isVisible3, ref3] = useIntersectionObserver();
  const [isVisible4, ref4] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-[#9B59B6] font-anime">
      {/* Header */}
      <header className="text-center pt-12 pb-6">
        <h1 className="text-4xl font-bold text-center mb-10 hover:text-cyan-300 transition duration-300">
          Experience
        </h1>
        {/* <p className="text-xl mt-4 italic text-yellow-300">
          Oops, I am a fresher passing out in 2024.
        </p>
        <p className="text-white italic">But I have internship experience. </p> */}
      </header>

      {/* Internship Section */}
      <section className="container mx-auto px-4 pt-6 pb-12">
        <div className="bg-[#2ECC71] text-gray-700 p-6 rounded-lg contact-card">
          <h2 className="text-4xl font-bold mb-4 text-center text-yellow-300">
            Internships
          </h2>

          <div className="space-y-6">
            {/* Techsurya */}
            <div
              ref={ref3}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible3 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-semibold text-blue-600">
                Tech Surya IT Solutions
              </h3>
              <p className="text-lg mt-2 font-semibold">
                Full Stack Developer Intern
              </p>
              <p className="mt-2">
                Worked on multiple admin dashboards, handling both frontend and
                backend using React, Node.js, and MongoDB. Implemented Redux
                Toolkit for efficient state management and developed optimized
                REST APIs to ensure smooth data flow. Collaborated closely with
                the team to deliver seamless and well-integrated features
              </p>
              <p className="mt-2">
                <strong>Project:</strong>{" "}
                <i>
                  {" "}
                  Yogarshiyog | Harimangal Hospital | Maus Global Multiservices{" "}
                </i>
              </p>
            </div>

            {/* MHTECHIN */}
            <div
              ref={ref1}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible1 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
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
                <strong>Project:</strong>{" "}
                <i>
                  RMCC Website | MHTECHIN Website | ERP | CRM | Employee
                  Tracking
                </i>
              </p>
            </div>

            {/* Exlearn */}
            <div
              ref={ref4}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible4 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-semibold text-blue-600">
                Exlearn Technologies
              </h3>
              <p className="text-lg mt-2 font-semibold">
                Cloud and DevOps Training and Internship{" "}
              </p>
              <p className="mt-2">
                Gained hands-on experience in Cloud Administration, AWS
                Solutions , and DevOps practices. Developed foundational
                knowledge in Linux and Networking Basics. .
              </p>
              <p className="mt-2">
                <strong>Project:</strong>{" "}
                <i>EC2 | S3 | IAM |And other services</i>
              </p>
            </div>
            {/* Oasis Infobyte */}
            <div
              ref={ref2}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible2 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-semibold text-blue-600">
                Oasis Infobyte
              </h3>
              <p className="text-lg mt-2 font-semibold">
                Web Developer Intern (WFH)
              </p>
              <p className="mt-2">
                Worked on deploying static and dynamic webpages, created some
                cool web apps. It was a task-based internship where I completed
                the tasks and received appreciation and an internship completion
                letter.
              </p>
              <p className="mt-2">
                <strong>Project:</strong>{" "}
                <i>Landing Page | Portfolio Website | Temperature Converter.</i>
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
