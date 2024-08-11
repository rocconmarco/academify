import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academify",
  description: "Top-level knowledge shared by the most authoritative sources, powered by blockchain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
