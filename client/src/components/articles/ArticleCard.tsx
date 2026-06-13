import React from "react";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../../data/articlesPageData";

type ArticleCardData = (typeof articles)[number];

type ArticleCardProps = {
  article: ArticleCardData;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[22px] border border-cream-200 bg-white-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`/articles/${article.slug}`}
        className="relative block h-[210px] shrink-0 overflow-hidden"
        aria-label={article.title}
      >
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <span className="absolute bottom-4 right-4 rounded-md bg-mustard-200 px-3 py-1.5 text-xs font-bold text-white">
          {article.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link to={`/articles/${article.slug}`}>
          <h3 className="min-h-[64px] text-lg font-extrabold leading-8 transition hover:text-mustard-200">
            {article.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-black-500">
          {article.description}
        </p>

        <div className="mt-auto">
          <div className="mt-6 flex flex-wrap items-center  items-center justify-between  gap-x-4 gap-y-2 pt-4 text-xs text-[#7A8694]">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              {article.date}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock3 size={14} />
              {article.readTime}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap items-center border-t border-cream-200  items-center justify-center text-xs text-[#7A8694]">
            <Link
              to={`/articles/${article.slug}`}
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-black-100 transition hover:text-mustard-100"
            >
              ادامه مطلب
              <ArrowLeft size={17} className="text-mustard-200"/>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}