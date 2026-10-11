import { quote } from "@/config/content";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHead } from "@/components/SectionHead";
import { WhatsAppLink } from "@/components/TrackedLinks";

export function Quote() {
  return (
    <section id="orcamento" className="section section--paper" aria-labelledby="orc-title">
      <div className="wrap quote-layout">
        <div className="quote-copy">
          <SectionHead id="orc-title" title={quote.title} />
          <p className="lede">{quote.text}</p>
          <WhatsAppLink context="quote" location="orcamento" variant="ghost-dark">{quote.whatsappCta}</WhatsAppLink>
        </div>
        <div className="quote-form">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
