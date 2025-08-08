
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
        {PROJECTS.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;