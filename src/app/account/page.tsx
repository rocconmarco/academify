import { Metadata } from "next";
import ArticleDetailPageClient from "./client";

export const metadata: Metadata = {
  title: "Account - Academify",
  description:
    "Top-level knowledge shared by the most authoritative sources, powered by blockchain technology.",
};

export default function ArticleDetailPage() {
  return (
    <ArticleDetailPageClient />
  );
}