"use client";

import React, { useState } from "react";
import ArticleHero from "../components/articles/ArticleHero";
import ArticleContent from "../components/articles/ArticleContent";

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main dir="rtl" className="min-h-screen bg-white-100">
      <ArticleHero
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ArticleContent
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </main>
  );
}