import { faq } from "@/config/content";
import { SectionHead } from "@/components/SectionHead";

export function Faq() {
  return (
    <section id="faq" className="section section--light" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <SectionHead id="faq-title" title={faq.title} className="faq-head" />
        <div className="faq-list">
          {faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <h3>{item.q}</h3>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
