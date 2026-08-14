import { PHONE_DISPLAY, WHATSAPP_NUMBERS, waLink } from "@/lib/brand";

export const CONTACT = {
  brandName: "مقصد الحرمين للعمرة والزيارة",
  shortName: "مقصد الحرمين",
  englishName: "MAQSAD ALHARAMAIN",
  departureCity: "الرياض",
  phones: [PHONE_DISPLAY.primary, PHONE_DISPLAY.secondary],
  whatsappNumber: WHATSAPP_NUMBERS.primary,
  whatsappUrl: (message?: string) => waLink(message),
  defaultWhatsappMessage: "السلام عليكم، أرغب في معرفة تفاصيل رحلات العمرة المتاحة من الرياض لدى مقصد الحرمين.",
} as const;
