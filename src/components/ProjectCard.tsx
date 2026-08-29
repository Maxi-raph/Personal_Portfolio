import { ArrowRight } from "lucide-react";
import AnimatedLink from "./AnimatedLink";
import { motion, AnimatePresence } from "framer-motion";
import type { LinkProps } from "@tanstack/react-router";


type ProjectProp ={
    img: string|undefined,
    title: string,
    desc: string,
    stacks: string[],
    route: string,
    id: number,
    createdAt?: string,
    params?: LinkProps['params'],
}

const ProjectCard = ({img, title, desc, stacks, route, id, params}:ProjectProp) => {
    return ( 
        <AnimatePresence>
            <motion.div 
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    opacity: { duration: 0.3 },
                }}
            className="flex flex-col border border-border-default
            bg-surface-elevated h-fit rounded-3xl shadow-xl hover:scale-104 transition-all duration-75 ease-in-out">
                {img && (
                <div className="relative h-52 border-b border-text-muted">
                    <span className="hidden md:absolute top-4 left-5 text-accent-text text-sm">{id < 10 && 0}{id}</span>
                    <img src={img} alt={title} className=""/>
                </div>
                )}
                <div className="flex flex-col h-[45%] gap-4 mt-6 px-6">
                    <span className="md:hidden block top-4 left-5 text-accent-text text-sm">{id < 10 && 0}{id}</span>
                    <h3 className="font-semibold text-text-primary text-md">{title}</h3>
                    <p className="text-text-secondary text-sm">{desc}</p>
                    <div className="flex flex-wrap gap-4 w-full">
                        {stacks.length > 0 && stacks.map(stack =>(
                            <div key={stack} className="py-1 px-2 rounded-lg text-[10px] lg:text-nowrap text-text-primary bg-surface shadow-shadow-medium shadow-md">
                                {stack}
                            </div>
                        ))}
                    </div>
                    <hr className="w-full h-0 5 text-text-muted" />
                    <AnimatedLink 
                    classes='text-accent-primary text-sm hover:text-accent-hover mb-4 hover:scale-90 transition w-fit'
                    route={route}
                    params={params}
                    func={()=> undefined}>View Case Study <ArrowRight className='inline-block ml-1' size={14}/></AnimatedLink>
                </div>
            </motion.div>
        </AnimatePresence>
     );
}
 
export default ProjectCard;