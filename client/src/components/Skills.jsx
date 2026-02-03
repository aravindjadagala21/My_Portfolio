import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Grouped by expertise to show your full-stack range
  const skillCategories = [
    {
      category: "Frontend & UI",
      skills: ["Next.js (App Router)", "TypeScript", "React.js", "Tailwind CSS", "Framer Motion", "TanStack Query"]
    },
    {
      category: "Backend & Real-time",
      skills: ["Node.js", "Express.js", "WebRTC", "Socket.io", "Passport.js", "Nodemailer"]
    },
    {
      category: "Database & Logic",
      skills: ["MongoDB", "Mongoose", "MySQL", "REST APIs", "System Design", "Logistics Frameworks"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "JWT Auth", "Postman", "Vercel", "Middleware"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section id="skills" ref={ref} className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          className="mb-16 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical <span className="text-blue-500">Toolbox</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            My expertise lies in building real-time, scalable applications using the modern JavaScript ecosystem.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skillCategories.map((group, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-gray-800/30 p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-6 group-hover:text-blue-300 transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="px-4 py-2 bg-gray-900 border border-gray-700 text-gray-300 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}