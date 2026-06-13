import {
  Brain,
  CloudRain,
  Grid2X2,
  Leaf,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  id: string;
  title: string;
  icon: LucideIcon;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
};

export const categories: Category[] = [
  { id:"1" , title: "همه مقالات", icon: Grid2X2 },
  { id:"2" , title: "سلامت روان", icon: Brain },
  { id:"3" , title: "اضطراب و استرس", icon: CloudRain },
  { id:"4" , title: "افسردگی", icon: Leaf },
  { id:"5" , title: "روابط و خانواده", icon: Users },
  { id:"6" , title: "خودشناسی و رشد فردی", icon: User },
];

export const articles: Article[] = [
  {
    slug: "self-esteem",
    title: "چگونه عزت نفس خود را بهبود دهیم؟",
    category: "خودشناسی و رشد فردی",
    date: "۱۴۰۳/۰۲/۲۴",
    readTime: "۵ دقیقه مطالعه",
    image: "/images/article-1.jpg",
    description:
      "عزت نفس پایه‌ای برای سلامت روان و موفقیت در زندگی است. در این مقاله با راهکارهای عملی آشنا می‌شوید.",
  },
  {
    slug: "depression-diagnosis",
    title: "افسردگی را چگونه تشخیص دهیم؟",
    category: "افسردگی",
    date: "۱۴۰۳/۰۲/۲۰",
    readTime: "۶ دقیقه مطالعه",
    image: "/images/article-2.jpg",
    description:
      "افسردگی فقط غمگینی نیست. در این مطلب علائم مهم افسردگی و زمان مناسب برای کمک گرفتن را بررسی می‌کنیم.",
  },
  {
    slug: "reduce-anxiety",
    title: "۷ راهکار موثر برای کاهش اضطراب",
    category: "اضطراب و استرس",
    date: "۱۴۰۳/۰۲/۱۸",
    readTime: "۷ دقیقه مطالعه",
    image: "/images/article-3.jpg",
    description:
      "اضطراب بخشی از زندگی است، اما وقتی زیاد می‌شود کیفیت زندگی را تحت تاثیر قرار می‌دهد.",
  },
  {
    slug: "effective-relationship",
    title: "ارتباط موثر در رابطه زناشویی",
    category: "روابط و خانواده",
    date: "۱۴۰۳/۰۲/۱۵",
    readTime: "۶ دقیقه مطالعه",
    image: "/images/article-4.jpg",
    description:
      "کلید یک رابطه سالم، ارتباط موثر است. در این مقاله یاد می‌گیریم چگونه بهتر با همسر خود صحبت کنیم.",
  },
  {
    slug: "sleep-and-mental-health",
    title: "چرا خواب کافی برای سلامت روان مهم است؟",
    category: "سلامت روان",
    date: "۱۴۰۳/۰۲/۱۲",
    readTime: "۵ دقیقه مطالعه",
    image: "/images/article-5.jpg",
    description:
      "خواب با کیفیت بر خلق‌وخو، تمرکز و سلامت روان تاثیر مستقیم دارد. با نکات مهم درباره خواب آشنا شوید.",
  },
  {
    slug: "daily-writing",
    title: "نوشتن روزانه چه تاثیری بر ذهن دارد؟",
    category: "خودشناسی و رشد فردی",
    date: "۱۴۰۳/۰۲/۱۰",
    readTime: "۴ دقیقه مطالعه",
    image: "/images/article-6.jpg",
    description:
      "نوشتن افکار و احساسات به کاهش استرس و افزایش خودآگاهی کمک می‌کند. در این مقاله بخوانید چرا.",
  },
];

export const popularArticles = articles.slice(0, 4);