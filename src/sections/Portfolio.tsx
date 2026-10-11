import Image from "next/image";
import { portfolio } from "@/config/content";
import { projects } from "@/config/projects";
import { SectionHead } from "@/components/SectionHead";
import { WhatsAppLink } from "@/components/TrackedLinks";

export function Portfolio() {
  const has = projects.length > 0;
  return (
    <section id="projetos" className="section section--light" aria-labelledby="proj-title">
      <div className="wrap">
        <SectionHead id="proj-title" title={portfolio.title} />
        {has ? (
          <ul className="proj-grid">
            {projects.map((p) => (
              <li key={p.title} className="proj-card">
                <div className="proj-media">
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="media-img" />
                </div>
                <h3>{p.title}</h3>
                <dl>
                  <div><dt>Local</dt><dd>{p.location}</dd></div>
                  <div><dt>Aplicação</dt><dd>{p.application}</dd></div>
                  <div><dt>Área</dt><dd>{p.area}</dd></div>
                  <div><dt>Acabamento</dt><dd>{p.finish}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        ) : (
          <div className="proj-empty">
            <div className="proj-empty-copy">
              <h3>{portfolio.emptyTitle}</h3>
              <p>{portfolio.emptyText}</p>
              <WhatsAppLink context="portfolio" location="projetos" variant="ghost-dark">{portfolio.emptyCta}</WhatsAppLink>
            </div>
            <ul className="proj-slots" aria-hidden="true">
              {[0, 1, 2].map((n) => (
                <li key={n} className="proj-slot">
                  <div className="slot-photo" />
                  <dl>
                    {portfolio.fields.map((f) => (
                      <div key={f}><dt>{f}</dt><dd>—</dd></div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
