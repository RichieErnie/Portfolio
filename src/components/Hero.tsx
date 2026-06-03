import { Download } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── Left: Main content ── */}
        <div>

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-[#00e87a]/10 border border-[#00e87a]/20 text-[#00e87a] text-xs px-3 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00e87a] animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Building digital experiences<br />
            <span className="text-[#00e87a]">with logic and precision.</span>
          </h1>

          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg">
            I am a Frontend Developer focused on creating performant, scalable, and
            accessible web applications. I bridge the gap between design and engineering.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-[#00e87a] text-[#060d1b] font-semibold text-sm rounded hover:bg-[#00e87a]/90 transition-all duration-200 hover:scale-[1.02]"
            >
              View Projects
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1WS8QHy8l9dNgNxOnFwypIBqZ82LuOwEt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d1829] border border-white/10 text-slate-300 font-medium text-sm rounded hover:border-white/25 hover:text-white transition-all duration-200"
              download
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-[#0d1829] rounded-xl border border-white/10 overflow-hidden shadow-2xl">

            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0f1f] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-[#ff6058]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-slate-500 font-mono">developer.ts</span>
            </div>

            <div className="p-6 font-mono text-sm leading-8 select-none">
              <p>
                <span className="text-blue-400">const </span>
                <span className="text-[#00e87a]">developer</span>
                <span className="text-white"> = {'{'}</span>
              </p>
              <p className="pl-6">
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">'Richard Ogazi'</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-6">
                <span className="text-blue-300">role</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">'Frontend Developer'</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-6">
                <span className="text-blue-300">skills</span>
                <span className="text-slate-400">: </span>
                <span className="text-white">['</span>
                <span className="text-amber-300">React</span>
                <span className="text-white">', '</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-white">'],</span>
              </p>
              <p className="pl-6">
                <span className="text-blue-300">location</span>
                <span className="text-slate-400">: </span>
                <span className="text-amber-300">'Akure, Nigeria'</span>
                <span className="text-slate-500">,</span>
              </p>
              <p className="pl-6">
                <span className="text-blue-300">status</span>
                <span className="text-slate-400">: </span>
                <span className="text-[#00e87a]">'Open for work'</span>
              </p>
              <p><span className="text-white">{'};'}</span></p>
              <br />
              <p>
                <span className="text-blue-400">export default </span>
                <span className="text-[#00e87a]">developer</span>
                <span className="text-slate-500">;</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
