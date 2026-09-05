import AnimatedButton from '#/components/AnimatedButton'
import TechStack from '#/components/TechStack'
import { useNav } from '#/context/navContext'
import { createFileRoute } from '@tanstack/react-router'
import { DownloadIcon, Globe, Mail, MapPin } from 'lucide-react'
import { useRef, useEffect } from 'react'

export const Route = createFileRoute('/resume/')({
  component: ResumePage,
})

function ResumePage() {
    const {isOpen, setIsOpen} = useNav()
    const selectRef = useRef<HTMLSelectElement|null>(null)

    useEffect(()=>{
        if (selectRef.current) {
            selectRef.current.selectedIndex = 0
        }
    },[])

  return(
    <section>
        <div className="page-wrap mt-34">
          <div className={`md:hidden ${isOpen && 'absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto'}`}
          onClick={()=>setIsOpen(false)}></div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className='md:w-[78%]'>
              <span className="md:w-[20%] text-accent-text text-[11px] block"><span className="inline-block mr-2">//</span>RESUME</span>
              <h1 className="text-4xl lg:text-5xl text-text-primary font-extrabold md:max-w-md lg:max-w-xl mb-2 md:leading-13 lg:leading-16">
              Raphael Onwujekwe
              </h1>
              <p className="text-xl text-accent-text font-semibold mb-3">
                Frontend Developer
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <a href='https://' target='_blank' className="flex gap-1 items-center text-xs text-text-muted hover:text-accent-hover focus:text-accent-hover active:text-accent-hover">
                  <MapPin size={19} className='shrink-0'/>
                  Lagos, Nigeria
                </a>
                <a href='mailto:onwujekwechibuzor@gmail.com' className="flex gap-1 items-center text-xs text-text-muted hover:text-accent-hover focus:text-accent-hover active:text-accent-hover">
                  <Mail size={19} className='shrink-0'/>
                  onwujekwechibuzor@gmail.com
                </a>
                <a href='https://github.com/Maxi-raph' target='_blank' className="flex gap-1 items-center text-xs  text-text-muted  hover:text-accent-hover focus:text-accent-hover active:text-accent-hover">
                  <Globe size={19} className='shrink-0'/>
                  github.com/Maxi-raph
                </a>
              </div>
              <div className="flex gap-2 items-center bg-green-300/50 border-success/30 border
                w-fit px-2 py-1 rounded-xl">
                <span className="block rounded-full w-2 h-2 bg-success shadow-3xl shadow-primary"></span>
                <p className="text-[11px] text-success font-semibold leading-relaxed tracking-widest">AVAILABLE FOR WORK</p>
              </div>
            </div>
            <div className='md:w-[22%]'>
              <AnimatedButton
              classes='w-full md:w-fit bg-accent-primary text-text-primary text-xs hover:bg-accent-hover
              focus:bg-accent-hover active:bg-accent-hover
              py-3 px-4 rounded-4xl flex justify-center items-center gap-2 cursor-pointer'
              func={()=>null}>
                <DownloadIcon size={16} className='shrink-0' />
                Download PDF
              </AnimatedButton>
            </div>
          </div>
          <hr className="block text-text-muted w-full h-0.5 mt-18 mb-18" />
          <div className="flex flex-col md:flex-row gap-10">
            <span className="md:w-[26%] lg:w-[36%] xl:w-[40%] text-accent-text text-[11px] block"><span className="inline-block mr-2">//</span>EXPERIENCE</span>
            <div className="flex flex-col gap-10 flex-1">
              <div className='flex flex-col gap-3'>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-md font-bold text-text-primary">Frontend Developer (Intern)</h4>
                    <p className="text-sm font-semibold text-accent-text">TrueMindsLtd</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-text-muted text-sm">2023 — Present</p>
                    <p className="text-text-muted text-xs">Lagos, Nigeria</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm w-[93%] leading-relaxed">
                 Worked with fellow interns across different tech stacks to
                 build a performant, pixel-perfect learning management system.
                </p>
                <TechStack 
                 containerClass='flex flex-wrap gap-3 w-full'
                 classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
                 text-text-primary bg-surface shadow-shadow-medium shadow-md'
                 techStack={[{name:'React'}, {name:'TypeScript'}, {name:'Framer Motion'}]}
                />
              </div>      
              <div className='flex flex-col gap-3'>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-md font-bold text-text-primary">Frontend Developer (Intern)</h4>
                    <p className="text-sm font-semibold text-accent-text">Fintava</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-text-muted text-sm">2024 — 2025</p>
                    <p className="text-text-muted text-xs">Lagos, Nigeria</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm w-[93%] leading-relaxed">
                 Leading frontend architecture for a fintech SaaS platform 
                 serving 200k+ users across West Africa.
                </p>
                <TechStack 
                 containerClass='flex flex-wrap gap-3 w-full'
                 classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
                 text-text-primary bg-surface shadow-shadow-medium shadow-md'
                 techStack={[{name:'React'}, {name:'TypeScript'}, {name:'Framer Motion'}]}
                />
              </div>              
              <div className='flex flex-col gap-3'>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-md font-bold text-text-primary">Frontend Developer (Intern)</h4>
                    <p className="text-sm font-semibold text-accent-text">Raven Atlas</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-text-muted text-sm">2023 — 2024</p>
                    <p className="text-text-muted text-xs">Lagos, Nigeria</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm w-[93%] leading-relaxed">
                 Built and maintained the design system and core product interfaces from scratch.
                </p>
                <TechStack 
                 containerClass='flex flex-wrap gap-3 w-full'
                 classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
                 text-text-primary bg-surface shadow-shadow-medium shadow-md'
                 techStack={[{name:'React'}, {name:'TypeScript'}, {name:'Framer Motion'}]}
                />
              </div>              
            </div>
          </div>
          <hr className="block text-text-muted w-full h-0.5 mt-18 mb-18" />
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <span className="md:w-[26%] lg:w-[36%] xl:w-[40%] text-accent-text text-[11px] block"><span className="inline-block mr-2">//</span>SKILLS</span>
            {/*Desktop version for skills*/}
            <div className="hidden flex-1 md:grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-text-muted font-bold text-sm mb-3">FRONTEND</h3>
                <TechStack 
                 containerClass='flex flex-wrap gap-3 w-full'
                 classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
                 text-text-primary bg-background shadow-shadow-medium shadow-md'
                 techStack={
                  [{name:'React.js'}, {name:'TypeScript'}, {name:'TailwindCSS'}, 
                  {name:'React Router v7'}, {name:'Tanstack Start'}, {name:'Framer Motion'}]}
                />
              </div>
              <div>
                <h3 className="text-text-muted font-bold text-sm mb-3">API & DATA TOOLS</h3>
                <TechStack 
                 containerClass='flex flex-wrap gap-3 w-full'
                 classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
                 text-text-primary bg-background shadow-shadow-medium shadow-md'
                 techStack={[{name:'Supabase (BaaS)'}, {name:'Strapi (CMS)'}, {name:'REST APIs'}]}
                />
              </div>
              <div>
                <h3 className="text-text-muted font-bold text-sm mb-3">TOOLING</h3>
                <TechStack 
                 containerClass='flex flex-wrap gap-3 w-full'
                 classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
                 text-text-primary bg-background shadow-shadow-medium shadow-md'
                 techStack={[{name:'Git'}, {name:'Figma'}, {name:'Vite'}, {name:'Vercel'}, {name:'Render'}]}
                />
              </div>
              <div>
                <h3 className="text-text-muted font-bold text-sm mb-3">FRONTEND</h3>
                <TechStack 
                 containerClass='flex flex-wrap gap-3 w-full'
                 classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
                 text-text-primary bg-background shadow-shadow-medium shadow-md'
                 techStack={[{name:'Vitest'}, {name:'Jest'}]}
                />
              </div>
            </div>
            {/*Mobile version for skills*/}
            <TechStack 
              containerClass='md:hidden flex flex-wrap gap-3 w-full'
              classes='py-1 px-2 rounded-lg text-[10px] lg:text-nowrap 
              text-text-primary bg-background shadow-shadow-medium shadow-md'
              techStack={
                [{name:'React.js'}, {name:'TypeScript'}, {name:'TailwindCSS'},
                 {name:'React Router v7'}, {name:'Tanstack Start'}, {name:'Framer Motion'},
                 {name:'Supabase (BaaS)'}, {name:'Strapi (CMS)'}, {name:'REST APIs'},
                 {name:'Git'}, {name:'Figma'}, {name:'Vite'}, {name:'Vercel'}, 
                 {name:'Render'}, {name:'Vitest'}, {name:'Jest'}]}
            />
          </div>
          <hr className="block text-text-muted w-full h-0.5 mt-18 mb-18" />
          <div className="flex flex-col md:flex-row gap-10">
            <span className="md:w-[26%] lg:w-[36%] xl:w-[40%] text-accent-text text-[11px] block"><span className="inline-block mr-2">//</span>EDUCATION</span>
            <div className="flex flex-col gap-10 flex-1">
              <div className='flex flex-col gap-3'>
                <div className="flex justify-between gap-4 flex-wrap">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-md font-bold text-text-primary">B.sc. Estate Management</h4>
                    <p className="text-sm font-semibold text-accent-text">Nnamdi Azikiwe University</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-text-muted text-sm">2019 — 2026</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm sm:w-[96%] leading-relaxed">
                  Graduated with Second Class Upper Honours in Estate Management from Nnamdi Azikiwe University. 
                  The program gave me a strong foundation in property valuation, real estate development finance, 
                  and feasibility appraisal. I also gained practical experience in building analysis, 
                  land surveying, and data-driven decision making — skills that helped shape my analytical 
                  approach to frontend development today.
                </p>
              </div>
            </div>
          </div>
          <hr className="block text-text-muted w-full h-0.5 mt-18 mb-18" />

        </div>
    </section>
  )
}
