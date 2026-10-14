import { hero } from "@/config/content";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { MediaFrame } from "@/components/MediaFrame";
import { QuoteLink } from "@/components/TrackedLinks";

export function Hero() {
  const photo = Boolean(images.hero.src);
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-brand">{site.brandDescriptor}</p>
          <h1 id="hero-title" className="hero-title">
            <span className="line"><span>Fulget mineral</span></span>
            <span className="line"><span>aplicado</span></span>
            <span className="line"><span>diretamente</span></span>
            <span className="line"><span>no local.</span></span>
          </h1>
          <p className="hero-sub">{hero.subtitle}</p>
          {site.serviceRegion && <p className="hero-region">Atendimento: {site.serviceRegion}</p>}
          <div className="hero-ctas">
            <QuoteLink location="hero" variant="primary">{hero.primaryCta}</QuoteLink>
            <a href="#aplicacoes" className="btn btn--ghost-light">{hero.secondaryCta}</a>
          </div>
          <ul className="hero-facts">
            {hero.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="slab">
        <MediaFrame slot={images.hero} sizes="(min-width:1024px) 42vw, 100vw" priority seed={3} />
        {!photo && (
          <div className="joints" aria-hidden="true">
            <span className="joint joint-v" style={{ left: "38%" }} />
            <span className="joint joint-v" style={{ left: "71%" }} />
            <span className="joint joint-h" style={{ top: "31%" }} />
            <span className="joint joint-h" style={{ top: "66%" }} />
            <span className="node" style={{ left: "38%", top: "31%" }} />
            <span className="node" style={{ left: "71%", top: "66%" }} />
          </div>
        )}
      </div>

      <a href="#posicionamento" className="scroll-cue" aria-label="Rolar para o próximo conteúdo">
        <span className="scroll-line" aria-hidden="true" />
        <span>Role</span>
      </a>
    </section>
  );
}
