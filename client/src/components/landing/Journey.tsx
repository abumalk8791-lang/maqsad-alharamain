/**
 * Royal Serenity — رحلة الحجز: Timeline أنيقة من 4 خطوات تنتهي بواتساب
 */
import SectionHeading from "./SectionHeading";
import { waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";

const STEPS = [
  { num: "01", title: "اختر البرنامج", desc: "تصفح برامجنا واختر ما يناسب رحلتك ومدتك" },
  { num: "02", title: "حدد التفاصيل", desc: "الوجهة، التاريخ، نوع الإقامة وعدد الأفراد" },
  { num: "03", title: "راجع السعر", desc: "نرسل لك التفاصيل الكاملة والسعر النهائي بوضوح" },
  { num: "04", title: "احجز عبر واتساب", desc: "أكّد حجزك برسالة واحدة... واستعد للانطلاق" },
];

export default function Journey() {
  return (
    <section id="booking" className="py-20 md:py-28 bg-[var(--ivory)]">
      <div className="container">
        <SectionHeading
          kicker="طريقة الحجز"
          title="أربع خطوات تفصلك عن الحرمين"
          subtitle="رحلة حجز بسيطة وواضحة — من اختيار البرنامج حتى الانطلاق."
          center
        />

        <div className="relative max-w-3xl mx-auto">
          <span className="absolute top-0 bottom-0 right-[27px] md:right-1/2 md:translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[var(--gold)]/60 via-[var(--gold)]/30 to-transparent" />

          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`reveal relative flex items-start gap-6 md:gap-0 py-6 md:py-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="relative z-10 flex items-center justify-center w-14 h-14 shrink-0 rounded-full bg-[var(--emerald-deep)] text-[var(--gold-soft)] font-bold border-2 border-[var(--gold)]/50 shadow-lg md:absolute md:right-1/2 md:translate-x-1/2">
                {s.num}
              </span>
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-left"}`}>
                <h3 className="text-xl font-bold text-[var(--emerald-deep)]">{s.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--charcoal)]/65">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[var(--emerald-deep)] text-[var(--ivory)] font-bold text-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-[0_12px_36px_rgba(11,61,46,0.3)]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            ابدأ الحجز الآن
          </a>
        </div>
      </div>
    </section>
  );
}
