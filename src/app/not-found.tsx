import Link from "next/link";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Page not found - Academify",
    description:
      "Top-level knowledge shared by the most authoritative sources, powered by blockchain technology.",
  };

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-backgroundColor p-8 px-10 pt-24 flex flex-col items-center">
      <img className="h-60" src="/404-icon.png" />
      <p className="mt-2">The page does not exist or is temporarily unavailable.</p>
      <Link href={"/"}>
        <button className="px-4 mt-6 h-12 border-2 border-black rounded-lg hover:bg-owlBeige">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
