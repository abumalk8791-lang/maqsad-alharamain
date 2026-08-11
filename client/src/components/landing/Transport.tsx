/**
 * Royal Serenity — النقل: صور باصات حقيقية 100% (بدون جبال)
 */
import { ASSETS, waLink } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

const FLEET = [
  { src: ASSETS.bus1, label: "أسطول حديث" },
  { src: ASSETS.bus2, label: "داخلية مريحة" },
  { src: ASSETS.bus3, label: "باصات معتمدة" },
  { src: ASSETS.bus4, label: "تجهيزات راقية" },
  { src: ASSETS.bus5, label: "راحة وأمان" },
  { src: ASSETS.bus6, label: "خدمة متميزة" }
];

export default function Transport() {
  return (
    <section id="transport" className="relative py-20 md:py-28 bg-[var(--emerald-deep)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url(${ASSETS.pattern})`, backgroundSize: "420px" }}
      />
      
      <div className="container relative">
        <SectionHeading
          kicker="معرض صور الباصات"
          title="أسطول حديث من الباصات المكيفة"
          subtitle="نحرص على توفير أحدث وسائل النقل المريحة والآمنة لخدمة ضيوف الرحمن طوال الرحلة."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {FLEET.map((item, i) => (
            <div 
              key={i} 
              className="reveal group relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-[var(--charcoal)]/20"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img 
                src={item.src} 
                alt={item.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => (e.target as any).style.opacity = '0'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-xs md:text-sm">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {["رحلات منظمة", "وسائل نقل مريحة", "خيارات تناسب البرنامج", "متابعة وتواصل مباشر"].map((p) => (
            <span key={p} className="flex items-center gap-2 text-[var(--ivory)]/85 text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-[var(--gold)]" />
              {p}
            </span>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={waLink("السلام عليكم، أرغب في الاستفسار عن خدمات النقل المتاحة لدى مقصد الحرمين.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--gold)] text-[var(--emerald-deep)] px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-95"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
