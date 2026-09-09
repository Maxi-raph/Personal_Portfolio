import { motion } from 'framer-motion';
import React from 'react';


type ContainerProps = {
    children: React.ReactNode,
    delay: number,
    type?:'scroll' | 'load',
    containerType:string,
    className?:string,
    initial: { opacity: number; y?: number; x?: number }
    animate?: { opacity: number; y?: number; x?: number }
    whileInView?: { opacity: number; y?: number; x?: number }
}

const AnimatedContainer = ({ 
  children, 
  delay = 0, 
  type = 'scroll',
  containerType = 'section',
  className,
  initial= { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  whileInView = { opacity: 1, y: 0 }
}:ContainerProps)  => {

  const MotionContainer = motion(containerType) as any;

  // For load animations
  if (type === 'load') {
    return (
      <MotionContainer
        initial={initial}
        animate={animate}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {children}
      </MotionContainer>
    );
  }

  // For scroll animations (default)
  return (
    <MotionContainer
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </MotionContainer>
  );
}

 
export default AnimatedContainer;
