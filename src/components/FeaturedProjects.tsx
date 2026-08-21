import AnimatedLink from '#/components/AnimatedLink'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '#/components/ProjectCard'

const FeaturedProjects = () => {
    return ( 
    <>
      <section className='page-wrap'>
       <span className="text-accent-text mb-6 text-[11px]">// SELECTED WORK</span>
       <div className="flex flex-wrap justify-between gap-4 items-center mt-2 mb-6">
        <h2 className="font-bold text-text-primary text-2xl md:text-3xl! md:text-4xl">Featured Projects</h2>
        <AnimatedLink 
        classes='text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-110 transition'
        route='/projects'
        func={()=> undefined}>All Projects <ArrowRight className='inline-block ml-1' size={14}/></AnimatedLink>
       </div>
       <div className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <ProjectCard title='Folio Motion' img={undefined} id={1} route='/' stacks={['React', 'Framer Motion', 'GSAP', 'CSS']} desc='A portfolio template with cinematic scroll effects and smooth transitions.' featured={true} createdAt={new Date().toISOString()}/>
         <ProjectCard title='Folio Motion' img={undefined} id={1} route='/' stacks={['React', 'Framer Motion', 'GSAP', 'CSS']} desc='A portfolio template with cinematic scroll effects and smooth transitions.' featured={true} createdAt={new Date().toISOString()}/>
         <ProjectCard title='Folio Motion' img={undefined} id={1} route='/' stacks={['React', 'Framer Motion', 'GSAP', 'CSS']} desc='A portfolio template with cinematic scroll effects and smooth transitions.' featured={true} createdAt={new Date().toISOString()}/>
       </div>
      </section>
    </>
     );
}
 
export default FeaturedProjects;