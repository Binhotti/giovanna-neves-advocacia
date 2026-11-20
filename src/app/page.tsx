import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Areas from "@/components/Areas";
import Help from "@/components/Help";
import About from "@/components/About";
import Why from "@/components/Why";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Commitment from "@/components/Commitment";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Areas />
        <Help />
        <About />
        <Why />
        <Process />
        <Faq />
        <Commitment />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
