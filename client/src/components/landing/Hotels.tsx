/**
 * Royal Serenity — الفنادق: Editorial cards كبيرة على خلفية عاجية
 * بدون أسماء فنادق مخترعة — فئات إقامة قابلة للتعديل
 */
import { ASSETS, waLink } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { MapPin, Star } from "lucide-react";

const STAYS = [
  {
    title: "إقامة بإطلالة على الحرم",
    city: "مكة المكرمة",
    category: "فئة فاخرة",
    type: "غرف عائلية وفردية",
    image: ASSETS.hotelRoomHaramView,
    alt: "غرفة فندقية فاخرة بإطلالة على الحرم المكي",
    tall: true,
  },
  {
    title: "إقامة قريبة من المسجد النبوي",
    city: "المدينة المنورة",
    category: "فئة مميزة",
    type: "غرف مريحة للعائلات والأفراد",
    image: ASSETS.madinahHotelView,
    alt: "المسجد النبوي الشريف من قرب",
    tall: false,
  },
  {
    title: "فنادق راقية قريبة من الحرم",
    city: "مكة المكرمة",
    category: "فئة فاخرة",
    type: "غرف واسعة ومريحة",
    image: ASSETS.makkahHotelExterior,
    alt: "فندق راقٍ قريب من الحرم المكي",
    tall: false,
  },
  {
    title: "إقامة اقتصادية مريحة",
    city: "مكة / المدينة",
    category: "فئة اقتصادية",
    type: "غرف مشتركة وعائلية",
    image: ASSETS.makkahEconomyHotel,
    alt: "فندق اقتصادي قريب من الحرم في مكة المكرمة",
    tall: true,
  },
];

export default function Hotels() {
  return (
    <section id="hotels" className="relative py-20 md:py-28 bg-ivory-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <span className="deco-ring float-slow w-80 h-80 -top-32 -right-28 hidden lg:block" />
      <div className="container relative">
        <SectionHeading
          kicker="الإقامة"
          title="إقامة تليق برحلتك"
          subtitle="نختار لك إقامة مريحة قريبة من الحرمين، بفئات متنوعة تناسب احتياجك وميزانيتك."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STAYS.map((s, i) => (
            <article
              key={s.title}
              className={`reveal group img-hover-scale relative rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,61,46,0.12)] ${
                s.tall ? "h-[420px] md:h-[480px]" : "h-[420px] md:h-[380px]"
              }`}
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <img src={s.image} alt={s.alt} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-center gap-2 text-[var(--gold-soft)] text-xs font-semibold tracking-wider">
                  <Star className="w-3.5 h-3.5" />
                  {s.category}
                </div>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-[var(--gold)]" />
                  {s.city} — {s.type}
                </p>
                <a
                  href={waLink(`السلام عليكم، أرغب في الاستفسار عن ${s.title} في ${s.city} لدى مقصد الحرمين.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[var(--gold-soft)] text-sm font-semibold border-b border-[var(--gold)]/50 pb-0.5 transition-colors hover:text-white hover:border-white"
                >
                  استكشف الإقامة ←
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-sm text-[var(--charcoal)]/50 text-center">
          أسماء الفنادق المتاحة وتفاصيلها تُحدد حسب البرنامج والتاريخ — تواصل معنا لمعرفة الخيارات المتاحة لرحلتك.
        </p>
      </div>
    </section>
  );
}
