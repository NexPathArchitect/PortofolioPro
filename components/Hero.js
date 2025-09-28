"use client";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const data = portfolioData[language];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        {data.hero.greeting} {data.name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        {data.title}
      </p>
      <p className="text-center max-w-2xl mb-12 text-gray-400">
        {data.hero.description}
      </p>
      <button 
        onClick={scrollToProjects}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        {data.hero.button}
      </button>
    </section>
  );
}