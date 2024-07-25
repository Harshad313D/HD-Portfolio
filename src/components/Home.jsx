import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaCertificate, FaClipboardList,FaFileAlt,FaFilePdf, FaGithub, FaGraduationCap, FaUser } from 'react-icons/fa';
import { FaAddressBook, FaCode, FaStar } from 'react-icons/fa6';


function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-8">Harshad Dongardive</h1>
        <input type="text" placeholder="Search about Harshad..." className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400 mb-8" />
        <div className="grid grid-cols-5 gap-4">
          <Link to="/About">
            <div className="text-center flex flex-col items-center ">
              <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out mb-2">
                <FaUser size={24} />
              </div>
              <p>About</p>
            </div>
          </Link>
          <Link to="/Skills">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-green-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out mb-2">
              <FaClipboardList size={24} />
              </div>
              <p>Skills</p>
            </div>
          </Link>
          <Link to="/Experience">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-black text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-900 transition duration-300 ease-in-out mb-2">
              <FaGithub size={24} />
              </div>
              <p>Experience</p>
            </div>
          </Link>
          <Link to="/Project">
            <div className={`text-center flex flex-col items-center`}>
              <div className="rounded-full bg-orange-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out mb-2">
              <FaBriefcase size={24} />
              </div>
            <p>Project</p>
            </div>
          </Link>
          <Link to="/Education">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-purple-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition duration-300 ease-in-out mb-2">
              <FaGraduationCap size={24} />
              </div>
              <p>Education</p>
            </div>
          </Link>
          
          
          
          
          {/* Add more rows as necessary */}
        </div>
        <div className="grid grid-cols-5 gap-4">
         <Link to="/Certification">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out mb-2">
              <FaCertificate size={24} />
              </div>
              <p>Certifications</p>
            </div>
          </Link>
          {/* <Link to="/Code">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-purple-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition duration-300 ease-in-out mb-2">
              <FaCode size={24} /> 
              </div>
              <p>Code Samples</p>
            </div>
          </Link> */}
          
          <Link to="/Resume">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-orange-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition duration-300 ease-in-out mb-2">
                <FaFileAlt size={24} /> {/* Adjust size if needed */}
              </div>
              <p>Resume</p>
            </div>
          </Link>

          
          {/* <Link to="/Extra">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-black text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-900 transition duration-300 ease-in-out mb-2">
              <FaStar size={24} /> 
              </div>
              <p>Extra-Curricular</p>
            </div>
          </Link> */}
          <Link to="/Contact">
            <div className="text-center flex flex-col items-center">
              <div className="rounded-full bg-green-500 text-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out mb-2">
              <FaAddressBook size={24} />
              </div>
              <p>Contact</p>
            </div>
          </Link>
          {/* Add more rows as necessary */}
        </div>
      </div>
    </div>
  );
}

export default Home;
