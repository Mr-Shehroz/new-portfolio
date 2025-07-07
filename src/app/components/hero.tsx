'use client';
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-800 text-white px-6"
    >
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 pb-20 pt-30 md:pt-20">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-yellow-400">Shehroz</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            I'm a <span className="text-yellow-300 font-semibold">Full Stack Developer</span> who loves building fast, responsive, and scalable web applications using modern technologies like:
            <br />
            <span className="text-yellow-300">Next.js, React, Node.js, Express, MongoDB, Tailwind CSS</span> — and more.
          </p>

          <p className="text-md text-gray-300">
            I turn complex problems into beautiful, intuitive digital solutions.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-300 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/me.png" // Make sure to place your photo in public/me.png
              alt="Shehroz"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
