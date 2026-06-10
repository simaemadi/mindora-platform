import type { LucideIcon } from "lucide-react";
import {
  Award,
  FileText,
  Handshake,
  UsersRound,
} from "lucide-react";

export type StatItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export type TestimonialItem = {
  text: string;
  name: string;
  role: string;
};

export const stats: StatItem[] = [
  {
    value: "1000+",
    label: "ساعت درمان موفق",
    icon: UsersRound,
  },
  {
    value: "20+",
    label: "مقاله و فعالیت علمی",
    icon: FileText,
  },
  {
    value: "10+",
    label: "سال تجربه تخصصی",
    icon: Award,
  },
  {
    value: "رضایت بالا",
    label: "از مراجعان",
    icon: Handshake,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    text: "جلسات خانم دکتر به من کمک کرد تا اضطراب شدیدم کمتر کنم و دوباره آرامش را تجربه کنم. رویکرد علمی و در عین حال همدلانه ایشان بی‌نظیر است.",
    name: "الهام ک",
    role: "مدیر پروژه",
  },
  {
    text: "بعد از جلسات درمان، رابطه‌ام با فرزندم خیلی بهتر شد. احساس می‌کنم ابزارهای واقعی برای والدگری آگاهانه یاد گرفتم.",
    name: "مهران م",
    role: "مادر دو فرزند",
  },
  {
    text: "خانم دکتر دانش و تجربه بالا در مسیر درمان من را مشخص کرد. جلسات منظم و پیگیری ایشان باعث بهبود قابل توجه در زندگی‌ام شد.",
    name: "رضا ف",
    role: "مدیر عامل",
  },
];