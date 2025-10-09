"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const data = portfolioData[language];

  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false); // 手机菜单状态
  const sections = ["home", "about", "projects", "skills", "contact"];

  // Scroll highlighter
  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";
      sections.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          const elemTop = rect.top;
          const elemBottom = rect.bottom;
          const threshold = window.innerHeight / 2;
          if (elemTop <= threshold && elemBottom >= threshold) {
            current = `#${id}`;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(href); 
      setMenuOpen(false); 
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-colors duration-500">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        {/* Language toggle */}
        <button
          onClick={toggleLanguage}
          className="text-gray-100 hover:text-white text-lg transition-colors duration-300 border border-gray-400 rounded-full px-4 py-1"
        >
          {language === "fr" ? "EN" : "FR"}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 md:space-x-10">
          {sections.map((id) => {
            const labelMap = {
              home: data.nav.home,
              about: data.nav.expertise,
              projects: data.nav.work,
              skills: data.nav.experience,
              contact: data.nav.contact,
            };
            return (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  onClick={(e) => handleScrollTo(e, `#${id}`)}
                  className={`relative text-gray-200 text-lg md:text-xl transition-colors duration-300 hover:text-white
                    ${active === `#${id}` ? "text-indigo-400" : ""}
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                    after:bg-indigo-400 after:transition-all after:duration-300
                    ${active === `#${id}` ? "after:w-full" : ""}
                    hover:after:w-full
                  `}
                >
                  {labelMap[id]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {sections.map((id) => {
            const labelMap = {
              home: data.nav.home,
              about: data.nav.expertise,
              projects: data.nav.work,
              skills: data.nav.experience,
              contact: data.nav.contact,
            };
            return (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  onClick={(e) => handleScrollTo(e, `#${id}`)}
                  className={`block text-gray-200 text-lg transition-colors duration-300 hover:text-white
                    ${active === `#${id}` ? "text-indigo-400" : ""}
                  `}
                >
                  {labelMap[id]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
