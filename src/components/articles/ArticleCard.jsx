"use client"
import Link from "next/link";
import React from "react";

const ArticleCard = ({article}) => {
  return (
    <div className="border-4 border-owlBrown shadow-lg rounded-lg w-[90vw] sm:w-[35rem]">
      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">{article.title}</p>
          <img src={`./${article.articleType}-icon.png`} className="pr-12 h-56 hidden sm:block"></img>
        </div>

        <p className="italic mt-1">{article.author}</p>
        <p className="pt-4">
          <strong>Abstract: </strong>{article.summary}
        </p>
        <p className="text-end pt-4">{article.price} {article.currency}</p>
      </div>
      <div className="flex justify-center items-center p-4 gap-4">
        
        <Link href={`/articles/${article.id}`}>
          <button className="font-bold border-2 border-black hover:bg-owlBeige p-2 px-4 rounded-xl">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
