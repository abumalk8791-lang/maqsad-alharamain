/**
 * Royal Serenity — النقل: أسطول حديث من الباصات
 * عرض معرض صور الباصات مع مميزات الراحة والأمان
 */
import { ASSETS, waLink } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import { CheckCircle2, Shield, Wind, Coffee } from "lucide-react";

const FLEET = [
  {
    src: ASSETS.busExterior,
    label: "باصات مرسيدس حديثة",
    desc: "أحدث الموديلات المجهزة للسفر الطويل"
  },
  {
    src: ASSETS.busSeats,
    label: "أسطول باصات مان",
    desc: "راحة وأمان على أعلى المستويات"
  },
  {
    src: ASSETS.busVipInterior,
    label: "تجهيزات VIP",
    desc: "داخلية فاخرة تضمن لك الراحة"
  },
  {
    src: ASSETS.busVipSeats,
    label: "خدمات الرحلة",
    desc: "إضاءة هادئة وتكييف متطور"
  }
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
          kicker="أسطول النقل"
          title="معرض صور الباصات الحديثة"
          subtitle="نمتلك أحدث الباصات المكيفة والمجهزة لضمان وصولك إلى الحرمين الشريفين بكل راحة وأمان."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET.map((item, i) => (
            <div 
              key={i} 
              className="reveal group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img 
                src={item.src} 
                alt={item.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald-deep)]/90 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-lg font-bold text-[var(--gold-soft)]">{item.label}</h3>
                <p className="text-white/70 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
              <Wind className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <h4 className="text-[var(--gold-soft)] font-bold mb-1">تكييف متطور</h4>
            <p className="text-white/60 text-xs">تحكم كامل بالحرارة</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
              <Shield className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <h4 className="text-[var(--gold-soft)] font-bold mb-1">أمان وضمان</h4>
            <p className="text-white/60 text-xs">سائقين محترفين</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
              <Coffee className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <h4 className="text-[var(--gold-soft)] font-bold mb-1">ضيافة الرحلة</h4>
            <p className="text-white/60 text-xs">مشروبات ووجبات خفيفة</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
              <CheckCircle2 className="w-7 h-7 text-[var(--gold)]" />
            </div>
            <h4 className="text-[var(--gold-soft)] font-bold mb-1">مواعيد دقيقة</h4>
            <p className="text-white/60 text-xs">التزام تام بالجدول</p>
          </div>
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={waLink("السلام عليكم، أرغب في الاستفسار عن خدمات النقل المتاحة لدى مقصد الحرمين.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--gold)] text-[var(--emerald-deep)] px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-95"
          >
            استفسر عن الرحلات القادمة
          </a>
        </div>
      </div>
    </section>
  );
}
