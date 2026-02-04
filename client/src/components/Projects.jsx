import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import eduplay from '../assets/eduplay.png'
import authuser from '../assets/authUser.png';
import contact_app from '../assets/contact-app.png';
import whiteboardImg from '../assets/whiteboard.png'; 
import notesImg from '../assets/notes-app.png';
import Ticbook from '../assets/Ticbook.png'
import note from '../assets/note.png'
export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Collaborative Whiteboard',
      description: 'A real-time P2P drawing platform using WebRTC. Features multi-user synchronization, custom drawing tools, and board management logic.',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Tailwind'],
      image:whiteboardImg,
      codeLink: 'https://github.com/aravindjadagala21/Whiteboard_P2P_webRTC_PWA',
      featured: true,
     demoLink:" https://whiteboard-p2-p-web-rtc-pwa.vercel.app/"
    },
    {
  title: 'TicBook',
  description: 'A comprehensive event discovery and ticket management ecosystem. Engineered a seamless flow from event creation to instant ticket generation with unique QR codes and simulated payment processing.',
  technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JWT (Refresh/Access)', 'SSR Middleware'],
  image:Ticbook, 
  codeLink: 'https://github.com/aravindjadagala21/Ticbook_new',
  featured: true,
  highlights: [
    "Implemented secure JWT authentication with SSR-compatible Refresh/Access tokens.",
    "Built a modular Stepper Component architecture for complex event creation forms.",
    "Integrated automated QR code generation for instant digital ticketing."
  ]
},
{
  title: 'Notes',
  description: 'An intelligent full-stack note management system featuring JWT-based authentication, debounced regex search, and server-side rate limiting to prevent spam.',
  technologies: ['Next.js 15', 'TypeScript', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'JWT'],
  image: note, 
  demoLink:'https://notes-web-application-orcin.vercel.app/',
  codeLink: 'https://github.com/aravindjadagala21/Notes_web_application',
  featured: true
},
    {
      title: 'Full-Stack Notes App',
      description: 'Secure note-taking application with JWT auth. Integrated TanStack Query for state management and Nodemailer for automated notifications.',
      technologies: ['Next.js', 'MongoDB', 'TanStack Query', 'Mongoose'],
      image:notesImg,
      codeLink: 'https://github.com/aravindjadagala21/Notes_fullstack',
      featured: true
    },
    {
      title: 'AuthUser',
      description: 'Secure identity management system with Passport.js. Supports both Google OAuth and local authentication with session handling.',
      technologies: ['Node.js', 'Express', 'Passport.js', 'MongoDB'],
      image: authuser,
      codeLink: 'https://github.com/aravindjadagala21/AuthUser',
      featured: false
    },
    {
      title: 'Eduplay',
      description: 'Educational platform for kids featuring interactive video lessons and games with a MySQL-backed registration system.',
      technologies: ['JavaScript', 'MySQL', 'Express'],
      image: eduplay,
      codeLink: 'https://github.com/aravindjadagala21/eduplay',
      featured: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of full-stack applications and real-time systems built with modern web standards.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border ${project.featured ? 'border-blue-500/50' : 'border-gray-700'} hover:border-blue-400 transition-all duration-300`}
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] uppercase tracking-widest bg-blue-500/20 text-blue-400 px-2 py-1 rounded">New</span>
                  )}
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[11px] font-semibold text-gray-300 bg-gray-700/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}