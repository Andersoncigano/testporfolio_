import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden relative">
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;