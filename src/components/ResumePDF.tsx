const ResumePDF = () => {
  return (
    <div 
    id="resume-pdf"
    className="w-[210mm] min-h-[297mm] bg-white p-[15mm] text-black">

        <div className="flex flex-col gap-4">
            {/* Header */}
            <div>
                <p className="text-[11px] text-[#7c4dff] mb-2">
                    // RESUME
                </p>

                <h1 className="text-4xl font-extrabold tracking-tight">
                    Raphael Onwujekwe
                </h1>

                <p className="text-xl font-semibold text-[#7c4dff] mt-1">
                    Frontend Developer
                </p>

                <div className="flex items-center gap-4 mt-4 text-xs text-[#6b7280]">
                    <span>Lagos, Nigeria</span>
                    <a
                    href="mailto:onwujekwechibuzor@gmail.com"
                    className="text-[#6b7280]"
                    >
                    onwujekwechibuzor@gmail.com
                    </a>
                    <a
                    href="https://github.com/Maxi-raph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6b7280]"
                    >
                    github.com/Maxi-raph
                    </a>
                </div>

                <div className="flex items-center justify-center gap-2 w-fit px-2 py-1 rounded-xl mt-3">
                    <span className="block mt-2.25 rounded-full w-2 h-2 bg-[#22c55e]" />

                    <p className="text-[10px] text-[#16a34a] font-semibold tracking-widest">
                    AVAILABLE FOR WORK
                    </p>
                </div>
            </div>
            {/* Divider */}
            <hr className="border-[#d1d5db] my-8" />

            {/* Experience */}
            <div className="flex gap-8">

                {/* Section label */}
                <div className="w-[25%] shrink-0">
                    <span className="text-[11px] text-[#7c4dff]">
                    // EXPERIENCE
                    </span>
                </div>

                {/* Experience content */}
                <div className="flex-1 space-y-7">

                    <div>
                        <div className="flex justify-between gap-4">
                            <div>
                            <h3 className="text-sm font-bold">
                                Frontend Developer (Intern)
                            </h3>

                            <p className="text-xs font-semibold text-[#7c4dff] mt-1">
                                TrueMindsLtd
                            </p>
                            </div>

                            <div className="text-right">
                            <p className="text-xs text-[#6b7280]">
                                2023 — Present
                            </p>

                            <p className="text-[10px] text-[#6b7280] mt-1">
                                Lagos, Nigeria
                            </p>
                            </div>
                        </div>

                        <p className="text-xs text-[#4b5563] leading-relaxed mt-3">
                            Worked with fellow interns across different tech stacks to
                            build a performant, pixel-perfect learning management system.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {['React', 'TypeScript', 'Framer Motion'].map((tech) => (
                            <span
                                key={tech}
                                className="flex items-center justify-center px-2 py-1 rounded-md text-[9px] font-semibold"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between gap-4">
                            <div>
                            <h3 className="text-sm font-bold">
                                Frontend Developer (Intern)
                            </h3>

                            <p className="text-xs font-semibold text-[#7c4dff] mt-1">
                                Fintava
                            </p>
                            </div>

                            <div className="text-right">
                            <p className="text-xs text-[#6b7280]">
                                2024 — 2025
                            </p>

                            <p className="text-[10px] text-[#6b7280] mt-1">
                                Lagos, Nigeria
                            </p>
                            </div>
                        </div>

                        <p className="text-xs text-[#4b5563] leading-relaxed mt-3">
                            Leading frontend architecture for a fintech SaaS platform
                            serving 200k+ users across West Africa.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {['React', 'TypeScript', 'Framer Motion'].map((tech) => (
                            <span
                                key={tech}
                                className="flex items-center justify-center px-2 py-1 rounded-md text-[9px] font-semibold"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between gap-4">
                            <div>
                            <h3 className="text-sm font-bold">
                                Frontend Developer (Intern)
                            </h3>

                            <p className="text-xs font-semibold text-[#7c4dff] mt-1">
                                Raven Atlas
                            </p>
                            </div>

                            <div className="text-right">
                            <p className="text-xs text-[#6b7280]">
                                2023 — 2024
                            </p>

                            <p className="text-[10px] text-[#6b7280] mt-1">
                                Lagos, Nigeria
                            </p>
                            </div>
                        </div>

                        <p className="text-xs text-[#4b5563] leading-relaxed mt-3">
                            Built and maintained the design system and core product
                            interfaces from scratch.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {['React', 'TypeScript', 'Framer Motion'].map((tech) => (
                            <span
                                key={tech}
                                className="flex items-center justify-center px-2 py-1 rounded-md text-[9px] font-semibold"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <hr className="border-[#d1d5db] my-8" />

            {/* Skills */}
            <div className="flex gap-8">

                {/* Section label */}
                <div className="w-[25%] shrink-0">
                    <span className="text-[11px] text-[#7c4dff]">
                    // SKILLS
                    </span>
                </div>

                {/* Skills content */}
                <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">

                    <div>
                        <h3 className="text-[10px] font-bold text-[#6b7280] mb-3">
                            FRONTEND
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {[
                            'React.js',
                            'TypeScript',
                            'TailwindCSS',
                            'React Router v7',
                            'TanStack Start',
                            'Framer Motion',
                            ].map((skill) => (
                            <span
                                key={skill}
                                className="flex items-center justify-center px-2 py-1 rounded-md text-[9px]"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-bold text-[#6b7280] mb-3">
                            API & DATA TOOLS
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {[
                            'Supabase (BaaS)',
                            'Strapi (CMS)',
                            'REST APIs',
                            ].map((skill) => (
                            <span
                                key={skill}
                                className="flex items-center justify-center px-2 py-1 rounded-md text-[9px] font-semibold"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-bold text-[#6b7280] mb-3">
                            TOOLING
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {[
                            'Git',
                            'Figma',
                            'Vite',
                            'Vercel',
                            'Render',
                            ].map((skill) => (
                            <span
                                key={skill}
                                className="flex items-center justify-center px-2 py-1 rounded-md text-[9px] font-semibold"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-bold text-[#6b7280] mb-3">
                            TESTING
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {[
                            'Vitest',
                            'Jest',
                            ].map((skill) => (
                            <span
                                key={skill}
                                className="flex items-center justify-center px-2 py-1 rounded-md text-[9px] font-semibold"
                            >
                                {skill}
                            </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <hr className="border-[#d1d5db] my-8" />

            {/* Education */}
            <div className="flex gap-8">

                {/* Section label */}
                <div className="w-[25%] shrink-0">
                    <span className="text-[11px] text-[#7c4dff]">
                    // EDUCATION
                    </span>
                </div>

                {/* Education content */}
                <div className="flex-1">

                    <div className="flex justify-between gap-6">

                        <div>
                            <h3 className="text-sm font-bold">
                            B.Sc. Estate Management
                            </h3>

                            <p className="text-xs font-semibold text-[#7c4dff] mt-1">
                            Nnamdi Azikiwe University
                            </p>
                        </div>

                        <div className="text-right shrink-0">
                            <p className="text-xs text-[#6b7280]">
                            2019 — 2026
                            </p>
                        </div>

                    </div>

                    <p className="text-xs text-[#4b5563] leading-relaxed mt-3">
                    Graduated with Second Class Upper Honours in Estate Management
                    from Nnamdi Azikiwe University. The program gave me a strong
                    foundation in property valuation, real estate development finance,
                    and feasibility appraisal. I also gained practical experience in
                    building analysis, land surveying, and data-driven decision making
                    — skills that helped shape my analytical approach to frontend
                    development today.
                    </p>

                </div>
            </div>
        </div>

    </div>
  )
}

export default ResumePDF