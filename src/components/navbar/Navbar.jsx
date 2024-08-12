"use client";

import React from "react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected()
    addWalletListener()
  })

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button.")
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChange", (accounts) => {
        setWalletAddress(accounts[0])
        console.log(accounts[0])
      })
    } else {
      setWalletAddress("")
      console.log("Please install Metamask");
    }
  };

  return (
    <nav className="h-16 w-full flex justify-between items-center fixed bg-backgroundColor shadow-lg">
      <picture className="h-16">
        {/*         <source
          srcSet="./academify-logo-reduced.png"
          media="(max-width:767px)"
        /> */}
        <img src="./academify-logo.png" className="h-full px-4" />
      </picture>
      <div className="h-[65%] hidden md:flex gap-6">
        <button>Partners</button>
        <button>Articles</button>
        <button>Faucet</button>
        <button>Docs</button>
        <button>About</button>
        <button
          onClick={connectWallet}
          className="px-4 mr-4 h-full border-2 border-black rounded-lg hover:bg-owlBeige"
        >
          {walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
                0,
                6
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
        </button>
      </div>
      <div className="md:hidden px-4">
        <img src="./burger-menu-icon.png" className="h-12" />
      </div>
    </nav>
  );
};

export default Navbar;
