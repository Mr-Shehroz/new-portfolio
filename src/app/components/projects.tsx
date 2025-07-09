'use client';
import React from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Admin Panel Dashboard',
        description: 'An advanced admin dashboard built with React, Tailwind, and Chart.js for managing users, roles, and analytics.',
        image: '/admin.png',
        github: 'https://github.com/Mr-Shehroz/full-admin',
        demo: 'https://full-admin-delta.vercel.app/',
    },
    {
        title: 'Blog CMS',
        description: 'A full-stack blog system using Sanity CMS and Next.js with server-side rendering and custom admin.',
        image: '/blog.png',
        github: 'https://github.com/Mr-Shehroz/full-stack-blog',
        demo: 'https://full-stack-blog-rho.vercel.app/',
    },
    {
        title: 'Ecommerce Website',
        description: 'A full-featured ecommerce store with product listings, cart, checkout, and payment integration using Next.js, Mongodb and Stripe.',
        image: '/ecommerce.png',
        github: 'https://github.com/Mr-Shehroz/full-ecommerce',
        demo: 'https://full-ecommerce-five-inky.vercel.app/',
    },
];

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 text-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 backdrop-blur p-5 rounded-xl shadow-lg hover:shadow-yellow-400/20 transition"
                        >
                            <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-yellow-300 mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                            <div className="flex gap-4">
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm px-3 py-2 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm px-3 py-2 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;