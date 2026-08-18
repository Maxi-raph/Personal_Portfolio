import { motion } from 'framer-motion'
import type { ElementType } from 'react'


type TechStack = {
  name: string,
  icon?:ElementType,
  color?:string
}

type TechStackProp = {
  techStack: TechStack[],
  classes: string,
  containerClass : string,
  styles ?: {},
  speed?: number,
  extended?: boolean
}

const TechStack = ({techStack, styles, classes, extended,speed = 20, containerClass='flex flex-wrap items-center gap-3 mt-9'}:TechStackProp) =>{
   
  const extendedStack = [...techStack, ...techStack]
   const stack = extended ? extendedStack : techStack
  return (
    <motion.div 
      className={containerClass} style={styles}>
      {stack.map((tech, index) =>{ 
      const Icon = tech.icon
      return (
        <motion.div
          key={`${tech.name}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className={classes}
        >
          {Icon && (<Icon 
            style={{ color: tech.color }}
            size={16}
            className="shrink-0 inline-block mr-2 "
          />)}
          <span>
            {tech.name}
          </span>
        </motion.div>
       )}
      )}
    </motion.div>
  )
}

export default TechStack

