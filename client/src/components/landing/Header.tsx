/**
 * Royal Serenity — Sticky premium header
 * شفاف فوق الـHero ثم زمردي معتم عند التمرير — hamburger على الهاتف
 */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ASSETS, NAV_LINKS, scrollToSection, waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "bg-[var(--emerald-deep)]/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <button onClick={() => go("hero")} className="flex items-center gap-3" aria-label="مقصد الحرمين — الرئيسية">
          <img src={ASSETS.logo} alt="شعار مقصد الحرمين" className="w-14 h-14 object-contain" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[var(--ivory)] font-bold text-xl">مقصد الحرمين</span>
            <span className="text-[var(--gold)] text-[0.62rem] tracking-[0.35em] font-medium">MAQSAD ALHARAMAIN</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-[var(--ivory)]/85 hover:text-[var(--gold)] text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4" />
            احجز الآن
          </a>
        </div>

        <button
          className="lg:hidden text-[var(--ivory)] p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--emerald-deep)]/98 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-2">
          <nav className="flex flex-col" aria-label="قائمة الهاتف">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-[var(--ivory)]/90 hover:text-[var(--gold)] text-base font-medium py-3.5 text-right border-b border-white/5 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] font-bold active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5" />
            احجز عبر واتساب
          </a>
        </div>
      )}
    </header>
  );
}
