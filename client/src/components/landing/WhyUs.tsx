/**
 * Royal Serenity — لماذا مقصد الحرمين: Premium grid بأرقام كبيرة أنيقة
 */
const FEATURES = [
  { num: "01", title: "تنظيم احترافي", desc: "برامج مدروسة ومواعيد واضحة من البداية للنهاية" },
  { num: "02", title: "إقامة مختارة بعناية", desc: "فئات إقامة متنوعة قريبة من الحرمين" },
  { num: "03", title: "نقل مريح", desc: "وسائل نقل حديثة تناسب طبيعة رحلتك" },
  { num: "04", title: "برامج مرنة", desc: "خيارات متعددة للمدة والوجهة تناسب ظروفك" },
  { num: "05", title: "أسعار واضحة", desc: "تفاصيل كاملة قبل تأكيد الحجز بلا مفاجآت" },
  { num: "06", title: "تواصل مباشر", desc: "فريقنا معك عبر واتساب قبل الرحلة وخلالها" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[var(--sand)]/40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <span className="kicker">مميزاتنا</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[var(--emerald-deep)] leading-[1.3] lg:sticky lg:top-28">
              لماذا
              <br />
              مقصد الحرمين؟
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-[var(--sand)]">
            {FEATURES.map((f, i) => (
              <div
                key={f.num}
                className="reveal group flex items-baseline gap-6 md:gap-10 py-6 md:py-7"
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <span className="big-num text-4xl md:text-6xl opacity-50 group-hover:opacity-90 transition-opacity duration-300 shrink-0 w-16 md:w-24">
                  {f.num}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--emerald-deep)]">{f.title}</h3>
                  <p className="mt-1.5 text-sm md:text-base text-[var(--charcoal)]/60 leading-relaxed font-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
