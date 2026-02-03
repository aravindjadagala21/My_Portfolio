import React, { useEffect, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const ICONS = [
  { id: 'linkedin', icon: <FaLinkedin />, color: '#0077b5', link: 'https://linkedin.com/in/aravind-jadagala-240988317/' },
  { id: 'github', icon: <FaGithub />, color: '#ffffff', link: 'https://github.com/aravindjadagala21' },
  { id: 'leetcode', icon: <FaCode />, color: '#ffa116', link: 'https://leetcode.com/u/jadagala_aravind/' },
  { id: 'email', icon: <FaEnvelope />, color: '#ea4335', link: 'mailto:aravindjadagala21@gmail.com' },
];

export default function FloatingSnakeIcons() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startSequence = useCallback(async () => {
    if (isPaused) return;

    for (let cycle = 0; cycle < 3; cycle++) {
      if (isPaused) break;
      await controls.start((i) => ({
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: Math.random() * (window.innerHeight - 100) + 50,
        transition: {
          duration: 5 + Math.random() * 2,
          ease: "easeInOut",
        }
      }));
    }

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 120;

    await controls.start((i) => ({
      x: centerX + radius * Math.cos((i * 2 * Math.PI) / ICONS.length) - 25,
      y: centerY + radius * Math.sin((i * 2 * Math.PI) / ICONS.length) - 25,
      rotate: 360,
      transition: { duration: 2.5, ease: "circInOut" }
    }));

    await controls.start((i) => ({
      scale: [1, 1.2, 1],
      transition: { duration: 1.5, ease: "easeInOut" }
    }));

    await controls.start((i) => ({
      x: Math.random() * (window.innerWidth - 100) + 50,
      y: Math.random() * (window.innerHeight - 100) + 50,
      rotate: 0,
      transition: { 
        duration: 3, 
        ease: "circOut" 
      }
    }));

    startSequence();
  }, [controls, isPaused]);

  useEffect(() => {
    startSequence();
    return () => controls.stop();
  }, [startSequence, controls]);

  const handleInteraction = () => {
    setIsPaused(true);
    controls.stop();
    setTimeout(() => {
      setIsPaused(false);
      startSequence();
    }, 5000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {ICONS.map((item, i) => (
        <motion.a
          key={item.id}
          custom={i}
          animate={controls}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={handleInteraction}
          onTouchStart={handleInteraction}
          className="absolute pointer-events-auto cursor-pointer p-4 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-xl flex items-center justify-center text-2xl"
          style={{ 
            color: item.color,
            boxShadow: `0 0 15px ${item.color}22` 
          }}
          whileHover={{ 
            scale: 1.2, 
            zIndex: 200, 
            boxShadow: `0 0 25px ${item.color}66`,
            backgroundColor: "rgba(17, 24, 39, 1)" 
          }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}