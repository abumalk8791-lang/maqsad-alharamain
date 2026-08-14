import img_maqsad_hero_makkah from "@/assets/maqsad-hero-makkah_72ae596d.jpg";
import img_maqsad_madinah_editorial from "@/assets/maqsad-madinah-editorial_ec93b473.jpg";
import img_maqsad_final_cta from "@/assets/maqsad-final-cta_bec48089.jpg";
import img_madinah_mosque_night from "@/assets/madinah-mosque-night_f5e3dd3e.jpg";
import img_madinah_mosque_day from "@/assets/madinah-mosque-day_97d84f40.jpg";
import img_makkah_aerial from "@/assets/makkah-aerial_7bfa1b2c.jpg";
import img_makkah_hotel_exterior from "@/assets/makkah-hotel-exterior_2c025aed.jpg";
import img_makkah_hotel_towers from "@/assets/makkah-hotel-towers-haram_0cb11e78.jpg";
import img_makkah_economy_hotel from "@/assets/makkah-economy-hotel_3e7e7ed8.jpg";
import hotel1 from "@/assets/real/h1.jpg";
import hotel2 from "@/assets/real/h2.jpg";
import hotel3 from "@/assets/real/h3.jpg";
import bus1 from "@/assets/real/b1.webp";
import bus2 from "@/assets/real/b2.webp";
import bus3 from "@/assets/real/b3.webp";
import bus4 from "@/assets/real/b4.webp";
import bus5 from "@/assets/real/b5.webp";
import bus6 from "@/assets/real/b6.webp";

export const WHATSAPP_NUMBERS = {
  primary: "966541739626",
  secondary: "966562279674",
};

export const PHONE_DISPLAY = {
  primary: "0541739626",
  secondary: "0562279674",
};

export const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في الاستفسار عن رحلات العمرة المتاحة من الرياض لدى مقصد الحرمين.";

export function waLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBERS.primary}?text=${message}`;
}

export const ASSETS = {
  heroMakkah: img_maqsad_hero_makkah,
  logo: "/maqsad-logo_2fe7c87d.png",
  madinahEditorial: img_maqsad_madinah_editorial,
  finalCta: img_maqsad_final_cta,
  pattern: "/maqsad-pattern_75e03940.png",
  hotel1,
  hotel2,
  hotel3,
  bus1,
  bus2,
  bus3,
  bus4,
  bus5,
  bus6,
  madinahNight: img_madinah_mosque_night,
  madinahDay: img_madinah_mosque_day,
  makkahAerial: img_makkah_aerial,
  makkahHotelExterior: img_makkah_hotel_exterior,
  makkahHotelTowers: img_makkah_hotel_towers,
  makkahEconomyHotel: img_makkah_economy_hotel,
};

export const NAV_LINKS = [
  { id: "home", label: "الرئيسية" },
  { id: "trips", label: "الرحلات" },
  { id: "packages", label: "الباقات" },
  { id: "hotels", label: "الفنادق" },
  { id: "about", label: "من نحن" },
  { id: "faq", label: "الأسئلة الشائعة" },
  { id: "contact", label: "تواصل معنا" },
] as const;

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
