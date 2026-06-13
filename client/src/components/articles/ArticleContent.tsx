import React, { useMemo, useState } from "react";
import { articles, popularArticles, categories } from "../../data/articlesPageData";
import { Link } from "react-router-dom";
import {
    Search,
    Mail
} from "lucide-react";
import ArticleCard from "./ArticleCard";

type ArticleContentProps = {
    activeCategory: string;
    onCategoryChange: (categoryId: string) => void;
};


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

export default function ArticleContent({
    activeCategory,
    onCategoryChange,
}: ArticleContentProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const selectedCategory = useMemo(() => {
        return categories.find(
            (category) =>
                category.id === activeCategory || category.title === activeCategory
        );
    }, [activeCategory]);

    const filteredArticles = useMemo(() => {
        const search = normalizeText(searchTerm);

        const isAllCategory =
            activeCategory === "all" ||
            activeCategory === "همه مقالات" ||
            selectedCategory?.id === "all" ||
            selectedCategory?.title === "همه مقالات";

        return articles.filter((article) => {
            const articleText = normalizeText(
                `${article.title} ${article.description} ${article.category}`
            );

            const matchSearch = search === "" || articleText.includes(search);

            const matchCategory =
                isAllCategory ||
                article.category === selectedCategory?.title ||
                article.category === activeCategory;

            return matchSearch && matchCategory;
        });
    }, [searchTerm, activeCategory, selectedCategory]);

    const handleResetFilters = () => {
        setSearchTerm("");
        onCategoryChange("all");
    };

    return (
        <section className="px-6 pb-12 pt-32">
            <div
                dir="ltr"
                className="mx-auto grid max-w-8xl gap-8 lg:grid-cols-[1fr_330px] px-10"
            >
                {/* Articles */}
                <div dir="rtl">
                    <h2 className="text-center text-2xl font-extrabold">
                        آخرین مقالات
                    </h2>
                    <div className="mx-auto my-5 flex w-16 items-center justify-center">
                        <span className="h-px flex-1 bg-mustard-200" />
                        <span className="mx-2 h-1.5 w-1.5 rounded-full bg-mustard-200" />
                        <span className="h-px flex-1 bg-mustard-200" />
                    </div>
                    {/* Search */}
                    <div className="flex items-center rounded-xl border border-cream-200 bg-white-100 px-4 mb-8">
                        <Search size={20} className="text-black-500 " />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="جستجو در مقالات..."
                            className="w-full bg-transparent py-4 pr-4 text-sm outline-none placeholder:text-black-500"
                        />
                    </div>
                    {filteredArticles.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {filteredArticles.map((article) => (
                                <ArticleCard key={article.slug} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[26px] border border-cream-200 bg-white-100 p-12 text-center shadow-sm">
                            <h3 className="text-2xl font-extrabold">مقاله‌ای پیدا نشد</h3>

                            <p className="mt-4 leading-8 text-black-500">
                                لطفاً عبارت دیگری را جستجو کنید یا دسته‌بندی را تغییر دهید.
                            </p>

                            <button
                                type="button"
                                onClick={handleResetFilters}
                                className="mt-6 rounded-xl bg-mustard-200 px-6 py-3 font-semibold text-white-100 transition hover:bg-mustard-100"
                            >
                                نمایش همه مقالات
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside dir="rtl" className="space-y-6">
                    {/* Popular Articles */}
                    <div className="rounded-[24px] border border-cream-200 bg-white-100 p-7 shadow-sm">
                        <h3 className="text-center text-xl font-extrabold">
                            مقالات پربازدید
                        </h3>
                        <div className="mx-auto my-5 flex w-16 items-center justify-center">
                            <span className="h-px flex-1 bg-mustard-200" />
                            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-mustard-200" />
                            <span className="h-px flex-1 bg-mustard-200" />
                        </div>
                        <div className="mt-7 space-y-5">
                            {popularArticles.map((article) => (
                                <Link
                                    key={article.slug}
                                    to={`/articles/${article.slug}`}
                                    className="flex gap-4 rounded-xl p-2 transition hover:bg-cream-400"
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

                                        <p className="mt-1 text-xs text-black-500">
                                            {article.readTime}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="rounded-[24px] bg-blue-100 p-7 text-white-100 shadow-xl">
                        <h3 className="text-center text-2xl font-bold leading-10 text-mustard-200">
                            مقالات را از دست ندهید!
                        </h3>
                        <div className="mx-auto my-5 flex w-16 items-center justify-center">
                            <span className="h-px flex-1 bg-mustard-200" />
                            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-mustard-200" />
                            <span className="h-px flex-1 bg-mustard-200" />
                        </div>
                        <p className="mt-4 text-center leading-8 text-white-100/75">
                            جدیدترین مطالب و نکات روانشناسی را هر هفته در ایمیل خود دریافت
                            کنید.
                        </p>

                        <div className="mt-6 flex items-center rounded-xl bg-white-100 px-4">
                            <Mail size={18} className="text-black-500" />
                            <input
                                type="email"
                                placeholder="ایمیل شما"
                                className="w-full bg-transparent py-4 px-2 text-sm text-black-600 outline-none placeholder:text-black-500"
                            />

                        </div>

                        <button
                            type="button"
                            className="mt-4 w-full rounded-xl bg-mustard-200 py-4 font-semibold text-white-100 transition hover:bg-mustard-100"
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
    )
}