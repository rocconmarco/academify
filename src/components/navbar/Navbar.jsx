import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 w-full flex justify-between items-center fixed bg-backgroundColor shadow-lg">
      <picture className="h-16">
        <source
          srcSet="./academify-logo-reduced.png"
          media="(max-width:767px)"
        />
        <img src="./academify-logo.png" className="h-full px-4" />
      </picture>
      <div className="h-[65%] hidden md:flex gap-6">
        <button>Partners</button>
        <button>Articles</button>
        <button>Faucet</button>
        <button>Docs</button>
        <button>About</button>
        <button className="px-4 mr-4 h-full border-2 border-black rounded-lg hover:bg-owlBeige">
          Connect Wallet
        </button>
      </div>
      <div className="md:hidden px-4">
        <img src="./burger-menu-icon.png" className="h-12" />
      </div>
    </nav>
  );
};

export default Navbar;
