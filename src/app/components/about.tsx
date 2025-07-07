'use client';
import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-indigo-800 via-purple-900 to-blue-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image / Illustration */}
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/about-img.png" // Place your image in /public folder
              alt="About Shehroz"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            About Me
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            I'm <strong>Shehroz</strong>, a <strong>Full Stack Developer</strong> based in Pakistan with a strong background in both frontend and backend technologies.
          </p>
          <p className="text-md text-gray-300">
            I specialize in <span className="text-yellow-300">Next.js, React, Node.js, Express, MongoDB</span> and love building scalable web apps and APIs. I’m also experienced in CMS systems like WordPress, and I manage servers and deployment pipelines.
          </p>
          <p className="text-md text-gray-300">
            I'm passionate about writing clean code, optimizing performance, and delivering beautiful user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
