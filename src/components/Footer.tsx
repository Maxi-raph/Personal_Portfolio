export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pt-8 pb-8 bg-background">
      <div className="flex flex-col md:flex-row gap-4 page-wrap">
        <h5 className="max-w-md flex-1 font-bold text-text-primary text-[12px]">Raphael.dev</h5>
        <div className="flex-1 flex flex-col md:flex-row-reverse justify-between items-center gap-4">
          <div className="flex gap-8 items-center text-text-secondary text-[12px] font-semibold">
            <a href="" target="_blank" className="hover:text-accent-hover hover:underline transition">Twitter</a>
            <a href="" target="_blank" className="hover:text-accent-hover hover:underline transition">Github</a>
            <a href="" target="_blank" className="hover:text-accent-hover hover:underline transition">LinkedIn</a>
          </div>
          <span className="text-text-secondary text-[12px]">
            &copy; {year} Raphael Onwujekwe. All rights reserved.
          </span>
          </div>
      </div>
    </footer>
  )
}
