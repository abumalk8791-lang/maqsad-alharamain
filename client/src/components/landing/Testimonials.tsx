/**
 * Royal Serenity — قسم طمأنة هادئ (Assurance) بدل التقييمات
 * وفق قاعدة محتوى الثقة: لا تقييمات مصطنعة — نص طمأنة بصوت العلامة + صورة editorial
 */
import { ASSETS, waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";

const ASSURANCES = [
  { title: "عناية بالتفاصيل", desc: "من لحظة تأكيد الحجز حتى العودة، تفاصيل رحلتك متابعة بعناية." },
  { title: "وضوح تام", desc: "السعر والبرنامج والمواعيد تصلك كاملة وواضحة قبل التأكيد." },
  { title: "معك طوال الرحلة", desc: "فريقنا على تواصل مباشر معك قبل الانطلاق وأثناء الرحلة." },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--emerald-deep)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url(${ASSETS.pattern})`, backgroundSize: "420px" }}
      />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal order-2 lg:order-1">
            <span className="kicker">عهدنا لك</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[var(--ivory)] leading-[1.3]">
              نرافق تفاصيل الرحلة بهدوء،
              <br />
              <span className="font-light text-[var(--gold-soft)]">من الحجز حتى العودة</span>
            </h2>

            <div className="mt-10 space-y-7">
              {ASSURANCES.map((a, i) => (
                <div key={a.title} className="reveal flex items-start gap-5" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="mt-2.5 block w-8 h-[1px] bg-[var(--gold)] shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-[var(--ivory)]">{a.title}</h3>
                    <p className="mt-1 text-sm text-[var(--ivory)]/60 leading-loose font-light">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[var(--gold)]/60 text-[var(--gold-soft)] font-semibold transition-all duration-200 hover:bg-[var(--gold)]/15 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              تحدث معنا مباشرة
            </a>
          </div>

          <figure className="reveal order-1 lg:order-2 img-hover-scale relative rounded-3xl overflow-hidden h-[360px] lg:h-[520px] shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
            <img
              src={ASSETS.madinahNight}
              alt="المسجد النبوي الشريف مضاءً ليلًا"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/30 rounded-3xl pointer-events-none" />
          </figure>
        </div>
      </div>
    </section>
  );
}
