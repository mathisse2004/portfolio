import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Highlights from "../components/sections/Highlights";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects.jsx";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function PortfolioPage({ vm }) {
  return (
    <div id="top" className="page">
      <Navbar items={vm.navItems} activeId={vm.activeId} onNavigate={vm.scrollTo} />

      <main className="container">
        <Hero profile={vm.profile} highlights={vm.highlights} />
        <Skills skills={vm.profile.skills} />
        <Projects projects={vm.profile.projects} />
        <About about={vm.profile.about} />
        <Contact email={vm.profile.email} />
        <Footer name={vm.profile.name} />
      </main>
    </div>
  );
}
