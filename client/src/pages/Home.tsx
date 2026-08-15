import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Phone,
  Route,
  UsersRound,
  X,
} from "lucide-react";
import { CONTACT } from "@/data/contact";
import { BOOKING_STEPS, HUMAN_NOTES, NAVIGATION, WHY_US } from "@/data/content";
import { FAQS } from "@/data/faq";
import { HOTELS } from "@/data/hotels";
import { PACKAGES } from "@/data/packages";
import { TRANSPORT_DETAILS, TRANSPORT_GALLERY } from "@/data/transportation";
import { DESTINATIONS, TRIP_DURATIONS, TRIP_FACTS, TRIP_TYPES, tripInquiryMessage } from "@/data/trips";
import { ASSETS, scrollToSection } from "@/lib/brand";
import { Seo } from "@/components/site/Seo";

function WhatsAppButton({
  children,
  message,
  className = "",
}: {
  children: React.ReactNode;
  message: string;
  className?: string;
}) {
  return (
    <a
      href={CONTACT.whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${className}`}
    >
      {children}
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-4">{title}</h2>
      {copy && <p className="section-copy mt-5">{copy}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destination, setDestination] = useState<(typeof DESTINATIONS)[number]>("مكة المكرمة");
  const [tripType, setTripType] = useState<(typeof TRIP_TYPES)[number]>("عمرة");
  const [date, setDate] = useState("");

  const closeMenuAndScroll = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const askAboutTrip = () => {
    window.open(CONTACT.whatsappUrl(tripInquiryMessage({ destination, tripType, date })), "_blank", "noopener,noreferrer");
  };

  return (
    <div id="home" className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgba(248,246,240,.96)] backdrop-blur">
        <div className="page-container flex min-h-[4.8rem] items-center justify-between gap-4">
          <a href="#home" onClick={(event) => { event.preventDefault(); closeMenuAndScroll("home"); }} className="flex items-center gap-2.5" aria-label="مقصد الحرمين — الرئيسية">
            <img src={ASSETS.logo} alt="شعار مقصد الحرمين" className="h-11 w-11 object-contain" />
            <span className="leading-tight">
              <strong className="block text-base">مقصد الحرمين</strong>
              <span className="block text-[.6rem] tracking-[.2em] text-[var(--gold)]">MAQSAD ALHARAMAIN</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="التنقل الرئيسي">
            {NAVIGATION.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(event) => { event.preventDefault(); closeMenuAndScroll(item.id); }} className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="bg-[var(--ink)] text-white hover:bg-[var(--olive)]">
              اسأل عن الباقات
            </WhatsAppButton>
          </div>

          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[var(--line)] bg-[var(--paper)] lg:hidden">
            <nav className="page-container flex flex-col py-3" aria-label="قائمة الهاتف">
              {NAVIGATION.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={(event) => { event.preventDefault(); closeMenuAndScroll(item.id); }} className="border-b border-[var(--line)] py-3 text-sm font-semibold">
                  {item.label}
                </a>
              ))}
              <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="mt-4 bg-[var(--ink)] text-white">
                تواصل عبر واتساب
              </WhatsAppButton>
            </nav>
          </div>
        )}
      </header>

      <Seo
        path="/"
        title="عمرة من الرياض إلى مكة والمدينة | مقصد الحرمين"
        description="رحلات عمرة من الرياض بمدد 3 و5 و7 أيام، مع خيارات إلى مكة المكرمة أو مكة والمدينة تشمل الإقامة الفندقية والنقل بالحافلات حسب المتاح."
      />
      <main>
        <section className="page-container grid gap-8 py-8 md:grid-cols-12 md:items-stretch md:py-14 lg:py-20">
          <div className="flex flex-col justify-center md:col-span-6 lg:col-span-5">
            <span className="eyebrow">رحلات عمرة من مدينة الرياض</span>
            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.16] tracking-[-.04em] sm:text-5xl lg:text-6xl">
              عمرة من الرياض إلى <span className="text-[var(--gold)]">مكة والمدينة</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--ink-soft)] md:text-lg">
              رحلات بمدد 3 و5 و7 أيام، مع خيارات إلى مكة المكرمة أو مكة والمدينة حسب المتاح. نوضح لك الإقامة والنقل والموعد والسعر الحالي قبل الحجز.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message="السلام عليكم، أرغب في حجز رحلة عمرة من الرياض لدى مقصد الحرمين." className="bg-[var(--ink)] text-white hover:bg-[var(--olive)]">
                احجز رحلتك
              </WhatsAppButton>
              <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="border border-[var(--ink)] text-[var(--ink)] hover:bg-white">
                اسألنا عن الباقات
              </WhatsAppButton>
            </div>
          </div>

          <div className="hero-image image-breathe relative min-h-[21rem] overflow-hidden rounded-[1.75rem] bg-[var(--paper-deep)] md:col-span-6 lg:col-span-7">
            <img src={ASSETS.heroMakkah} alt="المسجد الحرام في مكة المكرمة" className="h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-6 text-white sm:p-8">
              <p className="max-w-sm text-sm leading-7 text-white/90">خطط لرحلتك بهدوء، واسألنا عن البرنامج الأنسب لك قبل أن تتخذ قرارك.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white">
          <div className="page-container grid divide-y divide-[var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-x-reverse">
            {TRIP_FACTS.map((fact, index) => (
              <div key={fact} className="flex items-center gap-3 px-2 py-5 sm:justify-center sm:px-4">
                {index === 0 && <Clock3 className="h-5 w-5 text-[var(--gold)]" />}
                {index === 1 && <Route className="h-5 w-5 text-[var(--gold)]" />}
                {index === 2 && <UsersRound className="h-5 w-5 text-[var(--gold)]" />}
                <span className="text-sm font-semibold">{fact}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="trips" className="section-shell page-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <SectionIntro eyebrow="ابدأ من المعلومات التي تهمك" title="تفاصيل رحلات العمرة من الرياض" copy="حدد الوجهة ونوع الرحلة والوقت المناسب، ثم افتح محادثة واتساب برسالة مرتبة بالتفاصيل التي اخترتها." />
            </div>
            <form className="grid gap-4 rounded-3xl border border-[var(--line)] bg-white p-5 shadow-[0_16px_40px_rgba(24,53,46,.06)] sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4" onSubmit={(event) => { event.preventDefault(); askAboutTrip(); }}>
              <label className="text-sm font-semibold">
                من
                <span className="mt-2 block rounded-xl bg-[var(--paper)] px-3 py-3 text-[var(--ink-soft)]">الرياض</span>
              </label>
              <label className="text-sm font-semibold" htmlFor="destination">
                إلى
                <select id="destination" value={destination} onChange={(event) => setDestination(event.target.value as (typeof DESTINATIONS)[number])} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-3 text-sm outline-none">
                  {DESTINATIONS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold" htmlFor="trip-type">
                نوع الرحلة
                <select id="trip-type" value={tripType} onChange={(event) => setTripType(event.target.value as (typeof TRIP_TYPES)[number])} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-3 text-sm outline-none">
                  {TRIP_TYPES.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold" htmlFor="trip-date">
                التاريخ
                <input id="trip-date" type="date" value={date} onChange={(event) => setDate(event.target.value)} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-[.66rem] text-sm outline-none" />
              </label>
              <button type="submit" className="sm:col-span-2 lg:col-span-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--olive)]">
                اعرف تفاصيل الرحلة <ArrowLeft className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-12">
            {TRIP_DURATIONS.map((trip, index) => (
              <article key={trip.days} className={`reveal-card border-t-2 border-[var(--gold)] bg-white p-6 ${index === 0 ? "md:col-span-4" : index === 1 ? "md:col-span-5" : "md:col-span-3"}`}>
                <p className="text-3xl font-bold tracking-[-.04em]">{trip.days}</p>
                <h3 className="mt-5 text-lg font-bold">{trip.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{trip.description}</p>
                <WhatsAppButton message={`السلام عليكم، أرغب في معرفة تفاصيل رحلة ${trip.days} من الرياض لدى مقصد الحرمين.`} className="mt-5 border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]">
                  اسأل عن هذه المدة
                </WhatsAppButton>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-12 sm:py-16">
          <div className="page-container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionIntro eyebrow="اختر المعلومة التي تحتاجها" title="صفحات تساعدك قبل أن تسأل" copy="شرح عملي للرحلات والباقات والفنادق والتواصل، دون وعود أو تفاصيل غير مؤكدة." />
              <Link href="/contact" className="text-sm font-bold text-[var(--ink)] underline underline-offset-4">ابدأ الاستفسار</Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["عمرة من الرياض", "المدد والوجهات وخطوة البدء", "/umrah-from-riyadh"],
                ["باقات العمرة", "الاقتصادي وVIP قبل تأكيد التفاصيل", "/umrah-packages"],
                ["مكة والمدينة", "اختيار الوجهة وفق البرنامج المتاح", "/makkah-and-madinah"],
                ["الفنادق", "خيارات الإقامة التي نعرضها", "/hotels"],
                ["تواصل وحجز", "ما المعلومات التي نحتاجها منك", "/contact"],
              ].map(([title, copy, href]) => (
                <Link key={href} href={href} className="reveal-card group flex min-h-40 flex-col justify-between border border-[var(--line)] bg-[var(--paper)] p-4 hover:border-[var(--gold)]">
                  <div><h3 className="font-bold">{title}</h3><p className="mt-2 text-xs leading-6 text-[var(--ink-soft)]">{copy}</p></div>
                  <span className="mt-3 text-xs font-bold text-[var(--gold)] transition-transform group-hover:-translate-x-1">اعرف المزيد ←</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="section-shell bg-[var(--paper-deep)]">
          <div className="page-container">
            <SectionIntro eyebrow="باقات واضحة قبل التواصل" title="باقات العمرة من الرياض" copy="قارن بين الاقتصادي وVIP، ثم أخبرنا بالمدة والوجهة وعدد المسافرين لنوضح لك السعر الحالي والتفاصيل المتاحة." />
            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              {PACKAGES.map((pkg, index) => (
                <article key={pkg.id} className={`reveal-card overflow-hidden rounded-[1.5rem] ${index === 0 ? "bg-white lg:col-span-7" : "bg-[var(--ink)] text-white lg:col-span-5"}`}>
                  <div className={`grid h-full ${index === 0 ? "md:grid-cols-2" : ""}`}>
                    {index === 0 && <img src={pkg.image} alt={pkg.imageAlt} loading="lazy" className="h-64 w-full object-cover md:h-full" />}
                    <div className="flex flex-col p-7 sm:p-8">
                      <span className={`text-xs font-bold ${index === 0 ? "text-[var(--gold)]" : "text-[var(--gold-wash)]"}`}>{pkg.eyebrow}</span>
                      <h3 className="mt-3 text-3xl font-bold tracking-[-.04em]">{pkg.label}</h3>
                      <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-[var(--ink-soft)]" : "text-white/75"}`}>{pkg.description}</p>
                      <ul className={`mt-6 space-y-3 border-t pt-5 text-sm ${index === 0 ? "border-[var(--line)]" : "border-white/15 text-white/85"}`}>
                        {pkg.included.map((item) => <li key={item} className="flex gap-2"><span className="text-[var(--gold)]">—</span>{item}</li>)}
                      </ul>
                      <WhatsAppButton message={`السلام عليكم، أرغب في معرفة السعر الحالي وتفاصيل ${pkg.label} لدى مقصد الحرمين.`} className={`mt-8 ${index === 0 ? "bg-[var(--ink)] text-white hover:bg-[var(--olive)]" : "bg-[var(--gold-wash)] text-[var(--ink)] hover:bg-white"}`}>
                        {pkg.action}
                      </WhatsAppButton>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell page-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionIntro eyebrow="الصورة قبل الحجز" title="تفاصيل رحلتك في مكان واحد" copy="هذه هي المعلومات الأساسية التي نوضحها لك، أما الموعد والسعر والفندق المتاح فتُؤكد عند التواصل." />
            </div>
            <dl className="border-y border-[var(--line)] lg:col-span-7">
              {[
                ["مدينة الانطلاق", "الرياض"],
                ["الوجهات", "مكة المكرمة، مكة والمدينة، أو المدينة المنورة"],
                ["مدة الرحلة", "3 أو 5 أو 7 أيام"],
                ["النقل", "حافلات حديثة ضمن البرنامج"],
                ["الإقامة", "إقامة فندقية ضمن البرنامج"],
                ["السعر والموعد", "يؤكدان عند التواصل حسب التفاصيل والتوفر"],
              ].map(([term, definition]) => (
                <div key={term} className="grid gap-1 border-b border-[var(--line)] py-4 sm:grid-cols-3 sm:gap-5">
                  <dt className="text-sm font-bold">{term}</dt>
                  <dd className="text-sm leading-7 text-[var(--ink-soft)] sm:col-span-2">{definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="about" className="section-shell bg-[var(--ink)] text-white">
          <div className="page-container grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow !text-[var(--gold-wash)]">كيف تتم الرحلة؟</span>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-.04em]">كيف تحجز رحلة عمرة من الرياض؟</h2>
              <p className="mt-5 max-w-md text-sm leading-8 text-white/70">لا تحتاج إلى إنشاء حساب أو تعبئة نموذج طويل. تبدأ المحادثة، ثم نوضح لك ما هو متاح قبل أن تؤكد قرارك.</p>
            </div>
            <ol className="lg:col-span-7">
              {BOOKING_STEPS.map((step) => (
                <li key={step.number} className="timeline-step grid grid-cols-[3.5rem_1fr] gap-4 border-b border-white/15 py-5 last:border-b-0">
                  <span className="text-2xl font-bold text-[var(--gold-wash)]">{step.number}</span>
                  <div><h3 className="font-bold">{step.title}</h3><p className="mt-1 text-sm leading-7 text-white/65">{step.description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="hotels" className="section-shell page-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6"><SectionIntro eyebrow="أين ستسكن؟" title="فنادق مكة والمدينة ضمن برامجنا" copy="نعرض أسماء الفنادق والمواقع المتوفرة لدينا حالياً. اسألنا عن الفندق المتاح ضمن البرنامج الذي تختاره." /></div>
            <div className="lg:col-span-6 lg:pb-1"><p className="border-r-2 border-[var(--gold)] pr-4 text-sm leading-7 text-[var(--ink-soft)]">لا نعرض مسافات أو تصنيفات أو مرافق تفصيلية غير مؤكدة. نوضح لك كل ما يتعلق بالإقامة عند الاستفسار.</p></div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {HOTELS.map((hotel, index) => (
              <article key={hotel.id} className={`reveal-card overflow-hidden bg-white ${index === 0 ? "md:col-span-7" : "md:col-span-5"}`}>
                <img src={hotel.image} alt={hotel.alt} loading="lazy" className={`w-full object-cover ${index === 0 ? "h-80" : "h-64"}`} />
                <div className="border-x border-b border-[var(--line)] p-5">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[var(--gold)]"><MapPin className="h-3.5 w-3.5" /> {hotel.location}</span>
                  <h3 className="mt-2 text-xl font-bold">{hotel.name}</h3>
                  <WhatsAppButton message={`السلام عليكم، أرغب في الاستفسار عن الإقامة في ${hotel.name} ضمن رحلة مقصد الحرمين.`} className="mt-4 border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]">
                    اسأل عن الإقامة
                  </WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="page-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-5"><SectionIntro eyebrow="الطريق جزء من الرحلة" title="المواصلات من الرياض" copy="نعرض صور الحافلات المتاحة لدينا، ونؤكد لك تفاصيل التجمع والانطلاق عند الحجز." /></div>
              <dl className="grid divide-y divide-[var(--line)] border-y border-[var(--line)] lg:col-span-7">
                {TRANSPORT_DETAILS.map((detail) => <div key={detail.label} className="flex items-center justify-between gap-5 py-3 text-sm"><dt className="font-bold">{detail.label}</dt><dd className="text-[var(--ink-soft)]">{detail.value}</dd></div>)}
              </dl>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
              {TRANSPORT_GALLERY.map((item, index) => (
                <figure key={item.alt} className={`image-breathe overflow-hidden rounded-2xl bg-[var(--paper-deep)] ${index === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <img src={item.image} alt={item.alt} loading="lazy" className="h-full min-h-36 w-full object-cover" />
                </figure>
              ))}
            </div>
            <WhatsAppButton message="السلام عليكم، أرغب في الاستفسار عن النقل من الرياض ضمن رحلة العمرة لدى مقصد الحرمين." className="mt-7 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--paper)]">
              اسأل عن تفاصيل النقل
            </WhatsAppButton>
          </div>
        </section>

        <section className="section-shell page-container">
          <div className="grid gap-9 lg:grid-cols-12">
            <div className="lg:col-span-4"><SectionIntro eyebrow="قبل ما تحجز، خلينا نوضح لك" title="تفاصيل صغيرة قد تهمك" copy="نفضّل أن تسأل قبل الحجز؛ فكل عائلة لديها احتياج مختلف." /></div>
            <div className="grid gap-4 lg:col-span-8 md:grid-cols-3">
              {HUMAN_NOTES.map((note) => (
                <article key={note.title} className="border-t-2 border-[var(--gold)] bg-[var(--gold-wash)] p-5"><h3 className="font-bold">{note.title}</h3><p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{note.description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--paper-deep)]">
          <div className="page-container grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><SectionIntro eyebrow="من نحن" title="مقصد الحرمين للعمرة والزيارة" copy="نرتب رحلات العمرة من الرياض، ونعمل على أن تكون تفاصيل الرحلة واضحة لك من اختيار الباقة والسكن إلى موعد العودة." /></div>
            <div className="lg:col-span-8">
              {WHY_US.map((item, index) => (
                <article key={item.title} className="grid gap-4 border-b border-[var(--line)] py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="text-2xl font-bold text-[var(--gold)]">0{index + 1}</span>
                  <div><h3 className="font-bold">{item.title}</h3><p className="mt-1 text-sm leading-7 text-[var(--ink-soft)]">{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell page-container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><SectionIntro eyebrow="إجابات قبل التواصل" title="الأسئلة الشائعة عن رحلات العمرة" copy="إن لم تجد إجابتك هنا، أرسل لنا استفسارك وسنوضح لك التفاصيل المتاحة." /></div>
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)] lg:col-span-8">
              {FAQS.map((faq) => (
                <details key={faq.question} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-bold marker:hidden">
                    {faq.question}<ChevronDown className="h-5 w-5 shrink-0 text-[var(--gold)] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-2xl pb-5 text-sm leading-8 text-[var(--ink-soft)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[var(--ink)] py-12 text-white sm:py-16">
          <div className="page-container grid gap-7 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7"><span className="eyebrow !text-[var(--gold-wash)]">تواصل مباشر</span><h2 className="mt-4 text-3xl font-bold tracking-[-.04em] sm:text-4xl">محتار بين الباقات؟ أرسل لنا موعد السفر وعدد الأشخاص.</h2><p className="mt-4 max-w-xl text-sm leading-8 text-white/70">سنوضح لك الخيارات المتاحة والسعر الحالي وتفاصيل الرحلة قبل الحجز.</p></div>
            <div className="flex flex-col gap-3 md:col-span-5">
              <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="bg-[var(--gold-wash)] text-[var(--ink)] hover:bg-white">تواصل معنا عبر واتساب</WhatsAppButton>
              <a href={`tel:+966${CONTACT.phones[0].slice(1)}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"><Phone className="h-4 w-4" /> {CONTACT.phones[0]}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#10261f] py-10 text-white/70">
        <div className="page-container grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5"><div className="flex items-center gap-3"><img src={ASSETS.logo} alt="شعار مقصد الحرمين" className="h-12 w-12 object-contain" /><div><strong className="block text-white">مقصد الحرمين</strong><span className="text-[.6rem] tracking-[.18em] text-[var(--gold-wash)]">MAQSAD ALHARAMAIN</span></div></div><p className="mt-4 max-w-sm text-sm leading-7">رحلات عمرة مميزة من الرياض مع خيارات للإقامة والنقل، وتفاصيل واضحة قبل الحجز.</p></div>
          <nav className="grid grid-cols-2 gap-3 text-sm md:col-span-3" aria-label="روابط التذييل">{NAVIGATION.map((item) => <a key={item.id} href={`#${item.id}`} onClick={(event) => { event.preventDefault(); scrollToSection(item.id); }} className="hover:text-white">{item.label}</a>)}</nav>
          <div className="space-y-3 text-sm md:col-span-4"><p className="font-bold text-white">تواصل معنا</p><a className="block hover:text-white" dir="ltr" href={`tel:+966${CONTACT.phones[0].slice(1)}`}>{CONTACT.phones[0]}</a><a className="block hover:text-white" dir="ltr" href={`tel:+966${CONTACT.phones[1].slice(1)}`}>{CONTACT.phones[1]}</a><a className="inline-flex items-center gap-2 text-[var(--gold-wash)] hover:text-white" href={CONTACT.whatsappUrl()} target="_blank" rel="noopener noreferrer">واتساب <ArrowLeft className="h-4 w-4" /></a></div>
        </div>
        <div className="page-container mt-8 border-t border-white/10 pt-5 text-xs text-white/45">© 2026 مقصد الحرمين. جميع الحقوق محفوظة.</div>
      </footer>
    </div>
  );
}
