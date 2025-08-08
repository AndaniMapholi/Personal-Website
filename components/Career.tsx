import React from 'react';
import { CAREER_MATERIALS } from '../constants';
import type { CareerMaterial } from '../types';
import SectionTitle from './SectionTitle';

const CareerMaterialCard: React.FC<{
  material: CareerMaterial,
}> = ({ material }) => {
    const Icon = material.icon;
    const isExternal = material.linkUrl && !material.linkUrl.startsWith('#');
    
    const classNames = `block bg-surface/60 backdrop-blur-md border border-slate-100/10 p-6 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 group`;

    const content = (
        <>
            <div className="flex items-start mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-background/70 flex items-center justify-center mr-4">
                   <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-text-primary">{material.title}</h3>
                </div>
            </div>
            <p className="text-text-secondary mb-4 flex-grow">{material.description}</p>
            <div className="mt-auto">
                <span 
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white font-bold py-2 px-4 rounded-lg shadow-lg group-hover:shadow-primary/40 transition-all duration-300 transform group-hover:-translate-y-px"
                >
                    {material.linkText}
                </span>
            </div>
        </>
    );

    return (
        <a 
            href={material.linkUrl}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : ""}
            className={classNames}
        >
            {content}
        </a>
    );
}

const Career: React.FC = () => {
    return (
        <section id="career" className="scroll-mt-20">
            <SectionTitle>Career & Downloads</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CAREER_MATERIALS.map((material, index) => (
                    <div key={material.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
                        <CareerMaterialCard
                            material={material}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;