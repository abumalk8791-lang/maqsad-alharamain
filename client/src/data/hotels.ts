import { ASSETS } from "@/lib/brand";

export const HOTELS = [
  {
    id: "diyafat-alraja",
    name: "فندق ضيافة الرجاء",
    location: "إبراهيم الخليل، مكة المكرمة",
    image: ASSETS.hotel1,
    alt: "فندق ضيافة الرجاء في مكة المكرمة",
  },
  {
    id: "palestine",
    name: "فندق فلسطين",
    location: "شارع إبراهيم الخليل، مكة المكرمة",
    image: ASSETS.hotel2,
    alt: "فندق فلسطين في مكة المكرمة",
  },
  {
    id: "makkah-millennium",
    name: "فندق مكة ميلينيوم",
    location: "أبراج البيت، مكة المكرمة",
    image: ASSETS.hotel3,
    alt: "فندق مكة ميلينيوم في أبراج البيت بمكة المكرمة",
  },
] as const;
