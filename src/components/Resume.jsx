import React from "react";
import { FaUserTie } from "react-icons/fa6";
import me from "../assets/me.png";
import useIntersectionObserver from "../components/useIntersectionObserver";

const Resume = () => {
  const [isVisible1, ref1] = useIntersectionObserver();
  const [isVisible2, ref2] = useIntersectionObserver();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Harshad_Dongardive_8624966429.pdf";
    link.download = "Harshad_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-6 gap-4 bg-yellow-400 pt-8 md:pt-12">
      {/* Header */}
      <div className="col-span-full md:col-start-2 md:col-span-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center hover:text-white transition duration-300">
          My Resume
        </h2>
      </div>
      {/* Left Column */}

      <div
        ref={ref1}
        className={`col-span-1 md:col-start-1 md:col-end-3 text-center pt-8 md:pt-16 relative z-20 ${
          isVisible1 ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        {/* <div className="col-span-1 md:col-start-1 md:col-end-3 text-center pt-8 md:pt-16 relative z-20"> */}
        <div className="flex items-center justify-center mb-4">
          <FaUserTie size={54} className="mr-4 rounded-lg" color="#0099ff" />

          <p className="text-2xl font-comic p-4 bg-white animate-pulse rounded-full w-fit relative z-50">
            Hey there,
          </p>
        </div>
        <h4 className="text-2xl md:text-3xl font-bold mb-4">I am HARSHAD</h4>
        <p className="mb-6 font-anime text-lg md:text-xl">
          Contact me for opportunities!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-8">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
            onClick={handleDownload}
          >
            Download Resume
          </button>
          <a
            href="/Harshad_Dongardive_8624966429.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto">
              View Resume
            </button>
          </a>
        </div>
      </div>
      <div
        ref={ref1}
        className={`col-span-1 md:col-end-7 md:col-span-2 flex justify-center items-center z-20 ${
          isVisible1 ? "animate-slideInRight" : "opacity-0"
        }`}
      >
        {/* Right Column */}
        {/* <div className="col-span-1 md:col-end-7 md:col-span-2 flex justify-center items-center z-20"> */}
        <img
          src={me}
          alt="Education related"
          className="object-fill w-full h-auto filter-shadow"
        />
      </div>
      {/* SVG Wave */}
      <div className="col-span-full relative z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
          style={{ transform: "scale(1.5)" }}
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,122.7C274.3,139,343,149,411,176C480,203,549,245,617,224C685.7,203,754,117,823,69.3C891.4,21,960,11,1029,16C1097.1,21,1166,43,1234,80C1302.9,117,1371,171,1406,197.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Resume;
