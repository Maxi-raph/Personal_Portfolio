import AnimatedButton from '#/components/AnimatedButton'
import AnimatedLink from '#/components/AnimatedLink'
import ExperimentProjects from '#/components/ExperimentProjects'
import FeaturedProjects from '#/components/FeaturedProjects'
import HeroSection from '#/components/HeroSection'
import TechStack from '#/components/TechStack'
import { useNav } from '#/context/navContext'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa'
import { 
  SiHtml5, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiFigma, 
  SiGit, 
  SiNodedotjs 
} from 'react-icons/si'


export const Route = createFileRoute('/')(
  { component: HomePage ,
    head: ()=>({
      meta: [
        {
          title: 'Where your dreams come to life'
        },
      ]
    })
  })

function HomePage() {
  const {isOpen, setIsOpen} = useNav()

  
  return (
    <main className='relative'>
      <div className={`md:hidden ${isOpen && 'absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto'}`}
      onClick={()=>setIsOpen(false)}></div>
      <HeroSection />
      <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
      <FeaturedProjects />
      <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
      <section className="page-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='flex flex-col gap-4'>
            <span className="text-accent-text text-xs"><span className="inline-block mr-2">//</span> ABOUT ME</span>
            <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-text-primary max-w-md md:max-w-sm lg:max-w-md">
              Good design isn't just how it looks — it's how it works, performs, and feels.
            </h2>
          </div>
          <div className='flex flex-col gap-4 mt-4 md:mt-0'>
            <p className="text-text-muted text-sm">
              I'm Raphael Onwujekwe — a frontend engineer based in Lagos with 2+ years building fast, accessible, and carefully crafted web products.
              I believe the best interfaces are invisible: they guide users naturally without getting in the way.
            </p>
            <p className="text-text-muted text-sm">
              Currently exploring: generative UI, React Server Components, and pushing the edges of what CSS can do. 
              When I'm not coding, I sketch UI concepts, and collect design references obsessively.
            </p>
            <div className="flex items-center gap-6">
              <AnimatedLink
              route='/'
              classes='py-2 px-4 text-xs font-semibold rounded-xl shadow-md
              transition shadow-gray-700 shadow-md bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm'
              func={()=> null}
              >Full Bio</AnimatedLink>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
      <section className="page-wrap flex flex-col gap-3">
            <span className="text-accent-text text-[11px]"><span className="inline-block mr-2">//</span> TECH STACK</span>
            <h2 className="text-3xl font-bold text-text-primary max-w-md">
              Tools I work with
            </h2>
            <div className="py-2">
              <TechStack 
              techStack={
                [
                  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
                  { name: 'CSS / Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
                  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                  { name: 'React', icon: SiReact, color: '#61DAFB' },
                  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
                  { name: 'Framer Motion', icon: SiFigma, color: '#F24E1E' },
                  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
                  { name: 'Git / GitHub', icon: SiGit, color: '#F05032' },
                  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
                ]}
              containerClass={`flex flex-wrap items-center gap-3 mt-9
                transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-500`}
              classes='block bg-surface py-2 px-4 rounded-xl text-text-secondary
                text-sm font-bold border border-text-muted shadow-gray-800 shadow-md
                transition-all'
                />
            </div>
      </section>
      <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
      <ExperimentProjects />
      <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
      <section className='page-wrap grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='flex flex-col gap-6'>
          <span className="text-accent-text text-[11px]"><span className="inline-block mr-2">//</span>CONTACT</span>
          <h2 className="text-2xl md:text-3xl! font-bold text-text-primary max-w-md md:max-w-sm lg:max-w-lg">
            Have a project in mind? Let's build something great.
          </h2>
          <p className="text-text-secondary text-sm leading-6">
            I'm currently open to freelance and full-time opportunities. Whether it's a new product,
            a UI overhaul, or a collaboration — I'd love to hear from you.
          </p>
          <div className='hidden md:flex flex-wrap items-center gap-4'>
            <a href="" target='_blank'>
              <AnimatedButton 
              classes='flex gap-2 items-center py-2.5 px-6 rounded-xl cursor-pointer
              transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
              func={()=>null}
              >
                <FaEnvelope className='shrink-0'/> Get In Touch
              </AnimatedButton>
            </a>
            <a href="" target='_blank'>
              <AnimatedButton 
              classes='flex gap-2 items-center py-2.5 px-6 rounded-xl cursor-pointer
              transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
              func={()=>null}
              >
                <FaTwitter className='shrink-0'/> Twitter
              </AnimatedButton>
            </a>
            <a href="" target='_blank'>
              <AnimatedButton 
              classes='flex gap-2 items-center py-2.5 px-6 rounded-xl cursor-pointer
              transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
              func={()=>null}
              >
                <FaGithub className='shrink-0'/> Github
              </AnimatedButton>
            </a>
          </div>
          <hr className="block md:hidden text-text-muted w-full h-0.5" />
        </div>
        <div className='flex flex-col md:text-end gap-4'>
          <div className="flex justify-between md:flex-col md:justify-start gap-2">
            <p className="text-text-muted text-xs">Email</p>
            <p className="text-text-primary text-xs">onwujekwechibuzor@gmail.com</p>
          </div>
          <div className="flex justify-between md:flex-col md:justify-start gap-2">
            <p className="text-text-muted text-xs">Location</p>
            <p className="text-text-primary text-xs">Lagos, Nigeria (Remote, OK)</p>
          </div>
          <div className="flex justify-between md:flex-col md:justify-start gap-2">
            <p className="text-text-muted text-xs">Availability</p>
            <p className="text-text-primary text-xs">
              <span className="inline-block rounded-full w-2 h-2 mr-2
              bg-success shadow-3xl shadow-accent-primary"></span> Available now
            </p>
          </div>
          <hr className="block md:hidden text-text-muted w-full h-0.5 mt-4" />
        </div>
        <div className='grid grid-cols-12 md:hidden w-full gap-6'>
          <a href="" target='_blank' className='col-span-12'>
            <AnimatedButton 
            classes='w-full flex gap-2 items-center justify-center py-2.5 px-6 rounded-xl cursor-pointer
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
            func={()=>null}
            >
              <FaEnvelope className='shrink-0'/> Get In Touch
            </AnimatedButton>
          </a>
          <a href="" target='_blank' className='col-span-6'>
            <AnimatedButton 
            classes='w-full flex gap-2 items-center justify-center py-2.5 px-6 rounded-xl cursor-pointer
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
            func={()=>null}
            >
              <FaTwitter className='shrink-0'/> Twitter
            </AnimatedButton>
          </a>
          <a href="" target='_blank' className='col-span-6'>
            <AnimatedButton 
            classes='w-full flex gap-2 items-center justify-center py-2.5 px-6 rounded-xl cursor-pointer
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
            func={()=>null}
            >
              <FaGithub className='shrink-0'/> Github
            </AnimatedButton>
          </a>
        </div>
      </section>
      <hr className="text-text-muted w-full h-0.5 mt-10" />
    </main>
  )
}
