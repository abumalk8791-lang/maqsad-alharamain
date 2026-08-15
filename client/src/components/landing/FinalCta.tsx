/**
 * Royal Serenity — CTA ختامي: صورة سينمائية كاملة + دعوة أخيرة لواتساب
 */
import { ASSETS, waLink, scrollToSection } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FinalCta() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <img
        src={ASSETS.finalCta}
        alt="الكعبة المشرفة في مكة المكرمة ضمن صفحة رحلات العمرة من الرياض"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--emerald-deep)]/85 via-black/60 to-[var(--charcoal)]/90" />

      <div className="relative z-10 container text-center">
        <div className="reveal">
          <span className="kicker justify-center !text-[var(--gold-soft)]">هل تريد معرفة البرنامج المتاح؟</span>
          <h2 className="mt-5 text-3xl md:text-6xl font-bold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
            اسألنا عن رحلتك من الرياض
          </h2>
          <p className="mt-5 text-lg md:text-2xl text-white/80 font-light">أرسل المدة والوجهة وعدد المسافرين، ونراجع معك الخيارات المتاحة.</p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] font-bold text-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_12px_36px_rgba(198,167,94,0.4)]"
            >
              <WhatsAppIcon className="w-6 h-6 text-[#128C4A]" />
              اسأل عبر واتساب
            </a>
            <button
              onClick={() => scrollToSection("programs")}
              className="w-full sm:w-auto px-9 py-4 rounded-full border border-white/40 text-white font-semibold text-lg backdrop-blur-sm bg-white/5 transition-all duration-200 hover:bg-white/15 active:scale-95"
            >
              تعرف على الباقات
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
