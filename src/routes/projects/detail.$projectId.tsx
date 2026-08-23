import AnimatedLink from '#/components/AnimatedLink'
import { projectsArr } from '#/services/projectsArr'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export const Route = createFileRoute('/projects/detail/$projectId')({
  component: ProjectDetailsPage,
})

function ProjectDetailsPage() {
   const{projectId} = Route.useParams()
   const project = projectsArr.find((p) =>p.id === projectId)
  return(
    <section>
      <div className="page-wrap mt-28">
        <AnimatedLink 
        classes='text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-95 w-fit transition'
        route='/projects'
        func={()=> undefined}><ArrowLeft className='inline-block mr-1' size={14}/>Back To Projects</AnimatedLink>
        <div className="flex gap-2 items-center mt-4">
          <p className="text-sm text-accent-text">{Number(project?.id) > 10 ? project?.id : '0' + Number(project?.id)} </p>
          <span className="block w-fit py-1 px-2 rounded-xl border border-border-default
          bg-[color-mix(in_oklab,var(--accent-primary)28%,transparent)] text-text-primary text-[11px] shadow-gray-800 shadow-md">Web Application</span>
        </div>
        <h1 className='text-2xl md:text-4xl lg:text-5xl w-84 md:w-auto md:max-w-xl lg:max-w-4xl font-extrabold text-text-primary leading-snug mt-6'>Aether UI — Design System & Component Library</h1>
        <p className="text-text-muted text-sm md:text-[16px]! font-normal mt-6 max-w-lg md:max-w-xl! leading-relaxed">
          A comprehensive, accessible, and themeable React component library built for modern product teams
          — covering tokens, primitives, and complex interactive patterns.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <AnimatedLink 
          classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
          route='/'
          func={()=> undefined}><ExternalLink size={16} className='mr-1'/>Live Site</AnimatedLink>
          <AnimatedLink 
          classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
          route='/about'
          func={()=> undefined}><FaGithub size={16} className='mr-1'/> Github</AnimatedLink>
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
        <div className='bg-surface-elevated border border-border-default rounded-3xl w-full h-108'>
          <img src={project?.img} alt={project?.title} className="w-full h-full bg-cover rounded-3xl" />
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
      </div>
    </section>
  )
}
