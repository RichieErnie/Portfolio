import { Github } from "lucide-react"
import { Project } from "../types"

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = (
    <article
      className={`bg-[#0d1829] rounded-xl overflow-hidden transition-all duration-200 group ${
        project.liveUrl
          ? "hover:translate-y-[-3px] cursor-pointer"
          : "cursor-default"
      } ${
        project.isFeatured
          ? "border-2 border-[#00e87a]/20 hover:border-[#00e87a]/40"
          : "border border-white/10 hover:border-white/20"
      }`}
    >
      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge */}
        {project.isLive ? (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 text-xs text-[#00e87a] bg-[#060d1b]/70 backdrop-blur-sm border border-[#00e87a]/30 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e87a] animate-pulse" />
            Live
          </div>
        ) : (
          <div className="absolute top-3 right-3 text-xs text-amber-400 bg-[#060d1b]/70 backdrop-blur-sm border border-amber-400/30 px-2.5 py-1 rounded-full">
            Final Year Project
          </div>
        )}

        {project.liveUrl && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              View Project ↗
            </span>
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white font-semibold text-base">
            {project.title}
          </h3>

          {project.githubUrl && (
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()

                window.open(project.githubUrl, "_blank", "noopener,noreferrer")
              }}
              className="text-slate-500 hover:text-[#00e87a] transition-colors shrink-0"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={16} />
            </button>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-[#0a1220] border border-white/10 text-slate-400 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    )
  }

  return CardContent
}

export default ProjectCard