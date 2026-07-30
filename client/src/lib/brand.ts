import img_maqsad_hero_makkah_72ae596d from "@/assets/maqsad-hero-makkah_72ae596d.jpg";
import img_maqsad_madinah_editorial_ec93b473 from "@/assets/maqsad-madinah-editorial_ec93b473.jpg";
import img_maqsad_final_cta_bec48089 from "@/assets/maqsad-final-cta_bec48089.jpg";
import img_hotel_room_haram_view_f1808d7d from "@/assets/hotel-room-haram-view_f1808d7d.jpg";
import img_hotel_lobby_luxury_443a5f02 from "@/assets/hotel-lobby-luxury_443a5f02.jpg";
import img_hotel_lobby_arch_18932f4e from "@/assets/hotel-lobby-arch_18932f4e.jpg";
import img_madinah_hotel_view_1b3ba901 from "@/assets/madinah-hotel-view_1b3ba901.jpg";
import img_bus_exterior_luxury_6f632f97 from "@/assets/bus-exterior-luxury_6f632f97.jpg";
import img_bus_vip_interior_9626d2c1 from "@/assets/bus-vip-interior_9626d2c1.jpg";
import img_bus_seats_interior_24480a52 from "@/assets/bus-seats-interior_24480a52.jpg";
import img_bus_vip_seats_e353a608 from "@/assets/bus-vip-seats_e353a608.jpg";
import img_makkah_clocktower_kaaba_5ce8b89e from "@/assets/makkah-clocktower-kaaba_5ce8b89e.jpg";
import img_madinah_mosque_night_f5e3dd3e from "@/assets/madinah-mosque-night_f5e3dd3e.jpg";
import img_madinah_mosque_day_97d84f40 from "@/assets/madinah-mosque-day_97d84f40.jpg";
import img_makkah_aerial_7bfa1b2c from "@/assets/makkah-aerial_7bfa1b2c.jpg";
import img_makkah_hotel_exterior_2c025aed from "@/assets/makkah-hotel-exterior_2c025aed.jpg";
import img_makkah_hotel_towers_haram_0cb11e78 from "@/assets/makkah-hotel-towers-haram_0cb11e78.jpg";
import img_makkah_economy_hotel_3e7e7ed8 from "@/assets/makkah-economy-hotel_3e7e7ed8.jpg";
import img_luxury_hotel_01_e265f059 from "@/assets/luxury-hotel-01_e265f059.webp";
import img_luxury_hotel_02_254646b5 from "@/assets/luxury-hotel-02_254646b5.webp";
import img_luxury_hotel_03_2d9697b1 from "@/assets/luxury-hotel-03_2d9697b1.webp";
import img_luxury_hotel_04_310cd203 from "@/assets/luxury-hotel-04_310cd203.webp";
import img_luxury_hotel_05_d29be0d9 from "@/assets/luxury-hotel-05_d29be0d9.webp";
import img_luxury_hotel_06_aa5cb0b5 from "@/assets/luxury-hotel-06_aa5cb0b5.webp";
import img_luxury_hotel_07_518a047d from "@/assets/luxury-hotel-07_518a047d.webp";
import img_luxury_hotel_08_07314ab4 from "@/assets/luxury-hotel-08_07314ab4.webp";
import img_luxury_hotel_09_07b3e654 from "@/assets/luxury-hotel-09_07b3e654.webp";
import img_luxury_hotel_10_cce86749 from "@/assets/luxury-hotel-10_cce86749.webp";
import img_luxury_hotel_11_3c1bc745 from "@/assets/luxury-hotel-11_3c1bc745.webp";
import img_luxury_hotel_12_7c94ed3d from "@/assets/luxury-hotel-12_7c94ed3d.webp";
import img_luxury_hotel_13_9d10c713 from "@/assets/luxury-hotel-13_9d10c713.webp";

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
  heroMakkah: img_maqsad_hero_makkah_72ae596d,
  logo: "/maqsad-logo_2fe7c87d.png",
  madinahEditorial: img_maqsad_madinah_editorial_ec93b473,
  finalCta: img_maqsad_final_cta_bec48089,
  pattern: "/maqsad-pattern_75e03940.png",
  hotelRoomHaramView: img_hotel_room_haram_view_f1808d7d,
  hotelLobbyLuxury: img_hotel_lobby_luxury_443a5f02,
  hotelLobbyArch: img_hotel_lobby_arch_18932f4e,
  madinahHotelView: img_madinah_hotel_view_1b3ba901,
  busExterior: img_bus_exterior_luxury_6f632f97,
  busVipInterior: img_bus_vip_interior_9626d2c1,
  busSeats: img_bus_seats_interior_24480a52,
  busVipSeats: img_bus_vip_seats_e353a608,
  makkahClockTower: img_makkah_clocktower_kaaba_5ce8b89e,
  madinahNight: img_madinah_mosque_night_f5e3dd3e,
  madinahDay: img_madinah_mosque_day_97d84f40,
  makkahAerial: img_makkah_aerial_7bfa1b2c,
  makkahHotelExterior: img_makkah_hotel_exterior_2c025aed,
  makkahHotelTowers: img_makkah_hotel_towers_haram_0cb11e78,
  makkahEconomyHotel: img_makkah_economy_hotel_3e7e7ed8,
};

/** صور المستخدم لبطاقة "فنادق راقية قريبة من الحرم" — عرض تلقائي */
export const LUXURY_HOTEL_SLIDES = [
  img_luxury_hotel_01_e265f059,
  img_luxury_hotel_02_254646b5,
  img_luxury_hotel_03_2d9697b1,
  img_luxury_hotel_04_310cd203,
  img_luxury_hotel_05_d29be0d9,
  img_luxury_hotel_06_aa5cb0b5,
  img_luxury_hotel_07_518a047d,
  img_luxury_hotel_08_07314ab4,
  img_luxury_hotel_09_07b3e654,
  img_luxury_hotel_10_cce86749,
  img_luxury_hotel_11_3c1bc745,
  img_luxury_hotel_12_7c94ed3d,
  img_luxury_hotel_13_9d10c713,
];

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
