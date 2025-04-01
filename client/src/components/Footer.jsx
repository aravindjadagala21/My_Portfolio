import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" 
    className="bg-gray-800 text-white py-5
    sm:mx-4
    ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
  
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Jadagala Aravind</h1>
          </div>

       
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
          </div>

        
          <div className="flex space-x-6">
            <a 
              href="https://github.com/aravindjadagala21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aravind-jadagala-240988317/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://leetcode.com/u/jadagala_aravind/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaCode size={24} />
            </a>
          </div>
        </div>

      
        <div className="text-center mt-6 text-gray-500">
          © {new Date().getFullYear()} Jadagala Aravind. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
