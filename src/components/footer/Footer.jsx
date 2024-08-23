"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 w-full flex items-center justify-center bg-black shadow-lg">
      <Link
        href={"https://rocconmarco.github.io/"}
        className="h-full"
        target="_blank"
      >
        <img className="h-full" src="/alternative-logo-reduced.svg" />
      </Link>

      <h1 className="text-white text-center">
        © 2024 Marco Roccon. All rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
