/**
 * Royal Serenity — رحلة الحجز: Timeline أنيقة من 4 خطوات تنتهي بواتساب
 */
import { ASSETS } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";

const STEPS = [
  { num: "01", title: "اختر المدة والوجهة", desc: "حدد ما إذا كنت تبحث عن مكة أو مكة والمدينة، والمدة المناسبة لك." },
  { num: "02", title: "أرسل تفاصيلك", desc: "أخبرنا بعدد المسافرين والموعد الذي تفضله عبر واتساب." },
  { num: "03", title: "راجع المتاح", desc: "نوضح لك البرنامج والموعد والسكن والنقل والسعر المتاحين." },
  { num: "04", title: "أكد الحجز", desc: "بعد الاتفاق، نرسل لك معلومات التجمع والانطلاق المؤكدة." },
];

export default function Journey() {
  return (
    <section id="booking" className="relative py-20 md:py-28 bg-ivory-rich section-gold-edge overflow-hidden">
      <div
        className="pattern-drift"
        style={{ backgroundImage: `url(${ASSETS.pattern})`, animationDirection: "reverse" }}
      />
      <span className="deco-ring float-slow w-72 h-72 -bottom-28 -right-24 hidden md:block" />
      <div className="container relative">
        <SectionHeading
          kicker="كيف تحجز؟"
          title="احجز رحلتك بخطوات واضحة"
          subtitle="نراجع التفاصيل معك قبل التأكيد، حتى تعرف ما يشمله البرنامج وما يتوفر في موعدك."
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
            اسأل عن البرنامج المتاح
          </a>
        </div>
      </div>
    </section>
  );
}
