"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/smart sales.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // גובה ה-Navbar
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`sticky z-50 font-rubik transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white top-0 text-black shadow-md border-b border-black"
          : "bg-transparent md:top-5 top-0 text-black"
      }`}
      style={{ direction: "rtl" }}
    >
      <div className="w-5/6 mx-auto">
        <div className="flex items-center justify-between w-full h-20">
          {/* לוגו */}
          <Link href="#home" className="flex">
            <Image
              src={Logo}
              alt="Smart Sales Logo"
              className="h-auto w-16 md:w-20 md:h-auto"
            />
          </Link>

          {/* כפתור המבורגר במובייל */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black hover:text-[#092274] focus:outline-none"
          >
            <svg
              className="h-10 w-10"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* תפריט דסקטופ */}
          <div className="hidden md:flex items-center space-x-reverse space-x-14">
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-[#092274] text-lg font-bold"
            >
              מי אנחנו
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-black hover:text-[#092274] text-lg font-bold"
            >
              שאלות נפוצות
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-[#092274] text-lg font-bold"
            >
              יצירת קשר
            </button>
          </div>
        </div>
      </div>

      {/* תפריט מובייל */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white text-black transition-all duration-300 border-b shadow-md z-50">
          <div className="text-right w-full">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-lg py-3 pr-10 border-b text-right border-gray-300 w-full hover:text-[#092274] font-medium"
            >
              מי אנחנו
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block text-lg py-3 pr-10 border-b text-right border-gray-300 w-full hover:text-[#092274] font-medium"
            >
              שאלות נפוצות
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-lg py-3 pr-10 w-full text-right hover:text-[#092274] font-medium"
            >
              יצירת קשר
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
