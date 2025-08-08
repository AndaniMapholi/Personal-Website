
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
           <div key={category.id} className="bg-surface/60 backdrop-blur-md border border-slate-100/10 p-6 rounded-2xl shadow-lg animate-fade-in-up transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
            <h3 className="text-xl font-semibold text-primary mb-4">{category.name}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="font-mono text-text-secondary">
                  <span className="text-accent mr-2">▹</span>{skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;