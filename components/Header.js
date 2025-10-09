"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const data = portfolioData[language];

  const [active, setActive] = useState("#home");
  const sections = ["home", "about", "projects", "skills", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";
      sections.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          const elemTop = rect.top;
          const elemBottom = rect.bottom;
          const threshold = window.innerHeight / 2; // 视口中点
          if (elemTop <= threshold && elemBottom >= threshold) {
            current = `#${id}`;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(href); // 点击立即高亮
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-colors duration-500">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
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
                className={`
                  relative text-gray-200 text-lg md:text-xl transition-colors duration-300
                  hover:text-white
                  ${active === item.href ? "text-indigo-400" : ""}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                  after:bg-indigo-400 after:transition-all after:duration-300
                  ${active === item.href ? "after:w-full" : ""}
                  hover:after:w-full
                `}
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
