import AnimatedButton from '#/components/AnimatedButton'
import { useNav } from '#/context/navContext'
import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, SendIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { supabase } from '#/lib/supabase'
import { toast } from 'sonner'

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
    const [formData, setFormData] = useState({name:'', email:'', subject:'', message:''})
    const [isPending, setIsPending] = useState(false)
    const selectRef = useRef<HTMLSelectElement|null>(null)

    useEffect(()=>{
        if (selectRef.current) {
            selectRef.current.selectedIndex = 0
        }
    },[])


    const handleSubmit = async(e:React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault() 

        const data = new FormData(e.currentTarget)

        const name = data.get('name') as string
        const email = data.get('email') as string
        const subject = data.get('subject') as string
        const message = data.get('message') as string

        if(!name || !email ||! subject || !message ){
            toast.error('Please fill in all fields.')
            return
        }

        if(!email.includes('@') ){
            toast.error('Please enter a valid email address.')
            return
        }

        setIsPending(true)

        const { error:dbError } = await supabase
        .from('Contact-messages')
        .insert({
            name,
            email,
            subject,
            message,
        })

        if (dbError) {
            console.error(dbError)
            toast.error('Something went wrong. Please try again.')
            setIsPending(false)
            return
        }

        const { error: emailError } = await supabase.functions.invoke(
        'send-contact-email',
        {
            body: {
            name,
            email,
            subject,
            message,
            },
        }
        )

        if (emailError) {
        console.error(emailError)
        toast.error('Message saved, but email notification failed.')
        setIsPending(false)
        return
        }
        
        setIsPending(false)
        setFormData({name:'', email:'', subject:'', message:''})
          toast.success('Message sent successfully')
    }

  return(
    <section>
        <div className="page-wrap mt-34 relative">
            <div className={`md:hidden ${isOpen && 'absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto'}`}
            onClick={()=>setIsOpen(false)}></div>
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
                        <span className="flex shrink-0 w-3 h-3 rounded-full bg-success"></span>
                        <h3 className="text-xs md:text-sm text-text-primary font-semibold">Available for new projects</h3>
                    </div>
                </div>
            </div>
            <hr className="text-text-muted w-full h-0.5 mt-18 mb-18" />
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col gap-4 lg:w-[70%] bg-surface-elevated border border-text-muted p-7 lg:h-fit rounded-xl">
                    <h3 className="text-text-primary text-xl font-bold">
                    Send a message
                    </h3>
                    <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6'>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className='flex flex-1 flex-col gap-1'>
                                <label htmlFor="name" className='text-text-primary text-[12px] font-semibold'>Your name</label>
                                <div className='relative w-full h-10 input-wrapper'>
                                 <input type="text" name='name' id='name' maxLength={100} value={formData.name} onChange={(e)=>setFormData(prev =>({...prev, 'name':e.target.value}))}
                                 className='absolute top-0 left-0 w-full bg-surface-elevated border border-text-muted py-2 px-6 outline-0
                                  h-10 rounded-xl text-md text-text-primary font-normal placeholder:text-text-muted placeholder:font-normal' 
                                  placeholder='e.g  Raphael  Onwujekwe'/>
                                 <svg 
                                 className='absolute inset-0 w-full h-full text-accent-text
                                 pointer-events-none'
                                 viewBox='0 0 200 20'
                                 preserveAspectRatio='none'>
                                   <rect 
                                    x="1"
                                    y="1"
                                    width="198"
                                    height="18"
                                    rx="5"
                                    ry="5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth='0.8'
                                    pathLength={100}
                                    strokeDasharray={100}
                                    strokeDashoffset={100}
                                    className='rotate-border'
                                   />
                                 </svg>
                                </div>
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <label htmlFor="email" className='text-text-primary text-[12px] font-semibold'>Email address</label>
                                <div className='relative w-full h-10 input-wrapper'>
                                <input type="text" name='email' id='email' maxLength={100} value={formData.email} onChange={(e)=>setFormData(prev =>({...prev, 'email':e.target.value}))}
                                className='absolute top-0 left-0 w-full bg-surface-elevated border border-text-muted py-2 px-6 outline-0
                                 h-10 rounded-xl text-md text-text-primary font-normal placeholder:text-text-muted placeholder:font-normal' 
                                 placeholder='e.g  chibuzor@gmail.com'/>
                                <svg
                                className='absolute inset-0 w-full h-full text-accent-hover
                                pointer-events-none'
                                viewBox='0 0 200 20'
                                preserveAspectRatio='none'>
                                <rect
                                x='1'
                                y='1'
                                width='198'
                                height='18'
                                rx='5'
                                ry='5'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='0.8'
                                pathLength={100}
                                strokeDasharray={100}
                                strokeDashoffset={100}
                                className='rotate-border'
                                />
                                </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col gap-1'>
                            <label htmlFor="subject" className='text-text-primary text-[12px] font-semibold'>Subject</label>
                            <div  className='w-full h-10
                                bg-surface-elevated border border-text-muted outline-0
                                rounded-xl text-md text-text-primary font-normal'>
                                <select name="subject" ref={selectRef} id="subject" value={formData.subject} onChange={(e)=>setFormData(prev =>({...prev, 'subject':e.target.value}))}
                                className='w-full h-full cursor-pointer focus:ring-2 focus:ring-accent-hover
                                rounded-xl bg-surface-elevated outline-none'>
                                    <option value="" disabled className='text-text-muted!'>Select subject...</option>
                                    <option value="contract-work">Contract Work</option>
                                    <option value="project-inquiry">Project Inquiry</option>
                                    <option value="collaboration">Collaboration</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col gap-1'>
                            <label htmlFor="message" className='text-text-primary text-[12px] font-semibold'>Message</label>
                            <div
                            className='w-full focus:ring focus:ring-accent-hover'>
                            <textarea name="message" id="message" maxLength={2000} rows={6} value={formData.message} onChange={(e)=>setFormData(prev =>({...prev, 'message':e.target.value}))}
                            className='w-full focus:ring focus:ring-accent-hover
                                bg-surface-elevated border border-text-muted py-2 pl-6 pr-4 outline-0
                                rounded-xl text-md text-text-primary font-normal'
                                placeholder="Hi Raphael, I'd love to discuss..."/>
                            </div>
                        </div>
                        <AnimatedButton 
                        classes={`flex gap-2 items-center py-3 px-6 rounded-xl flex justify-center items-center w-full 
                        transition hover:bg-accent-hover text-text-primary text-sm shadow-shadow-medium shadow-lg ${isPending ? 'bg-accent-hover cursor-not-allowed' : 'bg-accent-primary cursor-pointer'}`}
                        func={()=> undefined}
                        disabled={isPending}
                        type='submit'>{isPending ? 'Sending Message...' :
                         ( <>
                            <SendIcon size={16} className='shrink-0'/>  Send Message
                          </> )}
                        </AnimatedButton>
                    </form>
                </div>
                <hr className="block lg:hidden text-text-muted w-full h-0.5 mt-18 mb-18" />
                <div className="flex flex-col gap-4 lg:w-[30%]">
                    <h3 className="text-text-primary text-xl font-bold">
                     Other ways to reach me
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex flex-wrap sm:flex-nowrap gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <Mail size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">Email</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">onwujekwechibuzor@gmail.com</p>
                                    <p className="text-text-primary text-[11px] lg:w-[70%] leading-6 font-semibold">
                                        Best for project inquiries and collaborations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex flex-wrap sm:flex-nowrap gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <FaTwitter size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">Twitter</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">@raph_maxi</p>
                                    <p className="text-text-primary text-[11px] leading-6 font-semibold">My DM is always open.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex flex-wrap sm:flex-nowrap gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <FaLinkedin size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">LinkedIn</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">Chibuzor Onwujekwe</p>
                                    <p className="text-text-primary text-[11px] lg:w-[70%] leading-6 font-semibold">
                                        Professional background and endorsements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                            <div className="flex flex-wrap sm:flex-nowrap gap-4">
                                <div className="bg-accent-primary p-2 rounded-lg h-fit w-fit">
                                    <FaGithub size={19} className='shrink-0'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-text-primary text-sm">Github</h4>
                                    <p className="text-accent-text text-[11px] font-semibold">github.com/Maxi-Raph</p>
                                    <p className="text-text-primary text-[11px] lg:w-[70%] leading-6 font-semibold">
                                        Browse my open source contributions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-elevated border border-text-muted rounded-xl p-3">
                        <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center">
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