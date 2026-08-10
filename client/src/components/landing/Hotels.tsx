/**
 * Royal Serenity — الفنادق: استراتيجية عرض "المدثر" بهوية "مقصد الحرمين"
 * عرض الفنادق المعتمدة مع مميزات واضحة وصور عالية الجودة
 */
import { ASSETS, waLink } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { MapPin, Star, Wifi, Utensils, Bus } from "lucide-react";

const HOTELS = [
  {
    name: "فندق ساعة مكة فيرمونت",
    location: "أبراج البيت - مكة المكرمة",
    features: ["إطلالة مباشرة على الكعبة", "مطاعم فاخرة", "خدمة VIP"],
    image: ASSETS.hotelRoomHaramView,
    tag: "إقامة فاخرة",
  },
  {
    name: "فندق قصر مكة رافلز",
    location: "أبراج البيت - مكة المكرمة",
    features: ["أجنحة ملكية", "سبا متكامل", "خدمة الغرف 24 ساعة"],
    image: ASSETS.hotelLobbyLuxury,
    tag: "أجنحة ملكية",
  },
  {
    name: "فندق موفنبيك هاجر مكة",
    location: "أبراج البيت - مكة المكرمة",
    features: ["قريب جداً من الحرم", "بوفيه إفطار متنوع", "خدمة توصيل أمتعة"],
    image: ASSETS.hotelLobbyArch,
    tag: "إقامة مميزة",
  }
];

export default function Hotels() {
  return (
    <section id="hotels" className="relative py-20 md:py-28 bg-ivory-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <div className="container relative">
        <SectionHeading
          kicker="فنادقنا المعتمدة"
          title="إقامة فاخرة في قلب مكة"
          subtitle="نختار لك أفضل الفنادق القريبة من الحرمين الشريفين لضمان راحتك وسكينتك طوال الرحلة."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTELS.map((h, i) => (
            <article
              key={h.name}
              className="reveal group bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,61,46,0.08)] border border-[var(--gold)]/10 transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-[var(--emerald-deep)] text-[var(--gold-soft)] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {h.tag}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 text-[var(--gold)] mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[var(--emerald-deep)] mb-1">{h.name}</h3>
                <p className="flex items-center gap-1.5 text-[var(--charcoal)]/60 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-[var(--gold)]" />
                  {h.location}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {h.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--charcoal)]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`السلام عليكم، أرغب في الاستفسار عن حجز في ${h.name} لدى مقصد الحرمين.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center py-3 px-6 rounded-xl bg-[var(--emerald-deep)] text-[var(--gold-soft)] font-bold transition-all hover:bg-[var(--charcoal)] hover:shadow-lg active:scale-95"
                >
                  حجز الفندق
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap justify-center gap-8 md:gap-16 bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-[var(--gold)]/20">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--emerald-deep)]/5 flex items-center justify-center mb-3">
              <Wifi className="w-6 h-6 text-[var(--gold)]" />
            </div>
            <span className="text-sm font-bold text-[var(--emerald-deep)]">واي فاي مجاني</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--emerald-deep)]/5 flex items-center justify-center mb-3">
              <Utensils className="w-6 h-6 text-[var(--gold)]" />
            </div>
            <span className="text-sm font-bold text-[var(--emerald-deep)]">بوفيه إفطار</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--emerald-deep)]/5 flex items-center justify-center mb-3">
              <Bus className="w-6 h-6 text-[var(--gold)]" />
            </div>
            <span className="text-sm font-bold text-[var(--emerald-deep)]">توصيل للحرم</span>
          </div>
        </div>
      </div>
    </section>
  );
}
