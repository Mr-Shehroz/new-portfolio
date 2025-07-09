'use client';
import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'Full Stack Developer',
        company: 'Taiba Institute',
        period: 'May 2025 – Present',
        description:
            'Building and maintaining full-stack web applications using Next.js, React, Node.js, and MongoDB. Handling API integration, cloud deployment, and performance optimization.',
        current: true,
    },
    {
        role: 'Full Stack Developer (Intern)',
        company: 'CodeWave Solutions',
        period: 'Jan 2024 – Dec 2024',
        description:
            'Completed a 1-year internship where I developed full-stack web applications using React, Next.js, Node.js, and MongoDB. Contributed to both frontend UI components and backend APIs, worked in Agile teams, and gained hands-on experience with Git, REST APIs, and deployment workflows.',
    },
    {
        role: 'WordPress Developer',
        company: 'Remote Projects',
        period: '2025 – Present',
        description:
            'Customized WordPress themes, improved SEO, and managed full hosting setups for clients across various industries.',
    },
];

const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="bg-gradient-to-b from-blue-950 via-purple-900 to-indigo-900 text-white py-24 px-4"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16">
                    Experience
                </h2>

                <VerticalTimeline lineColor="#facc15">
                    {experiences.map((exp, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={exp.period}
                            icon={<Briefcase />}
                            iconStyle={{
                                background: exp.current ? '#facc15' : '#eab308',
                                color: 'black',
                            }}
                            contentStyle={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 4px 20px rgba(250, 204, 21, 0.1)',
                                color: 'white',
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid rgba(250, 204, 21, 0.5)',
                            }}
                        >
                            <h3 className="text-2xl font-semibold text-yellow-300">
                                {exp.role}
                            </h3>
                            <h4 className="text-md font-medium text-white/80 mb-2">
                                {exp.company}
                            </h4>
                            <p className="text-sm text-gray-200">{exp.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;