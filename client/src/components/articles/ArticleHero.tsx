import React, { useState } from "react";
import { categories, articles } from "../../data/articlesPageData";
type ArticleHeroProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};


export default function ArticleHero({
  activeCategory,
  onCategoryChange,
}: ArticleHeroProps) {

  const getCategoryCount = (categoryTitle: any) => {
    if (categoryTitle === "همه مقالات") return articles.length;

    return articles.filter((article) => article.category === categoryTitle.title)
      .length;
  };

  return (
    <section className="relative bg-[#FAF8F3] px-6 pt-16 pb-[15rem] h-[470px] md:h-[320px]">
      {/* Decorative image */}
      <div className="pointer-events-none absolute left-8 top-0 z-0">
        <img
          src="/images/blog-hero-decor.jpg"
          alt=""
          className="h-[270px] w-[330px] object-contain object-left-top"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto text-center">

        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            مقالات
          </h1>

          <div className="mx-auto mt-5 flex w-28 items-center justify-center">
            <span className="h-px flex-1 bg-mustard-300" />
            <span className="mx-3 h-2 w-2 rounded-full bg-mustard-300" />
            <span className="h-px flex-1 bg-mustard-300" />
          </div>

          <div className="mx-auto max-w-2xl text-base leading-8 text-[#10263D]">
            <p className="mt-6">
              در این بخش می‌توانید مقالات علمی و کاربردی در حوزه روانشناسی،
            </p>
            <p className="mb-6">
              سلامت ذهن و بهبود کیفیت زندگی را مطالعه کنید.
            </p>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="absolute left-0 right-0  z-20 mx-auto mx-12 overflow-hidden rounded-[26px] border border-[#E8DED1] bg-white-100 px-6 shadow-[0_20px_55px_rgba(16,39,65,0.08)]">
        <div className="grid grid-cols-3 gap-3 bg-white md:grid-cols-6 lg:grid-cols-6">
          {categories.map((item: any, index) => {
            const Icon = item.icon;
            const isActive = activeCategory === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onCategoryChange(item.id)}
                className="relative rounded-2xl bg-white px-4 py-3 text-center transition hover:bg-white"
              >
                {index !== categories.length - 1 && (
                  <span className="absolute left-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-[#E8DED1] lg:block" />
                )}

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border bg-white shadow-sm transition ${isActive
                    ? "border-mustard-200 text-mustard-200"
                    : "border-[#E8DED1] text-mustard-200"
                    }`}
                >
                  <Icon size={34} strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 text-sm font-extrabold text-[#10263D]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-[#7A8694]">
                  {item.id === "all" || item.title === "همه مقالات"
                    ? "همه موضوعات"
                    : `${getCategoryCount(item).toLocaleString("fa-IR")} مقاله`}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}