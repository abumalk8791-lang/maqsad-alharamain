/**
 * Royal Serenity — Floating Premium Booking Card بعد الـHero
 * واجهة تفاعلية تجهّز رسالة واتساب — بدون backend
 */
import { useState } from "react";
import { Search } from "lucide-react";
import { waLink } from "@/lib/brand";

export default function QuickBooking() {
  const [to, setTo] = useState("مكة المكرمة");
  const [type, setType] = useState("عمرة");
  const [date, setDate] = useState("");

  /** يعرض التاريخ بصيغة YYYY/MM/DD */
  const formatDate = (iso: string) => (iso ? iso.replaceAll("-", "/") : "");

  const submit = () => {
    const msg = `السلام عليكم، أرغب في الاستفسار عن رحلة ${type} من الرياض إلى ${to}${
      date ? ` بتاريخ ${formatDate(date)}` : ""
    } لدى مقصد الحرمين.`;
    window.open(waLink(msg), "_blank");
  };

  const selectCls =
    "w-full bg-transparent border-0 border-b border-[var(--sand)] focus:border-[var(--gold)] focus:ring-0 focus:outline-none py-2 text-[var(--charcoal)] font-medium text-base";

  return (
    <section id="quick-booking" className="relative z-20 -mt-24 pb-4">
      <div className="container">
        <div className="reveal max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_24px_64px_rgba(11,61,46,0.18)] border border-[var(--sand)] p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em]">استفسر عن برنامجك</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            <div>
              <label className="block text-xs text-[var(--charcoal)]/60 mb-1 font-medium">من</label>
              <div className={`${selectCls} cursor-default`}>الرياض</div>
            </div>
            <div>
              <label htmlFor="qb-to" className="block text-xs text-[var(--charcoal)]/60 mb-1 font-medium">إلى</label>
              <select id="qb-to" value={to} onChange={(e) => setTo(e.target.value)} className={selectCls}>
                <option value="مكة المكرمة">مكة المكرمة</option>
                <option value="مكة والمدينة">مكة والمدينة</option>
                <option value="المدينة المنورة">المدينة المنورة</option>
              </select>
            </div>
            <div>
              <label htmlFor="qb-type" className="block text-xs text-[var(--charcoal)]/60 mb-1 font-medium">نوع الرحلة</label>
              <select id="qb-type" value={type} onChange={(e) => setType(e.target.value)} className={selectCls}>
                <option value="عمرة">عمرة</option>
                <option value="زيارة">زيارة</option>
              </select>
            </div>
            <div>
              <label htmlFor="qb-date" className="block text-xs text-[var(--charcoal)]/60 mb-1 font-medium">الموعد المفضل</label>
              <div className="relative">
                <input
                  id="qb-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${selectCls} [&::-webkit-datetime-edit]:opacity-0 absolute inset-0 z-10`}
                  aria-label="اختر الموعد المفضل للرحلة"
                />
                <div className={`${selectCls} pointer-events-none min-h-[2.6rem] flex items-center`} dir="ltr">
                  <span className={date ? "text-[var(--charcoal)]" : "text-[var(--charcoal)]/40"}>
                    {date ? formatDate(date) : "YYYY/MM/DD"}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={submit}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[var(--emerald-deep)] text-[var(--ivory)] font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              <Search className="w-4 h-4" />
              اسأل عن المتاح
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
