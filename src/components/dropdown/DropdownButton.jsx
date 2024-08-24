import Image from "next/image";
import React from "react";

const DropdownButton = ({ children, open, toggle }) => {
  return (
    <div onClick={toggle}>
      {children}
      <span className="flex items-center justify-center ml-4">
        {!open ? (
          <Image
            className="h-12 absolute -top-6 right-2"
            src="/burger-menu-icon.png"
            alt="Hamburger menu"
            height={48}
            width={48}
          />
        ) : (
          <Image
            className="h-10 absolute -top-5 right-3"
            src="/close-hamburger-menu-icon.png"
            alt="Close icon"
            height={40}
            width={40}
          />
        )}
      </span>
    </div>
  );
};

export default DropdownButton;
