import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Menu, Phone, X } from "lucide-react";
import { CONTACT } from "@/data/contact";
import { ASSETS } from "@/lib/brand";

export const PAGE_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/umrah-from-riyadh", label: "العمرة من الرياض" },
  { href: "/umrah-packages", label: "الباقات" },
  { href: "/makkah-and-madinah", label: "مكة والمدينة" },
  { href: "/hotels", label: "الفنادق" },
  { href: "/contact", label: "تواصل" },
] as const;

export function WhatsAppButton({
  children,
  message,
  className = "",
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={CONTACT.whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 ease-out active:scale-[.97] ${className}`}
    >
      {children}
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  as = "h2",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  as?: "h1" | "h2";
}) {
  const Heading = as;

  return (
    <div className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <Heading className={`${as === "h1" ? "page-title" : "section-title"} mt-4`}>{title}</Heading>
      {copy && <p className="section-copy mt-5">{copy}</p>}
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgba(248,246,240,.96)] backdrop-blur">
      <div className="page-container flex min-h-[4.8rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="مقصد الحرمين — الرئيسية">
          <img src={ASSETS.logo} alt="شعار مقصد الحرمين للعمرة والزيارة" className="h-11 w-11 object-contain" />
          <span className="leading-tight">
            <strong className="block text-base">مقصد الحرمين</strong>
            <span className="block text-[.6rem] tracking-[.2em] text-[var(--gold)]">MAQSAD ALHARAMAIN</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="التنقل الرئيسي">
          {PAGE_LINKS.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="bg-[var(--ink)] text-white hover:bg-[var(--olive)]">
            اسأل عن الباقات
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--paper)] xl:hidden">
          <nav className="page-container flex flex-col py-3" aria-label="قائمة الهاتف">
            {PAGE_LINKS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-[var(--line)] py-3 text-sm font-semibold">
                {item.label}
              </Link>
            ))}
            <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="mt-4 bg-[var(--ink)] text-white">
              تواصل عبر واتساب
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#10261f] py-10 text-white/70">
      <div className="page-container grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="شعار مقصد الحرمين للعمرة والزيارة" className="h-12 w-12 object-contain" />
            <div>
              <strong className="block text-white">مقصد الحرمين</strong>
              <span className="text-[.6rem] tracking-[.18em] text-[var(--gold-wash)]">MAQSAD ALHARAMAIN</span>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7">رحلات عمرة من الرياض بخيارات للإقامة والنقل، مع تفاصيل واضحة قبل الحجز.</p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm md:col-span-3" aria-label="روابط التذييل">
          {PAGE_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 text-sm md:col-span-4">
          <p className="font-bold text-white">تواصل معنا</p>
          <a className="block transition-colors hover:text-white" dir="ltr" href={`tel:+966${CONTACT.phones[0].slice(1)}`}>{CONTACT.phones[0]}</a>
          <a className="block transition-colors hover:text-white" dir="ltr" href={`tel:+966${CONTACT.phones[1].slice(1)}`}>{CONTACT.phones[1]}</a>
          <a className="inline-flex items-center gap-2 text-[var(--gold-wash)] transition-colors hover:text-white" href={CONTACT.whatsappUrl()} target="_blank" rel="noopener noreferrer">
            واتساب <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="page-container mt-8 border-t border-white/10 pt-5 text-xs text-white/45">© 2026 مقصد الحرمين. جميع الحقوق محفوظة.</div>
    </footer>
  );
}

export function ContactBand({ title = "أرسل موعد السفر وعدد الأشخاص، ونوضح لك الخيارات المتاحة." }: { title?: string }) {
  return (
    <section className="bg-[var(--ink)] py-12 text-white sm:py-16">
      <div className="page-container grid gap-7 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <span className="eyebrow !text-[var(--gold-wash)]">تواصل مباشر</span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-.04em] sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-8 text-white/70">نؤكد لك الموعد والسعر والفندق المتاح وتفاصيل التجمع قبل الحجز.</p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5">
          <WhatsAppButton message={CONTACT.defaultWhatsappMessage} className="bg-[var(--gold-wash)] text-[var(--ink)] hover:bg-white">تواصل معنا عبر واتساب</WhatsAppButton>
          <a href={`tel:+966${CONTACT.phones[0].slice(1)}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 active:scale-[.97]"><Phone className="h-4 w-4" /> {CONTACT.phones[0]}</a>
        </div>
      </div>
    </section>
  );
}
