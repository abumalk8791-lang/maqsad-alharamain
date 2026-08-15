/**
 * الخدمات الأساسية: إقامة فندقية ونقل بري حديث من الرياض
 */
import { Building2, Bus, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    title: "إقامة فندقية ضمن البرنامج",
    description:
      "نعرض خيارات الإقامة المتوفرة، ثم نؤكد الفندق وتفاصيل السكن بحسب البرنامج والموعد قبل الحجز.",
    icon: Building2,
    points: ["أسماء فنادق ضمن البرامج المتاحة", "تأكيد الفندق حسب التوفر", "تفاصيل الإقامة قبل تأكيد الحجز"],
  },
  {
    title: "نقل بالحافلات من الرياض",
    description:
      "نوضح لك نقطة التجمع والوجهة وموعد الانطلاق بحسب البرنامج، ثم نرسل المعلومات المؤكدة قبل الرحلة.",
    icon: Bus,
    points: ["انطلاق من الرياض وفق الموعد المتاح", "نقل بالحافلات ضمن البرنامج", "تأكيد تفاصيل التجمع والانطلاق"],
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-sand-rich section-gold-edge overflow-hidden">
      <span className="deco-ring float-slow w-96 h-96 -top-40 -left-40 hidden lg:block" />
      <span className="deco-ring w-52 h-52 -bottom-20 -right-16 hidden md:block" style={{ animationDelay: "3s" }} />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="kicker justify-center">الإقامة والمواصلات</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[var(--emerald-deep)] leading-[1.3]">ما الذي نوضحه لك قبل الحجز؟</h2>
          <p className="mt-5 text-[var(--charcoal)]/70 leading-relaxed md:text-lg">
            نراجع معك خيارات السكن والنقل وموعد الرحلة، حتى تعرف تفاصيل برنامجك قبل أن تؤكده.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {SERVICES.map(({ title, description, icon: Icon, points }, index) => (
            <article
              key={title}
              className="reveal rounded-3xl bg-white p-7 md:p-9 border border-[var(--gold)]/15 shadow-[0_12px_40px_rgba(11,61,46,0.08)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[var(--emerald-deep)] text-[var(--gold-soft)]">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[var(--emerald-deep)]">{title}</h3>
              <p className="mt-3 text-[var(--charcoal)]/70 leading-relaxed">{description}</p>
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--charcoal)]/80">
                    <CheckCircle2 className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
