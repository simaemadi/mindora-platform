"use client";

import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Search,
  CalendarDays,
  Clock3,
  User,
  Eye,
  Mail,
  Share2,
  Link as LinkIcon,
  MessageCircle,
  ChevronDown,
  Leaf,
  Brain,
  CloudRain,
  Users,
  Grid2X2,
  BookOpen,
} from "lucide-react";

const categories = [
  { title: "همه مقالات", count: 24, icon: Grid2X2 },
  { title: "سلامت روان", count: 8, icon: Brain },
  { title: "اضطراب و استرس", count: 6, icon: CloudRain },
  { title: "افسردگی", count: 5, icon: Leaf },
  { title: "روابط و خانواده", count: 3, icon: Users },
  { title: "خودشناسی و رشد فردی", count: 5, icon: User },
];

const popularArticles = [
  {
    title: "۷ راهکار موثر برای کاهش اضطراب",
    date: "۱۴۰۳/۰۲/۲۰",
    image: "/images/popular-1.jpg",
  },
  {
    title: "چگونه افکار منفی را مدیریت کنیم؟",
    date: "۱۴۰۳/۰۲/۱۸",
    image: "/images/popular-2.jpg",
  },
  {
    title: "۵ عادت روزانه برای سلامت روان بهتر",
    date: "۱۴۰۳/۰۲/۱۵",
    image: "/images/popular-3.jpg",
  },
];


const articles = [
  {
    slug: "self-esteem",
    title: "چگونه عزت نفس خود را بهبود دهیم؟",
    category: "خودشناسی و رشد فردی",
    date: "۱۴۰۳/۰۲/۲۴",
    readTime: "۵ دقیقه مطالعه",
    views: "۱۲۴۰ بازدید",
    image: "/images/article-detail-hero.jpg",
    intro:
      "عزت نفس یکی از مهم‌ترین عوامل در سلامت روان و موفقیت فردی است. زمانی که عزت نفس پایینی داشته باشیم، در تصمیم‌گیری‌ها، روابط و رضایت کلی از زندگی دچار تردید می‌شویم.",
    sections: [
      {
        title: "عزت نفس چیست؟",
        text: "عزت نفس به معنای ارزشی است که ما برای خود قائل هستیم. این احساس بر اساس باورها، تجربه‌ها و نحوه نگاه ما به خودمان شکل می‌گیرد.",
      },
      {
        title: "چرا عزت نفس اهمیت دارد؟",
        text: "عزت نفس بالا باعث می‌شود در برابر چالش‌ها مقاوم‌تر باشیم، روابط سالم‌تری برقرار کنیم و تصمیم‌های آگاهانه‌تری بگیریم.",
      },
      {
        title: "راهکارهای تقویت عزت نفس",
        text: "اصلاح گفت‌وگوی درونی، توجه به نقاط قوت، پذیرش اشتباهات و تعیین هدف‌های کوچک می‌تواند عزت نفس را به مرور تقویت کند.",
      },
    ],
  },
  {
    slug: "reduce-anxiety",
    title: "۷ راهکار موثر برای کاهش اضطراب",
    category: "اضطراب و استرس",
    date: "۱۴۰۳/۰۲/۱۸",
    readTime: "۷ دقیقه مطالعه",
    views: "۹۸۰ بازدید",
    image: "/images/article-3.jpg",
    intro:
      "اضطراب بخشی طبیعی از زندگی است، اما وقتی شدید و مداوم شود می‌تواند روی کیفیت زندگی، خواب، تمرکز و روابط اثر بگذارد.",
    sections: [
      {
        title: "اضطراب چیست؟",
        text: "اضطراب واکنش ذهن و بدن به تهدید یا نگرانی است. اگر این حالت طولانی شود، نیاز به توجه و مدیریت دارد.",
      },
      {
        title: "راهکارهای کاهش اضطراب",
        text: "تنفس عمیق، ورزش سبک، خواب کافی، نوشتن افکار و کاهش مصرف کافئین می‌تواند به کنترل اضطراب کمک کند.",
      },
      {
        title: "چه زمانی کمک بگیریم؟",
        text: "اگر اضطراب باعث اختلال در کار، روابط یا خواب شده، بهتر است با روانشناس مشورت کنید.",
      },
    ],
  },
  {
    slug: "depression-diagnosis",
    title: "افسردگی را چگونه تشخیص دهیم؟",
    category: "افسردگی",
    date: "۱۴۰۳/۰۲/۲۰",
    readTime: "۶ دقیقه مطالعه",
    views: "۸۶۰ بازدید",
    image: "/images/article-2.jpg",
    intro:
      "افسردگی فقط غمگینی نیست. این حالت می‌تواند با بی‌انرژی بودن، بی‌علاقگی، تغییر خواب، تغییر اشتها و احساس ناامیدی همراه باشد.",
    sections: [
      {
        title: "نشانه‌های افسردگی",
        text: "غم پایدار، بی‌انگیزگی، خستگی، کاهش تمرکز، تغییر خواب و اشتها از نشانه‌های رایج افسردگی هستند.",
      },
      {
        title: "افسردگی چه زمانی جدی است؟",
        text: "وقتی علائم بیش از دو هفته ادامه داشته باشد و عملکرد روزانه را مختل کند، نیاز به بررسی تخصصی دارد.",
      },
      {
        title: "درمان افسردگی",
        text: "روان‌درمانی، اصلاح سبک زندگی و در صورت نیاز درمان دارویی می‌تواند به بهبود افسردگی کمک کند.",
      },
    ],
  },
];

function normalizeText(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/أ|إ|آ/g, "ا")
    .replace(/\s+/g, " ");
}

export default function ArticleDetailsPage() {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const article = articles.find((item) => item.slug === slug);

  const searchResults = useMemo(() => {
    const search = normalizeText(searchTerm);

    if (!search) return [];

    return articles.filter((item) =>
      normalizeText(item.title).includes(search)
    );
  }, [searchTerm]);

  if (!article) {
    return (
      <main dir="rtl" className="min-h-screen bg-[#F8F4EE] px-6 py-20 text-[#0B2238]">
        <div className="mx-auto max-w-3xl rounded-[26px] border border-cream-200 bg-white-100 p-10 text-center shadow-sm">
          <h1 className="text-3xl font-extrabold">مقاله پیدا نشد</h1>
          <p className="mt-4 leading-8 text-black-500">
            آدرس مقاله درست است، اما برای این slug مقاله‌ای تعریف نشده.
          </p>
          <Link
            to="/articles"
            className="mt-7 inline-flex rounded-xl bg-black-300 px-7 py-3 font-bold text-white"
          >
            برگشت به مقالات
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#F8F4EE] text-[#0B2238]">
      <section className="px-6 pt-10 pb-14">
        <div
          dir="ltr"
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_340px]"
        >
          {/* Content Left */}
          <article dir="rtl" className="space-y-7">
            <div className="text-sm text-[#7A8694]">
              خانه <span className="mx-2">›</span> مقالات{" "}
              <span className="mx-2">›</span> {article.category}
            </div>

            <div>
              <span className="rounded-md bg-[#F2E8DA] px-4 py-1.5 text-xs font-bold text-mustard-100">
                {article.category}
              </span>

              <h1 className="mt-5 text-3xl font-extrabold leading-[1.8] md:text-5xl">
                {article.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-[#7A8694]">
                <span className="flex items-center gap-2">
                  <User size={18} className="text-mustard-200" />
                  دکتر نرگس محمدی
                </span>

                <span className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-mustard-200" />
                  {article.date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={18} className="text-mustard-200" />
                  {article.readTime}
                </span>

                <span className="flex items-center gap-2">
                  <Eye size={18} className="text-mustard-200" />
                  {article.views}
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-cream-200 bg-white-100 shadow-sm">
              <img
                src={article.image}
                alt={article.title}
                className="h-[260px] w-full object-cover md:h-[430px]"
              />
            </div>

            <div className="rounded-[24px] border border-cream-200 bg-white-100 p-7 shadow-sm">
              <p className="text-lg leading-10 text-[#263849]">
                {article.intro}
              </p>
            </div>

            <div className="rounded-[24px] border border-cream-200 bg-white-100 p-8 shadow-sm">
              {article.sections.map((section, index) => (
                <section
                  key={section.title}
                  className={`py-7 ${
                    index !== article.sections.length - 1
                      ? "border-b border-cream-200"
                      : ""
                  }`}
                >
                  <h2 className="text-2xl font-extrabold">
                    {(index + 1).toLocaleString("fa-IR")}. {section.title}
                  </h2>

                  <p className="mt-4 leading-10 text-black-500">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>

            <div className="rounded-[24px] border border-cream-200 bg-white-100 p-6 shadow-sm">
              <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                <h3 className="font-extrabold">
                  این مقاله را با دیگران به اشتراک بگذارید
                </h3>

                <div className="flex items-center gap-3">
                  {[MessageCircle,  Share2, LinkIcon].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 text-mustard-200 transition hover:border-mustard-200 hover:bg-[#F2E8DA]"
                      >
                        <Icon size={18} />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar Right */}
          <aside dir="rtl" className="space-y-6">
            <div className="rounded-[24px] border border-cream-200 bg-white-100 p-6 shadow-sm">
              <h3 className="text-center text-xl font-extrabold">
                جستجو در مقالات
              </h3>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-cream-200 bg-white-100 px-4">
                <Search size={20} className="text-[#7A8694]" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="جستجو در مقالات..."
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-[#9AA4AF]"
                />
              </div>

              {searchResults.length > 0 && (
                <div className="mt-4 space-y-2">
                  {searchResults.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/articles/${item.slug}`}
                      className="block rounded-xl bg-[#FAF8F4] px-4 py-3 text-sm font-semibold transition hover:text-mustard-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="rounded-[24px] border border-cream-200 bg-white-100 p-7 shadow-sm">
              <h3 className="text-center text-xl font-extrabold">
                دسته‌بندی مقالات
              </h3>

              <div className="mx-auto mt-4 flex w-16 items-center justify-center">
                <span className="h-px w-full bg-mustard-200" />
                <span className="mx-2 h-1.5 w-1.5 rounded-full bg-mustard-200" />
                <span className="h-px w-full bg-mustard-200" />
              </div>

              <div className="mt-7 space-y-4">
                {categories.map((item) => (
                  <button
                    key={item.title}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                      item.title === "خودشناسی و رشد فردی"
                        ? "bg-[#F5EDE2]"
                        : "hover:bg-[#FAF7F2]"
                    }`}
                  >
                    <span className="font-semibold">{item.title}</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F2E8DA] text-xs font-semibold text-mustard-100">
                      {item.count.toLocaleString("fa-IR")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular */}
            <div className="rounded-[24px] border border-cream-200 bg-white-100 p-7 shadow-sm">
              <h3 className="text-center text-xl font-extrabold">
                مطالب محبوب
              </h3>

              <div className="mx-auto mt-4 flex w-16 items-center justify-center">
                <span className="h-px w-full bg-mustard-200" />
                <span className="mx-2 h-1.5 w-1.5 rounded-full bg-mustard-200" />
                <span className="h-px w-full bg-mustard-200" />
              </div>

              <div className="mt-7 space-y-5">
                {popularArticles.map((item) => (
                  <a key={item.title} href="#" className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-24 rounded-xl object-cover"
                    />

                    <div>
                      <h4 className="text-sm font-extrabold leading-7">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs text-[#7A8694]">
                        {item.date}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>



            <div className="rounded-[24px] bg-black-300 p-7 text-white-100 shadow-xl">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center text-mustard-200">
                <Mail size={44} strokeWidth={1.3} />
              </div>

              <h3 className="text-center text-2xl font-bold leading-10 text-mustard-200">
                از جدیدترین مطالب
                <br />
                آگاه شوید
              </h3>

              <p className="mt-4 text-center leading-8 text-white/75">
                جدیدترین مقالات و نکات روانشناسی را دریافت کنید.
              </p>

              <div className="mt-6 flex items-center rounded-xl bg-white-100 px-4">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="w-full bg-transparent py-4 text-sm text-[#0B2238] outline-none placeholder:text-[#9AA4AF]"
                />
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-mustard-200 py-4 font-semibold text-white-100 transition hover:bg-mustard-100"
              >
                عضویت در خبرنامه
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}