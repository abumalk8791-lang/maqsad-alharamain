/**
 * الأسئلة الشائعة: محتوى متوافق مع FAQ Schema وعمرة برية من الرياض
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
    q: "من أين تنطلق رحلاتنا؟",
    a: "جميع رحلاتنا البرية تنطلق من نقاط تجمع مريحة في مدينة الرياض، ثم تتجه إلى مكة المكرمة أو المدينة المنورة بحسب البرنامج المختار.",
  },
  {
    q: "هل برامجكم تناسب العائلات؟",
    a: "بكل تأكيد، نحن نركز على توفير أقصى درجات الراحة العائلية في السكن والتنقل، مع خيارات إقامة تهتم بالخصوصية وبيئة مريحة لجميع أفراد العائلة.",
  },
  {
    q: "هل توفرون حجوزات طيران؟",
    a: "تخصصنا الدقيق يقتصر على توفير أفضل تجربة في النقل البري عبر الحافلات الحديثة والإقامة الفندقية، لضمان جودة الخدمة وراحة العائلة طوال الرحلة.",
  },
  {
    q: "كيف أختار بين البرنامج الاقتصادي وبرنامج VIP؟",
    a: "يمكنك اختيار البرنامج الاقتصادي إذا كنت تبحث عن توازن مناسب بين القيمة وراحة العائلة، أو برنامج VIP إذا كانت أولويتك الإقامة الأقرب للحرم وخصوصية وراحة أعلى. فريقنا يوضح لك التفاصيل عبر واتساب.",
  },
  {
    q: "كيف يتم الحجز؟",
    a: "اختر البرنامج المناسب ثم تواصل معنا عبر واتساب. نراجع معك الموعد والتفاصيل والسعر النهائي، وبعدها يتم تأكيد الحجز مباشرة.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-sand-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <span className="deco-ring float-slow w-56 h-56 top-16 -left-24 hidden lg:block" />
      <div className="container max-w-3xl relative">
        <SectionHeading kicker="إجابات واضحة قبل الحجز" title="الأسئلة الشائعة" subtitle="كل ما تحتاج العائلة لمعرفته عن رحلات العمرة البرية من الرياض." center />

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
