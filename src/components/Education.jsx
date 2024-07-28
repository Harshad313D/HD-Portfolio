import React, { useState } from "react";
import desk from "../assets/desk.png";
import useIntersectionObserver from "../components/useIntersectionObserver";

const Education = () => {
  const [isVisible1, ref1] = useIntersectionObserver();

  const [activeTab, setActiveTab] = useState("ssc");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" bg-rose-600 pt-12 ">
      <h2 className="text-4xl font-bold text-center mb-6 hover:text-cyan-300">
        My Education
      </h2>

      <div className="flex flex-col lg:flex-row mt-4">
        {/* left side */}
        <div className="lg:w-1/2 px-4">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            <ul
              className="flex whitespace-nowrap text-base font-bold text-center"
              id="default-styled-tab"
              role="tablist"
            >
              <li className="mr-1" role="presentation">
                <button
                  className={`inline-block py-2 px-3 border-b-2 rounded-t-lg transition duration-300 ${
                    activeTab === "ssc"
                      ? "text-white bg-gradient-to-r from-blue-500 to-blue-700 border-blue-600"
                      : "hover:text-cyan-300 hover:border-green-600 dark:hover:text-blue-300"
                  }`}
                  id="ssc-tab"
                  onClick={() => handleTabClick("ssc")}
                  type="button"
                  role="tab"
                  aria-controls="ssc"
                  aria-selected={activeTab === "ssc"}
                >
                  SSC
                </button>
              </li>
              <li className="mr-1" role="presentation">
                <button
                  className={`inline-block py-2 px-3 border-b-2 rounded-t-lg transition duration-300 ${
                    activeTab === "hsc"
                      ? "text-white bg-gradient-to-r from-yellow-500 to-yellow-700 border-yellow-600"
                      : "hover:text-cyan-300 hover:border-green-600 dark:hover:text-blue-300"
                  }`}
                  id="hsc-tab"
                  onClick={() => handleTabClick("hsc")}
                  type="button"
                  role="tab"
                  aria-controls="hsc"
                  aria-selected={activeTab === "hsc"}
                >
                  HSC
                </button>
              </li>
              <li className="mr-1" role="presentation">
                <button
                  className={`inline-block py-2 px-3 border-b-2 rounded-t-lg transition duration-300 ${
                    activeTab === "graduation"
                      ? "text-white bg-gradient-to-r from-fuchsia-500 to-fuchsia-700 border-yellow-600"
                      : "hover:text-cyan-300 hover:border-green-600 dark:hover:text-blue-300"
                  }`}
                  id="graduation-tab"
                  onClick={() => handleTabClick("graduation")}
                  type="button"
                  role="tab"
                  aria-controls="graduation"
                  aria-selected={activeTab === "graduation"}
                >
                  Graduation
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block py-2 px-3 border-b-2 rounded-t-lg transition duration-300 ${
                    activeTab === "certification"
                      ? "text-white bg-gradient-to-r from-green-500 to-green-700 border-green-600"
                      : "hover:text-cyan-300 hover:border-green-600 dark:hover:text-blue-300"
                  }`}
                  id="certification-tab"
                  onClick={() => handleTabClick("certification")}
                  type="button"
                  role="tab"
                  aria-controls="certification"
                  aria-selected={activeTab === "certification"}
                >
                  Certifications
                </button>
              </li>
            </ul>
          </div>

          <div id="default-styled-tab-content ">
            <div
              className={`p-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-400 edu-card  text-white font-serif animate-fadeInUp ${
                activeTab === "ssc" ? "" : "hidden"
              }`}
              id="ssc-content"
              role="tabpanel"
              aria-labelledby="ssc-tab"
            >
              <h3 className="text-xl font-semibold ">
                SSC : Secondary School Certificate (10th Standard)
              </h3>
              <p className="text-lg pt-6">
                <strong>School :</strong> Sanjivani Madhyamik Vidhyalaya.
              </p>
              <p className="text-lg">
                <strong>Percentage:</strong> 89.40 %
              </p>
              <p className="text-lg">
                <strong>Location:</strong> N2-Cidco Aurangabad,
                Maharashtra-431001.
              </p>
              <p className="text-lg">
                <strong>Dates of Attendance:</strong> 2017 - 2018
              </p>
              <p className="text-lg">
                <strong>Extracurricular Activities:</strong> Member of the
                Computer Science Club, Sport participant
              </p>
              <p></p>
              <p></p>
            </div>
            <div
              className={`p-4 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 edu-card text-white font-serif animate-fadeInUp ${
                activeTab === "hsc" ? "" : "hidden"
              }`}
              id="hsc-content"
              role="tabpanel"
              aria-labelledby="hsc-tab"
            >
              <h3 className="text-xl font-semibold">
                HSC : Higher Secondary Certificate (12th standard)
              </h3>
              <p className="text-lg pt-6">
                <strong>Institution:</strong> Vasantrao Naik Mahavidyalaya,
                Aurangabad
              </p>
              <p className="text-lg">
                <strong>Percentage:</strong>60%
              </p>
              <p className="text-lg">
                <strong>Location:</strong> Aurangabad, Maharashtra -431001
              </p>
              <p className="text-lg">
                <strong>Dates of Attendance:</strong> 2019 - 2020
              </p>
              <p className="text-lg">
                <strong>Group:</strong>PCMB
              </p>
              <p className="text-lg">
                <strong>Secondary language:</strong> Information Technology
              </p>
            </div>
            <div
              className={`p-4 rounded-lg bg-gradient-to-r from-fuchsia-700 to-fuchsia-500 edu-card font-serif animate-fadeInUp 
              text-white ${activeTab === "graduation" ? "" : "hidden"}`}
              id="graduation-content"
              role="tabpanel"
              aria-labelledby="graduation-tab"
            >
              <h3 className="text-xl font-semibold">
                Bachelor of Technology : Computer Science Engineering
              </h3>
              <p className="text-lg pt-6">
                <strong>University:</strong> Dr. Babasaheb Ambedkar
                Technological University
              </p>
              <p className="text-lg">
                <strong>College:</strong> CSMSS, Chh. Shahu college Of
                Engineering
              </p>
              <p className="text-lg">
                <strong>CGPA:</strong> 8 (Out of 10)
              </p>
              <p className="text-lg">
                <strong>Location:</strong> Aurangabad, Maharashtra-431001
              </p>
              <p className="text-lg">
                <strong>Dates of Attendance:</strong> 2021 - Present
              </p>
              <p className="text-lg">
                <strong>Branch:</strong> Computer Science Engineering
              </p>
              <p className="text-lg">
                <strong>Extracurricular Activities:</strong> Event
                participation, Group Activities.
              </p>
            </div>
            <div
              className={`p-4 rounded-lg bg-gradient-to-r from-green-600 to-green-400 edu-card text-white font-serif animate-fadeInUp ${
                activeTab === "certification" ? "" : "hidden"
              }`}
              id="certification-content"
              role="tabpanel"
              aria-labelledby="certification-tab"
            >
              <h3 className="text-xl font-semibold">NPTEL Certifications</h3>
              <ul className="list-disc pt-6 pl-5 text-lg">
                <li>
                  <a
                    href="https://drive.google.com/file/d/14hiqApN4mVMvHbDbD0xOyiCrEdONExRn/view"
                    className="text-white hover:text-cyan-300"
                  >
                    NPTEL-Cloud Computing
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1ajHn8dVNsEMEd6Lm60L0uEZ8qgqkv5rQ/view"
                    className="text-white hover:text-cyan-300"
                  >
                    NPTEL-Data Analytics with Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1tWPi-KPTN7TYVLE287DfWJn1ZpsYqkn9/view"
                    className="text-white hover:text-cyan-300"
                  >
                    NPTEL-Compiler Design
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1OcAkkxYZ1TbeG_HnnpMHthQUfFHgRovA/view"
                    className="text-white hover:text-cyan-300"
                  >
                    NPTEL-Database Management System
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1rw63MzZPrXyCSnqvUSuMNgMS4eo3zimO/view"
                    className="text-white hover:text-cyan-300"
                  >
                    NPTEL-Programming in Java
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-cyan-300">
                    NPTEL-Design and analysis of algorithms
                  </a>
                </li>
              </ul>
              <h3 className=" pt-4 text-xl font-semibold">Achievements</h3>
              <li>GATE-2023 : 21.33</li>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="lg:w-1/2 flex justify-center items-center">
          {/* Circle component  */}
          <section
            ref={ref1}
            className={`filter-shadow ${
              isVisible1 ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <div class="main">
              <div class="big-circle ">
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png"
                    alt="web design icon"
                  />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png"
                    alt="game design icon"
                  />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png"
                    alt="game dev icon"
                  />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png"
                    alt="ui-ux icon"
                  />
                </div>
              </div>
              <div class="circle">
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png"
                    alt="app icon"
                  />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png"
                    alt="blockchain icon"
                  />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png"
                    alt="ar-vr icon"
                  />
                </div>
                <div class="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png"
                    alt="artificial intelligence icon"
                  />
                </div>
              </div>
              <div class="center-logo">
                <img
                  src={desk}
                  alt="Education related"
                  className="object-cover filter-shadow"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#facc15"
          fill-opacity="1"
          d="M0,32L48,42.7C96,53,192,75,288,112C384,149,480,203,576,213.3C672,224,768,192,864,197.3C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Education;
