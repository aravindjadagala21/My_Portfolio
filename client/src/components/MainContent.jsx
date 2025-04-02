import React, { useEffect } from 'react';
import axios from 'axios'
import profilepic from '../assets/profilepic.jpg'
import intropic from '../assets/intropic.jpg'
import Skills from './Skills'
import Project from './Projects';
import Footer from './Footer';
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

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce site with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with authentication",
      technologies: ["React", "Express", "MongoDB", "JWT"],
      link: "#"
    }
  ];

  return (
    <main className="flex flex-col gap-5  m-0 sm:px-4 px-1">
      
      <section id="home" 
      className=" mt-20 
    
      bg-gradient-to-br from-gray-900 to-gray-800
      shadow-amber-50 sm:shadow-md  shadow-xs
      min-h-[calc(100vh-90px)]  flex-col 
      flex items-center  justify-between
      gap-10 lg:flex-row md:justify-evenly 
      ">
        <div 
        className="
        text-center fade-in  translate-y-10 
        transition-transform duration-700
        mb-4  p-4 lg:text-start 

        ">
          <h1 className="text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Aravind</span>
          </h1>
          <h2 className="text-3xl text-gray-300 mb-8">
            MERN Stack Developer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            I build exceptional digital experiences with modern web technologies.
          </p>
          <div>
            <a 
              href="#projects" 
              className="sm:inline block border m-0 mb-2 sm:mb-0  bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg sm:mr-4 transition"
            >
              View My Work
            </a>
            <a 
              href="#footer" 
              className= "sm:inline block border border-blue-400 text-blue-400 hover:bg-blue-900/30 px-8 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className='lg:size-100 sm:size-90 size-70 overflow-hidden 
         bg-red-100 rounded-full  shrink-0 my-10
         hover:shadow-[0_0_20px_10px_#6BA3FF] shadow-[0_0_15px_5px_#6BA3FF] text-cyan-300 
         '>
              <img src={intropic} alt="profile" 
              className='w-full object-center' />
        </div>

      </section>


    <About/>
    <Skills/>
     <Project/>

    </main>
  );
};

export default MainContent;
