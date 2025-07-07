'use client';
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-950 via-purple-900 to-indigo-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo or Title */}
        <div className="text-2xl font-bold text-yellow-400">
          Shehroz Khan
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="mailto:shehroz.fullstack@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Mr-Shehroz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Shehroz Khan All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
