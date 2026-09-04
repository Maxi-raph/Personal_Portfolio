import AnimatedLink from '#/components/AnimatedLink'
import { ArrowRight } from 'lucide-react'
import ExperimentCard from '#/components/ExperimentCard'


const ExperimentProjects = () => {
    return ( 
        <>
            <section className="page-wrap flex flex-col gap-3">
                    <div className="flex flex-wrap gap-4 justify-between items-center mt-2 mb-6">
                    <div className='flex flex-col gap-2'>
                        <span className="text-accent-text text-[11px]"><span className="inline-block mr-2">//</span>PLAYGROUND</span>
                        <h2 className="text-2xl md:text-3xl! lg:text-4xl! font-bold text-text-primary max-w-md">
                        Experiments
                        </h2>
                    </div>
                    <AnimatedLink 
                    classes='text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-110 transition'
                    route='/'
                    func={()=> undefined}>All  Experiments<ArrowRight className='inline-block ml-1 shrink-0' size={14}/></AnimatedLink>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ExperimentCard 
                    title='Magnetic Cursor'
                    desc='SVG-based cursor that morphs and responds to UI elements on hover.'
                    label='Interaction'
                    />
                    <ExperimentCard 
                    title='Magnetic Cursor'
                    desc='SVG-based cursor that morphs and responds to UI elements on hover.'
                    label='Interaction'
                    />
                    <ExperimentCard 
                    title='Magnetic Cursor'
                    desc='SVG-based cursor that morphs and responds to UI elements on hover.'
                    label='Interaction'
                    />
                    <ExperimentCard 
                    title='Magnetic Cursor'
                    desc='SVG-based cursor that morphs and responds to UI elements on hover.'
                    label='Interaction'
                    />
                    </div>
            </section>
        </>
     );
}
 
export default ExperimentProjects;