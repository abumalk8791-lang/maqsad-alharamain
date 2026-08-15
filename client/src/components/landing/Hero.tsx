/**
 * الواجهة الرئيسية: عمرة من الرياض مع إقامة فندقية ونقل بالحافلات
 */
import { ASSETS, scrollToSection, waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const heroDescription = "نرتب رحلة العمرة من الرياض بوضوح: نراجع معك الوجهة والمدة والسكن والنقل، ثم نؤكد الموعد والسعر المتاحين قبل الحجز.";

export default function Hero() {
  const [typedDescription, setTypedDescription] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedDescription(heroDescription);
      setIsTyping(false);
      return;
    }

    let characterIndex = 0;
    let typingInterval: ReturnType<typeof window.setInterval> | undefined;
    const typingStart = window.setTimeout(() => {
      typingInterval = window.setInterval(() => {
        characterIndex += 1;
        setTypedDescription(heroDescription.slice(0, characterIndex));

        if (characterIndex >= heroDescription.length) {
          if (typingInterval !== undefined) window.clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 16);
    }, 680);

    return () => {
      window.clearTimeout(typingStart);
      if (typingInterval !== undefined) window.clearInterval(typingInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={ASSETS.heroMakkah}
        alt="المسجد الحرام في مكة المكرمة ضمن رحلة عمرة من الرياض"
        className="absolute inset-0 w-full h-full object-cover hero-bg-pan"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[var(--emerald-deep)]/90" />

      <div className="relative z-10 container text-center pt-28 pb-40">
        <p className="kicker justify-center !text-[var(--gold-soft)] hero-copy-enter hero-copy-delay-1">عمرة من الرياض • مكة والمدينة حسب البرنامج • إقامة ونقل</p>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] hero-title-fade-down">
          عمرة من الرياض إلى مكة والمدينة
          <br />
          <span className="text-[var(--gold-soft)]">إقامة فندقية ونقل بالحافلات</span>
        </h1>
        <p
          aria-label={heroDescription}
          className="mt-6 min-h-[5.5rem] md:min-h-[4.5rem] text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed hero-description-typewriter"
        >
          <span>{typedDescription}</span>
          <span aria-hidden="true" className={isTyping ? "typewriter-cursor" : "typewriter-cursor typewriter-cursor-hidden"}>|</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 hero-copy-enter hero-copy-delay-4">
          <a
            href={waLink("السلام عليكم، أرغب في معرفة رحلات العمرة المتاحة من الرياض إلى مكة والمدينة لدى مقصد الحرمين.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] font-bold text-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_8px_32px_rgba(198,167,94,0.35)] inline-flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            اسأل عن الرحلات المتاحة
          </a>
          <button
            onClick={() => scrollToSection("programs")}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/40 text-white font-semibold text-lg backdrop-blur-sm bg-white/5 flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white/15 active:scale-95"
          >
            تعرف على الباقات
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("quick-booking")}
        aria-label="انتقل إلى خيارات الحجز"
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
