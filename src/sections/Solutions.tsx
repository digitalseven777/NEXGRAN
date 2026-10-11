import { solutions } from "@/config/content";
import { SectionHead } from "@/components/SectionHead";
import { QuoteLink, WhatsAppLink } from "@/components/TrackedLinks";

export function Solutions() {
  return (
    <section id="solucoes" className="section section--dark" aria-labelledby="sol-title">
      <div className="wrap">
        <SectionHead id="sol-title" title={solutions.title} />
        <div className="sol-grid">
          {solutions.items.map((item) => (
            <article key={item.title} className="sol-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="cta-row">
          <QuoteLink location="solucoes" variant="primary">{solutions.cta}</QuoteLink>
          <WhatsAppLink context="solutions" location="solucoes" variant="ghost-light">Falar pelo WhatsApp</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
