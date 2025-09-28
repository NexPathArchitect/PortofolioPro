"use client";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const data = portfolioData[language];

  return (
    <div className="min-h-screen text-white bg-black/30">
      <Head>
        <title>{data.name} - Portfolio</title>
        <meta
          name="description"
          content={`Portfolio professionnel de ${data.name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}