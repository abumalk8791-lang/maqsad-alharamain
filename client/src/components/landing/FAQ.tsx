/**
 * الأسئلة الشائعة: محتوى متوافق مع FAQ Schema لبرامج العمرة من الرياض
 */
import { ASSETS } from "@/lib/brand";
import SectionHeading from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "من أين تنطلق رحلات العمرة؟",
    a: "تنطلق الرحلات من الرياض. نؤكد نقطة التجمع والوجهة ووقت الانطلاق بعد مراجعة البرنامج المتاح معك.",
  },
  {
    q: "ما مدد الرحلات المتاحة؟",
    a: "تتوفر برامج بمدد 3 أو 5 أو 7 أيام بحسب الموعد والوجهة. تواصل معنا لنعرض عليك ما هو متاح حالياً.",
  },
  {
    q: "ماذا يشمل برنامج العمرة؟",
    a: "يشمل البرنامج النقل بالحافلات والإقامة الفندقية وفق التفاصيل المتاحة. نوضح لك ما يشمله برنامجك قبل تأكيد الحجز.",
  },
  {
    q: "كيف أعرف الفندق المتاح؟",
    a: "نعرض أسماء الفنادق ضمن برامجنا، ثم نؤكد الفندق المتاح بحسب الموعد والباقة التي تختارها عند التواصل.",
  },
  {
    q: "كيف يتم الحجز؟",
    a: "أرسل لنا المدة والوجهة وعدد المسافرين عبر واتساب. نراجع الموعد والسكن والنقل والسعر المتاحين، ثم نؤكد الحجز بعد الاتفاق.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-sand-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <span className="deco-ring float-slow w-56 h-56 top-16 -left-24 hidden lg:block" />
      <div className="container max-w-3xl relative">
        <SectionHeading kicker="إجابات عملية قبل الحجز" title="الأسئلة الشائعة" subtitle="تعرف على المدة والوجهة والباقات والفندق المتاح وخطوات الحجز من الرياض." center />

        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="rounded-2xl border border-[var(--sand)] bg-white px-6 shadow-[0_4px_16px_rgba(11,61,46,0.04)] data-[state=open]:border-[var(--gold)]/50"
              >
                <AccordionTrigger className="text-right text-base md:text-lg font-semibold text-[var(--emerald-deep)] hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--charcoal)]/70 leading-loose pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
