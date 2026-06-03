import { FolderOpen } from 'lucide-react'
import { PROJECTS } from '../data/Projects'
import ProjectCard from './ProjectCard'

// ── Main section component ─────
export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-14">
          <FolderOpen size={20} className="text-slate-400" />
          <h2 className="text-2xl font-bold text-white">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
