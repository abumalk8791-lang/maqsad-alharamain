/**
 * الفنادق: صور حقيقية مع رسائل تركز على الراحة والخصوصية العائلية
 */
import { ASSETS, waLink } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { CheckCircle2, MapPin, Star } from "lucide-react";

const HOTELS = [
  {
    name: "فندق ضيافة الرجاء",
    location: "إبراهيم الخليل - مكة المكرمة",
    features: ["فندق ضمن خيارات الإقامة المتاحة", "تتحدد الإتاحة بحسب البرنامج والموعد", "اسألنا عن تفاصيل السكن قبل الحجز"],
    image: ASSETS.hotel1,
    tag: "خيار إقامة",
  },
  {
    name: "فندق فلسطين",
    location: "شارع إبراهيم الخليل - مكة المكرمة",
    features: ["فندق ضمن خيارات الإقامة المتاحة", "نؤكد الفندق المتاح عند مراجعة البرنامج", "نوضح التفاصيل قبل تأكيد الحجز"],
    image: ASSETS.hotel2,
    tag: "خيار إقامة",
  },
  {
    name: "فندق مكة ميلينيوم",
    location: "أبراج البيت – مكة المكرمة",
    features: ["فندق ضمن خيارات الإقامة المتاحة", "يتغير التوفر بحسب تاريخ الرحلة", "تواصل معنا لمعرفة تفاصيل البرنامج"],
    image: ASSETS.hotel3,
    tag: "خيار إقامة",
  },
];

export default function Hotels() {
  return (
    <section id="hotels" className="relative py-20 md:py-28 bg-ivory-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <div className="container relative">
        <SectionHeading
          kicker="فنادق مكة ضمن برامج العمرة"
          title="اسأل عن الفندق المتاح لرحلتك"
          subtitle="نعرض أسماء الفنادق التي تتوفر ضمن برامجنا حالياً. نؤكد الفندق المناسب وتفاصيل الإقامة وفق البرنامج والموعد عند الاستفسار."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTELS.map((hotel, i) => (
            <article
              key={hotel.name}
              className="reveal group bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,61,46,0.08)] border border-[var(--gold)]/10 transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden bg-[var(--charcoal)]/5">
                <img
                  src={hotel.image}
                  alt={`${hotel.name} ضمن خيارات الإقامة في برامج العمرة من الرياض`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(event) => ((event.target as HTMLImageElement).style.opacity = "0")}
                />
                <div className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--emerald-deep)] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {hotel.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--emerald-deep)] mb-1">{hotel.name}</h3>
                <p className="flex items-center gap-1.5 text-[var(--charcoal)]/60 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-[var(--gold)]" />
                  {hotel.location}
                </p>

                <ul className="space-y-3 mb-6">
                  {hotel.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[var(--charcoal)]/80">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`السلام عليكم، أرغب في معرفة توفر ${hotel.name} ضمن برنامج عمرة من الرياض لدى مقصد الحرمين.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center py-3.5 px-6 rounded-xl bg-[var(--emerald-deep)] text-[var(--gold-soft)] font-bold transition-all hover:bg-[var(--charcoal)] hover:shadow-lg active:scale-95"
                >
                  اسأل عن توفر الفندق
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
