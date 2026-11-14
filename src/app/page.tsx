import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import Diagnostic from "@/components/Diagnostic";
import About from "@/components/About";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Areas />
        <About />
        <Diagnostic />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
