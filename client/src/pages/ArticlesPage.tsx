"use client";

import React, { useMemo, useState } from "react";
import {
  User,
  Users,
  Leaf,
  CloudRain,
  Brain,
  Grid2X2,
  Search,
  Mail,
  CalendarDays,
  Clock3,
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

type Category = {
  title: string;
  icon: LucideIcon;
};

type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
};

const categories: Category[] = [
  { title: "همه مقالات", icon: Grid2X2 },
  { title: "سلامت روان", icon: Brain },
  { title: "اضطراب و استرس", icon: CloudRain },
  { title: "افسردگی", icon: Leaf },
  { title: "روابط و خانواده", icon: Users },
  { title: "خودشناسی و رشد فردی", icon: User },
];

const articles: Article[] = [
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

const popularArticles = articles.slice(0, 4);

function normalizeText(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/ة/g, "ه")
    .replace(/أ|إ|آ/g, "ا")
    .replace(/\s+/g, " ");
}

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("همه مقالات");

  const getCategoryCount = (categoryTitle: string) => {
    if (categoryTitle === "همه مقالات") return articles.length;
    return articles.filter((article) => article.category === categoryTitle).length;
  };

  const filteredArticles = useMemo(() => {
    const search = normalizeText(searchTerm);

    return articles.filter((article) => {
      const articleText = normalizeText(
        `${article.title} ${article.description} ${article.category}`
      );

      const matchSearch = search === "" || articleText.includes(search);

      const matchCategory =
        activeCategory === "همه مقالات" || article.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main dir="rtl" className="min-h-screen bg-[#F8F4EE] text-[#0B2238]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-28">
        <div className="pointer-events-none absolute left-8 top-4 hidden lg:block">
          <img
            src="/images/blog-hero-decor.jpg"
            alt=""
            className="h-[280px] w-[380px] object-contain"
          />
        </div>

        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">مقالات</h1>

          <div className="mx-auto mt-5 flex w-20 items-center justify-center">
            <span className="h-px w-full bg-[#C49A4A]" />
            <span className="mx-2 h-2 w-2 rounded-full bg-[#C49A4A]" />
            <span className="h-px w-full bg-[#C49A4A]" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#52606D]">
            در این بخش می‌توانید مقالات علمی و کاربردی در حوزه روانشناسی،
            سلامت ذهن و بهبود کیفیت زندگی را مطالعه کنید.
          </p>
        </div>
      </section>

      {/* Category Bar */}
      <section className="relative z-10 -mt-20 px-6">
        <div className="mx-auto max-w-7xl rounded-[26px] border border-[#E7DED2] bg-white px-5 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.07)]">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.title;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveCategory(item.title)}
                  className={`relative rounded-2xl px-4 py-5 text-center transition ${
                    isActive ? "bg-[#F5EDE2]" : "hover:bg-[#FAF7F2]"
                  }`}
                >
                  {index !== categories.length - 1 && (
                    <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-[#E7DED2] lg:block" />
                  )}

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E7DED2] bg-white text-[#C49A4A] shadow-sm">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-4 text-sm font-extrabold">{item.title}</h3>

                  <p className="mt-2 text-xs text-[#7A8694]">
                    {item.title === "همه مقالات"
                      ? "همه موضوعات"
                      : `${getCategoryCount(item.title).toLocaleString("fa-IR")} مقاله`}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12">
        <div
          dir="ltr"
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_330px]"
        >
          {/* Articles */}
          <div dir="rtl">
            <h2 className="text-center text-2xl font-extrabold">
              آخرین مقالات
            </h2>

            <div className="mx-auto mt-4 mb-8 flex w-20 items-center justify-center">
              <span className="h-px w-full bg-[#C49A4A]" />
              <span className="mx-2 h-2 w-2 rounded-full bg-[#C49A4A]" />
              <span className="h-px w-full bg-[#C49A4A]" />
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="overflow-hidden rounded-[22px] border border-[#E7DED2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-[210px] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />

                      <span className="absolute bottom-4 right-4 rounded-md bg-[#C49A4A] px-3 py-1.5 text-xs font-bold text-white">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-extrabold leading-8">
                        {article.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#52606D]">
                        {article.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-[#E7DED2] pt-4 text-xs text-[#7A8694]">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          {article.date}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 size={14} />
                          {article.readTime}
                        </span>
                      </div>

                      <Link
                        to={`/articles/${article.slug}`}
                        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#C49A4A] transition hover:text-[#B18435]"
                      >
                        ادامه مطلب
                        <ArrowLeft size={17} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[26px] border border-[#E7DED2] bg-white p-12 text-center shadow-sm">
                <h3 className="text-2xl font-extrabold">مقاله‌ای پیدا نشد</h3>

                <p className="mt-4 leading-8 text-[#52606D]">
                  لطفاً عبارت دیگری را جستجو کنید یا دسته‌بندی را تغییر دهید.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("همه مقالات");
                  }}
                  className="mt-6 rounded-xl bg-[#C49A4A] px-6 py-3 font-semibold text-white transition hover:bg-[#B18435]"
                >
                  نمایش همه مقالات
                </button>
              </div>
            )}

            {/*Pagination UI
            {filteredArticles.length > 0 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DED2] bg-white text-[#0B2238] transition hover:border-[#C49A4A]">
                  <ChevronRight size={18} />
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C49A4A] text-white">
                  ۱
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DED2] bg-white transition hover:border-[#C49A4A]">
                  ۲
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DED2] bg-white transition hover:border-[#C49A4A]">
                  ۳
                </button>

                <span className="px-1 text-[#7A8694]">...</span>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DED2] bg-white transition hover:border-[#C49A4A]">
                  ۱۰
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E7DED2] bg-white text-[#0B2238] transition hover:border-[#C49A4A]">
                  <ChevronLeft size={18} />
                </button>
              </div>
            )}*/}
          </div>

          {/* Sidebar */}
          <aside dir="rtl" className="space-y-6">
            {/* Search */}
            <div className="rounded-[24px] border border-[#E7DED2] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 rounded-xl border border-[#E7DED2] bg-white px-4">
                <Search size={20} className="text-[#7A8694]" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="جستجو در مقالات..."
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-[#9AA4AF]"
                />
              </div>
            </div>

            {/* Popular Articles */}
            <div className="rounded-[24px] border border-[#E7DED2] bg-white p-7 shadow-sm">
              <h3 className="text-center text-xl font-extrabold">
                مقالات پربازدید
              </h3>

              <div className="mx-auto mt-4 flex w-16 items-center justify-center">
                <span className="h-px w-full bg-[#C49A4A]" />
                <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#C49A4A]" />
                <span className="h-px w-full bg-[#C49A4A]" />
              </div>

              <div className="mt-7 space-y-5">
                {popularArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/articles/${article.slug}`}
                    className="flex gap-4 rounded-xl p-2 transition hover:bg-[#FAF7F2]"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-20 w-24 shrink-0 rounded-xl object-cover"
                    />

                    <div>
                      <h4 className="text-sm font-extrabold leading-7">
                        {article.title}
                      </h4>

                      <p className="mt-1 text-xs text-[#7A8694]">
                        {article.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-[24px] bg-[#061B2E] p-7 text-white shadow-xl">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center text-[#C49A4A]">
                <Mail size={44} strokeWidth={1.3} />
              </div>

              <h3 className="text-center text-2xl font-bold leading-10 text-[#C49A4A]">
                مقالات را از دست ندهید!
              </h3>

              <p className="mt-4 text-center leading-8 text-white/75">
                جدیدترین مطالب و نکات روانشناسی را هر هفته در ایمیل خود دریافت
                کنید.
              </p>

              <div className="mt-6 flex items-center rounded-xl bg-white px-4">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="w-full bg-transparent py-4 text-sm text-[#0B2238] outline-none placeholder:text-[#9AA4AF]"
                />

                <Mail size={18} className="text-[#9AA4AF]" />
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-[#C49A4A] py-4 font-semibold text-white transition hover:bg-[#B18435]"
              >
                عضویت در خبرنامه
              </button>

              <p className="mt-4 text-center text-xs text-white/55">
                اطلاعات شما محفوظ و محرمانه باقی می‌ماند.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom Suggestion Box */}
      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[24px] bg-cream-100 p-7 text-center md:flex-row md:text-right">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#E8D8C0] text-[#B18435]">
              <BookOpen size={36} strokeWidth={1.5} />
            </div>

            <p className="text-lg font-medium leading-9">
              اگر موضوعی مدنظرتان دارید که دوست دارید درباره آن مقاله بنویسم،
              خوشحال می‌شوم پیشنهادات و سوالات خود را از طریق تماس با من مطرح
              کنید.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-xl border border-[#C49A4A] px-8 py-3 font-semibold text-[#B18435] transition hover:bg-[#C49A4A] hover:text-white"
          >
            تماس با من
          </Link>
        </div>
      </section>
    </main>
  );
}