import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;