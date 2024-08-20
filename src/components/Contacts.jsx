// src/components/Footer.js
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <p className="text-lg font-semibold">Connect with me on social media:</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://linkedin.com"
            className="text-white hover:text-gray-300 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com"
            className="text-white hover:text-gray-300 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-white hover:text-gray-300 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="mt-6 text-sm text-gray-200">
          &copy; 2024 lewis Micheni. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
