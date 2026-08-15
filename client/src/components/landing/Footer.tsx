/**
 * Royal Serenity — Footer بسيط وفخم على خلفية فحمية
 */
import { ASSETS, NAV_LINKS, PHONE_DISPLAY, scrollToSection, waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--ivory)] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <img src={ASSETS.logo} alt="شعار مقصد الحرمين" className="w-16 h-16 object-contain" />
              <div>
                <p className="font-bold text-2xl">مقصد الحرمين</p>
                <p className="text-[var(--gold)] text-[0.65rem] tracking-[0.35em]">MAQSAD ALHARAMAIN</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-loose max-w-xs">
              برامج عمرة من الرياض تشمل النقل بالحافلات والإقامة الفندقية. اسألنا عن المدة والوجهة والفندق المتاحين قبل الحجز.
            </p>
          </div>

          <nav aria-label="روابط الصفحة">
            <h3 className="text-[var(--gold-soft)] font-semibold mb-5 text-sm tracking-widest">أقسام الصفحة</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(l.id); }}
                    className="text-white/65 hover:text-[var(--gold-soft)] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[var(--gold-soft)] font-semibold mb-5 text-sm tracking-widest">تواصل معنا</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:+966${PHONE_DISPLAY.primary.slice(1)}`} className="flex items-center gap-3 text-white/75 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-[var(--gold)]" />
                  <span dir="ltr">{PHONE_DISPLAY.primary}</span>
                </a>
              </li>
              <li>
                <a href={`tel:+966${PHONE_DISPLAY.secondary.slice(1)}`} className="flex items-center gap-3 text-white/75 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 text-[var(--gold)]" />
                  <span dir="ltr">{PHONE_DISPLAY.secondary}</span>
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 mt-2 px-5 py-2.5 rounded-full border border-[var(--gold)]/40 text-[var(--gold-soft)] text-sm font-semibold hover:bg-[var(--gold)]/10 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  تواصل عبر واتساب
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-center text-white/40 text-xs">
          © 2026 مقصد الحرمين. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
