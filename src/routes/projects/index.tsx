import AnimatedButton from '#/components/AnimatedButton'
import AnimatedLink from '#/components/AnimatedLink'
import ProjectCard from '#/components/ProjectCard'
import TechStack from '#/components/TechStack'
import { useNav } from '#/context/navContext'
import { projectsArr } from '#/services/projectsArr'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
    const projects = projectsArr
    const categoryArr = ['All', 'Web Apps', 'Landing Pages', 'Dashboards', 'Experiments']
    const [category, setCategory] = useState('All')
    const filteredProjects = category ===  'All' ? projects : projects.filter((project)=> project.category === category)
    const firstFeaturedProject =  projects.filter(p => p.featured)
    const {isOpen, setIsOpen} = useNav()

  return (
    <section>
        <div className="page-wrap mt-34 relative">
            <div className={`md:hidden ${isOpen && 'absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto'}`}
            onClick={()=>setIsOpen(false)}></div>
            <div className="flex flex-col md:justify-between md:items-end md:flex-row gap-6">
                <div className='flex flex-col gap-4'>
                    <span className="text-accent-text text-xs"><span className="inline-block mr-2">//</span> WORK</span>
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-text-primary max-w-md md:max-w-sm lg:max-w-md">
                     Selected Projects
                    </h2>
                    <p className="text-text-secondary text-sm max-w-120 leading-relaxed md:leading-normal sm:w-140! md:w-130! mt-2">
                        A curated collection of my frontend projects — web apps, 
                        landing pages, dashboards, and UI experiments built with care and precision.
                    </p>
                </div>
                <p className="text-text-primary font-bold text-4xl flex items-center">
                    {projects.length > 0 
                    ? projects.length + '+'
                    : 0} 
                    <span className="inline-block ml-2 text-xs text-text-muted">
                        projects total
                    </span>
                </p>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18 mb-6" />
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 w-full items-center">
                    <span className="block rounded-full w-1.5 h-1.5 bg-accent-primary shadow-3xl shadow-accent-primary"></span>
                    <p className="text-[10px] text-text-muted font-semibold leading-relaxed tracking-widest">FEATURED</p>
                </div>
                <div className="flex flex-col md:flex-row w-full min-h-fit rounded-2xl bg-surface border border-border-default">
                    <img src="i.png" alt="" className='h-82 md:h-102! lg:h-86! xl:h-82! w-full flex-1 shrink-0 rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl'/>
                    <div className="flex flex-col gap-6 md:w-[60%] rounded-tr-2xl rounded-br-2xl p-10 h-fit">
                        <div className="flex items-center text-xs gap-2">
                            <span className="text-text-secondary font-semibold">01</span>
                            <span className="inline-block py-1 px-2 rounded-xl bg-surface-elevated text-accent-text
                            shadow-shadow-heavy shadow-md">
                                Featured
                            </span>
                        </div>
                        <h2 className="text-text-primary font-bold text-3xl">
                           {firstFeaturedProject[0]?.title}
                        </h2>
                        <p className="text-text-secondary text-sm leading-6">
                            {firstFeaturedProject[0]?.desc}
                        </p>
                        <TechStack
                        techStack={
                          (firstFeaturedProject[0]?.stacks?.map(name => ({name})) || [])
                        } 
                        containerClass='flex flex-wrap items-center gap-4'
                        classes='text-accent-text py-1 px-2 text-xs rounded-lg
                        text-[10px] font-semibold bg-surface-elevated shadow-shadow-heavy shadow-md'
                        />
                        <AnimatedLink 
                        classes='text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-95 w-fit transition'
                        route='/projects/detail/$projectId'
                        params={{projectId: firstFeaturedProject[0]?.id}}
                        func={()=> undefined}>View Case Study <ArrowRight className='inline-block ml-1' size={14}/></AnimatedLink>
                    </div>
                </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18 mb-6" />
            <div>
                <div className="flex flex-wrap gap-4 whitespace-nowrap">
                {categoryArr.map((cat)=>(
                    <AnimatedButton
                        key={cat}
                        classes={`
                    py-2 px-4 text-xs font-semibold rounded-xl
                    transition shadow-shadow-heavy shadow-lg 
                    hover:bg-accent-hover hover:text-background text-sm 
                    cursor-pointer ${category === cat ? 'bg-accent-hover text-background' : 'bg-gray-700/30 text-text-secondary'}`}
                    func={()=> setCategory(cat)}
                    >
                        {cat}
                    </AnimatedButton>
                ))}
                </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-6 mb-18" />
            <div className="flex flex-col gap-4">
                <h2 className="text-text-primary text-4xl font-bold">Projects</h2>
                {filteredProjects.length > 0
                ? (<div 
                    className="grid grid-cols-1 sm:grid-cols-2 
                    md:grid-cols-3 gap-6">
                        {filteredProjects.map((project)=>(
                            <ProjectCard 
                            key={project.id} 
                            title={project.title}
                            img={project.img}
                            desc={project.desc}
                            stacks={project.stacks}
                            route={project.route}
                            params={{projectId: project.id}}
                            id={Number(project.id)}
                             />
                        ))}
                </div>)
                : (<div 
                    className='flex justify-center items-center
                    w-full h-70 rounded-2xl bg-surface border border-border-default'>

                 </div>)}
            </div>
            <div className="my-8 flex justify-center items-center w-full h-70 rounded-3xl bg-surface border border-border-default">
                <div className="flex justify-center items-center flex-col gap-4">
                    <div className="rounded-full w-12 h-12 flex justify-center items-center bg-surface-elevated border border-border-default">
                        <ClipLoader
                            color="var(--accent-primary)"
                            size={24}
                            speedMultiplier={0.8}
                        />
                    </div>
                    <h3 className="font-bold text-text-primary text-2xl">More Projects Incoming</h3>
                    <p className="text-text-secondary text-xs">Currently building more case studies. Check back soon.</p>
                </div>
            </div>
        </div>
        <hr className="text-text-muted w-full h-0.5" />
    </section>
  )
}
