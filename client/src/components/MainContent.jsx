import React, { useEffect } from 'react';
import axios from 'axios'
import profile_Img from '../assets/profile_image.jpg'
import profilepic from '../assets/profilepic.jpg'
import intropic from '../assets/intropic.jpg'
import Skills from './Skills'
import Project from './Projects';
import Footer from './Footer';
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
 

const handleDownload = async () => {
  try {
    const res = await axios.get('api/download-resume', {
      responseType: 'blob' 
    });

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aravind_Resume.docx'); // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error('Error downloading the file:', error);
  }
};
  return (
    <main className="flex flex-col gap-5  m-0 px-4">
      
      <section id="home" 
      className=" mt-20 
     shadow-amber-50 shadow
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



      <section id="about" className="    
      min-h-[calc(100vh-90px)] shadow-amber-50 shadow
      flex justify-center items-center
         dark:bg-gray-800">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl text-shadown-blue font-bold text-center text-blue-500 dark:text-white mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row lg:gap-3 justify-between items-center">
          <div className=" flex justify-center">
            <div className="size-60 lg:size-80 shrink-0 rounded-full overflow-hidden border-4 border-blue-500">
              <img 
                src={profilepic} 
                alt="Your Name" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="  sm:p-20 p-15  text-white">
            <p className="text-lg  dark:text-gray-300 mb-4">
              I'm a passionate MERN stack developer with a strong foundation in JavaScript and web development. I love building applications that solve real-world problems.
            </p>
            <p className="text-lg  dark:text-gray-300 mb-4">
              My journey into web development started when I discovered my interest in creating things that people can interact with. Since then, I've been constantly learning and improving my skills.
            </p>
            <p className="text-lg  dark:text-gray-300 mb-6">
              When I'm not coding, you can find me reading tech blogs, contributing to open-source projects, or exploring new technologies.
            </p>
            <div className="flex space-x-4">
              <li onClick={handleDownload}  download className="cursor-pointer  px-6 py-2 list-none bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Download Resume
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>


    <Skills/>

     <Project/>

    </main>
  );
};

export default MainContent;
