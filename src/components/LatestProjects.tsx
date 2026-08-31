import AnimatedLink from '#/components/AnimatedLink'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '#/components/ProjectCard'
import { projectsArr } from '#/services/projectsArr';
import { useRef, useState, useEffect } from 'react';


const LatestProjects = () => {
  const latestProjects = projectsArr.
  filter((p) => p.featured)
  .slice(0,3)
  .sort((a,b) => Number(new Date(b.createdAt).getTime()) -  Number(new Date(a.createdAt).getTime()))
  const SectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(true) 

useEffect(() => {
  if (!SectionRef.current) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
         setIsVisible(true);
        
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(SectionRef.current);

  return () => observer.disconnect();
}, []);
    return ( 
    <>
      <section className={`page-wrap transition duration-1000
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} ref={SectionRef}>
       <span className="text-accent-text mb-6 text-[11px]">// SELECTED WORK</span>
       <div className="flex flex-wrap justify-between gap-4 items-center mt-2 mb-6">
        <h2 className="font-bold text-text-primary text-2xl md:text-3xl! lg:text-4xl!">Latest Projects</h2>
        <AnimatedLink 
        classes='flex items-center text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-110 transition'
        route='/projects'
        func={()=> undefined}>All Projects <ArrowRight className='inline-block ml-1' size={14}/></AnimatedLink>
       </div>
       <div className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {latestProjects.map((project) =>(
         <ProjectCard key={project.title} title={project.title} img={undefined} id={Number(project.id)} route={project.route} params={{projectId:String(Number(project?.id)) }} stacks={project.stacks} desc={project.desc}/>
         ))}
       </div>
      </section>
    </>
     );
}
 
export default LatestProjects;