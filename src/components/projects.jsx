// src/components/Projects.jsx
import React from 'react';

const projects = [
  // Add your project details here
  { title: 'Project One', description: 'Description of project one.' },
  { title: 'Project Two', description: 'Description of project two.' },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
