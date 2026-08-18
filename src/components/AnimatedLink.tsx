import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router';
import type {  LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type AnimatedLinkProp = {
  children:ReactNode,
  route:string,
  classes:string,
  func:()=> any,
  params?: LinkProps['params']
}

const AnimatedLink = ({children, route, classes, func, params}:AnimatedLinkProp) => {
    const MotionLink = motion.create(Link)
    return ( 
      <MotionLink
        to={route}
        params={params as any}
        whileTap={{ scale: 0.95 }}
        onClick={() => func}
        className={classes}
      >
        {children}
      </MotionLink>
     );
}
 
export default AnimatedLink;