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
    q: "من أين تنطلق الرحلات؟",
    a: "تنطلق جميع رحلاتنا البرية من نقاط تجمع منظمة في مدينة الرياض، ثم تتجه إلى مكة المكرمة أو المدينة المنورة وفقاً للبرنامج المختار.",
  },
  {
    q: "هل البرامج مناسبة للعائلات؟",
    a: "نعم، نراعي راحة العائلة في السكن والتنقل. نختار إقامة توفر الخصوصية والهدوء، ونرتب النقل بما يساعد الجميع على الاستمتاع برحلة مريحة.",
  },
  {
    q: "ما الخدمات التي يشملها البرنامج؟",
    a: "يشمل البرنامج النقل البري بالحافلات الحديثة والإقامة الفندقية، مع توضيح تفاصيل الرحلة ومتابعتها من وقت التجمع في الرياض حتى العودة.",
  },
  {
    q: "كيف أختار بين البرنامج الاقتصادي وبرنامج VIP؟",
    a: "البرنامج الاقتصادي مناسب لمن يبحث عن قيمة جيدة ورحلة مريحة، أما برنامج VIP فيمنح العائلة مستوى أعلى من الخصوصية والراحة مع إقامة أقرب إلى الحرم. ويمكن لفريقنا توضيح الفروق والمواعيد عبر واتساب.",
  },
  {
    q: "كيف يتم الحجز؟",
    a: "اختر البرنامج الذي يناسبك، ثم تواصل معنا عبر واتساب. نراجع معك الموعد وعدد المسافرين والتفاصيل والسعر النهائي، ثم نؤكد الحجز بعد الاتفاق.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-sand-rich section-gold-edge overflow-hidden">
      <div className="pattern-drift" style={{ backgroundImage: `url(${ASSETS.pattern})` }} />
      <span className="deco-ring float-slow w-56 h-56 top-16 -left-24 hidden lg:block" />
      <div className="container max-w-3xl relative">
        <SectionHeading kicker="إجابات واضحة قبل الحجز" title="الأسئلة الشائعة" subtitle="إجابات مختصرة عن رحلات العمرة البرية من الرياض، حتى تبدأ رحلتك وأنت مطمئن." center />

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
