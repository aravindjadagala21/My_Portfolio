import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
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
      id="about" 
      ref={ref}
      className="min-h-[calc(100vh-90px)]
       flex justify-center items-center 
       bg-gradient-to-br from-gray-900 to-gray-800
       shadow-amber-50 sm:shadow-md  shadow-xs
       "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-5xl text-shadown-blue font-bold text-center text-blue-500 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="flex flex-col lg:flex-row lg:gap-8 justify-between items-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Image Block */}
          <motion.div 
            className="flex justify-center mb-8 lg:mb-0"
            variants={item}
          >
            <div className="size-60 lg:size-80 shrink-0 rounded-full overflow-hidden border-4 border-blue-500/30 relative">
              <motion.img 
                src='/man_lap.jpeg'
                alt="Your Name" 
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-blue-500/10 rounded-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="sm:p-10 p-5 text-white max-w-2xl"
            variants={container}
          >
            <motion.p 
              className="text-lg mb-6 leading-relaxed"
              variants={item}
            >
              I'm a passionate MERN stack developer with a strong foundation in JavaScript and web development. I love building applications that solve real-world problems.
            </motion.p>

            <motion.p 
              className="text-lg mb-6 leading-relaxed"
              variants={item}
            >
              My journey into web development started when I discovered my interest in creating things that people can interact with. Since then, I've been constantly learning and improving my skills.
            </motion.p>

            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={item}
            >
              When I'm not coding, you can find me reading tech blogs, contributing to open-source projects, or exploring new technologies.
            </motion.p>

            <motion.div 
              className="flex space-x-4"
              variants={item}
            >
              <a
                href="/aravind_resume.pdf"
                download="Aravind_Resume.pdf"
                className="cursor-pointer px-6 py-3 list-none bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium shadow-lg hover:shadow-blue-500/30"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}