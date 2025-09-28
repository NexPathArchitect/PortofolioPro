"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const data = portfolioData[language];

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm bg-black/30 
                 transform transition-transform duration-500 
                 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex justify-between items-center p-6">
        <button
          onClick={toggleLanguage}
          className="text-gray-100 hover:text-white text-lg transition-colors duration-300 border border-gray-400 rounded-full px-4 py-1"
        >
          {language === "fr" ? "EN" : "FR"}
        </button>

        <ul className="flex space-x-8 md:space-x-10">
          {[
            { href: "#home", label: data.nav.home },
            { href: "#about", label: data.nav.expertise },
            { href: "#projects", label: data.nav.work },
            { href: "#skills", label: data.nav.experience },
            { href: "#contact", label: data.nav.contact },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="relative text-gray-200 hover:text-white text-lg md:text-xl transition-colors duration-300 
                           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                           after:bg-white after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
