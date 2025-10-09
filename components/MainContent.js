"use client";
import { useLanguage } from "../context/LanguageContext";
import { portfolioData } from "../data/portfolioData";
import HeroMotion from "./HeroMotion";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function MainContent({ defaultOffset = 200, defaultDuration = 1500, defaultAos = "fade-up" }) {
  const { language } = useLanguage();
  const data = portfolioData[language];

  const sections = [
    { component: About }, 
    { component: Projects, offset: 300, duration: 1800, aos: "flip-left" }, 
    { component: Skills }, 
    { component: Contact, duration: 2000 }, 
  ];

  return (
    <div className="min-h-screen text-white bg-black/30">
      <HeroMotion />

      <main className="space-y-20">
        {sections.map((s, i) => {
          const Comp = s.component;
          return (
            <section
              key={i}
              data-aos={s.aos ?? defaultAos}        
              data-aos-offset={s.offset ?? defaultOffset}
              data-aos-duration={s.duration ?? defaultDuration}
            >
              <Comp />
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
