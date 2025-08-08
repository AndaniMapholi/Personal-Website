
import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent mt-24 border-t border-slate-100/10">
      <div className="container mx-auto py-12 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
            <p className="max-w-xl text-lg font-semibold text-text-primary mb-6 italic">
                "{PERSONAL_INFO.brandingStatement}"
            </p>
            <div className="flex space-x-6 mb-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
                <GithubIcon />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110">
                <LinkedinIcon />
                </a>
                <a href="#contact" className="text-text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110" aria-label="Contact Me">
                <MailIcon />
                </a>
            </div>
            <p className="text-sm text-text-secondary">
                &copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
