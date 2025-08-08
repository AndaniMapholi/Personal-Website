import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-5rem)] flex flex-col justify-center animate-fade-in-up scroll-mt-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent uppercase">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-primary tracking-wide">
          {PERSONAL_INFO.title}
        </h2>
        <p className="mt-6 text-lg text-text-secondary leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      <div className="flex items-center space-x-6 mt-8">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-7 w-7" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-7 w-7" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110"
            aria-label="Contact Me"
          >
            <MailIcon className="h-7 w-7" />
          </a>
      </div>
    </section>
  );
};

export default Hero;