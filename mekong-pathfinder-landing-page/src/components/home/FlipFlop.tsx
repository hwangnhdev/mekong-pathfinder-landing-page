import React from 'react';
import { motion } from 'framer-motion';

interface FlipFlopProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
  delay?: number;
  speed?: number; // Duration of wave cycle
}

const FlipFlop: React.FC<FlipFlopProps> = ({ color = '#ff4d4f', size = 100, style, delay = 0, speed = 15 }) => {
  return (
    <motion.div
      style={{
        width: size * 1.8,  // Swapped because horizontal
        height: size,
        position: 'absolute',
        zIndex: 5,
        pointerEvents: 'none',
        ...style,
      }}
      initial={{ left: '-10%' }}
      animate={{
        // Match wave horizontal movement (drifting across the screen)
        left: ['-10%', '110%'],
        // Bobbing up and down with the waves
        y: [-15, 15, -15],
        // Floating rotation
        rotate: [-3, 3, -3],
      }}
      transition={{
        left: {
          duration: speed * 3.5, // Total cross-screen drift time
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        },
        y: {
          duration: speed / 4, // Faster bobbing synced to wave frequency
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: speed / 3,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
    >
      {/* Rotated SVG content for horizontal orientation */}
      <svg width="100%" height="100%" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow */}
        <ellipse cx="80" cy="90" rx="75" ry="10" fill="rgba(0,0,0,0.12)" filter="blur(6px)" />
        
        {/* Sole (Đế dép) - Horizontal Path */}
        <path 
          d="M30 20C15 20 10 35 10 50C10 65 15 80 30 80H140C165 80 175 65 175 50C175 35 165 20 140 20H30Z" 
          fill={color} 
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="2"
        />
        
        {/* Sole highlight */}
        <path 
          d="M35 25C25 25 20 35 20 50C20 65 25 75 35 75H135C155 75 165 65 165 50C165 35 155 25 135 25H35Z" 
          fill="rgba(255,255,255,0.18)" 
        />
        
        {/* Straps (Quai dép) - Meeting at bottom center of horizontal flip flop */}
        <path 
          d="M45 50 L85 15" 
          stroke="white" 
          strokeWidth="8" 
          strokeLinecap="round" 
          style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}
        />
        <path 
          d="M45 50 L85 85" 
          stroke="white" 
          strokeWidth="8" 
          strokeLinecap="round" 
          style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}
        />
        
        {/* Center Point */}
        <circle cx="45" cy="50" r="7" fill="white" />
        <circle cx="45" cy="50" r="3" fill={color} />
      </svg>
    </motion.div>
  );
};

export default FlipFlop;
