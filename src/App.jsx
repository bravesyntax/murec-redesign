import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Principles from "./components/Principles.jsx";
import Stats from "./components/Stats.jsx";
import Collection from "./components/Collection.jsx";
import Timeline from "./components/Timeline.jsx";
import Company from "./components/Company.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brass focus:text-ink focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Principles />
        <Stats />
        <Collection />
        <Timeline />
        <Company />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
