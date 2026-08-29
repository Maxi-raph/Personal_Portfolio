import AnimatedButton from '#/components/AnimatedButton'
import { useNav } from '#/context/navContext'
import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, SendIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Route = createFileRoute('/contact/')({
  component: ContactPage,
  head: ()=>({
    meta:[
        {title: 'Contact Me'}
    ]
  })
})

function ContactPage() {
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
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-2 lg:gap-6">
                <div>
                    <span className="md:w-[20%] text-accent-text text-[11px] block mb-2"><span className="inline-block mr-2">//</span>CONTACT</span>
                    <h1 className="text-4xl lg:text-5xl text-text-primary font-extrabold md:max-w-md lg:max-w-xl mb-6 md:leading-13 lg:leading-16">
                    Let's build something
                    worth remembering.
                    </h1>
                    <p className="text-sm text-text-secondary sm:w-140 md:w-120 lg:w-130 leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or just want to talk 
                    about frontend engineering — my inbox is open. I typically respond within 24 hours.
                    </p>
                </div>
                <div className='md:pt-16'>
                    <div className="bg-surface-elevated inline-flex justify-center items-center gap-2 py-2 px-3 md:py-3 md:px-5 rounded-2xl border border-text-muted shadow-shadow-medium shadow-md">
                        <span className="inline-block w-3 h-3 rounded-full bg-success"></span>
                        <h3 className="text-xs md:text-sm text-text-primary font-semibold">Available for new projects</h3>
                    </div>
                </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col gap-4 lg:w-[70%]">
                    <h3 className="text-text-primary text-xl font-bold">
                    Send a message
                    </h3>
                    <form action="" onSubmit={()=>null} className='flex flex-col gap-6'>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className='flex flex-1 flex-col gap-1'>
                                <label htmlFor="name" className='text-text-muted text-[11px] font-semibold'>Your name</label>
                                <input type="text" id='name' 
                                className='bg-surface-elevated border border-text-muted py-2 px-6 outline-0 focus:ring focus:ring-accent-hover
                                 h-11 rounded-xl text-md text-text-primary font-normal placeholder:text-text-muted placeholder:font-normal' 
                                 placeholder='e.g  Raphael  Onwujekwe'/>
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <label htmlFor="email" className='text-text-muted text-[11px] font-semibold'>Email address</label>
                                <input type="text" id='email' 
                                className='bg-surface-elevated border border-text-muted py-2 px-6 outline-0 focus:ring focus:ring-accent-hover
                                 h-11 rounded-xl text-md text-text-primary font-normal placeholder:text-text-muted placeholder:font-normal' 
                                 placeholder='e.g  chibuzor@gmail.com'/>
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col gap-1'>
                            <label htmlFor="subject" className='text-text-muted text-[11px] font-semibold'>Subject</label>
                            <div  className='
                                bg-surface-elevated border border-text-muted 
                                outline-0 focus:ring focus:ring-accent-hover
                                h-11 rounded-xl text-md text-text-primary font-normal'>
                                <select name="subject" ref={selectRef} id="subject" className='w-full h-full cursor-pointer rounded-xl bg-surface-elevated outline-none'>
                                    <option value="" disabled className='text-text-muted!'>Select subject...</option>
                                    <option value="contract-work">Contract Work</option>
                                    <option value="project-inquiry">Project Inquiry</option>
                                    <option value="collaboration">Collaboration</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col gap-1'>
                            <label htmlFor="message" className='text-text-muted text-[11px] font-semibold'>Message</label>
                            <textarea name="message" id="message" rows={6}
                            className='
                                bg-surface-elevated border border-text-muted py-2 pl-6 pr-4
                                outline-0 focus:ring focus:ring-accent-hover
                                rounded-xl text-sm text-text-primary font-normal 
                                placeholder:text-text-muted placeholder:font-normal cursor-pointer'
                                placeholder="Hi Raphael, I'd love to discuss..."/>
                        </div>
                        <AnimatedButton 
                        classes='flex gap-2 items-center py-3 px-6 rounded-xl flex justify-center items-center w-full md:w-fit  cursor-pointer
                        transition bg-accent-primary hover:bg-accent-hover text-text-primary text-sm shadow-shadow-medium shadow-lg'
                        func={()=> undefined}><SendIcon size={16} className='shrink-0'/>Send Message</AnimatedButton>
                    </form>
                </div>
                <hr className="block lg:hidden text-text-muted w-full h-0.5 mt-18 mb-18" />
                <div className="flex flex-col gap-4 lg:w-[30%]">
                    <h3 className="text-text-primary text-xl font-bold">
                     Other ways to reach me
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <Mail size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">Email</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">onwujekwechibuzor@gmail.com</p>
                                    <p className="text-text-muted text-[11px] lg:w-[70%] leading-6 font-semibold">
                                        Best for project inquiries and collaborations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <FaTwitter size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">Twitter</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">@raph_maxi</p>
                                    <p className="text-text-muted text-[11px] leading-6 font-semibold">My DM is always open.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <FaLinkedin size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">LinkedIn</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">Chibuzor Onwujekwe</p>
                                    <p className="text-text-muted text-[11px] lg:w-[70%] leading-6 font-semibold">
                                        Professional background and endorsements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <FaGithub size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">Github</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">github.com/Maxi-Raph</p>
                                    <p className="text-text-muted text-[11px] lg:w-[70%] leading-6 font-semibold">
                                        Browse my open source contributions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                        <div className="flex gap-4 items-center">
                            <MapPin size={19} className='shrink-0 text-gray-600'/>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-text-primary text-sm">Lagos, Nigeria</h4>
                                <p className="text-text-muted text-[11px] leading-6 font-semibold">
                                    WAT — UTC+1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18" />
        </div>
    </section>
  )
}
