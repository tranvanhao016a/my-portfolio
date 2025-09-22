'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 glass-dark">
        <div className="container-custom text-center">
          <p className="text-white/60 text-lg">
            © 2024 Tran Van Hao. All rights reserved. ✨
          </p>
        </div>
      </footer>
    </div>
  );
}