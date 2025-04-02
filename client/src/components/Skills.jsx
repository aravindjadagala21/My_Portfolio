import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-amber-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 80, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'Express', level: 70, color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', level: 70, color: 'from-green-400 to-green-700' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', level: 75, color: 'from-red-500 to-orange-500' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const progress = {
    hidden: { strokeDasharray: '0, 100' },
    show: { 
      strokeDasharray: (skill) => `${skill.level}, 100`,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        delay: 0.5
      } 
    }
  };

  return (
    <section 
      id="skills" 
      ref={ref}
      className="min-h-[calc(100vh-90px)] py-12 px-4 sm:px-6 lg:px-8
      shadow-amber-50 sm:shadow-md  shadow-xs
      bg-gradient-to-br from-gray-900 to-gray-800
      "
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              variants={item}
            >
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#2d3748"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="8"
                    stroke={`url(#gradient-${index})`}
                    variants={progress}
                    custom={skill}
                    style={{ 
                      transform: 'rotate(-90deg)',
                      transformOrigin: '50% 50%'
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{skill.level}%</span>
                </div>
                {/* Gradient definition */}
                <svg className="hidden">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className={`text-${skill.color.split(' ')[0].replace('from-', '')}`} />
                      <stop offset="100%" className={`text-${skill.color.split(' ')[1].replace('to-', '')}`} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}