import { useEffect, useRef } from 'react';
import AOS from 'aos'
import Navbar from './component/navbar/Navbar'
import About from './pages/About';
import Home from "./pages/Home";
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import './App.css'
import Contact from './pages/Contact';

export default function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <>
      <div className="flex">
        <Navbar
          onScroll={(section) => {
            if (section === "home") scrollToSection(homeRef);
            if (section === "about") scrollToSection(aboutRef);
            if (section === "resume") scrollToSection(resumeRef);
            if (section === "protfolio") scrollToSection(portfolioRef);
            if (section === "contact") scrollToSection(contactRef);
          }}
        />
        <div className="flex-1">
          <div ref={homeRef}><Home /></div>
          <div ref={aboutRef}><About /></div>
          <div ref={resumeRef}><Resume /></div>
          <div ref={portfolioRef}><Portfolio /></div>
          <div ref={contactRef}><Contact /></div>
        </div>
      </div >
     
    </>
  );
}
