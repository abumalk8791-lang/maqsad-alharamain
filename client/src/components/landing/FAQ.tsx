/**
 * Royal Serenity — الأسئلة الشائعة: Accordion أنيقة
 */
import SectionHeading from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PHONE_DISPLAY } from "@/lib/brand";

const FAQS = [
  {
    q: "هل الرحلات متاحة من الرياض؟",
    a: "نعم، برامجنا تنطلق من الرياض إلى مكة المكرمة والمدينة المنورة. تواصل معنا عبر واتساب لمعرفة أقرب موعد انطلاق متاح.",
  },
  {
    q: "ما البرامج المتاحة؟",
    a: "نوفر برامج عمرة وزيارة متنوعة تشمل الإقامة والنقل، بمدد وفئات مختلفة تناسب الأفراد والعائلات. تفاصيل كل برنامج ومواعيده تُؤكد عند التواصل.",
  },
  {
    q: "هل يوجد سكن في مكة والمدينة؟",
    a: "نعم، برامجنا تشمل إقامة مختارة بعناية في مكة المكرمة، مع خيار إضافة الإقامة في المدينة المنورة حسب البرنامج الذي تختاره.",
  },
  {
    q: "كيف يتم الحجز؟",
    a: "الحجز بسيط: اختر البرنامج المناسب، ثم تواصل معنا عبر واتساب لتحديد التفاصيل ومراجعة السعر، وبعدها يتم تأكيد حجزك مباشرة.",
  },
  {
    q: "كيف أتواصل معكم؟",
    a: `يمكنك التواصل معنا مباشرة عبر واتساب أو الاتصال على الرقمين: ${PHONE_DISPLAY.primary} أو ${PHONE_DISPLAY.secondary} — فريقنا جاهز للرد على استفساراتك.`,
  },
  {
    q: "هل يمكن الحجز للعائلات؟",
    a: "بالتأكيد، نوفر خيارات إقامة عائلية خاصة، وبرامجنا مصممة لتناسب العائلات والأفراد على حد سواء.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-[var(--ivory)]">
      <div className="container max-w-3xl">
        <SectionHeading kicker="استفساراتك" title="الأسئلة الشائعة" center />

        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-[var(--sand)] bg-white px-6 shadow-[0_4px_16px_rgba(11,61,46,0.04)] data-[state=open]:border-[var(--gold)]/50"
              >
                <AccordionTrigger className="text-right text-base md:text-lg font-semibold text-[var(--emerald-deep)] hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--charcoal)]/70 leading-loose pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
