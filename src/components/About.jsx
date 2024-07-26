// src/components/About.jsx
import React from "react";
import Slider from "react-slick";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="">
      {/* Background Slider */}
      <div className="relative">
        <Slider {...settings}>
          <div className="h-screen">
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover object-[center_top_30%]"
            />
          </div>
          <div className="h-screen">
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full object-cover object-[center_top_30%]"
            />
          </div>
          <div className="h-screen">
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-full object-cover object-[center_top_30%]"
            />
          </div>
        </Slider>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-5xl font-comic mb-4">Welcome to My Portfolio</h1>
          <h6 className="text-2xl pl-0 font-comic">
            Discover My Projects and Experience
          </h6>
        </div>
      </div>
      {/* About Section */}

      <div className="w-full p-6  text-white bg-about-bg bg-cover bg-center ">
        <div className="max-w-5xl mx-auto pb-6">
          <h1 className="font-bold text-4xl text-center mt-10 text-white hover:text-yellow-300 transition duration-300">
            About Me
          </h1>
          <p className="mt-4 leading-relaxed font-anime text-lg rounded-lg border-l-4 border-r-4 border-green-600 pl-4 overflow-hidden hover:shadow-xl hover:text-yellow-300 transform hover:scale-105 transition duration-300 ">
            Hello! I’m
            <span className="font-comic mx-3 text-cyan-300 text-xl">
              Harshad Dongardive
            </span>
            , originally from Chhatrapati Sambhaji Nagar. I am currently
            pursuing my B.Tech in my final year at CSMSS Chhatrapati Shahu
            College of Engineering, where I have maintained an impressive 8
            CGPA. My educational journey has equipped me with a strong
            foundation in engineering principles and a passion for technology.
          </p>
          <p className="font-anime text-lg leading-relaxed mt-8 rounded-lg border-l-4 border-r-4 border-green-600 pl-4 overflow-hidden hover:shadow-xl hover:text-yellow-300 transform hover:scale-105 transition duration-300">
            I am a passionate software developer with a keen interest in
            building impactful applications. I am ready to face challenges,
            self-motivated, and honest in my work. My mision is to create
            innovative software solutions that make a difference in people's
            lives and contribute to the advancement of technology. I love coding
            and continuously learning new technologies to stay at the forefront
            of the tech industry.
          </p>
          <h2 className="font-bold text-3xl  text-center mt-8 text-black-600 hover:text-yellow-300 transition duration-300">
            My Vision
          </h2>
          <p className="text-lg mt-4 leading-relaxed  rounded-lg border-l-4 border-r-4 border-green-600 pl-4 overflow-hidden hover:shadow-xl hover:text-yellow-300 transform hover:scale-105 transition duration-300">
            My vision is to create and develop amazing products that leave a
            lasting impact. I aspire to work with a well-renowned firm where I
            can leverage my skills and contribute to innovative projects. I am
            committed to improving myself daily, staying updated with new
            technologies, and mastering the latest trends in the tech industry.
            I aim to support my family and friends, ensuring their happiness and
            well-being, while earning a good salary that reflects my dedication
            and expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
