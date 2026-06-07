import React from "react";
import type { LucideIcon } from "lucide-react";
import { Brain, CircleCheck, PenLine, ShieldCheck } from "lucide-react";

import heroImage from "../../assets/images/hero-therapist.png";
import imageMobile from "../../assets/images/hero-therapist.png";

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageMobile: string;
};

export type StatItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const slides: HeroSlide[] = [
  {
    eyebrow: "روان‌درمانی علمی، انسانی و مؤثر",
    title: "اینجا احساس امنیت می‌کنید",
    description:
      "کمک به درمان اضطراب، تروما، PTSD، فرسودگی شغلی و چالش‌های فردی با رویکردی علمی، تخصصی و انسانی",
    image: heroImage,
    imageMobile,
  },
];

export const stats: StatItem[] = [
  { title: "بیش از ۱۰ سال", text: "تجربه حرفه‌ای", icon: ShieldCheck },
  { title: "روانشناس حوزه", text: "PTSD و تروما", icon: Brain },
  { title: "نویسنده و", text: "مدرس", icon: PenLine },
  { title: "درمان مبتنی بر", text: "شواهد علمی", icon: CircleCheck },
];