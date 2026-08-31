import { useNav } from '#/context/navContext'
import { createFileRoute } from '@tanstack/react-router'
import { Globe, Mail, MapPin } from 'lucide-react'
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
        <div className={`md:hidden ${isOpen && 'absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto'}`}
        onClick={()=>setIsOpen(false)}></div>
        <div className="page-wrap mt-34">
          <div className="flex justify-between gap-4">
            <div>
              <span className="md:w-[20%] text-accent-text text-[11px] block"><span className="inline-block mr-2">//</span>RESUME</span>
              <h1 className="text-4xl lg:text-5xl text-text-primary font-extrabold md:max-w-md lg:max-w-xl mb-2 md:leading-13 lg:leading-16">
              Raphael Onwujekwe
              </h1>
              <p className="text-xl text-accent-text font-semibold mb-3">
                Frontend Developer
              </p>
              <div className="flex justify-center items-center gap-3 mb-3">
                <a href='https://' target='_blank' className="flex gap-1 items-center text-sm text-gray-600 hover:text-accent-hover focus:text-accent-hover active:text-accent-hover">
                  <MapPin size={19} className='shrink-0'/>
                  Lagos, Nigeria
                </a>
                <a href='https://onwujekwechibuzor@gmail.com' target='_blank'className="flex gap-1 items-center text-sm text-gray-600 hover:text-accent-hover focus:text-accent-hover active:text-accent-hover">
                  <Mail size={19} className='shrink-0'/>
                  onwujekwechibuzor@gmail.com
                </a>
                <a href='https://github.com/Maxi-raph' target='_blank' className="flex gap-1 items-center text-sm  text-gray-600  hover:text-accent-hover focus:text-accent-hover active:text-accent-hover">
                  <Globe size={19} className='shrink-0'/>
                  github.com/Maxi-raph
                </a>
              </div>
              <div className="flex gap- 2items-center bg-green-300/50 border border-10px
                w-fit px-1 py-2 rounded-xl">
                <span className="block rounded-full w-2 h-2 bg-success shadow-3xl shadow-primary"></span>
                <p className="text-[11px] text-text-muted leading-relaxed tracking-widest">AVAILABLE FOR WORK</p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}
