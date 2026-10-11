import { differentials } from "@/config/content";
import { SectionHead } from "@/components/SectionHead";

export function Differentials() {
  return (
    <section id="diferenciais" className="section section--tint" aria-labelledby="dif-title">
      <div className="wrap dif-layout">
        <SectionHead id="dif-title" title={differentials.title} className="dif-head" />
        <div className="dif-grid">
          {differentials.items.map((item) => (
            <article key={item.title} className="dif-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
