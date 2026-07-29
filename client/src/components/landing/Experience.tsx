/**
 * Royal Serenity — قسم Editorial بتقسيم Split: صورة كبيرة + نقاط مرقمة
 */
import { ASSETS } from "@/lib/brand";

const ITEMS = [
  { num: "01", title: "إقامة مختارة بعناية" },
  { num: "02", title: "نقل مريح" },
  { num: "03", title: "برامج مرنة" },
  { num: "04", title: "خدمة ومتابعة" },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-28 bg-[var(--ivory)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="reveal img-hover-scale relative rounded-3xl overflow-hidden h-[420px] lg:h-[560px] shadow-[0_20px_60px_rgba(11,61,46,0.15)]">
            <img
              src={ASSETS.madinahEditorial}
              alt="المسجد النبوي الشريف وقت الغروب"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/25 rounded-3xl pointer-events-none" />
          </figure>

          <div>
            <div className="reveal">
              <span className="kicker">تجربتك معنا</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[var(--emerald-deep)]">
                كل التفاصيل محسوبة
              </h2>
              <p className="mt-5 text-lg text-[var(--charcoal)]/70 leading-loose">
                «من اختيار الإقامة إلى تفاصيل التنقل، نهتم بما يجعل رحلتك أكثر راحة وطمأنينة.»
              </p>
            </div>

            <ul className="mt-10 space-y-0 divide-y divide-[var(--sand)]">
              {ITEMS.map((it, i) => (
                <li
                  key={it.num}
                  className="reveal flex items-center gap-6 py-5"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="big-num text-4xl md:text-5xl">{it.num}</span>
                  <span className="text-lg md:text-xl font-semibold text-[var(--charcoal)]">{it.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
