/**
 * Royal Serenity — قسم تعريفي editorial: بيان كبير + قائمة قيم مرقمة أفقية
 * (بدون شبكة بطاقات — نمط editorial statement)
 */
import { ASSETS } from "@/lib/brand";

const VALUES = [
  { num: "٠١", title: "راحة", desc: "كل التفاصيل مرتبة لتصل بسلام وتتفرغ لعبادتك" },
  { num: "٠٢", title: "تنظيم", desc: "برامج واضحة ومواعيد دقيقة من الانطلاق حتى العودة" },
  { num: "٠٣", title: "ثقة", desc: "تواصل مباشر ومتابعة مستمرة طوال رحلتك" },
];

export default function Intro() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--ivory)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${ASSETS.pattern})`, backgroundSize: "420px" }}
      />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="reveal lg:col-span-7">
            <span className="kicker">من نحن</span>
            <h2 className="mt-5 text-4xl md:text-6xl font-bold text-[var(--emerald-deep)] leading-[1.25]">
              مقصدك إلى الحرمين...
              <br />
              <span className="font-light text-[var(--charcoal)]/70">بكل راحة</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-[var(--charcoal)]/65 leading-loose max-w-xl font-light">
              «نرتب لك تفاصيل رحلتك من البرنامج والإقامة إلى النقل، لتعيش رحلتك إلى الحرمين براحة وطمأنينة.»
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center divide-y divide-[var(--sand)]">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal flex items-start gap-6 py-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="big-num text-3xl md:text-4xl mt-1">{v.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-[var(--emerald-deep)]">{v.title}</h3>
                  <p className="mt-1 text-sm text-[var(--charcoal)]/60 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
