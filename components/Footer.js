"use client";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const data = portfolioData[language];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {currentYear} {data.name}. Tous droits réservés.
        </p>
        <p className="mt-2 text-gray-400">Crée avec Next.js et Tailwind CSS</p>
      </div>
    </footer>
  );
}
