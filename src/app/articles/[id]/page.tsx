"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import articlesList, { Article } from "@/articles";
import authorsList, { Author } from "@/authors";
import PurchaseModal from "../../../components/modal/PurchaseModal";
import { IoMdArrowBack } from "react-icons/io";
import Image from "next/image";

export default function ArticleDetailPage() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  useEffect(() => {
    const articleId = Number(params.id);
    const foundArticle = articlesList.find((a) => a.id === articleId);
    if (foundArticle) {
      setArticle(foundArticle);
      const foundAuthor = authorsList.find(
        (a) => `${a.firstName} ${a.lastName}` === foundArticle.author
      );
      setAuthor(foundAuthor || null);
    } else {
      setArticle(null);
      setAuthor(null);
    }
  }, [params.id]);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="min-h-screen bg-backgroundColor p-8 px-8 lg:px-10 pt-24 flex flex-col lg:flex-row">
      <div className="w-full lg:w-[65%] lg:mr-32">
        <button onClick={() => window.history.back()}>
          <IoMdArrowBack className="text-2xl" />
        </button>

        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="mb-4">
          <strong>Abstract: </strong>
          {article.summary}
        </p>
        <p className="mb-4">
          <strong>Price:</strong> {article.price} {article.currency}
        </p>
        <p className="mb-4">
          <strong>Language:</strong> {article.language}
        </p>
        <p className="mb-4">
          <strong>Article type:</strong> {article.articleType}
        </p>
        <button
          onClick={() => setPurchaseModalOpen(true)}
          className="font-bold border-2 border-black hover:bg-owlBeige p-2 px-4 rounded-xl"
        >
          Get Article
        </button>
        <PurchaseModal
          handleClose={() => setPurchaseModalOpen(false)}
          isOpen={purchaseModalOpen}
          article={article}
          author={author}
        ></PurchaseModal>
      </div>
      <div className="w-full lg:w-[35%]">
        {author && (
          <div className="mt-8">
            <h2 className="text-2xl text-center font-bold mb-2">
              {author.firstName} {author.lastName}
            </h2>
            <div className="flex justify-center">
              <Image
                src={`/authors/${author.firstName}-${author.lastName}.jpg`}
                alt={`${author.firstName} ${author.lastName}`}
                width={300}
                height={300}
                className="rounded-full mt-4"
              />
            </div>
            <p className="mt-6 text-wrap">{author.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}
