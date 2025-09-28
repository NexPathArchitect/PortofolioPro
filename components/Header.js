"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const data = portfolioData[language];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm bg-black/30">
      <nav className="flex justify-between items-center p-6">
       
        <button 
          onClick={toggleLanguage}
          className="text-gray-100 hover:text-white text-lg transition-colors duration-300 border border-gray-400 rounded-full px-4 py-1"
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>

       
        <ul className="flex space-x-8 md:space-x-10">
          <li>
            <Link
              href="#home"
              onClick={(e) => handleScroll(e, '#Home')}
              className="text-gray-100 hover:text-white text-lg md:text-2xl transition-colors duration-300 drop-shadow-lg"
            >
               {data.nav.home} <sup className="text-xs md:text-sm drop-shadow">01</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={(e) => handleScroll(e, '#About')}
              className="text-gray-100 hover:text-white text-lg md:text-2xl transition-colors duration-300 drop-shadow-lg"
            >
               {data.nav.expertise} <sup className="text-xs md:text-sm drop-shadow">02</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={(e) => handleScroll(e, '#Projects')}
              className="text-gray-100 hover:text-white text-lg md:text-2xl transition-colors duration-300 drop-shadow-lg"
            >
               {data.nav.work} <sup className="text-xs md:text-sm drop-shadow">03</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              onClick={(e) => handleScroll(e, '#Skills')}
              className="text-gray-100 hover:text-white text-lg md:text-2xl transition-colors duration-300 drop-shadow-lg"
            >
               {data.nav.experience} <sup className="text-xs md:text-sm drop-shadow">04</sup>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={(e) => handleScroll(e, '#Contact')}
              className="text-gray-100 hover:text-white text-lg md:text-2xl transition-colors duration-300 drop-shadow-lg"
            >
              {data.nav.contact} <sup className="text-xs md:text-sm drop-shadow">05</sup>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}