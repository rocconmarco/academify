"use client";

import React from "react";
import ArticleCard from "../../components/articles/ArticleCard";
import articlesList from "@/articles";

export default function ArticlesPage() {
  const currentArticlesList = articlesList;

  return (
    <div className="min-h-screen bg-backgroundColor">
      <div className="flex justify-center">
        <h1 className="pt-24 text-4xl font-extrabold">Articles</h1>
      </div>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {currentArticlesList.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
