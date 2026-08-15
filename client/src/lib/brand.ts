import img_maqsad_hero_makkah_72ae596d from "@/assets/maqsad-hero-makkah_72ae596d.jpg";
import img_maqsad_madinah_editorial_ec93b473 from "@/assets/maqsad-madinah-editorial_ec93b473.jpg";
import img_maqsad_final_cta_bec48089 from "@/assets/maqsad-final-cta_bec48089.jpg";
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
import img_muna_concord_aziziyah from "@/assets/muna-concord-aziziyah.webp";

/**
 * مقصد الحرمين — ثوابت الهوية والتواصل
 */

export const WHATSAPP_NUMBERS = {
  primary: "966541739626",
  secondary: "966562279674",
};

export const PHONE_DISPLAY = {
  primary: "0541739626",
  secondary: "0562279674",
};

export const WHATSAPP_MESSAGE =
  "السلام عليكم، أرغب في الاستفسار عن برامج العمرة المتاحة لدى مقصد الحرمين.";

export function waLink(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBERS.primary}?text=${msg}`;
}

// روابط الصور المباشرة من GitHub لضمان ظهورها 100%
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/abumalk8791-lang/maqsad-alharamain/main/client/public/assets/final_images";

export const ASSETS = {
  heroMakkah: img_maqsad_hero_makkah_72ae596d,
  logo: "/maqsad-logo_2fe7c87d.png",
  madinahEditorial: img_maqsad_madinah_editorial_ec93b473,
  finalCta: img_maqsad_final_cta_bec48089,
  pattern: "/maqsad-pattern_75e03940.png",
  
  // صور الفنادق النهائية (روابط مباشرة)
  hotel1: `${GITHUB_RAW_BASE}/h1.jpg`,
  hotel2: `${GITHUB_RAW_BASE}/h2.jpg`,
  hotel3: `${GITHUB_RAW_BASE}/h3.jpg`,
  hotel4: img_muna_concord_aziziyah,
  
  // صور الباصات النهائية (روابط مباشرة)
  bus1: `${GITHUB_RAW_BASE}/b1.webp`,
  bus2: `${GITHUB_RAW_BASE}/b2.webp`,
  bus3: `${GITHUB_RAW_BASE}/b3.webp`,
  bus4: `${GITHUB_RAW_BASE}/b4.webp`,
  bus5: `${GITHUB_RAW_BASE}/b4.webp`, // تكرار مؤقت لضمان عدم وجود روابط تالفة
  bus6: `${GITHUB_RAW_BASE}/b6.webp`,

  madinahNight: img_madinah_mosque_night_f5e3dd3e,
  madinahDay: img_madinah_mosque_day_97d84f40,
  makkahAerial: img_makkah_aerial_7bfa1b2c,
  makkahHotelExterior: img_makkah_hotel_exterior_2c025aed,
  makkahHotelTowers: img_makkah_hotel_towers_haram_0cb11e78,
  makkahEconomyHotel: img_makkah_economy_hotel_3e7e7ed8,
  makkahClockTower: img_makkah_hotel_exterior_2c025aed, // إضافة بديلة للصورة المفقودة
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
