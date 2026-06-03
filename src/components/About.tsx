import { User } from 'lucide-react'
import { HIGHLIGHTS } from '../data/Projects'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-14">
          <User size={20} className="text-slate-400" />
          <h2 className="text-2xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="md:col-span-2">

            <div className="inline-flex items-center gap-2 bg-[#00e87a]/10 border border-[#00e87a]/20 text-[#00e87a] text-xs px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00e87a] animate-pulse" />
              Open to Work
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-5">
              I'm Richard Ogazi, a passionate developer specializing in creating web and mobile applications
              that solve real problems — from movie discovery platforms to IoT smart waste
              collection systems.
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-10">
              My journey started with HTML and CSS, but a fascination with how logic meets
              design led me to master the modern web stack. I'm passionate about clean code,
              great user experience, and building things that actually work in the real world.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-base">{item.emoji}</span>
                  <span className="text-slate-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Stat cards ──────────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#0d1829] border border-white/10 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-white mb-2">3+</p>
              <p className="text-xs text-slate-400 tracking-widest uppercase leading-relaxed">
                Years of learning<br />& practice
              </p>
            </div>
            <div className="bg-[#0d1829] border border-white/10 rounded-xl p-8 text-center">
              <p className="text-5xl font-bold text-[#00e87a] mb-2">5+</p>
              <p className="text-xs text-slate-400 tracking-widest uppercase leading-relaxed">
                Projects<br />deployed
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
