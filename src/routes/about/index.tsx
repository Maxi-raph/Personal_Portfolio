import AnimatedLink from "#/components/AnimatedLink";
import TechStack from "#/components/TechStack";
import { useNav } from "#/context/navContext";
import { createFileRoute } from "@tanstack/react-router";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


export const Route = createFileRoute('/about/')({
  component: AboutPage,
})

function AboutPage ()  {
    const {isOpen, setIsOpen} = useNav()
    
    return (
        <section className='relative'>
            <div className={`md:hidden ${isOpen && 'absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto'}`}
            onClick={()=>setIsOpen(false)}></div>
            <div className="page-wrap mt-34">
              <div className="mx-auto md:mx-0">
                <span className="md:w-[20%] text-accent-text text-[11px] block mb-2"><span className="inline-block mr-2">//</span> ABOUT ME</span>
                <h1 className="text-3xl md:text-5xl text-text-primary font-extrabold max-w-xl md:max-w-2xl mb-6 md:leading-16">
                    Frontend developer who
                    cares about the details.
                </h1>
                <p className="text-sm text-text-secondary md:w-138 leading-relaxed">
                    I'm Raphael Onwujekwe — a frontend developer based in Lagos with 2+ years building fast, accessible, 
                    and carefully crafted web products. I believe the best interfaces to be
                    invisible: they should be able to guide users naturally without getting in the way.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-13 lg:gap-18 mt-14">
                <div className="w-[70%] mx-auto sm:w-[50%] md:w-[26%] lg:w-[21%]">
                    <div className="w-full h-64 rounded-3xl mb-3">
                        <img src={undefined} alt="" className="w-full h-full object-cover rounded-3xl"/>
                    </div>
                    <div className="flex gap-2 w-full items-center">
                        <span className="flex shrink-0 rounded-full w-2 h-2 bg-accent-primary shadow-3xl shadow-accent-primary"></span>
                        <p className="text-[12px] text-text-muted leading-relaxed tracking-widest whitespace-nowrap">Open to opportunities</p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col gap-6">
                        <p className="text-sm text-text-secondary">
                            Currently exploring: generative UI, React Server Components, and pushing the edges of what CSS can do. When I'm not coding, I sketch UI concepts,
                            contribute to open source, and collect design references obsessively.
                        </p>
                        <p className="text-sm text-text-secondary">
                            I care deeply about performance, usability, and the small details
                             that make a product feel alive. Every pixel is intentional.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center w-[86%] mx-auto md:mx-0">
                            <AnimatedLink 
                            classes='flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl
                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background focus:bg-accent-hover focus:text-background active:bg-accent-hover active:text-background text-sm shadow-shadow-medium shadow-lg'
                            route='/projects'
                            func={()=> undefined}><FaTwitter size={16} className='shrink-0'/> Twitter</AnimatedLink>
                            <AnimatedLink 
                            classes='flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl
                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background focus:bg-accent-hover focus:text-background active:bg-accent-hover active:text-background text-sm shadow-shadow-medium shadow-lg'
                            route='/projects'
                            func={()=> undefined}><FaGithub size={16} className='shrink-0'/> Github</AnimatedLink>
                            <AnimatedLink 
                            classes='col-span-2 md:col-span-1 flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl
                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background focus:bg-accent-hover focus:text-background active:bg-accent-hover active:text-background text-sm shadow-shadow-medium shadow-lg'
                            route='/about'
                            func={()=> undefined}><FaLinkedin size={16} className='shrink-0'/> LinkedIn</AnimatedLink>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
            <div className="page-wrap">
                <span className="md:w-[20%] text-accent-text text-[11px] block mb-2"><span className="inline-block mr-2">//</span> EXPERIENCE</span>
                <h2 className="text-text-primary text-2xl font-bold mb-12">
                    Where I've worked
                </h2>
                <div className="flex flex-col md:flex-row gap-3">
                    <span className="text-xs text-text-secondary md:w-[16%]">2025 — present</span>
                    <div className="flex flex-col gap-3 flex-1">
                        <h4 className="text-sm font-bold text-text-primary">Frontend Developer (Intern)</h4>
                        <p className="text-sm font-semibold text-accent-text">TrueMindsLtd</p>
                        <p className="text-sm text-text-secondary w-[90%]">
                          Worked with fellow interns across different tech stacks to
                          build a performant, pixel-perfect learning management system.</p>
                    </div>
                </div>
                <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
                <div className="flex flex-col md:flex-row gap-3">
                    <span className="text-xs text-text-secondary md:w-[16%]">2024 — 2025</span>
                    <div className="flex flex-col gap-3 flex-1">
                        <h4 className="text-sm font-bold text-text-primary">Frontend Developer</h4>
                        <p className="text-sm font-semibold text-accent-text">Fintava</p>
                        <p className="text-sm text-text-secondary w-[90%]">
                            Leading frontend architecture 
                            for a fintech SaaS platform serving 200k+ users across West Africa.</p>
                    </div>
                </div>
                <hr className="text-text-muted w-full h-0.5 mt-10 mb-10" />
                <div className="flex flex-col md:flex-row gap-3">
                    <span className="text-xs text-text-secondary md:w-[16%]">2021 — 2023</span>
                    <div className="flex flex-col gap-3 flex-1">
                        <h4 className="text-sm font-bold text-text-primary">Frontend Developer</h4>
                        <p className="text-sm font-semibold text-accent-text">Raven Atlas</p>
                        <p className="text-sm text-text-secondary w-[90%]">
                           Built and maintained the design system and core product interfaces from scratch.</p>
                    </div>
                </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
            <div className="page-wrap">
                <span className="md:w-[20%] text-accent-text text-[11px] block mb-2"><span className="inline-block mr-2">//</span> TECH STACK</span>
                <h2 className="text-text-primary text-2xl font-bold mb-6">
                   Tools I work With
                </h2>   
                <TechStack 
                techStack={
                    [
                    { name: 'HTML'},
                    { name: 'CSS / Tailwind'},
                    { name: 'JavaScript'},
                    { name: 'TypeScript'},
                    { name: 'React'},
                    { name: 'Next.js'},
                    { name: 'Framer Motion'},
                    { name: 'Figma'},
                    { name: 'Git / GitHub'},
                    { name: 'Node.js'},
                    ]}
                containerClass={`flex flex-wrap items-center gap-3
                    transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] duration-500`}
                classes='block bg-surface py-1 px-4 rounded-2xl text-text-secondary
                    text-xs font-bold border border-text-muted shadow-shadow-medium shadow-lg
                    transition-all'
                    /> 
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18" />
        </section>
     );
}
 
export default AboutPage;