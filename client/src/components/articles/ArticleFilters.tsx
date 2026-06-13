import React from "react";
import type { LucideIcon } from "lucide-react";

export type ArticleCategory = {
  id: string;
  title: string;
  subtitle: string;
  count: string;
  icon: LucideIcon;
};

type ArticleFiltersProps = {
  categories: ArticleCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
};

export default function ArticleFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: ArticleFiltersProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-[22px] border border-[#E9DED1] bg-white/95 shadow-[0_22px_60px_rgba(16,39,65,0.08)] backdrop-blur sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              className={`group relative flex min-h-[122px] flex-col items-center justify-center gap-3 border-b border-[#EFE7DC] px-4 py-5 text-center transition duration-300 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+3)]:border-b-0 lg:border-b-0 lg:border-l lg:last:border-l-0 ${
                isActive
                  ? "bg-[#FBF3E7]"
                  : "bg-white-100 hover:bg-[#FBF8F2]"
              }`}
            >
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full border bg-white-100 shadow-[0_10px_25px_rgba(16,39,65,0.08)] transition duration-300 ${
                  isActive
                    ? "border-[#C49243] text-[#C49243]"
                    : "border-[#EFE7DC] text-[#C49243] group-hover:border-[#C49243]"
                }`}
              >
                <Icon size={29} strokeWidth={1.7} />
              </span>

              <span className="space-y-1">
                <span className="block text-sm font-extrabold text-[#10263D]">
                  {category.title}
                </span>

                <span className="block text-xs text-[#6B7280]">
                  {category.count || category.subtitle}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}