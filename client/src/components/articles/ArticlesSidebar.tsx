import React from "react";
import { Mail, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export type PopularArticleData = {
  id: number;
  slug: string;
  title: string;
  image: string;
  readTime: string;
};

type ArticlesSidebarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  popularArticles: PopularArticleData[];
};

export default function ArticlesSidebar({
  searchQuery,
  onSearchChange,
  popularArticles,
}: ArticlesSidebarProps) {
  return (
    <aside className="space-y-6" dir="rtl">
      <div className="rounded-2xl border border-[#E9DED1] bg-white-100 p-5 shadow-[0_16px_40px_rgba(16,39,65,0.06)]">
        <label className="relative block">
          <Search
            size={20}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
          />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="جستجو در مقالات..."
            className="h-12 w-full rounded-xl border border-[#E9DED1] bg-white-100 pr-12 pl-4 text-sm text-[#10263D] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C49243] focus:ring-4 focus:ring-[#C49243]/10"
          />
        </label>
      </div>

      <div className="rounded-2xl border border-[#E9DED1] bg-white-100 p-6 shadow-[0_16px_40px_rgba(16,39,65,0.06)]">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-extrabold text-[#10263D]">
            مقالات پربازدید
          </h2>

          <span className="mx-auto mt-3 block h-px w-14 bg-[#C49243]" />
          <span className="mx-auto -mt-1 block h-2 w-2 rounded-full bg-[#C49243]" />
        </div>

        <div className="space-y-5">
          {popularArticles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group flex gap-4"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-20 w-20 shrink-0 rounded-xl object-cover shadow-sm"
              />

              <span className="flex min-w-0 flex-1 flex-col justify-center">
                <span className="line-clamp-2 text-sm font-extrabold leading-6 text-[#10263D] transition group-hover:text-[#C49243]">
                  {article.title}
                </span>

                <span className="mt-2 text-xs text-[#7B8794]">
                  {article.readTime}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-[#06263D] p-6 text-white-100 shadow-[0_22px_55px_rgba(6,38,61,0.22)]">
        <div className="relative z-10">
          <h2 className="text-lg font-extrabold text-[#D29A42]">
            مقالات را از دست ندهید!
          </h2>

          <span className="mt-4 block h-px w-20 bg-[#D29A42]" />

          <p className="mt-5 text-sm leading-7 text-white/85">
            جدیدترین مطالب و نکات روانشناسی را هر هفته در ایمیل خود دریافت
            کنید.
          </p>

          <form
            className="mt-6 space-y-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="relative block">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B8794]"
              />

              <input
                type="email"
                placeholder="ایمیل شما"
                className="h-12 w-full rounded-xl border border-white/15 bg-white-100 pr-4 pl-11 text-sm text-[#10263D] outline-none transition placeholder:text-[#9CA3AF] focus:ring-4 focus:ring-white/10"
              />
            </label>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#C49243] text-sm font-extrabold text-white-100 transition hover:bg-[#B58031]"
            >
              عضویت در خبرنامه
            </button>
          </form>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/70">
            <ShieldCheck size={15} className="text-[#D29A42]" />
            اطلاعات شما محفوظ و محرمانه باقی می‌ماند.
          </p>
        </div>
      </div>
    </aside>
  );
}