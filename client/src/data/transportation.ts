import { ASSETS } from "@/lib/brand";

export const TRANSPORT_GALLERY = [
  { image: ASSETS.bus1, alt: "حافلة ضمن رحلات مقصد الحرمين من الرياض" },
  { image: ASSETS.bus2, alt: "مقاعد حافلة ضمن رحلات مقصد الحرمين" },
  { image: ASSETS.bus3, alt: "حافلة حديثة لرحلات العمرة من الرياض" },
  { image: ASSETS.bus4, alt: "صورة من داخل حافلة رحلات مقصد الحرمين" },
  { image: ASSETS.bus6, alt: "حافلة ضمن أسطول رحلات مقصد الحرمين" },
] as const;

export const TRANSPORT_DETAILS = [
  { label: "الانطلاق", value: "من الرياض" },
  { label: "وسيلة التنقل", value: "حافلات حديثة" },
  { label: "التنظيم", value: "تأكيد التفاصيل قبل الرحلة" },
] as const;
