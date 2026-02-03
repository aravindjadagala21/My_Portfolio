import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900/90 backdrop-blur-md z-[100] border-b border-gray-800">
      <div className="max-w-7xl h-16 mx-auto px-4 flex justify-between items-center">
        
        <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tighter cursor-pointer">
          ARAVIND<span className="text-white">.</span>
        </div>

        <div className="hidden md:flex gap-8 items-center font-medium text-gray-300">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        </div>

        <div className="flex gap-5 items-center">
          <a 
            href="https://github.com/aravindjadagala21" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a 
            href="https://www.linkedin.com/in/aravind-jadagala-240988317/" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-[#0077b5] transition-all transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a 
            href="https://leetcode.com/u/aravindjadagala21/" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-[#ffa116] transition-all transform hover:scale-110"
          >
            <FaCode size={22} />
          </a>
          
          <a 
            href="mailto:aravindjadagala21@gmail.com"
            className="hidden sm:block ml-2 bg-blue-600/10 border border-blue-500/50 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;