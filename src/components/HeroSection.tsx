import AnimatedLink from '#/components/AnimatedLink'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'


const HeroSection = () => {
   
    return ( 
    <>
     {/* Desktop Hero Section */}
      <motion.section
      initial={{opacity:0 , y:30}}
      animate={{ opacity: 1, y: 0 }}
      transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
      suppressHydrationWarning
      className={`hidden md:flex gap-3 mt-34 page-wrap`}>
        <div className='md:w-[58%] lg:w-[65%]'>
          <div className="flex gap-2 w-full items-center">
            <span className="block rounded-full w-2 h-2 bg-accent-primary shadow-3xl shadow-accent-primary"></span>
            <p className="text-[11px] text-text-muted leading-relaxed tracking-widest">AVAILABLE FOR WORK - LAGOS, NIGERIA</p>
          </div>
          <h1 className='md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-snug max-w-xl mt-6'>I build modern, fast and beautiful web experiences.</h1>
          <p className="text-text-secondary text-sm font-normal mt-6 max-w-md leading-relaxed">
            I'm Raphael — a frontend engineer crafting smooth, accessible and pixel-perfect interfaces. I care deeply about performance,
             usability, and the small details that make a product feel alive.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <AnimatedLink 
            classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
             transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-shadow-medium shadow-lg'
            route='/projects'
            func={()=> undefined}>View Work <ArrowRight size={16}/></AnimatedLink>
            <AnimatedLink 
            classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
             transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-shadow-medium shadow-lg'
            route='/contact'
            func={()=> undefined}>Contact Me</AnimatedLink>
          </div>
          <hr className="text-text-muted w-full h-0.5 mt-10" />
          <div className='flex items-center mt-8'>
            <div className="flex flex-col gap-1 ml-2">
              <h2 className="font-bold text-text-primary text-3xl">2+</h2>
              <p className="text-text-muted text-xs">Years experience</p>
            </div>
            <span className="block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted"></span>
            <div className="flex flex-col gap-1 ml-2">
              <h2 className="font-bold text-text-primary text-3xl">30+</h2>
              <p className="text-text-muted text-xs">Projects shipped</p>
            </div>
            <span className="block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted"></span>
            <div className="flex flex-col gap-1 ml-2">
              <h2 className="font-bold text-text-primary text-3xl">2+</h2>
              <p className="text-text-muted text-xs">Happy clients</p>
            </div>
          </div>
        </div>
        <div className="md:w-[44%] lg:w-[35%] pt-18 pl-14 rounded-3xl">
          <div className="relative rounded-3xl">
            <span className="absolute -top-3 -right-2 block text-[11px] text-accent-primary
            bg-background w-fit p-2 rounded-2xl border border-border-default">
              <span className="mr-2">{'</>'}</span>{' React · Next.js · TypeScript'}
            </span>
            <img src="" alt="" className="w-90 h-104 border border-white rounded-3xl" />
            <span className="flex items-center absolute -bottom-3 -left-2 text-[13px] text-text-primary
            bg-background w-fit p-3 rounded-2xl border border-border-default">
              <span className="block rounded-full w-2 h-2 mr-2
              bg-success shadow-3xl shadow-accent-primary"></span>{' Open to opportunities'}
            </span>
          </div>
        </div>
      </motion.section>

    {/* Mobile Hero Section */}
      <section className="flex flex-col items-center md:hidden gap-4 mt-32 page-wrap">
          <div className="flex gap-2  w-full justify-center sm:justify-start items-center">
            <span className="block rounded-full w-2 h-2 bg-accent-primary shadow-3xl shadow-accent-primary"></span>
            <p className="text-[12px] text-text-muted leading-relaxed tracking-widest">AVAILABLE FOR WORK - LAGOS, NIGERIA</p>
          </div>
          <div className="relative shadow-xl rounded-3xl">
            <span className="absolute top-4 right-4 block text-[11px] text-accent-primary
            bg-background w-fit p-2 rounded-2xl border border-border-default">
              <span className="mr-2">{'</>'}</span>{' React · Next.js · TypeScript'}
            </span>
            <img src="" alt="" className="w-90 h-80 border border-white rounded-3xl" />
            <span className="flex items-center absolute bottom-4 left-4 text-[13px] text-text-primary
            bg-background w-fit p-3 rounded-2xl border border-border-default">
              <span className="block rounded-full w-2 h-2 mr-2
              bg-success shadow-3xl shadow-accent-primary"></span>{' Open to opportunities'}
            </span>
          </div>
          <h1 className='text-4xl sm:text-[38px] font-extrabold  text-text-primary leading-snug sm:tracking-wide max-w-xs sm:max-w-sm'>I build modern, fast and beautiful web experiences.</h1>
          <p className="text-text-muted text-sm font-normal mt-3 max-w-sm leading-relaxed">
            I'm Raphael — a frontend engineer crafting smooth, accessible and pixel-perfect interfaces. I care deeply about performance,
             usability, and the small details that make a product feel alive.
          </p>
          <div className="flex items-center gap-4">
            <AnimatedLink 
            classes='flex gap-2 shadow-shadow-medium shadow-lg items-center py-2.5 px-6 rounded-xl
             transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm'
            route='/projects'
            func={()=> undefined}>View Work <ArrowRight size={16}/></AnimatedLink>
            <AnimatedLink 
            classes='flex gap-2 shadow-shadow-medium shadow-lg items-center py-2.5 px-6 rounded-xl
             transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm'
            route='/contact'
            func={()=> undefined}>Contact Me</AnimatedLink>
          </div>
          <hr className="text-text-muted w-full h-0.5 mt-4" />
          <div className='flex items-center mt-4'>
            <div className="flex flex-col gap-1 ml-2">
              <h2 className="font-bold text-text-primary text-3xl">2+</h2>
              <p className="text-text-muted text-xs">Years experience</p>
            </div>
            <span className="block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted"></span>
            <div className="flex flex-col gap-1 ml-2">
              <h2 className="font-bold text-text-primary text-3xl">30+</h2>
              <p className="text-text-muted text-xs">Projects shipped</p>
            </div>
            <span className="block w-[0.1px] h-10 ml-6 mr-6 bg-text-muted"></span>
            <div className="flex flex-col gap-1 ml-2">
              <h2 className="font-bold text-text-primary text-3xl">2+</h2>
              <p className="text-text-muted text-xs">Happy clients</p>
            </div>
          </div>
      </section>
    </>
     );
}
 
export default HeroSection;