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
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-gray-900 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          Discover My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Journey</span>
        </motion.h2>

        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Visual Block - Illustration/Logo */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={item}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative size-64 lg:size-96 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                <motion.img 
                  src="https://illustrations.popsy.co/white/data-analysis.svg" 
                  alt="Developer Illustration" 
                  className="w-full h-full object-contain p-4"
                  initial={{ scale: 1.1 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-gray-300"
            variants={container}
          >
            <motion.h3 className="text-2xl font-bold text-white mb-4" variants={item}>
              Engineering solutions at the intersection of <span className="text-blue-400">Design & Performance.</span>
            </motion.h3>

            <motion.p className="text-lg mb-6 leading-relaxed" variants={item}>
              I’m a Full-Stack Developer specializing in the MERN ecosystem. My recent focus has been on 
              <strong> Real-time Systems</strong>, where I’ve built peer-to-peer collaborative tools like 
              TicBook and specialized whiteboard applications using WebRTC.
            </motion.p>

            <motion.p className="text-lg mb-6 leading-relaxed" variants={item}>
              Beyond simple CRUD apps, I enjoy solving complex architectural challenges—from implementing 
              <strong> secure JWT authentication</strong> with SSR to designing <strong>hyper-local fulfillment 
              frameworks</strong> for supply chain operations.
            </motion.p>

            <motion.p className="text-lg mb-8 leading-relaxed italic border-l-4 border-emerald-500 pl-4 bg-emerald-500/5 py-2" variants={item}>
              "I don't just write code; I build digital experiences that are secure, scalable, and intuitive."
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={item}>
              <a
                href="/aravind_resume.pdf"
                download="Aravind_Resume.pdf"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all font-bold tracking-wide"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-all font-bold tracking-wide"
              >
                My Projects
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}