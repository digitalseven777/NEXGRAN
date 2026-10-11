import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PageViewTracker } from "@/components/PageViewTracker";
import { Hero } from "@/sections/Hero";
import { Positioning } from "@/sections/Positioning";
import { Solutions } from "@/sections/Solutions";
import { Applications } from "@/sections/Applications";
import { Differentials } from "@/sections/Differentials";
import { Process } from "@/sections/Process";
import { Portfolio } from "@/sections/Portfolio";
import { Quote } from "@/sections/Quote";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Positioning />
        <Solutions />
        <Applications />
        <Differentials />
        <Process />
        <Portfolio />
        <Quote />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <PageViewTracker />
    </>
  );
}
