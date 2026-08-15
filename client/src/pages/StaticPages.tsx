import { ArrowLeft, Check, MapPin, Phone, Route } from "lucide-react";
import { Link } from "wouter";
import { CONTACT } from "@/data/contact";
import { FAQS } from "@/data/faq";
import { HOTELS } from "@/data/hotels";
import { PACKAGES } from "@/data/packages";
import { TRIP_DURATIONS, tripInquiryMessage } from "@/data/trips";
import { ASSETS } from "@/lib/brand";
import { breadcrumbSchema, Seo } from "@/components/site/Seo";
import { ContactBand, SectionIntro, SiteFooter, SiteHeader, WhatsAppButton } from "@/components/site/SiteChrome";

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function HeroImage({ image, alt, eyebrow, title, copy }: { image: string; alt: string; eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-container grid gap-8 py-8 md:grid-cols-12 md:items-stretch md:py-14 lg:py-20">
      <div className="flex flex-col justify-center md:col-span-6 lg:col-span-5">
        <SectionIntro eyebrow={eyebrow} title={title} copy={copy} as="h1" />
        <div className="mt-8">
          <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="bg-[var(--ink)] text-white hover:bg-[var(--olive)]">
            اسأل عن الرحلات المتاحة
          </WhatsAppButton>
        </div>
      </div>
      <div className="hero-image image-breathe relative min-h-[20rem] overflow-hidden rounded-[1.75rem] bg-[var(--paper-deep)] md:col-span-6 lg:col-span-7">
        <img src={image} alt={alt} className="h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-6 text-white sm:p-8">
          <p className="max-w-sm text-sm leading-7 text-white/90">نسأل عن التفاصيل التي تؤثر في قرارك، ثم نؤكد ما هو متاح قبل الحجز.</p>
        </div>
      </div>
    </section>
  );
}

function BookingChecklist() {
  return (
    <section className="on-dark section-shell bg-[var(--ink)] text-white">
      <div className="page-container grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionIntro eyebrow="ما الذي نحتاجه منك؟" title="أربع معلومات تكفي لبدء الاستفسار" copy="كلما كانت رسالتك أوضح، كان جوابنا أدق وأسرع." />
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {["الوجهة التي تفكر بها", "المدة الأقرب لاحتياجك", "موعد السفر المتوقع", "عدد المسافرين"].map((item, index) => (
            <li key={item} className="flex gap-3 border border-white/15 bg-white/5 p-4 text-sm leading-7">
              <span className="font-bold text-[var(--gold-wash)]">0{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function UmrahFromRiyadhPage() {
  const path = "/umrah-from-riyadh";

  return (
    <PageFrame>
      <Seo
        path={path}
        title="عمرة من الرياض | رحلات 3 و5 و7 أيام — مقصد الحرمين"
        description="استفسر عن رحلات عمرة من الرياض إلى مكة المكرمة أو مكة والمدينة، بخيارات 3 و5 و7 أيام تشمل الإقامة الفندقية والنقل بالحافلات حسب المتاح."
        schema={breadcrumbSchema([{ name: "الرئيسية", path: "/" }, { name: "عمرة من الرياض", path }])}
      />
      <HeroImage image={ASSETS.makkahAerial} alt="مشهد جوي لمكة المكرمة والمسجد الحرام" eyebrow="الانطلاق من مدينة الرياض" title="عمرة من الرياض إلى مكة والمدينة" copy="رحلات بمدد 3 و5 و7 أيام إلى مكة المكرمة أو مكة والمدينة حسب البرنامج المتاح، مع الإقامة الفندقية والنقل بالحافلات." />

      <section className="border-y border-[var(--line)] bg-white">
        <div className="page-container grid divide-y divide-[var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-x-reverse sm:divide-y-0">
          {["مدينة الانطلاق: الرياض", "المدة: 3 أو 5 أو 7 أيام", "الوجهة تحدد عند الاستفسار"].map((item) => <p key={item} className="px-4 py-5 text-center text-sm font-semibold">{item}</p>)}
        </div>
      </section>

      <section className="section-shell page-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5"><SectionIntro eyebrow="اختر المدة أولاً" title="الوقت الذي يناسب رحلتك" copy="نبدأ من المدة الأقرب لاحتياجك، ثم نؤكد الوجهة والفندق والموعد والسعر الحالي عند التواصل." /></div>
          <p className="border-r-2 border-[var(--gold)] pr-4 text-sm leading-7 text-[var(--ink-soft)] lg:col-span-7">لا نربط مدة محددة بفندق أو سعر ثابت؛ فهذه التفاصيل تتغير بحسب تاريخ السفر والوجهة والتوفر.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {TRIP_DURATIONS.map((trip, index) => (
            <article key={trip.days} className={`reveal-card border-t-2 border-[var(--gold)] p-6 ${index === 1 ? "bg-[var(--paper-deep)]" : "bg-white"}`}>
              <p className="text-3xl font-bold tracking-[-.04em]">{trip.days}</p>
              <h2 className="mt-5 text-xl font-bold">{trip.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{trip.description}</p>
              <WhatsAppButton message={tripInquiryMessage({ duration: trip.days })} className="mt-6 border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]">اسأل عن هذه المدة</WhatsAppButton>
            </article>
          ))}
        </div>
      </section>

      <BookingChecklist />
      <ContactBand title="ابدأ برسالة قصيرة، وسنوضح لك برنامج العمرة المتاح من الرياض." />
    </PageFrame>
  );
}

export function UmrahPackagesPage() {
  const path = "/umrah-packages";
  return (
    <PageFrame>
      <Seo
        path={path}
        title="باقات العمرة من الرياض | اقتصادي وVIP — مقصد الحرمين"
        description="قارن بين باقات العمرة الاقتصادية وVIP من الرياض، واعرف ما يتم تأكيده من نقل وإقامة ومدة ووجهة قبل الحجز."
        schema={breadcrumbSchema([{ name: "الرئيسية", path: "/" }, { name: "باقات العمرة", path }])}
      />
      <HeroImage image={ASSETS.makkahHotelTowers} alt="أبراج وفنادق في محيط المسجد الحرام بمكة المكرمة" eyebrow="باقات بلا وعود عامة" title="باقات العمرة من الرياض" copy="نوضح لك الفرق العملي بين الباقة الاقتصادية وVIP، ثم نؤكد التفاصيل التي تعتمد على تاريخك ووجهتك قبل الحجز." />

      <section className="section-shell bg-[var(--paper-deep)]">
        <div className="page-container">
          <SectionIntro eyebrow="قارن قبل الاستفسار" title="أي باقة تناسب طريقة سفرك؟" copy="لا نعتمد سعراً ثابتاً منشوراً؛ لأن الموعد والوجهة والفندق وعدد المسافرين تؤثر في التفاصيل المتاحة." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PACKAGES.map((pkg, index) => (
              <article key={pkg.id} className={`reveal-card overflow-hidden rounded-[1.5rem] ${index === 0 ? "bg-white" : "bg-[var(--ink)] text-white"}`}>
                <div className="grid h-full md:grid-cols-5">
                  <img src={pkg.image} alt={pkg.imageAlt} className="h-64 w-full object-cover md:col-span-2 md:h-full" loading="lazy" />
                  <div className="p-7 md:col-span-3 sm:p-8">
                    <span className={`text-xs font-bold ${index === 0 ? "text-[var(--gold)]" : "text-[var(--gold-wash)]"}`}>{pkg.eyebrow}</span>
                    <h2 className="mt-3 text-3xl font-bold tracking-[-.04em]">{pkg.label}</h2>
                    <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-[var(--ink-soft)]" : "text-white/75"}`}>{pkg.description}</p>
                    <ul className={`mt-6 space-y-3 border-t pt-5 text-sm ${index === 0 ? "border-[var(--line)]" : "border-white/15 text-white/85"}`}>
                      {pkg.included.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />{item}</li>)}
                    </ul>
                    <WhatsAppButton message={`السلام عليكم، أرغب في معرفة السعر الحالي وتفاصيل ${pkg.label} من الرياض لدى مقصد الحرمين.`} className={`mt-8 ${index === 0 ? "bg-[var(--ink)] text-white hover:bg-[var(--olive)]" : "bg-[var(--gold-wash)] text-[var(--ink)] hover:bg-white"}`}>{pkg.action}</WhatsAppButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell page-container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionIntro eyebrow="ما الذي يتغير؟" title="عناصر نؤكدها معك قبل الحجز" /></div>
          <dl className="divide-y divide-[var(--line)] border-y border-[var(--line)] lg:col-span-8">
            {[["المدة", "تختار 3 أو 5 أو 7 أيام وفق ما يناسبك."], ["الوجهة", "مكة المكرمة أو مكة والمدينة بحسب البرنامج المتاح."], ["الإقامة", "يتأكد الفندق المتاح ضمن الباقة عند التواصل."], ["النقل", "يوضح لك نوع النقل وتفاصيل التجمع قبل الموعد."], ["السعر", "يتحدد بعد معرفة التاريخ والوجهة وعدد المسافرين والتوفر."]].map(([term, detail]) => <div key={term} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-5"><dt className="text-sm font-bold">{term}</dt><dd className="text-sm leading-7 text-[var(--ink-soft)] sm:col-span-2">{detail}</dd></div>)}
          </dl>
        </div>
      </section>
      <ContactBand title="اختر الباقة الأقرب لاحتياجك، ودعنا نؤكد ما يتاح في موعدك." />
    </PageFrame>
  );
}

export function MakkahAndMadinahPage() {
  const path = "/makkah-and-madinah";
  return (
    <PageFrame>
      <Seo
        path={path}
        title="رحلات مكة والمدينة من الرياض | مقصد الحرمين"
        description="استفسر عن برامج العمرة والزيارة من الرياض إلى مكة والمدينة، واعرف ما يتم تأكيده من المدة والإقامة والنقل قبل الحجز."
        schema={breadcrumbSchema([{ name: "الرئيسية", path: "/" }, { name: "مكة والمدينة", path }])}
      />
      <HeroImage image={ASSETS.madinahEditorial} alt="المسجد النبوي في المدينة المنورة" eyebrow="الوجهة بحسب البرنامج" title="رحلات مكة والمدينة من الرياض" copy="برامج للعمرة والزيارة تتحدد وجهتها ومدتها وفق المتاح. نساعدك في معرفة الخيار المناسب قبل أن تؤكد الحجز." />
      <section className="section-shell page-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5"><SectionIntro eyebrow="تحديد الوجهة" title="ابدأ من المدينة التي تهمك" copy="يمكن أن يكون الاستفسار عن مكة المكرمة، أو مكة والمدينة، أو المدينة المنورة. لا نفترض الوجهة قبل التأكد من البرنامج المتاح." /></div>
          <div className="grid gap-4 md:grid-cols-3 lg:col-span-7">
            {[{ title: "مكة المكرمة", copy: "خيار مناسب لمن يرغب في تركيز الرحلة على أداء العمرة." }, { title: "مكة والمدينة", copy: "خيار لمن يرغب في الجمع بين العمرة والزيارة وفق مدة البرنامج المتاح." }, { title: "المدينة المنورة", copy: "خيار زيارة يحدد تفصيله عند التواصل." }].map((item) => <article key={item.title} className="border-t-2 border-[var(--gold)] bg-white p-5"><h2 className="text-lg font-bold">{item.title}</h2><p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{item.copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section-shell bg-white">
        <div className="page-container grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="image-breathe relative min-h-72 overflow-hidden rounded-[1.5rem] lg:col-span-6"><img src={ASSETS.madinahNight} alt="المسجد النبوي ليلاً في المدينة المنورة" className="h-full w-full object-cover" loading="lazy" /></div>
          <div className="lg:col-span-6"><SectionIntro eyebrow="قبل أن تختار" title="المعلومة الأهم هي ما يتاح في تاريخك" copy="المدة، الفندق، ترتيب الزيارة وتفاصيل النقل ترتبط بموعد السفر. لهذا نؤكدها معك برسالة واضحة قبل الحجز." /><WhatsAppButton message="السلام عليكم، أرغب في الاستفسار عن رحلة من الرياض إلى مكة والمدينة لدى مقصد الحرمين." className="mt-7 bg-[var(--ink)] text-white hover:bg-[var(--olive)]">اسأل عن مكة والمدينة</WhatsAppButton></div>
        </div>
      </section>
      <BookingChecklist />
      <ContactBand title="أخبرنا بالوجهة والموعد، ونراجع لك البرامج المتاحة من الرياض." />
    </PageFrame>
  );
}

export function HotelsPage() {
  const path = "/hotels";
  return (
    <PageFrame>
      <Seo
        path={path}
        title="فنادق مكة والمدينة للمعتمرين | مقصد الحرمين"
        description="اطّلع على الفنادق التي يعرضها مقصد الحرمين ضمن برامج العمرة من الرياض، مع تأكيد الفندق المتاح قبل الحجز."
        schema={breadcrumbSchema([{ name: "الرئيسية", path: "/" }, { name: "الفنادق", path }])}
      />
      <HeroImage image={ASSETS.makkahHotelExterior} alt="واجهة فندق في مكة المكرمة" eyebrow="الإقامة ضمن البرنامج" title="فنادق مكة والمدينة للمعتمرين" copy="نعرض لك أسماء الفنادق الظاهرة ضمن خياراتنا، ثم نؤكد الفندق المتاح في موعد رحلتك قبل الحجز." />
      <section className="section-shell page-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6"><SectionIntro eyebrow="صور وأسماء واضحة" title="خيارات الإقامة المتاحة للعرض" copy="الفندق الفعلي يرتبط بالبرنامج والموعد والتوفر. لذلك لا ننشر مسافات أو تصنيفات أو مرافق تفصيلية غير مؤكدة." /></div>
          <p className="border-r-2 border-[var(--gold)] pr-4 text-sm leading-7 text-[var(--ink-soft)] lg:col-span-6">إذا كان لديك فندق محدد في بالك، أرسله لنا في واتساب وسنوضح لك ما يتاح ضمن رحلتك.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-12">
          {HOTELS.map((hotel, index) => <article key={hotel.id} className={`reveal-card overflow-hidden bg-white ${index === 0 ? "md:col-span-7" : "md:col-span-5"}`}><img src={hotel.image} alt={hotel.alt} className={`w-full object-cover ${index === 0 ? "h-80" : "h-64"}`} loading="lazy" /><div className="border-x border-b border-[var(--line)] p-5"><span className="flex items-center gap-1.5 text-xs font-bold text-[var(--gold)]"><MapPin className="h-3.5 w-3.5" /> {hotel.location}</span><h2 className="mt-2 text-xl font-bold">{hotel.name}</h2><WhatsAppButton message={`السلام عليكم، أرغب في الاستفسار عن الإقامة في ${hotel.name} ضمن رحلة من الرياض لدى مقصد الحرمين.`} className="mt-4 border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]">اسأل عن الإقامة</WhatsAppButton></div></article>)}
        </div>
      </section>
      <ContactBand title="اكتب لنا تاريخ الرحلة والوجهة، وسنوضح لك الفندق المتاح ضمن البرنامج." />
    </PageFrame>
  );
}

export function ContactPage() {
  const path = "/contact";
  return (
    <PageFrame>
      <Seo
        path={path}
        title="تواصل وحجز عمرة من الرياض | مقصد الحرمين"
        description="تواصل مع مقصد الحرمين للاستفسار عن رحلات العمرة من الرياض. أرسل الوجهة والمدة والموعد وعدد المسافرين لمعرفة التفاصيل المتاحة."
        schema={breadcrumbSchema([{ name: "الرئيسية", path: "/" }, { name: "تواصل", path }])}
      />
      <section className="page-container grid gap-8 py-12 md:grid-cols-12 md:py-18 lg:py-24">
        <div className="md:col-span-6 lg:col-span-5"><SectionIntro eyebrow="استفسار وحجز" title="تواصل لحجز عمرة من الرياض" copy="لا تحتاج إلى نموذج طويل. أرسل لنا الوجهة والمدة والموعد وعدد المسافرين، ونوضح لك الخيارات المتاحة قبل الحجز." as="h1" /><WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="mt-8 bg-[var(--ink)] text-white hover:bg-[var(--olive)]">ابدأ المحادثة عبر واتساب</WhatsAppButton></div>
        <div className="overflow-hidden rounded-[1.75rem] bg-[var(--ink)] p-7 text-white md:col-span-6 lg:col-span-7 sm:p-10"><span className="eyebrow !text-[var(--gold-wash)]">معلومات تساعدنا على الإجابة</span><ol className="mt-6 space-y-4">{["هل رحلتك للعمرة أم الزيارة؟", "هل تفضّل مكة المكرمة أم مكة والمدينة؟", "هل تناسبك مدة 3 أو 5 أو 7 أيام؟", "ما موعد السفر المتوقع وكم عدد المسافرين؟"].map((item, index) => <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/15 pb-4 last:border-0"><span className="font-bold text-[var(--gold-wash)]">0{index + 1}</span><span className="text-sm leading-7 text-white/85">{item}</span></li>)}</ol></div>
      </section>
      <section className="section-shell bg-white"><div className="page-container grid gap-5 md:grid-cols-2"><a href={CONTACT.whatsappUrl()} target="_blank" rel="noopener noreferrer" className="group flex min-h-48 flex-col justify-between border-t-2 border-[var(--gold)] bg-[var(--paper)] p-6 transition hover:bg-[var(--paper-deep)]"><span className="text-sm font-bold text-[var(--gold)]">واتساب</span><div><h2 className="text-2xl font-bold">تواصل برسالة مباشرة</h2><p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">أرسل التفاصيل الأساسية، وسنرد عليك بما هو متاح.</p></div><ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" /></a><a href={`tel:+966${CONTACT.phones[0].slice(1)}`} className="group flex min-h-48 flex-col justify-between border-t-2 border-[var(--gold)] bg-[var(--paper)] p-6 transition hover:bg-[var(--paper-deep)]"><span className="text-sm font-bold text-[var(--gold)]">اتصال</span><div><h2 className="text-2xl font-bold" dir="ltr">{CONTACT.phones[0]}</h2><p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">للاستفسار المباشر عن رحلات العمرة من الرياض.</p></div><Phone className="h-5 w-5" /></a></div></section>
      <section className="section-shell page-container"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><SectionIntro eyebrow="إجابات سريعة" title="أسئلة قد تساعد قبل التواصل" /></div><div className="divide-y divide-[var(--line)] border-y border-[var(--line)] lg:col-span-8">{FAQS.slice(0, 4).map((faq) => <article key={faq.question} className="py-5"><h2 className="text-sm font-bold">{faq.question}</h2><p className="mt-2 text-sm leading-8 text-[var(--ink-soft)]">{faq.answer}</p></article>)}</div></div></section>
    </PageFrame>
  );
}

export function NotFoundLink() {
  return <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)] underline underline-offset-4"><Route className="h-4 w-4" /> العودة إلى الرئيسية</Link>;
}
