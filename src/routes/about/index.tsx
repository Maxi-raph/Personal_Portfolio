import AnimatedLink from "#/components/AnimatedLink";
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
                <span className="md:w-[20%] text-accent-text text-[11px] mb-6"><span className="inline-block mr-2">//</span> ABOUT ME</span>
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
                <div className="w-[65%] mx-auto sm:w-[50%] md:w-[26%] lg:w-[21%]">
                    <div className="w-full h-64 rounded-3xl mb-3">
                        <img src={undefined} alt="" className="w-full h-full object-cover rounded-3xl"/>
                    </div>
                    <div className="flex gap-2 w-full items-center">
                        <span className="block rounded-full w-2 h-2 bg-accent-primary shadow-3xl shadow-accent-primary"></span>
                        <p className="text-[12px] text-text-muted leading-relaxed tracking-widest">Open to opportunities</p>
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
                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
                            route='/projects'
                            func={()=> undefined}><FaTwitter size={16}/> Twitter</AnimatedLink>
                            <AnimatedLink 
                            classes='flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl
                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
                            route='/projects'
                            func={()=> undefined}><FaGithub size={16}/> Github</AnimatedLink>
                            <AnimatedLink 
                            classes='col-span-2 md:col-span-1 flex gap-2 justify-center items-center py-2.5 px-6 rounded-xl
                                transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-gray-700 shadow-md'
                            route='/about'
                            func={()=> undefined}><FaLinkedin size={16}/> LinkedIn</AnimatedLink>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-6 mb-18" />
        </section>
     );
}
 
export default AboutPage;