/**
 * Royal Serenity — برامج العمرة: Premium cards بصور كبيرة وoverlay أنيق
 * الأسعار placeholder سهلة التعديل — لا أسعار حقيقية مخترعة
 */
import { ASSETS, waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";
import SectionHeading from "./SectionHeading";
import { Clock, MapPin, Building2, Bus, CalendarDays } from "lucide-react";

interface Program {
  name: string;
  duration: string;
  destination: string;
  hotel: string;
  transport: string;
  price: string;
  schedule?: string;
  badge?: string;
  image: string;
  alt: string;
}

const PROGRAMS: Program[] = [
  {
    name: "برنامج العمرة الميسّر",
    duration: "3 أيام",
    destination: "مكة المكرمة",
    hotel: "فندق قريب من الحرم",
    transport: "باص حديث مريح",
    price: "أسعار منافسة تناسب احتياجاتكم",
    image: ASSETS.makkahClockTower,
    alt: "برج الساعة والكعبة المشرفة في مكة المكرمة",
  },
  {
    name: "برنامج العمرة والزيارة",
    duration: "5 أيام",
    destination: "مكة والمدينة",
    hotel: "إقامة مختارة في المدينتين",
    transport: "نقل مريح بين المدن",
    price: "أسعار منافسة تناسب احتياجاتكم",
    badge: "الأكثر طلبًا",
    image: ASSETS.madinahEditorial,
    alt: "المسجد النبوي الشريف في المدينة المنورة وقت الغروب",
  },
  {
    name: "برنامج VIP الفاخر",
    duration: "3 أيام",
    destination: "مكة المكرمة فقط",
    hotel: "فنادق بإطلالات مميزة",
    transport: "باص VIP بمقاعد فاخرة",
    price: "أسعار منافسة تناسب احتياجاتكم",
    schedule: "الاثنين → عودة الأربعاء • الخميس → عودة السبت",
    image: ASSETS.makkahAerial,
    alt: "منظر جوي للمسجد الحرام في مكة المكرمة",
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
          kicker="برامجنا"
          title="برامج صُممت لراحتك"
          subtitle="اختر البرنامج الذي يناسب رحلتك، ودع التفاصيل علينا."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.name}
              className="reveal group img-hover-scale relative rounded-3xl overflow-hidden bg-[var(--emerald-deep)] shadow-[0_16px_48px_rgba(11,61,46,0.15)] flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald-deep)] via-transparent to-transparent" />
                {p.badge && (
                  <span className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] text-xs font-bold shadow-lg">
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-7 -mt-6 relative">
                <h3 className="text-xl md:text-2xl font-bold text-white">{p.name}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-white/75">
                  <li className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[var(--gold)] shrink-0" /> {p.duration}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0" /> {p.destination}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-[var(--gold)] shrink-0" /> {p.hotel}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Bus className="w-4 h-4 text-[var(--gold)] shrink-0" /> {p.transport}
                  </li>
                  {p.schedule && (
                    <li className="flex items-center gap-2.5">
                      <CalendarDays className="w-4 h-4 text-[var(--gold)] shrink-0" /> {p.schedule}
                    </li>
                  )}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[var(--gold-soft)] font-semibold text-sm leading-relaxed">{p.price}</span>
                </div>

                <a
                  href={waLink(`السلام عليكم، أرغب في الاستفسار عن ${p.name} (${p.duration} — ${p.destination}) لدى مقصد الحرمين.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] font-bold text-sm transition-transform duration-200 hover:scale-[1.02] active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  احجز الآن
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-[var(--charcoal)]/50">
          الأسعار والتفاصيل النهائية تُؤكد عند التواصل — تواصل معنا عبر واتساب لمعرفة أحدث العروض والمواعيد.
        </p>
      </div>
    </section>
  );
}
