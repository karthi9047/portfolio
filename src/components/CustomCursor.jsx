import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const faceStyle = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    background: 'white',
    border: '1px solid #333',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)'
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        pointerEvents: 'none',
        zIndex: 9999,
        perspective: '1000px',
        mixBlendMode: 'difference'
      }}
    >
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: '20px',
          height: '20px',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        <div style={{ ...faceStyle, transform: 'translateZ(10px)' }} />
        <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(10px)' }} />
        <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(10px)' }} />
        <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(10px)' }} />
        <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(10px)' }} />
        <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(10px)' }} />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
