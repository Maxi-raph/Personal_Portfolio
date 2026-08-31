import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { NavProvider } from '#/context/navContext'
import appCss from '../styles.css?url'
import { FileQuestionMark, FolderOpen, Home } from 'lucide-react';
import AnimatedLink from '#/components/AnimatedLink'



const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`
 const notFoundPage = ()=>{

  return(
    <div className="flex justify-center pt-35 h-screen">
      <div>
        <div className="relative">
          <h1 className="text-text-muted/30 text-center text-[180px] font-bold">404</h1>
          <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] flex justify-center p-3 bg-surface/30 backdrop-blur-lg rounded-xl border border-accent-text">
          <FileQuestionMark size={24} className='text-accent-text'/>
          </div>
        </div>
        <h2 className=" font-extrabold text-4xl text-center text-text-primary">Page Not Found</h2>
        <p className="text-text-secondary text-sm mt-2 max-w-md text-center">
          Looks like this route wandered off into the void
          because the page you're looking for does not exist.</p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <AnimatedLink 
          classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background focus:bg-accent-hover focus:text-background active:bg-accent-hover active:text-background text-sm shadow-gray-700 shadow-md'
          route='/'
          func={()=> undefined}><Home size={16}/> Back To Home</AnimatedLink>
          <AnimatedLink 
          classes='flex gap-2 items-center py-2.5 px-6 rounded-xl
            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background focus:bg-accent-hover focus:text-background active:bg-accent-hover active:text-background text-sm shadow-gray-700 shadow-md'
          route='/projects'
          func={()=> undefined}><FolderOpen size={16}/> View Projects</AnimatedLink>
        </div>
      </div>
    </div>
  )
 }

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Ralph\'s Portfolio',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: notFoundPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-clip" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
          <HeadContent />
          </head>
          <NavProvider>
            <body className="overflow-x-clip">
              <Header />
              <main className='px-4'>
                {children}
              </main>
              <Footer />
              <TanStackDevtools
              config={{
                position: 'bottom-right',
              }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
              />
              <Scripts />
            </body>
          </NavProvider>
    </html>
  )
}

