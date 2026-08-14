/**
 * مقدمة عن مقصد الحرمين: رحلات عمرة برية من الرياض للعائلات
 */
import { ASSETS } from "@/lib/brand";

const VALUES = [
  { num: "٠١", title: "ترتيب يراعي العائلة", desc: "نساعدكم في ترتيب السكن والنقل لتبدأ الرحلة بهدوء وراحة." },
  { num: "٠٢", title: "انطلاق واضح من الرياض", desc: "نعرفكم بتفاصيل التجمع والانطلاق مسبقاً، حتى تكون كل خطوة واضحة لكم." },
  { num: "٠٣", title: "متابعة قريبة", desc: "يبقى فريقنا متاحاً عبر الواتساب للإجابة عن استفساراتكم قبل الرحلة وأثناءها." },
];

export default function Intro() {
  return (
    <section className="relative py-24 md:py-32 bg-ivory-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <span className="deco-ring float-slow w-72 h-72 -top-24 -left-24 hidden md:block" />
      <span className="deco-ring w-44 h-44 bottom-10 -right-16 hidden lg:block" style={{ animationDelay: "2s" }} />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="reveal lg:col-span-7">
            <span className="kicker">رحلات عمرة برية من الرياض</span>
            <h2 className="mt-5 text-4xl md:text-6xl font-bold text-[var(--emerald-deep)] leading-[1.25]">
              إلى الحرمين...
              <br />
              <span className="font-light text-[var(--charcoal)]/70">برحلة مرتبة وراحة مطمئنة</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-[var(--charcoal)]/65 leading-loose max-w-xl font-light">
              «العمرة رحلة ينتظرها الإنسان بقلبه قبل أن يبدأ طريقه. لذلك نرتب لكم رحلة برية من الرياض تشمل الإقامة الفندقية والنقل بالحافلات، لتتفرغوا لما هو أهم: العبادة والطمأنينة وقضاء وقت هادئ مع العائلة.»
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center divide-y divide-[var(--sand)]">
            {VALUES.map((value, i) => (
              <div key={value.title} className="reveal flex items-start gap-6 py-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="big-num text-3xl md:text-4xl mt-1">{value.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-[var(--emerald-deep)]">{value.title}</h3>
                  <p className="mt-1 text-sm text-[var(--charcoal)]/60 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
