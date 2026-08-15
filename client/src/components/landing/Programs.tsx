/**
 * مقارنة برامج العمرة من الرياض مع إقامة فندقية ونقل بالحافلات
 */
import { ASSETS, waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";
import SectionHeading from "./SectionHeading";
import { Building2, Bus, MapPin, ShieldCheck } from "lucide-react";

interface Program {
  name: string;
  badge?: string;
  image: string;
  alt: string;
  summary: string;
  features: Array<{ icon: typeof Bus; text: string }>;
}

const PROGRAMS: Program[] = [
  {
    name: "البرنامج الاقتصادي",
    image: ASSETS.hotel1,
    alt: "فندق ضمن خيارات الإقامة لبرنامج العمرة الاقتصادي من الرياض",
    summary: "خيار لمن يريد برنامجاً واضحاً من الرياض يشمل النقل والإقامة، مع تأكيد تفاصيل الفندق والموعد والسعر عند التواصل.",
    features: [
      { icon: Bus, text: "نقل بالحافلات من الرياض ضمن البرنامج" },
      { icon: Building2, text: "إقامة فندقية بحسب المتاح عند الحجز" },
      { icon: ShieldCheck, text: "تأكيد التجمع والموعد والتفاصيل قبل الانطلاق" },
    ],
  },
  {
    name: "برنامج VIP",
    badge: "خيارات أعلى من الراحة",
    image: ASSETS.hotel3,
    alt: "فندق ضمن خيارات برنامج VIP للعمرة من الرياض",
    summary: "لمن يفضّل مستوى أعلى من الراحة والخصوصية في التنقل والإقامة، مع توضيح الخيارات المتاحة قبل اتخاذ قرار الحجز.",
    features: [
      { icon: Bus, text: "خيارات نقل أكثر راحة وفق البرنامج المتاح" },
      { icon: MapPin, text: "خيارات إقامة فندقية مميزة" },
      { icon: ShieldCheck, text: "تنسيق يراعي راحة العائلة وخصوصيتها" },
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 md:py-28 bg-sand-rich section-gold-edge overflow-hidden">
      <div
        className="pattern-drift"
        style={{ backgroundImage: `url(${ASSETS.pattern})`, animationDirection: "reverse" }}
      />
      <span className="deco-ring float-slow w-64 h-64 -bottom-28 -left-20 hidden md:block" />
      <div className="container relative">
        <SectionHeading
          kicker="باقات العمرة من الرياض"
          title="اختر الباقة التي تناسب احتياجك"
          subtitle="قارن بين البرنامج الاقتصادي وVIP، ثم اسألنا عن المدة والوجهة والفندق والسعر المتاحين."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PROGRAMS.map((program, i) => (
            <article
              key={program.name}
              className="reveal group img-hover-scale relative rounded-3xl overflow-hidden bg-[var(--emerald-deep)] shadow-[0_16px_48px_rgba(11,61,46,0.15)] flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={program.image} alt={program.alt} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald-deep)] via-transparent to-transparent" />
                {program.badge && (
                  <span className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] text-xs font-bold shadow-lg">
                    {program.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-7 -mt-6 relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{program.name}</h3>
                <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">{program.summary}</p>
                <ul className="mt-6 space-y-3 text-sm md:text-base text-white/80">
                  {program.features.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <Icon className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`السلام عليكم، أرغب في الاستفسار عن ${program.name} للعمرة من الرياض لدى مقصد الحرمين.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] font-bold text-sm transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  اسأل عن تفاصيل الباقة
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-[var(--charcoal)]/60">
          لا نعرض سعراً ثابتاً؛ نؤكد المدة والموعد والفندق والسعر الحاليين عند التواصل عبر واتساب.
        </p>
      </div>
    </section>
  );
}
