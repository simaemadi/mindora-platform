import {
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Award,
  HandHeart,
  Brain,
  Heart,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  MessageSquareText,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

type ValueItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type ApproachItem = {
  title: string;
  icon: LucideIcon;
};

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};

type EducationItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type StatItem = {
  number: string;
  text: string;
  icon: LucideIcon;
};

export const values: ValueItem[] = [
  {
    title: "رویکرد علمی و به‌روز",
    text: "استفاده از روش‌های معتبر و بر اساس شواهد علمی",
    icon: Leaf,
  },
  {
    title: "حفظ محرمانگی",
    text: "اطلاعات شما کاملاً محرمانه نگهداری می‌شود",
    icon: ShieldCheck,
  },
  {
    title: "همدلی و احترام",
    text: "با شنیدن بدون قضاوت در کنار شما خواهم بود",
    icon: HandHeart,
  },
  {
    title: "تخصص و تجربه",
    text: "سال‌ها تجربه بالینی در حوزه روان‌درمانی و مشاوره",
    icon: Award,
  },
  {
    title: "حمایت تا رسیدن به تغییر",
    text: "از اولین جلسه تا رسیدن به آرامش پایدار همراهتان هستم",
    icon: HeartHandshake,
  },
];

export const approaches: ApproachItem[] = [
  { title: "درمان شناختی رفتاری", icon: Brain },
  { title: "طرحواره درمانی", icon: Users },
  { title: "روان‌درمانی پویشی", icon: MessageSquareText },
  { title: "درمان مبتنی بر شفقت", icon: Heart },
];

export const timeline: TimelineItem[] = [
  {
    year: "۱۳۹۶",
    title: "دکتری روانشناسی بالینی",
    desc: "دانشگاه علوم پزشکی تهران",
  },
  {
    year: "۱۳۹۳",
    title: "کارشناسی ارشد روانشناسی بالینی",
    desc: "دانشگاه علامه طباطبایی",
  },
  {
    year: "۱۳۹۱",
    title: "کارشناسی روانشناسی",
    desc: "دانشگاه تهران",
  },
  {
    year: "۱۳۹۲",
    title: "شروع فعالیت بالینی و مشاوره",
    desc: "در مراکز درمانی و مطب شخصی",
  },
];

export const educations: EducationItem[] = [
  {
    title: "دکتری روانشناسی بالینی",
    desc: "دانشگاه علوم پزشکی تهران - ۱۳۹۶",
    icon: GraduationCap,
  },
  {
    title: "کارشناسی ارشد روانشناسی بالینی",
    desc: "دانشگاه علامه طباطبایی - ۱۳۹۳",
    icon: BookOpen,
  },
  {
    title: "دوره‌های تخصصی",
    desc: "طرحواره‌درمانی، درمان مبتنی بر شفقت و CBT",
    icon: FileText,
  },
  {
    title: "کارگاه‌ها و سمینارها",
    desc: "شرکت در کارگاه‌های تخصصی داخلی و خارجی",
    icon: Users,
  },
];

export const stats: StatItem[] = [
  {
    number: "رضایت بالا",
    text: "از مراجعان",
    icon: HandHeart,
  },
  {
    number: "10+",
    text: "سال تجربه تخصصی",
    icon: BadgeCheck,
  },
  {
    number: "20+",
    text: "مقاله و فعالیت علمی",
    icon: FileText,
  },
  {
    number: "1000+",
    text: "ساعت درمان موفق",
    icon: Users,
  },
];