/**
 * Royal Serenity — الفنادق: صور حقيقية 100% من موقع المدثر
 */
import { ASSETS, waLink } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { MapPin, Star, Wifi, Utensils, Bus } from "lucide-react";

const HOTELS = [
  {
    name: "فندق ضيافة الرجاء",
    location: "إبراهيم الخليل - مكة المكرمة",
    features: ["واي فاي مجاني", "مطعم فاخر", "توصيل للحرم"],
    image: ASSETS.hotel1,
    tag: "معتمد",
  },
  {
    name: "فندق فلسيطن",
    location: "شارع إبراهيم الخليل - مكة المكرمة",
    features: ["واي فاي مجاني", "مطعم فاخر", "توصيل للحرم"],
    image: ASSETS.hotel2,
    tag: "معتمد",
  },
  {
    name: "فندق مكة ميلينيوم",
    location: "أبراج البيت – مكة المكرمة",
    features: ["واي فاي مجاني", "مطعم فاخر", "توصيل للحرم"],
    image: ASSETS.hotel3,
    tag: "معتمد",
  }
];

export default function Hotels() {
  return (
    <section id="hotels" className="relative py-20 md:py-28 bg-ivory-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <div className="container relative">
        <SectionHeading
          kicker="فنادقنا المعتمدة"
          title="إقامة فاخرة في أفضل الفنادق"
          subtitle="إقامة فاخرة في أفضل الفنادق القريبة من الحرمين الشريفين لضمان راحتكم."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTELS.map((h, i) => (
            <article
              key={h.name}
              className="reveal group bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,61,46,0.08)] border border-[var(--gold)]/10 transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden bg-[var(--charcoal)]/5">
                <img 
                  src={h.image} 
                  alt={h.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  onError={(e) => (e.target as any).style.opacity = '0'}
                />
                <div className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--emerald-deep)] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {h.tag}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--emerald-deep)] mb-1">{h.name}</h3>
                <p className="flex items-center gap-1.5 text-[var(--charcoal)]/60 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-[var(--gold)]" />
                  {h.location}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {h.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[var(--charcoal)]/80">
                      {f.includes("واي فاي") && <Wifi className="w-4 h-4 text-[var(--gold)]" />}
                      {f.includes("مطعم") && <Utensils className="w-4 h-4 text-[var(--gold)]" />}
                      {f.includes("توصيل") && <Bus className="w-4 h-4 text-[var(--gold)]" />}
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`السلام عليكم، أرغب في الاستفسار عن حجز في ${h.name} لدى مقصد الحرمين.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center py-3.5 px-6 rounded-xl bg-[var(--emerald-deep)] text-[var(--gold-soft)] font-bold transition-all hover:bg-[var(--charcoal)] hover:shadow-lg active:scale-95"
                >
                  عرض التفاصيل
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
