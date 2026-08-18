import { motion } from 'framer-motion'
import type React from 'react';

type AnimatedButtonProp = {
 classes:string,
 func: ()=> any,
 children:React.ReactNode
}

const AnimatedButton = ({classes, func, children}:AnimatedButtonProp) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={func}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
 
export default AnimatedButton;