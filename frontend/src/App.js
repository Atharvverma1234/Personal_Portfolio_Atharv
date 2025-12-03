import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // Add this import
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Experience /> {/* Add this line - Usually after About section */}
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;