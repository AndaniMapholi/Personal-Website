import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Career from './components/Career';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <div className="container mx-auto px-4 sm:px-6">
              <Hero />
              <div className="flex flex-col gap-y-24 md:gap-y-32 py-24">
                <Skills />
                <Projects />
                <Career />
                <Contact />
              </div>
          </div>
        </main>
        <Footer />
      </div>
      <AIChat />
    </div>
  );
};

export default App;