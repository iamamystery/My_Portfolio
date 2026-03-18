import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Authority from "@/components/sections/Authority";
import About from "@/components/sections/About";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Projects />
        <Authority />
        <About />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </>
  );
}
