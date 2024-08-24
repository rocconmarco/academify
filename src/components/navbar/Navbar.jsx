"use client";

import Link from "next/link";
import React from "react";
import { useAccount } from "wagmi";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import Image from "next/image";

const Navbar = () => {
  const { isConnected, address } = useAccount();

  return (
    <nav className="h-16 w-full flex justify-between items-center fixed bg-backgroundColor shadow-lg z-50">
      <Link href={"/"} className="h-16">
        <Image
          className="h-full px-4"
          src="/academify-logo.png"
          alt="Academify logo"
          width={220}
          height={64}
        />
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
      <div className="md:hidden w-full absolute cursor-pointer">
        <Dropdown
          content={
            <>
              <Link href={"/articles"}>
                <DropdownItem>Articles</DropdownItem>
              </Link>
              <Link href={"/certify"}>
                <DropdownItem>Certify</DropdownItem>
              </Link>
              <Link href={"/publish"}>
                <DropdownItem>Publish</DropdownItem>
              </Link>
              <Link href={"/about"}>
                <DropdownItem>About</DropdownItem>
              </Link>
              <Link href={"/account"}>
                <DropdownItem>
                  {isConnected
                    ? `Connected: ${address.substring(
                        0,
                        6
                      )}...${address.substring(38)}`
                    : "Connect Wallet"}
                </DropdownItem>
              </Link>
            </>
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
