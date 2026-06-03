import { BookOpen } from "lucide-react";
import { JOURNEY } from "../data/Projects";

export default function Experience() {
  return (
    // Alternate section background — keeps the visual rhythm across sections
    <section id="experience" className="py-24 bg-[#0a1220]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-14">
          <BookOpen size={20} className="text-slate-400" />
          <h2 className="text-2xl font-bold text-white">My Journey</h2>
        </div>

        <div className="space-y-12">
          {JOURNEY.map((item, index) => (
            <div key={index} className="relative pl-7 border-l border-white/10">
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00e87a] ring-4 ring-[#0a1220]" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="text-white font-semibold text-base">
                  {item.title}
                </h3>
                <span className="text-[#00e87a] text-sm font-mono shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-5">{item.place}</p>

              <ul className="space-y-2.5">
                {item.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                  >
                    <span className="text-[#00e87a] mt-1 shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
