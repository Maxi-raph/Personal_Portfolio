import AnimatedButton from '#/components/AnimatedButton'
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
          <hr className="block lg:hidden text-text-muted w-full h-0.5 mt-18 mb-18" />
          <div className="flex flex-col md:flex-row gap-4">
            <span className="md:w-[40%] text-accent-text text-[11px] block"><span className="inline-block mr-2">//</span>EXPERIENCE</span>
            <div className="flex-col gap-4">
              <div className='flex flex-col gap-3'>
                <h3 className="text-text-primary font-bold">Fron</h3>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
