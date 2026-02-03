import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaChevronUp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: CTA & Socials */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's build something <span className="text-blue-400">extraordinary.</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Currently open to new opportunities and interesting full-stack projects.
          </p>
          <a 
            href="mailto:aravindjadagala21@gmail.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            <FaEnvelope /> Say Hello
          </a>
        </div>

        <hr className="border-gray-800 mb-10" />

        {/* Bottom Section: Branding & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tighter">
            ARAVIND<span className="text-white">.</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-gray-400">
            <a href="https://github.com/aravindjadagala21" target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:-translate-y-1">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/aravind-jadagala-240988317/" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] transition transform hover:-translate-y-1">
              <FaLinkedin size={22} />
            </a>
            <a href="https://leetcode.com/u/jadagala_aravind/" target="_blank" rel="noreferrer" className="hover:text-[#ffa116] transition transform hover:-translate-y-1">
              <FaCode size={22} />
            </a>
          </div>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} Jadagala Aravind. Built with React & Tailwind.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition duration-300 group"
          >
            Back to top 
            <span className="bg-gray-800 p-2 rounded-full group-hover:bg-gray-700 transition">
              <FaChevronUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}