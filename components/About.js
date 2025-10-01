"use client";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const data = portfolioData[language];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          {data.sections.about}
        </h2>
        <div className="bg-black/30 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
          <p className="text-gray-200 text-lg leading-relaxed mb-6">
            {data.about}
          </p>
          <div className="text-center">
            <a 
              href="/cv/CV_Xuefeng_Hu.pdf" 
              download
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {language === 'fr' ? 'Télécharger mon CV' : 'Download my CV'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}