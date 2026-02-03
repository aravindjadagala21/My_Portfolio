import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Install react-icons
import Skills from './Skills';
import Project from './Projects';
import About from './About';

const MainContent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach(el => observer.observe(el));

    return () => hiddenElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* --- Floating Icons --- */}
      <div className="fixed left-6 bottom-10 z-50 flex flex-col gap-6 text-2xl animate-bounce-slow">
        <a href="https://github.com/aravindjadagala21" target="_blank" className="hover:text-blue-400 transition-colors"><FaGithub /></a>
        <a href="#" target="_blank" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
        <a href="#" target="_blank" className="hover:text-blue-400 transition-colors"><FaCode /></a> {/* LeetCode */}
      </div>

      <main className="flex flex-col gap-10 sm:px-4 px-2 max-w-7xl mx-auto">
        
        {/* --- Hero Section --- */}
        <section id="home" className="mt-20 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-start fade-in flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Hi, I'm Aravind
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono">
              Full Stack Developer & System Architect
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Specializing in building real-time collaborative tools and scalable MERN applications. 
              Currently focused on WebRTC and hyper-local logistics systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                View My Work
              </a>
              <a href="#footer" className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full font-bold transition-all">
                Contact Me
              </a>
            </div>
          </div>

          {/* --- Logo/Cartoon Placeholder --- */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
                {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-3xl border border-gray-700 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* You can replace this <img> with a Lottie animation or a Dev SVG */}
                <img 
                  src="https://illustrations.popsy.co/white/web-design.svg" 
                  alt="Developer Illustration" 
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Project />
      </main>
    </div>
  );
};

export default MainContent;