import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/Projects";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // ── Scroll shadow effect ───
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Scroll-position fallback ───
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    let ticking = false;

    const updateActiveByPosition = () => {
      let bestId = "";
      let bestDistance = Infinity;
      const offset = 80;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });

      if (bestId) setActiveSection(bestId);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveByPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to initialize state
    updateActiveByPosition();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section detection ────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.2, rootMargin: "-80px 0px -60% 0px" },
    );

    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Smooth scroll handler ──

  const handleNavClick = (href: string) => {
    const sectionId = href.slice(1);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060d1b]/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ── Logo ─── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-xl text-white tracking-tight hover:opacity-80 transition-opacity"
        >
          Richard<span className="text-[#00e87a]">.</span>
        </button>

        {/* ── Desktop nav links ───── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm transition-colors relative pb-1 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00e87a] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Resume button ───*/}
        <a
          href="https://drive.google.com/file/d/1WS8QHy8l9dNgNxOnFwypIBqZ82LuOwEt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-sm px-4 py-2 border border-[#00e87a]/40 text-[#00e87a] rounded hover:bg-[#00e87a]/10 transition-colors"
        >
          Resume
        </a>

        {/* ── Mobile hamburger button ───── */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile dropdown menu ───*/}
      {mobileOpen && (
        <div className="md:hidden bg-[#060d1b] border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-slate-300 hover:text-white text-sm py-3 border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#"
            className="mt-3 text-sm px-4 py-2.5 border border-[#00e87a]/40 text-[#00e87a] rounded text-center hover:bg-[#00e87a]/10 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
