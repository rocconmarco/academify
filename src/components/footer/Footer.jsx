"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-14 md:h-16 w-full flex items-center justify-center bg-black shadow-lg">
      <Link
        href={"https://rocconmarco.github.io/"}
        className="h-full"
        target="_blank"
      >
        <Image className="h-14 md:h-16" src="/alternative-logo-reduced.svg" alt="Marco Roccon" height={64} width={64} />     
      </Link>

      <h1 className="text-white text-center text-sm md:text-[16px]">
        © 2024 Marco Roccon. All rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
