"use client";

import Link from "next/link";
import React from "react";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { isConnected, address } = useAccount();

  return (
    <nav className="h-16 w-full flex justify-between items-center fixed bg-backgroundColor shadow-lg z-50">
      <Link href={"/"} className="h-16">
        <img src="./academify-logo.png" className="h-full px-4" />
      </Link>

      <div className="h-[65%] hidden md:flex gap-6 items-center">
        <Link href={"/articles"}>
          <button>Articles</button>
        </Link>
        <Link href={"/certify"}>
          <button>Certify</button>
        </Link>
        <Link href={"/publish"}>
          <button>Publish</button>
        </Link>
        <Link href={"/about"}>
          <button>About</button>
        </Link>
        <Link href={"/account"}>
          <button className="px-4 mr-4 h-11 border-2 border-black rounded-lg hover:bg-owlBeige">
            {isConnected
              ? `Connected: ${address.substring(0, 6)}...${address.substring(
                  38
                )}`
              : "Connect Wallet"}
          </button>
        </Link>
      </div>
      <div className="md:hidden px-4">
        <img src="./burger-menu-icon.png" className="h-12" />
      </div>
    </nav>
  );
};

export default Navbar;
