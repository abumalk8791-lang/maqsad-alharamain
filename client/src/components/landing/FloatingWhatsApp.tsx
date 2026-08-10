/** أزرار عائمة: اتصال هاتفي فوق زر الواتساب — ظاهرة دائمًا خصوصًا على الهاتف */
import { waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";
import { Phone } from "lucide-react";

const PHONE_DISPLAY = "0541739626";
const PHONE_TEL = "+966541739626";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {/* زر الاتصال — فوق الواتساب */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`اتصل بنا على ${PHONE_DISPLAY}`}
        className="group flex items-center gap-0 rounded-full bg-[var(--gold)] text-[var(--emerald-deep)] border border-[var(--gold)]/60 shadow-[0_8px_24px_rgba(11,61,46,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
      >
        <span className="flex items-center justify-center w-14 h-14 shrink-0">
          <Phone className="w-6 h-6" />
        </span>
        <span
          dir="ltr"
          className="max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100 group-hover:pe-4 group-focus:max-w-40 group-focus:opacity-100 group-focus:pe-4 transition-all duration-300 whitespace-nowrap text-sm font-bold tracking-wider"
        >
          {PHONE_DISPLAY}
        </span>
      </a>

      {/* زر الواتساب */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="wa-pulse flex items-center justify-center w-14 h-14 rounded-full bg-[var(--emerald-deep)] text-[#25D366] border border-[var(--gold)]/50 shadow-[0_8px_24px_rgba(11,61,46,0.45)] transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
