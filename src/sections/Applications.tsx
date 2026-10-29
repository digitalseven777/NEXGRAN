import { applications } from "@/config/content";
import { images } from "@/config/images";
import { MediaFrame } from "@/components/MediaFrame";
import { SectionHead } from "@/components/SectionHead";
import { QuoteLink } from "@/components/TrackedLinks";

export function Applications() {
  return (
    <section id="aplicacoes" className="section section--light" aria-labelledby="app-title">
      <div className="wrap">
        <SectionHead id="app-title" title={applications.title}>
          <p className="sec-intro">{applications.intro}</p>
        </SectionHead>
        <ul className="app-grid">
          {applications.items.map((item, i) => (
            <li key={item.key} className="app-tile">
              <figure>
                <div className="app-media">
                  <MediaFrame slot={images.applications[item.key]} seed={i + 2} sizes="(min-width:1024px) 33vw, 50vw" quiet />
                </div>
                <figcaption>{item.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="app-note">Fotos de aplicações realizadas pela NEXGRAN. O fulget é executado diretamente no local, após avaliação e preparação da superfície.</p>
        <div className="cta-row">
          <QuoteLink location="aplicacoes" variant="primary">{applications.cta}</QuoteLink>
        </div>
      </div>
    </section>
  );
}
