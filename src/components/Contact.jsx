import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formAction = form.action;

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset(); // Optional: Clear the form fields
      } else {
        console.error("Form submission failed");
        const errorText = await response.text();
        console.error("Error response:", errorText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-[#0099ff] min-h-screen">
      {/* Left Side: Social Profiles, Address, Contact Details */}
      <div className="lg:w-1/3 p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/harshad-dongardive-054643204/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 bg-white p-1 rounded-xl transition-colors transform hover:scale-105 duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Harshad313D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-800 bg-white p-1 rounded-xl transition-colors transform hover:scale-105 duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 bg-white p-1 rounded-xl transition-colors transform hover:scale-105 duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://x.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 bg-white p-1 rounded-xl transition-colors transform hover:scale-105 duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-white mb-2">
          Address: Chhatrapati Sambhaji Nagar-431001, Maharashtra
        </p>
        <p className="text-white mb-2">Phone: 8624966429</p>
        <p className="text-white mb-2">Email: hdexamples@gmail.com</p>
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-2/3 p-4 ">
        <h2 className="text-xl font-bold mb-2 mt-6 pb-2">Get in Touch</h2>

        <form
          action="https://formsubmit.co/hdpractice0@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md contact-card overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your E-mail id..."
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message..."
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
          <p className="text-center text-gray-300">
            wait for few second to send the message.{" "}
          </p>
        </form>
        {submitted && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
            <p>Your message has been sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
