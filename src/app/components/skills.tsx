'use client';
import React from 'react';
import { Code, Server, Database, Rocket } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: <Code className="w-8 h-8 text-yellow-400" />,
    items: ['Next.js', 'React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-8 h-8 text-yellow-400" />,
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'JWT', 'API Security'],
  },
  {
    title: 'Database & Storage',
    icon: <Database className="w-8 h-8 text-yellow-400" />,
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose', 'Prisma'],
  },
  {
    title: 'Tools & Deployment',
    icon: <Rocket className="w-8 h-8 text-yellow-400" />,
    items: ['Git', 'GitHub', 'Vercel', 'Docker', 'Linux', 'Nginx', 'CI/CD', 'AWS (basic)'],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left shadow-lg hover:shadow-yellow-500/20 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-500/10 p-3 rounded-full">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-300">
                  {skill.title}
                </h3>
              </div>
              <ul className="list-disc pl-6 text-gray-200 space-y-1">
                {skill.items.map((item) => (
                  <li key={item} className="hover:text-yellow-200 transition">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;