/**
 * مقصد الحرمين — ثوابت الهوية والتواصل
 * Design: Royal Serenity — Deep Emerald + Champagne Gold + Warm Ivory
 */

export const WHATSAPP_NUMBERS = {
  primary: "966545247616",
  secondary: "966562279674",
};

export const PHONE_DISPLAY = {
  primary: "0545247616",
  secondary: "0562279674",
};

export const WHATSAPP_MESSAGE =
  "السلام عليكم، أرغب في الاستفسار عن برامج العمرة المتاحة لدى مقصد الحرمين.";

export function waLink(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBERS.primary}?text=${msg}`;
}

export const ASSETS = {
  heroMakkah: "/manus-storage/maqsad-hero-makkah_72ae596d.jpg",
  logo: "/manus-storage/maqsad-logo_2fe7c87d.png",
  madinahEditorial: "/manus-storage/maqsad-madinah-editorial_ec93b473.jpg",
  finalCta: "/manus-storage/maqsad-final-cta_bec48089.jpg",
  pattern: "/manus-storage/maqsad-pattern_75e03940.png",
  hotelRoomHaramView: "/manus-storage/hotel-room-haram-view_f1808d7d.jpg",
  hotelLobbyLuxury: "/manus-storage/hotel-lobby-luxury_443a5f02.jpg",
  hotelLobbyArch: "/manus-storage/hotel-lobby-arch_18932f4e.jpg",
  madinahHotelView: "/manus-storage/madinah-hotel-view_1b3ba901.jpg",
  busExterior: "/manus-storage/bus-exterior-luxury_6f632f97.jpg",
  busVipInterior: "/manus-storage/bus-vip-interior_9626d2c1.jpg",
  busSeats: "/manus-storage/bus-seats-interior_24480a52.jpg",
  busVipSeats: "/manus-storage/bus-vip-seats_e353a608.jpg",
  makkahClockTower: "/manus-storage/makkah-clocktower-kaaba_5ce8b89e.jpg",
  madinahNight: "/manus-storage/madinah-mosque-night_f5e3dd3e.jpg",
  madinahDay: "/manus-storage/madinah-mosque-day_97d84f40.jpg",
  makkahAerial: "/manus-storage/makkah-aerial_7bfa1b2c.jpg",
};

export const NAV_LINKS = [
  { id: "hero", label: "الرئيسية" },
  { id: "programs", label: "البرامج" },
  { id: "hotels", label: "الفنادق" },
  { id: "transport", label: "النقل" },
  { id: "why-us", label: "لماذا نحن" },
  { id: "booking", label: "طريقة الحجز" },
  { id: "contact", label: "تواصل معنا" },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

