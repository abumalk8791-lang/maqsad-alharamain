export const TRIP_DURATIONS = [
  {
    days: "3 أيام",
    title: "رحلة قصيرة",
    description: "لمن يفضل برنامجاً مختصراً ويرغب في تأكيد تفاصيله قبل الحجز.",
  },
  {
    days: "5 أيام",
    title: "وقت أوسع للزيارة",
    description: "خيار يمنحك وقتاً إضافياً وفق البرنامج والوجهة المتاحة.",
  },
  {
    days: "7 أيام",
    title: "مدة أطول",
    description: "خيار مناسب لمن يفضل وقتاً أكثر خلال الرحلة.",
  },
] as const;

export const DESTINATIONS = ["مكة المكرمة", "مكة والمدينة", "المدينة المنورة"] as const;
export const TRIP_TYPES = ["عمرة", "زيارة"] as const;

export const TRIP_FACTS = [
  "رحلات يومية من الرياض",
  "مدد 3 أو 5 أو 7 أيام",
  "خيارات اقتصادية وVIP",
] as const;

export function tripInquiryMessage(details: { destination?: string; tripType?: string; date?: string; duration?: string }) {
  const parts = [
    "السلام عليكم، أرغب في الاستفسار عن رحلة",
    details.tripType ?? "عمرة",
    "من الرياض",
    details.destination ? `إلى ${details.destination}` : "",
    details.duration ? `لمدة ${details.duration}` : "",
    details.date ? `بتاريخ ${details.date}` : "",
    "لدى مقصد الحرمين.",
  ].filter(Boolean);

  return parts.join(" ");
}
