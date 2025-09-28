import Head from "next/head";
import Header from "../components/Header copy 3";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{data.name} - Portfolio</title>
        <meta
          name="description"
          content={`Portfolio professionnel de ${data.name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
