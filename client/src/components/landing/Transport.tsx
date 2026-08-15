/**
 * النقل البري: صور حافلات حقيقية لرحلات العمرة المنطلقة من الرياض
 */
import { ASSETS, waLink } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

const FLEET = [
  { src: ASSETS.bus1, label: "حافلة ضمن النقل البري من الرياض" },
  { src: ASSETS.bus2, label: "نقل بالحافلات ضمن برنامج العمرة" },
  { src: ASSETS.bus3, label: "حافلة لرحلات العمرة من الرياض" },
  { src: ASSETS.bus4, label: "نقل بري وفق البرنامج المتاح" },
  { src: ASSETS.bus5, label: "صورة من حافلات برامج العمرة" },
  { src: ASSETS.bus6, label: "حافلة ضمن رحلة عمرة من الرياض" },
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
          kicker="المواصلات من الرياض"
          title="نقل بالحافلات ضمن برنامج العمرة"
          subtitle="نتحقق معك من نقطة التجمع والوجهة وموعد الانطلاق قبل الحجز، ثم نرسل المعلومات المؤكدة وفق البرنامج المتاح."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {FLEET.map((item, i) => (
            <article
              key={item.label}
              className="reveal group relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-[var(--charcoal)]/20"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={item.src}
                alt={`${item.label} — مقصد الحرمين`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(event) => ((event.target as HTMLImageElement).style.opacity = "0")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-xs md:text-sm">{item.label}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {["نقطة تجمع وموعد بحسب البرنامج", "نقل بالحافلات من الرياض", "تأكيد معلومات الانطلاق قبل الرحلة", "تواصل مباشر للاستفسار"].map((point) => (
            <span key={point} className="flex items-center gap-2 text-[var(--ivory)]/85 text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-[var(--gold)]" />
              {point}
            </span>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={waLink("السلام عليكم، أرغب في معرفة مواعيد النقل المتاحة من الرياض ضمن برامج العمرة لدى مقصد الحرمين.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--gold)] text-[var(--emerald-deep)] px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-95"
          >
            اسأل عن مواعيد النقل
          </a>
        </div>
      </div>
    </section>
  );
}
