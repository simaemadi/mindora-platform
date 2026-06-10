
import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  BriefcaseBusiness,
  CheckSquare,
  CloudRain,
  GraduationCap,
  HandHeart,
  Headphones,
  HeartHandshake,
  Sprout,
  UsersRound,
} from "lucide-react";


export type HelpArea = {
  title: string;
  icon: LucideIcon;
};

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const supportData = {
helpAreas:
  [{
    title: "اضطراب و استرس",
    icon: Brain,
  },
  {
    title: "افسردگی",
    icon: CloudRain,
  },
  {
    title: "رشد فردی و اعتماد به نفس",
    icon: Sprout,
  },
  {
    title: "والدگری و تربیت فرزند",
    icon: UsersRound,
  },
  {
    title: "فرسودگی شغلی مدیران",
    icon: BriefcaseBusiness,
  },
  {
    title: "PTSD و تروما",
    icon: Headphones,
  },
] as HelpArea[],

whyItems: [
  {
    title: "برنامه درمانی شخصی‌سازی شده",
    description:
      "هر فرد دنیای منحصر‌به‌فردی دارد. ما با هم مسیر مناسب با شما را طراحی می‌کنیم.",
    icon: CheckSquare,
  },
  {
    title: "همدلی و احترام",
    description:
      "فضایی امن، بدون قضاوت و مبتنی بر احترام متقابل برای شنیده‌شدن و بهبود واقعی شما.",
    icon: HeartHandshake,
  },
  {
    title: "تخصص علمی",
    description:
      "استفاده از روش‌های درمانی مطرح و مبتنی بر شواهد علمی روز دنیا برای اثربخشی بیشتر.",
    icon: GraduationCap,
  },
] as WhyItem[],
}