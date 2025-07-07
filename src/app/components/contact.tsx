'use client';
import React from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">
          Contact Me
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          Have a project, job opportunity, or question? Reach out and let’s talk.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/your-form-id" // <-- Replace with your Formspree ID
          method="POST"
          className="space-y-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition flex justify-center items-center gap-2"
          >
            <Send size={18} /> Send Message
          </button>
        </form>

        {/* Contact Info / Social Links */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <a href="mailto:shehroz.fullstack@gmail.com" className="hover:text-yellow-300 transition">
              shehroz.fullstack@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github size={18} />
            <a href="https://github.com/Mr-Shehroz" target="_blank" className="hover:text-yellow-300 transition">
              @Mr-Shehroz
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={18} />
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-yellow-300 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
