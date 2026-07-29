/**
 * Royal Serenity — النقل: قسم غامق زمردي مع gallery للباصات
 * بدون اختراع مواصفات (لا WiFi / وجبات)
 */
import { ASSETS } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { CheckCircle2 } from "lucide-react";

const POINTS = ["رحلات منظمة", "وسائل نقل مريحة", "خيارات تناسب البرنامج", "متابعة وتواصل مباشر"];

const GALLERY = [
  { src: ASSETS.busExterior, alt: "باص حديث فاخر من الخارج", label: "أسطول حديث" },
  { src: ASSETS.busVipSeats, alt: "مقاعد VIP فاخرة داخل الباص", label: "مقاعد VIP" },
  { src: ASSETS.busSeats, alt: "مقاعد مريحة داخل باص النقل", label: "داخلية مريحة" },
  { src: ASSETS.busVipInterior, alt: "تجهيزات داخلية لباص فاخر", label: "تجهيزات راقية" },
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
          kicker="النقل"
          title="طريقك إلى الحرمين... براحة أكبر"
          subtitle="من لحظة الانطلاق وحتى الوصول، نحرص أن تكون رحلتك أكثر راحة وتنظيمًا."
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {GALLERY.map((g, i) => (
            <figure
              key={g.label}
              className={`reveal img-hover-scale relative rounded-2xl overflow-hidden ${
                i % 2 === 0 ? "h-56 md:h-80" : "h-56 md:h-64 lg:mt-16"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <figcaption className="absolute bottom-3 right-4 text-white text-sm font-semibold">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {POINTS.map((p) => (
            <span key={p} className="flex items-center gap-2 text-[var(--ivory)]/85 text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-[var(--gold)]" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

