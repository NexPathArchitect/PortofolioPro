"use client";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language } = useLanguage();
  const data = portfolioData[language];

  const skillCategories = [
    { title: language === 'fr' ? "Développement Web" : "Web Development", key: "web" },
    { title: language === 'fr' ? "Data & Analyse" : "Data & Analysis", key: "data" },
    { title: language === 'fr' ? "Langages de Programmation" : "Programming Languages", key: "programming" }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {data.sections.skills}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.key} className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {data.skills[category.key].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white text-sm">{skill.name}</span>
                      <span className="text-blue-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}