import { Code2 } from 'lucide-react'
import { FRONTEND_SKILLS, TOOLS_SKILLS } from '../data/Projects'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a1220]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-14">
          <Code2 size={20} className="text-slate-400" />
          <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Frontend Engineering card ───*/}
          <div className="bg-[#0d1829] border border-white/10 rounded-xl p-6">
            <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-5">
              Frontend Engineering
            </p>
            <div className="flex flex-wrap gap-2">
              {FRONTEND_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-[#0a1220] border border-white/10 text-slate-300 text-sm rounded hover:border-[#00e87a]/30 hover:text-[#00e87a] transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Tools & Workflow card ─── */}
          <div className="bg-[#0d1829] border border-white/10 rounded-xl p-6">
            <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-5">
              Tools & Workflow
            </p>
            <div className="flex flex-wrap gap-2">
              {TOOLS_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-[#0a1220] border border-white/10 text-slate-300 text-sm rounded hover:border-[#00e87a]/30 hover:text-[#00e87a] transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
