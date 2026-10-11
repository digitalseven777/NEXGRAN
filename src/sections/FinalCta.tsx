import { finalCta } from "@/config/content";
import { images } from "@/config/images";
import { MediaFrame } from "@/components/MediaFrame";
import { QuoteLink, WhatsAppLink } from "@/components/TrackedLinks";

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="final-bg"><MediaFrame slot={images.finalCta} seed={7} sizes="100vw" quiet /></div>
      <div className="wrap final-inner">
        <h2 id="final-title">{finalCta.title}</h2>
        <p>{finalCta.text}</p>
        <div className="cta-row">
          <QuoteLink location="cta-final" variant="primary">{finalCta.primary}</QuoteLink>
          <WhatsAppLink context="finalCta" location="cta-final" variant="ghost-light">{finalCta.secondary}</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
