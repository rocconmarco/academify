"use client";

import React, { useState, useEffect, useRef } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

const Dropdown = ({ content }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open}>
      </DropdownButton>
      <DropdownContent open={open} toggle={toggleDropdown}>{content}</DropdownContent>
    </div>
  );
};

export default Dropdown;
