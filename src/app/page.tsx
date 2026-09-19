import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TargetAudience from "@/components/TargetAudience";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Projects />
        <Services />
        <TargetAudience />
        <Process />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
