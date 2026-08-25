import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import { FileText} from 'lucide-react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import AnimatedLink from './AnimatedLink';
import { useNav } from '#/context/navContext';

export default function Header() {
   const {isOpen, setIsOpen} = useNav()
 
  return (
    <header className="fixed w-full top-0 z-50 border-b border-border-default bg-background/50 px-4 py-2 backdrop-blur-2xl">
      {/*  Desktop Navigation */}
      <nav className="hidden md:flex page-wrap flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4">
        <Link to={'/'} 
        className="font-bold text-text-primary">Raphael.dev</Link>

        <div className="flex md:gap-6 lg:gap-8 justify-center items-center">
          <AnimatedLink 
          classes='text-text-muted text-sm transition py-1 px-4 
          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg
          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] 
          data-[status=active]:rounded-lg'
          route='/'
          func={()=> undefined}>Home</AnimatedLink>

          <AnimatedLink 
          classes='text-text-muted text-sm transition py-1 px-4 
          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg
          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] 
          data-[status=active]:rounded-lg'
          route='/about'
          func={()=> undefined}>About</AnimatedLink>

          <AnimatedLink 
          classes='text-text-muted text-sm transition py-1 px-4 
          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg
          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] 
          data-[status=active]:rounded-lg'
          route='/projects'
          func={()=> undefined}>Projects</AnimatedLink>

          <AnimatedLink 
          classes='text-text-muted text-sm transition py-1 px-4 
          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur hover:rounded-lg
          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)] 
          data-[status=active]:rounded-lg'
          route='/about'
          func={()=> undefined}>Contact</AnimatedLink>
          
        </div>
        <div className="flex gap-2 items-center">
          <AnimatedLink 
          classes='flex gap-2 items-center text-text-muted text-sm transition py-1 px-2 
          bg-accent-hover/10 hover:text-accent-hover bg-backdrop-blur rounded-lg'
          route='/'
          func={()=> undefined}><FileText size={16}/> Resume</AnimatedLink>
          <ThemeToggle />
        </div>
      </nav>
      {/*  Mobile Navigation */}
      <nav className="flex md:hidden page-wrap flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4">
        <Link to={'/'} className="font-bold text-text-primary" onClick={()=>{if(isOpen) setIsOpen(!isOpen)}}>Raphael.dev</Link>
        <div className={`absolute bg-surface-elevated border border-accent-primary/50 shadow-xl w-[96%] rounded-lg max-h-content top-19 right-2 z-20 flex flex-col text-center transition-opacity duration-200 ease-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <Link  to={'/'} 
          className="text-text-muted w-[94%] mx-auto rounded-3xl mb-2 mt-2 font-bold text-sm transition py-4 px-4 
          hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40
          data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]"
          onClick={()=>setIsOpen(!isOpen)}>Home</Link>

          <Link  to={'/about'} 
          className="text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4
           hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40
           data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]"
           onClick={()=>setIsOpen(!isOpen)}>About</Link>

          <Link  to={'/projects'} 
          className="text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4
           hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40
           data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]"
           onClick={()=>setIsOpen(!isOpen)}>Projects</Link>
        
          <Link  to={'/'} 
          className="text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4
           hover:bg-accent-hover/10 hover:text-accent-hover hover:bg-backdrop-blur/40
           data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]"
           onClick={()=>setIsOpen(!isOpen)}>Contact</Link>

          <Link  to={'/about'}
           className="text-text-muted w-[94%] mx-auto rounded-3xl mb-2 font-bold text-sm transition py-4 px-4 hover:bg-accent-hover/10
            hover:text-accent-hover hover:bg-backdrop-blur/40
            data-[status=active]:text-accent-primary data-[status=active]:bg-[color-mix(in_oklab,var(--accent-primary)_12%,transparent)]"
            onClick={()=>setIsOpen(!isOpen)}>Resume</Link>
            
        </div>
        <div className="flex gap-2 items-center">
          <button 
          className="hover:bg-accent-hover cursor-pointer p-2 rounded-lg text-text-muted hover:text-text-primary"
          onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen 
            ? <GiHamburgerMenu size={18}/>
            : <FaTimes size={18}/>}
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
