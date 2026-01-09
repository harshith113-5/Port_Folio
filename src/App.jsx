import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div className="background-grid" />
      <div className="page-vignette" />

      <div className="bg-blob" aria-hidden="true">
        <div className="blob" style={{ left: "6%", top: "8%", background: "radial-gradient(circle at 30% 30%, #22d3ee, transparent 40%)" }} />
        <div className="blob" style={{ right: "4%", bottom: "8%", background: "radial-gradient(circle at 60% 40%, #8b5cf6, transparent 35%)", opacity: 0.08 }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    </>
  );
}
