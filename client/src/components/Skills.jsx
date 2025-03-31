import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 70 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 75 },
  ];

  return (
    <section id="skills" className=" 
  
    min-h-[calc(100vh-90px)] shadow-amber-50 shadow 
    flex justify-between items-center 
    
    ">
      <div className="max-w-6xl mx-auto w-full h-full sm:px-6 lg:px-8  
      flex flex-col items-center justify-between">
        <h2 className="text-3xl font-bold text-center text-purple-100 mb-12">My Skills</h2>
        <div className="grid grid-cols-2 w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center h-full justify-center space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative size-30 flex items-center justify-center rounded-full bg-gray-200 shadow-inner">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-blue-500"
                  initial={{ strokeDasharray: '0, 100' }}
                  animate={{ strokeDasharray: `${skill.level}, 100` }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
                <span className="text-xl font-bold text-gray-800">{skill.level}%</span>
              </div>
              <span className="text-center text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}  
