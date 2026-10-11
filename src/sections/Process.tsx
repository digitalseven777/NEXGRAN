import { process as processContent } from "@/config/content";
import { SectionHead } from "@/components/SectionHead";

export function Process() {
  return (
    <section id="processo" className="section section--dark" aria-labelledby="proc-title">
      <div className="wrap">
        <SectionHead id="proc-title" title={processContent.title} />
        <ol className="steps">
          {processContent.steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="steps-note">{processContent.note}</p>
      </div>
    </section>
  );
}
