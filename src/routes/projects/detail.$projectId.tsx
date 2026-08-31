import AnimatedLink from '#/components/AnimatedLink'
import TechStack from '#/components/TechStack'
import { useNav } from '#/context/navContext'
import { projectsArr } from '#/services/projectsArr'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export const Route = createFileRoute('/projects/detail/$projectId')({
  component: ProjectDetailsPage,
})

function ProjectDetailsPage() {
   const{projectId} = Route.useParams()
   const project = projectsArr.find((p) =>p.id === projectId)
   const {isOpen, setIsOpen} = useNav()

  return(
    <section className='relative'>
      <div className={`md:hidden ${isOpen && 'absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto'}`}
      onClick={()=>setIsOpen(false)}></div>
      <div className="page-wrap mt-28">
        <AnimatedLink 
        classes='text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-95 w-fit transition'
        route='/projects'
        func={()=> undefined}><ArrowLeft className='inline-block mr-1' size={14}/>Back To Projects</AnimatedLink>
        <div className="flex gap-2 items-center mt-4">
          <p className="text-sm text-accent-text">{Number(project?.id) > 10 ? project?.id : '0' + Number(project?.id)} </p>
          <span className="block w-fit py-1 px-2 rounded-xl border border-border-default
          bg-[color-mix(in_oklab,var(--accent-primary)28%,transparent)] text-text-primary text-[11px] shadow-shadow-medium shadow-lg">{project?.category.slice(0,project?.category.length -1)}</span>
        </div>
        <h1 className='text-2xl md:text-4xl lg:text-5xl w-84 md:w-auto md:max-w-xl lg:max-w-4xl font-extrabold text-text-primary leading-snug mt-6'>{project?.title}</h1>
        <p className="text-text-muted text-sm md:text-[16px]! font-normal mt-6 max-w-lg md:max-w-xl! leading-relaxed">
        {project?.desc}
        </p>
        <div className="flex items-center gap-4 mt-6">
          <AnimatedLink 
          classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background focus:bg-accent-hover focus:text-background active:bg-accent-hover active:text-background text-sm shadow-shadow-medium shadow-lg'
          route='/'
          func={()=> undefined}><ExternalLink size={16} className='mr-1'/>Live Site</AnimatedLink>
          <AnimatedLink 
          classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background focus:bg-accent-hover focus:text-background active:bg-accent-hover active:text-background text-sm shadow-shadow-medium shadow-lg'
          route='/about'
          func={()=> undefined}><FaGithub size={16} className='mr-1'/> Github</AnimatedLink>
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
        <div className='bg-surface-elevated border border-border-default rounded-3xl w-full h-108'>
          <img src={project?.img} alt={project?.title} className="w-full h-full bg-cover rounded-3xl" />
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-6" />
        <hr className="text-text-muted w-[90%] mx-auto h-0.5 mb-6" />
        <div className="w-[90%] mx-auto grid gap-3 space-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="text-accent-text text-xs">Role</span>
            <p className="text-text-primary text-sm font-semibold">
              Frontend Engineer - Design Systems Lead
            </p>
          </div>
          <div className="flex flex-col gap-2 text-end md:text-start! md:mx-auto lg:mx-0">
            <span className="text-accent-text text-xs">Timeline</span>
            <p className="text-text-primary text-sm font-semibold">
              6 weeks
            </p>
          </div>
          <div className="flex flex-col gap-2 md:mx-auto lg:mx-0">
            <span className="text-accent-text text-xs">Type</span>
            <p className="text-text-primary text-sm font-semibold">
              Open Source
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-accent-text text-end md:text-start text-xs">Stack</span>
            <TechStack
              containerClass='flex flex-wrap items-center justify-end md:justify-start gap-4'
              classes='text-accent-text py-1 px-2 text-xs rounded-lg
              text-[10px] font-semibold bg-surface-elevated shadow-shadow-medium shadow-lg'
              techStack={(project?.stacks?.map(name => ({name})) || [])}
            />
          </div>
        </div>
        <hr className="text-text-muted w-[90%] mx-auto h-0.5 mt-6" />
        <hr className="text-text-muted w-full h-0.5 mt-6 mb-10" />
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <span className="md:w-[20%] text-accent-text text-[11px]"><span className="inline-block mr-2">//</span> CHALLENGE</span>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-text-primary text-xl font-bold">
              Building a consistent UI foundation at scale
            </h3>
            <p className="text-sm text-accent-text leading-5">
              The product team was shipping features fast, but inconsistency crept in — button styles diverged across pages, spacing felt uneven, 
              and accessibility was an afterthought. We needed a shared language.
            </p>
            <p className="text-sm text-accent-text leading-5">
              The core challenge: build something flexible enough to extend, strict enough to enforce consistency, and documented
              well enough that any developer could pick it up on day one.
            </p>
            <ul className='text-sm text-accent-text flex flex-col gap-3 list-disc ml-4'>
              <li>No shared token system — colors and spacing were hardcoded</li>
              <li>Component duplication across 3 different product areas</li>
              <li>Zero a11y testing in the existing component library</li>
              <li>Developers spending hours re-implementing the same UI patterns</li>
            </ul>
          </div>
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <span className="md:w-[20%] text-accent-text text-[11px]"><span className="inline-block mr-2">//</span> SOLUTION</span>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-text-primary text-xl font-bold">
              A token-driven system built on accessibility primitives
            </h3>
            <p className="text-sm text-accent-text leading-5">
              I architected Aether UI from the ground up — starting with a design token layer (colors, spacing, radius, typography), then building 
              primitive components using Radix UI headless primitives to get ARIA compliance for free.
            </p>
            <p className="text-sm text-accent-text leading-5">
              Every component is documented in Storybook with interactive controls, accessibility annotations, and code snippets.
              The system is fully themeable via CSS variables and ships a dark and light mode out of the box.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl">
                <h4 className="font-bold text-[14px]">40+ components</h4>
                <p className="text-accent-text text-[11px]">Fully documented and tested</p>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl">
                <h4 className="font-bold text-[14px]">100% a11y compliant</h4>
                <p className="text-accent-text text-[11px]">WCAG 2.1 AA across all components</p>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl">
                <h4 className="font-bold text-[14px]">Zero runtime dependencies</h4>
                <p className="text-accent-text text-[11px]">Tree-shakeable ESM output</p>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl">
                <h4 className="font-bold text-[14px]">Dark + light mode</h4>
                <p className="text-accent-text text-[11px]">CSS variable based theming</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
        <div className="flex flex-col gap-4">
          <span className="md:w-[20%] text-accent-text text-[11px]"><span className="inline-block mr-2">//</span> GALLERY</span>
          <div className="grid grid-cols-12 gap-4">
            <div className="bg-surface-elevated border border-border-default rounded-3xl col-span-12 row-span-16">
              <img src={undefined} alt='' className="w-full h-full bg-cover rounded-3xl" />
            </div>
            <div className="col-span-12 row-span-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-elevated border border-border-default rounded-3xl col-span-1 row-span-12 md:col-span-1 md:row-span-12">
                <img src={undefined} alt='' className="w-full h-full bg-cover rounded-3xl" />
              </div>
              <div className="bg-surface-elevated border border-border-default rounded-3xl col-span-1 row-span-12 md:col-span-1 md:row-span-12">
                <img src={undefined} alt='' className="w-full h-full bg-cover rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <span className="md:w-[20%] text-accent-text text-[11px]"><span className="inline-block mr-2">//</span> RESULTS</span>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-text-primary text-xl font-bold">
              Shipped faster. More consistently. With confidence.
            </h3>
            <p className="text-sm text-accent-text leading-5">
              Within 3 months of adoption, the team reported 60% reduction in design-to-dev handoff time. Component duplication dropped
              to near zero across all product surfaces. Accessibility audits went from failing to passing across the board.
            </p>
            <p className="text-sm text-accent-text leading-5">
              Key takeaway: a design system isn't a project you finish — 
              it's infrastructure you maintain. The most important work was writing great documentation and making contributors feel welcome.
            </p>
          </div>
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedLink 
          classes={`${Number(project?.id) <= 1 && 'opacity-50 cursor-not-allowed'}
          flex flex-col gap-2 p-4 bg-surface-elevated 
          border border-border-default rounded-3xl shadow-shadow-medium shadow-lg`}
          route='/projects/detail/$projectId'
          params={{projectId: String(Number(project?.id) - 1) }}
          func={()=>undefined}
          disabled={Number(project?.id) <= 1}>
            <div className="flex gap-2 items-center">
              <ArrowLeft size={16} className='text-accent-primary'/>
              <div className='flex flex-col gap-4'>
                <h4 className="font-bold text-[11px] text-text-muted">Previous</h4>
                <p className="text-accent-text text-[14px]">{projectsArr?.find(p => Number(project?.id) - 1 === Number(p.id))?.title || '— None'}</p>
              </div>
            </div>
          </AnimatedLink>
          <AnimatedLink 
          classes={`${Number(project?.id) >= projectsArr.length && 'opacity-50 cursor-not-allowed'}
          flex flex-col items-end gap-2 p-4 bg-surface-elevated 
          border border-border-default rounded-3xl shadow-shadow-medium shadow-lg`}
          route='/projects/detail/$projectId'
          params={{projectId: String(Number(project?.id) + 1) }}
          func={()=>undefined}
          disabled={Number(project?.id) >= projectsArr.length}>
            <div className="flex gap-2 items-center">
              <div className='flex flex-col items-end gap-4'>
                <h4 className="font-bold text-[11px] text-text-muted">Next</h4>
                <p className="text-accent-text text-[14px]">{projectsArr?.find(p => Number(project?.id) + 1 === Number(p.id))?.title || '— None'}</p>
              </div>
              <ArrowRight size={16} className='text-accent-primary'/>
            </div>
          </AnimatedLink>
        </div>
        <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
      </div>
    </section>
  )
}
