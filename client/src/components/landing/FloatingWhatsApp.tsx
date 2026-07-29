/** زر واتساب عائم — ظاهر دائمًا خصوصًا على الهاتف */
import { waLink } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--emerald-deep)] text-[#25D366] border border-[var(--gold)]/50 shadow-[0_8px_24px_rgba(11,61,46,0.45)] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
