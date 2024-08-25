import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academify",
  description:
    "Breaking down traditional barriers to high-quality education through the security and transparency of blockchain technology.",
    openGraph: {
      url:"",
      type:"website",
      title:"Academify",
      description:"Breaking down traditional barriers to high-quality education through the security and transparency of blockchain technology.",
      images: [
        {
          url:"/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Academify OpenGraph Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Academify",
      description: "Breaking down traditional barriers to high-quality education through the security and transparency of blockchain technology.",
      images: [
        {
          url:"/opengraph-image.png",
          alt: "Academify Twitter Image",
        }
      ] 
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
