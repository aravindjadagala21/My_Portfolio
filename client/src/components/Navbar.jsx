import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


 
const Navbar = () => {

  return (
    <nav className="fixed top-0    w-full bg-gray-800/80 backdrop-blur-sm z-50 p-4">
      <div className="max-w-6xl h-10 mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>
        <div className="flex gap-6 items-center">
          <a href="#projects" className="hover:text-blue-400 transition" 
         
          >Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <div className="flex gap-4 ml-6">
            <a href="https://github.com/aravindjadagala21" target="_blank"><FaGithub className="text-xl hover:text-blue-400 transition"/></a>
            <a href="https://www.linkedin.com/in/aravind-jadagala-240988317/" target="_blank"><FaLinkedin className="text-xl hover:text-blue-400 transition"/></a>
            <a href="mailto:aravindjadagala21@gmail.com"><FaEnvelope className="text-xl hover:text-blue-400 transition"/></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar