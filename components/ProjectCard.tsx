import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, imageUrl, tags, liveDemoUrl, githubUrl } = project;

  return (
    <div className="bg-surface/60 backdrop-blur-md border border-slate-100/10 rounded-2xl shadow-lg transition-transform duration-300 [transform-style:preserve-3d] hover:[transform:rotateY(10deg)_rotateX(5deg)_scale(1.05)] flex flex-col h-full">
      <img className="w-full h-48 object-cover rounded-t-2xl [transform:translateZ(40px)]" src={imageUrl} alt={`Screenshot of ${title}`} />
      <div className="p-6 flex flex-col flex-grow [transform:translateZ(20px)]">
        <h3 className="text-xl font-bold text-text-primary mb-2 [transform:translateZ(10px)]">{title}</h3>
        <p className="text-text-secondary mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 [transform:translateZ(10px)]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-background/70 text-accent text-xs font-mono font-semibold rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {(liveDemoUrl || githubUrl) && (
          <div className="mt-auto flex items-center space-x-4 pt-4 border-t border-slate-100/10 [transform:translateZ(10px)]">
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary-focus font-semibold text-sm transition-colors"
              >
                <ExternalLinkIcon className="h-5 w-5 mr-2" />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary-focus font-semibold text-sm transition-colors"
              >
                <GithubIcon className="h-5 w-5 mr-2" />
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;