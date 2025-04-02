import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import authuser from '../assets/authUser.png';
import contact_app from '../assets/contact-app.png';
import eduplay from '../assets/eduplay.png';

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'AuthUser',
      description: 'Built a secure login/register app using React and Node.js. Integrated Google & Local auth via Passport.js, with session handling and user profile management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: authuser,
      demoLink: 'https://your-ecommerce-demo.com',
      codeLink: 'https://github.com/aravindjadagala21/AuthUser'
    },
    {
      title: 'Contact Management App',
      description: 'Built a CRUD contact manager with React Hooks and JSON Server. Users can add/edit/delete contacts with a clean UI',
      technologies: ['React', 'Tailwind', 'JSON Server'],
      image: contact_app,
      codeLink: 'https://github.com/aravindjadagala21/contact-app'
    },
    {
      title: 'Eduplay',
      description: 'Developed a kid-friendly educational app with video lessons and interactive games. Created login/registration system and responsive UI',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Express', 'MySQL'],
      image: eduplay,
      codeLink: 'https://github.com/aravindjadagala21/eduplay'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  return (
    <section 
      id="projects" 
      ref={ref}
      className="min-h-screen flex justify-center items-center 
      bg-gradient-to-br from-gray-900 to-gray-800
      shadow-amber-50 sm:shadow-md  shadow-xs
       py-12"
    >
      <div className="max-w-7xl w-full py-4 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
        </motion.h2>

        <motion.div 
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800/70 hover:bg-gray-700/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-700"
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="overflow-hidden h-48"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-700 text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition duration-300 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 text-sm font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}