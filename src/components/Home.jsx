// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 animate-pulse">
              Hi, I'm a Senior Frontend Engineer
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Specializing in HTML5, CSS3 React, and JavaScript
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto md:mx-0 text-gray-400">
            I build pixel-perfect, engaging, and accessible digital experiences 
            that bring ideas to life and create lasting impressions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Get in Touch
            </a>
            <Link 
              to="/projects" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            >
              View My Work
            </Link >
          </div>
        </div>
        <div className="md:w-1/2">
          <svg
            className="w-full h-auto max-w-lg mx-auto"
            viewBox="0 0 786 786"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M393 0C175.95 0 0 175.95 0 393C0 610.05 175.95 786 393 786C610.05 786 786 610.05 786 393C786 175.95 610.05 0 393 0ZM393 714.545C215.318 714.545 71.4545 570.682 71.4545 393C71.4545 215.318 215.318 71.4545 393 71.4545C570.682 71.4545 714.545 215.318 714.545 393C714.545 570.682 570.682 714.545 393 714.545Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M393 142.909C254.591 142.909 142.909 254.591 142.909 393C142.909 531.409 254.591 643.091 393 643.091C531.409 643.091 643.091 531.409 643.091 393C643.091 254.591 531.409 142.909 393 142.909ZM393 571.636C294.273 571.636 214.364 491.727 214.364 393C214.364 294.273 294.273 214.364 393 214.364C491.727 214.364 571.636 294.273 571.636 393C571.636 491.727 491.727 571.636 393 571.636Z"
              fill="url(#paint1_linear)"
            />
            <path
              d="M393 285.818C333.682 285.818 285.818 333.682 285.818 393C285.818 452.318 333.682 500.182 393 500.182C452.318 500.182 500.182 452.318 500.182 393C500.182 333.682 452.318 285.818 393 285.818ZM393 428.727C373.045 428.727 357.273 412.955 357.273 393C357.273 373.045 373.045 357.273 393 357.273C412.955 357.273 428.727 373.045 428.727 393C428.727 412.955 412.955 428.727 393 428.727Z"
              fill="url(#paint2_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="393"
                x2="786"
                y2="393"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4299E1" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="142.909"
                y1="393"
                x2="643.091"
                y2="393"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4299E1" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="285.818"
                y1="393"
                x2="500.182"
                y2="393"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4299E1" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Home;