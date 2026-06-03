import { CONTACT_LINKS } from "../data/Projects";
export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>

        <p className="text-slate-400 text-base leading-relaxed mb-12">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll do my
          best to get back to you!
        </p>
        <p className="text-[#00e87a] text-sm font-medium mb-8">
          richiernie04@gmail.com
        </p>

        {/* Contact buttons row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {CONTACT_LINKS.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center gap-3 px-6 py-3.5 bg-[#0d1829] border border-white/10 text-slate-300 text-sm rounded-lg hover:border-[#00e87a]/40 hover:text-white hover:bg-[#0d1829]/80 transition-all duration-200 group"
            >
              <Icon
                size={16}
                className="text-[#00e87a] group-hover:scale-110 transition-transform duration-200"
              />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
