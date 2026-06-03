import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-lg text-white hover:opacity-80 transition-opacity"
        >
          Richard<span className="text-[#00e87a]">.</span>
        </button>

        <p className="text-slate-500 text-sm text-center">
          © {currentYear} Richard Ogazi. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/RichieErnie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-sm"
            aria-label="GitHub"
          >
            <Github size={16} />
            <span>github</span>
          </a>
          <a
            href="https://linkedin.com/in/richardogazi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
            <span>linkedin</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
