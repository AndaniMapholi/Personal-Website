import React from 'react';
import { SparklesIcon } from './icons/Icons';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-3 mb-10">
      <h2 className="text-3xl font-bold text-text-primary tracking-tight">{children}</h2>
      <SparklesIcon className="w-7 h-7 text-accent" />
    </div>
  );
};

export default SectionTitle;
